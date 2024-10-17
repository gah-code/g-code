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

  // Function to create tag pages
  const createTagPages = (items, templatePath, basePath) => {
    items.forEach((item) => {
      item.content.tags.forEach((tag) => {
        const tagSlug = slugify(tag, { lower: true })
        createPage({
          path: `/${basePath}/${tagSlug}`,
          component: path.resolve(templatePath),
          context: {
            tag: tag,
          },
        })
      })
    })
  }

  // Create tag pages for both recipes and notes
  createTagPages(result.data.allContentfulRecipe.nodes, `src/templates/tag-template.js`, 'tags')
  createTagPages(result.data.allContentfulNote.nodes, `src/templates/note-tag-template.js`, 'notes')
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
