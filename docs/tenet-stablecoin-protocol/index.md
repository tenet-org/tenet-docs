---
sidebar_position: 1
---

# General

### **What is the Tenet Stablecoin Protocol?**

The Tenet Stablecoin Protocol is a decentralized stablecoin protocol using the Liquity model that allows you to draw interest free loans against yield-bearing collateral assets. Loans are drawn in LSDC (a USD pegged stablecoin) and need to maintain a minimum collateral ratio to keep the system healthy and over-collateralized.

In addition to the collateral, the loans are secured by a Stability Pool containing LSDC and by fellow borrowers collectively acting as guarantors of last resort. Learn more about these mechanisms in our documentation.&#x20;

The Tenet Stablecoin as a protocol is non-custodial and based on the codebase of [Liquity](https://www.liquity.org/) which has been extended to support multiple, custom collateral types and a unique governance system secured by a base layer protocol.&#x20;

If you still have questions after browsing our FAQs and documentation — join our Discord!

### **What’s the motivation behind the Tenet Stablecoin Protocol?**

The Tenet Stablecoin Protocol creates a more capital efficient and user-friendly way to borrow stablecoins against a decentralised collateral base but goes even further in decentralizing the governance (and therefore security) of the protocol. This should protect the Tenet Stablecoin Protocol from the type of governance based attacks seen at Maker DAO with the controversial LOVE proposal whilst avoiding stagnation type issues with protocols like Liquity and Reflexer that attempted to remove governance altogether and therefore cannot undertake actions such as adding new collateral types.

In addition, whilst other Decentralized stablecoins like DAI and LUSD are minted against static collateral, LSCD is minted against Liquid Staking Derivatives of assets staked on Tenet Validators. This means that the collateral itself is yield-bearing and appreciating in value. Because the collateral base carries a native yield, an end-user is able to continue to earn interest on their underlying collateral whilst having on-demand liquidity by minting a stablecoin.



### **What are the key benefits of the** Tenet Stablecoin Protocol**?**

Tenet Stablecoin Protocol's key benefits include:

* Positive interest rate — as a borrower, not only do you not pay interest to borrow LSDC but you earn interest as yield on your underlying collateral
* Ability to re-utilise liquidity from [yield-bearing assets ](broken-reference)across DeFi
* Protocol level governance — Tenet Stablecoin Protocol is governed by the validator network on the Tenet network, benefiting from the security of the DiPos model
* Low minimum collateral ratio —  varying depending on the LSD deposited but beginning at `125%` allow for more efficient usage of deposited assets
* Directly [redeemable](broken-reference) —  LSDC can be redeemed at face value for the underlying collateral at any time

### **What collateral types does the** Tenet Stablecoin Protocol **support?**

The Tenet Stablecoin Protocol is native to the Tenet blockchain and aims to support all tLSDs minted on the Tenet blockchain. These tLSDs carry two sources of yield within them and are an ideal asset to own.

At genesis, LSDC can be minted against the following assets:

1. twstETH 
2. tcbETH
3. tankrBNB

### **How can** Tenet Stablecoin Protocol **be upgraded or changed?**

Smart contracts underpinning the Tenet Stablecoin Protocol are upgradeable and can be improved in the future. However, any upgrades must be approved by the validator network, ensuring that such decisions are governed by participants across the entire DeFi ecosystem through the DiPos model as opposed to the holders of a single governance token. This makes a governance attack economically unfeasible.

### **How can I use** Tenet Stablecoin Protocol**?**

Access the dApp of Tenet Stablecoin Protocol here: insert URL

You will need to be connected to the Tenet network: insert RPC details

### What are the main use cases of the Tenet Stablecoin Protocol?

1. Borrow LSDC against collateral by opening a Collateralized Liquid Interest Position (CLIP)
2. Secure Tenet Stablecoin Protocol by providing LSDC to the [Stability Pool ](broken-reference)in exchange for rewards from the Native Rewards Pool
3. Redeem `1 LSDC` for `1 USD` worth of collateral when the LSDC peg falls below `$1`

### What is LSDC?

LSDC is the USD-pegged stablecoin used to pay out loans on the Tenet Stablecoin Protocol protocol. At any time it can be redeemed against the underlying [collateral](broken-reference) at face value. Learn more about the [stability mechanism](https://docs.liquity.org/faq/lusd-redemptions).

LSDC stands for Liquid Staking Dollar as it is backed by LSDs from the Tenet blockchain network.&#x20;

### Does Tenet Stablecoin Protocol have a token?

Tenet Stablecoin Protocol is a native dApp on the Tenet blockchain meaning that it is governed by the validator network and Stability Pool participants can benefit from Tenet rewards from the Native Rewards Pool through the Native Gauges Voting Mechanism.

### What do I need in order to use Tenet Stablecoin Protocol?

To borrow LSDC, all you need is a wallet (e.g. MetaMask) and sufficient Tenet to open a CLIP and pay the gas fees.&#x20;

To become a [Stability Pool](broken-reference) depositor , you need to have LSDC. LSDC can be borrowed by opening a CLIP. You can also use an AMM or another exchange to buy LSDC on the open market.

### Does Tenet Stablecoin Protocol charge any fees?

There is a one-off fee whenever LSDC is borrowed, and when LUSD is redeemed:

* For borrowers, there is a borrowing fee on loans as a percentage of the drawn amount (in LSDC).
* For redeemers, there is a redemption fee on the amount paid to users by the system  when exchanging LSDC for collateral. Note that redemption is separate from repaying your loan as a borrower, which is free of charge.

Both fees depend on the redemption volumes, i.e. they increase upon every redemption in function of the redeemed amount, and decay over time as long as no redemptions take place. The intent is to throttle large redemptions with higher fees, and to throttle borrowing directly after large redemption volumes. The fee decay over time ensures that the fee for both borrowers and redeemers will “cool down”, while redemptions volumes are low.

The fees cannot become smaller than `0.5%`, which protects the redemption facility from being misused by arbitrageurs front-running the price feed. The borrowing fee is capped at `5%`, keeping the system (somewhat) attractive for borrowers even in phases where the monetary is contracting due to redemptions.&#x20;

### How can I earn money using Tenet Stablecoin Protocol?



A simple way to use the Tenet Stablecoin Protocol to earn money is by depositing LSDC to the Stability Pool which will earn money from the following sources:

1. Earn liquidation gains when unhealthy CLIPS have their debt repaid.&#x20;
2. Earn TENET from the Native Rewards Pool based on Native Gauge voting.

### Can I lose my funds?

As a non-custodial system, all the tokens sent to the protocol will be held and managed algorithmically without the interference of any person or legal entity. That means your funds will only be subject to the rules set forth in the smart contract code, which will be audited prior to release.

There are two scenarios under which you may lose a part of your funds:

* You are a borrower (CLIP owner) and your collateral is [liquidated](broken-reference). You will still keep your borrowed LSDC, but your CLIP will be closed and your collateral will be used to compensate [Stability Pool](broken-reference) depositors.
* You are a Stability Pool depositor and your deposited LSDC is used to repay debt from liquidated borrowers. Since liquidations are triggered any time borrowers’ collateral drops below the minimum threshold, you will receive more collateral in return. However, if the collateral decreases in price and you maintain exposure, you may lose value in your total pool deposits.

Please note that LSDC isn't perfectly pegged to the USD, and can deviate slightly in both directions under certain market conditions. See On Price Stability of LSDC for more details.

Although the system will be diligently audited and is primarily based on tried and tested code, a hack or a bug that results in losses for the users can never be fully excluded.

### Is the Tenet Stablecoin Protocol a completely new codebase?

Tenet Stablecoin Protocol has been initially forked from Liquity, a stablecoin protocol on Ethereum Mainnet.&#x20;

Forking from robust and time-proven codebases has several advantages with regards to security and risk of exploits being present.&#x20;

We have extended the Liquity codebase by introducing Governance capability to set certain parameters and to upgrade contracts as we expect Tenet Stablecoin Protocol to grow and adapt to the needs of the Tenet blockchain.

We have also added support for multiple collateral types while Liquity only works with a single collateral type, ETH. \
\
These docs are largely based on the documentation provided by Liquity protocol.&#x20;
