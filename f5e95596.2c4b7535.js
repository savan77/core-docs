(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{125:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(1),o=a(6),r=(a(0),a(132)),c={title:"AKS deployment guide",sidebar_label:"AKS deployment"},i={id:"deployment/public/aks",title:"AKS deployment guide",description:"This document outlines the installation steps for Azure Kubernetes Service (AKS).",source:"@site/docs/deployment/public/aks.md",permalink:"/docs/deployment/public/aks",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/deployment/public/aks.md",sidebar_label:"AKS deployment",sidebar:"deployment",previous:{title:"Overview",permalink:"/docs/deployment/overview"},next:{title:"EKS deployment guide",permalink:"/docs/deployment/public/eks"}},l=[{value:"Launch an AKS cluster",id:"launch-an-aks-cluster",children:[]},{value:"Install Onepanel",id:"install-onepanel",children:[]}],b={rightToc:l};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This document outlines the installation steps for Azure Kubernetes Service (AKS)."),Object(r.b)("h2",{id:"launch-an-aks-cluster"},"Launch an AKS cluster"),Object(r.b)("p",null,"We recommend launching a cluster with 2 ",Object(r.b)("inlineCode",{parentName:"p"},"Standard_D4s_v3")," nodes to start, with autoscaling and network policy enabled. You can add additional CPU/GPU node pools as needed later."),Object(r.b)("p",null,"Here is a sample ",Object(r.b)("inlineCode",{parentName:"p"},"az")," command to create a bare minimum cluster:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"az aks create --resource-group <resource-group> --name <cluster-name> \\\n    --node-count 2 \\\n    --node-vm-size Standard_D4s_v3 \\\n    --node-osdisk-size 100 \\\n    --min-count 2 \\\n    --max-count 2 \\\n    --enable-cluster-autoscaler \\\n    --network-plugin azure \\\n    --network-policy azure \\\n    --enable-addons monitoring \\\n    --generate-ssh-keys\n")),Object(r.b)("div",{className:"admonition admonition-note"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"--enable-addons monitoring")," flag in the command above enables Azure Monitor for log aggregation which can incur additional charges. You can optionally remove this flag and add ",Object(r.b)("inlineCode",{parentName:"p"},"--enable-efk-logging")," to ",Object(r.b)("inlineCode",{parentName:"p"},"opctl")," command below."))),Object(r.b)("p",null,"You can then get access credentials by running:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"az aks get-credentials --resource-group <resource-group> --name <cluster-name> --admin\n")),Object(r.b)("h2",{id:"install-onepanel"},"Install Onepanel"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Download the latest ",Object(r.b)("inlineCode",{parentName:"p"},"opctl")," for your operating system from ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/onepanelio/core/releases/latest"}),"our release page"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Run the following command to initialize a ",Object(r.b)("inlineCode",{parentName:"p"},"params.yaml")," template for AKS:"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl init --provider aks \\\n    --enable-https \\\n    --enable-cert-manager \\\n    --dns-provider <dns-provider>\n")),Object(r.b)("div",{className:"admonition admonition-note"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"--enable-https")," flag is optional and requires a TLS certificate, but it is highly recommended. You can optionally set the ",Object(r.b)("inlineCode",{parentName:"p"},"--enable-cert-manager")," and ",Object(r.b)("inlineCode",{parentName:"p"},"--dns-provider")," flags, so TLS certificates are automatically created and renewed via ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://letsencrypt.org/"}),"Let's Encrypt"),". If you do not set this flag and your DNS provider isn't one of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/deployment/configuration/tls#supported-dns-providers"}),"supported DNS providers"),", then you have to create a wildcard certificate and manually manage it."))),Object(r.b)("div",{className:"admonition admonition-note"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you have GPU nodes, you need to set the ",Object(r.b)("inlineCode",{parentName:"p"},"--gpu-device-plugins")," flag. Valid values are ",Object(r.b)("inlineCode",{parentName:"p"},"nvidia")," and ",Object(r.b)("inlineCode",{parentName:"p"},"amd")," or a comma separated combination of both ",Object(r.b)("inlineCode",{parentName:"p"},"nvidia,amd"),"."))),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Populate ",Object(r.b)("inlineCode",{parentName:"p"},"params.yaml")," by following the instructions in the template, you can also refer to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/deployment/configuration/files"}),"configuration files")," section.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Finally, run the following command to deploy to your cluster:"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl apply\n")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Once the deployment completes, the CLI will display the IP and wildcard domain you need to use to setup your DNS. You can also get this information again by running:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl app ip\n")),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"Create an ",Object(r.b)("inlineCode",{parentName:"li"},"A")," record in your DNS provider based on the instructions above.")),Object(r.b)("div",{className:"admonition admonition-tip"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Note that you should use a wildcard ",Object(r.b)("inlineCode",{parentName:"p"},"A")," record, for example: ",Object(r.b)("inlineCode",{parentName:"p"},"*.example.com")," or ",Object(r.b)("inlineCode",{parentName:"p"},"*.subdomain.example.com")))),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"Use the following command to get your auth token to log into Onepanel:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl auth token\n")))}p.isMDXComponent=!0},132:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},d=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,u=d["".concat(c,".").concat(m)]||d[m]||s[m]||r;return a?o.a.createElement(u,i({ref:t},b,{components:a})):o.a.createElement(u,i({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<r;b++)c[b]=a[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);