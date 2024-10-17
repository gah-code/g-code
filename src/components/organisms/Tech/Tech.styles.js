import styled from 'styled-components'

const StyledSection = styled.section`
  /* Add styles here */
  position: relative;
  padding: 4rem 2.5rem;

  @media (max-width: 34em) {
    padding: 4rem 0.5rem;
  }

  .item {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    padding: 10px 18px;
    padding-right: 20px;
    cursor: pointer;
    border-top: 4px solid #fff;
    border-bottom: 4px solid #fff;
    border-radius: 20px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 24px;
    row-gap: 32px;
    align-items: center;
  }

  .project {
    border-radius: 30px;
    background-color: blue;
  }

  li {
    color: #222;
    list-style-type: disc;
  }

  .data {
    padding: 32px 0;
    /* padding-top: 10px; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
  }

  .skill-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 2rem;
    max-width: 34rem;
  }

  .skill {
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    text-decoration: none;
    box-shadow: inset 0 0 0 2px #222;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 6px;
    text-transform: uppercase;
    color: #06142e;
    letter-spacing: 0.5px;
  }

  @media (max-width: 59em) {
    .data {
      padding: 0 0.2rem;
    }
  }

  @media (max-width: 34em) {
    .skill-list {
      gap: 5px;
      margin: 1.5rem 0 1rem 0;
    }
    .skill {
      padding: 0.6rem 0.8rem;
      font-size: 0.8rem;
    }

    .data {
      padding: 0;
      align-items: left;
      justify-content: left;
    }
  }

  @media (max-width: 34em) {
    .grid--2-cols-other {
      grid-template-columns: 1fr;
    }

    .data:nth-child(1) {
      grid-row: 2;
    }

    .skill-list {
      margin-top: 1.5rem;
    }
  }
`

export default StyledSection

