(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"./string/prepend.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),r=t.n(a),m=t("./node_modules/@mdx-js/tag/dist/index.js");function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},m=Object.keys(e);for(a=0;a<m.length;a++)t=m[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)t=m[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}n.default=function(e){var n=e.components;p(e,["components"]);return r.a.createElement(m.MDXTag,{name:"wrapper",components:n},r.a.createElement(m.MDXTag,{name:"h1",components:n,props:{id:"stringprepend"}},"string/prepend"),r.a.createElement(m.MDXTag,{name:"p",components:n},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"prepend :: String -> String -> String")),r.a.createElement(m.MDXTag,{name:"p",components:n},"Prepends a ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"String")," to another ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"String")),r.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"example"}},"Example"),r.a.createElement(m.MDXTag,{name:"pre",components:n},r.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript",metaString:""}},"import log from 'mojiscript/console/log';\nimport pipe from 'mojiscript/core/pipe';\nimport run from 'mojiscript/core/run';\nimport prepend from 'mojiscript/string/prepend';\n\nconst state = 'Script'\n\nconst main = pipe ([\n  prepend ('Moji'),\n  log\n])\n\nrun ({ state, main })\n// => \"MojiScript\"\n")),r.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"parameters"}},"Parameters"),r.a.createElement(m.MDXTag,{name:"table",components:n},r.a.createElement(m.MDXTag,{name:"thead",components:n,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"thead"},r.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),r.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),r.a.createElement(m.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),r.a.createElement(m.MDXTag,{name:"tbody",components:n,parentName:"table"},r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"pre"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"String")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"String")," to be prepend to.")),r.a.createElement(m.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"post"),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"String")),r.a.createElement(m.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"String")," to prepend to other ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"String"))))),r.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"returns"}},"Returns"),r.a.createElement(m.MDXTag,{name:"p",components:n},"Prepended ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"String"),"."))}}}]);