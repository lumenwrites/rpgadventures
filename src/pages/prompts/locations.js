import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

class World extends Component {
  renderImages = () => {
    const { data } = this.props
    return data.allFile.edges.map(({ node }, i) => {
      return (
        <div className="prompt-image"  key={i}>
            <div className="bold">{node.name}</div>
	    {/* <img src={node.childImageSharp.original.src} /> */}
	    {/* <a href={node.childImageSharp.original.src}> */}
		<Img alt={node.name} fixed={node.childImageSharp.fixed} />
		{/* </a> */}
        </div>
      )
    })
  }
  render() {
    var { mirageWorld } = this.props.data
    return (
      <Layout>
          <article>
	      <h1>Locations</h1>
	      <span className="small">(see more prompts in <Link to="/prompts">Prompts App</Link>)</span>
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
        relativeDirectory: { eq: "prompts/location-prompts" }
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
  }
`
