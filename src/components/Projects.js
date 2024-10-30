import React, { useState } from 'react'
import styled from 'styled-components'

export const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: #ddf3e4;
  margin-top: 6rem;
`

export const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;

  @media (min-width: 768px) {
    padding-right: 2.5rem;
    padding-left: 2.5rem;
  }

  .section-title {
    padding-right: 2.5rem;
    padding-left: 2.5rem;

    @media (min-width: 768px) {
      padding-right: 0;
      padding-left: 0;
    }
  }
`

export const StyledInterests = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));
  gap: 1rem;
  padding: 0 2.5rem 1.25rem 2.5rem;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  &::after {
    content: '';
    width: 2.5rem;
  }

  @media (min-width: 768px) {
    overflow: visible;
    padding: 0;
  }

  @media (hover: hover) {
    &::-webkit-scrollbar {
      display: block;
      -webkit-appearance: none;
      height: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      border: 0.2rem solid #ddf3e4;
      background-color: #aaa;
    }

    &::-webkit-scrollbar-track {
      background-color: #ddf3e4;
      border-radius: 8px;
    }
  }

  .interest {
    width: 100%;
    max-width: 15.625rem;
    height: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    border: 0.125rem solid #2a3439;
    border-radius: 0.5rem;
    background: #fff;

    .icon {
      margin-right: 0.5rem;
    }
  }
`

export const LoadMoreButton = styled.button`
  display: block;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  background-color: #6c3082;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`

const Interests = ({ interests }) => {
  const [shownInterests, setShownInterests] = useState(6)

  const showMoreItems = () => {
    setShownInterests(shownInterests + 4)
  }

  return (
    <StyledSection>
      <StyledContentWrapper>
        <h3 className="section-title">Interests</h3>
        <StyledInterests>
          {interests.slice(0, shownInterests).map((interest, index) => (
            <div className="interest" key={index}>
              <img className="icon" src={interest.icon} alt={`${interest.name} Icon`} />
              {interest.name}
            </div>
          ))}
        </StyledInterests>
        {shownInterests < interests.length && <LoadMoreButton onClick={showMoreItems}>+ Load more</LoadMoreButton>}
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Interests

