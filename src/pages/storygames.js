import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TemplateRedirect = () => {
  if (typeof window !== "undefined") {
    window.location.replace("https://discord.gg/gNrJJNMuyD")
  }

  return (
    <Layout>
      <article>
        <a href="https://discord.gg/gNrJJNMuyD">Join Story Games Discord Community</a>
      </article>
    </Layout>
  )
}

export default TemplateRedirect
