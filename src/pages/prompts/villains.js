import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

class World extends Component {
  renderImages = () => {
    const { villains } = this.props.data
    return villains.edges.map(({ node }, i) => {
      return (
        <div className="prompt-image" key={i}>
            <Img alt={node.name} fixed={node.childImageSharp.fixed} />
        </div>
      )
    })
  }
  render() {
    var { villains } = this.props.data
    return (
      <Layout>
          <article>
	      <h1>Villains</h1>
	      <span className="small">
		  (see more prompts in <Link to="/prompts">Prompts App</Link>)
	      </span>
	      <span className="small">
		  (most images were created by
		  {' '}
		  <a href="https://www.deviantart.com/phil-cho/gallery">Phil Cho)</a>
	      </span>
	      <div className="columns">{this.renderImages()}</div>
          </article>
	  <SEO title={"Villain Images"} description={"Fantasy Locations"}/>
      </Layout>
    )
  }
}

export default World

export const query = graphql`
  query {
    villains: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        relativeDirectory: { eq: "prompts/villains" }
      }
      sort: { order: DESC, fields: id }
    ) {
      edges {
        node {
          name
          childImageSharp {
	    original { src }
            fixed(width: 290) {
	      ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
