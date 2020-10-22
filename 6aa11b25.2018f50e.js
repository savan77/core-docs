(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),b=a,u=m["".concat(c,".").concat(b)]||m[b]||d[b]||o;return n?r.a.createElement(u,s(s({ref:t},l),{},{components:n})):r.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=(n(0),n(114));const o={title:"Workflows",sidebar_label:"Workflows",description:"Onepanel Workflows allow you to compose and chain multiple tasks or tools in a reproducible, scalable manner"},c={unversionedId:"getting-started/concepts/workflows",id:"getting-started/concepts/workflows",isDocsHomePage:!1,title:"Workflows",description:"Onepanel Workflows allow you to compose and chain multiple tasks or tools in a reproducible, scalable manner",source:"@site/docs/getting-started/concepts/workflows.md",slug:"/getting-started/concepts/workflows",permalink:"/docs/getting-started/concepts/workflows",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/getting-started/concepts/workflows.md",version:"current",sidebar_label:"Workflows",sidebar:"gettingStarted",previous:{title:"Workspaces",permalink:"/docs/getting-started/concepts/workspaces"},next:{title:"Environment variables",permalink:"/docs/getting-started/concepts/environment-variables"}},s=[{value:"Workflow Templates",id:"workflow-templates",children:[]}],i={rightToc:s};function l({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Workflows allow you to compose and chain multiple tasks or tools in a reproducible, scalable manner. Workflows are defined as Directed Acyclic Graphs (DAG), where each task can contain one or more Docker containers. This allows you to run each task in the DAG on a single machine or on a different machines with their own dedicated resources. For example, you can create a Workflow that scrapes data from multiple sources, runs each task on a dedicated CPU machine and then passes this data to a different task that trains a model on the scraped data on a GPU machine."),Object(r.b)("p",null,"Onepanel Workflows are similar to AWS Step Functions, but are Kubernetes-native, are defined by YAML and Docker images and each task in the Workflow can run on different machines. They can also be run on any cloud provider that supports Kubernetes."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/concepts/environment-variables"}),"Environment variables")," for more information on how environment variables can be added to Workspaces."))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Onepanel's Workflows are based on the excellent ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/argoproj/argo"}),"Argo Workflows")," project. Most functionality is the same, one exception is that Onepanel Workflows entrypoint should always be a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/argoproj/argo/tree/master/examples#steps"}),"DAG template")," and do not support ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/argoproj/argo/tree/master/examples#steps"}),"Steps templates"),". We also inject certain fields and abstract Argo to provide additional functionality and to simplify Workflow creation."))),Object(r.b)("h2",{id:"workflow-templates"},"Workflow Templates"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"See Reference section for more information on defining ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/workflows/templates"}),"Workflow Templates")))),Object(r.b)("p",null,"You can define reusable templates for Workflows. All Workflow Templates are defined as Directed Acyclic Graphs (DAG), here's an example of how a DAG template is defined:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# The template to use as entrypoint\nentrypoint: main\ntemplates:\n- name: main            \n  dag:                      # Indicates that this is a DAG template\n    tasks:\n    - name: A               # First task to execute\n      template: echo        # The template to use for first task in DAG\n      arguments:            # Arguments to pass into the "echo" template\n        parameters:\n        - name: message\n          value: A\n    - name: B\n      dependencies: [A]\n      template: echo\n      arguments:\n        parameters:\n        - name: message\n          value: B\n    - name: C\n      dependencies: [A]\n      template: echo\n      arguments:\n        parameters:\n        - name: message\n          value: C\n    - name: D\n      dependencies: [B, C]\n      template: echo\n      arguments:\n        parameters:\n        - name: message\n          value: D\n- name: echo                # Definition of "echo" template used by the nodes in DAG\n  inputs:                   # Name of inputs \n    parameters:\n    - name: message\n  container:\n    image: alpine:3.7\n    command: [echo, "{{inputs.parameters.message}}"]\n')))}l.isMDXComponent=!0}}]);