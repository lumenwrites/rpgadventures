import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUp from "../components/elements/SignUp"

const BlogIndex = ({ data, location, pageContext }) => {
  const posts = data.allMdx.edges
  var categoryTitle = pageContext.category
  /* Capitalize */
  categoryTitle = categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1)
  return (
    <Layout location={location}>
	<div className="post-grid">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              let image
              if (node.frontmatter.image) {
		image = <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
              }
              return (
		<Link className="post-box" to={node.fields.slug} key={node.fields.slug}>
		    {image}
		    <section className="description">
			<div className="title">{title}</div>
			<div dangerouslySetInnerHTML={{
			  __html: node.frontmatter.description || node.excerpt,
			}}/>
		    </section>
		</Link>
              )
            })}
	</div>
	<SignUp />	
	<SEO title={`${categoryTitle}s`} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query PostsByCategory($category: String!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { category: { eq: $category }  draft: { eq: false } } }
    ) {
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
