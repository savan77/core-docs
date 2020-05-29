(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(2),r=(n(0),n(149));const a={title:"Contributing",sidebar_label:"Contributing"},i={id:"getting-started/contributing",title:"Contributing",description:"Welcome to Onepanel CE Project! We are excited to have you as part of the community and welcome all contributions.",source:"@site/docs/getting-started/contributing.md",permalink:"/docs/getting-started/contributing",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/getting-started/contributing.md",sidebar_label:"Contributing",sidebar:"gettingStarted",previous:{title:"Creating annotation models on CVAT",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_annotation_model"}},c=[{value:"Getting started as a contributor",id:"getting-started-as-a-contributor",children:[]},{value:"Code of conduct",id:"code-of-conduct",children:[]},{value:"Coding conventions",id:"coding-conventions",children:[{value:"Go",id:"go",children:[]},{value:"TypeScript and Angular",id:"typescript-and-angular",children:[]},{value:"SDKs",id:"sdks",children:[]}]},{value:"Documentation style guide",id:"documentation-style-guide",children:[]},{value:"Project repositories",id:"project-repositories",children:[{value:"Platform",id:"platform",children:[]},{value:"SDKs",id:"sdks-1",children:[]},{value:"Documentation",id:"documentation",children:[]}]}],l={rightToc:c};function u({components:e,...t}){return Object(r.b)("wrapper",Object(o.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Welcome to Onepanel CE Project! We are excited to have you as part of the community and welcome all contributions."),Object(r.b)("h2",{id:"getting-started-as-a-contributor"},"Getting started as a contributor"),Object(r.b)("p",null,"This document outlines project structure, guidelines and serves as a single source of truth for contributions. Our goal is to make it as easy for everyone to contribute to the code base, documentation, and components."),Object(r.b)("h2",{id:"code-of-conduct"},"Code of conduct"),Object(r.b)("p",null,"Make sure to read and observe our ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/onepanelio/core/blob/master/CODE_OF_CONDUCT.md"}),"Code of Conduct"),"."),Object(r.b)("h2",{id:"coding-conventions"},"Coding conventions"),Object(r.b)("p",null,"All code should be written in the languages and frameworks listed below and follow that language's conventions. SDKs for different languages are an exception and should follow the best practices for that language."),Object(r.b)("h3",{id:"go"},"Go"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://golang.org/doc/effective_go.html"}),"Effective Go")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/golang/go/wiki/CodeReviewComments"}),"Go code review comments"))),Object(r.b)("h3",{id:"typescript-and-angular"},"TypeScript and Angular"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://angular.io/guide/styleguide"}),"Angular coding style guide"))),Object(r.b)("h3",{id:"sdks"},"SDKs"),Object(r.b)("p",null,"All SDKs should be generated with ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator-cli"}),"OpenAPI Generator")," using our generated ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/onepanelio/core/blob/master/api/api.swagger.json"}),"API specification file"),". See our Python SDK's ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/onepanelio/python-sdk/blob/master/Makefile"}),"Makefile")," for reference."),Object(r.b)("h2",{id:"documentation-style-guide"},"Documentation style guide"),Object(r.b)("p",null,"We welcome all contributions and follow these highlights from ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.google.com/style/highlights"}),"Google developer documentation style guide"),"."),Object(r.b)("p",null,"Our documentation site is built on ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://v2.docusaurus.io/"}),"Docusaurus"),"."),Object(r.b)("h2",{id:"project-repositories"},"Project repositories"),Object(r.b)("p",null,"Onepanel consists of the following repositories. See ",Object(r.b)("inlineCode",{parentName:"p"},"CONTRIBUTING.md")," file in each repository for more information."),Object(r.b)("h3",{id:"platform"},"Platform"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/onepanelio/core/"}),"Core API")," - Code base for backend (Go)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/onepanelio/core-ui/"}),"Core UI")," - Code base for UI (Angular + TypeScript)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/onepanelio/cli/"}),"CLI")," - Code base for Go CLI for installation and management (Go)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/onepanelio/core-ui/"}),"Manifests")," - Kustomize manifests used by CLI for installation and management (YAML)")),Object(r.b)("h3",{id:"sdks-1"},"SDKs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/onepanelio/python-sdk/"}),"Python SDK")," - Python SDK for automation")),Object(r.b)("h3",{id:"documentation"},"Documentation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/onepanelio/core-docs/"}),"Documentation")," - The repository for this site"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/onepanelio/core-api-docs/"}),"API Documentation")," - Documentation if you choose to use the API directly")))}u.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=o,m=s["".concat(i,".").concat(d)]||s[d]||p[d]||a;return n?r.a.createElement(m,c(c({ref:t},u),{},{components:n})):r.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);