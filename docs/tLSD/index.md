---
sidebar_position: 1
---

# Overview

The TLSDFactory contract is a Solidity smart contract that facilitates the issuance and management of TLSD 
(Tenet Liquid Staking Derivative) tokens on the Tenet Blockchain. TLSD tokens represent staked assets by users with 
specific validators. 

The contract allows users to stake ERC20 tokens or native assets (TENET) with validators, 
minting corresponding TLSD tokens based on the amount staked. Users can later burn TLSD tokens to redeem their 
staked assets. The contract handles delegation, staking, and rewards claiming via interactions with 
precompiled contracts. It generates unique TLSD tokens for each validator-asset combination, providing a 
mechanism to create and manage TLSDs efficiently.

# Interface

The contract contains various functions to interact with TLSD tokens and their issuance, burning, delegation, and rewards claiming. Some of the key functions are as follows:

- `issue`: Allows users to issue TLSD tokens by staking a specific asset (ERC20 token) with a validator. The TLSD tokens are minted and issued based on the amount staked.
- `issueNative`: Similar to issue, but for the native asset (ETH) instead of an ERC20 token.
- `burn`: Allows users to burn (redeem) their TLSD tokens and receive the corresponding staked assets back from the validator.
- `claimRewards`: Allows users to claim rewards associated with their staked TLSD tokens.
- `getValidator` and `getAsset`: Helper functions to retrieve the associated validator and asset for a given TLSD token address.
- `TLSDToAsset`: Converts an amount of TLSD tokens to the corresponding amount of staked assets.
