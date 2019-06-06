import React, { Fragment } from "react"

const Email = () => {
  return (
    <Fragment>
      <form
        action="https://dance.us14.list-manage.com/subscribe/post?u=12ab16faa82ae8f5d90b379a4&amp;id=54a7e3652f"
        method="post"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <h3>Stay in touch</h3>
          <input
            type="email"
            name="EMAIL"
            className="email"
            placeholder="email"
          />
          <div id="mce-responses" className="clear">
            <div id="mce-error-response" style={{ display: `none` }} />
            <div id="mce-success-response" style={{ display: `none` }} />
          </div>
          <div
            style={{ position: `absolute`, left: `-5000px` }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_12ab16faa82ae8f5d90b379a4_54a7e3652f"
              tabIndex="-1"
              value=""
            />{" "}
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </Fragment>
  )
}

export default Email
