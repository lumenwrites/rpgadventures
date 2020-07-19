import React from "react"

import "../styles/style.scss"

import Header from "./header"

/* FontAwesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)


const Layout = ({ location, children }) => {
  return (
    <>
      <Header />
      <main>
        <div className="wrapper">{children}</div>
      </main>
    </>
  )
}

export default Layout
