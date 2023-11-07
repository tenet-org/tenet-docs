"use strict";(self.webpackChunktenet_docs=self.webpackChunktenet_docs||[]).push([[2990],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d[u]="string"==typeof e?e:r,i[1]=d;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2320:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:2},i="Alliance Staking Contract",d={unversionedId:"precompiles/alliance-staking",id:"precompiles/alliance-staking",title:"Alliance Staking Contract",description:"Contract address: 0x1559000000000000000000000000000000000002",source:"@site/docs/node/precompiles/alliance-staking.md",sourceDirName:"precompiles",slug:"/precompiles/alliance-staking",permalink:"/node/precompiles/alliance-staking",draft:!1,editUrl:"https://github.com/tenet-org/tenet-docs/edit/master/docs/node/precompiles/alliance-staking.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Staking Contract",permalink:"/node/precompiles/staking"},next:{title:"API",permalink:"/node/category/api"}},s={},l=[],c={toc:l},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"alliance-staking-contract"},"Alliance Staking Contract"),(0,r.kt)("p",null,"Contract address: ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1559000000000000000000000000000000000002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="IAllianceStaking.sol"',title:'"IAllianceStaking.sol"'},"// SPDX-License-Identifier: UNLICENSED\n\npragma solidity ^0.8.12;\n\nstruct Coin {\n    address token;\n    uint256 amount;\n}\n\nstruct AllianceDelegation {\n    address delegator;\n    address validator;\n    address asset;\n    uint256 amount;\n}\n\n/*\n    @title AllianceStaking Interface\n    @dev This interface facilitates interaction with the Alliance Module in the cosmos-sdk by providing staking-related functions.\n*/\ninterface AllianceStaking {\n    /**\n        @dev Get the delegated amount of a specific token by a delegator to a validator.\n        @param _validator The address of the target validator.\n        @param _delegator The address of the delegator.\n        @param _token The address of the ERC20 token being queried.\n        @return The amount of tokens delegated by the specified delegator to the given validator.\n    */\n    function delegation(\n        address _validator,\n        address _delegator,\n        address _token\n    ) external view returns (uint256 amount);\n\n    /**\n        @dev Get list of delegations\n        @param _delegator The address of the delegator.\n        @param _asset The address of the ERC20 token being queried.\n        @param _page The page number (starting from 1)\n        @param _perPage The number of items per page\n        @return The list of delegations\n    */\n    function delegations(\n        address _delegator,\n        address _asset,\n        uint8 _page,\n        uint8 _perPage\n    )\n    external\n    view\n    returns (AllianceDelegation[] memory list, uint256 totalCount);\n\n    /**\n        @dev Get total delegation amount of a specific token in all validators.\n        @param _delegator The address of the delegator.\n        @param _token The address of the ERC20 token being queried.\n        @return The amount of tokens delegated by the specified delegator to all validators.\n    */\n    function totalDelegation(\n        address _delegator,\n        address _token\n    ) external view returns (uint256 amount);\n\n    /**\n        @dev Get total delegation amount of a specific token in given validator.\n        @param _validator The address of the validator.\n        @param _token The address of the ERC20 token being queried.\n        @return The amount of tokens delegated to given validator.\n    */\n    function validatorStake(\n        address _validator,\n        address _token\n    ) external view returns (uint256 amount);\n\n    /**\n        @dev Get total delegation amount of a specific token in all validators.\n        @param _token The address of the ERC20 token being queried.\n        @return The amount of tokens delegated to all validators.\n    */\n    function totalStake(address _token) external view returns (uint256 amount);\n\n    /**\n        @dev Get total minted basecoins by alliance module\n        @return The amount of tokens minted by alliance module.\n    */\n    function mintedBasecoins() external view returns (uint256 amount);\n    \n    /**\n        @dev Delegate a specific amount of tokens to a validator on behalf of the caller.\n        @param _validator The address of the target validator.\n        @param _token The address of the ERC20 token to be delegated.\n        @param _amount The amount of tokens to be delegated.\n        @return The new number of shares obtained after delegation.\n    */\n    function delegate(\n        address _validator,\n        address _token,\n        uint256 _amount\n    ) external returns (uint256 newShares);\n\n    /**\n        @dev Redelegate a specific amount of tokens from one validator to another on behalf of the caller.\n        @param _fromValidator The address of the source validator.\n        @param _toValidator The address of the target validator.\n        @param _token The address of the ERC20 token being redelegated.\n        @param _amount The amount of tokens to be redelegated.\n        @return The completion time for the redelegate operation.\n    */\n    function redelegate(\n        address _fromValidator,\n        address _toValidator,\n        address _token,\n        uint256 _amount\n    ) external returns (uint256 completionTime);\n\n    /**\n        @dev Undelegate a specific amount of tokens from a validator on behalf of the caller. The tokens will be available to the caller after the UnbondingPeriod.\n        @param _to The address where the tokens will be sent after the unbonding period.\n        @param _validator The address of the validator from which tokens will be undelegated.\n        @param _token The address of the ERC20 token being undelegated.\n        @param _amount The amount of tokens to be undelegated.\n        @return The completion time for the undelegate operation.\n    */\n    function undelegate(\n        address _to,\n        address _validator,\n        address _token,\n        uint256 _amount\n    ) external returns (uint256 completionTime);\n\n    /**\n        @dev Undelegate a specific amount of shares (cosmos-sdk's native units of delegation) from a validator on behalf of the caller.\n        @param _to The address where the shares will be sent after the unbonding period.\n        @param _validator The address of the validator from which shares will be undelegated.\n        @param _token The address of the ERC20 token associated with the undelegated shares.\n        @param _shares The amount of shares to be undelegated.\n        @return The completion time for the undelegate operation.\n    */\n    function undelegateShares(\n        address _to,\n        address _validator,\n        address _token,\n        uint256 _shares\n    ) external returns (uint256 completionTime);\n\n    /**\n        @dev Undelegate a specific portion (percentage) of the delegation from a validator on behalf of the caller.\n        @param _to The address where the undelegated portion will be sent after the unbonding period.\n        @param _validator The address of the validator from which the portion will be undelegated.\n        @param _token The address of the ERC20 token associated with the undelegated portion.\n        @param _portion The portion to be undelegated, represented as a uint256 value by multiplying the decimal number by 1e18.\n        @return The completion time for the undelegate operation.\n    */\n    function undelegatePortion(\n        address _to,\n        address _validator,\n        address _token,\n        uint256 _portion\n    ) external returns (uint256 completionTime);\n\n    /**\n        @dev Claim delegation rewards from a validator for a specific token on behalf of the caller.\n        @param _validator The address of the target validator.\n        @param _token The address of the ERC20 token associated with the rewards.\n        @return An array of Coin struct representing the claimed rewards, where coin.token will be address(0) if the reward is in the base token.\n    */\n    function claimDelegationRewards(\n        address _validator,\n        address _token\n    ) external returns (Coin[] memory coins);\n}\n")))}p.isMDXComponent=!0}}]);