import { color } from 'framer-motion'

// example theme file
const theme = {
  breakpoints: [
    '30em', // 480px (xs)
    '48em', // 768px (sm)
    '62em', // 992px (md)
    '75em', // 1200px (lg)
  ],
  initialColorModeName: 'light',
  colors: {
    text: '#333', // Keep this as it has good contrast against light backgrounds
    background: '#ddf3e4', // Lighten the background to improve contrast with text
    primary: '#2A3439', // Primary color is fine as it has good contrast
    secondary: '#6C3082', // This is good, but you could consider slightly darkening it for contrast
    highlight: '#e3b567', // Adjusted for better contrast
    link: '#006d5b', // Darken the link color for better contrast
    textLight: '#f9f4e3', // This is good for use against darker backgrounds
    textDark: '#222', // Good contrast against light backgrounds
    backgroundDark: '#1b2a34', // Darkened to enhance contrast in dark mode
    // modes: {
    //   dark: {
    //     text: '#f9f4e3', // Light text for better contrast on dark backgrounds
    //     background: '#1b2a34', // Darkened the background slightly to improve contrast
    //     primary: '#f5f5f4', // A light primary color for good visibility
    //     secondary: '#2A3439', // Maintain this color as it has sufficient contrast
    //     highlight: '#e3b567', // Slight adjustment for accessibility
    //     link: '#8bcf9e', // Link color that stands out without straining the eyes
    //     textLight: '#1b2a34', // Darkened for use on light elements
    //     textDark: '#f9f4e3', // Light text for use on dark backgrounds
    //     backgroundDark: '#1b2a34', // Used for dark sections to maintain consistency
    //   },
    // },
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
      fontSize: [2, 3],
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
      color: 'textLight',
      bg: 'backgroundDark',
      mt: [3, 4],
      px: 3,
      py: 2,
      borderRadius: '25px',
      textTransform: 'uppercase',
      letterSpacing: '0.7px',
      fontSize: '0.9rem',
      '&:hover': {
        bg: 'highlight',
        color: 'backgroundDark',
        borderColor: 'secondary',
        border: '2px',
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
        color: 'textLight',
      },
    },
  },
}

export default theme
