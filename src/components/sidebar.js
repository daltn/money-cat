import React from "react"

import Listing from "../components/listing"
import Email from "../components/email"
import logoText from "../images/logo-invert.png"
import logoTextGif from "../images/logo-invert.gif"
import malik from "../images/malik.jpg"
import tocaFina from "../images/finetouch.jpg"

const Sidebar = () => {
  let logoTextRef = null
  return (
    <section>
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
    </section>
  )
}

export default Sidebar
