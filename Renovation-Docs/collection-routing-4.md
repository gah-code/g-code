# Gatsby Dynamic Page Creation

## Description

**Purpose:** Automatically creates pages for collections and items based on data fetched from Contentful. This setup uses Gatsby’s `createPages` API in `gatsby-node.js` to generate the required pages during the build process.

## Code Explanation

### Code Snippet

```javascript
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for collections and items
  const result = await graphql(`
    {
      allContentfulCollection {
        nodes {
          slug
        }
      }
      allContentfulItem {
        nodes {
          slug
          collection {
            slug
          }
        }
      }
    }
  `)

  const collections = result.data.allContentfulCollection.nodes
  const items = result.data.allContentfulItem.nodes

  // Create Collection pages
  collections.forEach((collection) => {
    createPage({
      path: `/collections/${collection.slug}`,
      component: path.resolve(`./src/templates/collection.js`),
      context: {
        slug: collection.slug,
      },
    })
  })

  // Create Item pages
  items.forEach((item) => {
    createPage({
      path: `/collections/${item.collection.slug}/${item.slug}`,
      component: path.resolve(`./src/templates/item.js`),
      context: {
        collectionSlug: item.collection.slug,
        itemSlug: item.slug,
      },
    })
  })
}
```

src/
├── templates/
│ ├── collection.js
│ └── item.js
gatsby-node.js

