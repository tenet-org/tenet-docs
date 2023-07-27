# Multichain

This document describes the steps for validators and full node operators, to upgrade successfully to the v11.2.0 release. 
The v11.2.0 upgrade is a mandatory release.

## Instructions

- [On-chain governance proposal attains consensus](#on-chain-governance-proposal-attains-consensus)
- [Upgrade date](#upgrade-date)
- [Chain-id will remain the same](#chain-id-will-remain-the-same)
- [Preparing for the upgrade](#preparing-for-the-upgrade)
    - [System requirement](#system-requirement)
    - [Backups](#backups)
    - [Testing](#testing)
    - [Current runtime, tenet_155-1 (pre-multichain upgrade) is running Tenet v11.0.7](#current-runtime-tenet_155-1-pre-multichain-upgrade-is-running-tenet)
    - [Target runtime, tenet_155-1 (post-multichain upgrade) will run Tenet v11.2.0](#target-runtime-tenet_155-1-post-multichain-upgrade-will-run-tenet)
- [Upgrade steps](#upgrade-steps)
    - [Method I: Manual Upgrade](#method-i-manual-upgrade)
    - [Method II: Upgrade using Cosmovisor](#method-ii-upgrade-using-cosmovisor)
        - [Manually preparing the binary](#manually-preparing-the-binary)
            - [Preparation](#preparation)
            - [Expected upgrade result](#expected-upgrade-result)
        - [Auto-Downloading the Tenet binary](#auto-downloading-the-tenet-binary)
            - [Preparation](#preparation-1)
            - [Expected result](#expected-result)
- [Upgrade duration](#upgrade-duration)
- [Rollback plan](#rollback-plan)
- [Communications](#communications)
- [Risks](#risks)
- [Reference](#reference)

## On-chain governance proposal attains consensus

https://tenet.explorers.guru/proposal/2 is the reference on-chain governance proposal for this upgrade. Neither core developers nor core funding entities control the governance, and this governance proposal has passed in a _fully decentralized_ way.

## Upgrade date

The upgrade will take place at a block height of `2 330 000`. The date/time of the upgrade is subject to change as blocks are not generated at a constant interval. 

## Chain-id will remain the same

The chain-id of the network will remain the same, `tenet_155-1`. This is because an in-place migration of state will take place, i.e., this upgrade does not export any state.

## Preparing for the upgrade

### System requirement

32GB RAM is recommended to ensure a smooth upgrade.

If you have less than 32GB RAM, you might try creating a swapfile to swap an idle program onto the hard disk to free up memory. This can
allow your machine to run the binary than it could run in RAM alone.

```shell
sudo fallocate -l 16G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

### Backups

Prior to the upgrade, validators are encouraged to take a full data snapshot. Snapshotting depends heavily on infrastructure, but generally this can be done by backing up the `.tenetd` directory.
If you use Cosmovisor to upgrade, by default, Cosmovisor will backup your data upon upgrade. See below [upgrade by cosmovisor](#method-ii-upgrade-using-cosmovisor-by-manually-preparing-the-tenet-v700-binary) section.

It is critically important for validator operators to back-up the `.tenetd/data/priv_validator_state.json` file after stopping the tenetd process. This file is updated every block as your validator participates in consensus rounds. It is a critical file needed to prevent double-signing, in case the upgrade fails and the previous chain needs to be restarted.

### Testing

For those validator and full node operators that are interested in ensuring preparedness for the impending upgrade, you can run a Local Testnet or join in our Tenet Public Testnet.

### Current runtime, tenet_155-1 (pre-multichain upgrade) is running Tenet v11.0.7

The Cosmos Hub mainnet network, `tenet_155-1`, is currently running Tenet v11.0.7. We anticipate that operators who are running on v11.0.7, will be able to upgrade successfully. Validators are expected to ensure that their systems are up to date and capable of performing the upgrade. This includes running the correct binary, or if building from source, building with go `1.20`.

### Target runtime, tenet_155-1 (post-multichain upgrade) will run Tenet v11.2.0

The Cosmos Hub mainnet network, `tenet_155-1`, will run Tenet v11.2.0. Operators _MUST_ use this version post-upgrade to remain connected to the network.

## Upgrade steps

There are 2 major ways to upgrade a node:

- Manual upgrade
- Upgrade using [Cosmovisor](https://github.com/cosmos/cosmos-sdk/tree/master/cosmovisor)
    - Either by manually preparing the new binary
    - Or by using the auto-download functionality (this is not yet recommended)

If you prefer to use Cosmovisor to upgrade, some preparation work is needed before upgrade.

### Method I: Manual Upgrade

Make sure Tenet v11.2.0 is installed by either downloading a [compatible binary](https://github.com/cosmos/tenet/releases/tag/v11.2.0), or building from source. Building from source requires **Golang 1.20**.

Run Tenet v11.0.7 till upgrade height, the node will panic:

```shell
ERR UPGRADE "multichain" NEEDED at height: 2330000
```

Stop the node, and switch the binary to Tenet v11.2.0 and re-start by `tenetd start`.

It may take several minutes to a few hours until validators with a total sum voting power > 2/3 to complete their node upgrades. After that, the chain can continue to produce blocks.

### Method II: Upgrade using Cosmovisor

:::note
**Please Read Before Proceeding**
Using Cosmovisor 1.2.0 and higher requires a lowercase naming convention for upgrade version directory. For Cosmovisor 1.1.0 and earlier, the upgrade version is not lowercased.
:::

> **For Example:** 
> **Cosmovisor =< `1.1.0`: `/upgrades/v9-Lambda/bin/tenetd`**
> **Cosmovisor >= `1.2.0`: `/upgrades/v9-lambda/bin/tenetd`**

| Cosmovisor Version | Binary Name in Path |
|--------------------|---------------------|
| 1.3                | multichain          |
| 1.2                | multichain          |
| 1.1                | multichain          |
| 1.0                | multichain          |

### Manually preparing the binary

##### Preparation

Install the latest version of Cosmovisor (`1.3.0`):

```shell
go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@latest
```

**Verify Cosmovisor Version**
```shell
cosmovisor version
cosmovisor version: v1.3.0
```

Create a cosmovisor folder:

create a Cosmovisor folder inside `$TENET_HOME` and move Tenet v11.0.7 into `$TENET_HOME/cosmovisor/genesis/bin`

```shell
mkdir -p $TENET_HOME/cosmovisor/genesis/bin
cp $(which tenetd) $TENET_HOME/cosmovisor/genesis/bin
````

build Tenet v11.2.0, and move tenetd v11.2.0 to `$TENET_HOME/cosmovisor/upgrades/multichain/bin`

```shell
mkdir -p  $TENET_HOME/cosmovisor/upgrades/multichain/bin
cp $(which tenetd) $TENET_HOME/cosmovisor/upgrades/multichain/bin
```

Then you should get the following structure:

```shell
.
├── current -> genesis or upgrades/<name>
├── genesis
│   └── bin
│       └── tenetd  #v11.0.7
└── upgrades
    └── multichain
        └── bin
            └── tenetd  #v11.2.0
```

Export the environmental variables:

```shell
export DAEMON_NAME=tenetd
# please change to your own tenet home dir
# please note `DAEMON_HOME` has to be absolute path
export DAEMON_HOME=$TENET_HOME
export DAEMON_RESTART_AFTER_UPGRADE=true
```

Start the node:

```shell
cosmovisor run start --x-crisis-skip-assert-invariants --home $DAEMON_HOME
```

Skipping the invariant checks is strongly encouraged since it decreases the upgrade time significantly and since there are some other improvements coming to the crisis module in the next release of the Cosmos SDK.

#### Expected upgrade result

When the upgrade block height is reached, Tenet will panic and stop:

This may take 7 minutes to a few hours.
After upgrade, the chain will continue to produce blocks when validators with a total sum voting power > 2/3 complete their node upgrades.

### Auto-Downloading the Tenet binary

**This method is not recommended!**

#### Preparation

Install the latest version of Cosmovisor (`1.3.0`):

```shell
go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@latest
```

Create a cosmovisor folder:

create a cosmovisor folder inside tenet home and move tenetd v11.0.7 into `$TENET_HOME/cosmovisor/genesis/bin`

```shell
mkdir -p $TENET_HOME/cosmovisor/genesis/bin
cp $(which tenetd) $TENET_HOME/cosmovisor/genesis/bin
```

```shell
.
├── current -> genesis or upgrades/<name>
└── genesis
     └── bin
        └── tenetd  #v11.0.7
```

Export the environmental variables:

```shell
export DAEMON_NAME=tenetd
# please change to your own tenet home dir
export DAEMON_HOME=$TENET_HOME
export DAEMON_RESTART_AFTER_UPGRADE=true
export DAEMON_ALLOW_DOWNLOAD_BINARIES=true
```

Start the node:

```shell
cosmovisor run start --x-crisis-skip-assert-invariants --home $DAEMON_HOME
```

Skipping the invariant checks can help decrease the upgrade time significantly.

#### Expected result

When the upgrade block height is reached, you can find the following information in the log:

```shell
ERR UPGRADE "multichain" NEEDED at height: 2330000
```

Then the Cosmovisor will create `$TENET_HOME/cosmovisor/upgrades/multichain/bin` and download the Tenet v11.2.0 binary to this folder according to links in the `--info` field of the upgrade proposal.
This may take 7 minutes to a few hours, afterwards, the chain will continue to produce blocks once validators with a total sum voting power > 2/3 complete their nodes upgrades.

_Please Note:_

- In general, auto-download comes with the risk that the verification of correct download is done automatically. If users want to have the highest guarantee users should confirm the check-sum manually. We hope more node operators will use the auto-download for this release but please be aware this is a risk and users should take at your own discretion.
- Users should run their node on v11.0.7 if they use the cosmovisor v1.3.0 with auto-download enabled for upgrade process.

## Upgrade duration

The upgrade may take a few minutes to several hours to complete because tenet_155-1 participants operate globally with differing operating hours and it may take some time for operators to upgrade their binaries and connect to the network.

## Rollback plan

During the network upgrade, core Tenet teams will be keeping an ever vigilant eye and communicating with operators on the status of their upgrades. During this time, the core teams will listen to operator needs to determine if the upgrade is experiencing unintended challenges. In the event of unexpected challenges, the core teams, after conferring with operators and attaining social consensus, may choose to declare that the upgrade will be skipped.

Steps to skip this upgrade proposal are simply to resume the tenet_155-1 network with the (downgraded) v11.0.7 binary using the following command:

> tenetd start --unsafe-skip-upgrade 2330000

Note: There is no particular need to restore a state snapshot prior to the upgrade height, unless specifically directed by core Tenet teams.

Important: A social consensus decision to skip the upgrade will be based solely on technical merits, thereby respecting and maintaining the decentralized governance process of the upgrade proposal's successful YES vote.

## Communications

Operators are encouraged to join the `#cosmos-hub-validators-verified` channel of the Cosmos Hub Community Discord. This channel is the primary communication tool for operators to ask questions, report upgrade status, report technical issues, and to build social consensus should the need arise. This channel is restricted to known operators and requires verification beforehand. Requests to join the `#cosmos-hub-validators-verified` channel can be sent to the `#general-support` channel.

## Risks

As a validator performing the upgrade procedure on your consensus nodes carries a heightened risk of double-signing and being slashed. The most important piece of this procedure is verifying your software version and genesis file hash before starting your validator and signing.

The riskiest thing a validator can do is discover that they made a mistake and repeat the upgrade procedure again during the network startup. If you discover a mistake in the process, the best thing to do is wait for the network to start before correcting it.
