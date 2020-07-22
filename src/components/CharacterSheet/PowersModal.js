import React, { Component } from 'react'
import { connect } from 'react-redux'

import ReactTooltip from 'react-tooltip'

import Modal from '../elements/modal'
import Power from './Power'



class PowersModal extends Component {
  state = {
    filterPowers: true
  }

  componentDidUpdate = (prevProps) => {
    ReactTooltip.rebuild()
    if (this.props.utils.showModal !== prevProps.utils.showModal) {
      console.log("[PowersModal] Modal Opened")
    }
  }
  renderCategories = () => {
    var  { powers } = this.props
    /* Powers are passed to it by the appropriate section */
    return powers.map((category,i)=> {
      var renderedPowers = this.renderPowers(category.powers)
      // If the power was filtered out, renderPowers() will return undefined
      var countRenderedPowers = renderedPowers.filter(p => p).length
      // if all powers have been learned - don't display the empty category
      if (!countRenderedPowers) {
	return (<div key={i}>{this.renderNoPowersAvailableWarning(category)}</div>)
      }
      return (
	<div key={i}>
	    <div className="category-title">{category.title}</div>
	    <div className="powers columns">
		{renderedPowers}
	    </div>
	    <hr/>
	</div>
      )
    })
  }

  renderNoPowersAvailableWarning = (category) => {
    return (
      <div>
	  <div className="category-title">{category.title}</div>
	  <div className="no-powers-available">
	      No items available in this category. Why?
	      <ul>
		  <li>You don't have enough experience.</li>
		  <li>You don't have the prerequisite abilities.</li>
		  <li>You have already learned all available {this.props.name}.</li>
	      </ul>
	  </div>
      </div>
    )
  }
  renderFilterPowersToggle = () => {
    if (this.state.filterPowers) {
      return (
	<div className="btn filter-powers-toggle"
	     onClick={()=> this.setState({filterPowers: false}) }>
	    Showing only {this.props.name} you can learn. <br/>
	    Show all available {this.props.name}?
	</div>
    )} else {
      return (
	<div className="btn filter-powers-toggle"
	     onClick={()=> this.setState({filterPowers: true}) }>
	    Showing all available {this.props.name}. <br/>
	    Show only  {this.props.name} you can learn?
	</div>	    
    )}
  }
  
  filterPower = (power) => {
    var { sheets } = this.props
    var abilities = sheets[0].abilities
    var spells = sheets[0].spells
    var currentXP = sheets[0].experience
    var abilitiesAndSpells = abilities.concat(spells)

    /* Hide the power if you don't have enough XP learn it */
    if (power.xp && (currentXP < power.xp)) return true

    /* Hide already learned abilities/spells (but not items, they can have duplicates) */
    var isAbilityOrSpell = power.section == 'abilities' || power.section == 'spells'
    if (isAbilityOrSpell) {
      var alreadyLearned = abilitiesAndSpells.find(p => p.title == power.title)
      if (alreadyLearned) return true
    }

    /* Hide the power if you don't have prerequisite abilities */
    /* (not hiding items, you can have one without being able to use it */
    if (isAbilityOrSpell) {
      if (power.requirements) {
	var meetsTheRequirements = abilities.find(p => p.title == power.requirements)
	if (!meetsTheRequirements) return true
      }
    }
    
    return false
  }
  
  renderPowers = (powers) => {
    return powers.map((power,i)=> {
      /* Hide the power if checkbox is on and it doesn't meet the requirements */
      if (this.state.filterPowers && this.filterPower(power)) return
      return (
	<Power power={power} key={i} adding/>
      )
    })
  }

  render() {
    var { name } = this.props
    var showFilterToggle = name == "abilities" || name == "spells"
    return (
      <Modal name={this.props.name} className="powers-modal wide">
	  {showFilterToggle && (
	    <>
		<div className="title"> Add {this.props.name} </div>
		{this.renderFilterPowersToggle()}
		<div className="clearfix"/>
		<hr/>
	    </>
	  )}
	  {this.renderCategories()}
      </Modal>
    )
  }
}

export default connect(({sheets, utils})=>({sheets, utils}), {})(PowersModal)



