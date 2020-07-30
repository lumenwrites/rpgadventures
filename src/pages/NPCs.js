import React, { Component } from "react"
import { connect } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Modal from "../components/elements/modal"
import { toggleModal } from "../actions/utils"

import Layout from "../components/layout"
import SEO from "../components/seo"

import NPCCard from "../components/NPCs/NPCCard"
import NPCsSubnav from "../components/NPCs/NPCsSubnav"

/* Actions */
import { loadNpcs } from "../actions/npcsActions"

class NPCs extends Component {
  componentDidMount() {
    var npcs = localStorage.getItem("npcs")
    if (npcs && npcs.length) {
      this.props.loadNpcs(JSON.parse(npcs))
    }
  }
  
  renderCards = () => {
    var { npcs } = this.props
    if (!npcs) return //remove it later
    return npcs.map((npc, i) => {
      return <NPCCard npc={npc} key={npc.id} />
    })
  }

  render() {
    var subnav = <NPCsSubnav/>
    return (
      <Layout subnav={subnav}>
          <div className="npcs">{this.renderCards()}</div>
	  <SEO title={"NPCs App"} description={"Create and edit NPC cards."}/>
      </Layout>
    )
  }
}

export default connect(({ npcs }) => ({ npcs }), {loadNpcs})(NPCs)
