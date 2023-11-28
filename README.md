<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
 Gilbert A. Haro Website 2023 - In Progress
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/f2ecbaf1-b540-48fd-82fd-b0d389e98a81/deploy-status)](https://app.netlify.com/sites/ubiquitous-cat-ade1f1/deploys)

# To-Do List: 12 15 23 🎯

- [x] theme ui font responsive design
- [x] two column grid responsive design
- [x] organize content into categories.
- [ ] file organize and clean up
- [ ] Footer styles
- [ ] add multimedia content
- [ ] Read article for centerd grid/flex and replace theme UI centered container with reusable styled component (<https://moderncss.dev/complete-guide-to-centering-in-css/>)
- [ ] color scheme and typography
- [ ] navigation structure
- [ ] interactivity
- [ ] Implement a blog post listing page.
- [ ] Domain update

Other personal task

- [ ] Read and update (https://dev.to/supritha/how-to-have-an-awesome-github-profile-1969)

---

---

# To-Do List : 02 24 🎯

- [ ] Blog Features - Implement a blog post listing page. Create individual blog post pages. Add tags and categories for each blog post.

SEO Optimization:

Optimize meta tags (title, description) for search engines.

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
