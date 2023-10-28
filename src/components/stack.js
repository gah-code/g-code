import React from "react"
import styled from "styled-components"
import { FaReact } from "react-icons/fa"
import { DiJsBadge } from "react-icons/di"
import reactIcon from "../images/react.png"
import sassIcon from "../images/sass.png"
import gatsbyIcon from "../images/gatsby-icon.png"

import { Badge } from "theme-ui"
import { theme } from "../gatsby-plugin-theme-ui"
import { Grid } from "theme-ui"
import { Box } from "theme-ui"

const StyledSection = styled.section`
  display: grid;
  width: 55%;

  padding: 3rem 0 2rem 0;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 34em) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`

const Stack = () => {
  return (
    <>
      <StyledSection>
        <Grid
          sx={{
            display: "grid",
            gridGap: 3,
            gridTemplateColumns: `repeat(auto-fit, minmax(50px, 40px))`,
            paddingBottom: 15.3,
          }}
        >
          <Box bg="primary">
            <img src={reactIcon} alt="" />
          </Box>
          <Box bg="primary">
            <img src={sassIcon} alt="" />
          </Box>
          <Box bg="primary">
            <img src={gatsbyIcon} alt="" />
          </Box>
        </Grid>

        <Grid
          sx={{
            display: "grid",
            gridGap: 3,
            gridTemplateColumns: `repeat(auto-fit, minmax(50px, 40px))`,
          }}
        >
          <Box bg="primary">
            <img src={reactIcon} alt="" />
          </Box>
          <Box bg="primary">
            <img src={sassIcon} alt="" />
          </Box>
          <Box bg="primary">
            <img src={gatsbyIcon} alt="" />
          </Box>
        </Grid>
      </StyledSection>
    </>
  )
}

export default Stack
