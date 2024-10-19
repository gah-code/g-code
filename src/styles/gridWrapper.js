import styled from 'styled-components'

const GridWrapper = styled.div`
  display: grid;
  column-gap: ${(props) => props.columnGap || '6.4rem'};
  row-gap: ${(props) => props.rowGap || '9.6rem'};

  &.grid-2 {
    gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }

  &:not(:last-child) {
    margin-bottom: 9.6rem;
  }

  &.grid--2-cols {
    grid-template-columns: repeat(2, 1fr);
  }

  &.grid--3-cols {
    grid-template-columns: repeat(3, 1fr);
  }

  &.grid--4-cols {
    grid-template-columns: repeat(4, 1fr);
  }

  &.grid--center-v {
    align-items: center;
  }

  /**************************/
  /* BELOW 1344px (Smaller desktops) */
  /**************************/
  @media (max-width: 84em) {
    /* Add specific styles for smaller desktops here if needed */
  }

  /**************************/
  /* BELOW 1200px (Landscape Tablets) */
  /**************************/
  @media (max-width: 75em) {
    column-gap: ${(props) => props.columnGapSm || '4.8rem'};
    row-gap: ${(props) => props.rowGapSm || '6.4rem'};
  }

  /**************************/
  /* BELOW 944px (Tablets) */
  /**************************/
  @media (max-width: 59em) {
    &.grid--2-cols,
    &.grid--3-cols,
    &.grid--4-cols {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 34em) {
    row-gap: ${(props) => props.rowGapXs || '4.8rem'};
    padding: 0 1.5rem;
    &.grid--2-cols,
    &.grid--3-cols,
    &.grid--4-cols {
      grid-template-columns: 1fr;
    }
  }
`

export default GridWrapper

