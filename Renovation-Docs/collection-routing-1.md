# Leveraging Collection Routing in Gatsby

## 1. Setup Contentful Content Models

Content models set up in Contentful:

### Collection

- **Title**: Short text
- **Slug**: Short text (URL-friendly version of the collection title)
- **Description**: Long text
- **Featured Image**: Media (Image)
- **Items**: Reference (Item)
- **Publish Date**: Date and time

### Item

- **Title**: Short text
- **Slug**: Short text (URL-friendly version of the item title)
- **Description**: Long text
- **Content**: Rich text
- **Featured Image**: Media (Image)
- **Collection**: Reference (Collection)
- **Publish Date**: Date and time

## 2. Install Necessary Plugins

In your Gatsby project, install the necessary plugins for sourcing data from Contentful and handling GraphQL queries.

```bash
npm install gatsby-source-contentful gatsby-plugin-sharp gatsby-transformer-sharp
```

