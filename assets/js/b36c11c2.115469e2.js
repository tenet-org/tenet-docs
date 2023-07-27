"use strict";(self.webpackChunktenet_docs=self.webpackChunktenet_docs||[]).push([[794],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),k=a,m=p["".concat(l,".").concat(k)]||p[k]||d[k]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},i="Connect to MetaMask and Keplr",c={unversionedId:"tutorials/metamask-keplr",id:"tutorials/metamask-keplr",title:"Connect to MetaMask and Keplr",description:"To interact with the Tenet blockchain, you can use MetaMask, a popular wallet",source:"@site/docs/node/tutorials/metamask-keplr.md",sourceDirName:"tutorials",slug:"/tutorials/metamask-keplr",permalink:"/tenet-docs/node/tutorials/metamask-keplr",draft:!1,editUrl:"https://github.com/tenet-org/tenet-docs/tree/main/docs/node/tutorials/metamask-keplr.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Running mainnet node",permalink:"/tenet-docs/node/tutorials/running-node"},next:{title:"Deploy contracts",permalink:"/tenet-docs/node/tutorials/deploy-contract"}},l={},s=[{value:"Connect to Mainnet",id:"connect-to-mainnet",level:2},{value:"Connect to Testnet",id:"connect-to-testnet",level:2},{value:"Connect to Local Node",id:"connect-to-local-node",level:2},{value:"Importing Accounts",id:"importing-accounts",level:2},{value:"Download Account State",id:"download-account-state",level:2},{value:"Reset Account",id:"reset-account",level:2}],u=(p="Highlighter",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const d={toc:s},k="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connect-to-metamask-and-keplr"},"Connect to MetaMask and Keplr"),(0,a.kt)("h1",{id:"metamask"},"MetaMask"),(0,a.kt)("p",null,"To interact with the Tenet blockchain, you can use MetaMask, a popular wallet\nbrowser extension that launched with Ethereum. Once connected to Tenet, you can use Metamask\nto manage your Tenet accounts and interact with dApps on Tenet."),(0,a.kt)("h2",{id:"connect-to-mainnet"},"Connect to Mainnet"),(0,a.kt)("p",null,"If you don't have MetaMask installed, go to the ",(0,a.kt)("a",{parentName:"p",href:"https://metamask.io/download/"},"MetaMask\nwebsite")," and install the extension for your\nbrowser. Once installed, click the button below to connect your Metamask wallet\nwith Tenet Mainnet using Chainlist."),(0,a.kt)("button",{onClick:()=>parent.open("https://chainlist.org/chain/1559"),className:"bg-red mb-4 hover:bg-red1 text-white font-bold py-2 px-4 rounded"},"Connect to Mainnnet"),(0,a.kt)("p",null,"Chainlist helps you connect to the Tenet Blockchain. It provides an overview of\nRPC nodes that you can connect to. The purpose of RPC nodes is to allow\napplications and users to communicate with a Blockchain network. RPC nodes\nlisten for requests, respond with the necessary data, or execute the requested\ntransaction."),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Add to Metamask")," to connect to the standard provider or choose\nfrom a list of RPC Server providers by clicking ",(0,a.kt)("inlineCode",{parentName:"p"},"Connect Wallet")," next to the\naddress."),(0,a.kt)("p",null,"Once you've connected to an RPC Server, you're ready to go and can start using\nTenet. If you run into any issues, you can switch your RPC endpoint, and you\nshould be good to go."),(0,a.kt)("h2",{id:"connect-to-testnet"},"Connect to Testnet"),(0,a.kt)("p",null,"You might want to connect your wallet to the Tenet Testnet to interact with\ndApps that havn't launched on Mainnet yet. Click the button below to connect\nyour Metamask wallet with Tenet Testnet using Chainlist:"),(0,a.kt)("button",{onClick:()=>parent.open("https://chainlist.org/chain/155"),className:"bg-red mb-4 hover:bg-red1 text-white font-bold py-2 px-4 rounded"},"Connect to Testnet"),(0,a.kt)("h2",{id:"connect-to-local-node"},"Connect to Local Node"),(0,a.kt)("p",null,"You can also connect Metamask to a local node, which is useful if you are\nplanning on developing on Tenet locally."),(0,a.kt)("p",null,"Open the MetaMask extension on your browser and log in to your\nMetaMask account if you are not already. Then click the top right circle and go\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Networks")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Add Network")," and fill the form as shown below."),(0,a.kt)("p",null,"Here is the list of fields that you can use to paste on Metamask:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Network Name:")," ",(0,a.kt)(u,{keyword:"name",postText:" Local",mdxType:"Highlighter"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"New RPC URL:")," ",(0,a.kt)(u,{keyword:"rpc_url_local",mdxType:"Highlighter"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Chain ID:")," ",(0,a.kt)(u,{keyword:"rpc_url_local",mdxType:"Highlighter"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Currency Symbol (optional):")," ",(0,a.kt)(u,{keyword:"testnet_ticker",mdxType:"Highlighter"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Block Explorer URL (optional):")," ",(0,a.kt)("inlineCode",{parentName:"li"},"n/a"))),(0,a.kt)("h2",{id:"importing-accounts"},"Importing Accounts"),(0,a.kt)("p",null,"If you own the private key to an account, you can import it to Metamask to use\nthe account on Tenet. Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"My Accounts")," (top right circle) and select ",(0,a.kt)("inlineCode",{parentName:"p"},"Import\nAccount"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If it takes some time to load the balance of the account, change the\nnetwork to ",(0,a.kt)("inlineCode",{parentName:"p"},"Main Ethereum Network")," (or any other than ",(0,a.kt)("inlineCode",{parentName:"p"},"Localhost 8545")," or"),(0,a.kt)(u,{keyword:"name",mdxType:"Highlighter"}),") and then switch back to ",(0,a.kt)(u,{keyword:"name",mdxType:"Highlighter"}),"."),(0,a.kt)("h2",{id:"download-account-state"},"Download Account State"),(0,a.kt)("p",null,"To see your Metamask logs, click the top right circle and go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," >\n",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"State Logs"),". If you search through the JSON file for the account\naddress you'll find the transaction history."),(0,a.kt)("h2",{id:"reset-account"},"Reset Account"),(0,a.kt)("p",null,"If you used your Metamask account for a legacy testnet/mainnet upgrade, you will\nneed to reset your account in order to use it with the new network. This will\nclear your account's transaction history, but it won't change the balances in\nyour accounts or require you to re-enter your Secret Recovery Phrase."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Make sure you download your ",(0,a.kt)("a",{parentName:"p",href:"#download-account-state"},"account state"),"\nto persist public account addresses and transactions before clearing your wallet\naccounts.")),(0,a.kt)("p",null,"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced"),"  and click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Reset Account")," button."))}m.isMDXComponent=!0}}]);