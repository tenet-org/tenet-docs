"use strict";(self.webpackChunktenet_docs=self.webpackChunktenet_docs||[]).push([[2179],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},a="Running mainnet node with ansible",l={unversionedId:"tutorials/running-node-ansible",id:"tutorials/running-node-ansible",title:"Running mainnet node with ansible",description:"All files and configs can be found here//github.com/tenet-org/tenet-ansible",source:"@site/docs/node/tutorials/running-node-ansible.md",sourceDirName:"tutorials",slug:"/tutorials/running-node-ansible",permalink:"/node/tutorials/running-node-ansible",draft:!1,editUrl:"https://github.com/tenet-org/tenet-docs/edit/master/docs/node/tutorials/running-node-ansible.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Running mainnet node",permalink:"/node/tutorials/running-node"},next:{title:"Connect to MetaMask and Keplr",permalink:"/node/tutorials/metamask-keplr"}},s={},u=[{value:"Pre-requirements",id:"pre-requirements",level:3},{value:"1. Download the Binary",id:"1-download-the-binary",level:3},{value:"2. Configure Hosts",id:"2-configure-hosts",level:3},{value:"3. Setup Stage Configuration",id:"3-setup-stage-configuration",level:3},{value:"Optional Settings",id:"optional-settings",level:3},{value:"4. Deploy the Node",id:"4-deploy-the-node",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-mainnet-node-with-ansible"},"Running mainnet node with ansible"),(0,r.kt)("p",null,"All files and configs can be found here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenet-org/tenet-ansible"},"https://github.com/tenet-org/tenet-ansible")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We prefer to use Ubuntu 20.04 LTS for our nodes."),(0,r.kt)("li",{parentName:"ol"},"We prefer to use droplets with external volume for our nodes. That's why we should mount volume to our droplet before deploy node."),(0,r.kt)("li",{parentName:"ol"},"When you download binary file, you should pay attention to the environment (mainnet | testnet | devnet).")),(0,r.kt)("h3",{id:"pre-requirements"},"Pre-requirements"),(0,r.kt)("p",null,"Before deploying a node, ensure you have the latest version of Ansible installed in your system. You should also have access to the target VM(s) via SSH."),(0,r.kt)("h3",{id:"1-download-the-binary"},"1. Download the Binary"),(0,r.kt)("p",null,"Download the required binary by visiting the official download page of the tool. Once the download is complete, copy the binary to your local ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," directory."),(0,r.kt)("h3",{id:"2-configure-hosts"},"2. Configure Hosts"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"hosts.yml")," file, replace ",(0,r.kt)("inlineCode",{parentName:"p"},"ansible_host")," with the actual IP address or hostname of the VM where you want to deploy the node."),(0,r.kt)("h3",{id:"3-setup-stage-configuration"},"3. Setup Stage Configuration"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy-node.yml")," file, set the correct URL for ",(0,r.kt)("inlineCode",{parentName:"p"},"config_url"),". This should point to the location where your configuration file for the node is stored."),(0,r.kt)("h3",{id:"optional-settings"},"Optional Settings"),(0,r.kt)("p",null,"If you want to sync your node from a snapshot, set ",(0,r.kt)("inlineCode",{parentName:"p"},"sync_by_snapshot")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy-node.yml")," file. This setting is optional and should be used based on your requirement."),(0,r.kt)("h3",{id:"4-deploy-the-node"},"4. Deploy the Node"),(0,r.kt)("p",null,"Once you have completed the setup, run the following command to start the node deployment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ansible-playbook -i hosts.yml deploy-node.yml\n")),(0,r.kt)("p",null,"Please note that this command should be run from the same directory where the ",(0,r.kt)("inlineCode",{parentName:"p"},"hosts.yml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy-node.yml")," file is located. Also, ensure that you have the necessary permissions to execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"ansible-playbook")," command."))}c.isMDXComponent=!0}}]);