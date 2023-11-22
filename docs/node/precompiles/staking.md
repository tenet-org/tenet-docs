---
sidebar_position: 1
---

# Staking Contract

Contract address: `0x1559000000000000000000000000000000000001`

```solidity title="IStaking.sol"
// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.12;

struct Coin {
    address token;
    uint256 amount;
}

struct Validator {
    address addr;
    uint256 stake;
    uint256 commission;
    bool present;
}

struct Delegation {
    address delegator;
    address validator;
    uint256 amount;
}

/*
    @title Staking Interface
    @dev This interface facilitates interaction with the Staking Module in the cosmos-sdk by providing staking-related functions.
*/
interface Staking {
    /**
        @dev Get the delegated amount of a specific token by a delegator to a validator.
        @param _validator The address of the target validator.
        @param _delegator The address of the delegator.
        @return The amount of tokens delegated by the specified delegator to the given validator.
    */
    function delegation(
        address _validator,
        address _delegator
    ) external view returns (uint256 amount);

    /**
        @dev Get the list of delegations made by a delegator.
        @param _delegator The address of the delegator.
        @param _page The page number of the delegation list (starting from 1).
        @param _perPage The number of delegations per page.
        @return The list of delegations made by the specified delegator.
    */
    function delegations(
        address _delegator,
        uint8 _page,
        uint8 _perPage
    ) external view returns (Delegation[] memory list, uint256 totalCount);

    /**
        @dev Get total delegated amount by a delegator.
        @param _delegator The address of the delegator.
        @return The total amount of tokens delegated by the specified delegator.
    */
    function totalDelegation(
        address _delegator
    ) external view returns (uint256 amount);

    /**
        @dev Get total stake of the validator.
        @param _validator The address of the target validator.
        @return The total stake of the given validator.
    */
    function validatorStake(
        address _validator
    ) external view returns (uint256 amount);

    /**
        @dev Get total stake of the network.
        @return The total stake of the network.
    */
    function totalStake() external view returns (uint256 amount);
    
    /**
        @dev Get the list of validators.
        @return The list of validators.
    */
    function validators() external view returns (Validator[] memory list);
    
    /**
        @dev Get total signed blocks count by a validator.
        @param _validator The address of the target validator.
        @return The amount of blocks signed by the given validator.
    */
    function validatorSignedBlocks(
        address _validator
    ) external view returns (uint256 count);

    /**
        @dev Get total signed blocks count by all validators.
        @return The amount of blocks signed by all validators.
    */
    function totalSignedBlocks() external view returns (uint256 count);

    /**
        @dev Get commission of validator.
        @param _validator The address of the target validator.
        @return Commission rate of the given validator (with 18 decimals).
    */
    function validatorCommission(
        address _validator
    ) external view returns (uint256 commission);

    /**
        @dev Delegate a specific amount of tokens to a validator on behalf of the caller.
        @param _validator The address of the target validator.
        @return The new number of shares obtained after delegation.
    */
    function delegate(
        address _validator
    ) external payable returns (uint256 newShares);

    /**
        @dev Redelegate a specific amount of tokens from one validator to another on behalf of the caller.
        @param _fromValidator The address of the source validator.
        @param _toValidator The address of the target validator.
        @param _amount The amount of tokens to be redelegated.
        @return The completion time for the redelegate operation.
    */
    function redelegate(
        address _fromValidator,
        address _toValidator,
        uint256 _amount
    ) external returns (uint256 completionTime);

    /**
        @dev Undelegate a specific amount of tokens from a validator on behalf of the caller. The tokens will be available to the caller after the UnbondingPeriod.
        @param _to The address where the tokens will be sent after the unbonding period.
        @param _validator The address of the validator from which tokens will be undelegated.
        @param _amount The amount of tokens to be undelegated.
        @return The completion time for the undelegate operation.
    */
    function undelegate(
        address _to,
        address _validator,
        uint256 _amount
    ) external returns (uint256 completionTime);

    /**
        @dev Undelegate a specific amount of shares (cosmos-sdk's native units of delegation) from a validator on behalf of the caller.
        @param _to The address where the shares will be sent after the unbonding period.
        @param _validator The address of the validator from which shares will be undelegated.
        @param _shares The amount of shares to be undelegated.
        @return The completion time for the undelegate operation.
    */
    function undelegateShares(
        address _to,
        address _validator,
        uint256 _shares
    ) external returns (uint256 completionTime);

    /**
        @dev Undelegate a specific portion (percentage) of the delegation from a validator on behalf of the caller.
        @param _to The address where the undelegated portion will be sent after the unbonding period.
        @param _validator The address of the validator from which the portion will be undelegated.
        @param _portion The portion to be undelegated, represented as a uint256 value by multiplying the decimal number by 1e18.
        @return The completion time for the undelegate operation.
    */
    function undelegatePortion(
        address _to,
        address _validator,
        uint256 _portion
    ) external returns (uint256 completionTime);

    /**
        @dev Claim delegation rewards from a validator for a specific token on behalf of the caller.
        @param _validator The address of the target validator.
        @return An array of Coin struct representing the claimed rewards, where coin.token will be address(0) if the reward is in the base token.
    */
    function claimDelegationRewards(
        address _validator
    ) external returns (Coin[] memory coins);
}
```
