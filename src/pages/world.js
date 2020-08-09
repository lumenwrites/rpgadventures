import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class World extends Component {
  renderImages = () => {
    const { data } = this.props
    return data.allFile.edges.map(({ node }, i) => {
      return (
        <div className="prompt-image"  key={i}>
            <div className="bold">{node.name}</div>
	    {/* <img src={node.childImageSharp.original.src} /> */}
	     <a href={node.childImageSharp.original.src}>
		<Img alt={node.name} fixed={node.childImageSharp.fixed} />
	     </a> 
        </div>
      )
    })
  }
  render() {
    var { mirageWorld } = this.props.data
    return (
      <Layout>
          <article>
	      <h1>World of Mirage</h1>
	      <p>Mirage is set in a colorful and zany fantasy world. Think Disenchantment, Futurama, Gravity Falls, Rick and Morty, Last Kids on Earth. It can have grounded, sincere, dramatic, poignant moments, but it's not meant to be too realistic or taken too seriously.</p>
	      <a href={mirageWorld.childImageSharp.original.src}>
		  <Img fluid={mirageWorld.childImageSharp.fluid} />
	      </a>
	      <h2>Locations</h2>
	      <div className="columns">{this.renderImages()}</div>
          </article>
	  <SEO title={"World of Mirage"} description={"Fantasy Locations"}/>
      </Layout>
    )
  }
}

export default World

export const query = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        relativeDirectory: { eq: "prompts/locations" }
      }
      sort: { order: ASC, fields: id }
    ) {
      edges {
        node {
          name
          childImageSharp {
	    original { src }
            fixed(width: 290) {
	      ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
    mirageWorld: file(relativePath: { eq: "prompts/world/mirage-world.jpg" }) {
      childImageSharp {
	original { src }
        fluid(maxWidth: 620) {
	  ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
