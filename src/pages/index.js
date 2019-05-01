import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import mcr001 from "../images/MCR001.gif"
import mcr002 from "../images/MCR002.gif"
import logoImg from "../images/logo.jpg"
import logoGif from "../images/logo.gif"

const IndexPage = () => {
  let logo = null
  return (
    <Layout>
      <SEO
        title="Money Cat"
        keywords={[
          `money cat records`,
          `brooklyn`,
          `house music`,
          `disco`,
          `house gifs`,
        ]}
      />
      <section className="row">
        <div
          className="column"
          style={{
            maxWidth: `300px`,
            marginBottom: `1.45rem`,
          }}
        >
          <div id="logo">
            <img
              ref={img => (logo = img)}
              onMouseOver={() => {
                logo.src = logoGif
              }}
              onMouseOut={() => {
                logo.src = logoImg
              }}
              src={logoImg}
              alt="money-cat-logo"
              width="250"
            />
          </div>
        </div>
        <div className="column">
          <img src={mcr001} alt="money-cat-logo" width="400" />
          <h1>
            Fine Touch, Malik Hendricks
            <br />
            Penthouse Edits Vol 1
            <br />
            MCR001
          </h1>
          <img src={mcr002} alt="MCR002" width="400" />
          <h3>Preview</h3>
          <a href="https://soundcloud.com/moneycatrecs">Soundcloud</a>
          <h3>NYC</h3>
          <a href="https://halcyontheshop.com/money-cat-records/">Halcyon</a>
          <h3>Worldwide</h3>
          <a href="https://www.juno.co.uk/labels/Money+Cat+US/">Juno</a>
          <a href="https://www.redeyerecords.co.uk/record-label-releases/20360-money-cat-records">
            Redeye
          </a>
          <a href="https://www.deejay.de/Money_Cat_Records__L36589">
            deejay.de
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
