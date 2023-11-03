---
sidebar_position: 1
---

# Overview

The TLSDMasterFactory contract is a Solidity smart contract that facilitates the issuance and management of tLSD 
(Tenet Liquid Staking Derivative) tokens on the Tenet Blockchain. tLSD tokens represent LSDs that have been re-staked to Tenet network. 

The contract allows users to stake TEN20 tokens or native assets (TENET) with validators, 
minting corresponding validator specific tLSD tokens based on the amount staked. Users can later burn their validator specific tLSD tokens to redeem their staked assets. The contract handles delegation, staking, and rewards claiming via interactions with 
precompiled contracts. It generates unique tLSD tokens for each validator-asset combination, providing a 
mechanism to create and manage tLSDs efficiently.

# Interface

The contract contains various functions to interact with tLSD tokens and their issuance, burning and delegation. Some of the key functions are as follows:

- `issue`: Allows users to issue validator specific tLSD tokens by staking a specific asset (TEN20 token) with a validator. The validator specific tLSD tokens are minted and issued based on the amount staked.
- `issueNative`: Similar to issue, but for the native asset (TENET) instead of a TEN20 token.
- `burn`: Allows users to burn (redeem) their validator specific tLSD tokens and receive the corresponding staked assets back from the validator.
- `getValidator`, `getFactory` and `getAsset`: Helper functions to retrieve the associated validator, factory and asset for a given validator specific tLSD token address.
- `TLSDToAsset`: Converts an amount of validator specific tLSD tokens to the corresponding amount of staked assets.
