// import React, { createContext, useContext, useState } from 'react'
// import { ThemeUIProvider } from 'theme-ui'
// import theme from '../gatsby-plugin-theme-ui'

// const ColorModeContext = createContext()

// export const ColorModeProvider = ({ children }) => {
//   const [colorMode, setColorMode] = useState('light')

//   const toggleColorMode = () => {
//     setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
//   }

//   return (
//     <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
//       <ThemeUIProvider theme={{ ...theme, initialColorModeName: colorMode }}>{children}</ThemeUIProvider>
//     </ColorModeContext.Provider>
//   )
// }

// export const useColorModeContext = () => {
//   return useContext(ColorModeContext)
// }

