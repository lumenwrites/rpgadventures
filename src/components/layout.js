import React from "react"

import "../styles/style.scss"

import Header from "./header"

/* FontAwesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import ReactTooltip from 'react-tooltip'


library.add(fas, far, fab)

const Layout = ({ location, children, subnav }) => {
  return (
    <>
	<Header />
	{subnav}
	<main>
            <div className="wrapper">{children}</div>
	</main>
	<ReactTooltip type="dark" effect="solid" delayShow={0}
	getContent={() => { return null }}/>
    </>
  )
}

export default Layout
