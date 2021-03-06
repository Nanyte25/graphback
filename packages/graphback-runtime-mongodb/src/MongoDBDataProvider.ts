import { ObjectId, Db, Cursor } from "mongodb"
import { QueryFilter, ModelTableMap, buildModelTableMap, getDatabaseArguments, GraphbackDataProvider, FieldTransformMap, getFieldTransformations, TransformType, FieldTransform, GraphbackOrderBy, GraphbackPage, NoDataError, ModelDefinition, FieldDescriptor, FindByArgs } from '@graphback/core';
import { parseMetadata } from "graphql-metadata";
import { buildQuery } from './queryBuilder'
import { findAndCreateIndexes } from "./utils/createIndexes";

interface SortOrder {
  [fieldName: string]: 1 | -1;
}

/**
 * Graphback provider that connnects to the MongoDB database
 */
export class MongoDBDataProvider<Type = any> implements GraphbackDataProvider<Type>{
  protected db: Db;
  protected collectionName: string;
  protected tableMap: ModelTableMap;
  protected fieldTransformMap: FieldTransformMap;
  protected coerceTSFields: boolean;

  public constructor(model: ModelDefinition, db: any) {
    this.verifyMongoDBPrimaryKey(model.graphqlType.name, model.primaryKey);
    this.db = db;
    this.tableMap = buildModelTableMap(model.graphqlType);
    this.collectionName = this.tableMap.tableName;
    this.fieldTransformMap = getFieldTransformations(model.graphqlType);
    this.coerceTSFields = parseMetadata("versioned", model.graphqlType);
    findAndCreateIndexes(model.graphqlType, this.db.collection(this.collectionName)).catch((e: Error) => {
      throw e
    })
  }

  public async create(data: Type): Promise<Type> {
    const { idField } = getDatabaseArguments(this.tableMap, data);
    if (data && data[idField.name]) {
      // Ignore id passed from client side. In case id is passed it should not be saved
      // eslint-disable-next-line @typescript-eslint/tslint/config
      delete data[idField.name];
    }

    this.fieldTransformMap[TransformType.CREATE]
      .forEach((f: FieldTransform) => {
        data[f.fieldName] = f.transform(f.fieldName);
      });

    const result = await this.db.collection(this.collectionName).insertOne(data);
    if (result && result.ops) {
      return result.ops[0];
    }
    throw new NoDataError(`Cannot create ${this.collectionName}`);
  }

  public async update(data: Partial<Type>, selectedFields?: string[]): Promise<Type> {
    const { idField } = getDatabaseArguments(this.tableMap, data);

    if (!idField.value) {
      throw new NoDataError(`Cannot update ${this.collectionName} - missing ID field`)
    }

    this.fieldTransformMap[TransformType.UPDATE]
      .forEach((f: FieldTransform) => {
        data[f.fieldName] = f.transform(f.fieldName);
      });

    const objectId = new ObjectId(idField.value);
    const result = await this.db.collection(this.collectionName).updateOne({ _id: objectId }, { $set: data });
    if (result) {
      const projection = this.buildProjectionOption(selectedFields);
      const queryResult = await this.db.collection(this.collectionName).find({ _id: objectId }, { projection }).toArray();
      if (queryResult && queryResult[0]) {
        const res: unknown = queryResult[0];

        return res as Type;
      }
    }
    throw new NoDataError(`Cannot update ${this.collectionName}`);
  }

  public async delete(data: Partial<Type>, selectedFields?: string[]): Promise<Type> {
    const { idField } = getDatabaseArguments(this.tableMap, data);

    if (!idField.value) {
      throw new NoDataError(`Cannot delete ${this.collectionName} - missing ID field`)
    }

    const projection = this.buildProjectionOption(selectedFields);
    const objectId = new ObjectId(idField.value);
    const queryResult = await this.db.collection(this.collectionName).findOne({ _id: objectId }, { projection });
    if (queryResult) {
      const result = await this.db.collection(this.collectionName).deleteOne({ _id: objectId });
      if (result.result.ok) {
        const res: unknown = queryResult;

        return res as Type;
      }
    }
    throw new NoDataError(`Cannot update ${this.collectionName}`);
  }

