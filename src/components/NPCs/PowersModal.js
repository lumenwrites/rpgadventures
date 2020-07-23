import React, { Component } from 'react'
import { connect } from 'react-redux'

import Modal from '../elements/modal'
import Power from './Power'

import abilities from '../../../json/powers/abilities.json'
import spells from '../../../json/powers/spells.json'
import magicItems from '../../../json/powers/magicItems.json'
import equipment from '../../../json/powers/equipment.json'


const tabs = ["Abilities","Spells","Magic Items", "Equipment"]

class Powers extends Component {
  state = { activeTab: "Spells" }

  renderTabs = () => {
    return tabs.map((t,i) => {
      return (
	<div className={"tab " + (t === this.state.activeTab ? "active" : "")}
	     key={i}
	     onClick={()=> this.setState({activeTab:t}) }>
	    {t}
	</div>
      )
    })
  }

  renderCategories = () => {
    let powerType
    switch (this.state.activeTab) {
      case 'Spells': powerType = spells; break;
      case 'Abilities': powerType = abilities; break;
      case 'Magic Items': powerType = magicItems; break;
      case 'Equipment': powerType = equipment; break;	
    }
    
    /* Powers are passed to it by the appropriate section */
    return powerType.map((category,i)=> {
      return (
	<div key={i}>
	    <div className="category-title">{category.title}</div>
	    <div className="columns">
		{this.renderPowers(category.powers)}
	    </div>
	    <hr/>
	</div>
      )
    })
  }

  
  renderPowers = (powers) => {
    /* console.log(powers) */
    return powers.map((power,i)=> {
      return (
	<Power power={power} key={i} npc={this.props.npc} adding />
      )
    })
  }

  render() {
    var { npc } = this.props    
    return (
      <Modal name={`powers-${npc.id}`} className="powers-modal-npcs wide">
	  <div className="tabs">
	      {this.renderTabs()}
	      <div className="clearfix"/>
	  </div>
	  {this.renderCategories()}
      </Modal>
    )
  }
}

export default connect(({utils})=>({utils}), {})(Powers)



