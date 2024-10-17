import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledSection = styled(motion.section)`
  width: 100%;
  height: auto;
`

export const StyledContentWrapper = styled.div`
  width: 100%;
  padding: 0;
  box-sizing: border-box;

  .section-title {
    font-size: 1.2rem;
    margin: 3rem 0 2rem 2.5rem;
  }
`

export const ArticlesWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 0 1rem;
  margin: -2rem 0 0 0;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

