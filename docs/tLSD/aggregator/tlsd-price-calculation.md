---
title: tLSD and wtLSD Price Calculation
---

## Introduction

In the evolving landscape of decentralized finance, precise and transparent price discovery mechanisms are fundamental. This document details the methodology for calculating the prices of tLSD (Tenet Liquid Staking Derivative) and wtLSD (Wrapped tLSD) tokens. These calculations are vital for users within the Tenet ecosystem, as they provide a clear basis for the valuation of assets derived from the underlying Liquid Staking Derivative (LSD).

## Definitions

- **LSD**: The base currency or underlying asset within the Tenet ecosystem. Its price is obtained via the [Tenet oracle](/oracle#what-is-tenet-oracle), which ensures accuracy and security against manipulation.
- **tLSD**: A token representing a delegated position in the underlying LSD. 
- **wtLSD**: A wrapped token that represents a compounded staking position. It essentially represents a share in a pool of tLSD that are being automatically compounded to maximize yield.
- **Ratio between LSD and tLSD**: This ratio is a measure of the current value of tLSD relative to the underlying LSD. It is dynamic and changes with validator conditions, calculated through the tLSD smart contract.
- **Ratio between tLSD and wtLSD**: Similar to the above, this ratio determines the value of wtLSD in relation to tLSD, offering insight into the compounded yield dynamics.

## Price Calculation for tLSD

The price calculation for tLSD is foundational for understanding the value it represents. The price of tLSD is directly correlated with the value of the underlying LSD, adjusted for the total assets and supply represented by the tLSD tokens. Here's the formula that encapsulates this relationship:

$$
Price_{tLSD} = Price_{LSD} \times \left( \frac{tLSD.totalAssets()}{tLSD.totalSupply()} \right)
$$


## Price Calculation for wtLSD

Once we have determined the price of tLSD, we can calculate the price of wtLSD. wtLSD represents a staked position that is being compounded to include yields from the Tenet ecosystem. The price of wtLSD is dependent on the price of tLSD and the ratio between the assets and supply of wtLSD tokens:

$$
Price_{wtLSD} = Price_{tLSD} \times \left( \frac{wtLSD.totalAssets()}{wtLSD.totalSupply()} \right)
$$

This formula ensures that wtLSD's value reflects the compounded staking yield.

## Combined Direct Price Calculation for wtLSD

For a more direct approach, especially useful for smart contracts or interfaces needing to display wtLSD price without prior tLSD price calculation, we can combine the ratios into a single formula:

$$
Price_{wtLSD} = Price_{LSD} \times \left( \frac{tLSD.totalAssets()}{tLSD.totalSupply()} \right) \times \left( \frac{wtLSD.totalAssets()}{wtLSD.totalSupply()} \right)
$$

By consolidating the calculations into a single step, this formula simplifies the interaction with smart contracts and reduces computational overhead.

## Conclusion

Understanding the pricing structure of tLSD and wtLSD is crucial for all participants in the Tenet ecosystem. It ensures that stakeholders have a transparent view of how their assets are valued and how yields are compounded over time. This clarity is essential for maintaining trust in the system and for enabling informed decision-making by all users.
