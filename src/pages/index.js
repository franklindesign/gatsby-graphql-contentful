import React from "react"
import "../styles/index.scss"
import Layout from "../components/layout"
import Head from "../components/head"
import SEO from "../components/seo"
// import SearchAppBar from "../components/AppBar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Head title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
