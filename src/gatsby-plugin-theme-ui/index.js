// example theme file
const theme = {
  colors: {
    text: "#010B13",
    textDark: "#f9f4e3",
    background: "#F2F3F4",
    backgroundDark: "#263147",
    primary: "#2A3439",
    secondary: "#6C3082",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  letterSpacings: {
    heading: "-0.05em",
    caps: "0.1em",
  },
  styles: {
    h1: {
      fontSize: [48, 64],
      fontFamily: "heading",
      fontWeight: "heading",
      color: "text",
      mt: 5,
      mb: [2, 1],
    },
    h2: {
      fontSize: [24, 32],
      fontFamily: "heading",
      fontWeight: "heading",
      color: "text",
      mt: [2, 1],
      mb: 3,
    },
    h3: {
      fontSize: [24],
      fontFamily: "heading",
      fontWeight: "heading",
      color: "text",
      mt: 2,
      mb: 3,
    },
  },

  text: {
    default: {
      color: "text",
      fontSize: [2, 3],
      fontWeight: 500,
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    display: {
      variant: "text.heading",
      fontSize: [5, 6],
      fontWeight: "display",
      letterSpacing: "-0.03em",
      mt: 3,
    },

    caps: {
      textTransform: "uppercase",
      letterSpacing: "caps",
    },

    paragraph: {
      fontSize: [3],
      fontWeight: 400,
    },
  },
  sizes: {
    container: 768,
  },
}

export default theme
