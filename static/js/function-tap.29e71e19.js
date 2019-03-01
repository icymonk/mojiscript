(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./function/tap.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js");function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.default=function(e){var n=e.components;m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"functiontap"}},"function/tap"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"tap :: Function -> Any -> Any")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Runs the given function with the supplied object, then returns the object. ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"tap")," is typically used when performing side-effects."),o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"example"}},"Example"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript",metaString:""}},"import log from 'mojiscript/console/log'\nimport pipe from 'mojiscript/core/pipe'\nimport run from 'mojiscript/core/run'\nimport tap from 'mojiscript/function/tap'\nimport axios from 'mojiscript/net/axios'\n\nconst getUser = () => ({\n  name: \"paul rudd\",\n  movies: [\"I Love You Man\", \"Role Models\"]\n})\n\nconst main = pipe ([\n  getUser,\n  \n  // the axios response is ignored and the user is returned.\n  tap (user => axios.post ('https://reqres.in/api/users') (user) (null)),\n\n  log\n])\n\nrun ({ main })\n//=> { name: \"paul rudd\", movies: [\"I Love You Man\", \"Role Models\"] }\n")),o.a.createElement(r.MDXTag,{name:"h5",components:n,props:{id:"parameters"}},"Parameters"),o.a.createElement(r.MDXTag,{name:"table",components:n},o.a.createElement(r.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),o.a.createElement(r.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"function"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Function")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Function to execute")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"value"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Object")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Input object for function and return value of the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"tap"),".")))),o.a.createElement(r.MDXTag,{name:"h5",components:n,props:{id:"returns"}},"Returns"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Returns the object originally given as an input."))}}}]);