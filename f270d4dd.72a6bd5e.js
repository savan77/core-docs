(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(1),r=n(6),a=(n(0),n(126)),i={title:"Contributing",sidebar_label:"Contributing"},c={id:"getting-started/contributing",title:"Contributing",description:"Welcome to Onepanel Core Project! We are excited to have you as part of the community and welcome all contributions.",source:"@site/docs/getting-started/contributing.md",permalink:"/core-docs/docs/getting-started/contributing",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/getting-started/contributing.md",sidebar_label:"Contributing",sidebar:"gettingStarted",previous:{title:"Environment variables",permalink:"/core-docs/docs/getting-started/concepts/environment-variables"}},l=[{value:"Getting started as a contributor",id:"getting-started-as-a-contributor",children:[]},{value:"Code of conduct",id:"code-of-conduct",children:[]},{value:"Coding conventions",id:"coding-conventions",children:[{value:"Go",id:"go",children:[]},{value:"TypeScript and Angular",id:"typescript-and-angular",children:[]},{value:"SDKs",id:"sdks",children:[]}]},{value:"Documentation style guide",id:"documentation-style-guide",children:[]},{value:"Project repositories",id:"project-repositories",children:[{value:"Platform",id:"platform",children:[]},{value:"SDKs",id:"sdks-1",children:[]},{value:"Documentation",id:"documentation",children:[]}]}],b={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Welcome to Onepanel Core Project! We are excited to have you as part of the community and welcome all contributions."),Object(a.b)("h2",{id:"getting-started-as-a-contributor"},"Getting started as a contributor"),Object(a.b)("p",null,"This document outlines project structure, guidelines and serves as a single source of truth for contributions. Our goal is to make it as easy for everyone to contribute to the code base, documentation, and components."),Object(a.b)("h2",{id:"code-of-conduct"},"Code of conduct"),Object(a.b)("p",null,"Make sure to read and observe our ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/onepanelio/core/blob/master/CODE_OF_CONDUCT.md"}),"Code of Conduct"),"."),Object(a.b)("h2",{id:"coding-conventions"},"Coding conventions"),Object(a.b)("p",null,"All code should be written in the languages and frameworks listed below and follow that language's conventions. SDKs for different languages are an exception and should follow the best practices for that language."),Object(a.b)("h3",{id:"go"},"Go"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://golang.org/doc/effective_go.html"}),"Effective Go")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/golang/go/wiki/CodeReviewComments"}),"Go code review comments"))),Object(a.b)("h3",{id:"typescript-and-angular"},"TypeScript and Angular"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://angular.io/guide/styleguide"}),"Angular coding style guide"))),Object(a.b)("h3",{id:"sdks"},"SDKs"),Object(a.b)("p",null,"All SDKs should be generated with ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator-cli"}),"OpenAPI Generator")," using our generated ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/onepanelio/core/blob/master/api/api.swagger.json"}),"API specification file"),". See our Python SDK's ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/onepanelio/python-sdk/blob/master/Makefile"}),"Makefile")," for reference."),Object(a.b)("h2",{id:"documentation-style-guide"},"Documentation style guide"),Object(a.b)("p",null,"We welcome all contributions and follow these highlights from ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.google.com/style/highlights"}),"Google developer documentation style guide"),"."),Object(a.b)("p",null,"Our documentation site is built on ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://v2.docusaurus.io/"}),"Docusaurus"),"."),Object(a.b)("h2",{id:"project-repositories"},"Project repositories"),Object(a.b)("p",null,"Onepanel consists of the following repositories. See ",Object(a.b)("inlineCode",{parentName:"p"},"CONTRIBUTING.md")," file in each repository for more information."),Object(a.b)("h3",{id:"platform"},"Platform"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/onepanelio/core/"}),"Core API")," - Code base for backend (Go)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/onepanelio/core-ui/"}),"Core UI")," - Code base for UI (Angular + TypeScript)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/onepanelio/cli/"}),"CLI")," - Code base for Go CLI for installation and management (Go)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/onepanelio/core-ui/"}),"Manifests")," - Kustomize manifests used by CLI for installation and management (YAML)")),Object(a.b)("h3",{id:"sdks-1"},"SDKs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/onepanelio/python-sdk/"}),"Python SDK")," - Python SDK for automation")),Object(a.b)("h3",{id:"documentation"},"Documentation"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/onepanelio/core-docs/"}),"Documentation")," - The repository for this site"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/onepanelio/core-api-docs/"}),"API Documentation")," - Documentation if you choose to use the API directly")))}u.isMDXComponent=!0},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,m=s["".concat(i,".").concat(d)]||s[d]||p[d]||a;return n?r.a.createElement(m,c({ref:t},b,{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var b=2;b<a;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);