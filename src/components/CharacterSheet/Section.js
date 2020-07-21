import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import Power from './Power'
import PowersModal from './PowersModal'

/* Actions */
import { toggleModal } from '../../actions/utils'

class Section extends Component {
  renderPowers = () => {
    var { sheets, section } = this.props
    var powers = sheets[0][section]
    if (powers.length == 0) return
    return powers.map((power,i) => <Power power={power} key={i} />)
  }
  
  render() {
    var { title, singular, section, powers } = this.props
    return (
      <div className="section">
	  <div className="section-title">{title}</div>
	  <div className="cards">{this.renderPowers()}</div>
	  
	  <div className="card append"
	       onClick={() => {this.props.toggleModal(section)}}>
	      Add {singular}
	      <FontAwesomeIcon icon={["fas", "plus-circle"]}/>
	  </div>

	  <PowersModal name={section} powers={powers} />
      </div>
    )
  }
}

export default connect(({sheets})=>({sheets}), {toggleModal})(Section)
