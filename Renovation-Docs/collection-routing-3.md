# ItemPage Component

## Description

### ItemPage Component

**Purpose:** Displays a specific item within a collection. The component uses Gatsby's GraphQL to fetch data from Contentful and renders the item's details including the title, content, and featured image.

### GraphQL Query

The query fetches the following data from Contentful:

- **Title (`title`):** The title of the item.
- **Content (`content`):** The content of the item, formatted as HTML using `childContentfulRichText.html`.
- **Featured Image (`featuredImage`):** The URL of the featured image for the item. The image is fetched using the `fluid.src` property.

**Query Variables:**

- **`collectionSlug`:** The slug of the collection to which the item belongs.
- **`itemSlug`:** The slug of the item to be fetched.

### Layout

- **Layout Component:** The `Layout` component wraps the content, ensuring consistent page styling and structure.

### Rendering

- **Item Title:** Displayed as an `<h1>` at the top of the page.
- **Featured Image:** If a featured image exists, it is displayed using an `<img>` tag with the `src` attribute set to `featuredImage.fluid.src`.
- **Item Content:** Rendered as HTML within a `<div>` using `dangerouslySetInnerHTML`, which displays the `content.childContentfulRichText.html`.

### Example Component Code

```javascript
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const ItemPage = ({ data }) => {
  const { title, content, featuredImage } = data.contentfulItem

  return (
    <Layout>
      <h1>{title}</h1>
      {featuredImage && <img src={featuredImage.fluid.src} alt={title} />}
      <div dangerouslySetInnerHTML={{ __html: content.childContentfulRichText.html }} />
    </Layout>
  )
}

export const query = graphql`
  query ($collectionSlug: String!, $itemSlug: String!) {
    contentfulItem(slug: { eq: $itemSlug }, collection: { slug: { eq: $collectionSlug } }) {
      title
      content {
        childContentfulRichText {
          html
        }
      }
      featuredImage {
        fluid {
          src
        }
      }
    }
  }
`

export default ItemPage
```

