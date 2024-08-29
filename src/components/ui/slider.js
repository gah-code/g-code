import React from 'react'
import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Grid } from 'theme-ui'
import { Box, Heading } from 'theme-ui'
import styled from 'styled-components'
import ImgThree from '../images/about.jpg'
import theme from '../../gatsby-plugin-theme-ui'
import Card from './card'

const Slider = (props) => {
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })
  return (
    <>
      <section className="section-gallery">
        <div className="gallery">
          <ul className="gallery__slider" ref={ref}>
            <li className="gallery__slider-item ">test</li>
            <li className="smol-transitions zoom">
              <img src={ImgThree} alt="" />
            </li>
            <li className="smol-transitions zoom">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, inventore.</p>
            </li>

            <li>test</li>
            <li>test</li>
            <li>
              <img src={ImgThree} alt="" />
            </li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Slider
