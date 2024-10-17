import React from 'react'
import Skill from './Skill'

const SkillList = ({ skills }) => (
  <div className="skill-list">
    {skills.map((skill, index) => (
      <Skill key={index} skill={skill.skill} color={skill.color} />
    ))}
  </div>
)

export default SkillList

