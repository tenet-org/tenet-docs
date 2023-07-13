---
sidebar_position: 5
---

# Verify contracts on tenetscan

## Using hardhat

Installation:

```bash
npm install --save-dev @nomicfoundation/hardhat-verify
```

And add the following statement to your hardhat.config.js:

```bash
require("@nomicfoundation/hardhat-verify");
```

Or, if you are using TypeScript, add this to your hardhat.config.ts:

```bash
import "@nomicfoundation/hardhat-verify";
```

Before verifying you should manually add the necessary information to verify your contracts on it. 
For this you need three things: the chain id of the network, the URL of the verification endpoint, 
and the URL of the explorer.

You could add all Tenet networks like this to `hardhat.config.js` file:

```json
{
  etherscan: {
    apiKey: {
      tenet: "no-key",
      tenetTestnet: "no-key",
      tenetDevnet: "no-key"
    },
    customChains: [
      {
        network: "tenet",
        chainId: 1559,
        urls: {
          apiURL: "https://tenetscan.io/api",
          browserURL: "https://tenetscan.io/"
        }
      },
      {
        network: "tenetTestnet",
        chainId: 155,
        urls: {
          apiURL: "https://testnet.tenetscan.io/api",
          browserURL: "https://testnet.tenetscan.io/"
        }
      },
      {
        network: "tenetDevnet",
        chainId: 777,
        urls: {
          apiURL: "https://devnet.tenetscan.io/api",
          browserURL: "https://devnet.tenetscan.io/"
        }
      }
    ]
  }
}
```

Keep in mind that the name you are giving to the network in customChains is the same one that has 
to be used in the apiKey object.

To see which custom chains are supported, run npx hardhat verify --list-networks.

Running verification:

```bash
npx hardhat verify --network tenet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"
```

Learn more: https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify