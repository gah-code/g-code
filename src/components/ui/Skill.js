// // src/components/Skill.js
// import React from 'react'

// const Skill = ({ skill }) => {
//   return (
//     <div className="skill">
//       <span>{skill}</span>
//     </div>
//   )
// }

// src/components/Skill.js
// import React from 'react'

// const Skill = ({ skill, color }) => {
//   return (
//     <div className="skill" style={{ backgroundColor: color || 'transparent' }}>
//       <span>{skill}</span>
//     </div>
//   )
// }

// src/components/Skill.js
import React from 'react'

// const Skill = ({ skill, color }) => {
//   return (
//     <div className="skill" style={{ backgroundColor: color || 'transparent' }}>
//       <span>{skill}</span>
//     </div>
//   )
// }

const Skill = ({ skill, color, level }) => {
  return (
    <div className="skill" style={{ backgroundColor: color || 'transparent' }}>
      <span>{skill}</span>
      {level && <span className="level"> - {level}</span>} {/* Only display level if it exists */}
    </div>
  )
}

export default Skill

