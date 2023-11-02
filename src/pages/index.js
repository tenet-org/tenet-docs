import React from "react"
import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import Card from "../components/Card"

function Home() {
    const context = useDocusaurusContext();

    return (
        <Layout title="Homepage" description="Tenet Docs">
            <main>
                <br />
                <h1 align="center" style={{ fontWeight: '750' }}>Welcome to Tenet Docs</h1>
                <section className={styles.features}>
                    <div className="container">
                        <div className="row cards__container">

                            <Card
                                to="./diversified-pos"
                                header={{
                                    label: "📚 Learn about DiPoS",
                                }}
                                body={{
                                    label:
                                        "Tenet allows LSDs from other networks to be restaked to Tenet " +
                                        "in order to secure the network and participate in governance.",
                                }}
                            />

                            <Card
                                to="./tokenomics"
                                header={{
                                    label: "💼 Incentivisation",
                                }}
                                body={{
                                    label:
                                        "Tenet utilises veTenet and native gauges in order to distribute " +
                                        "incentives across the entire Tenet ecosystem. Learn more about our " +
                                        "innovative tokenomics.",
                                }}
                            />

                            <Card
                                to="./tenet-stablecoin-protocol"
                                header={{
                                    label: "💲 Native Stablecoin",
                                }}
                                body={{
                                    label:
                                        "Learn more about Tenet’s native stablecoin LSDC - an over collateralised " +
                                        "stablecoin backed by yield bearing assets and governed by collateral providers.",
                                }}
                            />

                            <Card
                                to="./node/tutorials/running-node"
                                header={{
                                    label: "🚀 Launch Your Tenet Node",
                                }}
                                body={{
                                    label:
                                        "Getting started on Tenet is simple and easy with a local node",
                                }}
                            />

                            <Card
                                to="./node/category/validation"
                                header={{
                                    label: "😎 Become a Validator",
                                }}
                                body={{
                                    label:
                                        "Join Tenet's Proof-of-Stake protocol to help secure the network and earn rewards",
                                }}
                            />


                            <Card
                                to="./node/tutorials/deploy-contract"
                                header={{
                                    label: "🛠️ Launch dApp on Tenet",
                                }}
                                body={{
                                    label:
                                        "Learn everything you need to deploy an EVM-compatible smart contract",
                                }}
                            />

                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default Home