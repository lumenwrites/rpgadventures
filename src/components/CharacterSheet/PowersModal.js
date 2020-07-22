import React, { Component } from 'react'
import { connect } from 'react-redux'


import Modal from '../elements/modal'
import Power from './Power'

class PowersModal extends Component {
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
	</div>
      )
    })
  }

  renderPowers = (powers) => {
    var { sheets } = this.props
    var abilities = sheets[0].abilities
    var spells = sheets[0].spells
    var abilitiesAndSpells = abilities.concat(spells)
    return powers.map((power,i)=> {
      var isAbilityOrSpell = power.section == 'abilities' || power.section == 'spells'
      if (isAbilityOrSpell) {
	/* Hide already learned abilities/spells (but not items, they can have duplicates) */
	var alreadyLearned = abilitiesAndSpells.find(p => p.title == power.title)
	if (alreadyLearned) return
	/* Hide the power if it doesn't meet the requirements */
	/* (not hiding items, you can have one without being able to use it */
	if (power.requirements) {
	  var meetsTheRequirements = abilities.find(p => p.title == power.requirements)
	  if (!meetsTheRequirements) return
	}
      }
      return (
	<Power power={power} key={i} adding/>
      )
    })
  }

  render() {
    return (
      <Modal name={this.props.name} className="powers-modal wide">
	  {this.renderCategories()}
      </Modal>
    )
  }
}

export default connect(({sheets, utils})=>({sheets, utils}), {})(PowersModal)



