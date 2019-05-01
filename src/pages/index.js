import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import mcr001Gif from "../images/MCR001.gif"
import mcr001Img from "../images/MCR001_B.jpg"
import mcr002Gif from "../images/MCR002.gif"
import mcr002Img from "../images/MCR002_B.jpg"
import logoImg from "../images/logo.jpg"
import logoGif from "../images/logo.gif"

const IndexPage = () => {
  let logo = null
  let mcr001Ref = null
  let mcr002Ref = null
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
          <a href="https://soundcloud.com/moneycatrecs/sets/penthouse-edits-vol-1">
            <img
              className="label"
              ref={img => (mcr001Ref = img)}
              onMouseOver={() => {
                mcr001Ref.src = mcr001Gif
              }}
              onMouseOut={() => {
                mcr001Ref.src = mcr001Img
              }}
              src={mcr001Img}
              alt="mcr001"
              width="400"
            />
          </a>
          <a href="https://soundcloud.com/moneycatrecs/malik-hendricks-black-chakra-ep-preview">
            <img
              className="label"
              ref={img => (mcr002Ref = img)}
              onMouseOver={() => {
                mcr002Ref.src = mcr002Gif
              }}
              onMouseOut={() => {
                mcr002Ref.src = mcr002Img
              }}
              src={mcr002Img}
              alt="mcr001"
              width="400"
            />
          </a>
        </div>
        <div className="column">
          <h1>
            HOT-N-READY
            <br />
            HOUSE-N-DISCO
          </h1>
          <a href="mailto:moneycatrecs@gmail.com">moneycatrecs@gmail.com</a>
          <h3>NYC</h3>
          Human Head
          <br />
          A1
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
