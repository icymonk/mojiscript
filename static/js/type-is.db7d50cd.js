(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"./type/is.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),r=t.n(a),o=t("./node_modules/@mdx-js/tag/dist/index.js");function m(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}n.default=function(e){var n=e.components;m(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:n},r.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"typeis"}},"type/is"),r.a.createElement(o.MDXTag,{name:"p",components:n},r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"is :: Any -> Any -> Boolean")),r.a.createElement(o.MDXTag,{name:"p",components:n},"Checks the type of an ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Object"),"."),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"example"}},"Example"),r.a.createElement(o.MDXTag,{name:"pre",components:n},r.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript",metaString:""}},"import log from 'mojiscript/console/log'\nimport pipe from 'mojiscript/core/pipe'\nimport run from 'mojiscript/core/run'\nimport is from 'mojiscript/type/is'\n\nconst main = pipe ([\n  () => log (is (Function) (x => x)),        //=> true\n  () => log (is (Object) ({})),              //=> true\n  () => log (is (Object) (new String (''))), //=> true\n  () => log (is (Boolean) (true)),           //=> true\n  () => log (is (Array) ([])),               //=> true\n  () => log (is (String) ('')),              //=> true\n  () => log (is (Number) (1)),               //=> true\n  () => log (is (Set) (new Set ())),         //=> true\n  () => log (is (Map) (new Map ())),         //=> true\n])\n\nrun ({ main })\n")),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"parameters"}},"Parameters"),r.a.createElement(o.MDXTag,{name:"table",components:n},r.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),r.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),r.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),r.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"ctor"),r.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Object")),r.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"A constructor.")),r.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"value"),r.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Any")),r.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Value to test.")))),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"returns"}},"Returns"),r.a.createElement(o.MDXTag,{name:"p",components:n},"Returns ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"true")," when the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"value")," is of the same type as the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Object")," or ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"false")," when it is not."))}}}]);