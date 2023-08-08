---
sidebar_position: 2
---

# Borrowing

### **Why would I use** Tenet Stablecoin Protocol **for borrowing?**

Tenet Stablecoin Protocol offers interest-free loans and is more capital efficient than other borrowing systems (i.e. less collateral is needed for the same loan). It allows you to collateralize assets that are already yield-bearing through their participation in Tenet validators.&#x20;

Instead of selling these collateral assets to have liquid funds, you can use the protocol to lock up your LSDs, borrow against them to withdraw LSDC, and then repay your loan at a future date.&#x20;

This allows users to use leverage by drawing a loan against yield-bearing collateral and swapping the LSDC for more yield-bearing collateral and depositing more into the CLIP.&#x20;

The ability to get extra liquidity against already productive assets that users want to hold for the long term allows them to remain exposed to both the underlying asset as well as the yield that is being earned.&#x20;

### **What is a CLIP?**

CLIP stands for Collateralized Liquid Interest Position.

A Clip is where you take out and maintain your loan. Each CLIP is linked to a Tenet address and each address can have just one CLIP per collateral type. If you are familiar with Vaults, CLIPs or CDPs from other platforms, CLIPs are similar as a concept.

CLIPs maintain two balances: one is the collateral asset and the other is a debt denominated in LSDC. You can change the amount of each by adding collateral or repaying debt. As you make these balance changes, your CLIPs collateral ratio changes accordingly.

CLIPs are great because they enable extra liquidity in the form of LSDC loans against yield-bearing collateral. This creates a self-repaying loan as your collateral earns a positive interest.&#x20;

You can close your CLIP at any time by fully paying off your debt.

### **What do you mean by collateral?**

Collateral is any asset which a borrower must provide to take out a loan, acting as a security for the debt.&#x20;

Tenet Stablecoin Protocol supports Liquid Staking Derivatives of Tenet validators as collateral in its CLIPs.&#x20;

### Which assets are accepted as collateral by Tenet Stablecoin Protocol ?&#x20;

Currently, Tenet Stablecoin Protocol accepts the following assets:

1\. twstETH \
2\. tcbETH\
3\. tankrBNB

### **How can the protocol offer interest-free borrowing?**

The protocol charges one-time borrowing and redemption fees that algorithmically adjust based on the last redemption time. For example: If more redemptions are happening (which means LSDC is likely trading at less than 1 USD), the borrowing fee would continue to increase, discouraging borrowing.

Other systems (e.g. MakerDAO) require variable interest rates to make borrowing more or less favorable, but do so implicitly since borrowers would not feel the impact upfront. Given that this also needs to be managed via governance, Tenet Stablecoin Protocol  instead opts for a fully decentralized and direct feedback mechanism via one-off fees.

### **How can I borrow with** Tenet Stablecoin Protocol **?**

To borrow you must open a CLIP and deposit a certain amount of collateral to it. Then you can draw LSDC up to a collateral ratio of `125%`. A **minimum debt** of `500 LSDC` is required.

### **Do I have to pay fees as a borrower?**

Every time you draw LSDC from your CLIP, a one-off borrowing fee is charged on the drawn amount and added to your debt. Please note that the borrowing fee is variable (and determined algorithmically) and has a minimum value of `0.5%` under normal operation.&#x20;

LSDs deposited as collateral to a CLIP will continue earning their yield from the Tenet base layer validation process. A 10% fee is taken by Tenet Stablecoin Protocol with the remainder being made available for claiming by the CLIP owner. \
\
A `10 LSDC` [Liquidation Reserve](broken-reference) charge will be applied as well, but returned to you upon repayment of debt.&#x20;

Another consideration is the price of LSDC at the time of repayment. If at the time you want to repay your loan LSDC is trading at $1.02 on the market and you need to buy it, you are incurring a 2% 'fee'. You can avoid this by having your borrowed funds readily available or by being able to wait for LSDC to return to peg.

### **How is the borrowing fee calculated?**

The borrowing fee is added to the debt of the CLIP and is given by a `baseRate` . The fee rate is confined to a range between `0.5%` and `5%` and is multiplied by the amount of liquidity drawn by the borrower.

For example: The borrowing fee stands at `0.5%` and the borrower wants to receive `4,000 LSDC` to their wallet. Being charged a borrowing fee of `20.00 LSDC`, the borrower will incur a debt of`4,030 LSDC` after the Liquidation Reserve and issuance fee are added.&#x20;

### **When do I need to pay my loan back?**

Loans issued by the protocol do not have a repayment schedule. You can leave your CLIP open and repay your debt any time, as long as you maintain a collateral ratio of at least the minimum collateral ration for that collateral type.

### What is the collateral ratio?

This is the ratio between the Dollar value of the collateral in your CLIP and its debt in LSDC. The collateral ratio of your CLIP will fluctuate over time as the price of the collateral asset changes. You can influence the ratio by adjusting your CLIPs collateral and/or debt — i.e. adding more collateral or paying off some of your debt.&#x20;

