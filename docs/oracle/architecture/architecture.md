---
sidebar_position: 3
title: Chainlink Architecture
---

# Chainlink Architecture

Chainlink's architecture is designed to provide a secure and decentralized framework for connecting smart contracts with off-chain resources.

## Components

- **Oracles:** Act as data feeds for smart contracts.
- **Node Operators:** Maintain the Chainlink nodes.
- **Aggregators:** Combine data from different oracles to ensure accuracy.

## How it Works

Chainlink utilizes a network of nodes to fetch, validate, and deliver data to smart contracts.

## Basic Request Model

Chainlink connects smart contracts with external data using its decentralized oracle network. Chainlink API requests are handled 1:1 by an oracle.

The [Basic Request Model](./architecture-overview/architecture-request-model) describes the on-chain architecture of requesting data from a single oracle source.

## Decentralized Data Model

For a more robust and trustworthy answer, you can aggregate data from many oracles. With on-chain aggregation, data is aggregated from a decentralized network of independent oracle nodes. This architecture is applied to Chainlink Data Feeds, which can aggregate data such as asset price data.

The [Decentralized Data Model](./architecture-overview/architecture-decentralized-model) describes how data is aggregated, and how consumer contracts can retrieve this data.

## Off-Chain Reporting

Off-Chain Reporting (OCR) is an improvement on the decentralization and scalability of Chainlink networks. With our Off-Chain Reporting aggregators, all nodes communicate using a peer to peer network. During the communication process, a lightweight consensus algorithm runs where each node reports its price observation and signs it. A single aggregate transaction is then transmitted, which saves a significant amount of gas.

