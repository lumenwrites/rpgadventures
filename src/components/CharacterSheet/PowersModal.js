import React, { Component } from 'react'
import { connect } from 'react-redux'


import Modal from '../elements/modal'
import Power from './Power'

class PowersModal extends Component {
  renderCategories = () => {
    var  { powers } = this.props
    /* Powers are passed to it by the appropriate section */
    return powers.map((category,i)=> {
      return (
	<div key={i}>
	    <div className="category-title">{category.title}</div>
	    <div className="powers columns">
		{this.renderPowers(category.powers)}
	    </div>
	</div>
      )
    })
  }

  renderPowers = (powers) => {
    return powers.map((power,i)=> {
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

export default connect(({utils})=>({utils}), {})(PowersModal)



