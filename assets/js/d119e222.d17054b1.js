"use strict";(self.webpackChunktenet_docs=self.webpackChunktenet_docs||[]).push([[6118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,h=m["".concat(s,".").concat(p)]||m[p]||c[p]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},i="Running mainnet node",l={unversionedId:"tutorials/running-node",id:"tutorials/running-node",title:"Running mainnet node",description:"Minimum Requirements",source:"@site/docs/node/tutorials/running-node.md",sourceDirName:"tutorials",slug:"/tutorials/running-node",permalink:"/tenet-docs/node/tutorials/running-node",draft:!1,editUrl:"https://github.com/tenet-org/tenet-docs/edit/master/docs/node/tutorials/running-node.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Tutorials",permalink:"/tenet-docs/node/category/tutorials"},next:{title:"Running mainnet node with ansible",permalink:"/tenet-docs/node/tutorials/running-node-ansible"}},s={},u=[{value:"Minimum Requirements",id:"minimum-requirements",level:2},{value:"Initialize Chain",id:"initialize-chain",level:2},{value:"1. Clone home directory into ~/.tenetd",id:"1-clone-home-directory-into-tenetd",level:3},{value:"2. Download binary",id:"2-download-binary",level:3},{value:"3. Install cosmovisor",id:"3-install-cosmovisor",level:3},{value:"4. Setup cosmovisor",id:"4-setup-cosmovisor",level:3},{value:"5. Start and sync node",id:"5-start-and-sync-node",level:3},{value:"6. Create Your Validator",id:"6-create-your-validator",level:3},{value:"Track Validator Signing Information",id:"track-validator-signing-information",level:3},{value:"Unjail Validator",id:"unjail-validator",level:3},{value:"Halting Your Validator",id:"halting-your-validator",level:3},{value:"Common Problems",id:"common-problems",level:2},{value:"Problem #1: My validator has voting_power: 0",id:"problem-1-my-validator-has-voting_power-0",level:4},{value:"Problem #2: My node crashes because of too many open files",id:"problem-2-my-node-crashes-because-of-too-many-open-files",level:4}],d={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-mainnet-node"},"Running mainnet node"),(0,a.kt)("h2",{id:"minimum-requirements"},"Minimum Requirements"),(0,a.kt)("p",null,"To run mainnet or testnet validator nodes, you will need a machine with the following minimum hardware requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"4 or more physical CPU cores"),(0,a.kt)("li",{parentName:"ul"},"At least 500GB of SSD disk storage"),(0,a.kt)("li",{parentName:"ul"},"At least 16GB of memory (RAM)"),(0,a.kt)("li",{parentName:"ul"},"At least 100mbps network bandwidth")),(0,a.kt)("p",null,"As the usage of the blockchain grows, the server requirements may increase as well, so you should have a plan for updating your server as well."),(0,a.kt)("h2",{id:"initialize-chain"},"Initialize Chain"),(0,a.kt)("h3",{id:"1-clone-home-directory-into-tenetd"},"1. Clone home directory into ~/.tenetd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/tenet-org/tenet-mainnet.git ~/.tenetd\n")),(0,a.kt)("h3",{id:"2-download-binary"},"2. Download binary"),(0,a.kt)("p",null,"Download binary from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tenet-org/tenet-mainnet/releases/tag/v11.0.7"},"v11.0.7 release"),". Extract archive."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you want to sync your node from snapshot: enable ",(0,a.kt)("inlineCode",{parentName:"p"},"statesync")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.tenetd/config/config.toml")," and ",(0,a.kt)("strong",{parentName:"p"},"replace binary with the ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/tenet-org/tenet-mainnet/releases/latest"},"latest release")),"."),(0,a.kt)("p",{parentName:"admonition"},"Note that you should do it before first start, otherwise you will need to delete ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.tenetd")," directory and start again.")),(0,a.kt)("h3",{id:"3-install-cosmovisor"},"3. Install cosmovisor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@latest\n")),(0,a.kt)("h3",{id:"4-setup-cosmovisor"},"4. Setup cosmovisor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export DAEMON_NAME=tenetd\nexport DAEMON_HOME=$HOME/.tenetd\nexport DAEMON_RESTART_AFTER_UPGRADE=true\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir -p $DAEMON_HOME/cosmovisor/genesis/bin\ncp ./tenetd $DAEMON_HOME/cosmovisor/genesis/bin\n")),(0,a.kt)("h3",{id:"5-start-and-sync-node"},"5. Start and sync node"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cosmovisor run start\n")),(0,a.kt)("h3",{id:"6-create-your-validator"},"6. Create Your Validator"),(0,a.kt)("p",null,"Your node consensus public key (tenetvalconspub...) can be used to create a new validator by staking atenet tokens. You can find your validator pubkey by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tented tendermint show-validator\n")),(0,a.kt)("p",null,"You can generate an account for validator by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tenetd keys add my_val_key\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Do not forget to top up created address with sufficient funds")),(0,a.kt)("p",null,"To create your validator on mainnet, just use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'tenetd tx staking create-validator \\\n  --amount=1000000000000000000atenet \\\n  --pubkey=$(tenetd tendermint show-validator) \\\n  --moniker="choose a moniker" \\\n  --commission-rate="0.05" \\\n  --commission-max-rate="0.10" \\\n  --commission-max-change-rate="0.01" \\\n  --min-self-delegation="1000000" \\\n  --gas="auto" \\\n  --gas-prices="20000000000atenet" \\\n  --gas-adjustment=1.5\n  --from=my_val_key\n')),(0,a.kt)("h3",{id:"track-validator-signing-information"},"Track Validator Signing Information"),(0,a.kt)("p",null,"In order to keep track of a validator's signatures in the past you can do so by using the signing-info command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tenetd query slashing signing-info <validator-pubkey>\n")),(0,a.kt)("h3",{id:"unjail-validator"},"Unjail Validator"),(0,a.kt)("p",null,'When a validator is "jailed" for downtime, you must submit an Unjail transaction from the operator account in order to be able to get block proposer rewards again (depends on the zone fee distribution).'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tenetd tx slashing unjail \\\n  --from=<key_name>\n")),(0,a.kt)("p",null,"Confirm Your Validator is Running\nYour validator is active if the following command returns anything:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'tenetd query tendermint-validator-set | grep "$(tenetd tendermint show-address)"\n')),(0,a.kt)("p",null,"You should now see your validator in one of Tenet explorers. You are looking for the bech32 encoded address in the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.tenetd/config/priv_validator.json")," file."),(0,a.kt)("h3",{id:"halting-your-validator"},"Halting Your Validator"),(0,a.kt)("p",null,"When attempting to perform routine maintenance or planning for an upcoming coordinated upgrade, it can be useful to have your validator systematically and gracefully halt. You can achieve this by either setting the halt-height to the height at which you want your node to shutdown or by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"--halt-height")," flag to tenetd. The node will shutdown with a zero exit code at that given height after committing the block."),(0,a.kt)("h2",{id:"common-problems"},"Common Problems"),(0,a.kt)("h4",{id:"problem-1-my-validator-has-voting_power-0"},"Problem #1: My validator has voting_power: 0"),(0,a.kt)("p",null,"Your validator has become jailed. Validators get jailed, i.e. get removed from the active validator set, if they do not vote on 500 of the last 10000 blocks, or if they double sign."),(0,a.kt)("p",null,"If you got jailed for downtime, you can get your voting power back to your validator. First, if tenetd is not running, start it up again:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tenetd start")),(0,a.kt)("p",null,"Wait for your full node to catch up to the latest block. Then, you can unjail your validator"),(0,a.kt)("p",null,"Lastly, check your validator again to see if your voting power is back."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tenetd status")),(0,a.kt)("p",null,"You may notice that your voting power is less than it used to be. That's because you got slashed for downtime!"),(0,a.kt)("h4",{id:"problem-2-my-node-crashes-because-of-too-many-open-files"},"Problem #2: My node crashes because of too many open files"),(0,a.kt)("p",null,"The default number of files Linux can open (per-process) is 1024. tenetd is known to open more than 1024 files. This causes the process to crash. A quick fix is to run ulimit -n 4096 (increase the number of open files allowed) and then restart the process with tenetd start. If you are using systemd or another process manager to launch tenetd this may require some configuration at that level. A sample systemd file to fix this issue is below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# /etc/systemd/system/tenetd.service\n[Unit]\nDescription=Tenet Node\nAfter=network.target\n\n[Service]\nType=simple\nUser=ubuntu\nWorkingDirectory=/home/ubuntu\nEnvironment=DAEMON_NAME=tenetd\nEnvironment=DAEMON_HOME=/home/tenet/.tenetd\nEnvironment=DAEMON_RESTART_AFTER_UPGRADE=true\nExecStart=/home/ubuntu/go/bin/cosmovisor start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\n")))}c.isMDXComponent=!0}}]);