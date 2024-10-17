import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Heading, Text, Button } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import GridWrapper from '../../styles/gridWrapper'
import StyledSection from '../../styles/StyledSection'

{
  /* <SkillList items={skills} /> */
}

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

const Tech = () => {
  return (
    <TechSection maxWidth="85rem" padding="4rem 2rem" columnGap84="4rem" rowGap84="6rem">
      <GridWrapper className="grid--2-cols">
        <div className="data">
          {/* <SkillList items={skills} /> */}
          <SkillList skills={skills} />
        </div>
        <div>
          <Heading
            sx={{
              ...theme.styles.h3,
            }}
          >
            Syntax and Systems
          </Heading>
          <Text sx={theme.text.paragraph}>
            With many possible solutions for building modern web applications, developer experience could be considered
            like never before.
          </Text>

          <Text
            sx={{
              mt: 3,
              display: 'block',
              ...theme.text.heading,
            }}
          >
            What I've been digging into this year:
          </Text>
          <ul>
            <li>Headless Content Modeling </li>
            <li>Component driven architecture </li>
            <li>Node types </li>
          </ul>

          <Button variant="secondary" sx={{ mt: 2 }}>
            <Link to="/topics/">Read more</Link>
          </Button>
        </div>
      </GridWrapper>
    </TechSection>
  )
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  )
}

function Skill({ skill, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
    </div>
  )
}

// Preserve the same styles for the .item, .project, and other classes
const TechSection = styled(StyledSection)`
  position: relative;
  padding: 3.5rem 2rem;

  .item {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    padding: 10px 18px;
    padding-right: 20px;
    cursor: pointer;
    border-top: 4px solid #fff;
    border-bottom: 4px solid #fff;
    border-radius: 20px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 24px;
    row-gap: 32px;
    align-items: center;
  }

  .project {
    border-radius: 30px;
    background-color: blue;
  }

  li {
    color: #222;
    list-style-type: disc;
  }

  .data {
    padding: 32px 0;
    padding-top: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
  }

  .skill-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 2rem;
    max-width: 32rem;
  }

  .skill {
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    text-decoration: none;
    box-shadow: inset 0 0 0 2px #222;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 6px;
    text-transform: uppercase;
    color: #06142e;
    letter-spacing: 0.5px;
  }

  @media (max-width: 59em) {
    .data {
      padding: 0 0.2rem;
    }
  }

  @media (max-width: 34em) {
    .skill-list {
      gap: 6px;
      margin: 1.5rem 0 5rem 0;
    }
    .skill {
      padding: 0.6rem 0.8rem;
      font-size: 0.7rem;
    }

    .data {
      padding: 0;
    }
  }

  @media (max-width: 34em) {
    .grid--2-cols-other {
      grid-template-columns: 1fr;
    }

    .data:nth-child(1) {
      grid-row: 2;
    }

    .skill-list {
      margin-top: 1.5rem;
    }
  }
`

export default Tech
