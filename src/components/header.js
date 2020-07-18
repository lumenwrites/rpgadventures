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
              <Link to="/prompts" className="item btn">
                Prompts
              </Link>
            </div>
          </div>
          <div className="dropdown">
            <div className="menu-handle btn">Guides</div>
            <div className="menu">
              <Link to="/guide/roleplaying-tips" className="item btn">
                Roleplaying Tips
              </Link>
              <Link to="/guide/adventure-design" className="item btn">
                Adventure Design
              </Link>
              <Link to="/guide/improving-combat" className="item btn">
                Improving Combat
              </Link>
            </div>
          </div>

          <div className="dropdown">
            <Link to="/posts" className="menu-handle btn">
              Adventures
            </Link>
            <div className="menu">
              <Link to="/adventure/wild-rat-chase" className="item btn">
                Wild Rat Chase
              </Link>
            </div>
          </div>
        </div>
        {/* End right */}
        <div className="clearfix" />
      </div>
      {/* End main wrapper */}
    </header>
  )
}

export default Header
