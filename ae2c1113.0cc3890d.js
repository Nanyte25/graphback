/*! For license information please see ae2c1113.0cc3890d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{207:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(6),l=(n(271),n(270)),o={id:"queries",title:"Queries",sidebar_label:"Queries"},i={id:"crud/queries",isDocsHomePage:!1,title:"Queries",description:"Graphback provides two query types for every model in the schema.",source:"@site/../docs/crud/queries.md",permalink:"/docs/next/crud/queries",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/crud/queries.md",version:"next",sidebar_label:"Queries",sidebar:"docs",previous:{title:"CRUD Overview",permalink:"/docs/next/crud/overview"},next:{title:"Mutations",permalink:"/docs/next/crud/mutations"},latestVersionMainDocPermalink:"/docs/introduction"},c=[{value:"Find",id:"find",children:[{value:"Filtering",id:"filtering",children:[]},{value:"Pagination",id:"pagination",children:[]},{value:"Ordering",id:"ordering",children:[]}]},{value:"Get",id:"get",children:[]}],u={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Graphback provides two query types for every model in the schema."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"#find"}),Object(l.b)("inlineCode",{parentName:"a"},"find<Type>s")),": fetch all or a subset of items through optional filtering, pagination and sorting."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"#get"}),Object(l.b)("inlineCode",{parentName:"a"},"get<Type>")),": fetch a single item by its unique ID.")),Object(l.b)("h2",{id:"find"},"Find"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"find")," operation allows the client to fetch multiple items from the database, with optional filtering, pagination and ordering of the data allowing you to specify exactly the data you need. "),Object(l.b)("p",null,"The query follows the naming format ",Object(l.b)("inlineCode",{parentName:"p"},"find<Type>s"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  findNotes(filter: NoteFilter, page: PageRequest, orderBy: OrderByInput): NoteResultList!\n}\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Arguments:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"filter"),": filter object to query specific data."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"page"),": enables pagination of the data."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"orderBy"),": sorts the data in ascending or descending order.")),Object(l.b)("p",null,"The items fetched by ",Object(l.b)("inlineCode",{parentName:"p"},"findNote")," are returned in a container type ",Object(l.b)("inlineCode",{parentName:"p"},"NoteResultList")," created by Graphback:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type NoteResultList {\n  # The notes are returned in the items field\n  items: [Note]!\n  # Offset specified in query\n  offset: Int\n  # Offset specified in query\n  limit: Int\n  # total count of notes in the database\n  count: Int\n}\n")),Object(l.b)("p",null,"Example of a simple query to retrieve all notes:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  findNotes {\n    items {\n      id\n      title\n      likes\n    }\n  }\n}\n")),Object(l.b)("h3",{id:"filtering"},"Filtering"),Object(l.b)("p",null,"Graphback generates all the appropriate schema elements from ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphqlcrud.org"}),"GraphQLCRUD")," and provides a mapping implementation for both PostgreSQL and MongoDB.\nThis lets you perform simple or complex querying of your data directly from GraphQL queries."),Object(l.b)("p",null,"Take an example ",Object(l.b)("inlineCode",{parentName:"p"},"Note")," model, which uses each of the built-in scalar types: ",Object(l.b)("inlineCode",{parentName:"p"},"ID"),", ",Object(l.b)("inlineCode",{parentName:"p"},"String"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Boolean"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Int"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Float"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  opened: Boolean\n  likes: Int\n  completedPercentage: Float\n}\n')),Object(l.b)("p",null,"Graphback generates a filter input type for each model in the schema."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"input NoteFilter {\n  id: IDInput\n  title: StringInput\n  opened: BooleanInput\n  likes: IntInput\n  completedPercentage: FloatInput\n  and: [NoteFilter!]\n  or: [NoteFilter!]\n  not: NoteFilter\n}\n")),Object(l.b)("p",null,"So you can perform filtering of the data like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  findNotes(filter: {\n    title: {\n      contains: "emails"\n    },\n    opened: {\n      eq: false\n    },\n    likes: {\n      gt: 10\n    },\n    completedPercentage: {\n      between: [20, 40]\n    },\n    and: {\n      title: {\n        startsWith: "read"\n      }\n    },\n    or: {\n      likes: {\n        eq: 100 \n      }\n    },\n    not: {\n      title: {\n        contains: "archived"\n      }\n    }\n  }) {\n    items {\n      id\n      title\n      likes\n    }\n  }\n}\n')),Object(l.b)("h4",{id:"operators"},"Operators"),Object(l.b)("p",null,"This is a list of all available filter operators."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Operator"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Meaning"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Scalars"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"eq"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Equal to"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ne"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Not equal to"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"lt"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Less than"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"le"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Less than or equal to"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"gt"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Greater than"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"gt"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Greater than or equal to"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"between"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Between a range (of numbers)"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Int, Float")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"in"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"In a list of items"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"contains"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"String contains"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"String")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"startsWith"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"String starts with"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"String")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"endsWith"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"String ends with"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"String")))),Object(l.b)("p",null,"Each field in the ",Object(l.b)("inlineCode",{parentName:"p"},"NoteFilter")," input maps to a generated scalar input. This specifies the operators available for that scalar."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"input StringInput {\n  ne: String\n  eq: String\n  le: String\n  lt: String\n  ge: String\n  gt: String\n  in: [String!]\n  contains: String\n  startsWith: String\n  endsWith: String\n}\n\ninput IDInput {\n  ne: ID\n  eq: ID\n  le: ID\n  lt: ID\n  ge: ID\n  gt: ID\n  in: [ID!]\n}\n\ninput IntInput {\n  ne: Int\n  eq: Int\n  le: Int\n  lt: Int\n  ge: Int\n  gt: Int\n  in: [Int!]\n  between: [Int!]\n}\n\ninput FloatInput {\n  ne: Float\n  eq: Float\n  le: Float\n  lt: Float\n  ge: Float\n  gt: Float\n  in: [Float!]\n  between: [Float!]\n}\n\ninput BooleanInput {\n  ne: Boolean\n  eq: Boolean\n}\n")),Object(l.b)("h3",{id:"pagination"},"Pagination"),Object(l.b)("p",null,"You can perform pagination with the ",Object(l.b)("inlineCode",{parentName:"p"},"page")," argument."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type PageRequest {\n  limit: Int\n  offset: Int\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"findNotes(page: {limit: 10, offset:4}) {\n  items {\n    id\n  }\n}\n")),Object(l.b)("h3",{id:"ordering"},"Ordering"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"input OrderByInput {\n  field: String!\n  order: SortDirectionEnum = ASC\n}\n\nenum SortDirectionEnum {\n  DESC\n  ASC\n}\n")),Object(l.b)("p",null,"To sort/order items by a certain field, use the ",Object(l.b)("inlineCode",{parentName:"p"},"orderBy")," argument."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'findNotes(orderBy: {order: DESC, field: "likes"}) {\n  items {\n    id\n  }\n}\n')),Object(l.b)("h2",{id:"get"},"Get"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"get")," operation allows the client to fetch a single item from the database by its unique ID."),Object(l.b)("p",null,"The query follows the naming format ",Object(l.b)("inlineCode",{parentName:"p"},"get<Type>"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  getNote(id: ID!): Note\n}\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Arguments:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"id"),": The unique ID of the object. This will always be ",Object(l.b)("inlineCode",{parentName:"li"},"id: ID"),". The resolver will automatically map this to your primary key field.")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype User {\n  """@id"""\n  email: String\n  name: String\n}\n')),Object(l.b)("p",null,"Example of a query to retrieve a single user by their primary field (email):"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'getNote(id: "tommyshelby@gmail.com") {\n  id\n  email\n  name\n}\n')))}b.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(n),f=r,d=p["".concat(o,".").concat(f)]||p[f]||s[f]||l;return n?a.a.createElement(d,i({ref:t},u,{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},271:function(e,t,n){"use strict";e.exports=n(272)},272:function(e,t,n){"use strict";var r=n(273),a="function"==typeof Symbol&&Symbol.for,l=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,b=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,s=a?Symbol.for("react.forward_ref"):60112,f=a?Symbol.for("react.suspense"):60113,d=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,O="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}function N(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(j(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=h.prototype;var w=v.prototype=new N;w.constructor=v,r(w,h.prototype),w.isPureReactComponent=!0;var S={current:null},q=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,a={},o=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)q.call(t,r)&&!I.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var u=Array(c),b=0;b<c;b++)u[b]=arguments[b+2];a.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:l,type:e,key:o,ref:i,props:a,_owner:S.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var P=/\/+/g,E=[];function x(e,t,n,r){if(E.length){var a=E.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function _(e,t,n){return null==e?0:function e(t,n,r,a){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var c=!1;if(null===t)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case l:case o:c=!0}}if(c)return r(a,t,""===n?"."+T(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var b=n+T(i=t[u],u);c+=e(i,b,r,a)}else if(null===t||"object"!=typeof t?b=null:b="function"==typeof(b=O&&t[O]||t["@@iterator"])?b:null,"function"==typeof b)for(t=b.call(t),u=0;!(i=t.next()).done;)c+=e(i=i.value,b=n+T(i,u++),r,a);else if("object"===i)throw r=""+t,Error(j(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return c}(e,"",t,n)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function R(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?$(e,r,n,(function(e){return e})):null!=e&&(k(e)&&(e=function(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function $(e,t,n,r,a){var l="";null!=n&&(l=(""+n).replace(P,"$&/")+"/"),_(e,R,t=x(t,l,r,a)),D(t)}var A={current:null};function B(){var e=A.current;if(null===e)throw Error(j(321));return e}var L={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return $(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;_(e,F,t=x(null,null,t,n)),D(t)},count:function(e){return _(e,(function(){return null}),null)},toArray:function(e){var t=[];return $(e,t,null,(function(e){return e})),t},only:function(e){if(!k(e))throw Error(j(143));return e}},t.Component=h,t.Fragment=i,t.Profiler=u,t.PureComponent=v,t.StrictMode=c,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,n){if(null==e)throw Error(j(267,e));var a=r({},e.props),o=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(b in t)q.call(t,b)&&!I.hasOwnProperty(b)&&(a[b]=void 0===t[b]&&void 0!==u?u[b]:t[b])}var b=arguments.length-2;if(1===b)a.children=n;else if(1<b){u=Array(b);for(var p=0;p<b;p++)u[p]=arguments[p+2];a.children=u}return{$$typeof:l,type:e.type,key:o,ref:i,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:b,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return B().useCallback(e,t)},t.useContext=function(e,t){return B().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return B().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return B().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return B().useLayoutEffect(e,t)},t.useMemo=function(e,t){return B().useMemo(e,t)},t.useReducer=function(e,t,n){return B().useReducer(e,t,n)},t.useRef=function(e){return B().useRef(e)},t.useState=function(e){return B().useState(e)},t.version="16.13.1"},273:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,i,c=o(e),u=1;u<arguments.length;u++){for(var b in n=Object(arguments[u]))a.call(n,b)&&(c[b]=n[b]);if(r){i=r(n);for(var p=0;p<i.length;p++)l.call(n,i[p])&&(c[i[p]]=n[i[p]])}}return c}}}]);