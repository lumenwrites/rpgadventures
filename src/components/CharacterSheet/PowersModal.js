import React, { Component } from 'react'
import { connect } from 'react-redux'

import Modal from '../elements/modal'
import Power from './Power'

import ReactTooltip from "react-tooltip"

class PowersModal extends Component {
  state = {
    filterPowers: true,
    rarity: "Any"    
  }
  componentDidUpdate() {
    ReactTooltip.rebuild()
  }

  renderCategories = () => {
    var  { powers } = this.props
    /* Powers are passed to it by the appropriate section */
    return powers.map((category,i)=> {
      var renderedPowers = this.renderPowers(category.powers)
      // If the power was filtered out, renderPowers() will return undefined
      var countRenderedPowers = renderedPowers.filter(p => p).length
      // if all powers have been learned - don't display the empty category
      if (!countRenderedPowers) return
      
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

  renderNoPowersAvailableWarning = () => {
    var title = this.props.name
    if (title === "magicItems") { title = "Magic Items" }
    return (
      <div>
	  <div className="no-powers-available">
	      No more {title} available. Why?
	      <ul>
		  <li>You don't have enough experience.</li>
		  <li>You don't have the prerequisite abilities.</li>
		  <li>You have already learned all available {title}.</li>
	      </ul>
	  </div>
      </div>
    )
  }
  renderFilterPowersToggle = () => {
    if (this.state.filterPowers) {
      return (
	<div className="btn filter-powers-toggle"
	     data-tip={`Filter based on your experience and prerequisite abilities you know.`} 
	     onClick={()=> this.setState({filterPowers: false}) }>
	    Showing only {this.props.name} you can learn. <br/>
	    Show all available {this.props.name}?
	</div>
    )} else {
      return (
	<div className="btn filter-powers-toggle"
	     data-tip={`Filter based on your experience and prerequisite abilities you know.`} 
	     onClick={()=> this.setState({filterPowers: true}) }>
	    Showing all available {this.props.name}. <br/>
	    Show only  {this.props.name} you can learn?
	</div>	    
    )}
  }
  
  filterPowers = (power) => {
    var isPower = power.section == "abilities" || power.section == "spells"
    if (!isPower || !this.state.filterPowers) return false
    var { sheets } = this.props
    var abilities = sheets[0].abilities
    var spells = sheets[0].spells
    var currentXP = sheets[0].experience
    var learnedPowers = abilities.concat(spells)

    /* Hide the power if you don't have enough XP learn it */
    if (power.level && (currentXP < power.level)) return true

    /* Hide already learned abilities/spells (but not items, they can have duplicates) */
    var isAbilityOrSpell = power.section == 'abilities' || power.section == 'spells'
    if (isAbilityOrSpell) {
      var alreadyLearned = learnedPowers.find(p => p.title == power.title)
      if (alreadyLearned) return true
    }

    /* Hide the power if you don't have prerequisite abilities */
    /* (not hiding items, you can have one without being able to use it) */
    var levels = ["Novice", "Initiate", "Adept", "Expert", "Master"]
    if (isAbilityOrSpell && power.level > 1) {
      var prerequisites = learnedPowers.filter(p => {
	var sameSchool = p.category === power.category
	var oneLevelLower = p.level === power.level - 1
	return sameSchool && oneLevelLower
      })
      if (prerequisites.length < 1) return true
    }
    return false    
  }

  filterItems = (power) => {
    /* Filter common items */
    var isItem = power.section == "magicItems" || power.section == "equipment"
    if (!isItem || this.state.rarity === "Any") return false
    if (power.rarity !== this.state.rarity) return true
    return false    
  }
  
  renderPowers = (powers) => {
    return powers.map((power,i)=> {
      /* Hide the power if checkbox is on and it doesn't meet the requirements */
      if (this.filterPowers(power) || this.filterItems(power)) return
      return (
	<Power power={power} key={i} adding/>
      )
    })
  }

  renderRarityFilter = () => {
    var raritiesList = ["Any", "Common", "Uncommon", "Rare", "Legendary", "Supreme"]
    var rarities = raritiesList.map((rarity,i)=>(
      <div className="item btn" key={i} onClick={()=> this.setState({rarity})}>
	  {rarity}
      </div>
    ))
    return (
      <div className="dropdown rarity-filter">
	  <div className="menu-handle btn">
	      Rarity: {this.state.rarity}
	  </div>
	  <div className="menu left">
	      {rarities}
	  </div>
      </div>
    )
  }
  
  render() {
    var { name } = this.props
    var showFilterToggle = name == "abilities" || name == "spells"
    var showRarityFilter = name == "magicItems" || name == "equipment"
    var title = name
    if (name === "magicItems") { title = "Magic Items" }

    var renderedCategories = this.renderCategories()
    // 1 because you always have the blank card
    var countRenderedCategories = renderedCategories.filter(c => c).length 

    return (
      <Modal name={this.props.name} className="powers-modal wide">
	  <div className="title"> Add {title} </div>
	  {showFilterToggle && (this.renderFilterPowersToggle())}
	  {showRarityFilter && this.renderRarityFilter()}
	  <div className="clearfix"/>
	  <hr/>
	  {countRenderedCategories <= 2 && showFilterToggle ?(
	    <>
		{renderedCategories}
		{this.renderNoPowersAvailableWarning()}
	    </>
	  ):(
	    <>
		{renderedCategories}
	    </>
	  )}
      </Modal>
    )
  }
}

export default connect(({sheets, utils})=>({sheets, utils}), {})(PowersModal)



