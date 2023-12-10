import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: +1px;
  font-weight: 700;

  a {
    padding-right: 1rem;
  }
`

const Footer = () => (
  <StyledFooter>
    <a
      href="https://github.com/gah-code"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label="External Link"
    >
      <span role="img" aria-label="emoji">
        –
      </span>{" "}
      Visit my GitHub
    </a>
    <a
      href="https://www.linkedin.com/in/gilbert-haro-2b108222b/"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label="External Link"
    >
      <span role="img" aria-label="emoji">
        –
      </span>{" "}
      Visit my Linkedin
    </a>
  </StyledFooter>
)

export default Footer
