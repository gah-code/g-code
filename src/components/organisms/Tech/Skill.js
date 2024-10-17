import React from 'react'

const Skill = ({ skill, color }) => (
  <div className="skill" style={{ backgroundColor: color }}>
    <span>{skill}</span>
  </div>
)

export default Skill

