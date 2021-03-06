## Graphback Apollo+PostgreSQL Runtime Template

Template showcases Graphback Runtime capabilities using
resolver layer created in-memory as opposed to codegeneration.

Serverless example can be build as docker image with configurable volume for models. 
This models will be processed at application at startup giving fully featured GraphQL Server 
following Graphback CRUD specification.

For more information please refer to: 

### Running example

The project has been created using `graphback`. Run the project using the following steps.

- Start the database

```
docker-compose up -d
```

- Define your schema in the `model/runtime.graphql` file. Or use the default:

```
type User {
  id: ID!
  name: String
}
```

- Start the server

```
npm run develop
```

Or, if using yarn

```
yarn develop
```

For more on customising your Graphback application, check out [our docs](https://graphback.dev/docs/gettingstarted)

If your project contains client application please follow `./client/README.md` for running client side application

## Re-generating types from schema

If you made made changes to your business model, it's advised to regenerate the `generated-types.ts` which contains Typescript file of your business entities. 

To do so, we'll first need to update the generated `schema.graphql` file with the following command:

```
yarn graphback generate
```

Then generate the `generated-types.ts` file with the following command:

```
yarn codegen
```