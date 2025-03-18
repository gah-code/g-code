/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import React from 'react'
import { ThemeUIProvider } from 'theme-ui'
// import theme from './theme'
import theme from './src/gatsby-plugin-theme-ui'

export const wrapRootElement = ({ element }) => <ThemeUIProvider theme={theme}>{element}</ThemeUIProvider>
