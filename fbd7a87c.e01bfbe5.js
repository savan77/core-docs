/*! For license information please see fbd7a87c.e01bfbe5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(1),r=(a(0),a(126)),o=a(150),c=a(151);const l={title:"Quick start",sidebar_label:"Quick start"},i={id:"getting-started/quickstart",title:"Quick start",description:"The quickest way to get started is to install and run Onepanel locally on your desktop. You can then deploy it on [public cloud](../deployment/overview#installing-on-public-cloud) to leverage distributed execution on more powerful machines.",source:"@site/docs/getting-started/quickstart.md",permalink:"/docs/getting-started/quickstart",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/getting-started/quickstart.md",sidebar_label:"Quick start",sidebar:"gettingStarted",previous:{title:"Overview",permalink:"/docs/getting-started/overview"},next:{title:"Namespaces",permalink:"/docs/getting-started/concepts/namespaces"}},s=[{value:"Step 0: Create a local Kubernetes cluster",id:"step-0-create-a-local-kubernetes-cluster",children:[]},{value:"Step 1: Install Onepanel",id:"step-1-install-onepanel",children:[]}],b={rightToc:s};function p({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The quickest way to get started is to install and run Onepanel locally on your desktop. You can then deploy it on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../deployment/overview#installing-on-public-cloud"}),"public cloud")," to leverage distributed execution on more powerful machines."),Object(r.b)("p",null,"Installing and running Onepanel is easy. First, you install the CLI (",Object(r.b)("inlineCode",{parentName:"p"},"opctl"),"). Using ",Object(r.b)("inlineCode",{parentName:"p"},"opctl"),", you will generate a ",Object(r.b)("inlineCode",{parentName:"p"},"params.yaml")," file and configure your deployment. Once complete, you can access your deployment from any browser, use your Kubernetes auth to login and finally run a workflow."),Object(r.b)("h2",{id:"step-0-create-a-local-kubernetes-cluster"},"Step 0: Create a local Kubernetes cluster"),Object(r.b)("p",null,"You can run a single-node Kubernetes cluster on your desktop using a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://multipass.run/"}),"Multipass")," VM and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://microk8s.io/"}),"MicroK8s")," "),Object(r.b)("p",null,"First, install Multipass for your operating system:"),Object(r.b)(o.a,{defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"linux",mdxType:"TabItem"},Object(r.b)("div",{className:"admonition admonition-important"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Instructions")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://multipass.run/docs/installing-on-linux"}),"Installing on Linux"))))),Object(r.b)(c.a,{value:"macos",mdxType:"TabItem"},Object(r.b)("div",{className:"admonition admonition-important"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Instructions")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://multipass.run/docs/installing-on-macos"}),"Installing on macOS"))))),Object(r.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(r.b)("div",{className:"admonition admonition-important"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Instructions")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://multipass.run/docs/installing-on-windows"}),"Installing on Windows")))))),Object(r.b)("p",null,"With multipass installed, you can now create a VM to run MicroK8s. At least 4 Gigabytes of RAM and 40G of storage is recommended \u2013 you can pass these requirements when you launch the VM:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"multipass launch --name microk8s-vm --mem 4G --disk 40G\n")),Object(r.b)("p",null,"You can now find the IP address which has been allocated. Running:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"multipass list\n")),Object(r.b)("p",null,"Will return something like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"Name                    State             IPv4             Release\nmicrok8s-vm             RUNNING           10.72.145.216    Ubuntu 18.04 LTS\n")),Object(r.b)("p",null,"Take a note of this IP as you will need to add it to your ",Object(r.b)("inlineCode",{parentName:"p"},"params.yaml"),"."),Object(r.b)("p",null,"Run a shell into your VM:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"multipass shell microk8s-vm\n")),Object(r.b)("p",null,"Install the MicroK8s snap and configure the network:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo snap install microk8s --classic --channel=1.17/stable\nsudo iptables -P FORWARD ACCEPT\n")),Object(r.b)("p",null,"You will also need to add ",Object(r.b)("inlineCode",{parentName:"p"},"ubuntu")," user to ",Object(r.b)("inlineCode",{parentName:"p"},"microk8s")," group as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo usermod -a -G microk8s ubuntu\n")),Object(r.b)("p",null,"Then, enable the following required add-ons:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo microk8s.enable storage dns\n")),Object(r.b)("h2",{id:"step-1-install-onepanel"},"Step 1: Install Onepanel"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Download the latest ",Object(r.b)("inlineCode",{parentName:"p"},"opctl")," for your operating system from ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/onepanelio/core/releases/latest"}),"our release page"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Run the following command to initialize a ",Object(r.b)("inlineCode",{parentName:"p"},"params.yaml")," template for microk8s:"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl init --provider microk8s\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Populate ",Object(r.b)("inlineCode",{parentName:"p"},"params.yaml")," by following the instructions in the template, you can also refer to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../configuration/files"}),"configuration files")," section.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Get Kubernetes config from MicroK8s:"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"multipass exec microk8s-vm -- /snap/bin/microk8s.config > kubeconfig\n")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Finally, run the following command to deploy to your cluster:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"KUBECONFIG=./kubeconfig opctl apply\n")),Object(r.b)("div",{className:"admonition admonition-important"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The CLI will display the URL for accessing Onepanel once the deployment completes."))),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"Use the following command to get your auth token to log into Onepanel:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"KUBECONFIG=./kubeconfig opctl auth token\n")))}p.isMDXComponent=!0},126:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return a?r.a.createElement(d,l({ref:t},s,{components:a})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},128:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===o)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},150:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(128),c=a.n(o),l=a(90),i=a.n(l);const s=37,b=39;t.a=function(e){const{block:t,children:a,defaultValue:o,values:l}=e,[p,u]=Object(n.useState)(o),m=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},l.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:c()("tab-item",i.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>m.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case b:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(m,e.target,e),onFocus:()=>u(e),onClick:()=>u(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===p)[0]))}},151:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);