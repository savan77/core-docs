(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),b=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=b(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return n?l.a.createElement(d,c({ref:t},s,{components:n})):l.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(1),l=n(6),r=(n(0),n(119)),o={title:"macOS installation guide",sidebar_label:"Installing on macOS"},c={id:"installation-guides/macos",title:"macOS installation guide",description:"This document outlines the installation steps for macOS.",source:"@site/docs/installation-guides/macos.md",permalink:"/core-docs/docs/installation-guides/macos",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/installation-guides/macos.md",sidebar_label:"Installing on macOS",sidebar:"someSidebar",previous:{title:"Linux installation guide",permalink:"/core-docs/docs/installation-guides/linux"},next:{title:"Windows installation guide",permalink:"/core-docs/docs/installation-guides/windows"}},i=[{value:"Install MicroK8s with Multipass",id:"install-microk8s-with-multipass",children:[]},{value:"Install Onepanel Core",id:"install-onepanel-core",children:[]}],s={rightToc:i};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This document outlines the installation steps for macOS."),Object(r.b)("h2",{id:"install-microk8s-with-multipass"},"Install MicroK8s with Multipass"),Object(r.b)("p",null,"First install Multipass:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"brew cask install multipass\n")),Object(r.b)("p",null,"With multipass installed, you can now create a VM to run MicroK8s. At least 4 Gigabytes of RAM and 40G of storage is recommended \u2013 you can pass these requirements when you launch the VM:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"multipass launch --name microk8s-vm --mem 4G --disk 40G\n")),Object(r.b)("p",null,"You can now find the IP address which has been allocated. Running:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"multipass list\n")),Object(r.b)("p",null,"Will return something like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"Name                    State             IPv4             Release\nmicrok8s-vm             RUNNING           10.72.145.216    Ubuntu 18.04 LTS\n")),Object(r.b)("p",null,"Take a note of this IP as you will need it for your ",Object(r.b)("inlineCode",{parentName:"p"},"params.yaml")," file and for accessing the application."),Object(r.b)("p",null,"Run a shell into your VM:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"multipass shell microk8s-vm\n")),Object(r.b)("p",null,"Install the MicroK8s snap and configure the network:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo snap install microk8s --classic --channel=1.17/stable\nsudo iptables -P FORWARD ACCEPT\n")),Object(r.b)("p",null,"You will also need to add ",Object(r.b)("inlineCode",{parentName:"p"},"ubuntu")," user to ",Object(r.b)("inlineCode",{parentName:"p"},"microk8s")," group as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo usermod -a -G microk8s ubuntu\n")),Object(r.b)("p",null,"Then, enable the following required add-ons:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"microk8s.enable storage dns\n")),Object(r.b)("p",null,"You can optionally enabled Kubernetes dashboard:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"microk8s.enable dashboard\n")),Object(r.b)("h2",{id:"install-onepanel-core"},"Install Onepanel Core"),Object(r.b)("p",null,"Download the latest ",Object(r.b)("inlineCode",{parentName:"p"},"opctl")," for macOS from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/onepanelio/cli/releases/latest"}),"our release page")),Object(r.b)("p",null,"Run the following command to create ",Object(r.b)("inlineCode",{parentName:"p"},"params.yaml")," file for microk8s:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"opctl init --provider microk8s --enable-efk-logging\n")),Object(r.b)("p",null,"Populate ",Object(r.b)("inlineCode",{parentName:"p"},"params.yaml")," as outlined in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"installation-guides/configuration"}),"configuration documentation")),Object(r.b)("p",null,"Get Kubernetes config from MicroK8S:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"multipass exec <microk8s-vm-name> -- /snap/bin/microk8s.config > kubeconfig\n")),Object(r.b)("p",null,"Finally, run the following command to deploy to your cluster:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"KUBECONFIG=./kubeconfig opctl apply\n")),Object(r.b)("p",null,"Once deployment is complete, use the follownig command to get your auth token to log into Onepanel:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"KUBECONFIG=./kubeconfig opctl auth token\n")),Object(r.b)("p",null,"You can then access Onepanel Core by going to ",Object(r.b)("inlineCode",{parentName:"p"},"http://<microk8s-vm-ip>:<uiHTTPort>")))}b.isMDXComponent=!0}}]);