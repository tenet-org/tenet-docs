"use strict";(self.webpackChunktenet_docs=self.webpackChunktenet_docs||[]).push([[2990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:r,i[1]=d;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i="Alliance Staking Contract",d={unversionedId:"precompiles/alliance-staking",id:"precompiles/alliance-staking",title:"Alliance Staking Contract",description:"Contract address: 0x1559000000000000000000000000000000000002",source:"@site/docs/node/precompiles/alliance-staking.md",sourceDirName:"precompiles",slug:"/precompiles/alliance-staking",permalink:"/node/precompiles/alliance-staking",draft:!1,editUrl:"https://github.com/tenet-org/tenet-docs/edit/master/docs/node/precompiles/alliance-staking.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Staking Contract",permalink:"/node/precompiles/staking"},next:{title:"API",permalink:"/node/category/api"}},l={},s=[],c={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"alliance-staking-contract"},"Alliance Staking Contract"),(0,r.kt)("p",null,"Contract address: ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1559000000000000000000000000000000000002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="IAllianceStaking.sol"',title:'"IAllianceStaking.sol"'},"// SPDX-License-Identifier: UNLICENSED\n\npragma solidity ^0.8.12;\n\nstruct Coin {\n    address token;\n    uint256 amount;\n}\n\n/*\n    @title AllianceStaking Interface\n    @dev This interface facilitates interaction with the Alliance Module in the cosmos-sdk by providing staking-related functions.\n*/\ninterface AllianceStaking {\n    /**\n        @dev Get the delegated amount of a specific token by a delegator to a validator.\n        @param _validator The address of the target validator.\n        @param _delegator The address of the delegator.\n        @param _token The address of the ERC20 token being queried.\n        @return The amount of tokens delegated by the specified delegator to the given validator.\n    */\n    function delegation(\n        address _validator,\n        address _delegator,\n        address _token\n    ) external view returns (uint256 amount);\n\n    /**\n        @dev Delegate a specific amount of tokens to a validator on behalf of the caller.\n        @param _validator The address of the target validator.\n        @param _token The address of the ERC20 token to be delegated.\n        @param _amount The amount of tokens to be delegated.\n        @return The new number of shares obtained after delegation.\n    */\n    function delegate(\n        address _validator,\n        address _token,\n        uint256 _amount\n    ) external returns (uint256 newShares);\n\n    /**\n        @dev Redelegate a specific amount of tokens from one validator to another on behalf of the caller.\n        @param _fromValidator The address of the source validator.\n        @param _toValidator The address of the target validator.\n        @param _token The address of the ERC20 token being redelegated.\n        @param _amount The amount of tokens to be redelegated.\n        @return The completion time for the redelegate operation.\n    */\n    function redelegate(\n        address _fromValidator,\n        address _toValidator,\n        address _token,\n        uint256 _amount\n    ) external returns (uint256 completionTime);\n\n    /**\n        @dev Undelegate a specific amount of tokens from a validator on behalf of the caller. The tokens will be available to the caller after the UnbondingPeriod.\n        @param _to The address where the tokens will be sent after the unbonding period.\n        @param _validator The address of the validator from which tokens will be undelegated.\n        @param _token The address of the ERC20 token being undelegated.\n        @param _amount The amount of tokens to be undelegated.\n        @return The completion time for the undelegate operation.\n    */\n    function undelegate(\n        address _to,\n        address _validator,\n        address _token,\n        uint256 _amount\n    ) external returns (uint256 completionTime);\n\n    /**\n        @dev Undelegate a specific amount of shares (cosmos-sdk's native units of delegation) from a validator on behalf of the caller.\n        @param _to The address where the shares will be sent after the unbonding period.\n        @param _validator The address of the validator from which shares will be undelegated.\n        @param _token The address of the ERC20 token associated with the undelegated shares.\n        @param _shares The amount of shares to be undelegated.\n        @return The completion time for the undelegate operation.\n    */\n    function undelegateShares(\n        address _to,\n        address _validator,\n        address _token,\n        uint256 _shares\n    ) external returns (uint256 completionTime);\n\n    /**\n        @dev Undelegate a specific portion (percentage) of the delegation from a validator on behalf of the caller.\n        @param _to The address where the undelegated portion will be sent after the unbonding period.\n        @param _validator The address of the validator from which the portion will be undelegated.\n        @param _token The address of the ERC20 token associated with the undelegated portion.\n        @param _portion The portion to be undelegated, represented as a uint256 value by multiplying the decimal number by 1e18.\n        @return The completion time for the undelegate operation.\n    */\n    function undelegatePortion(\n        address _to,\n        address _validator,\n        address _token,\n        uint256 _portion\n    ) external returns (uint256 completionTime);\n\n    /**\n        @dev Claim delegation rewards from a validator for a specific token on behalf of the caller.\n        @param _validator The address of the target validator.\n        @param _token The address of the ERC20 token associated with the rewards.\n        @return An array of Coin struct representing the claimed rewards, where coin.token will be address(0) if the reward is in the base token.\n    */\n    function claimDelegationRewards(\n        address _validator,\n        address _token\n    ) external returns (Coin[] memory coins);\n}\n")))}u.isMDXComponent=!0}}]);