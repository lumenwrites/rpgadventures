import React, { Component, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Collapsible({ title, children }) {
  const [expanded, setExpanded] = useState(false)
  const header = (
    <div className={`title ${expanded && 'expanded'}`} onClick={() => setExpanded(prev => !prev)}>
      {expanded && <FontAwesomeIcon icon={["fas", "caret-down"]} />}
      {!expanded && <FontAwesomeIcon icon={["fas", "caret-right"]} />}
      {title}
    </div>
  )

  return (
    <div className="collapsible">
      {header}
      {expanded && <div className="body">{children}</div>}
    </div>
  )
}
