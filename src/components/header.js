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

						<Link to="/" className="btn">
							Adventures
			  		</Link>

						<div className="dropdown">
							<div className="menu-handle btn">Resources</div>
							<div className="menu left">
								<Link to="/writers-room" className="item btn">
									Writer's Room
				  			</Link>
								<Link to="/story-games" className="item btn">
									Story Games
				  			</Link>
								<a href="https://perchance.org/adventure-prompts" target="_blank" className="item btn">
									Prompts
				  			</a>
								{/* 							
								<Link to="/adventure-writing-guide" className="item btn">
									Adventure Design
								</Link>
								 */}

								{/*  
								<a target="_blank" href="https://docs.google.com/document/d/1nGwOkRbI80hz8O51-S1R081a1Em98bWg9dj6_zQ2NMY" className="item btn">
									Brainstorming Template
				  			</a>	
								<a target="_blank" href="https://docs.google.com/document/d/15s0bm3G3AnOVxayBSZ8X1RbazSWdB-HXPSFTTCQVWxY" className="item btn">
									Adventure Template
				  			</a>
								<a target="_blank" href="https://docs.google.com/document/d/1ABgu25Y1G7kvcLQmDKm-PwKbGSkeu0q9zrQpaw9eqsw" className="item btn">
									Archive of Ideas
								</a>	
								*/}

							</div>
						</div>

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

