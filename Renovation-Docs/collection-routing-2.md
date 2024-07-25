# Collection Page Component

## Overview

The `CollectionPage` component is a React component used in a Gatsby site to display details about a specific collection of items retrieved from Contentful. This component fetches collection data, including items, and renders it in a structured layout.

## Code

```javascript
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const CollectionPage = ({ data }) => {
  const { title, description, items } = data.contentfulCollection

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description.description}</p>
            <a href={`/${item.collection.slug}/${item.slug}`}>Read More</a>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulCollection(slug: { eq: $slug }) {
      title
      description
      items {
        id
        title
        slug
        description {
          description
        }
        collection {
          slug
        }
      }
    }
  }
`

export default CollectionPage
```

# Collection

# Page Component

## Description

### CollectionPage Component

**Purpose:** Displays a specific collection with its items. The component uses Gatsby's GraphQL to fetch data from Contentful and renders the collection details along with a list of items.

### GraphQL Query

The query fetches the following data from Contentful:

- **Collection Title (`title`):** The title of the collection.
- **Collection Description (`description`):** A brief description of the collection.
- **Items (`items`):** An array of items within the collection, including:
  - **`id`:** Unique identifier for the item.
  - **`title`:** The title of the item.
  - **`slug`:** URL-friendly version of the item title.
  - **`description`:** Description of the item.
  - **`collection`:** Reference to the collection, including the collection slug.

### Layout

- **Layout Component:** The `Layout` component wraps the content, providing consistent page styling and structure.

### Rendering

- **Collection Title and Description:** Displayed at the top of the page.
- **Items List:** Each item within the collection is listed with its title and description. Each item includes a link to its detailed page based on the item's slug and its associated collection's slug.

