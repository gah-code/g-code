# Reno Plan: Using Gatsby to Pull Content from `config.json`

## Step 1: Create `config.json`

Create a `config.json` file in the `src/data/` directory of your Gatsby project. This file will contain the content you want to pull into your Gatsby site.

**Example `src/data/config.json`:**

```json
{
  "siteTitle": "My Awesome Site",
  "siteDescription": "This is a description of my awesome site.",
  "author": "John Doe",
  "socialLinks": [
    {
      "platform": "Twitter",
      "url": "https://twitter.com/johndoe"
    },
    {
      "platform": "GitHub",
      "url": "https://github.com/johndoe"
    }
  ]
}
```

# Gatsby Setup for Pulling Content from `config.json`

## Step 1: Install Required Plugins

Run the following command to install the necessary Gatsby plugins:

```bash
npm install gatsby-transformer-json gatsby-source-filesystem

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-json`,
  ],
};

query {
  allConfigJson {
    edges {
      node {
        siteTitle
        siteDescription
        author
        socialLinks {
          platform
          url
        }
      }
    }
  }
}

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allConfigJson {
        edges {
          node {
            siteTitle
            socialLinks {
              platform
              url
            }
          }
        }
      }
    }
  `);

  const config = data.allConfigJson.edges[0].node;

  return (
    <header>
      <h1>{config.siteTitle}</h1>
      <nav>
        <ul>
          {config.socialLinks.map(link => (
            <li key={link.platform}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.platform}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;



```

Draft

my-gatsby-project/
├── node_modules/
├── public/
├── src/
│ ├── components/
│ │ ├── Header.js
│ │ ├── Footer.js
│ │ └── ...
│ ├── data/
│ │ └── config.json
│ ├── pages/
│ │ ├── index.js
│ │ ├── about.js
│ │ └── ...
│ ├── templates/
│ │ ├── collection.js
│ │ ├── item.js
│ │ └── ...
│ └── styles/
│ └── global.css
├── .gitignore
├── gatsby-config.js
├── package.json
└── README.md

