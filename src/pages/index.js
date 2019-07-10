import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import Releases from "../components/releases"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Money Cat Records"
        keywords={[
          `money cat records`,
          `brooklyn`,
          `house music`,
          `disco`,
          `techno`,
        ]}
      />
      <section className="row">
        <Sidebar />
        <Releases />
      </section>
    </Layout>
  )
}

export default IndexPage
