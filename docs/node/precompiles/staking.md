# Staking Contract

```solidity
// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.12;

struct Coin {
    address token;
    uint256 amount;
}

interface Staking {
    function delegation(
        address _validator,
        address _delegator
    ) external view returns (uint256 amount);
    
    function validatorSignedBlocks(
        address _validator
    ) external view returns (uint256 count);
    
    function validatorCommission(
        address _validator
    ) external view returns (uint256 commission);

    function delegate(
        address _validator
    ) external payable returns (uint256 newShares);

    function redelegate(
        address _fromValidator,
        address _toValidator,
        uint256 _amount
    ) external returns (uint256 completionTime);

    function undelegate(
        address _to,
        address _validator,
        uint256 _amount
    ) external returns (uint256 completionTime);

    function undelegateShares(
        address _to,
        address _validator,
        uint256 _shares
    ) external returns (uint256 completionTime);

    function undelegatePortion(
        address _to,
        address _validator,
        uint256 _portion
    ) external returns (uint256 completionTime);

    function claimDelegationRewards(
        address _validator
    ) external returns (Coin[] memory coins);
}
```

Contract address: `0x1559000000000000000000000000000000000001`

The purpose of Staking Precompiled Contract  is to deliver opportunity for users and smart contract in Tenet EVM to interact with cosmos-sdk’s staking module.

## Delegation

`function delegation(address _validator, address _delegator) returns (uint256 amount)`

This method queries delegated amount of tenet by _delegator in given _validator.

## Delegate

`function delegate(address _validator) payable`

This method delegates sent amount of tenet to given validator in behalf of msg.sender

`_validator` - tenet validator address

## Redelegate

`function redelegate(address _fromValidator, address _toValidator, uint256 _amount)`

This method redelegates (changes validator of given delegation) `_amount` of tenet from  `_fromValidator` to `_toValidator` in behalf of msg.sender.

## Undelegate

`function undelegate(address _to, address _validator, uint256 _amount)`

This method undelegates `_amount` of tenet from  `_validator` in behalf of msg.sender. Tokens will be granted to msg.sender after UnbondingPeriod.

Also you can use undelegateShares and undelegatePortion instead of basic undelegate. Main difference is that undelegateShares will undelegate given amount of shares (cosmos-sdk’s native units of delegation). undelegatePortion will undelegate given percentage of your delegation (portion is presented as uint256 by multiplying decimal number by 1e18).

## Claim rewards

`function claimDelegationRewards(address _validator) returns (Coin[] memory coins)`

This method claims received rewards from `_validator` in behalf of msg.sender.

If reward is in base token, then `coin.token` will be `address(0)`.