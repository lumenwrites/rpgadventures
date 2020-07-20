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
      <div className={`power ${adding ? "adding" : ""}`}
	   onClick={()=> adding ? this.addPower() : null } >
          <div className="title">
	      {!adding &&
	       (<div className="delete-btn" onClick={this.deletePower}>
		   <FontAwesomeIcon icon={["fas", "trash-alt"]} />
	       </div>)}
	      
              {power.title}
              <div className="level">{power.level}</div>
          </div>
          <div className="description">{power.description}</div>
      </div>
    )
  }
}

export default connect(({})=>({}), {updateNpc})(Power)
