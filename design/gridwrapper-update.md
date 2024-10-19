# GridWrapper Component Update Documentation

## Overview

The `GridWrapper` component has been updated to allow for dynamic control of column and row gaps by specifying values through props. This enhancement provides more flexibility in managing grid layouts, enabling developers to easily adjust the spacing without modifying the core component styles.

## New Props Added

1. **`columnGap`** (optional)
   - **Description**: Specifies the gap between columns in the grid.
   - **Type**: `string`
   - **Default Value**: `'6.4rem'`
   - **Usage Example**: `<GridWrapper columnGap="3rem">`

2. **`rowGap`** (optional)
   - **Description**: Specifies the gap between rows in the grid.
   - **Type**: `string`
   - **Default Value**: `'9.6rem'`
   - **Usage Example**: `<GridWrapper rowGap="5rem">`

3. **`columnGapSm`** (optional)
   - **Description**: Specifies the gap between columns for screens below `1200px` (landscape tablets).
   - **Type**: `string`
   - **Default Value**: `'4.8rem'`
   - **Usage Example**: `<GridWrapper columnGapSm="2rem">`

4. **`rowGapSm`** (optional)
   - **Description**: Specifies the gap between rows for screens below `1200px` (landscape tablets).
   - **Type**: `string`
   - **Default Value**: `'6.4rem'`
   - **Usage Example**: `<GridWrapper rowGapSm="3rem">`

5. **`rowGapXs`** (optional)
   - **Description**: Specifies the gap between rows for screens below `544px` (mobile devices).
   - **Type**: `string`
   - **Default Value**: `'4.8rem'`
   - **Usage Example**: `<GridWrapper rowGapXs="2rem">`

## Responsive Styles

The update also includes responsive gap control, allowing developers to manage gaps at different breakpoints:

- **Below `1200px` (Landscape Tablets)**:
  - Use `columnGapSm` and `rowGapSm` to adjust column and row gaps for smaller desktops and tablets.

- **Below `944px` (Tablets)**:
  - The grid defaults to a single-column layout for classes like `grid--2-cols`, `grid--3-cols`, and `grid--4-cols`.

- **Below `544px` (Mobile Devices)**:
  - Use `rowGapXs` to set the row gap for mobile devices.

## Example Usage

Here is an example of how to use the `GridWrapper` component with the new props:

```jsx
<GridWrapper
  columnGap="3rem"
  rowGap="5rem"
  columnGapSm="2rem"
  rowGapSm="3rem"
  rowGapXs="2rem"
>
  {/* Grid items here */}
</GridWrapper>
```

This example shows how you can specify different gap values for columns and rows, as well as adjust the gaps for smaller screen sizes.

## Backward Compatibility

The updates are fully backward compatible. If the new props are not provided, the `GridWrapper` component will continue to use the default column and row gap values (`6.4rem` for columns and `9.6rem` for rows). This ensures that existing usage of the component remains unaffected by the new changes.

## Benefits

- **Dynamic Styling**: Easily control spacing through props without modifying component styles.
- **Responsive Design**: Adjust gaps for different screen sizes to maintain consistent layout quality across devices.
- **Backward Compatibility**: Existing implementations remain unchanged unless the new props are explicitly used.

## Summary

The enhancement to the `GridWrapper` component offers increased flexibility and responsiveness by enabling dynamic control over column and row gaps. These updates streamline the adjustment of grid layouts, making it simpler for developers to create adaptive and well-spaced UI components.
