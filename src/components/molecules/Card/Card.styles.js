import styled from 'styled-components'

export const CardWrapper = styled.div`
  width: 16.45rem;
  height: 12.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  margin: 2rem 1rem;
  background-color: #314237;
  border-radius: 20px;
  flex-shrink: 0;
  transition: box-shadow 0.3s ease-out;

  .category {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    font-size: 0.7rem;
    color: #fff;
    margin-bottom: 0.2rem;
  }
  .title {
    margin-top: 0.08rem;
    color: #fff;
    text-align: left;
    font-size: 1.2rem;
    line-height: 1.3;
  }
`

