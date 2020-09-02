import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Link, graphql } from "gatsby"

//import Img from "gatsby-image"

import ReactMarkdown from 'react-markdown'

import HCs from "../../../json/prompts/HCs.json"
import goals from "../../../json/prompts/goals.json"
import complications from "../../../json/prompts/complications.json"
import villains from "../../../json/prompts/villains.json"
import villainMotivations from "../../../json/prompts/villain-motivations.json"
import movieCharacters from "../../../json/prompts/movie-characters.json"

import action from "../../../json/prompts/action-adventure.json"
import exploration from "../../../json/prompts/exploration.json"
import social from "../../../json/prompts/social.json"
import mystery from "../../../json/prompts/mystery.json"
import stealth from "../../../json/prompts/stealth.json"
import villainMoves from "../../../json/prompts/villain-moves.json"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AdBoxes from "../../components/AdBoxes"

class Prompts extends Component {
  state = {
    seeds: Array.from({ length: 20 }, () => Math.random()),
    locationSeed: Math.random(),
    villainSeed: Math.random(),
  }

  renderPrompt = (title, prompts, index) => {
    var prompt = prompts[Math.floor(this.state.seeds[index] * prompts.length)]
    return (
      <div className="prompt">
        <div className="refresh" onClick={() => {
          var seeds = [...this.state.seeds]
          seeds[index] = Math.random()
          this.setState({ seeds })
        }}>
          <FontAwesomeIcon icon={["fas", "dice"]} />
        </div>
        <span className="prompt-label">{title}:</span>
        <div className="clearfix" />
        <ReactMarkdown source={prompt}
          className="text"
          escapeHtml={false} />
      </div>
    )
  }

  renderImage = (images, index, showTitle) => {
    var image = images[Math.floor(this.state.seeds[index] * images.length)].node
    return (
      <div className="prompt image-prompt">
        <div
          className="refresh"
          onClick={() => {
            var seeds = [...this.state.seeds]
            seeds[index] = Math.random()
            this.setState({ seeds })
          }}
        >
          <FontAwesomeIcon icon={["fas", "dice"]} />
        </div>
        <div className="clearfix" />
        {showTitle ? (
          <span className="prompt-label">{image.name}</span>
        ) : (
            <span className="prompt-label">Appearance</span>
          )}
        <div className="clearfix" />
        {/* <Img fixed={image.childImageSharp.fixed} />  */}
        <img src={image.childImageSharp.original.src} />
      </div>
    )
  }

  render() {
    return (
      <Layout>
        <div className="prompts">
          <h1>Adventure Prompts</h1>
          <h3>Adventure Idea</h3>
          {this.renderPrompt("High Concept Idea", HCs, 0)}
          <Link className="small" to="/prompts/high-concept-ideas">
            [Full list of High Concept Ideas]
              </Link>
          <div className="clearfix" />
          {this.renderPrompt("Heroes'/Antagonist's Goal", goals, 1)}
          <Link className="small" to="/prompts/goals">
            [Full list of Goals]
              </Link>
          <div className="clearfix" />
          {this.renderPrompt("Complication", complications, 2)}
          <Link className="small" to="/prompts/complications">
            [Full list of Complications]
              </Link>
          <div className="clearfix" />
          <h3>Antagonist</h3>
          {this.renderPrompt("Antagonist", villains, 3)}
          {this.renderPrompt("Antagonist's Motivation", villainMotivations, 4)}
          {this.renderPrompt("Movie Character (personality)", movieCharacters, 5)}
          <Link className="small" to="/prompts/antagonist-prompts">
            [Full list of Antagonist Prompts]
              </Link>
          <div className="clearfix" />
	      (Adapt them to fantasy and use as an Antagonist. For good characters - make an evil/corrupted version of them.)
	      {this.renderImage(this.props.data.villains.edges, 16, false)}
          <Link className="small" to="/prompts/villains">
            [Full list of Villain Images]
              </Link>
          <div className="clearfix" />
          <h3>Setting</h3>
          {this.renderImage(this.props.data.locations.edges, 15, true)}
          <Link className="small" to="/prompts/locations">
            [Full list of Settings]
              </Link>
          <div className="clearfix" />
          <h3>Challenges</h3>
          {this.renderPrompt("Action/Adventure", action, 6)}
          {this.renderPrompt("Exploration", exploration, 7)}
          {this.renderPrompt("Social/Intrigue", social, 8)}
          {this.renderPrompt("Mystery/Investigation", mystery, 9)}
          {this.renderPrompt("Stealth/Heist", stealth, 10)}
          <Link className="small" to="/prompts/challenges">
            [Full list of Challenges]
              </Link>
          <div className="clearfix" />
          {this.renderPrompt("Villain's Moves", villainMoves, 11)}
          <Link className="small" to="/prompts/villain-moves">
            [Full list of Villain's Moves]
              </Link>
          <div className="clearfix" />
        </div>
        <AdBoxes />
        <SEO title={"Adventure Writing Prompts"}
          description={"Adventure Writing Prompts. Story ideas, villains, settings."} />
      </Layout>
    )
  }
}

export default Prompts

export const query = graphql`
  query {
    locations: allFile(
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
            fixed(width: 400) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
    villains: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        relativeDirectory: { eq: "prompts/villains" }
      }
      sort: { order: ASC, fields: id }
    ) {
      edges {
        node {
          name
          childImageSharp {
	    original { src }
            fixed(width: 400) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`
