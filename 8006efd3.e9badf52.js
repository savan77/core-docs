(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{121:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var s=t(0),a=t.n(s);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=a.a.createContext({}),p=function(e){var n=a.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return a.a.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),l=p(t),f=s,b=l["".concat(i,".").concat(f)]||l[f]||u[f]||r;return t?a.a.createElement(b,c(c({ref:n},m),{},{components:t})):a.a.createElement(b,c({ref:n},m))}));function b(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=f;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:s,i[1]=c;for(var m=2;m<r;m++)i[m]=t[m];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},232:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/metrics-230759-a20681c8f267210e43423be97e890665.png"},88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return m}));var s=t(2),a=(t(0),t(121));const r={title:"Persisting training metrics",sidebar_label:"Persisting training metrics",description:"Onepanel - Persisting training metrics"},i={unversionedId:"reference/workflows/metrics",id:"reference/workflows/metrics",isDocsHomePage:!1,title:"Persisting training metrics",description:"Onepanel - Persisting training metrics",source:"@site/docs/reference/workflows/metrics.md",slug:"/reference/workflows/metrics",permalink:"/docs/reference/workflows/metrics",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/reference/workflows/metrics.md",version:"current",sidebar_label:"Persisting training metrics",sidebar:"reference",previous:{title:"Workflow Templates",permalink:"/docs/reference/workflows/templates"},next:{title:"Creating a Workflow Template",permalink:"/docs/reference/workflows/create"}},c=[{value:"Persisting metrics",id:"persisting-metrics",children:[]},{value:"Passing metrics between tasks",id:"passing-metrics-between-tasks",children:[]},{value:"Advance example",id:"advance-example",children:[]}],o={rightToc:c};function m({components:e,...n}){return Object(a.b)("wrapper",Object(s.a)({},o,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"persisting-metrics"},"Persisting metrics"),Object(a.b)("p",null,"You can persist metrics into as JSON in a special file ",Object(a.b)("inlineCode",{parentName:"p"},"/tmp/sys-metrics.json"),". The JSON syntax is as an array as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-json"}),'[\n    {"name": "<metric-1-name>", "value": "metric-1-value"},\n    {"name": "<metric-2-name>", "value": "metric-2-value"},\n    ...\n]\n')),Object(a.b)("p",null,"Here's an example in Python:"),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-python"}),"import json\n\n# JSON format for metrics\nmetrics = [\n    {'name': 'accuracy', 'value': 0.981},\n    {'name': 'loss', 'value': 0.018},\n]\n\n# Write metrics to `/tmp/sys-metrics.json`\nwith open('/tmp/sys-metrics.json', 'w') as f:\n    json.dump(metrics, f)\n")),Object(a.b)("p",null,"Once the Workflow task completes, you can view these metrics under ",Object(a.b)("strong",{parentName:"p"},"Artifacts")," in the task info panel:"),Object(a.b)("p",null,Object(a.b)("img",{src:t(232).default})),Object(a.b)("h2",{id:"passing-metrics-between-tasks"},"Passing metrics between tasks"),Object(a.b)("p",null,"Onepanel automatically outputs a ",Object(a.b)("inlineCode",{parentName:"p"},"sys-metrics")," artifact from a completed task, which you can access in a subsequent task as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-yaml"}),"entrypoint: main\ntemplates:\n  - name: main\n    dag:\n      tasks:\n      - name: A\n        template: task-a-script\n      - name: B\n        dependencies: [A]\n        template: task-b-script\n        arguments:\n          # Use sys-metrics artifact output from task A\n          artifacts:\n          - name: task-a-metrics\n            from: \"{{tasks.A.outputs.artifacts.sys-metrics}}\"\n  - name: task-a-script\n    script:\n      image: python:3.7-alpine\n      command: [python, '-u']\n      source: |\n        import json\n        \n        # JSON format for metrics\n        metrics = [\n          {'name': 'accuracy', 'value': 0.981},\n          {'name': 'loss', 'value': 0.018},\n        ]\n        \n        # Write metrics to `/tmp/sys-metrics.json`\n        with open('/tmp/sys-metrics.json', 'w') as f:\n            json.dump(metrics, f)\n  \n  - name: task-b-script\n    inputs:\n      artifacts:\n      # Mount the argument to `/tmp/task-a-metrics.json` file\n      # You can optionally write to `/tmp/sys-metrics.json` to \n      # continously pass metrics to subsequent tasks.\n      - name: task-a-metrics\n        path: /tmp/task-a-metrics.json\n    script:\n      image: python:3.7-alpine\n      command: [python, '-u']\n      source: |\n        import json\n        \n        # Load Task A metrics\n        with open('/tmp/task-a-metrics.json') as f:\n            task_a_metrics = json.load(f)\n        \n        # Print to logs (optional)\n        print(task_a_metrics)\n")),Object(a.b)("h2",{id:"advance-example"},"Advance example"),Object(a.b)("p",null,"This example shows a Workflow that saves metrics (",Object(a.b)("inlineCode",{parentName:"p"},"accuracy")," and ",Object(a.b)("inlineCode",{parentName:"p"},"loss"),") in two different tasks ",Object(a.b)("strong",{parentName:"p"},"A")," and ",Object(a.b)("strong",{parentName:"p"},"B"),", and then compares the accuracies in a subsequent task ",Object(a.b)("strong",{parentName:"p"},"C"),", and finally sends a Slack notification of the metrics with the best accuracy."),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-yaml"}),"entrypoint: main\ntemplates:\n  - name: main\n    dag:\n      tasks:\n      - name: A\n        template: task-a-script\n      - name: B\n        template: task-b-script\n      - name: C\n        dependencies: [A, B]\n        template: task-c-script\n        arguments:\n          artifacts:\n          - name: task-a-metrics\n            from: \"{{tasks.A.outputs.artifacts.sys-metrics}}\"\n          - name: task-b-metrics\n            from: \"{{tasks.B.outputs.artifacts.sys-metrics}}\"\n      - name: notify-in-slack\n        dependencies: [C]\n        template: slack-notify-success\n        arguments:\n          artifacts:\n          - name: task-c-metrics\n            from: \"{{tasks.C.outputs.artifacts.sys-metrics}}\"\n  - name: task-a-script\n    script:\n      image: python:3.7-alpine\n      command: [python, '-u']\n      source: |\n        import json\n        \n        # Training code here\n        \n        # JSON format for metrics\n        metrics = [\n          {'name': 'accuracy', 'value': 0.981},\n          {'name': 'loss', 'value': 0.018},\n        ]\n        \n        # Write metrics to `/tmp/sys-metrics.json`\n        with open('/tmp/sys-metrics.json', 'w') as f:\n            json.dump(metrics, f)\n        \n        # Print to logs (optional)\n        print(metrics)\n  \n  - name: task-b-script\n    script:\n      image: python:3.7-alpine\n      command: [python, '-u']\n      source: |\n        import json\n        \n        # Training code here\n        \n        # JSON format for metrics\n        metrics = [\n          {'name': 'accuracy', 'value': 0.972},\n          {'name': 'loss', 'value': 0.027},\n        ]\n        \n        # Write metrics to `/tmp/sys-metrics.json`\n        with open('/tmp/sys-metrics.json', 'w') as f:\n            json.dump(metrics, f)\n            \n        # Print to logs (optional)\n        print(metrics)\n  \n  - name: task-c-script\n    inputs:\n      artifacts:\n      - name: task-a-metrics\n        path: /tmp/task-a-metrics.json\n      - name: task-b-metrics\n        path: /tmp/task-b-metrics.json\n    script:\n      image: python:3.7-alpine\n      command: [python, '-u']\n      source: |\n        import json\n        \n        # Load Task A metrics\n        with open('/tmp/task-a-metrics.json') as f:\n            task_a_metrics = json.load(f)\n        \n        # Load Task B metrics\n        with open('/tmp/task-b-metrics.json') as f:\n            task_b_metrics = json.load(f)\n        \n        # Pick the metrics with best accuracy\n        task_a_accuracy = [m['value'] for m in task_a_metrics if m['name'] == 'accuracy'][0]\n        task_b_accuracy = [m['value'] for m in task_b_metrics if m['name'] == 'accuracy'][0]\n\n        if task_a_accuracy > task_b_accuracy:\n          metrics = task_a_metrics\n        else:\n          metrics = task_b_metrics\n        \n        # Write to metrics to `/tmp/sys-metrics.json`\n        with open('/tmp/sys-metrics.json', 'w') as f:\n            json.dump(metrics, f)\n            \n        # Print to logs (optional)\n        print(metrics)\n  \n  - name: slack-notify-success\n    container:\n      image: technosophos/slack-notify\n      command: [sh,-c]\n      args: ['SLACK_USERNAME=Worker SLACK_TITLE=\"{{workflow.name}} metrics\" SLACK_MESSAGE=$(cat /tmp/task-c-metrics.json)} ./slack-notify']\n    inputs:\n      artifacts:\n      - name: task-c-metrics\n        path: /tmp/task-c-metrics.json\n")))}m.isMDXComponent=!0}}]);