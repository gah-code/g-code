import styled from 'styled-components'

const StyledSection = styled.section`
  max-width: ${(props) => props.maxWidth || '120rem'};
  padding: ${(props) => props.padding || '3.9rem 2rem'};

  @media (max-width: 84em) {
    column-gap: ${(props) => props.columnGap84 || '5rem'};
    row-gap: ${(props) => props.rowGap84 || '7rem'};
  }

  @media (max-width: 75em) {
    column-gap: ${(props) => props.columnGap75 || '2rem'};
    row-gap: ${(props) => props.rowGap75 || '6.9rem'};
  }

  @media (max-width: 59em) {
    column-gap: ${(props) => props.columnGap59 || '1rem'};
    row-gap: ${(props) => props.rowGap59 || '6rem'};
  }

  @media (max-width: 34em) {
    padding: ${(props) => props.paddingSmall || '3rem 1.5rem 2rem 1.5rem'};
    row-gap: ${(props) => props.rowGap34 || '5rem'};
  }
`

export default StyledSection

