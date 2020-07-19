import React, { Component } from "react"
import { connect } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Modal from "../components/elements/modal"
import { toggleModal } from "../actions/utils"

import Layout from "../components/layout"
import NPCCard from "../components/NPCs/NPCCard"

import npcs from "../../json/npcs-test.json"

class NPCs extends Component {
  renderCards = () => {
    return npcs.map((c, i) => {
      return <NPCCard npc={c} key={i} />
    })
  }

  render() {
    return (
      <Layout>
        <div className="npcs">{this.renderCards()}</div>
      </Layout>
    )
  }
}

export default NPCs
