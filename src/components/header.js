import React from "react"
import { Link } from "gatsby"

import logoImage from "../../static/logo.png"

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Link to="/" className="logo">
          <img src={logoImage} />
          mirage
        </Link>
        <div className="right">
          <Link to="/rules" className="btn">
            Rules
          </Link>
          <Link to="/world" className="btn">
            World
          </Link>
          <div className="dropdown">
            <div className="menu-handle btn">Tools</div>
            <div className="menu">
              <Link to="/character-sheet" className="item btn">
                Character Sheet
              </Link>
              <Link to="/NPCs" className="item btn">
                NPCs
              </Link>
              <Link to="/prompts" className="item btn">
                Prompts
              </Link>
            </div>
          </div>

          <Link to="/guides" className="menu-handle btn">
            Guides
          </Link>

          <Link to="/adventures" className="menu-handle btn">
            Adventures
          </Link>
        </div>
        {/* End right */}
        <div className="clearfix" />
      </div>
      {/* End main wrapper */}
    </header>
  )
}

export default Header
