(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(6),a=(n(0),n(119)),i={title:"Contributing",sidebar_label:"Contributing"},c={id:"getting-started/contributing",title:"Contributing",description:"Welcome to Onepanel Core Project! We are excited to have you as part of the community and welcome all contributions.",source:"@site/docs/getting-started/contributing.md",permalink:"/core-docs/docs/getting-started/contributing",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/getting-started/contributing.md",sidebar_label:"Contributing",sidebar:"gettingStarted",previous:{title:"Overview",permalink:"/core-docs/docs/getting-started/overview"}},l=[{value:"Getting started as a contributor",id:"getting-started-as-a-contributor",children:[]},{value:"Code of Conduct",id:"code-of-conduct",children:[]},{value:"Project repositories",id:"project-repositories",children:[{value:"Platform",id:"platform",children:[]},{value:"SDKs",id:"sdks",children:[]},{value:"Documentation",id:"documentation",children:[]}]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Welcome to Onepanel Core Project! We are excited to have you as part of the community and welcome all contributions."),Object(a.b)("h2",{id:"getting-started-as-a-contributor"},"Getting started as a contributor"),Object(a.b)("p",null,"This document outlines project structure, guidelines and serves as single source of truth for contributions. Our goal is to make it as easy for everyone to contribute to the code base, documentation and components."),Object(a.b)("h2",{id:"code-of-conduct"},"Code of Conduct"),Object(a.b)("p",null,"Please make sure to read and observe our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/onepanelio/core/blob/master/CODE_OF_CONDUCT.md"}),"Code of Conduct"),"."),Object(a.b)("h2",{id:"project-repositories"},"Project repositories"),Object(a.b)("p",null,"Onepanel Core consists of the following repositories:"),Object(a.b)("h3",{id:"platform"},"Platform"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/onepanelio/core/"}),"Core API")," - Code base for APIs"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/onepanelio/core-ui/"}),"Core UI")," - Code base for UI"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/onepanelio/cli/"}),"CLI")," - Code base for Go CLI for installing and managing Onepanel Core"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/onepanelio/core-ui/"}),"Manifests")," - Kustomize manifests used by CLI for installing and managing Onepanel Core")),Object(a.b)("h3",{id:"sdks"},"SDKs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/onepanelio/python-sdk/"}),"Python SDK")," - Python SDK for making API requests and automation")),Object(a.b)("h3",{id:"documentation"},"Documentation"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/onepanelio/core-docs/"}),"Documentation")," - The repository for this site"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/onepanelio/core-api-docs/"}),"API Documentation")," - Documentation if you choose to use the API directly")))}s.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return n?o.a.createElement(m,c({ref:t},u,{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);