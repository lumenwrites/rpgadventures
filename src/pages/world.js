import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

class World extends Component {
  renderImages = () => {
    const { data } = this.props
    return data.allFile.edges.map(({ node }, i) => {
      return (
        <div className="nobreak" key={i}>
          <span className="bold">{node.name}</span>
          <Img fixed={node.childImageSharp.fixed} />
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
          <img src={mirageWorld.childImageSharp.original.src} />          
          <h2>Locations</h2>
          <div className="columns">{this.renderImages()}</div>
        </article>
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
      sort: { order: DESC, fields: id }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 290) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    mirageWorld: file(relativePath: { eq: "prompts/world/mirage-world.jpg" }) {
      childImageSharp {
	original { src }
        fluid(maxWidth: 620) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
