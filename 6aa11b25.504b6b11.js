(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n(1),r=n(6),o=(n(0),n(129)),s={title:"Workflows",sidebar_label:"Workflows"},c={id:"getting-started/concepts/workflows",title:"Workflows",description:":::note",source:"@site/docs/getting-started/concepts/workflows.md",permalink:"/docs/getting-started/concepts/workflows",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/getting-started/concepts/workflows.md",sidebar_label:"Workflows",sidebar:"gettingStarted",previous:{title:"Workspaces",permalink:"/docs/getting-started/concepts/workspaces"},next:{title:"Environment variables",permalink:"/docs/getting-started/concepts/environment-variables"}},i=[{value:"Workflow Templates",id:"workflow-templates",children:[{value:"Inputs and Outputs",id:"inputs-and-outputs",children:[]}]}],p={rightToc:i};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/concepts/environment-variables"}),"Environment Variables")," for more information on how environment variables can be added to Workspaces."))),Object(o.b)("div",{className:"admonition admonition-note"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Onepanel's Workflows and Workflow Templates are based on the excellent ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/argoproj/argo"}),"Argo Workflows")," project. Most functionality is the same except that Onepanel Workflows entrypoint should always be a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/argoproj/argo/tree/master/examples#steps"}),"DAG template")," and do not support ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/argoproj/argo/tree/master/examples#steps"}),"Steps templates"),"."))),Object(o.b)("h2",{id:"workflow-templates"},"Workflow Templates"),Object(o.b)("p",null,"All workflow templates are defined as Directed Acyclic Graphs (DAG):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# The template to use as entrypoint\nentrypoint: main\ntemplates:\n- name: main            # Name of template\n  dag:                  # Indicates that this is a DAG template\n    tasks:\n    - name: A           # First task to execute\n      template: echo    # The template to use for first task in DAG\n      arguments:\n        parameters:\n        - name: message\n          value: A\n    - name: B\n      dependencies: [A]\n      template: echo\n      arguments:\n        parameters:\n        - name: message\n          value: B\n    - name: C\n      dependencies: [A]\n      template: echo\n      arguments:\n        parameters:\n        - name: message\n          value: C\n    - name: D\n      dependencies: [B, C]\n      template: echo\n      arguments:\n        parameters:\n        - name: message\n          value: D\n- name: echo\n  inputs:\n    parameters:\n    - name: message\n  container:\n    image: alpine:3.7\n    command: [echo, "{{inputs.parameters.message}}"]\n')),Object(o.b)("h3",{id:"inputs-and-outputs"},"Inputs and Outputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"entrypoint: main\narguments:\n  parameters:\n  - name: model-path\n    value: my-data/output\ntemplates:\n- name: main\n  dag:\n    tasks:\n    - name: input-output\n      template: input-output\n- name: input-output\n  container:\n    args:\n    - |\n      printenv \\\n      && ls /tmp/input \\\n        && mkdir -p /tmp/output \\\n        && echo \"hello\" > /tmp/output/message.txt \\\n        && sleep 15\n    command:\n    - bash\n    - -c\n    image: bash\n  inputs:\n    artifacts:\n    # Download files from S3 prefix random/input into local folder /tmp/input/\n    # # This downloads from the default S3 artifact repository for this namespace\n    - name: input\n      path: /tmp/input/\n      s3:\n        key: my-data/input\n  outputs:\n    artifacts:\n    # Upload files from local /tmp/output folder to S3 prefix random/output\n    # This uploads to the default S3 artifact repository for this namespace\n    - name: message\n      path: /tmp/output\n      s3:\n        key: '{{workflow.parameters.model-path}}'\n\n")))}m.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),m=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=m(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=m(n),d=a,b=l["".concat(s,".").concat(d)]||l[d]||u[d]||o;return n?r.a.createElement(b,c({ref:t},p,{components:n})):r.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);