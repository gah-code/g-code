import { Box } from 'theme-ui'

import React from 'react'

const ResponsiveSection = (props) => (
  <Box
    as="section"
    sx={{
      maxWidth: props.maxWidth || '120rem', // Default max-width or from props
      padding: props.padding || '3.9rem 2rem', // Default padding or from props

      // Responsive values based on media queries
      '@media screen and (max-width: 84em)': {
        columnGap: props.columnGap84 || '5rem',
        rowGap: props.rowGap84 || '7rem',
      },
      '@media screen and (max-width: 75em)': {
        columnGap: props.columnGap75 || '2rem',
        rowGap: props.rowGap75 || '6.9rem',
      },
      '@media screen and (max-width: 59em)': {
        columnGap: props.columnGap59 || '1rem',
        rowGap: props.rowGap59 || '6rem',
      },
      '@media screen and (max-width: 34em)': {
        padding: props.paddingSmall || '3rem 1.5rem 2rem 1.5rem',
        rowGap: props.rowGap34 || '5rem',
      },
    }}
    {...props}
  />
)

export default ResponsiveSection