For example: Let’s say the current price of twstETH is `$2,000` and you decide to deposit `10 twstETH`. If you borrow `10,000 LUSD`, then the collateral ratio for your CLIP would be `200%`.

$$\frac{10 twstETH \ * \ $2.000}{10.000 \ LSDC} * 100\% = 200\%$$



If you instead took out `15,000 LSDC` that would put your ratio at `133%`.&#x20;

### **What is the minimum collateral ratio (MCR) and the "recommended" collateral ratio?**

The minimum collateral ratio (or MCR for short) is the lowest ratio of debt to collateral that will not trigger a liquidation.&#x20;

This is a protocol parameter that is set individually for each collateral type (with a minimum of `125%)`. So if your CLIP has a debt `10,000 LSDC`and the MCR for that collateral type is 125%, you would need at least `$12,500` worth of assets posted as collateral to avoid being liquidated.

Note that asset prices can be quite volatile and if you are not monitoring your collateral ratio with a software agent, you need to leave some margin to account for collateral assets dropping in value when you can not respond in due time. In general, it is wise to be on the conservative side to avoid any liquidation scenario's.



### **What happens if my** CLIP **is liquidated?**

You lose your collateral as your debt is paid off through [liquidation](https://docs.liquity.org/faq/stability-pool-and-liquidations#what-are-liquidations), i.e. you will no longer be able to retrieve your collateral by repaying your debt. A liquidation thus results in a net loss of `20% (= 100% * 25 / 125)` of your collateral’s Dollar value.

### **What is the Liquidation Reserve?**

When you open a CLIP and draw a loan, `10 LSDC` is set aside as a way to compensate gas costs for the transaction sender in the event your CLIP being liquidated. The Liquidation Reserve is fully refundable if your CLIP is not liquidated, and is given back to you when you close your CLIP by repaying your debt. The Liquidation Reserve counts as debt and is taken into account for the calculation of a CLIP's collateral ratio, slightly increasing the actual collateral requirements.

### **What happens if my** CLIP **is redeemed against?**

When LSDC is redeemed, the assets provided to the redeemer are allocated from the CLIP(s) with the lowest collateral ratio (even if it is above `125%`). If at the time of redemption you have the CLIP with the lowest ratio, you will give up some of your collateral, but your debt will be reduced accordingly. &#x20;

The USD value by which your collateral is reduced corresponds to the nominal LSDC amount by which your CLIPs debt is decreased. You can think of redemptions as if somebody else is repaying your debt and retrieving an equivalent amount of your collateral. As a positive side effect, redemptions improve the collateral ratio of the affected CLIPs, making them less risky.

Redemptions that do not reduce your debt to 0 are called partial redemptions, while redemptions that fully pay off a CLIPs debt are called full redemptions. In such a case, your CLIP is closed, and you can claim your collateral surplus and the Liquidation Reserve at any time.&#x20;

Let’s say you own a CLIP with `2 twstETH` collateralized and a debt of `3,000 LSDC`. The current price of twstETH is `$2,000`. This puts your collateral ratio (CR) at `133% (= 100% * (2 * 2,000) / 3,000)`. Let’s imagine this is the lowest CR in the Tenet Stablecoin system and look at two examples of a partial redemption and a full redemption:

**Example of a partial redemption**

Somebody redeems `1,000 LSDC` for `0.5 twstETH` and thus repays `1,000 LSDC` of your debt, reducing it from `3,000 LSDC` to `2,000 LSDC`. In return, `0.5 twstETH,` worth `$1,000`, is transferred from your CLIP to the redeemer. Your collateral goes down from `2 to 1.5 twstETH`, while your collateral ratio goes up from `133%` to `150% (= 100% * (1.5 * 2,000) / 2,000)`.

**Example of a full redemption**

Somebody redeems `6,000 LSDC` for `3 twstETH`. Given that the redeemed amount is larger than your debt minus `10 LSDC` (set aside as a Liquidation Reserve), your debt of `3,010 LUSD` is entirely cleared and your collateral gets reduced by `$3,000` of twstETH, leaving you with a collateral of`0.5 twstETH (= 2 - 3,000 / 2,000)`.

### How can you offer a collateral ratio as low as 125%?

By making liquidation instantaneous and more efficient, Tenet's Stablecoin Protocol needs less collateral to provide the same security level as similar protocols that rely on lengthy auction mechanisms to sell off collateral in liquidations.

### **How can I take advantage of leverage?**

You can sell the borrowed LSDC on the market for accepted collateral and use the latter to top up the collateral of your CLIP. That allows you to draw and sell more LSDC, and by repeating the process you can reach the desired leverage ratio.&#x20;

Assuming perfect price stability (`1 LSDC = $1`), the maximum achievable leverage ratio is 5`x`. It is given by the formula:&#x20;

maximum leverage ratio =$$\frac{MCR}{(MCR - 100\%)}$$where MCR is the Minimum Collateral Ratio.

### **Why did the collateral and debt of my** CLIP **increase without my intervention?**

If CLIPs are liquidated and the Stability Pool is empty (or gets emptied due to the liquidation), every borrower will receive a portion of the liquidated collateral and debt as part of a redistribution process.
