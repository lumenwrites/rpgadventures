import React, { Component } from "react"
import { connect } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TextareaAutosize from "react-textarea-autosize"

import { downloadFile } from "../../utils"
import NPCStats from "./NPCStats"
import NPCDescription from "./NPCDescription"
//import spells from '../../../json/spells.json'

import { updateNpc, deleteNpc, createNpc } from "../../actions/npcsActions"

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

  moveToTop = (value) => {
    var { npc } = this.props
    this.props.deleteNpc(npc)
    this.props.createNpc(npc)
  }
  
  downloadNpc = () => {
    var { npc } = this.props
    downloadFile(`${npc.name}.json`, JSON.stringify(npc, null, 2))
  }

  

  render() {
    var { npc, deleteNpc } = this.props
    return (
      <div className="npc">
	  <input type="text"
		 className="name"
		 placeholder="Name"
		 value={npc.name}
		 onChange={(e)=>this.update({name:e.target.value})}/>

	  <div className="dropdown">
	      <div className="menu-handle btn">
		  <FontAwesomeIcon icon={["fas", "bars"]} />				
	      </div>
	      <div className="menu left">
		  <div className="item btn" onClick={this.toggleStats}>
		      {this.state.showStats ? (
			<>
			    <FontAwesomeIcon icon={["fas", "user"]} />
			    Show Decsription
			</>
		      ): (
			<>
			    <FontAwesomeIcon icon={["fas", "chart-line"]} />
			    Show Stats
			</>
		      )}
		  </div>
		  <div className="item btn" onClick={this.downloadNpc}>
		      <FontAwesomeIcon icon={["fas", "download"]} />
		      Download
		  </div>
		  <div className="item btn" onClick={this.moveToTop}>
		      <FontAwesomeIcon icon={["fas", "arrow-up"]} />
		      Move to Top
		  </div>
		  <div className="item btn" onClick={()=>deleteNpc(npc)}>
		      <FontAwesomeIcon icon={["fas", "trash-alt"]} />
		      Delete
		  </div>
	      </div>

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

export default connect(({ }) => ({ }), { updateNpc, deleteNpc, createNpc })(NPCCard)
