import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "./layout.js"
import Sidebar from "../components/sidebar"

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data

    const { location } = this.props

    return (
      <Layout location={location}>
        <Sidebar />
        <section className="column">
          <h1>{markdownRemark.frontmatter.title}</h1>
          <div
            style={{ marginTop: `20px` }}
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
          />
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
