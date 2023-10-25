---
sidebar_position: 4
---

# Redemptions and LSDC Price Stability

### How does LSDC closely follow the price of USD?

The ability to redeem LSDC for collateral at face value (i.e. 1 LSDC for $1 of collateral) and the minimum collateral ratio of `125%` create a price floor and price ceiling (respectively) through arbitrage opportunities. We call these "hard peg mechanisms" since they are based on direct processes.

LSDC also benefits from less direct mechanisms for USD parity — called "soft peg mechanisms". One of these mechanisms is parity as a Schelling point. Since Tenet Stablecoin Protocol treats LSDC as being equal to USD, parity between the two is an implied equilibrium state of the protocol. Another of these mechanisms is the borrowing fee on new debts. As redemptions increase (implying LSDC is below $1), so too does the `baseRate` — making borrowing less attractive which keeps new LDSC from hitting the market and driving the price below $1.

### What are redemptions?

Redemptions are a key mechanism in maintaining LSDC's price stability. A redemption allows users to exchange LSDC for collateral at face value—1 LSDC is worth 1 USD in collateral. Users can initiate redemptions at any time, although a variable redemption fee may apply. This fee starts at 0,5% and adjusts based on redemption activities to help modulate their frequency and protect low-collateral borrowers. For example, if the current redemption fee is 1% and you redeem 300 LSDC when the price of twstETH is 1500 USD, you would receive 0.198 twstETH (0.2 twstETH minus a 0.002 twstETH fee).

The redemption process offers arbitrage opportunities; when the price of 1 LSDC falls below 1 USD minus the redemption fee, speculators can sell the redeemed collateral at a higher market price. Additionally, automated bots can trigger redemptions to quickly correct the LSDC price if it deviates below the desired threshold. Redemptions also naturally shrink LSDC's monetary base, contributing positively to its price stability. Note that the redeemed amount affects the base rate, potentially impacting future redemption fees, especially for large amounts.

### Is a redemption the same as paying back my debt?

No, redemptions are a completely separate mechanism. All one has to do to pay back their debt is adjust their CLIPs debt and collateral.

### How is the redemption fee calculated?

Under normal operation, the redemption fee is given by the formula `(baseRate + 0.5%) * collateralDrawn`

### How is the `baseRate` calculated?

Redemption fees are based on the `baseRate` state variable in Tenet Stablecoin Protocol, which is dynamically updated. The `baseRate` increases with each redemption, and decays according to time passed since the last fee event - i.e. the last redemption or issuance of LSDC.

Upon each redemption:

* `baseRate` is decayed based on time passed since the last fee event
* `baseRate` is incremented by an amount proportional to the fraction of the total LSDC supply that was redeemed
* The redemption fee is given by `(baseRate  + 0.5%) * collateralDrawn`

### As a borrower, do I lose money if I'm redeemed against?

If your CLIP is redeemed against, you _do not_ incur a net loss. However, you will lose some of your ETH exposure. Your CLIPs collateral ratio will also improve after a redemption.

### How can I avoid being redeemed against?

The best way to avoid being redeemed against is by maintaining a high collateral ratio relative to the rest of the CLIPs in the system. Remember: The riskiest CLIPs (i.e. lowest collateralized CLIPs) are first in line when a redemption takes place.
