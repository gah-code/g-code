// theme.js
const theme = {
  breakpoints: [
    '30em', // 480px (xs)
    '48em', // 768px (sm)
    '62em', // 992px (md)
    '75em', // 1200px (lg)
  ],
  initialColorModeName: 'light', // Start with light mode
  useColorSchemeMediaQuery: true, // Optional: Enable automatic color mode detection based on system preferences
  colors: {
    // Default (light) mode
    text: '#333',
    background: '#ddf3e4',
    primary: '#2A3439',
    secondary: '#6C3082',
    highlight: '#e3b567',
    link: '#006d5b',

    modes: {
      // Dark mode
      dark: {
        text: '#f9f4e3', // Ensure text is light on dark background
        background: '#263147', // Dark background
        primary: '#cc7', // Adjusted for dark mode
        secondary: '#9b4aac',
        highlight: '#ffda79',
        link: '#76c7c0',
      },
    },
  },

  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
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
    medium: 1.1,
  },
  letterSpacings: {
    heading: '-0.05em',
    caps: '0.1em',
  },
  styles: {
    h1: {
      fontSize: [48, 72],
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'medium',
      color: 'text',
      mt: 5,
    },
    h2: {
      fontSize: [32, 48],
      fontFamily: 'heading',
      fontWeight: 'heading',
      color: 'text',
      mt: [2, 1],
      mb: 3,
    },
    h3: {
      fontSize: [24, 32],
      fontFamily: 'heading',
      fontWeight: 'heading',
      color: 'text',
      mt: 3,
      mb: 3,
    },
    h4: {
      fontSize: [18, 24],
      fontFamily: 'heading',
      fontWeight: 'heading',
      color: 'text',
      mt: [5, 6],
      mb: 3,
    },
    hr: {
      bg: 'primary',
      border: '1px',
      height: '1px',
      m: 3,
    },
  },
  text: {
    default: {
      color: 'text',
      fontSize: [4, 2],
      fontWeight: 400,
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    display: {
      variant: 'text.heading',
      fontSize: [5, 6],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      mt: 3,
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: 'caps',
    },
    paragraph: {
      fontSize: [3],
      fontWeight: 400,
      mt: 2.5,
    },
  },
  sizes: {
    container: 768,
  },
  links: {
    bold: {
      fontWeight: 'bold',
      color: 'link',
      '&:hover': {
        color: 'highlight',
      },
    },
  },
  buttons: {
    primary: {
      fontSize: 'inherit',
      color: 'background', // Ensure high contrast on light backgrounds
      bg: 'primary',
      mt: [3, 4],
      px: 3,
      py: 2,
      borderRadius: '25px',
      textTransform: 'uppercase',
      letterSpacing: '0.7px',
      fontSize: '0.9rem',
      '&:hover': {
        bg: 'highlight',
        color: 'text',
        borderColor: 'secondary',
        border: '2px solid',
      },
    },
    secondary: {
      ml: 2,
      px: 3,
      py: 2,
      border: '3px solid',
      borderColor: 'primary',
      fontSize: '0.8rem',
      fontWeight: 700,
      borderRadius: '25px',
      textDecoration: 'none',
      transition: 'all 0.3s',
      textTransform: 'uppercase',
      letterSpacing: '0.7px',
      backgroundColor: 'background',
      color: 'text',
      '&:hover': {
        backgroundColor: 'primary',
        color: 'highlight',
      },
    },
  },
}

export default theme
