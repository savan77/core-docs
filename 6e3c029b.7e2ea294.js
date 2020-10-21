(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{114:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return a?o.a.createElement(b,s(s({ref:t},c),{},{components:a})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},206:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/coco_dir-c0bba3c790ddcd413d727758e593b3bc.png"},207:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/maskrcnn_clone-284519c1e51f3d9e6465246bfc543943.png"},208:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/maskrcnn_clone_editor-de7a2701e1b3279254af7fc3e640a7b8.png"},209:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/update_labels-90b5bbc9c00573a2fed7ac8e6a51fae7.png"},210:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/detr_execute-74484fd39c816ca56467992dbd213eef.png"},211:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/detr_training-80b62df0388c6a7f2a25b687359dc730.png"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(2),o=(a(0),a(114));const r={title:"Adding a custom deep learning model Workflow to CVAT",sidebar_label:"Adding custom models",description:"Onepanel - vision AI model training pipelines"},i={unversionedId:"getting-started/use-cases/computervision/annotation/cvat/adding_custom_model",id:"getting-started/use-cases/computervision/annotation/cvat/adding_custom_model",isDocsHomePage:!1,title:"Adding a custom deep learning model Workflow to CVAT",description:"Onepanel - vision AI model training pipelines",source:"@site/docs/getting-started/use-cases/computervision/annotation/cvat/adding_custom_model.md",slug:"/getting-started/use-cases/computervision/annotation/cvat/adding_custom_model",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/adding_custom_model",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/getting-started/use-cases/computervision/annotation/cvat/adding_custom_model.md",version:"current",sidebar_label:"Adding custom models",sidebar:"reference",previous:{title:"Semi-automatic annotation with CVAT",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_automatic_annotation"}},s=[{value:"1. Requirements",id:"1-requirements",children:[]},{value:"2. Upload code to Github",id:"2-upload-code-to-github",children:[]},{value:"3. Running code in JupyterLab",id:"3-running-code-in-jupyterlab",children:[{value:"a. Input paths",id:"a-input-paths",children:[]},{value:"b. Output path",id:"b-output-path",children:[]}]},{value:"4. Create a workflow",id:"4-create-a-workflow",children:[{value:"a. Update workflow parameters",id:"a-update-workflow-parameters",children:[]},{value:"b. Update container block",id:"b-update-container-block",children:[]},{value:"c. Update volume claims",id:"c-update-volume-claims",children:[]}]},{value:"5. Using it in CVAT",id:"5-using-it-in-cvat",children:[]}],l={rightToc:s};function c({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The default CVAT workspace comes with two workflows (i.e models)- MaskRCNN Training and TF Object Detection Training. These two workflows are generally good for semantic segmentation  and object detection tasks respectively. But you can do more with your CVAT tasks. You can, for example, train a Generative Adversarial Network model to generate synthetic data for your task. You can add your own model, if default models don't satisfy your requirements."),Object(o.b)("p",null,"This guide will walk you through the process of how can you add your own workflows for CVAT on Onepanel."),Object(o.b)("h2",{id:"1-requirements"},"1. Requirements"),Object(o.b)("p",null,"Before we dive into technical details of adding custom model support in CVAT, it's important to know what types of models and data can be used with CVAT."),Object(o.b)("p",null,"You can think of ",Object(o.b)("inlineCode",{parentName:"p"},"Execute training Workflow")," feature as a bridge between data in CVAT, be it annotated or just frames, and Onepanel Workflows. You can have Onepanel Workflows for model training, inference, and many other things. Let's say you have a training workflow for some model X. Then, you can use this feature to use annotated frames from CVAT to train the model X. It dumps annotated data on cloud storage and Onepanel Workflows grabs data from the same location. More details on how to actually create such workflows will be discussed in following sections."),Object(o.b)("p",null,"Now that you know how this feature works, it is safe to say that the ",Object(o.b)("strong",{parentName:"p"},"only requirement")," here is that your training code has to support format that CVAT data was dumped into. For example, if your training code accepts data that follows COCO format (i.e JSON) then you need to export data in COCO format from CVAT. So, if your code does not accept data in any of the format that CVAT supports, then you can't use that workflow from CVAT unless you just need frames and not the annotations. In any case, you can still create training workflow and execute on Onepanel. But you won't be able to use this directly from CVAT. You will have to export data from CVAT, upload to cloud storage, execute workflow and pass-in correct cloud storage path."),Object(o.b)("p",null,"If your code supports one of the following formats, then you are good to go."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"MS COCO"),Object(o.b)("li",{parentName:"ol"},"YOLO"),Object(o.b)("li",{parentName:"ol"},"TF Detection API (TFRecords)"),Object(o.b)("li",{parentName:"ol"},"MOT"),Object(o.b)("li",{parentName:"ol"},"LabelMe"),Object(o.b)("li",{parentName:"ol"},"DatuMaro")),Object(o.b)("h2",{id:"2-upload-code-to-github"},"2. Upload code to Github"),Object(o.b)("p",null,"Now that you know your code will work with CVAT, let's go ahead and create a workflow for the same.The first step here is to upload your repository to Github. The workflow you are about to create will clone this repository and execute training command. "),Object(o.b)("p",null,"For this example, you are going to add a training workflow for DEtection TRansformer (DETR). ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/detr"}),"DETR")," was recently published by Facebook Research. Unlike many state-of-the-art object detection models, this works end-to-end using Transformers. Currently, Faster RCNN is a popular model for object detection. But it works in two phases. These multiple phases not only create overhead in training, they also take more time to train. This new model addresses these issues by approaching object detection task as a set prediction task. This is not a completely new approach but previous approaches didn't report accuracy as good as Faster RCNN-based models."),Object(o.b)("p",null,"The first thing you need to do is clone their Github ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/detr"}),"repository"),". We are cloning this because you may need to make some changes in code. If your code is stored locally, then you'll have to upload it to Github. Also note that this code supports MS COCO format, so you can use this directly from CVAT."),Object(o.b)("h2",{id:"3-running-code-in-jupyterlab"},"3. Running code in JupyterLab"),Object(o.b)("p",null,"Before you create a workflow for this, you need to make sure it works without any issues and also understand how it works. You may also need to make some minor changes. You can do this locally or create a JupyterLab workspace on Onepanel. "),Object(o.b)("p",null,"Here, our goal is to have one script in this repository that takes required inputs (i.e epochs and other hyperparameters) from user and starts training, inference, etc. For this example, our goal is to create a workflow for training. So, we will focus on training part only. You can have a flag in this script and run training or inference based on user input."),Object(o.b)("p",null,"The only major different between running this code localy and in a workflow is that our annotated data will be dumped onto cloud storage, so we will map that directory with any local directory. Hence, you need to update directory structure and fix it to any directory (i.e ",Object(o.b)("inlineCode",{parentName:"p"},"/mnt/data/dataset/"),"). This is where you will mount our dataset from cloud storage. "),Object(o.b)("p",null,"Now, let's see if DETR has main script which takes user inputs and runs training. If you look at ",Object(o.b)("inlineCode",{parentName:"p"},"main.py")," in the root directory, you will find that this script accepts a myriad of arguments from user and runs training/inference. So, you don't have to create a new script. "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"If your code supports one of the dataset format that CVAT can export into, then you'll have to modify only two things: input and output paths.")),Object(o.b)("h3",{id:"a-input-paths"},"a. Input paths"),Object(o.b)("p",null,"Since you will be mounting dataset at a fixed location (i.e ",Object(o.b)("inlineCode",{parentName:"p"},"/mnt/data/datasets/"),"), you can hard-code this path in your code. Moreover, you also need to look at directory structure inside this directory. Since our code accepts data in COCO format, let's export data from CVAT in MS COCO format and take a look at it's directory structure."),Object(o.b)("p",null,Object(o.b)("img",{alt:"COCO Directory Structure",src:a(206).default})),Object(o.b)("p",null,"If you are familiar with officail COCO directory structure or even take a look at DETR code, you will find that this does not follow official COCO directory structure. Since this code supports officail COCO directory structure, you need to modify some lines to make it work. Also, the ",Object(o.b)("inlineCode",{parentName:"p"},"file_path")," attribute in JSON file points to frames on the machine where it was exported. So, this won't work on other machine (i.e workflows that you will be running)."),Object(o.b)("p",null,"So, you will need to make two changes."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1. Update directory structure in the code (",Object(o.b)("inlineCode",{parentName:"strong"},"datasets/coco.py"),")."),"\nThis is very simple. You just need to update following lines from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/onepanelio/detr/blob/master/datasets/coco.py#L151"}),Object(o.b)("inlineCode",{parentName:"a"},"datasets/coco.py"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python3"}),'PATHS = {\n        "train": (root / "train2017", root / "annotations" / f\'{mode}_train2017.json\'),\n        "val": (root / "val2017", root / "annotations" / f\'{mode}_val2017.json\'),\n    }\n')),Object(o.b)("p",null,"to"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python3"}),' PATHS = {\n        "train": (root / "images", root / "annotations" / \'instances_default.json\'),\n        "val": (root / "images", root / "annotations" / \'instances_default.json\'),\n    }\n')),Object(o.b)("p",null,"Note that for simplicity we are using train set as a validation set. But that's not the ideal thing to do. You can split train set into train and val set. Or use other dataset present on cloud storage while executing the workflow."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2. Write a function/script to update ",Object(o.b)("inlineCode",{parentName:"strong"},"file_path")," in a JSON file.")),Object(o.b)("p",null,"Since we will be mounting dataset at ",Object(o.b)("inlineCode",{parentName:"p"},"/mnt/data/datasets/"),", you can update paths in JSON accordingly. Hence, we will write a script (",Object(o.b)("inlineCode",{parentName:"p"},"prepare_data.py"),") that does this. And, we will execute this script before we call ",Object(o.b)("inlineCode",{parentName:"p"},"main.py"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python3"}),"def update_img_paths(args):\n    # read json data\n    with open(args.file_path, \"r\") as file:\n        json_data = json.load(file)\n        # update image path\n        for img in json_data['images']:\n            img['file_name'] = os.path.join(args.prefix, os.path.basename(img['file_name']))\n        # write data back to file\n        with open(args.file_path, \"w\") as file_out:\n            json.dump(json_data, file_out)\n")),Object(o.b)("p",null,"Once this is done. You are good to go. You can now go ahead and create Onepanel Workflow. This can be used from CVAT or can be executed directly."),Object(o.b)("h3",{id:"b-output-path"},"b. Output path"),Object(o.b)("p",null,"If you want Onepanel Workflows to store outputs on cloud storage, you can just write output to ",Object(o.b)("inlineCode",{parentName:"p"},"/mnt/output/")," and it will automatically upload outputs onto cloud storage. For this to work, you just need to add output artifact in our template as discussed in the following section."),Object(o.b)("h2",{id:"4-create-a-workflow"},"4. Create a workflow"),Object(o.b)("p",null,"Now, let's go ahead and actually create a workflow. You can create a new workflow but we recommend you just clone MaskRCNN Training Workflow which is included by default and make changes there."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Clone Workflow",src:a(207).default})),Object(o.b)("p",null,"You will see a YAML editor as shown below."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Create workflow",src:a(208).default})),Object(o.b)("p",null,"Give this template an appropriate name. For this example, we will be using ",Object(o.b)("inlineCode",{parentName:"p"},"DETR Training"),"."),Object(o.b)("p",null,"You can use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/onepanelio/templates/blob/master/workflows/maskrcnn-training/template.yaml"}),"MaskRCNN template")," as our starting point and you can modify it for your needs."),Object(o.b)("p",null,"Below is a MaskRCNN template which we'll use as our base template. Hints and other unnecessary stuff was removed for brevity. You can find complete template ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/onepanelio/templates/blob/master/workflows/maskrcnn-training/template.yaml"}),"here"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"arguments:\n  parameters:\n  - name: source\n    value: https://github.com/onepanelio/Mask_RCNN.git\n    displayName: Model source code\n    type: hidden\n    visibility: private\n\n  - name: cvat-annotation-path\n    value: annotation-dump/sample_dataset\n    hint: Path to annotated data in default object storage (i.e S3). In CVAT, this parameter will be pre-populated.\n    displayName: Dataset path\n    visibility: private\n    \n  - name: cvat-output-path\n    value: workflow-data/output/sample_output\n    hint: Path to store output artifacts in default object storage (i.e s3). In CVAT, this parameter will be pre-populated.\n    displayName: Workflow output path\n    visibility: private\n  \n  - name: hyperparameters\n    displayName: Hyperparameters\n    visibility: public\n    type: textarea.textarea\n    value: |-\n      stage-1-epochs=1    #  Epochs for network heads\n      stage-2-epochs=2    #  Epochs for finetune layers\n      stage-3-epochs=3    #  Epochs for all layers\n   \n  - name: cvat-finetune-checkpoint\n    value: ''\n    visibility: public\n  \n  - name: cvat-num-classes\n    value: 81\n    visibility: private\n    \n  - name: dump-format\n    value: cvat_coco\n    visibility: public\n      \n  - name: tf-image\n    value: tensorflow/tensorflow:1.13.1-py3\n    visibility: public\n\n  - name: sys-node-pool\n    value: Standard_D4s_v3\n    visibility: public\n\nentrypoint: main\ntemplates:\n- dag:\n    tasks:\n    - name: train-model\n      template: tensorflow\n  name: main\n- container:\n    args:\n    - |\n      apt-get update \\\n      && apt-get install -y git wget libglib2.0-0 libsm6 libxext6 libxrender-dev \\\n      && pip install -r requirements.txt \\\n      && pip install boto3 pyyaml google-cloud-storage \\\n      && git clone https://github.com/waleedka/coco \\\n      && cd coco/PythonAPI \\\n      && python setup.py build_ext install \\\n      && rm -rf build \\\n      && cd ../../ \\\n      && wget https://github.com/matterport/Mask_RCNN/releases/download/v2.0/mask_rcnn_coco.h5 \\\n      && python setup.py install && ls \\\n      && python samples/coco/cvat.py train --dataset=/mnt/data/datasets \\\n        --model=workflow_maskrcnn \\\n        --extras=\"{{workflow.parameters.extras}}\"  \\\n        --ref_model_path=\"{{workflow.parameters.cvat-finetune-checkpoint}}\"  \\\n        --num_classes=\"{{workflow.parameters.cvat-num-classes}}\" \\\n      && cd /mnt/src/ \\\n      && python prepare_dataset.py /mnt/data/datasets/annotations/instances_default.json\n    command:\n    - sh\n    - -c\n    image: '{{workflow.parameters.tf-image}}'\n    volumeMounts:\n    - mountPath: /mnt/data\n      name: data\n    - mountPath: /mnt/output\n      name: output\n    workingDir: /mnt/src\n  nodeSelector:\n    beta.kubernetes.io/instance-type: '{{workflow.parameters.cvat-node-pool}}'\n  inputs:\n    artifacts:\n    - name: data\n      path: /mnt/data/datasets/\n      s3:\n        key: '{{workflow.namespace}}/{{workflow.parameters.cvat-annotation-path}}'\n    - git:\n        repo: '{{workflow.parameters.source}}'\n        revision: \"no-boto\"\n      name: src\n      path: /mnt/src\n  name: tensorflow\n  outputs:\n    artifacts:\n    - name: model\n      optional: true\n      path: /mnt/output\n      s3:\n        key: '{{workflow.namespace}}/{{workflow.parameters.cvat-output-path}}/{{workflow.name}}'\nvolumeClaimTemplates:\n- metadata:\n    creationTimestamp: null\n    name: data\n  spec:\n    accessModes:\n    - ReadWriteOnce\n    resources:\n      requests:\n        storage: 200Gi\n- metadata:\n    creationTimestamp: null\n    name: output\n  spec:\n    accessModes:\n    - ReadWriteOnce\n    resources:\n      requests:\n        storage: 200Gi\n")),Object(o.b)("p",null,"Even though this looks cryptic, it isn't. Let us go through following three steps to create template for DETR."),Object(o.b)("h3",{id:"a-update-workflow-parameters"},"a. Update workflow parameters"),Object(o.b)("p",null,"The first thing you should do is add/remove parameters from above template. Now, how do you figure out which parameters should you use in there? Use arguments/parameters that you take from user plus some system related parameter (optional). Some examples of this is ",Object(o.b)("inlineCode",{parentName:"p"},"epochs"),", ",Object(o.b)("inlineCode",{parentName:"p"},"batch_size"),", etc. Again, this depends on your code as well. In this case, our ",Object(o.b)("inlineCode",{parentName:"p"},"main.py")," accepts all those hyperparameters as an argument. If your code didn't have such an argument parser, then you can pass all hyperparameters, as shown above for ",Object(o.b)("inlineCode",{parentName:"p"},"hyperparameters")," parameter, and parse it in your code."),Object(o.b)("p",null,"First, you need to update ",Object(o.b)("inlineCode",{parentName:"p"},"source")," parameter to use code that you just clones. If your code is in private mode, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/workflows/templates#git-integration-with-workflows"}),"refer to our guide")," on git integration to know how you can use private repositories with Workflows. We will also have to update docker image to use PyTorch with cuda. Since we will be deploying this on Azure for this guide, we will use ",Object(o.b)("inlineCode",{parentName:"p"},"Standard_NC6")," for ",Object(o.b)("inlineCode",{parentName:"p"},"sys-node-pool"),". This machine has K80 GPU."),Object(o.b)("p",null,"Next, you can remove ",Object(o.b)("inlineCode",{parentName:"p"},"hyperparameters"),", ",Object(o.b)("inlineCode",{parentName:"p"},"cvat-num-classes"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"cvat-finetune-checkpoint")," as you won't need them."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"arguments:\n  parameters:\n  - name: source\n    value: https://github.com/onepanelio/detr.git\n    displayName: Model source code\n    type: hidden\n    visibility: private\n\n  - name: cvat-annotation-path\n    value: annotation-dump/sample_dataset\n    hint: Path to annotated data in default object storage (i.e S3). In CVAT, this parameter will be pre-populated.\n    displayName: Dataset path\n    visibility: private\n    \n  - name: cvat-output-path\n    value: workflow-data/output/sample_output\n    hint: Path to store output artifacts in default object storage (i.e s3). In CVAT, this parameter will be pre-populated.\n    displayName: Workflow output path\n    visibility: private\n    \n  - name: dump-format\n    value: cvat_coco\n    visibility: public\n      \n  - name: pytorch-image\n    value: pytorch/pytorch:1.6.0-cuda10.1-cudnn7-runtime\n    visibility: public\n\n  - name: sys-node-pool\n    value: Standard_NC6\n    visibility: public\n")),Object(o.b)("p",null,"Here, if ",Object(o.b)("inlineCode",{parentName:"p"},"visibility")," is public, then it will be shown in CVAT. Notice some parameters are prefixed with ",Object(o.b)("inlineCode",{parentName:"p"},"cvat-"),", they will be automatically populated by CVAT. ",Object(o.b)("inlineCode",{parentName:"p"},"dump-format")," specifies which format should CVAT dump data into. If you have this parameter in a workflow and has correct value (i.e cvat_coco), then it won't be shown in CVAT. "),Object(o.b)("p",null,"Basically, you don't have to specify any parameter to run this workflow from CVAT. "),Object(o.b)("p",null,"Now, let's go ahead and add some parameters that you might need for this model."),Object(o.b)("p",null,"Let's add ",Object(o.b)("inlineCode",{parentName:"p"},"epochs")," and ",Object(o.b)("inlineCode",{parentName:"p"},"batch_size")," as you will be using them to run the training."),Object(o.b)("p",null,"So, finally our parameters will look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"arguments:\n  parameters:\n  - name: source\n    value: https://github.com/onepanelio/detr.git\n    displayName: Model source code\n    type: hidden\n    visibility: private\n\n  - name: cvat-annotation-path\n    value: annotation-dump/sample_dataset\n    hint: Path to annotated data in default object storage (i.e S3). In CVAT, this parameter will be pre-populated.\n    displayName: Dataset path\n    visibility: private\n    \n  - name: cvat-output-path\n    value: workflow-data/output/sample_output\n    hint: Path to store output artifacts in default object storage (i.e s3). In CVAT, this parameter will be pre-populated.\n    displayName: Workflow output path\n    visibility: private\n    \n  - name: dump-format\n    value: cvat_coco\n    visibility: public\n      \n  - name: pytorch-image\n    value: pytorch/pytorch:1.6.0-cuda10.1-cudnn7-runtime\n    visibility: public\n\n  - name: sys-node-pool\n    value: Standard_NC6\n    visibility: public\n\n  - name: epochs\n    value: '50'\n    visibility: public\n\n  - name: batch-size\n    value: '1'\n    visibility: public\n")),Object(o.b)("h3",{id:"b-update-container-block"},"b. Update container block"),Object(o.b)("p",null,"Now, let's take a look at the second block of a base template."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"entrypoint: main\ntemplates:\n- dag:\n    tasks:\n    - name: train-model\n      template: tensorflow\n  name: main\n- container:\n    args:\n    - |\n      apt-get update \\\n      && apt-get install -y git wget libglib2.0-0 libsm6 libxext6 libxrender-dev \\\n      && pip install -r requirements.txt \\\n      && pip install boto3 pyyaml google-cloud-storage \\\n      && git clone https://github.com/waleedka/coco \\\n      && cd coco/PythonAPI \\\n      && python setup.py build_ext install \\\n      && rm -rf build \\\n      && cd ../../ \\\n      && wget https://github.com/matterport/Mask_RCNN/releases/download/v2.0/mask_rcnn_coco.h5 \\\n      && python setup.py install && ls \\\n      && python samples/coco/cvat.py train --dataset=/mnt/data/datasets \\\n        --model=workflow_maskrcnn \\\n        --extras=\"{{workflow.parameters.extras}}\"  \\\n        --ref_model_path=\"{{workflow.parameters.cvat-finetune-checkpoint}}\"  \\\n        --num_classes=\"{{workflow.parameters.cvat-num-classes}}\" \\\n      && cd /mnt/src/ \\\n      && python prepare_dataset.py /mnt/data/datasets/annotations/instances_default.json\n    command:\n    - sh\n    - -c\n    image: '{{workflow.parameters.tf-image}}'\n    volumeMounts:\n    - mountPath: /mnt/data\n      name: data\n    - mountPath: /mnt/output\n      name: output\n    workingDir: /mnt/src\n  nodeSelector:\n    beta.kubernetes.io/instance-type: '{{workflow.parameters.sys-node-pool}}'\n  inputs:\n    artifacts:\n    - name: data\n      path: /mnt/data/datasets/\n      s3:\n        key: '{{workflow.namespace}}/{{workflow.parameters.cvat-annotation-path}}'\n    - git:\n        repo: '{{workflow.parameters.source}}'\n        revision: \"no-boto\"\n      name: src\n      path: /mnt/src/{{workflow.name}}\n  name: tensorflow\n  outputs:\n    artifacts:\n    - name: model\n      optional: true\n      path: /mnt/output\n      s3:\n        key: '{{workflow.namespace}}/{{workflow.parameters.cvat-output-path}}/{{workflow.name}}'\n")),Object(o.b)("p",null,"First thing you may do is rename the template name from ",Object(o.b)("inlineCode",{parentName:"p"},"tensorflow")," to ",Object(o.b)("inlineCode",{parentName:"p"},"detr"),", its not required though. Then, you can remove that ",Object(o.b)("inlineCode",{parentName:"p"},"no-boto")," branch from ",Object(o.b)("inlineCode",{parentName:"p"},"git")," section as we will be using default (",Object(o.b)("inlineCode",{parentName:"p"},"master"),") branch for DETR."),Object(o.b)("p",null,"Lastly, you just need to update the command that starts the training. You can see ~20 lines of commands. But you won't need that many for this. Let's remove those lines and write our own."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"    apt-get update \\\n    && apt-get install -y build-essential \\\n    && pip install cython pycocotools scipy \\\n    && python /mnt/src/prepare_data.py \\\n    && python /mnt/src/main.py --coco_path=/mnt/data/datasets/ --output_dir=/mnt/output/ --batch_size={{workflow.parameters.batch-size}} --epochs={{workflow.parameters.epochs}}\n")),Object(o.b)("p",null,"We know that we need to run ",Object(o.b)("inlineCode",{parentName:"p"},"prepare_data.py")," script to modify paths as we observed in the last section and run ",Object(o.b)("inlineCode",{parentName:"p"},"main.py")," to start the training."),Object(o.b)("p",null,"Finally, our updated block looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"entrypoint: main\ntemplates:\n- dag:\n    tasks:\n    - name: train-model\n      template: detr\n  name: main\n- container:\n    args:\n    - |\n      apt-get update \\\n      && apt-get install -y build-essential \\\n      && pip install cython pycocotools scipy \\\n      && python /mnt/src/prepare_data.py \\\n      && python /mnt/src/main.py --coco_path=/mnt/data/datasets/ --output_dir=/mnt/output/ --batch_size={{workflow.parameters.batch-size}} --epochs={{workflow.parameters.epochs}}\n    command:\n    - sh\n    - -c\n    image: '{{workflow.parameters.pytorch-image}}'\n    volumeMounts:\n    - mountPath: /mnt/data\n      name: data\n    - mountPath: /mnt/output\n      name: output\n    workingDir: /mnt/src\n  nodeSelector:\n    beta.kubernetes.io/instance-type: '{{workflow.parameters.sys-node-pool}}'\n  inputs:\n    artifacts:\n    - name: data\n      path: /mnt/data/datasets/\n      s3:\n        key: '{{workflow.namespace}}/{{workflow.parameters.cvat-annotation-path}}'\n    - git:\n        repo: '{{workflow.parameters.source}}'\n      name: src\n      path: /mnt/src\n  name: detr\n  outputs:\n    artifacts:\n    - name: model\n      optional: true\n      path: /mnt/output\n      s3:\n        key: '{{workflow.namespace}}/{{workflow.parameters.cvat-output-path}}/{{workflow.name}}'\n")),Object(o.b)("p",null,"Note that docker image parameter was also updated to ",Object(o.b)("inlineCode",{parentName:"p"},"pytorch-image"),"."),Object(o.b)("p",null,"We also attached some input and output artifacts. For inputs, we had training data and source code. For output, we will be dumping data from ",Object(o.b)("inlineCode",{parentName:"p"},"/mnt/output/")," directory to ",Object(o.b)("inlineCode",{parentName:"p"},"{{workflow.namespace}}/{{workflow.parameters.cvat-output-path}}/{{workflow.name}}"),"."),Object(o.b)("p",null,"Also notice that we selected a node with machine that user specified through parameter ",Object(o.b)("inlineCode",{parentName:"p"},"sys-node-pool"),". What we are essentially doing here is that we are using PyTorch container on this machine, attaching input artifacts (i.e training data), and running commands that perform required tasks (i.e training a model)."),Object(o.b)("h3",{id:"c-update-volume-claims"},"c. Update volume claims"),Object(o.b)("p",null,"Now, let's take a look at the final block."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"volumeClaimTemplates:\n- metadata:\n    creationTimestamp: null\n    name: data\n  spec:\n    accessModes:\n    - ReadWriteOnce\n    resources:\n      requests:\n        storage: 200Gi\n- metadata:\n    creationTimestamp: null\n    name: output\n  spec:\n    accessModes:\n    - ReadWriteOnce\n    resources:\n      requests:\n        storage: 200Gi\n")),Object(o.b)("p",null,"As you can see, this block defines volume claims. Based on your model and data, you can change this from 200 GB to whatever you need. But you can keep this as it is."),Object(o.b)("p",null,"One last thing you need to do in order to use this template from CVAT is to add a label as shown below. If you want to use a Workflow in CVAT, add a label with ",Object(o.b)("inlineCode",{parentName:"p"},"key"),"=",Object(o.b)("inlineCode",{parentName:"p"},"used-by")," and ",Object(o.b)("inlineCode",{parentName:"p"},"value"),"=",Object(o.b)("inlineCode",{parentName:"p"},"cvat"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Workflow Label",src:a(209).default})),Object(o.b)("p",null,"With this, you have a final template for training DETR model."),Object(o.b)("h2",{id:"5-using-it-in-cvat"},"5. Using it in CVAT"),Object(o.b)("p",null,"Now, you can use this model to train models from CVAT."),Object(o.b)("p",null,"Click on ",Object(o.b)("inlineCode",{parentName:"p"},"Actions")," menu under the CVAT task you want to train model on, select ",Object(o.b)("inlineCode",{parentName:"p"},"Execute training Workflow"),"."),Object(o.b)("p",null,"Select the newly created template. In my case, it was ",Object(o.b)("inlineCode",{parentName:"p"},"DETR Training"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"DETR Execute",src:a(210).default})),Object(o.b)("p",null,"Modify parameters, if you want. But changes aren't required. Just hit ",Object(o.b)("inlineCode",{parentName:"p"},"Submit")," and it will start the training by executing this workflow. "),Object(o.b)("p",null,Object(o.b)("img",{alt:"DETR Training",src:a(211).default})),Object(o.b)("p",null,"You can find your trained model (i.e output) in ",Object(o.b)("inlineCode",{parentName:"p"},"cvat-output-path")," directory on your cloud storage."))}c.isMDXComponent=!0}}]);