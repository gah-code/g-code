# gilbertcodes website

## Hero

Thanks for stopping by my website!
Currently working full time as a web developer at Robert Half. On the weekends, I work as a photographer both indepently and as a lead at George Street photography a company that specialies in weddings. In those in-between moments, I dive headfirst into the ever-evolving world of front-end technology. You can catch me staying active, building my own projects, and leveling up with courses in React, CSS, and even some hack the box (CTF and Pen test tooling) challenges. Always keeping it exciting and mixing it up!

Links:

- https://www.roberthalf.com/us/en - done

- https://www.georgestreetphoto.com/ - done

## About

From a young age I was influenced by street art, spending hours playing PC games. I later ventured into customizing MySpace pages and explored interests like graffiti and skating. In my journey, I picked up photography, capturing weddings and martial arts events as a freelancer. This need to showcase my work led me to discover the world of web development.

- https://www.youtube.com/watch?v=ESGHKtrlMzs - pc games

- https://www.youtube.com/watch?v=LCG2nuM3RFw - photography

- https://www.youtube.com/watch?v=zAQSRglsD1A - street art

## Web Development

I started with Adobe Muse and then Squarespace, but soon realized that I wanted and needed more control over my website to achieve the level of personalization I desired. This prompted me to explore HTML, CSS, and JavaScript. Ever since, I have been immersed in the world of front-end development, continuously discovering new depths in the process.

## Branding

Headline:

Brand colors: in progress

    text: "#333",
    textDark: "#f9f4e3",
    background: "#ddf3e4",
    backgroundDark: "#263147",
    primary: "#2A3439",
    secondary: "#6C3082",
    highlight: "",
    link: "#28b485",

## Website Content

### Summary

### projects

### Inspo

### photoloop

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
