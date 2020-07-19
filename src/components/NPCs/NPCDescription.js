import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NPCDescription = props => {
    var { npc, toggleStats } = props

  return (
    <>
      <div
        className="show-stats"
        onClick={toggleStats}
      >
        <FontAwesomeIcon icon={["fas", "chart-line"]} />
      </div>
      <div className="name">
        <h1>{npc.name}</h1>
      </div>
      <div
        className="character-image"
        style={{ backgroundImage: 'url("' + npc.image + '")' }}
        onClick={() => this.setState({ adding: true })}
      />
      <div className="character-description">{npc.description}</div>
    </>
  )
}
export default NPCDescription
