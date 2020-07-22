import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { updateNpc } from "../../actions/npcsActions"

class Power extends Component {
  addPower = () => {
    var { npc, updateNpc, power } = this.props
    var randomId = Math.random().toString(36).substring(7)
    power.id = randomId
    updateNpc({...npc, powers:[...npc.powers, power]})
  }
  
  deletePower = () => {
    var { npc, updateNpc, power } = this.props
    var updatedPowers = npc.powers.filter(p => p.id !== power.id)
    updateNpc({...npc, powers:updatedPowers})
  }
  
  render() {
    const { power, adding } = this.props
    return (
      <div className={`card ${adding ? "adding" : ""}`}
	   onClick={()=> adding ? this.addPower() : null } >
          <div className="card-header">
	      {!adding && (
		<div className="delete-btn" onClick={this.deletePower}>
		    <FontAwesomeIcon icon={["fas", "trash-alt"]} />
		</div>
	      )}
	      <span className="card-title">{power.title}</span>
          </div>
	  <hr/>
          <div className="description">{power.description}</div>
	  {(!adding || power.ep || power.bonusDice) &&
	   <div className="card-footer">
	       {power.ep && (
		 <div className="level" data-tip="Energy Cost (to use)">
		     <FontAwesomeIcon icon={["fab", "react"]}/>	  
		     {power.ep}
		 </div>)}	  
	       {power.bonusDice && (
		 <div className="level" data-tip="When used, adds this many Dice to your roll.">
		     <FontAwesomeIcon icon={["fas", "dice"]}/>	  
		     {power.bonusDice}
		 </div>)}
	       <div className="clearfix"/>
	   </div>}
      </div>
    )
  }
}

export default connect(({})=>({}), {updateNpc})(Power)
