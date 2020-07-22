import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TextareaAutosize from 'react-textarea-autosize'

import { updateSheet } from '../../actions/sheetActions'

class Power extends Component {
  state = { editing: false }
  
  addPower = () => {
    var { sheets, updateSheet, power } = this.props
    var section = power.section
    var updatedSheet = {...sheets[0]}
    power.id = Math.random().toString(36).substring(7)

    /* Don't add if you don't have enough XP */
    if (power.xp && (sheets[0].experience < power.xp)) return 
    /* You can have multiple items, but not abilities/spells*/
    /* If the ability/spell with this title already exists - don't add it */
    if (section == 'abilities' || section == 'spells') {
      var alreadyExists = updatedSheet[section].find(p => p.title === power.title)
      if (alreadyExists) return
    }
    
    // Put spells into updatedSheet.spells, abilities into updatedSheet.abilities, etc.
    updatedSheet[section] = [...updatedSheet[section], power]

    // Subtract the power from current XP
    if (power.xp) { updatedSheet.experience -= power.xp }
    updateSheet(updatedSheet)
  }

  updatePower = () => {
    var { sheets, updateSheet, power } = this.props
    var updatedSheet = {...sheets[0]}
    var section = power.section
    // Update the power with values from the inputs
    var updatedPower = {
      ...power,
      title:this.titleInput.value,
      description:this.descriptionInput.value
    }
    // Find the power by id and replace it with updated one 
    updatedSheet[section] = updatedSheet[section].map(p => p.id === power.id ? updatedPower : p)
    updateSheet(updatedSheet)
    this.setState({editing: false})
  }

  deletePower = () => {
    var { sheets, updateSheet, power } = this.props
    var updatedSheet = {...sheets[0]}
    var section = power.section
    updatedSheet[section] = updatedSheet[section].filter(p => p.id !== power.id)
    updateSheet(updatedSheet)
  }

  renderEditIcons = () => {
    const { adding } = this.props
    if (adding) return // no edit icons when I'm adding powers from PowersModal
    return (
      <div className="edit-icons">
	  <FontAwesomeIcon icon={["fas", "trash-alt"]}
			   onClick={this.deletePower}/>
	  {/*  Switch to edit mode or commit edits */}
	  {this.state.editing ?
	   <FontAwesomeIcon icon={["fas", "check-circle"]}
			    onClick={this.updatePower}/>
	  :
	   <FontAwesomeIcon icon={["fas", "edit"]}
			    onClick={()=>
			      this.setState({editing: true})}/>}
      </div>
    )
  }
  
  render() {
    const { power, adding } = this.props
    /* Show requirements when adding ability/item, or for just the items in the sheet */
    /* (because you can have an item, but don't know how to use it) */
    var isItem = power.section == "magicItems" || power.section == "equipment"
    var displayRequirements = power.requirements && (adding || isItem)
    return (
      <div className={`card ${adding ? "adding" : ""}`}
	   onClick={()=> adding ? this.addPower() : null } >
	  <div className="card-header">
	      {/*  Title */}
	      {this.state.editing ? (
		<input ref={ref => this.titleInput = ref}
		       defaultValue={power.title}/>
	      ) : (
		<span className="card-title">{power.title}</span>
	      )}

	      {/* Show EP cost if it exists */}
	      {power.ep && (
		<div className="level" data-tip="Energy Cost (to use)">
		    <FontAwesomeIcon icon={["fab", "react"]}/>	  
		    {power.ep}
		</div>)}
	      {/* Show XP cost if it exists, and I'm in the PowerModal */}
	      {adding && power.xp && (
		<div className="level" data-tip="Experience Cost (to learn)">
		    <FontAwesomeIcon icon={["fas", "book"]}/>	  		  
		    {power.xp}
		</div>
	      )}

	      {power.bonusDice && (
		<div className="level" data-tip="When used, adds this many Dice to your roll.">
		    <FontAwesomeIcon icon={["fas", "dice"]}/>	  
		    {power.bonusDice}
		</div>)}
	      
	  </div>
	  
	  <hr/>
	  {/* Description */}
	  {this.state.editing ? (
	    <TextareaAutosize
	      className="textarea-description"
	      placeholder={"Description"}
	      ref={ref => this.descriptionInput = ref}
	      defaultValue={power.description}/>
	  ) : (
	    <div className="description">{power.description}</div>
	  )}
	  {(!adding || power.requirements) &&
	  <div className="card-footer">
	      {/* Edit Icons */}
	      {this.renderEditIcons()}

	      {displayRequirements && (
		<><b>Requires: </b>{power.requirements}</>
	      )}
	      <div className="clearfix"/>
	  </div>
	  }
      </div>
    )
  }
}

export default connect(({sheets})=>({sheets}), {updateSheet})(Power)
