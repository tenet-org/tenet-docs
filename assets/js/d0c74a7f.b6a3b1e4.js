"use strict";(self.webpackChunktenet_docs=self.webpackChunktenet_docs||[]).push([[9111],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>u});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(t),h=o,u=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return t?n.createElement(u,s(s({ref:a},m),{},{components:t})):n.createElement(u,s({ref:a},m))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=h;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2041:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const r={sidebar_position:2},s="Borrowing",i={unversionedId:"borrowing",id:"borrowing",title:"Borrowing",description:"Why would I use Tenet Stablecoin Protocol for borrowing?",source:"@site/docs/tenet-stablecoin-protocol/borrowing.md",sourceDirName:".",slug:"/borrowing",permalink:"/tenet-stablecoin-protocol/borrowing",draft:!1,editUrl:"https://github.com/tenet-org/tenet-docs/edit/master/docs/tenet-stablecoin-protocol/borrowing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"General",permalink:"/tenet-stablecoin-protocol/"},next:{title:"Stability Pool and Liquidations",permalink:"/tenet-stablecoin-protocol/stability-pool-and-liquidations"}},l={},p=[{value:"<strong>Why would I use</strong> Tenet Stablecoin Protocol <strong>for borrowing?</strong>",id:"why-would-i-use-tenet-stablecoin-protocol-for-borrowing",level:3},{value:"<strong>What is a CLIP?</strong>",id:"what-is-a-clip",level:3},{value:"<strong>What do you mean by collateral?</strong>",id:"what-do-you-mean-by-collateral",level:3},{value:"Which assets are accepted as collateral by Tenet Stablecoin Protocol ?",id:"which-assets-are-accepted-as-collateral-by-tenet-stablecoin-protocol-",level:3},{value:"<strong>How can the protocol offer interest-free borrowing?</strong>",id:"how-can-the-protocol-offer-interest-free-borrowing",level:3},{value:"<strong>How can I borrow with</strong> Tenet Stablecoin Protocol <strong>?</strong>",id:"how-can-i-borrow-with-tenet-stablecoin-protocol-",level:3},{value:"<strong>Do I have to pay fees as a borrower?</strong>",id:"do-i-have-to-pay-fees-as-a-borrower",level:3},{value:"<strong>How is the borrowing fee calculated?</strong>",id:"how-is-the-borrowing-fee-calculated",level:3},{value:"<strong>When do I need to pay my loan back?</strong>",id:"when-do-i-need-to-pay-my-loan-back",level:3},{value:"What is the collateral ratio?",id:"what-is-the-collateral-ratio",level:3},{value:"<strong>What is the minimum collateral ratio (MCR) and the &quot;recommended&quot; collateral ratio?</strong>",id:"what-is-the-minimum-collateral-ratio-mcr-and-the-recommended-collateral-ratio",level:3},{value:"<strong>What happens if my</strong> CLIP <strong>is liquidated?</strong>",id:"what-happens-if-my-clip-is-liquidated",level:3},{value:"<strong>What is the Liquidation Reserve?</strong>",id:"what-is-the-liquidation-reserve",level:3},{value:"<strong>What happens if my</strong> CLIP <strong>is redeemed against?</strong>",id:"what-happens-if-my-clip-is-redeemed-against",level:3},{value:"How can you offer a collateral ratio as low as 125%?",id:"how-can-you-offer-a-collateral-ratio-as-low-as-125",level:3},{value:"<strong>How can I take advantage of leverage?</strong>",id:"how-can-i-take-advantage-of-leverage",level:3},{value:"<strong>Why did the collateral and debt of my</strong> CLIP <strong>increase without my intervention?</strong>",id:"why-did-the-collateral-and-debt-of-my-clip-increase-without-my-intervention",level:3}],m={toc:p},d="wrapper";function c(e){let{components:a,...t}=e;return(0,o.kt)(d,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"borrowing"},"Borrowing"),(0,o.kt)("h3",{id:"why-would-i-use-tenet-stablecoin-protocol-for-borrowing"},(0,o.kt)("strong",{parentName:"h3"},"Why would I use")," Tenet Stablecoin Protocol ",(0,o.kt)("strong",{parentName:"h3"},"for borrowing?")),(0,o.kt)("p",null,"Tenet Stablecoin Protocol offers interest-free loans and is more capital efficient than other borrowing systems (i.e. less collateral is needed for the same loan). It allows you to collateralize assets that are already yield-bearing through their participation in Tenet validation (and underlying yield on the assets)."),(0,o.kt)("p",null,"Instead of selling these collateral assets to have liquid funds, you can use the protocol to lock up your LSDs, borrow against them to withdraw LSDC, and then repay your loan at a future date."),(0,o.kt)("p",null,"This allows users to use leverage by drawing a loan against yield-bearing collateral and swapping the LSDC for more yield-bearing collateral and depositing more into the CLIP."),(0,o.kt)("p",null,"The ability to get extra liquidity against already productive assets that users want to hold for the long term allows them to remain exposed to both the underlying asset as well as the yield that is being earned."),(0,o.kt)("h3",{id:"what-is-a-clip"},(0,o.kt)("strong",{parentName:"h3"},"What is a CLIP?")),(0,o.kt)("p",null,"CLIP stands for Collateralized Liquid Interest Position."),(0,o.kt)("p",null,"A Clip is where you take out and maintain your loan. Each CLIP is linked to a Tenet address and each address can have just one CLIP per collateral type. If you are familiar with Vaults, CLIPs or CDPs from other platforms, CLIPs are similar as a concept."),(0,o.kt)("p",null,"CLIPs maintain two balances: one is the collateral asset and the other is a debt denominated in LSDC. You can change the amount of each by adding collateral or repaying debt. As you make these balance changes, your CLIPs collateral ratio changes accordingly."),(0,o.kt)("p",null,"CLIPs are great because they enable extra liquidity in the form of LSDC loans against yield-bearing collateral. This effectively creates a self-repaying loan as your collateral earns a positive interest."),(0,o.kt)("p",null,"You can close your CLIP at any time by fully paying off your debt."),(0,o.kt)("h3",{id:"what-do-you-mean-by-collateral"},(0,o.kt)("strong",{parentName:"h3"},"What do you mean by collateral?")),(0,o.kt)("p",null,"Collateral is any asset which a borrower must provide to take out a loan, acting as a security for the debt."),(0,o.kt)("p",null,"Currently, Tenet Stablecoin Protocol supports Liquid Staking Derivatives of Tenet validators as collateral in its CLIPs. Tenet Stablecoin Protocol plans to add additional yield bearing assets in the future."),(0,o.kt)("h3",{id:"which-assets-are-accepted-as-collateral-by-tenet-stablecoin-protocol-"},"Which assets are accepted as collateral by Tenet Stablecoin Protocol ?"),(0,o.kt)("p",null,"On launch, Tenet Stablecoin Protocol will accept a numebr of different LSDs that have been restaked to Tenet validators."),(0,o.kt)("h3",{id:"how-can-the-protocol-offer-interest-free-borrowing"},(0,o.kt)("strong",{parentName:"h3"},"How can the protocol offer interest-free borrowing?")),(0,o.kt)("p",null,"The protocol charges one-time borrowing and redemption fees that algorithmically adjust based on the last redemption time. For example: If more redemptions are happening (which means LSDC is likely trading at less than 1 USD), the borrowing fee would continue to increase, discouraging borrowing."),(0,o.kt)("p",null,"Other systems (e.g. MakerDAO) require variable interest rates to make borrowing more or less favorable, but do so implicitly since borrowers would not feel the impact upfront. Given that this also needs to be managed via governance, Tenet Stablecoin Protocol  instead opts for a fully decentralized and direct feedback mechanism via one-off fees."),(0,o.kt)("h3",{id:"how-can-i-borrow-with-tenet-stablecoin-protocol-"},(0,o.kt)("strong",{parentName:"h3"},"How can I borrow with")," Tenet Stablecoin Protocol ",(0,o.kt)("strong",{parentName:"h3"},"?")),(0,o.kt)("p",null,"To borrow you must open a CLIP and deposit a certain amount of collateral to it. Then you can draw LSDC up to a collateral ratio of ",(0,o.kt)("inlineCode",{parentName:"p"},"125%"),". A ",(0,o.kt)("strong",{parentName:"p"},"minimum debt")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"500 LSDC")," is required."),(0,o.kt)("h3",{id:"do-i-have-to-pay-fees-as-a-borrower"},(0,o.kt)("strong",{parentName:"h3"},"Do I have to pay fees as a borrower?")),(0,o.kt)("p",null,"Every time you draw LSDC from your CLIP, a one-off borrowing fee is charged on the drawn amount and added to your debt. Please note that the borrowing fee is variable (and determined algorithmically) and has a minimum value of ",(0,o.kt)("inlineCode",{parentName:"p"},"0.5%")," under normal operation."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"10 LSDC")," ",(0,o.kt)("a",{parentName:"p",href:"/tenet-stablecoin-protocol/borrowing#what-is-the-liquidation-reserve"},"Liquidation Reserve")," charge will be applied as well, but returned to you upon repayment of debt."),(0,o.kt)("p",null,"Another consideration is the price of LSDC at the time of repayment. If at the time you want to repay your loan LSDC is trading at $1.02 on the market and you need to buy it, you are incurring a 2% 'fee'. You can avoid this by having your borrowed funds readily available or by being able to wait for LSDC to return to peg."),(0,o.kt)("h3",{id:"how-is-the-borrowing-fee-calculated"},(0,o.kt)("strong",{parentName:"h3"},"How is the borrowing fee calculated?")),(0,o.kt)("p",null,"The borrowing fee is added to the debt of the CLIP and is given by a ",(0,o.kt)("inlineCode",{parentName:"p"},"baseRate")," . The fee rate is confined to a range between ",(0,o.kt)("inlineCode",{parentName:"p"},"0.5%")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"5%")," and is multiplied by the amount of liquidity drawn by the borrower."),(0,o.kt)("p",null,"For example: The borrowing fee stands at ",(0,o.kt)("inlineCode",{parentName:"p"},"0.5%")," and the borrower wants to receive ",(0,o.kt)("inlineCode",{parentName:"p"},"4,000 LSDC")," to their wallet. Being charged a borrowing fee of ",(0,o.kt)("inlineCode",{parentName:"p"},"20.00 LSDC"),", the borrower will incur a debt of",(0,o.kt)("inlineCode",{parentName:"p"},"4,030 LSDC")," after the Liquidation Reserve and issuance fee are added."),(0,o.kt)("h3",{id:"when-do-i-need-to-pay-my-loan-back"},(0,o.kt)("strong",{parentName:"h3"},"When do I need to pay my loan back?")),(0,o.kt)("p",null,"Loans issued by the protocol do not have a repayment schedule. You can leave your CLIP open and repay your debt any time, as long as you maintain a collateral ratio of at least the minimum collateral ration for that collateral type."),(0,o.kt)("h3",{id:"what-is-the-collateral-ratio"},"What is the collateral ratio?"),(0,o.kt)("p",null,"This is the ratio between the Dollar value of the collateral in your CLIP and its debt in LSDC. The collateral ratio of your CLIP will fluctuate over time as the price of the collateral asset changes. You can influence the ratio by adjusting your CLIPs collateral and/or debt \u2014 i.e. adding more collateral or paying off some of your debt."),(0,o.kt)("p",null,"For example: Let\u2019s say the current price of twstETH is ",(0,o.kt)("inlineCode",{parentName:"p"},"$2,000")," and you decide to deposit ",(0,o.kt)("inlineCode",{parentName:"p"},"10 twstETH"),". If you borrow ",(0,o.kt)("inlineCode",{parentName:"p"},"10,000 LUSD"),", then the collateral ratio for your CLIP would be ",(0,o.kt)("inlineCode",{parentName:"p"},"200%"),"."),(0,o.kt)("div",{className:"math math-display"},(0,o.kt)("span",{parentName:"div",className:"katex-display"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mfrac",{parentName:"mrow"},(0,o.kt)("mrow",{parentName:"mfrac"},(0,o.kt)("mn",{parentName:"mrow"},"10"),(0,o.kt)("mtext",{parentName:"mrow"},"\xa0twstETH\xa0"),(0,o.kt)("mo",{parentName:"mrow"},"\u2217"),(0,o.kt)("mn",{parentName:"mrow"},"2000")),(0,o.kt)("mrow",{parentName:"mfrac"},(0,o.kt)("mn",{parentName:"mrow"},"10000"),(0,o.kt)("mtext",{parentName:"mrow"},"\xa0LSDC\xa0"))),(0,o.kt)("mo",{parentName:"mrow"},"\u2217"),(0,o.kt)("mn",{parentName:"mrow"},"100"),(0,o.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"%"),(0,o.kt)("mo",{parentName:"mrow"},"="),(0,o.kt)("mn",{parentName:"mrow"},"200"),(0,o.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"%")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{10 \\text{ twstETH } * 2000}{10000 \\text{ LSDC }} * 100\\% = 200\\%")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"2.0463em",verticalAlign:"-0.686em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},(0,o.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,o.kt)("span",{parentName:"span",className:"mfrac"},(0,o.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,o.kt)("span",{parentName:"span",className:"vlist-r"},(0,o.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3603em"}},(0,o.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},(0,o.kt)("span",{parentName:"span",className:"mord"},"10000"),(0,o.kt)("span",{parentName:"span",className:"mord text"},(0,o.kt)("span",{parentName:"span",className:"mord"},"\xa0LSDC\xa0")))),(0,o.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,o.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,o.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},(0,o.kt)("span",{parentName:"span",className:"mord"},"10"),(0,o.kt)("span",{parentName:"span",className:"mord text"},(0,o.kt)("span",{parentName:"span",className:"mord"},"\xa0twstETH\xa0")),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,o.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"2000")))),(0,o.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,o.kt)("span",{parentName:"span",className:"vlist-r"},(0,o.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,o.kt)("span",{parentName:"span"}))))),(0,o.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,o.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8056em",verticalAlign:"-0.0556em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"100%"),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,o.kt)("span",{parentName:"span",className:"mrel"},"="),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8056em",verticalAlign:"-0.0556em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"200%")))))),(0,o.kt)("p",null,"If you instead took out ",(0,o.kt)("inlineCode",{parentName:"p"},"15,000 LSDC")," that would put your ratio at ",(0,o.kt)("inlineCode",{parentName:"p"},"133%"),"."),(0,o.kt)("h3",{id:"what-is-the-minimum-collateral-ratio-mcr-and-the-recommended-collateral-ratio"},(0,o.kt)("strong",{parentName:"h3"},'What is the minimum collateral ratio (MCR) and the "recommended" collateral ratio?')),(0,o.kt)("p",null,"The minimum collateral ratio (or MCR for short) is the lowest ratio of debt to collateral that will not trigger a liquidation."),(0,o.kt)("p",null,"This is a protocol parameter that is set individually for each collateral type (with a minimum of ",(0,o.kt)("inlineCode",{parentName:"p"},"125%)"),". So if your CLIP has a debt ",(0,o.kt)("inlineCode",{parentName:"p"},"10,000 LSDC")," and the MCR for that collateral type is 125%, you would need at least ",(0,o.kt)("inlineCode",{parentName:"p"},"$12,500")," worth of assets posted as collateral to avoid being liquidated."),(0,o.kt)("p",null,"Note that asset prices can be quite volatile and if you are not monitoring your collateral ratio with a software agent, you need to leave some margin to account for collateral assets dropping in value when you can not respond in due time. In general, it is wise to be on the conservative side to avoid any liquidation scenarios."),(0,o.kt)("h3",{id:"what-happens-if-my-clip-is-liquidated"},(0,o.kt)("strong",{parentName:"h3"},"What happens if my")," CLIP ",(0,o.kt)("strong",{parentName:"h3"},"is liquidated?")),(0,o.kt)("p",null,"You lose your collateral as your debt is paid off through ",(0,o.kt)("a",{parentName:"p",href:"/tenet-stablecoin-protocol/stability-pool-and-liquidations#what-are-liquidations"},"liquidation"),", i.e. you will no longer be able to retrieve your collateral by repaying your debt. A liquidation thus results in a net loss of ",(0,o.kt)("inlineCode",{parentName:"p"},"20% (= 100% * 25 / 125)")," of your collateral\u2019s Dollar value at the time of liquidation."),(0,o.kt)("h3",{id:"what-is-the-liquidation-reserve"},(0,o.kt)("strong",{parentName:"h3"},"What is the Liquidation Reserve?")),(0,o.kt)("p",null,"When you open a CLIP and draw a loan, ",(0,o.kt)("inlineCode",{parentName:"p"},"10 LSDC")," is set aside as a way to compensate gas costs for the transaction sender in the event your CLIP being liquidated. The Liquidation Reserve is fully refundable if your CLIP is not liquidated, and is given back to you when you close your CLIP by repaying your debt. The Liquidation Reserve counts as debt and is taken into account for the calculation of a CLIP's collateral ratio, slightly increasing the actual collateral requirements."),(0,o.kt)("h3",{id:"what-happens-if-my-clip-is-redeemed-against"},(0,o.kt)("strong",{parentName:"h3"},"What happens if my")," CLIP ",(0,o.kt)("strong",{parentName:"h3"},"is redeemed against?")),(0,o.kt)("p",null,"When LSDC is redeemed, the assets provided to the redeemer are allocated from the CLIP(s) with the lowest collateral ratio (even if it is above ",(0,o.kt)("inlineCode",{parentName:"p"},"125%"),"). If at the time of redemption you have the CLIP with the lowest ratio, you will give up some of your collateral, but your debt will be reduced accordingly. "),(0,o.kt)("p",null,"The USD value by which your collateral is reduced corresponds to the nominal LSDC amount by which your CLIPs debt is decreased. You can think of redemptions as if somebody else is repaying your debt and retrieving an equivalent amount of your collateral. As a positive side effect, redemptions improve the collateral ratio of the affected CLIPs, making them less risky."),(0,o.kt)("p",null,"Redemptions that do not reduce your debt to 0 are called partial redemptions, while redemptions that fully pay off a CLIPs debt are called full redemptions. In such a case, your CLIP is closed, and you can claim your collateral surplus and the Liquidation Reserve at any time."),(0,o.kt)("p",null,"Let\u2019s say you own a CLIP with ",(0,o.kt)("inlineCode",{parentName:"p"},"2 twstETH")," collateralized and a debt of ",(0,o.kt)("inlineCode",{parentName:"p"},"3,000 LSDC"),". The current price of twstETH is ",(0,o.kt)("inlineCode",{parentName:"p"},"$2,000"),". This puts your collateral ratio (CR) at ",(0,o.kt)("inlineCode",{parentName:"p"},"133% (= 100% * (2 * 2,000) / 3,000)"),". Let\u2019s imagine this is the lowest CR in the Tenet Stablecoin system and look at two examples of a partial redemption and a full redemption:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example of a partial redemption")),(0,o.kt)("p",null,"Somebody redeems ",(0,o.kt)("inlineCode",{parentName:"p"},"1,000 LSDC")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"0.5 twstETH")," and thus repays ",(0,o.kt)("inlineCode",{parentName:"p"},"1,000 LSDC")," of your debt, reducing it from ",(0,o.kt)("inlineCode",{parentName:"p"},"3,000 LSDC")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"2,000 LSDC"),". In return, ",(0,o.kt)("inlineCode",{parentName:"p"},"0.5 twstETH,")," worth ",(0,o.kt)("inlineCode",{parentName:"p"},"$1,000"),", is transferred from your CLIP to the redeemer. Your collateral goes down from ",(0,o.kt)("inlineCode",{parentName:"p"},"2 to 1.5 twstETH"),", while your collateral ratio goes up from ",(0,o.kt)("inlineCode",{parentName:"p"},"133%")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"150% (= 100% * (1.5 * 2,000) / 2,000)"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example of a full redemption")),(0,o.kt)("p",null,"Somebody redeems ",(0,o.kt)("inlineCode",{parentName:"p"},"6,000 LSDC")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"3 twstETH"),". Given that the redeemed amount is larger than your debt minus ",(0,o.kt)("inlineCode",{parentName:"p"},"10 LSDC")," (set aside as a Liquidation Reserve), your debt of ",(0,o.kt)("inlineCode",{parentName:"p"},"3,010 LUSD")," is entirely cleared and your collateral gets reduced by ",(0,o.kt)("inlineCode",{parentName:"p"},"$3,000")," of twstETH, leaving you with a collateral of",(0,o.kt)("inlineCode",{parentName:"p"},"0.5 twstETH (= 2 - 3,000 / 2,000)"),"."),(0,o.kt)("h3",{id:"how-can-you-offer-a-collateral-ratio-as-low-as-125"},"How can you offer a collateral ratio as low as 125%?"),(0,o.kt)("p",null,"By making liquidation instantaneous and more efficient, Tenet's Stablecoin Protocol needs less collateral to provide the same security level as similar protocols that rely on lengthy auction mechanisms to sell off collateral in liquidations."),(0,o.kt)("h3",{id:"how-can-i-take-advantage-of-leverage"},(0,o.kt)("strong",{parentName:"h3"},"How can I take advantage of leverage?")),(0,o.kt)("p",null,"You can sell the borrowed LSDC on the market for accepted collateral and use the latter to top up the collateral of your CLIP. That allows you to draw and sell more LSDC, and by repeating the process you can reach the desired leverage ratio."),(0,o.kt)("p",null,"Assuming perfect price stability (",(0,o.kt)("inlineCode",{parentName:"p"},"1 LSDC = $1"),"), the maximum achievable leverage ratio is 5",(0,o.kt)("inlineCode",{parentName:"p"},"x"),". It is given by the formula:"),(0,o.kt)("p",null,"maximum leverage ratio =",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mfrac",{parentName:"mrow"},(0,o.kt)("mrow",{parentName:"mfrac"},(0,o.kt)("mi",{parentName:"mrow"},"M"),(0,o.kt)("mi",{parentName:"mrow"},"C"),(0,o.kt)("mi",{parentName:"mrow"},"R")),(0,o.kt)("mrow",{parentName:"mfrac"},(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mi",{parentName:"mrow"},"M"),(0,o.kt)("mi",{parentName:"mrow"},"C"),(0,o.kt)("mi",{parentName:"mrow"},"R"),(0,o.kt)("mo",{parentName:"mrow"},"\u2212"),(0,o.kt)("mn",{parentName:"mrow"},"100"),(0,o.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"%"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")))),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{MCR}{(MCR - 100\\%)}")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1.3923em",verticalAlign:"-0.52em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},(0,o.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,o.kt)("span",{parentName:"span",className:"mfrac"},(0,o.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,o.kt)("span",{parentName:"span",className:"vlist-r"},(0,o.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8723em"}},(0,o.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,o.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mtight"},(0,o.kt)("span",{parentName:"span",className:"mopen mtight"},"("),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.00773em"}},"MCR"),(0,o.kt)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,o.kt)("span",{parentName:"span",className:"mord mtight"},"100%"),(0,o.kt)("span",{parentName:"span",className:"mclose mtight"},")")))),(0,o.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,o.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,o.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,o.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.00773em"}},"MCR"))))),(0,o.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,o.kt)("span",{parentName:"span",className:"vlist-r"},(0,o.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.52em"}},(0,o.kt)("span",{parentName:"span"}))))),(0,o.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})))))),"where MCR is the Minimum Collateral Ratio."),(0,o.kt)("h3",{id:"why-did-the-collateral-and-debt-of-my-clip-increase-without-my-intervention"},(0,o.kt)("strong",{parentName:"h3"},"Why did the collateral and debt of my")," CLIP ",(0,o.kt)("strong",{parentName:"h3"},"increase without my intervention?")),(0,o.kt)("p",null,"If CLIPs are liquidated and the Stability Pool is empty (or gets emptied due to the liquidation), every borrower will receive a portion of the liquidated collateral and debt as part of a redistribution process."))}c.isMDXComponent=!0}}]);