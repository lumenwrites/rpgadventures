import React, { Component } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class NPCStats extends Component {
  renderPowers = () => {
    var { npc } = this.props
    if (!npc.powers) return
    return npc.powers.map((p, i) => (
      <div className="power" key={i}>
        <div className="title">
          {p.title}
          <div className="level">{p.level}</div>
        </div>
        <div className="description">{p.description}</div>
      </div>
    ))
  }

  render() {
    var { npc, toggleStats } = this.props

    return (
      <>
        <div
          className="show-stats"
          onClick={toggleStats}
        >
          <FontAwesomeIcon icon={["fas", "user"]} />
        </div>
        <div className="name">
          <h1>{npc.name}</h1>
        </div>
        <div className="sheet">
          <div className="stats">
            <div className="stat">
              <div className="title">Health</div>
              <input
                type="number"
                className="value"
                value={10}
                onChange={e => {}}
              />
            </div>
            <div className="stat">
              <div className="title">Energy</div>
              <input
                type="number"
                className="value"
                value={10}
                onChange={e => {}}
              />
            </div>
            <div className="stat">
              <div className="title">Attack</div>
              <input
                type="number"
                className="value"
                value={10}
                onChange={e => {}}
              />
            </div>
          </div>
          <div className="powers">{this.renderPowers()}</div>
        </div>
      </>
    )
  }
}

export default NPCStats
