// src/components/SkillList.js
import React from 'react'
import Skill from './Skill'

const skills = [
  {
    skill: 'HTML',
    level: 'advanced',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'CSS',
    level: 'advanced',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'SCSS',
    level: 'advanced',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Styled Components',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Responsive Design',
    level: 'advanced',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'JavaScript',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: 'rgb(236 201 137)',
  },

  {
    skill: 'AEM',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Astro',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },

  {
    skill: 'SEO',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },

  {
    skill: 'Theme UI',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'GraphQL',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'a11y',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Progressive enhancement',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Design Graph',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'MDX',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },

  {
    skill: 'Mongo DB',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },

  {
    skill: 'Supabase',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Java Content Repository',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'ACS Commons tools',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Photoshop',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  // {
  //   skill: 'Storybook',
  //   level: 'beginner',
  //   color: 'rgb(236 201 137)',
  // },
  {
    skill: 'SSG',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Redux',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },

  {
    skill: 'Next Js',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Tailwind CSS',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
]

// const SkillList = () => {
//   return (
//     <div className="skill-list">
//       {items.map((item, index) => (
//         <Skill key={index} skill={item.skill} />
//       ))}
//     </div>
//   )
// }

// const SkillList = ({ items }) => {
//   if (!items || items.length === 0) return null // Handle case when there are no tools

//   return (
//     <div className="skill-list">
//       {items.map((item, index) => (
//         <Skill key={index} skill={item} /> // Passing the string to Skill
//       ))}
//     </div>
//   )
// }

// const SkillList = ({ items }) => {
//   if (!items || items.length === 0) return null // Handle case when there are no items

//   return (
//     <div className="skill-list">
//       {items.map((item, index) => (
//         <Skill key={index} skill={item.skill ? item.skill : item} />
//       ))}
//     </div>
//   )
// }

// const SkillList = ({ items, skill }) => {
//   if (!items || items.length === 0) return <p>No skills available</p> // Add a fallback for empty arrays

//   return (
//     <div className="skill-list">
//       {items.map((item, index) => (
//         <Skill key={index} skill={typeof item === 'object' ? item.skill : item} />
//       ))}
//     </div>
//   )
// }

// const SkillList = ({ items }) => {
//   if (!items || items.length === 0) return null // Handle case when there are no items

//   return (
//     <div className="skill-list">
//       {items.map((item, index) => (
//         <Skill key={index} skill={item.skill ? item.skill : item} color={item.color} /> // Pass color prop
//       ))}
//     </div>
//   )
// }

// const SkillList = ({ items }) => {
//   console.log(items) // Check what is passed to SkillList
//   if (!items || items.length === 0) return null // Handle case when there are no items

//   return (
//     <div className="skill-list">
//       {items.map((item, index) => (
//         <Skill key={index} skill={item.skill ? item.skill : item} color={item.color} />
//       ))}
//     </div>
//   )
// }

// const SkillList = ({ items }) => {
//   console.log(items) // Check what is passed to SkillList

//   // If no items or the array is empty, render nothing or an alternative message.
//   if (!items || items.length === 0) return <p>No skills or tools available</p>

//   return (
//     <div className="skill-list">
//       {items.map((item, index) => (
//         <Skill
//           key={index}
//           skill={typeof item === 'object' ? item.skill : item} // Check if it's an object or string
//           color={typeof item === 'object' ? item.color : 'transparent'} // Pass color if it's an object
//         />
//       ))}
//     </div>
//   )
// }

// const SkillList = ({ items, skills }) => {
//   // If no items or the array is empty, return a fallback message.
//   if (!items || items.length === 0) return <p>No skills or tools available</p>

//   return (
//     <div className="skill-list">
//       {items.map((item, index) => (
//         <Skill
//           key={index}
//           skill={typeof item === 'object' ? item.skill : item} // Handle objects (skills) and strings (tools)
//           color={typeof item === 'object' ? item.color : null} // Only pass color if it's an object
//           level={typeof item === 'object' ? item.level : null} // Only pass level if it's an object
//         />
//       ))}

//       <div className="skill-list">
//         {skills.map((skill) => (
//           <Skill skill={skill.skill} color={skill.color} level={skill.level} />
//         ))}{' '}
//       </div>
//     </div>
//   )
// }

const SkillList = ({ items, skills }) => {
  // If neither items nor skills are provided, return a fallback message.
  if ((!items || items.length === 0) && (!skills || skills.length === 0)) {
    return <p>No skills or tools available</p>
  }

  return (
    <div className="skill-list">
      {/* Render items if they exist */}
      {items && items.length > 0 && (
        <div className="item-list">
          {items.map((item, index) => (
            <Skill
              key={index}
              skill={typeof item === 'object' ? item.skill : item} // Handle objects (skills) and strings (tools)
              color={typeof item === 'object' ? item.color : null} // Only pass color if it's an object
              level={typeof item === 'object' ? item.level : null} // Only pass level if it's an object
            />
          ))}
        </div>
      )}

      {/* Render skills if they exist */}
      {skills && skills.length > 0 && (
        <div className="skills-list">
          {skills.map((skill, index) => (
            <Skill key={index} skill={skill.skill} color={skill.color} level={skill.level} />
          ))}
        </div>
      )}
    </div>
  )
}

// function SkillList() {
//   return (
//     <div className="skill-list">
//       {skills.map((skill) => (
//         <Skill skill={skill.skill} color={skill.color} level={skill.level} />
//       ))}
//     </div>
//   )
// }

export default SkillList

