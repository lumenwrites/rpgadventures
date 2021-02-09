import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TemplateRedirect = () => {
  if (typeof window !== "undefined") {
    window.location.replace("https://docs.google.com/document/d/15s0bm3G3AnOVxayBSZ8X1RbazSWdB-HXPSFTTCQVWxY/")
  }

  return (
    <Layout>
      <article>
        <a href="https://docs.google.com/document/d/15s0bm3G3AnOVxayBSZ8X1RbazSWdB-HXPSFTTCQVWxY/">Adventure Template</a>
      </article>
    </Layout>
  )
}

export default TemplateRedirect
