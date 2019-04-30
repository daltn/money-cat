import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Money Cat"
      keywords={[`money cat records`, `brooklyn`, `house music`, `house gifs`]}
    />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h3>Preview</h3>
    <a href="https://soundcloud.com/moneycatrecs">Soundcloud</a>
    <h3>NYC</h3>
    <a href="https://halcyontheshop.com/money-cat-records/">Halcyon</a>
    <h3>Purchase</h3>
    <a href="https://www.juno.co.uk/labels/Money+Cat+US/">Juno</a>
    <a href="https://www.redeyerecords.co.uk/record-label-releases/20360-money-cat-records">
      Redeye
    </a>
    <a href="https://www.deejay.de/Money_Cat_Records__L36589">deejay.de</a>
  </Layout>
)

export default IndexPage
