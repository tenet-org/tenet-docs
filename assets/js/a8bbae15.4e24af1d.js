"use strict";(self.webpackChunktenet_docs=self.webpackChunktenet_docs||[]).push([[4528],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),l=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),p=n,g=u["".concat(d,".").concat(p)]||u[p]||h[p]||o;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9598:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={title:"Decentralized Model"},i=void 0,c={unversionedId:"architecture/architecture-overview/architecture-decentralized-model",id:"architecture/architecture-overview/architecture-decentralized-model",title:"Decentralized Model",description:"This page describes how data aggregation is applied to produce Tenet Oracle Data Feeds and provides more insight as to how Data Feeds are updated.",source:"@site/docs/oracle/architecture/architecture-overview/architecture-decentralized-model.md",sourceDirName:"architecture/architecture-overview",slug:"/architecture/architecture-overview/architecture-decentralized-model",permalink:"/oracle/architecture/architecture-overview/architecture-decentralized-model",draft:!1,editUrl:"https://github.com/tenet-org/tenet-docs/edit/master/docs/oracle/architecture/architecture-overview/architecture-decentralized-model.md",tags:[],version:"current",frontMatter:{title:"Decentralized Model"},sidebar:"docsSidebar",previous:{title:"Basic Request Model",permalink:"/oracle/architecture/architecture-overview/architecture-request-model"},next:{title:"Advanced Features of Chainlink",permalink:"/oracle/advanced-features"}},d={},l=[{value:"Data Aggregation",id:"data-aggregation",level:2},{value:"Shared Data Resource",id:"shared-data-resource",level:2},{value:"Decentralized Oracle Network",id:"decentralized-oracle-network",level:2},{value:"Components of a Decentralized Oracle Network",id:"components-of-a-decentralized-oracle-network",level:2},{value:"Consumer",id:"consumer",level:3},{value:"Proxy",id:"proxy",level:3},{value:"Aggregator",id:"aggregator",level:3}],s={toc:l},u="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This page describes how data aggregation is applied to produce Tenet Oracle Data Feeds and provides more insight as to how Data Feeds are updated."),(0,n.kt)("h2",{id:"data-aggregation"},"Data Aggregation"),(0,n.kt)("p",null,"Each data feed is updated by multiple, independent Tenet Oracle oracle operators. The ","[AccessControlledOffchainAggregator]"," aggregates the data on-chain."),(0,n.kt)("p",null,"Off-Chain Reporting (OCR) further enhances the aggregation process."),(0,n.kt)("h2",{id:"shared-data-resource"},"Shared Data Resource"),(0,n.kt)("p",null,"Each data feed is built and funded by the community of users who rely on accurate, up-to-date data in their smart contracts. As more users rely on and contribute to a data feed, the quality of the data feed improves. For this reason, each data feed has its own properties depending on the needs of its community of users."),(0,n.kt)("h2",{id:"decentralized-oracle-network"},"Decentralized Oracle Network"),(0,n.kt)("p",null,"Each data feed is updated by a decentralized oracle network. Each oracle operator is rewarded for publishing data. The number of oracles contributing to each feed varies. In order for an update to take place, the data feed aggregator contract must receive responses from a minimum number of oracles or the latest answer will not be updated. You can see the minimum number of oracles for the corresponding feed at ",(0,n.kt)("a",{parentName:"p",href:"https://data.tenet.org"},"data.tenet.org"),"."),(0,n.kt)("p",null,"Each oracle in the set publishes data during an aggregation round. That data is validated and aggregated by a smart contract, which forms the feed's latest and trusted answer."),(0,n.kt)("h2",{id:"components-of-a-decentralized-oracle-network"},"Components of a Decentralized Oracle Network"),(0,n.kt)("h3",{id:"consumer"},"Consumer"),(0,n.kt)("p",null,"A Consumer contract is any contract that uses Chainlink Data Feeds to consume aggregated data. Consumer contracts must reference the correct ","[",(0,n.kt)("inlineCode",{parentName:"p"},"AggregatorV3Interface"),"]"," contract and call one of the exposed functions."),(0,n.kt)("h3",{id:"proxy"},"Proxy"),(0,n.kt)("p",null,"Proxy contracts are on-chain proxies that point to the aggregator for a particular data feed. Using proxies enables the underlying aggregator to be upgraded without any service interruption to consuming contracts."),(0,n.kt)("p",null,"Proxy contracts can vary from one data feed to another."),(0,n.kt)("h3",{id:"aggregator"},"Aggregator"),(0,n.kt)("p",null,"An aggregator is the contract that receives periodic data updates from the oracle network. Aggregators store aggregated data on-chain so that consumers can retrieve it and act upon it within the same transaction."),(0,n.kt)("p",null,"You can access this data using the Data Feed address and the ","[",(0,n.kt)("inlineCode",{parentName:"p"},"AggregatorV3Interface")," contract]","."),(0,n.kt)("p",null,"Aggregators receive updates from the oracle network only when the ",(0,n.kt)("strong",{parentName:"p"},"Deviation Threshold")," or ",(0,n.kt)("strong",{parentName:"p"},"Heartbeat Threshold")," triggers an update during an aggregation round. The first condition that is met triggers an update to the data."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Deviation Threshold: A new aggregation round starts when a node identifies that the off-chain values deviate by more than the defined deviation threshold from the on-chain value. Individual nodes monitor one or more data providers for each feed."),(0,n.kt)("li",{parentName:"ul"},"Heartbeat Threshold: A new aggregation round starts after a specified amount of time from the last update.")))}h.isMDXComponent=!0}}]);