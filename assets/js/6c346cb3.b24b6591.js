"use strict";(self.webpackChunktenet_docs=self.webpackChunktenet_docs||[]).push([[3221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,c=m["".concat(d,".").concat(u)]||m[u]||k[u]||l;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:4},i="Tendermint RPC",o={unversionedId:"api/tendermint",id:"api/tendermint",title:"Tendermint RPC",description:"The Tendermint RPC allows you to query transactions, blocks, consensus state, broadcast transactions, etc.",source:"@site/docs/node/api/tendermint.md",sourceDirName:"api",slug:"/api/tendermint",permalink:"/tenet-docs/node/api/tendermint",draft:!1,editUrl:"https://github.com/tenet-org/tenet-docs/edit/master/docs/node/api/tendermint.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Cosmos gRPC & REST",permalink:"/tenet-docs/node/api/cosmos"},next:{title:"Validation",permalink:"/tenet-docs/node/category/validation"}},d={},p=[{value:"URI/HTTP",id:"urihttp",level:2},{value:"RPC/HTTP",id:"rpchttp",level:2},{value:"RPC/Websocket",id:"rpcwebsocket",level:2},{value:"Cosmos and Tendermint Events",id:"cosmos-and-tendermint-events",level:3},{value:"Subscribing to Events via Websocket",id:"subscribing-to-events-via-websocket",level:3},{value:"List of Tendermint Events",id:"list-of-tendermint-events",level:3},{value:"Example",id:"example",level:3}],s={toc:p},m="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tendermint-rpc"},"Tendermint RPC"),(0,r.kt)("p",null,"The Tendermint RPC allows you to query transactions, blocks, consensus state, broadcast transactions, etc."),(0,r.kt)("p",null,"The latest Tendermint RPC documentations can be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/v0.34/rpc/"},"here"),". Tendermint\nsupports the following RPC protocols:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"URI over HTTP"),(0,r.kt)("li",{parentName:"ul"},"JSON-RPC over HTTP"),(0,r.kt)("li",{parentName:"ul"},"JSON-RPC over Websockets")),(0,r.kt)("p",null,"The docs will contain an interactive Swagger interface."),(0,r.kt)("h2",{id:"urihttp"},"URI/HTTP"),(0,r.kt)("p",null,"A GET request with arguments encoded as query parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl localhost:26657/block?height=5\n")),(0,r.kt)("h2",{id:"rpchttp"},"RPC/HTTP"),(0,r.kt)("p",null,"JSONRPC requests can be POST'd to the root RPC endpoint via HTTP. See the list\nof supported Tendermint RPC endpoints using Swagger ",(0,r.kt)("a",{parentName:"p",href:"ts"},"here"),"."),(0,r.kt)("h2",{id:"rpcwebsocket"},"RPC/Websocket"),(0,r.kt)("h3",{id:"cosmos-and-tendermint-events"},"Cosmos and Tendermint Events"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Event"),"s are objects that contain information about the execution of the application\nand are triggered after a block is committed. They are mainly used by service providers\nlike block explorers and wallet to track the execution of various messages and index transactions.\nYou can get the full list of ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," categories and values ",(0,r.kt)("a",{parentName:"p",href:"#list-of-tendermint-events"},"here"),"."),(0,r.kt)("p",null,"More on Events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/core/events.html"},"Cosmos SDK Events"))),(0,r.kt)("h3",{id:"subscribing-to-events-via-websocket"},"Subscribing to Events via Websocket"),(0,r.kt)("p",null,"Tendermint Core provides a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/v0.34/tendermint-core/subscription.html"},"Websocket")," connection to subscribe or unsubscribe to Tendermint ",(0,r.kt)("inlineCode",{parentName:"p"},"Events"),". To start a connection with the Tendermint websocket you need to define the address with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc.laddr")," flag when starting the node (default ",(0,r.kt)("inlineCode",{parentName:"p"},"tcp://127.0.0.1:26657"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'tenetd start --rpc.laddr="tcp://127.0.0.1:26657"\n')),(0,r.kt)("p",null,"Then, start a websocket subscription with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hashrocket/ws"},"ws")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# connect to tendermint websocket at port 8080\nws ws://localhost:8080/websocket\n\n# subscribe to new Tendermint block headers\n> { "jsonrpc": "2.0", "method": "subscribe", "params": ["tm.event=\'NewBlockHeader\'"], "id": 1 }\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute")," value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," allow you to filter the specific ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," you are\nlooking for. For example, an Ethereum transaction on Tenet (",(0,r.kt)("inlineCode",{parentName:"p"},"MsgEthereumTx"),") triggers an ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," of type ",(0,r.kt)("inlineCode",{parentName:"p"},"ethermint")," and\nhas ",(0,r.kt)("inlineCode",{parentName:"p"},"sender")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"recipient")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"attributes"),". Subscribing to this ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," would be done like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "subscribe",\n    "id": "0",\n    "params": {\n        "query": "tm.event=\'Tx\' AND ethereum.recipient=\'hexAddress\'"\n    }\n}\n')),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"hexAddress")," is an Ethereum hex address (eg: ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1122334455667788990011223344556677889900"),")."),(0,r.kt)("p",null,"The generic syntax looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "subscribe",\n    "id": "0",\n    "params": {\n        "query": "tm.event=\'<event_value>\' AND eventType.eventAttribute=\'<attribute_value>\'"\n    }\n}\n')),(0,r.kt)("h3",{id:"list-of-tendermint-events"},"List of Tendermint Events"),(0,r.kt)("p",null,"The main events you can subscribe to are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NewBlock"),": Contains ",(0,r.kt)("inlineCode",{parentName:"li"},"events")," triggered during ",(0,r.kt)("inlineCode",{parentName:"li"},"BeginBlock")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"EndBlock"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tx"),": Contains ",(0,r.kt)("inlineCode",{parentName:"li"},"events")," triggered during ",(0,r.kt)("inlineCode",{parentName:"li"},"DeliverTx")," (i.e. transaction processing)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ValidatorSetUpdates"),": Contains validator set updates for the block.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udc49 The list of events types and values for each Cosmos SDK module can be found in the ",(0,r.kt)("a",{parentName:"p",href:"./../../../../protocol/modules/"},"Modules Specification")," section.\nCheck the ",(0,r.kt)("inlineCode",{parentName:"p"},"Events")," page to obtain the event list of each supported module on Tenet.")),(0,r.kt)("p",null,"List of all Tendermint event keys:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Event Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Categories"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subscribe to a specific event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"tm.event"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subscribe to a specific transaction"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"tx.hash"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subscribe to transactions at a specific block height"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"tx.height"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Index ",(0,r.kt)("inlineCode",{parentName:"td"},"BeginBlock")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Endblock")," events"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"block.height"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subscribe to ABCI ",(0,r.kt)("inlineCode",{parentName:"td"},"BeginBlock")," events"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"begin_block"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subscribe to ABCI ",(0,r.kt)("inlineCode",{parentName:"td"},"EndBlock")," events"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"end_block"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))))),(0,r.kt)("p",null,"Below is a list of values that you can use to subscribe for the ",(0,r.kt)("inlineCode",{parentName:"p"},"tm.event")," type:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Event Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Categories"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New block"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"NewBlock"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New block header"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"NewBlockHeader"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New Byzantine Evidence"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"NewEvidence"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New transaction"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Tx"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Validator set updated"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"ValidatorSetUpdates"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block sync status"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"BlockSyncStatus"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lock"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Lock"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New consensus round"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"NewRound"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Polka"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Polka"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Relock"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Relock"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"State sync status"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"StateSyncStatus"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Timeout propose"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"TimeoutPropose"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Timeout wait"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"TimeoutWait"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unlock"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Unlock"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block is valid"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"ValidBlock"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Consensus vote"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Vote"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'ws ws://localhost:26657/websocket\n> { "jsonrpc": "2.0", "method": "subscribe", "params": ["tm.event=\'ValidatorSetUpdates\'"], "id": 1 }\n')),(0,r.kt)("p",null,"Example response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "id": 0,\n    "result": {\n        "query": "tm.event=\'ValidatorSetUpdates\'",\n        "data": {\n            "type": "tendermint/event/ValidatorSetUpdates",\n            "value": {\n              "validator_updates": [\n                {\n                  "address": "09EAD022FD25DE3A02E64B0FE9610B1417183EE4",\n                  "pub_key": {\n                    "type": "tendermint/PubKeyEd25519",\n                    "value": "ww0z4WaZ0Xg+YI10w43wTWbBmM3dpVza4mmSQYsd0ck="\n                  },\n                  "voting_power": "10",\n                  "proposer_priority": "0"\n                }\n              ]\n            }\n        }\n    }\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Note:")," When querying Ethereum transactions versus Cosmos transactions, the transaction hashes are different.\nWhen querying Ethereum transactions, users need to use event query.\nHere's an example with the CLI:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://localhost:26657/tx_search?query=ethereum_tx.ethereumTxHash%3D0x8d43464891fac6c113e809e14dff1a3e608eae124d629799e42ca0e36562d9d7&prove=false&page=1&per_page=30&order_by=asc" -H "accept: application/json"\n'))))}k.isMDXComponent=!0}}]);