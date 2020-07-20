/*! For license information please see 7058d004.2e89c90d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(6),i=(n(271),n(270)),l={id:"annotations",title:"Annotations",sidebar_label:"Annotations"},o={id:"model/annotations",isDocsHomePage:!1,title:"Annotations",description:"@model",source:"@site/../docs/model/annotations.md",permalink:"/docs/next/model/annotations",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/model/annotations.md",version:"next",sidebar_label:"Annotations",sidebar:"docs",previous:{title:"Data Model",permalink:"/docs/next/model/datamodel"},next:{title:"CRUD Overview",permalink:"/docs/next/crud/overview"},latestVersionMainDocPermalink:"/docs/introduction"},b=[{value:"@model",id:"model",children:[]},{value:"@oneToMany",id:"onetomany",children:[]},{value:"@oneToOne",id:"onetoone",children:[]},{value:"@index",id:"index",children:[]},{value:"PostgreSQL",id:"postgresql",children:[{value:"@id",id:"id",children:[]},{value:"@index",id:"index-1",children:[]},{value:"@db",id:"db",children:[]},{value:"@default",id:"default",children:[]}]},{value:"MongoDB",id:"mongodb",children:[{value:"@index",id:"index-2",children:[]},{value:"@versioned",id:"versioned",children:[]}]}],c={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"model"},"@model"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@model")," annotation is at the core of the Graphback's model definition syntax. It tells Graphback if a type should be considered part of the data model i.e. a table in a relational database or a collection in MongoDB."),Object(i.b)("p",null,"It also tells Graphback about what queries and mutations it needs to generate for a type. For Graphback to autogenerate type definitions and resolvers, there must be at least one type annotated with ",Object(i.b)("inlineCode",{parentName:"p"},"@model"),"."),Object(i.b)("p",null,"Let's have a look at a simple ",Object(i.b)("inlineCode",{parentName:"p"},"Note")," data model."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  text: String\n  description: String\n}\n')),Object(i.b)("p",null,"This will generate all the API definitions, resolvers, services and data providers."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  text: String\n  description: String\n}\n\n// highlight-start\ntype Query {\n  getNote(id: ID!): Note\n  findNotes(filter: NoteFilter, page: PageRequest, orderBy: OrderByInput): NoteResultList!\n}\n\ntype Mutation {\n  createNote(input: CreateNoteInput!): Note\n  updateNote(input: MutateNoteInput!): Note\n  deleteNote(input: MutateNoteInput!): Note\n}\n\ntype Subscription {\n  newNote(filter: NoteSubscriptionFilter): Note!\n  updatedNote(filter: NoteSubscriptionFilter): Note!\n  deletedNote(filter: NoteSubscriptionFilter): Note!\n}\n// highlight-end\n')),Object(i.b)("p",null,"You can customise what gets generated per model by adding ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#arguments"}),"arguments"),". This example tells Graphback to generate all resolvers ",Object(i.b)("em",{parentName:"p"},"except")," the ",Object(i.b)("inlineCode",{parentName:"p"},"deleteNote")," mutation and ",Object(i.b)("inlineCode",{parentName:"p"},"deletedNote"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model(\n  delete: false\n)\n"""\ntype Note {\n  id: ID!\n  text: String\n  description: String\n}\n')),Object(i.b)("h4",{id:"arguments"},"Arguments"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"create")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"create")," mutation is to be generated. Supported values: ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", ",Object(i.b)("inlineCode",{parentName:"td"},"false"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@model(create: false)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"delete")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"delete")," mutation is to be generated. Supported values: ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", ",Object(i.b)("inlineCode",{parentName:"td"},"false"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@model(delete: true)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"find")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"find")," query is to be generated. Supported values: ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", ",Object(i.b)("inlineCode",{parentName:"td"},"false"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@model(find: false)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"findOne")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"findOne")," query is to be generated. Supported values: ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", ",Object(i.b)("inlineCode",{parentName:"td"},"false"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@model(findOne: false)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"update")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"update")," mutation is to be generated. Supported values: ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", ",Object(i.b)("inlineCode",{parentName:"td"},"false"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@model(update: true)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"subCreate")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"new")," subscription is to be generated. Supported values: ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", ",Object(i.b)("inlineCode",{parentName:"td"},"false"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@model(subCreate: false)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"subUpdate")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies whether an ",Object(i.b)("inlineCode",{parentName:"td"},"updated")," subscription is to be generated. Supported values: ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", ",Object(i.b)("inlineCode",{parentName:"td"},"false"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@model(subUpdate: false)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"subDelete")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"deleted")," subscription is to be generated. Supported values: ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", ",Object(i.b)("inlineCode",{parentName:"td"},"false"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@model(subDelete: false)"))))),Object(i.b)("h3",{id:"onetomany"},"@oneToMany"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@oneToMany")," is used to define a One To Many relationship."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""model"""\ntype User {\n  id: ID!\n  """@oneToMany(field: \'author\')"""\n  posts: [Post]!\n}\n\n"""@model"""\ntype Post {\n  id:ID!\n  text: String!\n}\n')),Object(i.b)("p",null,"This will generate the an ",Object(i.b)("inlineCode",{parentName:"p"},"author")," field on the ",Object(i.b)("inlineCode",{parentName:"p"},"Post")," to model to enable bidirectional querying."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""@model"""\ntype Post {\n  id: ID!\n  text: String!\n  // highlight-next-line\n  author: User\n}\n')),Object(i.b)("h4",{id:"arguments-1"},"Arguments"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"field")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Specifies the name of resolver field on the foreign object. ",Object(i.b)("strong",{parentName:"td"},"Required"),". Accepts a string value"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@oneToMany(field: 'user'"),")")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"key")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies the name of foreign key field on the foreign object. Accepts a string value. Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"<typeName>Id")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@oneToMany(field: 'user', key: 'user_key')"))))),Object(i.b)("h3",{id:"onetoone"},"@oneToOne"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@oneToOne")," is used to define a One To One relationship."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""@model"""\ntype Character {\n  id:ID!\n  name: String!\n  """@oneToOne"""\n  cast_actor: Actor!\n}\n\n"""@model"""\ntype Actor { ... }\n')),Object(i.b)("p",null,"This example generates an ",Object(i.b)("inlineCode",{parentName:"p"},"character")," field on the ",Object(i.b)("inlineCode",{parentName:"p"},"Actor")," type with a ",Object(i.b)("inlineCode",{parentName:"p"},"Character")," resolver as well as a ",Object(i.b)("inlineCode",{parentName:"p"},"characterId")," field internally which can be used to query across relationships."),Object(i.b)("h4",{id:"arguments-2"},"Arguments"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"field")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Specifies the name of resolver field on the foreign object. ",Object(i.b)("strong",{parentName:"td"},"Required"),". Accepts a string value"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@oneToOne(field: 'user'"),")")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"key")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optionally specifies the name of foreign key field on the foreign object. Accepts a string value. Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"<typeName>Id")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@oneToOne(field: 'user', key: 'user_key')"))))),Object(i.b)("h3",{id:"index"},"@index"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@index")," annotation can be used to create an index on a specific field or a set of fields at runtime. The supported arguments are different between the different databases. See the variations for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#index-1"}),"PostgreSQL")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#index-2"}),"MongoDB"),"."),Object(i.b)("h2",{id:"postgresql"},"PostgreSQL"),Object(i.b)("h3",{id:"id"},"@id"),Object(i.b)("p",null,"You can customise the default primary key field with the ",Object(i.b)("inlineCode",{parentName:"p"},"@id")," annotation."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""@model"""\ntype User {\n  id: ID!\n  """@id"""\n  username: String!\n}\n')),Object(i.b)("h3",{id:"index-1"},"@index"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@index")," annotation can be used with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../graphql-migrations/db-design#index"}),"GraphQL Migrations")," to create indexes on your PostgreSQL database tables."),Object(i.b)("p",null,"You can create one or multiple indexes per table."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""@model"""\ntype User {\n  id: ID!\n  """\n  @index\n  """\n  name: String!\n  """\n  @index(name: \'userEmail_Idx\', type: \'hash\')\n  """\n  email: String!\n}\n')),Object(i.b)("p",null,"This creates two custom indexes on the ",Object(i.b)("inlineCode",{parentName:"p"},"user")," table:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"user_name_index" btree (name)\n"userEmail_index" hash (email)\n')),Object(i.b)("p",null,"You can also create a composite index."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""@model"""\ntype User {\n  id: ID!\n  """\n  @index(name: \'user_unique_index\')\n  """\n  email: String!\n  """\n  @index(name: \'user_unique_index\')\n  """\n  name: String!\n}\n')),Object(i.b)("p",null,"This creates the following composite index:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"user_unique_index" btree (email, name)\n')),Object(i.b)("h4",{id:"arguments-3"},"Arguments"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Specifies the name of index. ",Object(i.b)("strong",{parentName:"td"},"Optional"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"td"},"<tablename>_<columnname>_index"),". Accepts a string value"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@index(name: 'myIndex')"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"type")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Specifies the index type. ",Object(i.b)("strong",{parentName:"td"},"Optional"),". Accepts a string value. Supported values: ",Object(i.b)("inlineCode",{parentName:"td"},"btree")," (default), ",Object(i.b)("inlineCode",{parentName:"td"},"hash"),", ",Object(i.b)("inlineCode",{parentName:"td"},"gist"),", ",Object(i.b)("inlineCode",{parentName:"td"},"spgist"),", ",Object(i.b)("inlineCode",{parentName:"td"},"gin")," and ",Object(i.b)("inlineCode",{parentName:"td"},"brin")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@index(type: 'hash')"))))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you have relationships in your models, the relevant foreign keys are automatically indexed by Graphback, so you do not have to index them using ",Object(i.b)("inlineCode",{parentName:"p"},"@index"),". Similarly, custom primary keys marked with ",Object(i.b)("inlineCode",{parentName:"p"},"@id")," are also automatically indexed by Graphback.")),Object(i.b)("h3",{id:"db"},"@db"),Object(i.b)("p",null,"GraphQL Migrations is a library to perform database migrations tables for PostgreSQL using a GraphQL schema. Most of the migration operations can be specified with the ",Object(i.b)("inlineCode",{parentName:"p"},"@db")," annotation. Check out the documentation for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../graphql-migrations/db-design"}),"GraphQL Migrations")," to learn more."),Object(i.b)("h3",{id:"default"},"@default"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@default")," annotation is used to specify a default value. This is currently only supported for PostgreSQL through the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../graphql-migrations/db-design#default-field-value"}),"GraphQL Migrations")," package."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""@model"""\ntype User {\n  id: ID!\n  """@default(value: false)"""\n  verified: Boolean!\n}\n')),Object(i.b)("h4",{id:"arguments-4"},"Arguments"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"value")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Specifies the default value for the field. ",Object(i.b)("strong",{parentName:"td"},"Required"),"."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"@default(value: 1)"))))),Object(i.b)("h2",{id:"mongodb"},"MongoDB"),Object(i.b)("h3",{id:"index-2"},"@index"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@index")," annotation can be used to create an index on a specific field or a set of fields at runtime."),Object(i.b)("p",null,"You can create one or multiple indexes per collection."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Comment {\n  id: ID!\n  """\n  Add an index with a generated name\n  @index\n  """\n  text: String\n  """\n  Creating a custom named index\n  @index(\n    name: \'descriptionIndex\'\n  )\n  """\n  description: String\n}\n')),Object(i.b)("p",null,"You can also create a compound index with they ",Object(i.b)("inlineCode",{parentName:"p"},"key")," property (see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#arguments-1"}),"Arguments")," for an explanation of how to use it)."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""@model"""\ntype User {\n  id: ID!\n  """\n  @index(\n    name: \'user_unique_index\',\n    key: {\n      email: 1,\n      name: 1\n    }\n  )\n  """\n  email: String!\n  name: String!\n}\n')),Object(i.b)("p",null,"Graphback creates the following indexes on the ",Object(i.b)("inlineCode",{parentName:"p"},"user")," collection in the Mongo database ",Object(i.b)("inlineCode",{parentName:"p"},"users"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "v" : 2,\n  "key" : {\n    "email" : 1,\n    "name" : 1\n  },\n  "name" : "user_unique_index",\n  "ns" : "users.user"\n}\n')),Object(i.b)("h4",{id:"arguments-5"},"Arguments"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"key")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Specifies the index\u2019s fields. For each field, specify a key-value pair in which the key is the name of the field to index and the value is either the index direction or index type. If specifying direction, specify ",Object(i.b)("strong",{parentName:"td"},"1")," for ascending or ",Object(i.b)("strong",{parentName:"td"},"-1")," for descending. For example: ",Object(i.b)("inlineCode",{parentName:"td"},"{ text: 1, description: 1 }")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional. A name that uniquely identifies the index."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"unique")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional. Creates a unique index so that the collection will not accept insertion or update of documents where the index key value matches an existing value in the index. ",Object(i.b)("br",null),Object(i.b)("br",null)," Specify true to create a unique index. The default value is false."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you have relationships in your models, the relevant foreign keys are automatically indexed by Graphback, so you do not have to index them using ",Object(i.b)("inlineCode",{parentName:"p"},"@index"),". Similarly, custom primary keys marked with ",Object(i.b)("inlineCode",{parentName:"p"},"@id")," are also automatically indexed by Graphback.")),Object(i.b)("h3",{id:"versioned"},"@versioned"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@versioned")," annotation adds two fields to a model: ",Object(i.b)("inlineCode",{parentName:"p"},"updatedAt")," and ",Object(i.b)("inlineCode",{parentName:"p"},"createdAt")," to track the documents's last updated and created at timestamps. The fields are then automatically managed and updated by Graphback."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n@versioned\n"""\ntype Comment {\n  id: ID!\n  text: String\n  description: String\n}\n')),Object(i.b)("p",null,"This generates the following GraphQL type:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n@versioned\n"""\ntype Comment {\n  id: ID!\n  text: String\n  description: String\n  // highlight-start\n  createdAt: String\n  updatedAt: String\n  // highlight-end\n}\n')))}d.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=d(n),s=a,m=p["".concat(l,".").concat(s)]||p[s]||u[s]||i;return n?r.a.createElement(m,o({ref:t},c,{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},271:function(e,t,n){"use strict";e.exports=n(272)},272:function(e,t,n){"use strict";var a=n(273),r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,l=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,b=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,d=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.forward_ref"):60112,s=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.memo"):60115,O=r?Symbol.for("react.lazy"):60116,j="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function N(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}N.prototype.isReactComponent={},N.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},N.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=N.prototype;var C=v.prototype=new y;C.constructor=v,a(C,N.prototype),C.isPureReactComponent=!0;var x={current:null},S=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var a,r={},l=null,o=null;if(null!=t)for(a in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(l=""+t.key),t)S.call(t,a)&&!w.hasOwnProperty(a)&&(r[a]=t[a]);var b=arguments.length-2;if(1===b)r.children=n;else if(1<b){for(var c=Array(b),d=0;d<b;d++)c[d]=arguments[d+2];r.children=c}if(e&&e.defaultProps)for(a in b=e.defaultProps)void 0===r[a]&&(r[a]=b[a]);return{$$typeof:i,type:e,key:l,ref:o,props:r,_owner:x.current}}function D(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var _=/\/+/g,q=[];function P(e,t,n,a){if(q.length){var r=q.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=a,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:a,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>q.length&&q.push(e)}function A(e,t,n){return null==e?0:function e(t,n,a,r){var o=typeof t;"undefined"!==o&&"boolean"!==o||(t=null);var b=!1;if(null===t)b=!0;else switch(o){case"string":case"number":b=!0;break;case"object":switch(t.$$typeof){case i:case l:b=!0}}if(b)return a(r,t,""===n?"."+I(t,0):n),1;if(b=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var d=n+I(o=t[c],c);b+=e(o,d,a,r)}else if(null===t||"object"!=typeof t?d=null:d="function"==typeof(d=j&&t[j]||t["@@iterator"])?d:null,"function"==typeof d)for(t=d.call(t),c=0;!(o=t.next()).done;)b+=e(o=o.value,d=n+I(o,c++),a,r);else if("object"===o)throw a=""+t,Error(f(31,"[object Object]"===a?"object with keys {"+Object.keys(t).join(", ")+"}":a,""));return b}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function E(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var a=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?R(e,a,n,(function(e){return e})):null!=e&&(D(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+n)),a.push(e))}function R(e,t,n,a,r){var i="";null!=n&&(i=(""+n).replace(_,"$&/")+"/"),A(e,M,t=P(t,i,a,r)),T(t)}var $={current:null};function L(){var e=$.current;if(null===e)throw Error(f(321));return e}var U={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:function(e,t,n){if(null==e)return e;var a=[];return R(e,a,null,t,n),a},forEach:function(e,t,n){if(null==e)return e;A(e,E,t=P(null,null,t,n)),T(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return R(e,t,null,(function(e){return e})),t},only:function(e){if(!D(e))throw Error(f(143));return e}},t.Component=N,t.Fragment=o,t.Profiler=c,t.PureComponent=v,t.StrictMode=b,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,n){if(null==e)throw Error(f(267,e));var r=a({},e.props),l=e.key,o=e.ref,b=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,b=x.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)S.call(t,d)&&!w.hasOwnProperty(d)&&(r[d]=void 0===t[d]&&void 0!==c?c[d]:t[d])}var d=arguments.length-2;if(1===d)r.children=n;else if(1<d){c=Array(d);for(var p=0;p<d;p++)c[p]=arguments[p+2];r.children=c}return{$$typeof:i,type:e.type,key:l,ref:o,props:r,_owner:b}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=D,t.lazy=function(e){return{$$typeof:O,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return L().useCallback(e,t)},t.useContext=function(e,t){return L().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return L().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return L().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return L().useLayoutEffect(e,t)},t.useMemo=function(e,t){return L().useMemo(e,t)},t.useReducer=function(e,t,n){return L().useReducer(e,t,n)},t.useRef=function(e){return L().useRef(e)},t.useState=function(e){return L().useState(e)},t.version="16.13.1"},273:function(e,t,n){"use strict";var a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}}()?Object.assign:function(e,t){for(var n,o,b=l(e),c=1;c<arguments.length;c++){for(var d in n=Object(arguments[c]))r.call(n,d)&&(b[d]=n[d]);if(a){o=a(n);for(var p=0;p<o.length;p++)i.call(n,o[p])&&(b[o[p]]=n[o[p]])}}return b}}}]);