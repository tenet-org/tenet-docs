"use strict";(self.webpackChunktenet_docs=self.webpackChunktenet_docs||[]).push([[5377],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},f=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),l=d(t),p=a,m=l["".concat(c,".").concat(p)]||l[p]||u[p]||o;return t?n.createElement(m,s(s({ref:r},f),{},{components:t})):n.createElement(m,s({ref:r},f))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[l]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9208:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=t(7462),a=(t(7294),t(3905));const o={},s="Source of Staking Rewards",i={unversionedId:"rewards/source-of-staking-rewards",id:"rewards/source-of-staking-rewards",title:"Source of Staking Rewards",description:"The TENET blockchain generates staking rewards from two sources:",source:"@site/docs/diversified-pos/rewards/source-of-staking-rewards.md",sourceDirName:"rewards",slug:"/rewards/source-of-staking-rewards",permalink:"/tenet-docs/diversified-pos/rewards/source-of-staking-rewards",draft:!1,editUrl:"https://github.com/tenet-org/tenet-docs/edit/master/docs/diversified-pos/rewards/source-of-staking-rewards.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Rewards for Diversified Proof of Stake assets",permalink:"/tenet-docs/diversified-pos/rewards/rewards-for-diversified-proof-of-stake-assets"},next:{title:"The Take Rate",permalink:"/tenet-docs/diversified-pos/rewards/the-take-rate"}},c={},d=[],f={toc:d},l="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(l,(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"source-of-staking-rewards"},"Source of Staking Rewards"),(0,a.kt)("p",null,"The TENET blockchain generates staking rewards from two sources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Inflation rewards: These are new native tokens that are minted and released as rewards every block according to the chain's inflation rate."),(0,a.kt)("li",{parentName:"ul"},"Gas fees: These are the computational transaction fees applied to every blockchain transaction. 50% of these fees go to stakers and 50% to veTenet holders.")),(0,a.kt)("p",null,"Because gas and inflation are denominated in a chain's native asset, Diversified Proof of Stake stakers will receive native rewards in the form of the TENET native asset."))}u.isMDXComponent=!0}}]);