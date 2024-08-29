# My 2025 Website Update: Contentful-Powered Gatsby Site

## g-code Website

Contentful Notes and Code Recipes

## Purpose

This project is designed to showcase a dynamic web application built using Gatsby, a modern static site generator, integrated with Contentful CMS for easy content management. The site features two main content types for now: notes and recipes, each enriched with multimedia elements and categorized through tags for enhanced navigation and user engagement.

## Key Features

### Dynamic Content Management

- Utilizes Contentful CMS to manage and deliver content for notes and code recipes, allowing non-technical users to easily add, modify, and organize content.
- Each content type is equipped with fields such as title, description, cook/prep time for code recipes, and tags shared across both notes and recipes for unified taxonomy.

### Advanced Image Handling

- Implements `gatsby-plugin-image` to ensure optimal image loading with advanced image processing capabilities, providing a fast, responsive, and visually engaging user experience.
- Supports modern image formats like WEBP and AVIF, ensuring high performance and efficiency.

### Responsive and Accessible Design

- Features a fully responsive design with custom CSS as well as Theme UI, ensuring that the website is accessible and functional on a variety of devices and screen sizes.
- Focuses on accessibility best practices to cater to a diverse audience, including those with disabilities.

### SEO and Performance Optimized

- Built with SEO best practices in mind, including proper use of headings, meta tags, and alt text for images to enhance search engine visibility.
- Leverages Gatsby’s static generation capabilities for blazing-fast load times and optimal web performance.

## Technology Stack

- **Frontend:** Gatsby (React-based framework)
- **CMS:** Contentful
- **Styling:** Styled Components, CSS, and Theme UI
- **Hosting/Deployment:** Gatsby, Netlify, Cloudflare

## Goals

- To create an informative and interactive platform where users can easily access a variety of notes and recipes.
- To demonstrate the integration of a headless CMS with a static site generator for efficient content updates and static site benefits.
- To provide a template or case study for similar projects that require dynamic content management combined with the performance benefits of static site generation.

## Project Structure 2025 Draft

```plaintext
g-code/
├── data/
│   └── questions.json
├── src/
│   ├── components/
│   │   └── segments/
│   │   │   └── about.js
│   │   │   └── tech.js
│   │   ├── AllNotes.js
│   │   ├── CardSlider.js
│   │   ├── NotesList.js
│   │   ├── TagsList.js
│   │   ├── TagsListNote.js
│   │   ├── footer.js
│   │   ├── header.js
│   │   ├── hero.js
│   │   ├── layout.js
│   │   ├── seo.js
│   │   └── footer.js
│   ├── data/
│   │   └── config.json
│   ├── gatsby-plugin-theme-ui/
│   │   └── index.js
│   ├── hooks/
│   │   └── use-site-metadata.js
│   ├── pages/
│   │   ├── 404.js
│   │   ├── Header.js
│   │   ├── Loader.js
│   │   ├── Main.js
│   │   ├── StartScreen.js
│   │   └── Quiz.js
│   ├── App.js
│   ├── index.js
│   └── ... (other React components and files)
├── .gitignore
├── .prettierignore
├──  gatsby-config.js
├──  gatsby-node.js
├── .prettierignore
├── package.json
└── README.md

```

## Lighthouse Score

Performance: 90
Accessibility: 97
Best Practices: 100
SEO: 93

## V2 Build

[![Netlify Status](https://api.netlify.com/api/v1/badges/f2ecbaf1-b540-48fd-82fd-b0d389e98a81/deploy-status)](https://app.netlify.com/sites/gilbertaharocode/deploys)

[Node](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/)
