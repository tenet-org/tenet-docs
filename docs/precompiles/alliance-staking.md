# Alliance Contract

```solidity
// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.12;

struct Coin {
address token;
uint256 amount;
}

interface AllianceStaking {
function delegation(
address _validator,
address _delegator,
address _token
) external view returns (uint256 amount);

    function delegate(
        address _validator,
        address _token,
        uint256 _amount
    ) external returns (uint256 newShares);

    function redelegate(
        address _fromValidator,
        address _toValidator,
        address _token,
        uint256 _amount
    ) external returns (uint256 completionTime);

    function undelegate(
        address _to,
        address _validator,
        address _token,
        uint256 _amount
    ) external returns (uint256 completionTime);

    function undelegateShares(
        address _to,
        address _validator,
        address _token,
        uint256 _shares
    ) external returns (uint256 completionTime);

    function undelegatePortion(
        address _to,
        address _validator,
        address _token,
        uint256 _portion
    ) external returns (uint256 completionTime);

    function claimDelegationRewards(
        address _validator,
        address _token
    ) external returns (Coin[] memory coins);
}
```

Contract address: `0x1559000000000000000000000000000000000002`

The purpose of this precompile is to deliver opportunity for users and smart contract in Tenet EVM to interact with cosmos-sdk’s Alliance Module.

## Delegation
`function delegation(address _validator, address _delegator, uint256 _token) returns (uint256 amount)`

This method queries delegated amount of `_token` by `_delegator` in given `_validator`.

## Delegate
`function delegate(address _validator, address _token, uint256 _amount)`

This method delegates given amount of tokens to given validator in behalf of msg.sender

`_validator` - tenet validator address

`_token` - address of erc20 token which is both added to alliance and erc20 modules

`_amount` - amount of _token to delegate

## Redelegate
`function redelegate(address _fromValidator, address _toValidator, address _token, uint256 _amount)`

This method redelegates (changes validator of given delegation) `_amount` of `_token` from  `_fromValidator` to `_toValidator` in behalf of `msg.sender`.

## Undelegate
`function undelegate(address _to, address _validator, address _token, uint256 _amount)`

This method undelegates `_amount` of `_token` from  `_validator` in behalf of msg.sender. Tokens will be granted to msg.sender after UnbondingPeriod.

Also you can use `undelegateShares` and `undelegatePortion` instead of basic undelegate. Main difference is that undelegateShares will undelegate given amount of shares (cosmos-sdk’s native units of delegation). undelegatePortion will undelegate given percentage of your delegation (portion is presented as uint256 by multiplying decimal number by 1e18).

## Claim rewards
`function claimDelegationRewards(address _validator, address _token) returns (Coin[] memory coins)`

This method claims received rewards from `_validator` of `_token` in behalf of msg.sender.

If reward is in base token, then `coin.token` will be `address(0)`.