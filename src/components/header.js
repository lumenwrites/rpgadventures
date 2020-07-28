import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//import logoImage from "../../static/logo.png"

const Header = () => {
  return (<StaticQuery
	    query={graphql`
	      query {
		logo: file(relativePath: { eq: "images/logo.png" }) {
		  name
		  childImageSharp {
		    fixed(width: 32) {
		      ...GatsbyImageSharpFixed_withWebp
		    }
		  }
		}
	      }
	    `}
	    render={data => (
	      <header>
		  <div className="wrapper">
		      <Link to="/" className="logo">
			  {/* <img src={logoImage} />  */}
			  <Img className="logo-image"
			       alt={data.logo.name}
			       fixed={data.logo.childImageSharp.fixed} />
			  mirage
		      </Link>
		      <div className="right">

			  <div className="dropdown">
			      <Link to="/rules" className="menu-handle btn">
				  Rules
			      </Link>
			      <div className="menu">
				  <Link to="/rules" className="item btn">
				      For Players
				  </Link>
				  <Link to="/rules-gm" className="item btn">
				      For GMs
				  </Link>
				  <Link to="/pen-and-paper" className="item btn">
				      Pen & Paper
				  </Link>
				  <Link to="/dice-rolling" className="item btn">
				      Dice Rolling
				  </Link>
			      </div>
			  </div>
			  
			  <div className="dropdown">
			      <div className="menu-handle btn">Tools</div>
			      <div className="menu">
				  <Link to="/character-sheet" className="item btn">
				      Character Sheet
				  </Link>
				  <Link to="/NPCs" className="item btn">
				      NPCs
				  </Link>
				  <Link to="/all-powers" className="item btn">
				      All Powers
				  </Link>
				  <Link to="/prompts" className="item btn">
				      Prompts
				  </Link>
			      </div>
			  </div>

			  <Link to="/world" className="btn">
			      World
			  </Link>

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
	    ) }
  />
  )
}

export default Header

