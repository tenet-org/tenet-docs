---
sidebar_position: 4
---

# Redemptions and LSDC Price Stability

### How does LSDC closely follow the price of USD?&#x20;

The ability to redeem LSDC for collateral at face value (i.e. 1 LSDC for $1 of collateral) and the minimum collateral ratio of `125%` create a price floor and price ceiling (respectively) through arbitrage opportunities. We call these "hard peg mechanisms" since they are based on direct processes.&#x20;

LSDC also benefits from less direct mechanisms for USD parity — called "soft peg mechanisms". One of these mechanisms is parity as a Schelling point. Since Tenet Stablecoin Protocol treats LSDC as being equal to USD, parity between the two is an implied equilibrium state of the protocol. Another of these mechanisms is the borrowing fee on new debts. As redemptions increase (implying LSDC is below $1), so too does the `baseRate` — making borrowing less attractive which keeps new LDSC from hitting the market and driving the price below $1.&#x20;

### What are redemptions?

A redemption is the process of exchanging LSDC for collateral at face value, as if 1 LSDC is exactly worth $1. That is, for x LSDC you get x Dollars worth of collateral in return.

Users can redeem their LSDC for collateral at any time without limitations. However, a redemption fee might be charged on the redeemed amount.

For example, if the current redemption fee is 1%, the price of twstETH is $1500 and you redeem 300 LSDC, you would get 0.198 twstETH (0.2 twstETH minus a redemption fee of 0.002 twstETH).

Note that the redeemed amount is taken into account for calculating the base rate and might have an impact on the redemption fee, especially if the amount is large.

### Is a redemption the same as paying back my debt?&#x20;

No, redemptions are a completely separate mechanism. All one has to do to pay back their debt is adjust their CLIPs debt and collateral.&#x20;

### How is the redemption fee calculated?

Under normal operation, the redemption fee is given by the formula `(baseRate + 0.5%) * collateralDrawn`

### How is the `baseRate` calculated?

Redemption fees are based on the `baseRate` state variable in Tenet Stablecoin Protocol, which is dynamically updated. The `baseRate` increases with each redemption, and decays according to time passed since the last fee event - i.e. the last redemption or issuance of LSDC.

Upon each redemption:

* `baseRate` is decayed based on time passed since the last fee event
* `baseRate` is incremented by an amount proportional to the fraction of the total LSDC supply that was redeemed
* The redemption fee is given by `(baseRate  + 0.5%) * collateralDrawn`

### As a borrower, do I lose money if I'm redeemed against?&#x20;

If your CLIP is redeemed against, you _do not_ incur a net loss. However, you will lose some of your ETH exposure. Your CLIPs collateral ratio will also improve after a redemption.&#x20;

### How can I avoid being redeemed against?&#x20;

The best way to avoid being redeemed against is by maintaining a high collateral ratio relative to the rest of the CLIPs in the system. Remember: The riskiest CLIPs (i.e. lowest collateralized CLIPs) are first in line when a redemption takes place.&#x20;
