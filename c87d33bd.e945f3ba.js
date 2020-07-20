/*! For license information please see c87d33bd.e945f3ba.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=(n(271),n(270));const o={id:"plugins",title:"Custom logic with Plugins",sidebar_label:"Plugins"},i={id:"graphql-migrations/plugins",isDocsHomePage:!1,title:"Custom logic with Plugins",description:"It's possible to write custom queries to be executed during migrations using Plugins.",source:"@site/../docs/graphql-migrations/plugins.md",permalink:"/docs/next/graphql-migrations/plugins",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/graphql-migrations/plugins.md",version:"next",sidebar_label:"Plugins",sidebar:"docs",previous:{title:"API Reference",permalink:"/docs/next/graphql-migrations/api"},next:{title:"GraphQL Migrations Filters",permalink:"/docs/next/graphql-migrations/filters"},latestVersionMainDocPermalink:"/docs/introduction"},l=[],c={rightToc:l};function u({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"It's possible to write custom queries to be executed during migrations using Plugins."),Object(a.b)("p",null,"Currently a plugin can only declare tap on the Writer system, with the ",Object(a.b)("inlineCode",{parentName:"p"},"write")," and ",Object(a.b)("inlineCode",{parentName:"p"},"tap")," methods:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { MigratePlugin, WriteParams } from 'graphql-migrations'\n\nclass MyPlugin extends MigratePlugin {\n  write ({ tap }: WriteParams) {\n    tap('op-type', 'before', (op: any, transaction: any) => {\n      // or 'after'\n    })\n\n    return true;\n  }\n}\n")),Object(a.b)("p",null,"The arguments are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"operation: string"),", can be one of the following:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"table.create")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"table.rename")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"table.comment.set")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"table.drop")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"table.index.create")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"table.index.drop")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"table.primary.set")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"table.primary.drop")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"table.unique.create")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"table.unique.drop")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"table.foreign.create")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"table.foreign.drop")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"column.create")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"column.rename")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"column.alter")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"column.drop")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"type: 'before' | 'after'")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"callback: function")," which get those parameters:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"operation"),": the operation object (see ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/aerogear/graphback/blob/master/packages/graphql-migrations/src/diff/Operation.ts"}),"Operation.ts"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"transaction"),": the ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"http://knexjs.org/#Transactions"}),"Knex SQL transaction"))))),Object(a.b)("p",null,"Then, instantiate the plugin in the ",Object(a.b)("inlineCode",{parentName:"p"},"plugins")," option array of the ",Object(a.b)("inlineCode",{parentName:"p"},"migrateDB")," method."),Object(a.b)("p",null,"For example, let's say we have the following schema:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype User {\n  id: ID!\n  fname: String\n  lname: String\n}\n')),Object(a.b)("p",null,"Now we want to migrate the ",Object(a.b)("inlineCode",{parentName:"p"},"user")," table from two columns ",Object(a.b)("inlineCode",{parentName:"p"},"fname")," and ",Object(a.b)("inlineCode",{parentName:"p"},"lname")," into one:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"fullname = fname + ' ' + lname\n")),Object(a.b)("p",null,"Here is the example code to achieve this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { migrateDB, MigratePlugin, WriteParams } from 'graphql-migrations';\n\nconst schema = `\n\"\"\"\n@model\n\"\"\"\ntype User {\n  id: ID!\n\n  \"\"\"\n  db(oldNames: ['lname'])\n  \"\"\" \n  fullname: String\n}\n`;\n\nclass MyPlugin implements MigratePlugin {\n  write ({ tap }: WriteParams) {\n    tap('column.drop', 'before', async (op: any, transaction: any) => {\n      // Check the table and column\n      if (op.table === 'user' && op.column === 'fname') {\n        // Update the users lname with fname + ' ' + lname\n        const users = await transaction\n          .select('id', 'fname', 'lname')\n          .from('user');\n        for (const user of users) {\n          await transaction('user')\n            .where({ id: user.id })\n            .update({\n              lname: `${user.fname} ${user.lname}`\n            })\n        }\n      }\n    })\n\n    return true;\n  }\n}\n\nconst dbConfig = {\n    // Knex database configuration\n}\n\nmigrateDB(dbConfig, schema, {\n  plugins: [\n    new MyPlugin(),\n  ]\n})\n")),Object(a.b)("p",null,"The above code does the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Remove the ",Object(a.b)("inlineCode",{parentName:"li"},"fname")," field from the schema."),Object(a.b)("li",{parentName:"ul"},"Rename ",Object(a.b)("inlineCode",{parentName:"li"},"lname")," to ",Object(a.b)("inlineCode",{parentName:"li"},"fullname")," in the schema."),Object(a.b)("li",{parentName:"ul"},"Annotate the ",Object(a.b)("inlineCode",{parentName:"li"},"fullname")," field to indicate it's the new name of ",Object(a.b)("inlineCode",{parentName:"li"},"lname"),"."),Object(a.b)("li",{parentName:"ul"},"We declare a plugin that tap into the ",Object(a.b)("inlineCode",{parentName:"li"},"column.drop")," write operation."),Object(a.b)("li",{parentName:"ul"},"In this hook, we read the users and update each one of them to merge the two columns into ",Object(a.b)("inlineCode",{parentName:"li"},"lname")," before the ",Object(a.b)("inlineCode",{parentName:"li"},"fname")," column is dropped.")))}u.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,m=s["".concat(i,".").concat(f)]||s[f]||b[f]||o;return n?a.a.createElement(m,l({ref:t},u,{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},271:function(e,t,n){"use strict";e.exports=n(272)},272:function(e,t,n){"use strict";var r=n(273),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,s=a?Symbol.for("react.context"):60110,b=a?Symbol.for("react.forward_ref"):60112,f=a?Symbol.for("react.suspense"):60113,m=a?Symbol.for("react.memo"):60115,d=a?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function h(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||g}function N(){}function v(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||g}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(O(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=h.prototype;var w=v.prototype=new N;w.constructor=v,r(w,h.prototype),w.isPureReactComponent=!0;var C={current:null},P=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)P.call(t,r)&&!x.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var u=Array(c),p=0;p<c;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:C.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g,E=[];function $(e,t,n,r){if(E.length){var a=E.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function q(e,t,n){return null==e?0:function e(t,n,r,a){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case o:case i:c=!0}}if(c)return r(a,t,""===n?"."+D(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var p=n+D(l=t[u],u);c+=e(l,p,r,a)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=y&&t[y]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),u=0;!(l=t.next()).done;)c+=e(l=l.value,p=n+D(l,u++),r,a);else if("object"===l)throw r=""+t,Error(O(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return c}(e,"",t,n)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function T(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,r,n,(function(e){return e})):null!=e&&(S(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+n)),r.push(e))}function I(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(_,"$&/")+"/"),q(e,T,t=$(t,o,r,a)),R(t)}var A={current:null};function U(){var e=A.current;if(null===e)throw Error(O(321));return e}var F={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return I(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;q(e,M,t=$(null,null,t,n)),R(t)},count:function(e){return q(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!S(e))throw Error(O(143));return e}},t.Component=h,t.Fragment=l,t.Profiler=u,t.PureComponent=v,t.StrictMode=c,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,n){if(null==e)throw Error(O(267,e));var a=r({},e.props),i=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(p in t)P.call(t,p)&&!x.hasOwnProperty(p)&&(a[p]=void 0===t[p]&&void 0!==u?u[p]:t[p])}var p=arguments.length-2;if(1===p)a.children=n;else if(1<p){u=Array(p);for(var s=0;s<p;s++)u[s]=arguments[s+2];a.children=u}return{$$typeof:o,type:e.type,key:i,ref:l,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:b,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},273:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,l,c=i(e),u=1;u<arguments.length;u++){for(var p in n=Object(arguments[u]))a.call(n,p)&&(c[p]=n[p]);if(r){l=r(n);for(var s=0;s<l.length;s++)o.call(n,l[s])&&(c[l[s]]=n[l[s]])}}return c}}}]);