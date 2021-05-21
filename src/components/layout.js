import React from "react"

import "../styles/style.scss"

import ReactTooltip from "react-tooltip"

import Header from "./header"

/* FontAwesome */
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas, far, fab)

const Layout = ({ location, children, subnav }) => {
  return (
    <>
      <Header />
      {subnav}
      <main className={subnav ? "has-subnav" : ""}>
        <div className="wrapper">{children}</div>
      </main>
      <ReactTooltip
        className="react-tooltip center-text"
        type="dark"
        effect="solid"
        delayShow={0}
        html={true}
      />
    </>
  )
}

export default Layout
