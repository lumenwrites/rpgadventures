import React, { Component } from "react"
import { connect } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TextareaAutosize from "react-textarea-autosize"

import NPCStats from "./NPCStats"
import NPCDescription from "./NPCDescription"
//import spells from '../../../json/spells.json'

import { updateNpc, deleteNpc } from "../../actions/npcsActions"

class NPCCard extends Component {
  state = {
    showStats: false,
    edit: false,
  }

  toggleStats = () => {
    this.setState({showStats:!this.state.showStats})
  }
  update = (value) => {
    var { npc, updateNpc } = this.props
    this.props.updateNpc({...npc, ...value})
  }
  

  render() {
    var { npc, deleteNpc } = this.props
    return (
      <div className="npc">
	  <div className="delete-btn" onClick={()=>deleteNpc(npc)}>
	      <FontAwesomeIcon icon={["fas", "trash-alt"]} />
	  </div>
	  <input type="text"
		 className="name"
		 placeholder="Name"
		 value={npc.name}
		 onChange={(e)=>this.update({name:e.target.value})}/>
	  <div className="show-stats-btn" onClick={this.toggleStats}>
	      {this.state.showStats ? (
		<FontAwesomeIcon icon={["fas", "user"]} />				
	      ): (
		<FontAwesomeIcon icon={["fas", "chart-line"]} />
	      )}
	  </div>
	  <div className="clearfix"/>
          {this.state.showStats ? (
            <NPCStats npc={npc} edit={this.state.edit} />
          ) : (
            <NPCDescription npc={npc} edit={this.state.edit}/>
          )}
      </div>
    )
  }
}

export default connect(({ }) => ({ }), { updateNpc, deleteNpc })(NPCCard)
