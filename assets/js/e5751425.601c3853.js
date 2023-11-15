"use strict";(self.webpackChunktenet_docs=self.webpackChunktenet_docs||[]).push([[16],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(r),p=a,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[h]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5788:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={title:"Basic Request Model",sidebar_position:3},o=void 0,c={unversionedId:"architecture/architecture-overview/architecture-request-model",id:"architecture/architecture-overview/architecture-request-model",title:"Basic Request Model",description:"Contracts Overview",source:"@site/docs/oracle/architecture/architecture-overview/architecture-request-model.md",sourceDirName:"architecture/architecture-overview",slug:"/architecture/architecture-overview/architecture-request-model",permalink:"/oracle/architecture/architecture-overview/architecture-request-model",draft:!1,editUrl:"https://github.com/tenet-org/tenet-docs/edit/master/docs/oracle/architecture/architecture-overview/architecture-request-model.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Basic Request Model",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Models",permalink:"/oracle/architecture/architecture-overview/"},next:{title:"Decentralized Model",permalink:"/oracle/architecture/architecture-overview/architecture-decentralized-model"}},l={},s=[{value:"Contracts Overview",id:"contracts-overview",level:2},{value:"TenetOracleClient",id:"tenetoracleclient",level:3},{value:"TENET Token",id:"tenet-token",level:3},{value:"Oracle Contract",id:"oracle-contract",level:3},{value:"Request",id:"request",level:4},{value:"Fulfillment",id:"fulfillment",level:4},{value:"Off-Chain Oracle Node",id:"off-chain-oracle-node",level:3}],u={toc:s},h="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(h,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contracts-overview"},"Contracts Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"&#39;Tenet Oracle Architecture&#39;",src:r(629).Z,width:"5066",height:"1029"})),(0,a.kt)("h3",{id:"tenetoracleclient"},"TenetOracleClient"),(0,a.kt)("p",null,"[",(0,a.kt)("inlineCode",{parentName:"p"},"TenetOrackeClient"),"]"," is a parent contract that enables smart contracts to consume data from oracles."),(0,a.kt)("p",null,"The client constructs and makes a request to a known Tenet Oracle oracle through the ",(0,a.kt)("inlineCode",{parentName:"p"},"transferAndCall")," function, implemented by the TENET token. This request contains encoded information that is required for the cycle to succeed. In the ",(0,a.kt)("inlineCode",{parentName:"p"},"TenetOracleClient")," contract, this call is initiated with a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"sendTenetOracleRequestTo"),"."),(0,a.kt)("h3",{id:"tenet-token"},"TENET Token"),(0,a.kt)("p",null,"Tenet Oracle utilises an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/issues/677"},"ERC-677")," compliant version of TENET token which implements ",(0,a.kt)("inlineCode",{parentName:"p"},"transferAndCall"),", a function that allows tokens to be transferred whilst also triggering logic in the receiving contract within a single transaction. The amount of TENET available as rewards for Tenet Oracle utilisation is set through our native gauge voting system by veTENET holders."),(0,a.kt)("h3",{id:"oracle-contract"},"Oracle Contract"),(0,a.kt)("p",null,"[",(0,a.kt)("inlineCode",{parentName:"p"},"Oracle")," contracts]"," are owned by oracle node operators, which run alongside off-chain oracle nodes."),(0,a.kt)("h4",{id:"request"},"Request"),(0,a.kt)("p",null,"The client contract that initiates this cycle must create a request with the following items:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The oracle address."),(0,a.kt)("li",{parentName:"ul"},"The job ID, so the oracle knows which tasks to perform."),(0,a.kt)("li",{parentName:"ul"},"The callback function, which the oracle sends the response to.")),(0,a.kt)("p",null,"Oracle contracts are responsible for handling on-chain requests made through the TENET token, by implementing ",(0,a.kt)("inlineCode",{parentName:"p"},"onTokenTransfer")," as a",(0,a.kt)("inlineCode",{parentName:"p"},"TenetTokenReceiver"),". Upon execution of this function, the oracle contract ",(0,a.kt)("strong",{parentName:"p"},"emits an ",(0,a.kt)("inlineCode",{parentName:"strong"},"OracleRequest")," event")," containing information about the request. This event is crucial, as it is monitored by the off-chain oracle node which acts upon it."),(0,a.kt)("h4",{id:"fulfillment"},"Fulfillment"),(0,a.kt)("p",null,"For fulfillment, the oracle contract has a ",(0,a.kt)("inlineCode",{parentName:"p"},"fulfillOracleRequest")," function which is used by the node to fulfill a request once it has the result of the job. This function returns the result to the ",(0,a.kt)("inlineCode",{parentName:"p"},"TenetOracleClient")," using the callback function defined in the original request."),(0,a.kt)("h3",{id:"off-chain-oracle-node"},"Off-Chain Oracle Node"),(0,a.kt)("p",null,"The off-chain oracle node is responsible for listening for events emitted by its corresponding on-chain smart contract. Once it detects an ",(0,a.kt)("inlineCode",{parentName:"p"},"OracleRequest")," event, it uses the data emitted to perform a job."),(0,a.kt)("p",null,"The most common job type for a Node is to make a GET request to an API, retrieve some data from it, parse the response, convert the result into blockchain compatible data, then submit it in a transaction back to the oracle contract, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"fulfillOracleRequest")," function."))}d.isMDXComponent=!0},629:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/chainlink_architecture-9036ec8dfa8624dcb8d155d681e2c5e0.png"}}]);