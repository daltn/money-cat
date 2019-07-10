import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const BLOG_QUERY = graphql`
  query BlogpostListing {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`

const BlogListing = () => (
  <StaticQuery
    query={BLOG_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.frontmatter.slug}>
          <Link to={`/posts${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <div
            dangerouslySetInnerHTML={{
              __html: node.html,
            }}
          />
        </article>
      ))
    }
  />
)

export default BlogListing
