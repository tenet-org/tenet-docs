---
sidebar_position: 2
---

# TLSDFactory Interface

## Overview

The ITLSDFactory is an interface that defines a set of functions for issuing and managing TLSD 
(Tenet Liquidity Staking Derivative) tokens. 

TLSD tokens represent a tokenized representation of staked assets, 
which can be issued and burned by validators. 

This interface provides methods for issuing TLSD tokens against both ERC20 
assets and native assets, as well as for burning TLSD tokens to retrieve the underlying assets.

## Interface

```solidity
interface ITLSDFactory {
    /**
     * @notice Issue TLSD tokens against an ERC20 asset.
     * @param _validator The address of the validator issuing the TLSD tokens.
     * @param _asset The address of the ERC20 asset that will be staked to mint TLSD tokens.
     * @param _amount The amount of the ERC20 asset to stake and mint as TLSD tokens.
     * @return issuedTLSD The address of the newly minted TLSD tokens.
     * @return issuedAmount The amount of TLSD tokens issued.
     */
    function issue(
        address _validator,
        address _asset,
        uint256 _amount
    ) external returns (address issuedTLSD, uint256 issuedAmount);

    /**
     * @notice Issue TLSD tokens against native assets (e.g., native cryptocurrency).
     * @param _validator The address of the validator issuing the TLSD tokens.
     * @return issuedTLSD The address of the newly minted TLSD tokens.
     * @return issuedAmount The amount of TLSD tokens issued.
     */
    function issueNative(address _validator) external payable returns (address issuedTLSD, uint256 issuedAmount);

    /**
     * @notice Burn TLSD tokens to retrieve the underlying assets.
     * @param _to The address where the retrieved underlying assets should be sent.
     * @param _tlsd The address of the TLSD tokens being burned.
     * @param _amount The amount of TLSD tokens to burn and retrieve the underlying assets for.
     * @return The amount of underlying assets (e.g., ERC20 tokens or native cryptocurrency) retrieved.
     */
    function burn(address _to, address _tlsd, uint256 _amount) external returns (uint256);

    /**
     * @notice Get the validator's address associated with a specific TLSD token address.
     * @param _tlsd The address of the TLSD tokens.
     * @return found A boolean indicating if the validator's address was found (true) or not (false).
     * @return validator The address of the validator associated with the TLSD tokens (if found).
     */
    function getValidator(address _tlsd) external view returns (bool found, address validator);

    /**
     * @notice Get the underlying asset's address associated with a specific TLSD token address.
     * @param _tlsd The address of the TLSD tokens.
     * @return found A boolean indicating if the underlying asset's address was found (true) or not (false).
     * @return asset The address of the underlying asset associated with the TLSD tokens (if found).
     */
    function getAsset(address _tlsd) external view returns (bool found, address asset);

    /**
     * @notice Convert an amount of TLSD tokens to the equivalent amount of the underlying asset.
     * @param _tlsd The address of the TLSD tokens.
     * @param _amount The amount of TLSD tokens to convert.
     * @return The equivalent amount of the underlying asset corresponding to the specified amount of TLSD tokens.
     */
    function TLSDToAsset(address _tlsd, uint256 _amount) external view returns (uint256);
}

```
