import React, { Component } from "react"
import { connect } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TextareaAutosize from "react-textarea-autosize"

import NPCStats from "./NPCStats"
import NPCDescription from "./NPCDescription"
//import spells from '../../../json/spells.json'

class NPCCard extends Component {
  state = {
    showStats: false,
  }

  toggleStats = () => {
      this.setState({showStats:!this.state.showStats})
  }

  render() {
    var { npc } = this.props
    return (
      <div className="npc">
        {this.state.showStats ? (
          <NPCStats npc={npc} toggleStats={this.toggleStats} />
        ) : (
          <NPCDescription npc={npc} toggleStats={this.toggleStats} />
        )}
      </div>
    )
  }
}

export default NPCCard
