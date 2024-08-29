/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require('path')
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Combined GraphQL query to fetch all necessary data
  const result = await graphql(`
    {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
      allContentfulNote {
        nodes {
          content {
            tags
          }
          description {
            description
          }
          featured
          id
          title
        }
      }
    }
  `)

  if (result.errors) {
    console.error('Error fetching data', result.errors)
    throw new Error('Error fetching data')
  }

  // Create pages for recipes
  result.data.allContentfulRecipe.nodes.forEach((recipe) => {
    recipe.content.tags.forEach((tag) => {
      const tagSlug = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })

  // Create pages for notes
  result.data.allContentfulNote.nodes.forEach((note) => {
    note.content.tags.forEach((tag) => {
      const tagSlug = slugify(tag, { lower: true })
      createPage({
        path: `/noteTags/${tagSlug}`,
        component: path.resolve(`src/templates/note-tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type ConfigJson implements Node {
      siteTitle: String
      socialLinks: [SocialLinkJson]
    }

    type SocialLinkJson implements Node {
      platform: String
      url: String
    }
  `
  createTypes(typeDefs)
}
