(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return a})),t.d(n,"default",(function(){return u}));var l=t(1),r=(t(0),t(124));const o={title:"Overview",sidebar_label:"Overview"},i={id:"deployment/overview",title:"Overview",description:"You can install Onepanel Core on:",source:"@site/docs/deployment/overview.md",permalink:"/core-docs/docs/deployment/overview",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/deployment/overview.md",sidebar_label:"Overview",sidebar:"deployment",next:{title:"AKS installation guide",permalink:"/core-docs/docs/deployment/public/aks"}},a=[{value:"Installing on public cloud",id:"installing-on-public-cloud",children:[]},{value:"Installing on a single node cluster",id:"installing-on-a-single-node-cluster",children:[]}],c={rightToc:a};function u({components:e,...n}){return Object(r.b)("wrapper",Object(l.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You can install Onepanel Core on:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Public cloud"),Object(r.b)("li",{parentName:"ul"},"Single node cluster on desktop, edge or cloud")),Object(r.b)("h2",{id:"installing-on-public-cloud"},"Installing on public cloud"),Object(r.b)("p",null,"Follow these guides to install on single node cluster or desktop."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To install on Azure Kubernetes Engine (AKS) follow ",Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"public/aks"}),"AKS installation guide")),Object(r.b)("li",{parentName:"ul"},"To install on Google Kubernetes Engine (GKE) follow ",Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"public/gke"}),"GKE installation guide")),Object(r.b)("li",{parentName:"ul"},"To install on Elastic Kubernetes Service (EKS) follow ",Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"public/eks"}),"EKS installation guide"))),Object(r.b)("h2",{id:"installing-on-a-single-node-cluster"},"Installing on a single node cluster"),Object(r.b)("p",null,"Follow these guides to install on single node cluster or desktop."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To install on Linux follow ",Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"single-node/linux"}),"Linux installation guide")),Object(r.b)("li",{parentName:"ul"},"To install on macOS follow ",Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"single-node/macos"}),"macOS installation guide")),Object(r.b)("li",{parentName:"ul"},"To install on Windows follow ",Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"single-node/windows"}),"Windows installation guide"))))}u.isMDXComponent=!0},124:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return O}));var l=t(0),r=t.n(l);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),s=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a({},n,{},e)),t},b=function(e){var n=s(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=Object(l.forwardRef)((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(t),d=l,O=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return t?r.a.createElement(O,a({ref:n},u,{components:t})):r.a.createElement(O,a({ref:n},u))}));function O(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var u=2;u<o;u++)i[u]=t[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);