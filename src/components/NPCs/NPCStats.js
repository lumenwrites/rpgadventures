import React, { Component } from "react"
import { connect } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { updateNpc } from "../../actions/npcsActions"
import { toggleModal } from "../../actions/utils"

import PowersModal from "./PowersModal"
import Power from './Power'

class NPCStats extends Component {
  renderPowers = () => {
    var { npc } = this.props
    if (!npc.powers) return
    return npc.powers.map((p, i) => (
      <Power power={p} key={i} npc={npc} />
    ))
  }

  updateStat = (value) => {
    var { npc, updateNpc } = this.props
    updateNpc({...npc, ...value})
  }

  render() {
    var { npc } = this.props
    return (
      <>
          <div className="sheet">
              <div className="stats">
		  <div className="stat">
		      <div className="title">Health</div>
		      <input
			type="number"
			className="value"
			value={npc.health}
			onChange={e => {this.updateStat({health:e.target.value})}}
		      />
		  </div>
		  <div className="stat">
		      <div className="title">Energy</div>
		      <input
			type="number"
			className="value"
			value={npc.energy}
			onChange={e => {this.updateStat({energy:e.target.value})}}
		      />
		  </div>
		  <div className="stat">
		      <div className="title">Attack</div>
		      <input
			type="number"
			className="value"
			value={npc.attack}
			onChange={e => {this.updateStat({attack:e.target.value})}}
		      />
		  </div>
              </div>
              <div className="powers">
		  {this.renderPowers()}
		  <div className="card append"
		       onClick={() => { this.props.toggleModal(`powers-${npc.id}`)}}>
		      Add <FontAwesomeIcon icon={["fas", "plus-circle"]}/>
		  </div>
	      </div>
	      <PowersModal npc={npc} />
          </div>
      </>
    )
  }
}

export default connect(({ npcs }) => ({ npcs }), { updateNpc, toggleModal })(NPCStats)
