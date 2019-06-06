import React, { Fragment } from "react"

const Email = () => {
  return (
    <Fragment>
      <form
        action="https://gmail.us20.list-manage.com/subscribe/post?u=918fd4bfc7dee975d283fcb5d&amp;id=2f16a80a16"
        method="post"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <h3>⬇ UPDATES</h3>
          <input
            type="email"
            name="EMAIL"
            className="email"
            placeholder="email"
            required
          />
          <div
            style={{ position: `absolute`, left: `-5000px` }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_12ab16faa82ae8f5d90b379a4_54a7e3652f"
              tabIndex="-1"
            />{" "}
          </div>
          <div className="clear">
            <input
              type="submit"
              value="subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="subscribe"
            />
          </div>
        </div>
      </form>
    </Fragment>
  )
}

export default Email
