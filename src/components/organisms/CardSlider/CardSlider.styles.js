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

