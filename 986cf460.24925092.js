(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(1),a=(n(0),n(135));const o={title:"Workspace Templates",sidebar_label:"Workspace Templates"},c={id:"reference/workspaces/templates",title:"Workspace Templates",description:":::tip",source:"@site/docs/reference/workspaces/templates.md",permalink:"/docs/reference/workspaces/templates",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/workspaces/templates.md",sidebar_label:"Workspace Templates",sidebar:"reference",previous:{title:"Overview",permalink:"/docs/reference/overview"},next:{title:"Workflow Templates",permalink:"/docs/reference/workflows/templates"}},i=[{value:"Getting started with Workspace Templates",id:"getting-started-with-workspace-templates",children:[]}],s={rightToc:i};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-tip"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"See our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/onepanelio/templates/tree/master/workspaces"}),"Templates repository")," for a list of ready to use Workspace Template."))),Object(a.b)("h2",{id:"getting-started-with-workspace-templates"},"Getting started with Workspace Templates"),Object(a.b)("p",null,"You can define reusable templates for Workspaces. Workspace Templates are a combination of Docker images and a YAML definition. Here's a simple NGINX Workspace Template definition:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'# Docker containers that are part of the Workspace\ncontainers:\n- name: http\n  image: nginxdemos/hello\n  ports:\n  - containerPort: 80\n    name: http\n  # Volumes to be mounted in this container\n  # Onepanel will automatically create these volumes and mount them to the container\n  volumeMounts:\n  - name: data\n    mountPath: /data\n# Ports that need to be exposed\nports:\n- name: http\n  port: 80\n  protocol: TCP\n  targetPort: 80\n# Routes that will map to ports\nroutes:\n- match:\n  - uri:\n      prefix: /\n  route:\n  - destination:\n      port:\n        number: 80\n# DAG Workflow to be executed once a Workspace action completes\npostExecutionWorkflow:\n  entrypoint: main\n  templates:\n  - name: main\n    dag:\n       tasks:\n       - name: slack-notify\n         template: slack-notify\n  -  name: slack-notify\n     container:\n       image: technosophos/slack-notify\n       args:\n       - SLACK_USERNAME=onepanel SLACK_TITLE="Your workspace is ready" SLACK_ICON=https://www.gravatar.com/avatar/5c4478592fe00878f62f0027be59c1bd SLACK_MESSAGE="Your workspace is now running" ./slack-notify\n       command:\n       - sh\n       - -c\n')))}p.isMDXComponent=!0},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},m=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.a.createElement(f,i({ref:t},p,{components:n})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);