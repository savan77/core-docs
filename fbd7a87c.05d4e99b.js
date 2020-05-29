/*! For license information please see fbd7a87c.05d4e99b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),c=(a(0),a(149)),r=a(156),o=a(154);const l={title:"Quick start",sidebar_label:"Quick start"},i={id:"getting-started/quickstart",title:"Quick start",description:"It's easy to get started with Onepanel. First, you install the CLI (opctl) and then using opctl, you generate a params.yaml file and update it to configure your deployment. Once complete, you can access your deployment from any browser using your Kubernetes authentication token. Finally, you can run a Workflow or create a Workspace.",source:"@site/docs/getting-started/quickstart.md",permalink:"/docs/getting-started/quickstart",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/getting-started/quickstart.md",sidebar_label:"Quick start",sidebar:"gettingStarted",next:{title:"Namespaces",permalink:"/docs/getting-started/concepts/namespaces"}},s=[{value:"Step 0: Understand the concepts",id:"step-0-understand-the-concepts",children:[]},{value:"Step 1: Create a Kubernetes cluster",id:"step-1-create-a-kubernetes-cluster",children:[]},{value:"Step 2: Install Onepanel",id:"step-2-install-onepanel",children:[]},{value:"Step 3: Create a simple Workflow",id:"step-3-create-a-simple-workflow",children:[]}],b={rightToc:s};function p({components:e,...t}){return Object(c.b)("wrapper",Object(n.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"It's easy to get started with Onepanel. First, you install the CLI (",Object(c.b)("inlineCode",{parentName:"p"},"opctl"),") and then using ",Object(c.b)("inlineCode",{parentName:"p"},"opctl"),", you generate a ",Object(c.b)("inlineCode",{parentName:"p"},"params.yaml")," file and update it to configure your deployment. Once complete, you can access your deployment from any browser using your Kubernetes authentication token. Finally, you can run a Workflow or create a Workspace."),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The steps in the Quick start allow you to quickly setup a Onepanel cluster for testing. To setup a production cluster with TLS and auto scaling enabled see ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/deployment/overview#installing-on-public-cloud"}),"instructions for your cloud provider")))),Object(c.b)("h2",{id:"step-0-understand-the-concepts"},"Step 0: Understand the concepts"),Object(c.b)("p",null,"First, take a look at ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started/concepts/namespaces"}),"concepts")," to understand the different components in Onepanel."),Object(c.b)("h2",{id:"step-1-create-a-kubernetes-cluster"},"Step 1: Create a Kubernetes cluster"),Object(c.b)("p",null,"Next, create a Kubernetes cluster in one of the following cloud providers:"),Object(c.b)(r.a,{defaultValue:"aks",values:[{label:"Azure AKS",value:"aks"},{label:"Amazon EKS",value:"eks"},{label:"Google Cloud GKE",value:"gke"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"aks",mdxType:"TabItem"},Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Make sure ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest"}),"Azure CLI")," (",Object(c.b)("inlineCode",{parentName:"p"},"az"),") is installed before proceeding."))),Object(c.b)("p",null,"Run this ",Object(c.b)("inlineCode",{parentName:"p"},"az")," command to create a bare minimum cluster with 2 ",Object(c.b)("inlineCode",{parentName:"p"},"Standard_D4s_v3")," nodes:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"az aks create --resource-group <resource-group> --name <cluster-name> \\\n    --node-count 2 \\\n    --node-vm-size Standard_D4s_v3 \\\n    --node-osdisk-size 100 \\\n    --min-count 2 \\\n    --max-count 2 \\\n    --enable-cluster-autoscaler \\\n    --network-plugin azure \\\n    --network-policy azure \\\n    --enable-addons monitoring \\\n    --generate-ssh-keys\n")),Object(c.b)("p",null,"You can then get access credentials by running:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"az aks get-credentials --resource-group <resource-group> --name <cluster-name> --admin\n"))),Object(c.b)(o.a,{value:"eks",mdxType:"TabItem"},Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Make sure ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://eksctl.io/introduction/#installation"}),"Amazon EKS CLI")," (",Object(c.b)("inlineCode",{parentName:"p"},"eksctl"),") is installed before proceeding."))),Object(c.b)("p",null,"Run this ",Object(c.b)("inlineCode",{parentName:"p"},"eksctl")," commands to create a bare minimum cluster with 2 ",Object(c.b)("inlineCode",{parentName:"p"},"m5.xlarge")," nodes:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"eksctl create cluster --name=<cluster-name> --region <region> \\\n    --nodes 2  \\\n    --node-type m5.xlarge \\\n    --node-volume-size 100 \\\n    --nodes-min 2 \\\n    --nodes-max 2 \\\n    --asg-access \\\n    --managed \\\n    --ssh-access\n")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"eksctl")," command above will automatically retrieve your cluster's access credentials but you can also get them by running:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"eksctl utils write-kubeconfig --cluster=<cluster-name> --region <region>\n"))),Object(c.b)(o.a,{value:"gke",mdxType:"TabItem"},Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Make sure ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/sdk/install"}),"Google Cloud SDK")," (",Object(c.b)("inlineCode",{parentName:"p"},"gcloud"),") is installed before proceeding."))),Object(c.b)("p",null,"Run this ",Object(c.b)("inlineCode",{parentName:"p"},"gcloud")," command to create a bare minimum cluster with 2 ",Object(c.b)("inlineCode",{parentName:"p"},"n1-standard-4")," nodes:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"gcloud container --project <project-name> clusters create <cluster-name> --zone <zone> \\\n    --num-nodes 2 \\\n    --machine-type n1-standard-4 \\\n    --disk-size 100 \\\n    --min-nodes 0 \\\n    --max-nodes 2 \\\n    --enable-autoscaling \\\n    --enable-network-policy \\\n    --enable-stackdriver-kubernetes \\\n    --addons HorizontalPodAutoscaling,HttpLoadBalancing\n")),Object(c.b)("p",null,"The command above will automatically retrieve your cluster's access credentials but you can also get them by running:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"gcloud container clusters get-credentials <cluster-name> --zone <zone>\n")))),Object(c.b)("h2",{id:"step-2-install-onepanel"},"Step 2: Install Onepanel"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Download the latest ",Object(c.b)("inlineCode",{parentName:"li"},"opctl")," for your operating system from ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/onepanelio/core/releases/latest"}),"our release page"),".")),Object(c.b)(r.a,{defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"linux",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Download the binary\ncurl -sLO https://github.com/onepanelio/core/releases/download/v0.9.0/opctl-linux-amd64\n\n# Make binary executable\nchmod +x opctl-linux-amd64\n\n# Move binary to path\nmv ./opctl-linux-amd64 /usr/local/bin/opctl\n\n# Test installation\nopctl version\n"))),Object(c.b)(o.a,{value:"macos",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Download the binary\ncurl -sLO https://github.com/onepanelio/core/releases/download/v0.9.0/opctl-macos-amd64\n\n# Make binary executable\nchmod +x opctl-macos-amd64\n\n# Move binary to path\nmv ./opctl-macos-amd64 /usr/local/bin/opctl\n\n# Test installation\nopctl version\n")))),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"Run the following command to initialize a ",Object(c.b)("inlineCode",{parentName:"li"},"params.yaml")," template for your provider:")),Object(c.b)(r.a,{defaultValue:"aks",values:[{label:"Azure AKS",value:"aks"},{label:"Amazon EKS",value:"eks"},{label:"Google Cloud GKE",value:"gke"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"aks",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl init --provider aks\n"))),Object(c.b)(o.a,{value:"eks",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl init --provider eks\n"))),Object(c.b)(o.a,{value:"gke",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl init --provider gke\n")))),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Populate ",Object(c.b)("inlineCode",{parentName:"p"},"params.yaml")," by following the instructions in the template, you can also refer to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/deployment/configuration/files#sections"}),"configuration file sections")," for more detailed information.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Finally, run the following command to deploy Onepanel to your cluster:"))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl apply\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"If the command completes but it indicates that your cluster is not ready, you can check status again by running ",Object(c.b)("inlineCode",{parentName:"p"},"opctl app status"),". If you're still seeing issues, run ",Object(c.b)("inlineCode",{parentName:"p"},"kubectl get pods --all-namespaces")," to see if there are any crashing pods."))),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},"Once the deployment completes, the CLI will display the IP and wildcard domain you need to use to setup your DNS. You can also get this information again by running:")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl app ip\n")),Object(c.b)("ol",{start:6},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Create the appropriate DNS record in your DNS provider based on the instructions above.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Wait a few minutes and check the URL mentioned in the instructions above. Your applications should load with a token screen as showng below:")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Use the following command to get your auth token to log into Onepanel:"))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"opctl auth token\n")),Object(c.b)("h2",{id:"step-3-create-a-simple-workflow"},"Step 3: Create a simple Workflow"),Object(c.b)("p",null,"Let's first create a simple Directed Acyclic Graph (DAG) Workflow Template:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Click ",Object(c.b)("strong",{parentName:"li"},"Workflows")," in the top menu.")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/quickstart-231711.png",alt:null}))),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"Click ",Object(c.b)("strong",{parentName:"li"},"Create Template"),".")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/quickstart-231935.png",alt:null}))),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},'Enter "Test DAG" for "Template Name", and select "DAG". This will pre-fill a sample DAG.')),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/quickstart-232332.png",alt:null}))),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click ",Object(c.b)("strong",{parentName:"p"},"Save")," to save your template.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},'You should now be on the "Workflow details" page. Click ',Object(c.b)("strong",{parentName:"p"},"Execute Workflow"),"."))),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/quickstart-232622.png",alt:null}))),Object(c.b)("ol",{start:6},Object(c.b)("li",{parentName:"ol"},"A modal will be displayed, click ",Object(c.b)("strong",{parentName:"li"},"Execute"),".")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/quickstart-232824.png",alt:null}))),Object(c.b)("ol",{start:7},Object(c.b)("li",{parentName:"ol"},"The workflow will start executing. You can click on every task to see details and running logs.")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/quickstart-232904.png",alt:null}))),Object(c.b)("ol",{start:8},Object(c.b)("li",{parentName:"ol"},"You have now setup Onepanel and run a simple Workflow.")))}p.isMDXComponent=!0},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var s=c.a.createContext({}),b=function(e){var t=c.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||r;return a?c.a.createElement(d,l(l({ref:t},s),{},{components:a})):c.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},150:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=c.apply(null,n);o&&e.push(o)}else if("object"===r)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n)}()},153:function(e,t,a){"use strict";var n=a(0);const c=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=c},154:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(e){return c.a.createElement("div",null,e.children)}},156:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(153);var o=function(){return Object(n.useContext)(r.a)},l=a(150),i=a.n(l),s=a(93),b=a.n(s);const p=37,u=39;t.a=function(e){const{block:t,children:a,defaultValue:r,values:l,groupId:s}=e,{tabGroupChoices:m,setTabGroupChoices:d}=o(),[O,j]=Object(n.useState)(r);if(null!=s){const e=m[s];null!=e&&e!==O&&j(e)}const g=e=>{j(e),null!=s&&d(s,e)},h=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},l.map(({value:e,label:t})=>c.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===e,className:i()("tabs__item",b.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case u:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case p:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},t))),c.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===O)[0]))}}}]);