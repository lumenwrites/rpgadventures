import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TemplateRedirect = () => {
  if (typeof window !== "undefined") {
    window.location.replace("https://docs.google.com/document/d/1S0KMVB6qyc_MKvXt2SS4-Zn5seT31QfXjYD1Gb9htzM/")
  }

  return (
    <Layout>
      <article>
        <a href="https://docs.google.com/document/d/1S0KMVB6qyc_MKvXt2SS4-Zn5seT31QfXjYD1Gb9htzM/">Brainstorming Template</a>
      </article>
    </Layout>
  )
}

export default TemplateRedirect
