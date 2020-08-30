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
						adventures
		      </Link>
					<div className="right">

						<div className="dropdown">
							<div className="menu-handle btn">Guides</div>
							<div className="menu">
								<Link to="/guide/"
									className="item btn">
									Brainstorming
				  			</Link>
								<Link to="/guide/adventure-design" className="item btn">
									Adventure Design
				  			</Link>

							</div>
						</div>

						<Link to="/prompts" className="menu-handle btn">
							Prompts
			  		</Link>

						{/* <Link to="/adventures" className="menu-handle btn">
							Adventures
			  		</Link> */}

						<Link to="/about" className="menu-handle btn">
							About
			  		</Link>
					</div>
					{/* End right */}
					<div className="clearfix" />
				</div>
				{/* End main wrapper */}
			</header>
		)}
	/>
	)
}

export default Header

