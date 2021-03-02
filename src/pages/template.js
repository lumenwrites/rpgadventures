import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TemplateRedirect = () => {
  if (typeof window !== "undefined") {
    window.location.replace("https://docs.google.com/document/d/1Eg6jXg47vivpyKBfPQnO_SKSV0BIO1RMurGhRSc1rDA/")
  }

  return (
    <Layout>
	<article>
	    <a href="https://docs.google.com/document/d/1Eg6jXg47vivpyKBfPQnO_SKSV0BIO1RMurGhRSc1rDA/">Story Template</a>
	</article>
    </Layout>
  )
}

export default TemplateRedirect
