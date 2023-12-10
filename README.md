<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
 Gilbert A. Haro Website 2024
</h1>

## Lighthouse Score

Performance: 90, Accessibility: 94, Best Practices: 100, SEO: 75, PWA: 80

[![Netlify Status](https://api.netlify.com/api/v1/badges/f2ecbaf1-b540-48fd-82fd-b0d389e98a81/deploy-status)](https://app.netlify.com/sites/ubiquitous-cat-ade1f1/deploys)

# To-Do List: 12 15 23 🎯

- [x] theme ui spacing
- [x] two column grid responsive design
- [x] organize content into categories
- [x] Center theme ui component
- [x] Domain setup first step
- [x] links and gather content (endpoint)
- [x] file organize and clean up
- [x] colors
- [ ] StyledSection component base across all pages - IN PROGRESS
- [ ] theme ui spacing color scheme clean up - IN PROGRESS
- [ ] theme ui typography clean up - IN PROGRESS
- [ ] SEO
- [ ] Footer
- [ ] social links
- [ ] theme ui spacing clean up
- [ ] highlight text styles
- [ ] remove all unused components imports

## Other task

- [ ] Read and update (https://dev.to/supritha/how-to-have-an-awesome-github-profile-1969)
- [ ] Read article for centerd grid/flex and replace theme UI centered container with reusable styled component (<https://moderncss.dev/complete-guide-to-centering-in-css/>)

---

---

# To-Do List : 01 05 24 🎯

- [ ] theme ui spacing for smaller screen optimizations
- [ ] interactivity map and rendering modifcations
- [ ] add starter multimedia content
- [ ] Implement a blog post listing page.
- [ ] slider for blogs or photos
- [ ] graphql update
- [ ] Blog Features - Implement a blog post listing page. Create individual blog post pages. Add tags and categories for each blog post.
- [ ] Netlify funcations -
- [ ] navigation structure
- [ ] update hero content
- [ ] Implement base for gallery page
- [ ] attach Figma to repo

# To-Do List : 01 20 24 🎯

SEO Optimization:

Optimize meta tags (title, description) for search engines.

# Docs - base

Function that takes `data` and `id` as parameters and returns the corresponding content. Here's the simplified code:

```javascript
const findContentById = (data, id, category) => {
  return data[category].edges.find(edge => edge.node.frontmatter.id === id)
    ?.node
}

const heroContent = findContentById(data, 0, "hero")
const aboutContent = findContentById(data, 1, "about")
const updateContent = findContentById(data, 2, "update")
const backgroundContent = findContentById(data, 3, "background")
```

In this code:

1. The `findContentById` function takes `data`, `id`, and `category` as parameters. It uses the `category` parameter to access the appropriate category within the `data` object.

2. Within the function, it uses the `find()` method to search for the content with the specified `id`.

3. The `?.` operator is used to handle cases where no matching content is found, ensuring that you won't run into errors.

4. Finally, you can call `findContentById` for each category to get the corresponding content.

-
