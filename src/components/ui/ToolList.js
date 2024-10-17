import React from 'react'
import Tool from './Tool'
import styled from 'styled-components'

const ToolList = ({ tools }) => {
  // If no tools or the array is empty, return a fallback message.
  if (!tools || tools.length === 0) {
    return <p>No tools available</p>
  }

  return (
    <ToolListComponent className="tool-list">
      {tools.map((tool, index) => (
        <Tool className="tool" key={index} tool={tool} />
      ))}
    </ToolListComponent>
  )
}

const ToolListComponent = styled.div`
  .tool-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 1rem;
    /* max-width: 32rem; */
  }

  .tool {
    /* font-size: 0.9rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: #f4f4f4;
    color: #333;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); */
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0.5rem 2rem;
    text-align: center;
    border-radius: 25px;
    text-decoration: none;
    box-shadow: inset 0 0 0 2px #222;
    transition: all 0.3s;
    display: flex;
    /* align-items: left; */
    margin: 0.5rem 0;
    gap: 6px;
    text-transform: uppercase;
    color: #06142e;
    letter-spacing: 0.5px;
  }

  .single-tool {
    color: #222;
  }

  @media (max-width: 34em) {
    .tool-list {
      gap: 6px;
      /* margin: 1.5rem 0 5rem 0; */
    }
    .tool {
      padding: 0.6rem 0.8rem;
      font-size: 0.7rem;
    }

    .data {
      padding: 0;
    }
  }
`

export default ToolList

