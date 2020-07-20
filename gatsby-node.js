const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    /* Create Slug Field */
    var slug = createFilePath({ node, getNode })
    /* Override slug if it's set in the frontmatter */
    if (node.frontmatter.slug) {
      slug = node.frontmatter.slug
    }
    createNodeField({ node, name: `slug`, value: slug})

    /* Create category field */
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)
    createNodeField({node, name: `category`, value: parsedFilePath.dir})
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`./src/templates/blog-post.js`)
  const categoryTemplate = path.resolve("./src/templates/category.js")
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                category
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges

  const categorySet = new Set()

  posts.forEach((post, index) => {
    createPage({
      path: post.node.fields.slug,
      component: postTemplate,
      context: {
        slug: post.node.fields.slug,
      },
    })

    // Generate a list of categories
    categorySet.add(post.node.fields.category)
  })

  // Create category pages
  categorySet.forEach(category => {
    createPage({
      path: `${category}s/`,//${_.kebabCase(category)}
      component: categoryTemplate,
      context: { category }
    })
  })
}
