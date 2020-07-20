import React, { Component } from "react"
import { connect } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Modal from "../components/elements/modal"
import { toggleModal } from "../actions/utils"

import Layout from "../components/layout"

import NPCCard from "../components/NPCs/NPCCard"
import NPCsSubnav from "../components/NPCs/NPCsSubnav"

//import npcs from "../../content/adventure/wild-rat-chase/wild-rat-chase-npcs.json"

class NPCs extends Component {
  renderCards = () => {
    var { npcs } = this.props
    if (!npcs) return //remove it later
    return npcs.map((npc, i) => {
      return <NPCCard npc={npc} key={i} />
    })
  }

  render() {
    var subnav = <NPCsSubnav/>
    return (
      <Layout subnav={subnav}>
          <div className="npcs">{this.renderCards()}</div>
      </Layout>
    )
  }
}

export default connect(({ npcs }) => ({ npcs }), {})(NPCs)
