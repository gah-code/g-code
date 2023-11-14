import React from "react"
import styled from "styled-components"
import { Grid, Heading, sx, Text } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "hsl(260, 20%, 40%)",
  },
  {
    skill: "SCSS",
    level: "advanced",
    color: " hsl(260, 20%, 40%)",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "hsl(260, 20%, 40%)",
  },
  {
    skill: "React",
    level: "advanced",
    color: "hsl(260, 20%, 40%)",
  },
  {
    skill: "Gatsby",
    level: "advanced",
    color: "hsl(260, 20%, 40%)",
  },
  {
    skill: "Theme UI",
    level: "intermediate",
    color: "hsl(260, 20%, 40%)",
  },
  {
    skill: "GraphQL",
    level: "beginner",
    color: "hsl(260, 20%, 40%)",
  },
  {
    skill: "a11y",
    level: "beginner",
    color: "hsl(260, 20%, 40%)",
  },
]

const StyledSection = styled.section`
  padding-bottom: 5rem;
  .title {
    margin-bottom: 0.8rem;
    padding-top: 3.5rem;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    color: #222;
    box-shadow: inset 0 -2.5rem 0 hsl(260, 100%, 80%);
  }

  .description {
    padding: 1rem 0 0.5rem 0;
  }

  .data {
    padding: 32px 0;
    padding-top: 10px;
  }

  .skill-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
    max-width: 32rem;
  }

  .skill {
    font-size: 0.8rem;
    font-weight: 400;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    box-shadow: inset 0 0 0 2px #222;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 6px;
    text-transform: uppercase;
    color: #ffff;
    letter-spacing: 0.4px;
  }
  @media (max-width: 34em) {
    .skill-list {
      gap: 6px;
      margin-top: 10px;
    }
    .skill {
      padding: 0.4rem 0.81rem;
      font-size: 0.7rem;
    }
  }
`

const Hero = ({ content }) => {
  const { frontmatter, rawMarkdownBody } = content
  return (
    <StyledSection id="hero">
      <Heading
        sx={{
          ...theme.styles.h1,
        }}
      >
        {frontmatter.greetings}
        <span role="img" aria-label="emoji">
          {frontmatter.emoji}
        </span>
        <br />
        {frontmatter.title}
      </Heading>
      <Heading
        sx={{
          ...theme.styles.h2,
        }}
      >
        {frontmatter.subtitlePrefix}{" "}
        <span className="highlighted">{frontmatter.subtitleHighlight}</span>
      </Heading>
      <div className="description">{rawMarkdownBody}</div>
      <div className="data">
        <SkillList />
      </div>
    </StyledSection>
  )
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map(skill => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  )
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && ""}
        {level === "intermediate" && ""}
        {level === "advanced" && ""}
      </span>
    </div>
  )
}

export default Hero
