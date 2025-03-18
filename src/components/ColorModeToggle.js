import React from 'react'
import { useColorMode, Button } from 'theme-ui'

const ColorModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Button
      sx={{
        cursor: 'pointer',
        padding: 2,
        backgroundColor: 'primary',
        color: 'background',
        fontSize: 2,
        borderRadius: '4px',
      }}
      onClick={() => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
      }}
    >
      {colorMode === 'default' ? '🌙' : '💡'} Mode
    </Button>
  )
}

export default ColorModeToggle

