# Rewards for Diversified Proof of Stake assets

The amount of rewards a Diversified Proof of Stake asset accrues is determined by the asset's Reward Weight, which is set by governance. This parameter represents the maximum proportion of rewards an asset can earn relative to the total rewards of the chain. Native tokens always have a Reward Weight of 1.

$$Asset\ Reward\ Percentage = \frac{Asset\ Reward\ Weight}{\sum_{i=1}^{n}Asset_i\ Reward\ Weight}$$



For example, suppose a chain has two staking assets: a native staking asset and a Diversified Proof of Stake asset called "LSD1". If LSD1 has a Reward Weight of 0.5, then the rewards shared by all stakers of the staked LSD1 asset will be 33.3% of the total rewards of the chain. The remaining 66.7% of rewards will be distributed to users who stake the chain's native asset.

$$LSD1\ Reward\ Percentage = \frac{0.5}{1+0.5} \approx 33.3\%$$

$$Native\ Asset\ Reward\ Percentage = \frac{1}{1+0.5} \approx 66.7\%$$

<img src="/assets/file.excalidraw.svg" alt="Total Rewards" class="gitbook-drawing"/>