  public async findOne(filter: Partial<Type>, selectedFields?: string[]): Promise<Type> {
    const projection = this.buildProjectionOption(selectedFields);
    const query = this.db.collection(this.collectionName).findOne(filter, { projection });
    const data = await query;

    if (data) {
      const res: unknown = data;

      return res as Type;
    }

    throw new NoDataError(`Cannot find a result for ${this.collectionName} with filter: ${JSON.stringify(filter)}`);
  }

  public async findBy(args?: FindByArgs, selectedFields?: string[]): Promise<Type[]> {
    const projection = this.buildProjectionOption(selectedFields);
    const query = this.db.collection(this.collectionName).find(buildQuery(args?.filter, this.coerceTSFields), { projection });
    const data = await this.usePage(this.sortQuery(query, args?.orderBy), args?.page);

    if (data) {
      return data;
    }

    throw new NoDataError(`Cannot find all results for ${this.collectionName} with filter: ${JSON.stringify(args?.filter)}`);
  }

  public async count(filter?: QueryFilter): Promise<number> {
    return this.db.collection(this.collectionName).countDocuments(buildQuery(filter, this.coerceTSFields));
  }

  public async batchRead(relationField: string, ids: string[], filter?: QueryFilter, selectedFields?: string[]): Promise<Type[][]> {
    const projection = this.buildProjectionOption(selectedFields);
    filter = filter || {};
    filter[relationField] = { $in: ids };

    const result = await this.db.collection(this.collectionName).find(buildQuery(filter, this.coerceTSFields), { projection }).toArray();

    if (result) {
      const resultsById = ids.map((objId: string) => {
        const objectsForId: any = [];
        for (const data of result) {
          if (data[relationField].toString() === objId.toString()) {
            objectsForId.push(data);
          }
        }

        return objectsForId;
      });

      return resultsById as [Type[]];
    }

    throw new NoDataError(`No results for ${this.collectionName} query and batch read with filter: ${JSON.stringify(filter)}`);

  }

  protected buildProjectionOption(selectedFields: string[]) {
    if (!selectedFields?.length) {
      return undefined;
    }

    return selectedFields
      .reduce((acc: Record<string, any>, field: string) => {
        return {
          ...acc,
          [field]: 1
        }
      }, {});
  }

  private verifyMongoDBPrimaryKey(modelName: string, primaryKey: FieldDescriptor) {
    if (primaryKey.name === "_id" && primaryKey.type === "GraphbackObjectID") {
      return;
    }
    throw Error(`Model "${modelName}" must contain a "_id: GraphbackObjectID" primary key. Visit https://graphback.dev/docs/model/datamodel#mongodb to see how to set up one for your MongoDB model.`);
  }

  private sortQuery(query: Cursor<any>, orderBy: GraphbackOrderBy): Cursor<any> {
    const sortOrder: SortOrder = {};
    if (orderBy) {
      if (orderBy.field) {
        sortOrder[orderBy.field] = 1;
      }
      if (orderBy.order) {
        if (orderBy.order.toLowerCase() === 'desc') {
          sortOrder[orderBy.field] = -1;
        }
      }

    }

    return query.sort(sortOrder);
  }

  private usePage(query: Cursor<any>, page?: GraphbackPage) {
    if (!page) {
      return query.toArray();
    }

    const { offset, limit } = page

    if (offset < 0) {
      throw new Error("Invalid offset value. Please use an offset of greater than or equal to 0 in queries")
    }

    if (limit < 1) {
      throw new Error("Invalid limit value. Please use a limit of greater than 1 in queries")
    }

    if (limit) {
      query = query.limit(limit)
    }
    if (offset) {
      query = query.skip(offset)
    }

    return query.toArray();
  }
}
