import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Head from "../components/head"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Head title="404: Not found" />
    <h1>Page not found</h1>
    <p>
      You just hit a route that doesn&#39;t exist... the sadness. Go back{" "}
      <Link to="/">Home</Link>.
    </p>
  </Layout>
)

export default NotFoundPage
