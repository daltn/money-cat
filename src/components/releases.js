import React from "react"
import BlogListing from "./blogListing"

import mcr001Img from "../images/MCR001_B.jpg"
import mcr001FrontImg from "../images/MCR001_A.jpg"
import mcr002Img from "../images/MCR002_B.jpg"
import mcr002FrontImg from "../images/MCR002_A.jpg"
import mcr003A from "../images/MCR003-A.jpg"
import mcr003B from "../images/MCR003-B.jpg"
const Releases = () => {
  return (
    <div className="column">
      <h1>RELEASES</h1>
      <h1 className="title">MCR003</h1>
      <a
        className="discogs-link"
        href="https://www.discogs.com/Fine-Touch-Penthouse-Edits-Vol-2/release/14395761"
      >
        Fine Touch - Penthouse Edits Vol. 2
      </a>
      <p>
        A1 - Mandjo Faya
        <br />
        A2 - A Natural High
        <br />
        B1 - Pump Party
        <br />
        B2 - Candi Flip
        <br />
      </p>
      <section className="grid">
        <img className="label" src={mcr003A} alt="mcr003 A side" width="300" />
        <img className="label" src={mcr003B} alt="mcr003 B side" width="300" />
      </section>
      <iframe
        title="Fine Touch - Penthouse Edit Vol 2"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/708993118&color=%230a0b0b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
      <h1 className="title">MCR002</h1>
      <a
        className="discogs-link"
        href="https://www.discogs.com/Malik-Hendricks-Black-Chakra/release/13504359"
      >
        Malik Hendricks - Black Chakra
      </a>
      <p>
        A1 - Power
        <br />
        A2 - Humanity
        <br />
        B1 - Black Chakra
        <br />
        B2 - A Circle Forms
        <br />
        B3 - A Circle Forms (John Soultrane Remix)
        <br />
      </p>
      <section className="grid">
        <img
          className="label"
          src={mcr002FrontImg}
          alt="mcr002 A side"
          width="300"
        />
        <img
          className="label"
          src={mcr002Img}
          alt="MCR002-B-Side"
          width="300"
        />
      </section>
      <iframe
        title="MCR 002"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/608145264&color=%23111111&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
      <h1 className="title">MCR001</h1>
      <a
        className="discogs-link"
        href="https://www.discogs.com/Fine-Touch-Malik-Hendricks-Penthouse-Edits-Vol1/release/12555593"
      >
        Fine Touch & Malik Hendricks - Penthouse Edits Vol 1
      </a>
      <p>
        A1 - Fine Touch & Malik Hendricks - Listen
        <br />
        A2 - Fine Touch - Want U 4 Myself
        <br />
        B1 - Fine Touch & Malik Hendricks - Get it Right
        <br />
        B2 - Malik Hendricks - Crying
        <br />
      </p>
      <section className="grid">
        <img className="label" src={mcr001FrontImg} alt="mcr001" width="300" />
        <img
          className="label"
          src={mcr001Img}
          alt="MCR002-B-Side"
          width="300"
        />
      </section>
      <iframe
        title="pentehouse edits vol 1"
        width="100%"
        height="350"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/607786554&color=%23282e2f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
      <h1 className="title">MIXES</h1>
      <BlogListing />
    </div>
  )
}

export default Releases
