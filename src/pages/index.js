import React from "react"
import Layout from "../components/Layout"
import { Container } from "../components"
import SEO from "../components/seo"


const IndexPage = () => {
    return (
    
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <Container>
            <h1>Hello world</h1>
            </Container>
     
        </Layout>
    )
}

export default IndexPage