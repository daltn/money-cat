import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Listing from "../components/listing"
import Email from "../components/email"
import BlogListing from "../components/blogListing"

import mcr001Gif from "../images/MCR001.gif"
import mcr001Img from "../images/MCR001_B.jpg"
import mcr001FrontImg from "../images/MCR001_A.jpg"
import mcr002Gif from "../images/MCR002.gif"
import mcr002Img from "../images/MCR002_B.jpg"
import mcr002FrontImg from "../images/MCR002_A.jpg"
import logoText from "../images/logo-invert.png"
import logoTextGif from "../images/logo-invert.gif"
import malik from "../images/malik.jpg"
import tocaFina from "../images/finetouch.jpg"

const IndexPage = () => {
  let logoTextRef = null
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
          <img
            id="logo-text"
            ref={img => (logoTextRef = img)}
            onMouseOver={() => {
              logoTextRef.src = logoTextGif
            }}
            onMouseOut={() => {
              logoTextRef.src = logoText
            }}
            src={logoText}
            alt="money-cat-logo"
            width="200"
          />
          <div className="description">
            <h3>GOOD LUCK</h3>
            Founded by{" "}
            <a className="pics" href="https://soundcloud.com/malikhendricks">
              Malik Hendricks
              <span>
                {" "}
                <img src={malik} alt="malik" width="200" />
              </span>
            </a>
            <br /> &{" "}
            <a className="pics" href="https://soundcloud.com/djfinetouch">
              Fine Touch
              <span>
                {" "}
                <img src={tocaFina} alt="Fine Touch" width="200" />
              </span>
            </a>{" "}
            in 2018
            <br />
            <br />
            <a href="mailto:moneycatrecs@gmail.com">
              <span role="img" aria-label="incoming envelope">
                📨
              </span>{" "}
              Contact Us{" "}
            </a>
          </div>
          {console.log("dev by 👽 https://pulse-code.com/")}
          <Email />
          <Listing />
        </div>
        <div className="column">
          <a href="https://soundcloud.com/moneycatrecs/malik-hendricks-black-chakra-ep-preview">
            <img
              className="label"
              ref={img => (mcr002Ref = img)}
              onMouseOver={() => {
                mcr002Ref.src = mcr002Gif
              }}
              onMouseOut={() => {
                mcr002Ref.src = mcr002FrontImg
              }}
              src={mcr002FrontImg}
              alt="mcr001"
              width="400"
            />
            <img
              className="label"
              src={mcr002Img}
              alt="MCR002-B-Side"
              width="400"
            />
          </a>
          <a href="https://soundcloud.com/moneycatrecs/sets/penthouse-edits-vol-1">
            <img
              className="label"
              ref={img => (mcr001Ref = img)}
              onMouseOver={() => {
                mcr001Ref.src = mcr001Gif
              }}
              onMouseOut={() => {
                mcr001Ref.src = mcr001FrontImg
              }}
              src={mcr001FrontImg}
              alt="mcr001"
              width="400"
            />
            <img
              className="label"
              src={mcr001Img}
              alt="MCR002-B-Side"
              width="400"
            />
          </a>
          <BlogListing />
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
