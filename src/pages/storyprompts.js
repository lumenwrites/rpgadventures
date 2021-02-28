import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Link, graphql } from "gatsby"

//import Img from "gatsby-image"

import ReactMarkdown from 'react-markdown'

import ideas from "../../json/storyprompts/ideas.json"
import elements from "../../json/storyprompts/elements.json"
import goals from "../../json/storyprompts/goals.json"
import difficulties from "../../json/storyprompts/difficulties.json"
import abilities from "../../json/storyprompts/abilities.json"
import items from "../../json/storyprompts/items.json"
import motivations from "../../json/storyprompts/motivations.json"
import connections from "../../json/storyprompts/connections.json"
import tension from "../../json/storyprompts/tension.json"
import complications from "../../json/storyprompts/complications.json"
import villains from "../../json/prompts/villains.json"
import villainMotivations from "../../json/prompts/villain-motivations.json"
import movieCharacters from "../../json/prompts/movie-characters.json"

import action from "../../json/prompts/action-adventure.json"
import exploration from "../../json/prompts/exploration.json"
import social from "../../json/prompts/social.json"
import mystery from "../../json/prompts/mystery.json"
import stealth from "../../json/prompts/stealth.json"
import villainMoves from "../../json/prompts/villain-moves.json"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AdBoxes from "../components/AdBoxes"

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
  renderPromptList = (title, prompts, index) => {
    var prompt = prompts[Math.floor(this.state.seeds[index] * prompts.length)]
    var rendered_prompts = prompts.map((p) => (
      <ReactMarkdown source={p}
        className="prompt-text"
        escapeHtml={false} />
    ))
    return (
      <div className="prompt">
        <span className="prompt-label">{title}:</span>
        <div className="clearfix" />
        <div className="text">
          {rendered_prompts}
        </div>
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
        <div className="prompts storyprompts">
          <h1>Story Prompts</h1>
          <h3>Adventure Idea</h3>
          <p className="smaller">Combine two prompts to create a fun premise. Change one of the elements to something unexpected.</p>
          <div className="two-col-grid">
            {this.renderPromptList("World", ideas)}
            {this.renderPromptList("Fictional elements", elements)}
          </div>
          <h3>Problem/Goal</h3>
          <p className="smaller">Go on a mission to, solve a problem with, help someone else to, or prevent the antagonist from:</p>

          {this.renderPromptList("Goals", goals)}
          <p className="smaller"> Combine goals. Main goal may require 2-3 subgoals to achieve.</p>
          <p className="smaller"> Modify a goal by adding a difficulty.</p>
          {this.renderPromptList("Difficulties/Restrictions", difficulties)}
          <hr />

          <h1>Setting</h1>
          {this.renderImage(this.props.data.locations.edges, 15, true)}
          <Link className="small" to="/prompts/locations">
            [Full list of Settings]
              </Link>
          <div className="clearfix" />
          <hr />

          <h1>Antagonist</h1>
          {this.renderPrompt("Antagonist", villains, 3)}
          {this.renderPrompt("Antagonist's Motivation", villainMotivations, 4)}
          {this.renderPrompt("Antagonist's Personality", movieCharacters, 5)}
          <Link className="small" to="/prompts/antagonist-prompts">
            [Full list of Antagonist Prompts]
              </Link>
          <div className="clearfix" />
          {/* (Adapt them to fantasy and use as an Antagonist. For good characters - make an evil/corrupted version of them.) */}
          {this.renderImage(this.props.data.villains.edges, 16, false)}
          <Link className="small" to="/prompts/villains">
            [Full list of Villain Images]
              </Link>
          <div className="clearfix" />
          <hr />
          <h1>Protagonists (PCs)</h1>
          <h3>Powers</h3>
          <p className="smaller">Special talents, skills, or superpowers your character has. Useful items in your inventory. Don’t limit yourself to these options, use these lists as an inspiration for making up your own.</p>
          <div className="two-col-grid">
            {this.renderPromptList("Abilities", abilities)}
            {this.renderPromptList("Items", items)}
          </div>
          <h3>Motivations</h3>
          <p className="smaller">What do you want from this quest? What are your goals?</p>
          {this.renderPromptList("Motivation", motivations)}
          <h3>Relationship</h3>
          <p className="smaller">Establish a relationship with another PC.</p>
          <p className="smaller">How do you know each other? What do you think about them?</p>
          {this.renderPromptList("Connection", connections)}
          <p className="smaller">What do you want from them? Why do they refuse to give it to you?</p>
          {this.renderPromptList("Tension", tension)}
          <hr />
          <h1>Complications</h1>
          {this.renderPromptList("Midpoint Complication", complications, 2)}
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
