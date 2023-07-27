"use strict";(self.webpackChunktenet_docs=self.webpackChunktenet_docs||[]).push([[321],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9084:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={},o="Multichain",l={unversionedId:"tutorials/upgrades/multichain",id:"tutorials/upgrades/multichain",title:"Multichain",description:"This document describes the steps for validators and full node operators, to upgrade successfully to the v11.2.0 release.",source:"@site/docs/node/tutorials/upgrades/multichain.md",sourceDirName:"tutorials/upgrades",slug:"/tutorials/upgrades/multichain",permalink:"/tenet-docs/node/tutorials/upgrades/multichain",draft:!1,editUrl:"https://github.com/tenet-org/tenet-docs/tree/main/docs/node/tutorials/upgrades/multichain.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Upgrades",permalink:"/tenet-docs/node/category/upgrades"},next:{title:"Interacting with Tenetd (CLI)",permalink:"/tenet-docs/node/tutorials/cli"}},s={},p=[{value:"Instructions",id:"instructions",level:2},{value:"On-chain governance proposal attains consensus",id:"on-chain-governance-proposal-attains-consensus",level:2},{value:"Upgrade date",id:"upgrade-date",level:2},{value:"Chain-id will remain the same",id:"chain-id-will-remain-the-same",level:2},{value:"Preparing for the upgrade",id:"preparing-for-the-upgrade",level:2},{value:"System requirement",id:"system-requirement",level:3},{value:"Backups",id:"backups",level:3},{value:"Testing",id:"testing",level:3},{value:"Current runtime, tenet_155-1 (pre-multichain upgrade) is running Tenet v11.0.7",id:"current-runtime-tenet_155-1-pre-multichain-upgrade-is-running-tenet-v1107",level:3},{value:"Target runtime, tenet_155-1 (post-multichain upgrade) will run Tenet v11.2.0",id:"target-runtime-tenet_155-1-post-multichain-upgrade-will-run-tenet-v1120",level:3},{value:"Upgrade steps",id:"upgrade-steps",level:2},{value:"Method I: Manual Upgrade",id:"method-i-manual-upgrade",level:3},{value:"Method II: Upgrade using Cosmovisor",id:"method-ii-upgrade-using-cosmovisor",level:3},{value:"Manually preparing the binary",id:"manually-preparing-the-binary",level:3},{value:"Preparation",id:"preparation",level:5},{value:"Expected upgrade result",id:"expected-upgrade-result",level:4},{value:"Auto-Downloading the Tenet binary",id:"auto-downloading-the-tenet-binary",level:3},{value:"Preparation",id:"preparation-1",level:4},{value:"Expected result",id:"expected-result",level:4},{value:"Upgrade duration",id:"upgrade-duration",level:2},{value:"Rollback plan",id:"rollback-plan",level:2},{value:"Communications",id:"communications",level:2},{value:"Risks",id:"risks",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"multichain"},"Multichain"),(0,r.kt)("p",null,"This document describes the steps for validators and full node operators, to upgrade successfully to the v11.2.0 release.\nThe v11.2.0 upgrade is a mandatory release."),(0,r.kt)("h2",{id:"instructions"},"Instructions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#on-chain-governance-proposal-attains-consensus"},"On-chain governance proposal attains consensus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upgrade-date"},"Upgrade date")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#chain-id-will-remain-the-same"},"Chain-id will remain the same")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#preparing-for-the-upgrade"},"Preparing for the upgrade"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#system-requirement"},"System requirement")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#backups"},"Backups")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#testing"},"Testing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#current-runtime-tenet_155-1-pre-multichain-upgrade-is-running-tenet"},"Current runtime, tenet_155-1 (pre-multichain upgrade) is running Tenet v11.0.7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#target-runtime-tenet_155-1-post-multichain-upgrade-will-run-tenet"},"Target runtime, tenet_155-1 (post-multichain upgrade) will run Tenet v11.2.0")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upgrade-steps"},"Upgrade steps"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#method-i-manual-upgrade"},"Method I: Manual Upgrade")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#method-ii-upgrade-using-cosmovisor"},"Method II: Upgrade using Cosmovisor"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#manually-preparing-the-binary"},"Manually preparing the binary"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#preparation"},"Preparation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#expected-upgrade-result"},"Expected upgrade result")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#auto-downloading-the-tenet-binary"},"Auto-Downloading the Tenet binary"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#preparation-1"},"Preparation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#expected-result"},"Expected result")))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upgrade-duration"},"Upgrade duration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rollback-plan"},"Rollback plan")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#communications"},"Communications")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#risks"},"Risks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#reference"},"Reference"))),(0,r.kt)("h2",{id:"on-chain-governance-proposal-attains-consensus"},"On-chain governance proposal attains consensus"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tenet.explorers.guru/proposal/2"},"https://tenet.explorers.guru/proposal/2")," is the reference on-chain governance proposal for this upgrade. Neither core developers nor core funding entities control the governance, and this governance proposal has passed in a ",(0,r.kt)("em",{parentName:"p"},"fully decentralized")," way."),(0,r.kt)("h2",{id:"upgrade-date"},"Upgrade date"),(0,r.kt)("p",null,"The upgrade will take place at a block height of ",(0,r.kt)("inlineCode",{parentName:"p"},"2 330 000"),". The date/time of the upgrade is subject to change as blocks are not generated at a constant interval. "),(0,r.kt)("h2",{id:"chain-id-will-remain-the-same"},"Chain-id will remain the same"),(0,r.kt)("p",null,"The chain-id of the network will remain the same, ",(0,r.kt)("inlineCode",{parentName:"p"},"tenet_155-1"),". This is because an in-place migration of state will take place, i.e., this upgrade does not export any state."),(0,r.kt)("h2",{id:"preparing-for-the-upgrade"},"Preparing for the upgrade"),(0,r.kt)("h3",{id:"system-requirement"},"System requirement"),(0,r.kt)("p",null,"32GB RAM is recommended to ensure a smooth upgrade."),(0,r.kt)("p",null,"If you have less than 32GB RAM, you might try creating a swapfile to swap an idle program onto the hard disk to free up memory. This can\nallow your machine to run the binary than it could run in RAM alone."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo fallocate -l 16G /swapfile\nsudo chmod 600 /swapfile\nsudo mkswap /swapfile\nsudo swapon /swapfile\n")),(0,r.kt)("h3",{id:"backups"},"Backups"),(0,r.kt)("p",null,"Prior to the upgrade, validators are encouraged to take a full data snapshot. Snapshotting depends heavily on infrastructure, but generally this can be done by backing up the ",(0,r.kt)("inlineCode",{parentName:"p"},".tenetd")," directory.\nIf you use Cosmovisor to upgrade, by default, Cosmovisor will backup your data upon upgrade. See below ",(0,r.kt)("a",{parentName:"p",href:"#method-ii-upgrade-using-cosmovisor-by-manually-preparing-the-tenet-v700-binary"},"upgrade by cosmovisor")," section."),(0,r.kt)("p",null,"It is critically important for validator operators to back-up the ",(0,r.kt)("inlineCode",{parentName:"p"},".tenetd/data/priv_validator_state.json")," file after stopping the tenetd process. This file is updated every block as your validator participates in consensus rounds. It is a critical file needed to prevent double-signing, in case the upgrade fails and the previous chain needs to be restarted."),(0,r.kt)("h3",{id:"testing"},"Testing"),(0,r.kt)("p",null,"For those validator and full node operators that are interested in ensuring preparedness for the impending upgrade, you can run a Local Testnet or join in our Tenet Public Testnet."),(0,r.kt)("h3",{id:"current-runtime-tenet_155-1-pre-multichain-upgrade-is-running-tenet-v1107"},"Current runtime, tenet_155-1 (pre-multichain upgrade) is running Tenet v11.0.7"),(0,r.kt)("p",null,"The Cosmos Hub mainnet network, ",(0,r.kt)("inlineCode",{parentName:"p"},"tenet_155-1"),", is currently running Tenet v11.0.7. We anticipate that operators who are running on v11.0.7, will be able to upgrade successfully. Validators are expected to ensure that their systems are up to date and capable of performing the upgrade. This includes running the correct binary, or if building from source, building with go ",(0,r.kt)("inlineCode",{parentName:"p"},"1.20"),"."),(0,r.kt)("h3",{id:"target-runtime-tenet_155-1-post-multichain-upgrade-will-run-tenet-v1120"},"Target runtime, tenet_155-1 (post-multichain upgrade) will run Tenet v11.2.0"),(0,r.kt)("p",null,"The Cosmos Hub mainnet network, ",(0,r.kt)("inlineCode",{parentName:"p"},"tenet_155-1"),", will run Tenet v11.2.0. Operators ",(0,r.kt)("em",{parentName:"p"},"MUST")," use this version post-upgrade to remain connected to the network."),(0,r.kt)("h2",{id:"upgrade-steps"},"Upgrade steps"),(0,r.kt)("p",null,"There are 2 major ways to upgrade a node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manual upgrade"),(0,r.kt)("li",{parentName:"ul"},"Upgrade using ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/tree/master/cosmovisor"},"Cosmovisor"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Either by manually preparing the new binary"),(0,r.kt)("li",{parentName:"ul"},"Or by using the auto-download functionality (this is not yet recommended)")))),(0,r.kt)("p",null,"If you prefer to use Cosmovisor to upgrade, some preparation work is needed before upgrade."),(0,r.kt)("h3",{id:"method-i-manual-upgrade"},"Method I: Manual Upgrade"),(0,r.kt)("p",null,"Make sure Tenet v11.2.0 is installed by either downloading a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/tenet/releases/tag/v11.2.0"},"compatible binary"),", or building from source. Building from source requires ",(0,r.kt)("strong",{parentName:"p"},"Golang 1.20"),"."),(0,r.kt)("p",null,"Run Tenet v11.0.7 till upgrade height, the node will panic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'ERR UPGRADE "multichain" NEEDED at height: 2330000\n')),(0,r.kt)("p",null,"Stop the node, and switch the binary to Tenet v11.2.0 and re-start by ",(0,r.kt)("inlineCode",{parentName:"p"},"tenetd start"),"."),(0,r.kt)("p",null,"It may take several minutes to a few hours until validators with a total sum voting power > 2/3 to complete their node upgrades. After that, the chain can continue to produce blocks."),(0,r.kt)("h3",{id:"method-ii-upgrade-using-cosmovisor"},"Method II: Upgrade using Cosmovisor"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Please Read Before Proceeding"),"\nUsing Cosmovisor 1.2.0 and higher requires a lowercase naming convention for upgrade version directory. For Cosmovisor 1.1.0 and earlier, the upgrade version is not lowercased.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"For Example:"),"\n",(0,r.kt)("strong",{parentName:"p"},"Cosmovisor =< ",(0,r.kt)("inlineCode",{parentName:"strong"},"1.1.0"),": ",(0,r.kt)("inlineCode",{parentName:"strong"},"/upgrades/v9-Lambda/bin/tenetd")),"\n",(0,r.kt)("strong",{parentName:"p"},"Cosmovisor >= ",(0,r.kt)("inlineCode",{parentName:"strong"},"1.2.0"),": ",(0,r.kt)("inlineCode",{parentName:"strong"},"/upgrades/v9-lambda/bin/tenetd")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Cosmovisor Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Binary Name in Path"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.3"),(0,r.kt)("td",{parentName:"tr",align:null},"multichain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2"),(0,r.kt)("td",{parentName:"tr",align:null},"multichain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1"),(0,r.kt)("td",{parentName:"tr",align:null},"multichain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"multichain")))),(0,r.kt)("h3",{id:"manually-preparing-the-binary"},"Manually preparing the binary"),(0,r.kt)("h5",{id:"preparation"},"Preparation"),(0,r.kt)("p",null,"Install the latest version of Cosmovisor (",(0,r.kt)("inlineCode",{parentName:"p"},"1.3.0"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@latest\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Verify Cosmovisor Version")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cosmovisor version\ncosmovisor version: v1.3.0\n")),(0,r.kt)("p",null,"Create a cosmovisor folder:"),(0,r.kt)("p",null,"create a Cosmovisor folder inside ",(0,r.kt)("inlineCode",{parentName:"p"},"$TENET_HOME")," and move Tenet v11.0.7 into ",(0,r.kt)("inlineCode",{parentName:"p"},"$TENET_HOME/cosmovisor/genesis/bin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p $TENET_HOME/cosmovisor/genesis/bin\ncp $(which tenetd) $TENET_HOME/cosmovisor/genesis/bin\n")),(0,r.kt)("p",null,"build Tenet v11.2.0, and move tenetd v11.2.0 to ",(0,r.kt)("inlineCode",{parentName:"p"},"$TENET_HOME/cosmovisor/upgrades/multichain/bin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p  $TENET_HOME/cosmovisor/upgrades/multichain/bin\ncp $(which tenetd) $TENET_HOME/cosmovisor/upgrades/multichain/bin\n")),(0,r.kt)("p",null,"Then you should get the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},".\n\u251c\u2500\u2500 current -> genesis or upgrades/<name>\n\u251c\u2500\u2500 genesis\n\u2502   \u2514\u2500\u2500 bin\n\u2502       \u2514\u2500\u2500 tenetd  #v11.0.7\n\u2514\u2500\u2500 upgrades\n    \u2514\u2500\u2500 multichain\n        \u2514\u2500\u2500 bin\n            \u2514\u2500\u2500 tenetd  #v11.2.0\n")),(0,r.kt)("p",null,"Export the environmental variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export DAEMON_NAME=tenetd\n# please change to your own tenet home dir\n# please note `DAEMON_HOME` has to be absolute path\nexport DAEMON_HOME=$TENET_HOME\nexport DAEMON_RESTART_AFTER_UPGRADE=true\n")),(0,r.kt)("p",null,"Start the node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cosmovisor run start --x-crisis-skip-assert-invariants --home $DAEMON_HOME\n")),(0,r.kt)("p",null,"Skipping the invariant checks is strongly encouraged since it decreases the upgrade time significantly and since there are some other improvements coming to the crisis module in the next release of the Cosmos SDK."),(0,r.kt)("h4",{id:"expected-upgrade-result"},"Expected upgrade result"),(0,r.kt)("p",null,"When the upgrade block height is reached, Tenet will panic and stop:"),(0,r.kt)("p",null,"This may take 7 minutes to a few hours.\nAfter upgrade, the chain will continue to produce blocks when validators with a total sum voting power > 2/3 complete their node upgrades."),(0,r.kt)("h3",{id:"auto-downloading-the-tenet-binary"},"Auto-Downloading the Tenet binary"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This method is not recommended!")),(0,r.kt)("h4",{id:"preparation-1"},"Preparation"),(0,r.kt)("p",null,"Install the latest version of Cosmovisor (",(0,r.kt)("inlineCode",{parentName:"p"},"1.3.0"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@latest\n")),(0,r.kt)("p",null,"Create a cosmovisor folder:"),(0,r.kt)("p",null,"create a cosmovisor folder inside tenet home and move tenetd v11.0.7 into ",(0,r.kt)("inlineCode",{parentName:"p"},"$TENET_HOME/cosmovisor/genesis/bin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p $TENET_HOME/cosmovisor/genesis/bin\ncp $(which tenetd) $TENET_HOME/cosmovisor/genesis/bin\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},".\n\u251c\u2500\u2500 current -> genesis or upgrades/<name>\n\u2514\u2500\u2500 genesis\n     \u2514\u2500\u2500 bin\n        \u2514\u2500\u2500 tenetd  #v11.0.7\n")),(0,r.kt)("p",null,"Export the environmental variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export DAEMON_NAME=tenetd\n# please change to your own tenet home dir\nexport DAEMON_HOME=$TENET_HOME\nexport DAEMON_RESTART_AFTER_UPGRADE=true\nexport DAEMON_ALLOW_DOWNLOAD_BINARIES=true\n")),(0,r.kt)("p",null,"Start the node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cosmovisor run start --x-crisis-skip-assert-invariants --home $DAEMON_HOME\n")),(0,r.kt)("p",null,"Skipping the invariant checks can help decrease the upgrade time significantly."),(0,r.kt)("h4",{id:"expected-result"},"Expected result"),(0,r.kt)("p",null,"When the upgrade block height is reached, you can find the following information in the log:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'ERR UPGRADE "multichain" NEEDED at height: 2330000\n')),(0,r.kt)("p",null,"Then the Cosmovisor will create ",(0,r.kt)("inlineCode",{parentName:"p"},"$TENET_HOME/cosmovisor/upgrades/multichain/bin")," and download the Tenet v11.2.0 binary to this folder according to links in the ",(0,r.kt)("inlineCode",{parentName:"p"},"--info")," field of the upgrade proposal.\nThis may take 7 minutes to a few hours, afterwards, the chain will continue to produce blocks once validators with a total sum voting power > 2/3 complete their nodes upgrades."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Please Note:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In general, auto-download comes with the risk that the verification of correct download is done automatically. If users want to have the highest guarantee users should confirm the check-sum manually. We hope more node operators will use the auto-download for this release but please be aware this is a risk and users should take at your own discretion."),(0,r.kt)("li",{parentName:"ul"},"Users should run their node on v11.0.7 if they use the cosmovisor v1.3.0 with auto-download enabled for upgrade process.")),(0,r.kt)("h2",{id:"upgrade-duration"},"Upgrade duration"),(0,r.kt)("p",null,"The upgrade may take a few minutes to several hours to complete because tenet_155-1 participants operate globally with differing operating hours and it may take some time for operators to upgrade their binaries and connect to the network."),(0,r.kt)("h2",{id:"rollback-plan"},"Rollback plan"),(0,r.kt)("p",null,"During the network upgrade, core Tenet teams will be keeping an ever vigilant eye and communicating with operators on the status of their upgrades. During this time, the core teams will listen to operator needs to determine if the upgrade is experiencing unintended challenges. In the event of unexpected challenges, the core teams, after conferring with operators and attaining social consensus, may choose to declare that the upgrade will be skipped."),(0,r.kt)("p",null,"Steps to skip this upgrade proposal are simply to resume the tenet_155-1 network with the (downgraded) v11.0.7 binary using the following command:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"tenetd start --unsafe-skip-upgrade 2330000")),(0,r.kt)("p",null,"Note: There is no particular need to restore a state snapshot prior to the upgrade height, unless specifically directed by core Tenet teams."),(0,r.kt)("p",null,"Important: A social consensus decision to skip the upgrade will be based solely on technical merits, thereby respecting and maintaining the decentralized governance process of the upgrade proposal's successful YES vote."),(0,r.kt)("h2",{id:"communications"},"Communications"),(0,r.kt)("p",null,"Operators are encouraged to join the ",(0,r.kt)("inlineCode",{parentName:"p"},"#cosmos-hub-validators-verified")," channel of the Cosmos Hub Community Discord. This channel is the primary communication tool for operators to ask questions, report upgrade status, report technical issues, and to build social consensus should the need arise. This channel is restricted to known operators and requires verification beforehand. Requests to join the ",(0,r.kt)("inlineCode",{parentName:"p"},"#cosmos-hub-validators-verified")," channel can be sent to the ",(0,r.kt)("inlineCode",{parentName:"p"},"#general-support")," channel."),(0,r.kt)("h2",{id:"risks"},"Risks"),(0,r.kt)("p",null,"As a validator performing the upgrade procedure on your consensus nodes carries a heightened risk of double-signing and being slashed. The most important piece of this procedure is verifying your software version and genesis file hash before starting your validator and signing."),(0,r.kt)("p",null,"The riskiest thing a validator can do is discover that they made a mistake and repeat the upgrade procedure again during the network startup. If you discover a mistake in the process, the best thing to do is wait for the network to start before correcting it."))}c.isMDXComponent=!0}}]);