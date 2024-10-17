import React from 'react'
import { CardWrapper } from './Card.styles'

const Card = ({ title, firstTag }) => (
  <CardWrapper>
    <span className="category">{firstTag}</span>
    <h4 className="title">{title}</h4>
  </CardWrapper>
)

export default Card

