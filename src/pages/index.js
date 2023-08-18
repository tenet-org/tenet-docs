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
                                to="./node/tutorials/running-node"
                                header={{
                                    label: "🚀 Launch Your Local Node",
                                }}
                                body={{
                                    label:
                                        "Getting started on Tenet is simple and easy with a local node",
                                }}
                            />

                            <Card
                                to="./tLSD"
                                header={{
                                    label: "☄️ Learn about tLSD",
                                }}
                                body={{
                                    label:
                                        "The TLSDFactory contract is a Solidity smart contract that facilitates the issuance and management of TLSD (Tenet Liquid Staking Derivative) tokens on the Tenet Blockchain.",
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
                                to="./node/category/api"
                                header={{
                                    label: "💻 View Tenet APIs",
                                }}
                                body={{
                                    label:
                                        "Access low-level protocol interfaces to build your custom dapp",
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

                            <Card
                                to="https://github.com/tenet-org"
                                header={{
                                    label: "🛠️ Contribute to Tenet",
                                }}
                                body={{
                                    label:
                                        "Contribute to the thriving ecosystem of Tenet and its open-source initiatives",
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