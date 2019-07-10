import React from "react"
import BlogListing from "./blogListing"

import mcr001Gif from "../images/MCR001.gif"
import mcr001Img from "../images/MCR001_B.jpg"
import mcr001FrontImg from "../images/MCR001_A.jpg"
import mcr002Gif from "../images/MCR002.gif"
import mcr002Img from "../images/MCR002_B.jpg"
import mcr002FrontImg from "../images/MCR002_A.jpg"

const Releases = () => {
  let mcr001Ref = null
  let mcr002Ref = null

  return (
    <div className="column">
      <h1>RELEASES</h1>
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
          width="300"
        />
        <img
          className="label"
          src={mcr002Img}
          alt="MCR002-B-Side"
          width="300"
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
          width="300"
        />
        <img
          className="label"
          src={mcr001Img}
          alt="MCR002-B-Side"
          width="300"
        />
      </a>
      <BlogListing />
    </div>
  )
}

export default Releases
