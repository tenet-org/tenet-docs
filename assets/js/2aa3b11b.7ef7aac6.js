"use strict";(self.webpackChunktenet_docs=self.webpackChunktenet_docs||[]).push([[8875],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},f="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(n),h=a,p=f["".concat(d,".").concat(h)]||f[h]||l[h]||s;return n?r.createElement(p,o(o({ref:t},c),{},{components:n})):r.createElement(p,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[f]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:2},o="ITLSDMasterFactory Interface",i={unversionedId:"interface",id:"interface",title:"ITLSDMasterFactory Interface",description:"Overview",source:"@site/docs/tLSD/interface.md",sourceDirName:".",slug:"/interface",permalink:"/tLSD/interface",draft:!1,editUrl:"https://github.com/tenet-org/tenet-docs/edit/master/docs/tLSD/interface.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/tLSD/"},next:{title:"Aggregator Protocol",permalink:"/tLSD/aggregator"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2}],c={toc:u},f="wrapper";function l(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"itlsdmasterfactory-interface"},"ITLSDMasterFactory Interface"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The ITLSDMasterFactory is an interface that defines a set of functions for issuing and managing validator specific tLSD\n(Tenet Liquidity Staking Derivative) tokens. "),(0,a.kt)("p",null,"tLSD tokens represent a tokenized representation of staked assets,\nwhich can be issued and burned by validators. "),(0,a.kt)("p",null,"This interface provides methods for issuing tLSD tokens against both TEN20\nassets and the native asset, as well as for burning validator specific tLSD tokens to retrieve the underlying assets."),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"interface ITLSDMasterFactory {\n\n    /**\n     * @notice Create new subfactory with owner.\n     * @param owner The owner of the factory.\n     * @return address The address of created factory.\n     */\n    function createOwnedFactory(address owner) external returns (address);\n    \n    /**\n     * @notice Create new subfactory.\n     * @return address The address of created factory.\n     */\n    function createFactory() external returns (address);\n    \n    /**\n     * @notice Issue TLSD tokens against an ERC20 asset.\n     * @param _factory The address of the subfactory.\n     * @param _validator The address of the validator issuing the TLSD tokens.\n     * @param _asset The address of the ERC20 asset that will be staked to mint TLSD tokens.\n     * @param _amount The amount of the ERC20 asset to stake and mint as TLSD tokens.\n     * @return issuedTLSD The address of the newly minted TLSD tokens.\n     * @return issuedAmount The amount of TLSD tokens issued.\n     */\n    function issue(\n        address _factory,\n        address _validator,\n        address _asset,\n        uint256 _amount\n    ) external returns (address issuedTLSD, uint256 issuedAmount);\n\n    /**\n     * @notice Issue TLSD tokens against native assets (e.g., native cryptocurrency).\n     * @param _factory The address of the subfactory.\n     * @param _validator The address of the validator issuing the TLSD tokens.\n     * @return issuedTLSD The address of the newly minted TLSD tokens.\n     * @return issuedAmount The amount of TLSD tokens issued.\n     */\n    function issueNative(address _factory, address _validator) external payable returns (address issuedTLSD, uint256 issuedAmount);\n\n    /**\n     * @notice Burn TLSD tokens to retrieve the underlying assets.\n     * @param _factory The address of the subfactory.\n     * @param _to The address where the retrieved underlying assets should be sent.\n     * @param _tlsd The address of the TLSD tokens being burned.\n     * @param _amount The amount of TLSD tokens to burn and retrieve the underlying assets for.\n     * @return The amount of underlying assets (e.g., ERC20 tokens or native cryptocurrency) retrieved.\n     */\n    function burn(address _factory, address _to, address _tlsd, uint256 _amount) external returns (uint256);\n\n    /**\n     * @notice Get the validator's address associated with a specific TLSD token address.\n     * @param _tlsd The address of the TLSD tokens.\n     * @return found A boolean indicating if the validator's address was found (true) or not (false).\n     * @return validator The address of the validator associated with the TLSD tokens (if found).\n     */\n    function getValidator(address _tlsd) external view returns (bool found, address validator);\n\n    /**\n     * @notice Get the underlying asset's address associated with a specific TLSD token address.\n     * @param _tlsd The address of the TLSD tokens.\n     * @return found A boolean indicating if the underlying asset's address was found (true) or not (false).\n     * @return asset The address of the underlying asset associated with the TLSD tokens (if found).\n     */\n    function getAsset(address _tlsd) external view returns (bool found, address asset);\n\n    /**\n     * @notice Get address of the subfactory associated with a specific TLSD token address.\n     * @param _tlsd The address of the TLSD tokens.\n     * @return found A boolean indicating if the TLSD  was found (true) or not (false).\n     * @return factory The address of the subfactory associated with the TLSD tokens (if found).\n     */\n    function getFactory(address _tlsd) external view returns (bool found, address factory);\n\n    /**\n     * @notice Convert an amount of TLSD tokens to the equivalent amount of the underlying asset.\n     * @param _tlsd The address of the TLSD tokens.\n     * @param _amount The amount of TLSD tokens to convert.\n     * @return The equivalent amount of the underlying asset corresponding to the specified amount of TLSD tokens.\n     */\n    function TLSDToAsset(address _tlsd, uint256 _amount) external view returns (uint256);\n}\n\n")))}l.isMDXComponent=!0}}]);