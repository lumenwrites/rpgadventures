import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Tooltip from  "../components/elements/Tooltip"

class Test extends Component {
  render() {
    return (
      <Layout>
          <article>
	      <p>Text</p>
	      
	      <div className="btn tooltip" data-tip="Energy Cost (to use)">
		  {5}
	      </div>


	      
          </article>
	  <SEO title={"Test"} description={"Fantasy Locations"}/>
      </Layout>
    )
  }
}

export default Test
