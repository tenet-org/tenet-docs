---
sidebar_position: 3
---

# Aggregator Protocol

The Tenet blockchain uniquely accommodates multiple Liquid Staking Derivatives (LSDs), leading to various Tenet-specific Liquid Staking Derivatives (TLSDs) backed by identical LSDs. This ecosystem, although powerful, can be complex for DeFi integrations. The Tenet Aggregator Protocol elegantly solves this problem by offering a unified, dual-yield-bearing TLSD token, simplifying the experience for end-users and enabling seamless integration into existing DeFi projects.

# Core Components of the Tenet Aggregator Protocol

## Main Aggregator Contract

The aggregator contract accepts LSD tokens and delegates them across supported validators on the network. It issues an ATLSD token, which is a tokenized representation of a basket of staked LSD assets on the Tenet blockchain. Tenet staking yield accumulates in the contract, is sent to the staking contract, and distributed to all staked ATLSD holders.
On the withdrawal side, the aggregator contract accepts ATLSD tokens and burns them, undelegating the underlying LSD and sending it back to the user after the unbonding period is finished.

1. **LSD Acceptance**: The contract accepts LSD tokens from users and delegates them to a pool of 64 eligible validators.
2. **Validator Delegation**: It autonomously allocates the received LSDs across these validators.
3. **ATLSD Issuance**: Users are issued ATLSD tokens, representing their stakes distributed across all participating validators.
4. **Yield Distribution**: Yield from each validator is aggregated and uniformly distributed to all ATLSD holders via the associated staking contract.

### Interface

* `deposit`: Mints ATLSD to the receiver by depositing an exact amount of LSD tokens.
* `withdraw`: Burns ATLSD from the owner and sends an exact amount of underlying LSD to the receiver.
* `mint`: Mints an exact amount of ATLSD to the receiver.
* `redeem`: Burns an exact amount of TLSD from the owner and sends LSD tokens to the receiver.
* `claimVeTenetRewards`: Claims validator rewards and redirects them to the staking contract.
* `totalAssets`: Returns the total amount of LSD tokens managed by the aggregator contract.
* `convertToShares`: Returns the amount of ATLSD that the contract would exchange for the amount of LSD provided
* `convertToAssets`: Returns the amount of LSD that the contract would exchange for the amount of ATLSD provided
* `MaxDeposit`, `MaxWithdraw`, `MaxMint`, `MaxRedeem`: Returns the maximum permissible transaction amounts.

## Aggregator Staking Contract

The AggregatedTLSDStaking smart contract allows users to stake their ATLSD tokens in order to earn their delegation rewards over time. The contract accumulates yield from the main aggregator contract and distributes it to staked users in the form of wTENET.

### Interface

* `stake`: Stake a specific amount of ATLSD tokens.
* `withdraw`: Withdraw a specific amount of ATLSD tokens.
* `claim`: Claim the rewards earned.
* `exit`: Shortcut to withdraw all staked ATLSD tokens and claim all rewards.
* `earned`: Returns the amount of rewards earned by a specific account.
* `stakeOf`: Returns the amount of ATLSD tokens staked by a specific account.
* `totalSupply`: Returns the total amount of ATLSD tokens staked in the contract.

## Wrapper Contract

The wrapper contract allows users to deposit ATLSD tokens and receive a yield-bearing token in return. The wrapper automates the staking of ATLSD tokens and the claiming of generated yield, which it then re-invests to maximize compound yields.

// TODO: We included the possibility to implement performance-, deposit-, and withdrawal fees in the wrapper contract. We need to decide if we want to implement these fees and if yes, include it in the docs.

1. **Deposit ATLSD**: Once you deposit ATLSD, the wrapper contract stakes them for you.
2. **Receive WTLSD**: In return, you receive WTLSD tokens that are dual-yield-bearing and ready for DeFi.

### Interface

* `deposit`: Mints WTLSD to the receiver by depositing an exact amount of ATLSD tokens.
* `withdraw`: Burns WTLSD from the owner and sends an exact amount of underlying ATLSD to the receiver.
* `mint`: Mints an exact amount of WTLSD to the receiver.
* `redeem`: Burns an exact amount of WTLSD from the owner and sends ATLSD tokens to the receiver.
* `remainingProfitUnlockTime`: Returns the remaining time until all profits from the last compound are unlocked.
* `lockedProfit`: Returns the amount of locked profit from the last compound.
* `totalAssets`: Returns the total amount of ATLSD tokens managed by the aggregator contract.
* `convertToShares`: Returns the amount of WTLSD that the contract would exchange for the amount of ATLSD provided
* `convertToAssets`: Returns the amount of ATLSD that the contract would exchange for the amount of WTLSD provided


## How to Obtain WTLSD: A Step-by-Step Guide

1. Transfer your LSD tokens to a compatible wallet (e.g., MetaMask, Eva).
2. Ensure you have sufficient TENET tokens for transaction fees.
3. Visit <*insert link*> and connect your wallet.
4. Bridge your LSD tokens to the Tenet blockchain. The bridge to process this is accessible at <*insert link*>.
5. Before proceeding, ensure that you are connected to the Tenet blockchain network.
6. You can now delegate and wrap your LSD tokens to receive WTLSD tokens. To do this, navigate to <*insert link*> and use the 'delegate and wrap' function and confirm your transaction.
7. All of your LSD tokens are now staked on Tenet and earning rewards on top op the yield from the original chain. You can now use your WTLSD tokens in DeFi applications.

