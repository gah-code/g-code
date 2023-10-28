import React from "react"
import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { Grid } from "theme-ui"
import { Box, Heading } from "theme-ui"
import styled from "styled-components"
import ImgThree from "../images/about.jpg"
import theme from "../gatsby-plugin-theme-ui"
import Card from "../components/card"

const Slider = props => {
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })
  return (
    <>
      <section className="section-gallery">
        <h1>Title</h1>
        <Heading // apply both the heading styles and the color style
          as="h2"
          mb="2"
          sx={{
            ...theme.text.heading, // Merging the theme text.heading style
            color: "primary", // Adding additional color style
          }}
        >
          Heading 2
        </Heading>
        <div className="gallery">
          <ul className="gallery__slider" ref={ref}>
            <li className="gallery__slider-item ">test</li>
            <li className="smol-transitions zoom">
              <img src={ImgThree} alt="" />
            </li>
            <li className="smol-transitions zoom">
              <h1>Title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, inventore.
              </p>
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
