---
sidebar_position: 2
---

# Running mainnet node with ansible

All files and configs can be found here: https://github.com/tenet-org/tenet-ansible

1. We prefer to use Ubuntu 20.04 LTS for our nodes.
2. We prefer to use droplets with external volume for our nodes. That's why we should mount volume to our droplet before deploy node.
3. When you download binary file, you should pay attention to the environment (mainnet | testnet | devnet).

### Pre-requirements

Before deploying a node, ensure you have the latest version of Ansible installed in your system. You should also have access to the target VM(s) via SSH.

### 1. Download the Binary

Download the required binary by visiting the official download page of the tool. Once the download is complete, copy the binary to your local `bin` directory.

### 2. Configure Hosts

In the `hosts.yml` file, replace `ansible_host` with the actual IP address or hostname of the VM where you want to deploy the node.

### 3. Setup Stage Configuration

In the `deploy-node.yml` file, set the correct URL for `config_url`. This should point to the location where your configuration file for the node is stored.

### Optional Settings

If you want to sync your node from a snapshot, set `sync_by_snapshot` to `true` in the `deploy-node.yml` file. This setting is optional and should be used based on your requirement.

### 4. Deploy the Node
Once you have completed the setup, run the following command to start the node deployment:

```
ansible-playbook -i hosts.yml deploy-node.yml
```

Please note that this command should be run from the same directory where the `hosts.yml` and `deploy-node.yml` file is located. Also, ensure that you have the necessary permissions to execute the `ansible-playbook` command.
