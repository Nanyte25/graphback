/*! For license information please see b241076c.73bbf6d8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{211:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(6),a=(r(271),r(270)),c={id:"add-to-project",title:"Adding Graphback to your project",sidebar_label:"Add to project"},i={id:"getting-started/add-to-project",isDocsHomePage:!1,title:"Adding Graphback to your project",description:"Graphback can easily be added to your existing Apollo GraphQL Node.js application.",source:"@site/../docs/getting-started/adding-graphback-to-your-project.md",permalink:"/docs/next/getting-started/add-to-project",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/getting-started/adding-graphback-to-your-project.md",version:"next",sidebar_label:"Add to project",sidebar:"docs",previous:{title:"Creating a new application",permalink:"/docs/next/getting-started/create-new-app"},next:{title:"Data Model",permalink:"/docs/next/model/datamodel"},latestVersionMainDocPermalink:"/docs/introduction"},l=[{value:"Configure your database",id:"configure-your-database",children:[]},{value:"Configure your schema",id:"configure-your-schema",children:[]},{value:"Configure Graphback",id:"configure-graphback",children:[]},{value:"Finish setup",id:"finish-setup",children:[]}],u={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Graphback can easily be added to your existing Apollo GraphQL Node.js application."),Object(a.b)("p",null,"Let's take a look at a very simple, minimal Apollo GraphQL server setup."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import express from 'express';\nimport { ApolloServer } from 'apollo-server-express';\n \nconst app = express();\n \nconst schema = `\ntype Note {\n  id: ID!\n  text: String!\n  archived: Boolean!\n}\n\ntype Query {\n  getAllNotes(): [Note]!\n}\n`\n\nconst noteResolvers = {\n  Query: {\n    getAllNotes: (parent, args, context) => {\n      return context.db.getAllNotes();\n    }\n  }\n}\n \nconst server = new ApolloServer({\n  typeDefs: schema,\n  resolvers: noteResolvers\n});\n \nserver.applyMiddleware({ app });\n \napp.listen({ port: 4000 }, () => {\n  console.log('Apollo Server on http://localhost:4000/graphql');\n});\n")),Object(a.b)("p",null,"In just a few short steps, Graphback can be added to this project."),Object(a.b)("h3",{id:"configure-your-database"},"Configure your database"),Object(a.b)("p",null,"For this example we are going to assume that the project uses a PostgreSQL database."),Object(a.b)("p",null,"To use PostgreSQL with Graphback install ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://knexjs.org/"}),"Knex.js")," with the Graphback PostgreSQL library:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install knex @graphback/runtime-knex\n")),Object(a.b)("p",null,"Once installed, initialize a Knex client using your database credentials, and create a Knex database provider creator for Graphback:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import Knex from 'knex';\nimport { createKnexDbProvider } from '@graphback/runtime-knex';\n\nconst knex = Knex({\n  client: 'pg',\n  connection: {\n    host: '127.0.0.1',\n    user: 'your_db_user',\n    password: 'your_db_password',\n    database: 'your_app_db'\n  }\n})\n\nconst knexProviderCreator = createKnexDbProvider(knex);\n")),Object(a.b)("p",null,"For more on database support in Graphback, see ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../databases/overview"}),"Databases"),"."),Object(a.b)("h3",{id:"configure-your-schema"},"Configure your schema"),Object(a.b)("p",null,"Graphback will only process GraphQL types which are annotated with ",Object(a.b)("inlineCode",{parentName:"p"},"@model"),". This opt-in model enables you to combine Graphback enabled types and resolvers with your existing types that do not require bootstrapping."),Object(a.b)("p",null,"In this scenario, we want ",Object(a.b)("inlineCode",{parentName:"p"},"Note")," to be processed by Graphback."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),'+"""\n+@model\n+"""\ntype Note {\n  id: ID!\n  text: String!\n  archived: Boolean!\n}\n')),Object(a.b)("p",null,"For more advanced usage on how to configure your data models, see our ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../model/datamodel"}),"Model")," guides."),Object(a.b)("h3",{id:"configure-graphback"},"Configure Graphback"),Object(a.b)("p",null,"Let's install Graphback and use it in the project."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install graphback\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"buildGraphbackAPI")," will process your schema and generate a CRUD API with schema, resolvers, services and data sources."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { buildGraphbackAPI } from 'graphback';\n\nconst { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(schema, {\n  dataProviderCreator: knexDbProviderCreator\n});\n")),Object(a.b)("p",null,"Check out the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../api/build-graphback-api"}),"buildGraphbackAPI")," for more advanced use cases like CRUD configuration and plugin extensions."),Object(a.b)("h3",{id:"finish-setup"},"Finish setup"),Object(a.b)("p",null,"Now that you have added all the Graphback code, let's bring it together and add Graphback to your Apollo GraphQL server:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import express from 'express';\nimport http from \"http\";\nimport { ApolloServer } from 'apollo-server-express';\n// highlight-start\nimport { buildGraphbackAPI } from 'graphback'\nimport { createKnexDbProvider } from '@graphback/runtime-knex'\n// highlight-end\n\nconst app = express();\n \nconst schema = `\n// highlight-start\n\"\"\"\n@model\n\"\"\"\n// highlight-end\ntype Note {\n  id: ID!\n  text: String!\n  archived: Boolean!\n}\n\ntype Query {\n  getAllNotes(): [Note]!\n}\n`\n\n// highlight-start\n// create a Knex client\nconst knex = Knex({\n  client: 'pg',\n  connection: {\n    host: '127.0.0.1',\n    user: 'your_db_user',\n    password: 'your_db_password',\n    database: 'your_app_db'\n  }\n});\n// highlight-end\n\n// highlight-start\n// create a Knex database provider creator\nconst knexDbProviderCreator = createKnexDbProvider(knex);\n// highlight-end\n\n// highlight-start\n// creates a schema, CRUD resolvers, services and data providers\nconst { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(schema, {\n  dataProviderCreator: knexDbProviderCreator\n});\n// highlight-end\n\nconst server = new ApolloServer({\n  // highlight-start\n  typeDefs, // your schema as a string\n  resolvers: [resolvers, noteResolvers], // merge Graphback resolvers with your own\n  // highlight-next-line\n  context: contextCreator // creates a context with Graphback services attached\n  // highlight-end\n});\n\nserver.applyMiddleware({ app });\n\nconst httpServer = http.createServer(app)\napolloServer.installSubscriptionHandlers(httpServer)\n \napp.listen({ port: 4000 }, () => {\n  console.log('Apollo Server on http://localhost:4000/graphql');\n});\n")))}s.isMDXComponent=!0},270:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,b=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return r?o.a.createElement(b,i({ref:t},u,{components:r})):o.a.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},271:function(e,t,r){"use strict";e.exports=r(272)},272:function(e,t,r){"use strict";var n=r(273),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function j(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||m}function O(){}function k(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||m}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=j.prototype;var x=k.prototype=new O;x.constructor=k,n(x,j.prototype),x.isPureReactComponent=!0;var w={current:null},P=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)P.call(t,n)&&!S.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:w.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g,A=[];function D(e,t,r,n){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function E(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function G(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case c:l=!0}}if(l)return n(o,t,""===r?"."+R(t,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=r+R(i=t[u],u);l+=e(i,s,n,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=y&&t[y]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(i=t.next()).done;)l+=e(i=i.value,s=r+R(i,u++),n,o);else if("object"===i)throw n=""+t,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return l}(e,"",t,r)}function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,n,r,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+r)),n.push(e))}function L(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(N,"$&/")+"/"),G(e,I,t=D(t,a,n,o)),E(t)}var T={current:null};function M(){var e=T.current;if(null===e)throw Error(g(321));return e}var K={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return L(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;G(e,$,t=D(null,null,t,r)),E(t)},count:function(e){return G(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!_(e))throw Error(g(143));return e}},t.Component=j,t.Fragment=i,t.Profiler=u,t.PureComponent=k,t.StrictMode=l,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,t.cloneElement=function(e,t,r){if(null==e)throw Error(g(267,e));var o=n({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=w.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)P.call(t,s)&&!S.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];o.children=u}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return M().useCallback(e,t)},t.useContext=function(e,t){return M().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return M().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return M().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return M().useLayoutEffect(e,t)},t.useMemo=function(e,t){return M().useMemo(e,t)},t.useReducer=function(e,t,r){return M().useReducer(e,t,r)},t.useRef=function(e){return M().useRef(e)},t.useState=function(e){return M().useState(e)},t.version="16.13.1"},273:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,i,l=c(e),u=1;u<arguments.length;u++){for(var s in r=Object(arguments[u]))o.call(r,s)&&(l[s]=r[s]);if(n){i=n(r);for(var p=0;p<i.length;p++)a.call(r,i[p])&&(l[i[p]]=r[i[p]])}}return l}}}]);