---
sidebar_position: 2
---

# Alliance Staking Contract

Contract address: `0x1559000000000000000000000000000000000002`

```solidity  title="IAllianceStaking.sol"
// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.12;

struct Coin {
    address token;
    uint256 amount;
}

/*
    @title AllianceStaking Interface
    @dev This interface facilitates interaction with the Alliance Module in the cosmos-sdk by providing staking-related functions.
*/
interface AllianceStaking {
    /**
        @dev Get the delegated amount of a specific token by a delegator to a validator.
        @param _validator The address of the target validator.
        @param _delegator The address of the delegator.
        @param _token The address of the ERC20 token being queried.
        @return The amount of tokens delegated by the specified delegator to the given validator.
    */
    function delegation(
        address _validator,
        address _delegator,
        address _token
    ) external view returns (uint256 amount);

    /**
        @dev Delegate a specific amount of tokens to a validator on behalf of the caller.
        @param _validator The address of the target validator.
        @param _token The address of the ERC20 token to be delegated.
        @param _amount The amount of tokens to be delegated.
        @return The new number of shares obtained after delegation.
    */
    function delegate(
        address _validator,
        address _token,
        uint256 _amount
    ) external returns (uint256 newShares);

    /**
        @dev Redelegate a specific amount of tokens from one validator to another on behalf of the caller.
        @param _fromValidator The address of the source validator.
        @param _toValidator The address of the target validator.
        @param _token The address of the ERC20 token being redelegated.
        @param _amount The amount of tokens to be redelegated.
        @return The completion time for the redelegate operation.
    */
    function redelegate(
        address _fromValidator,
        address _toValidator,
        address _token,
        uint256 _amount
    ) external returns (uint256 completionTime);

    /**
        @dev Undelegate a specific amount of tokens from a validator on behalf of the caller. The tokens will be available to the caller after the UnbondingPeriod.
        @param _to The address where the tokens will be sent after the unbonding period.
        @param _validator The address of the validator from which tokens will be undelegated.
        @param _token The address of the ERC20 token being undelegated.
        @param _amount The amount of tokens to be undelegated.
        @return The completion time for the undelegate operation.
    */
    function undelegate(
        address _to,
        address _validator,
        address _token,
        uint256 _amount
    ) external returns (uint256 completionTime);

    /**
        @dev Undelegate a specific amount of shares (cosmos-sdk's native units of delegation) from a validator on behalf of the caller.
        @param _to The address where the shares will be sent after the unbonding period.
        @param _validator The address of the validator from which shares will be undelegated.
        @param _token The address of the ERC20 token associated with the undelegated shares.
        @param _shares The amount of shares to be undelegated.
        @return The completion time for the undelegate operation.
    */
    function undelegateShares(
        address _to,
        address _validator,
        address _token,
        uint256 _shares
    ) external returns (uint256 completionTime);

    /**
        @dev Undelegate a specific portion (percentage) of the delegation from a validator on behalf of the caller.
        @param _to The address where the undelegated portion will be sent after the unbonding period.
        @param _validator The address of the validator from which the portion will be undelegated.
        @param _token The address of the ERC20 token associated with the undelegated portion.
        @param _portion The portion to be undelegated, represented as a uint256 value by multiplying the decimal number by 1e18.
        @return The completion time for the undelegate operation.
    */
    function undelegatePortion(
        address _to,
        address _validator,
        address _token,
        uint256 _portion
    ) external returns (uint256 completionTime);

    /**
        @dev Claim delegation rewards from a validator for a specific token on behalf of the caller.
        @param _validator The address of the target validator.
        @param _token The address of the ERC20 token associated with the rewards.
        @return An array of Coin struct representing the claimed rewards, where coin.token will be address(0) if the reward is in the base token.
    */
    function claimDelegationRewards(
        address _validator,
        address _token
    ) external returns (Coin[] memory coins);
}
```