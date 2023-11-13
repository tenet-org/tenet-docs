---
sidebar_position: 3
---

# Aggregator Protocol

The Tenet blockchain uniquely accommodates multiple Liquid Staking Derivatives (LSDs), leading to various Tenet-specific Liquid Staking Derivatives (tLSDs) backed by identical LSDs. This ecosystem, although powerful, can be complex for DeFi integrations. The Tenet Aggregator Protocol elegantly solves this problem by offering a unified, dual-yield-bearing tLSD token, simplifying the experience for end-users and enabling seamless integration into existing DeFi projects.

# Core Components of the Tenet Aggregator Protocol

## Main Aggregator Contract

The aggregator contract accepts LSD tokens and delegates them across supported validators on the network. It issues a tLSD token, which is a tokenized representation of an LSD asset staked to various validators on the Tenet blockchain. Tenet staking yield accumulates in the contract, is sent to the staking contract, and distributed to all staked tLSD holders.

On the withdrawal side, the aggregator contract accepts tLSD tokens and burns them, undelegating the underlying LSD and sending it back to the user after the unbonding period is finished.

1. **LSD Acceptance**: The contract accepts LSD tokens from users and delegates them to a pool of 64 eligible validators.
2. **Validator Delegation**: It autonomously allocates the received LSDs across these validators.
3. **tLSD Issuance**: Users are issued tLSD tokens, representing their stakes distributed across all participating validators.
4. **Yield Distribution**: Yield from each validator is aggregated and uniformly distributed to all staked tLSD holders via the associated staking contract.

### Deposit/Mint Process

The Main Aggregator Contract facilitates two distinct methods for depositing or minting, differentiated by how they allocate assets to validators:

#### Specific Validator Allocation:

- When depositing or minting, users have the option to specify a validator's address.
- If a validator address is provided, the contract allocates all the deposited or minted assets to the specified validator. This approach allows users or front-end interfaces to support a preferred validator or to let their users choose one.
- This method results in a portfolio that is more heavily weighted towards the chosen validator.

#### Automatic Distribution to Top Validators:

- If no validator address is specified, the contract employs an automatic distribution mechanism.
- Assets are proportionally delegated to a top set of validators based on each validator's share in the total delegation.
- This method ensures a balanced allocation of assets across the leading validators in the protocol.

### Withdrawal Process and Validator Protection

The withdrawal process from the Main Aggregator Contract is carefully designed to ensure equitable distribution and to protect the network validators. Here’s an overview:

- **Top Set Validator Selection**: The contract selects a top set of validators for withdrawals, based on their stake in the protocol.
- **Proportional Undelegation**: The total staked assets across these validators are calculated. Withdrawals are then proportionally undelegated based on each validator's share in the total delegation.

An essential feature of the withdrawal process is the protection against draining a single validator excessively:

- **Withdrawal Cap**: The contract imposes a cap on the amount that can be withdrawn from a single validator in one transaction. This cap is set at 10% of the total assets staked with that validator.
- **Dynamic Withdrawal Limit**: The `maxWithdraw` view function provides information on the maximum amount that can be withdrawn in a single transaction. This limit ensures that no single validator is disproportionately affected by withdrawal requests.
- **Subsequent Transactions**: If the 10% cap is reached in a withdrawal transaction, the affected validator is likely to not be among the top set of validators for subsequent withdrawals. This mechanism helps in balancing the delegation and prevents overburdening any single validator.

### Interface

* `deposit`: Mints tLSD to the receiver by depositing an exact amount of LSD tokens.
* `withdraw`: Burns tLSD from the owner and sends an exact amount of underlying LSD to the receiver.
* `mint`: Mints an exact amount of tLSD to the receiver.
* `redeem`: Burns an exact amount of tLSD from the owner and sends LSD tokens to the receiver.
* `claimVeTenetRewards`: Claims validator rewards and redirects them to the staking contract.
* `totalAssets`: Returns the total amount of LSD tokens managed by the aggregator contract.
* `convertToShares`: Returns the amount of tLSD that the contract would exchange for the amount of LSD provided
* `convertToAssets`: Returns the amount of LSD that the contract would exchange for the amount of tLSD provided
* `MaxDeposit`, `MaxWithdraw`, `MaxMint`, `MaxRedeem`: Returns the maximum permissible transaction amounts.

## Aggregator Staking Contract

The AggregatedTLSDStaking smart contract allows users to stake their tLSD tokens in order to earn their delegation rewards over time. The contract accumulates yield from the main aggregator contract and distributes it to staked users in the form of wTENET.

### Interface

* `stake`: Stake a specific amount of tLSD tokens.
* `withdraw`: Withdraw a specific amount of tLSD tokens.
* `claim`: Claim the rewards earned.
* `exit`: Shortcut to withdraw all staked tLSD tokens and claim all rewards.
* `earned`: Returns the amount of rewards earned by a specific account.
* `stakeOf`: Returns the amount of tLSD tokens staked by a specific account.
* `totalSupply`: Returns the total amount of tLSD tokens staked in the contract.

## Wrapper Contract

The wrapper contract is designed to simplify the user experience by automating the staking of tLSD tokens and yield compounding. Upon depositing tLSD tokens into the wrapper contract, users receive a yield-bearing token in return. The contract then automatically stakes these tLSD tokens and claims the generated yield on behalf of the user. Subsequently, this yield is reinvested to leverage the benefits of compound interest.
1. **Deposit tLSD**: Once you deposit tLSD, the wrapper contract stakes them for you.
2. **Receive wTLSD**: In return, you receive wTLSD tokens that are dual-yield-bearing and ready for DeFi.

### Fee Structure

To support the ongoing development and maintenance of the platform, a performance fee is implemented. This fee amounts to 10% of the yield generated by the staked assets. It is deducted prior to the reinvestment of the yield, ensuring a transparent and fair distribution of returns. 

There are no deposit- or withdrawal-related fees.

### Interface

* `deposit`: Mints wTLSD to the receiver by depositing an exact amount of tLSD tokens.
* `withdraw`: Burns wTLSD from the owner and sends an exact amount of underlying tLSD to the receiver.
* `mint`: Mints an exact amount of wTLSD to the receiver.
* `redeem`: Burns an exact amount of wTLSD from the owner and sends tLSD tokens to the receiver.
* `remainingProfitUnlockTime`: Returns the remaining time until all profits from the last compound are unlocked.
* `lockedProfit`: Returns the amount of locked profit from the last compound.
* `totalAssets`: Returns the total amount of tLSD tokens managed by the aggregator contract.
* `convertToShares`: Returns the amount of wTLSD that the contract would exchange for the amount of tLSD provided
* `convertToAssets`: Returns the amount of tLSD that the contract would exchange for the amount of wTLSD provided


## How to Obtain wTLSD: A Step-by-Step Guide

1. Transfer your LSD tokens to a compatible wallet (e.g., MetaMask, Eva).
2. Ensure you have sufficient TENET tokens for transaction fees.
3. Visit <*insert link*> and connect your wallet.
4. Bridge your LSD tokens to the Tenet blockchain. The bridge to process this is accessible at <*insert link*>.
5. Before proceeding, ensure that you are connected to the Tenet blockchain network.
6. You can now delegate and wrap your LSD tokens to receive wTLSD tokens. To do this, navigate to <*insert link*> and use the 'delegate and wrap' function and confirm your transaction.
7. All of your LSD tokens are now staked on Tenet and earning rewards on top op the yield from the original chain. You can now use your wTLSD tokens in DeFi applications.

