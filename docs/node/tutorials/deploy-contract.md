---
sidebar_position: 5
---

# Deploy contracts

Here is example of [hardhat](https://hardhat.org) config to deploy contracts on mainnet, testnet and devnet:

```json title="hardhat.config.js"
{
    networks: {
        tenet: {    
            url: "https://rpc.tenet.org"
        },
        tenetTesnet: {
            url: "https://rpc.testnet.tenet.org"
        },
        tenetDevnet: {
            url: "https://rpc.devnet.tenet.org"
        }
    }
}
```