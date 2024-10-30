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
  transition: box-shadow 0.4s ease-out, border 0.3s ease-out;
  border: 2px solid #314237;

  &:hover {
    border: 3px solid #e3b567;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }

  &:active {
    border: 2px solid #e3b567;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

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

