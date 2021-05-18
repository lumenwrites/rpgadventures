import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TemplateRedirect = () => {
  if (typeof window !== "undefined") {
    window.location.replace("https://docs.google.com/document/d/1yUqvSokoxJalKhi236xvl4q1cf7EWLVmrfgw9ljGyMI/")
  }

  return (
    <Layout>
      <article>
        <a href="https://docs.google.com/document/d/1yUqvSokoxJalKhi236xvl4q1cf7EWLVmrfgw9ljGyMI/">Adventure Template</a>
      </article>
    </Layout>
  )
}

export default TemplateRedirect
