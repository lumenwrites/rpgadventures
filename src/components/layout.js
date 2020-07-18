import React from "react"

import "../styles/style.scss"

import Header from "./header"

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
