import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMdx.edges

  return (
    <Layout location={location}>
      <div className="post-grid">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          let image
          if (node.frontmatter.image) {
            image = (<Img fluid={node.frontmatter.image.childImageSharp.fluid}/>)
          }
          return (
            <div className="post-box" key={node.fields.slug}>
              { image }
              <h2>
                <Link to={node.fields.slug}>{title}</Link>
              </h2>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </div>
          )
        })}
      </div>
      <SEO title="All posts" />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
