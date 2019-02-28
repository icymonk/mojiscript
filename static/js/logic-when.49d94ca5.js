(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./logic/when.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js");function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.default=function(e){var n=e.components;m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"logicwhen"}},"logic/when"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"when :: Function -> Function -> Any -> Any")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Executes ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onTrue")," when the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"condition")," returns a truthy value. Otherwise ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"value")," is returned."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"example"}},"Example"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript",metaString:""}},"import log from 'mojiscript/console/log'\nimport pipe from 'mojiscript/core/pipe'\nimport run from 'mojiscript/core/run'\nimport when from 'mojiscript/logic/when'\nimport is from 'mojiscript/type/is'\n\nconst state = 'mojiscript'\n\nconst isString = is (String)\nconst toUpperCase = x => x.toUpperCase ()\n\nconst main = pipe ([\n  when (isString) (toUpperCase),\n  log\n])\n\nrun ({ state, main })\n// => \"MOJISCRIPT\"\n")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"parameters"}},"Parameters"),o.a.createElement(r.MDXTag,{name:"table",components:n},o.a.createElement(r.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),o.a.createElement(r.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"condition"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Function")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"A predicate function.")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"onTrue"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Function")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Invoked when the predicate evaluates to a truthy value.")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"value"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Any")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Value to be passed to condition and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onTrue")," if condition is truthy.")))),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"returns"}},"Returns"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Returns the result of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onTrue")," depending on the result of the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"condition")," or the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"value"),"."))}}}]);