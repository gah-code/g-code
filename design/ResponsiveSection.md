# ResponsiveSection Component Documentation

## Overview

The `ResponsiveSection` component is a flexible, responsive layout section built using [Theme UI](https://theme-ui.com/). It allows you to create a section element (`<section>`) with responsive styles for `column-gap`, `row-gap`, and `padding`, using Theme UI's `sx` prop for theming and customization.

This component is particularly useful for building responsive pages that need to adapt their spacing and layout based on screen sizes, using both props and media queries.

## Component Code

```jsx
/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';
import React from 'react';

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
        padding: props.paddingSmall || '3rem 0.8rem 2rem 0.8rem',
        rowGap: props.rowGap34 || '5rem',
      },
    }}
    {...props}
  />
);

export default ResponsiveSection;
```

## Explanation

### Props

- **`maxWidth`**: The maximum width of the section. Defaults to `120rem` if not specified.
- **`padding`**: The padding inside the section. Defaults to `3.9rem 2rem`.
- **`columnGap84`, `rowGap84`**: The `column-gap` and `row-gap` values for screens with a width of up to `84em`.
- **`columnGap75`, `rowGap75`**: The `column-gap` and `row-gap` values for screens with a width of up to `75em`.
- **`columnGap59`, `rowGap59`**: The `column-gap` and `row-gap` values for screens with a width of up to `59em`.
- **`paddingSmall`, `rowGap34`**: The `padding` and `row-gap` values for screens with a width of up to `34em`.

### Features

1. **HTML Element Type**: By using `as="section"`, the `Box` component functions equivalently to an HTML `<section>`, providing semantic structure.

2. **Responsive Styling Using Media Queries**: Responsive values are added via media queries to adapt `padding`, `column-gap`, and `row-gap` for different screen sizes.

3. **Prop-based Values with Defaults**: Each value accepts a prop or falls back to a default value, ensuring that the component works even without explicit prop inputs.

## Example Usage

To use the `ResponsiveSection` component, you can customize the props to control the responsive behavior and layout spacing:

```jsx
import ResponsiveSection from './ResponsiveSection';

const App = () => (
  <ResponsiveSection
    maxWidth="100rem"
    padding="4rem 2rem"
    columnGap84="4rem"
    rowGap84="6rem"
    columnGap75="1.5rem"
    rowGap75="6rem"
    columnGap59="0.5rem"
    rowGap59="5.5rem"
    paddingSmall="2rem 1rem"
    rowGap34="4rem"
  >
    {/* Your content goes here */}
  </ResponsiveSection>
);

export default App;
```

## Key Advantages of Theme UI Implementation

1. **Flexibility**: Pass props to dynamically change the styling, similar to how styled-components handle props.
2. **Integration with Theme**: Directly integrate with your theme tokens (e.g., `colors`, `space`) for a consistent design system.
3. **Readability**: Styles are co-located with component logic, making it easier to manage and understand.
