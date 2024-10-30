import React from 'react'
import { useColorMode, Button } from 'theme-ui'

// Custom hook for toggling color mode
const useToggleColorMode = () => {
  const [colorMode, setColorMode] = useColorMode()
  const toggleColorMode = () => {
    setColorMode(colorMode === 'default' ? 'dark' : 'light')
  }
  return [colorMode, toggleColorMode]
}

const ToggleColorMode = () => {
  const [colorMode, toggleColorMode] = useToggleColorMode()

  return (
    <Button
      onClick={toggleColorMode}
      aria-label={colorMode === 'default' ? 'Activate dark mode' : 'Activate light mode'}
      sx={{ mt: [0, 0] }}
    >
      {colorMode === 'default' ? '🌙' : '💡'}
    </Button>
  )
}

export default ToggleColorMode

// import React from 'react'
// import { Button } from 'theme-ui'
// import { useColorModeContext } from '../../context/ColorModeContext'

// const ToggleColorMode = () => {
//   const { colorMode, toggleColorMode } = useColorModeContext()

//   return (
//     <Button
//       onClick={toggleColorMode}
//       aria-label={colorMode === 'light' ? 'Activate dark mode' : 'Activate light mode'}
//       sx={{ mt: [0, 0] }}
//     >
//       {colorMode === 'light' ? '🌙' : '💡'}
//     </Button>
//   )
// }

// export default ToggleColorMode

