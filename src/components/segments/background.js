import React from "react"
import styled from "styled-components"
// import { graphql } from "gatsby"
// import aboutImg from "../../images/about.jpg"
import { Heading, Text } from "theme-ui"
import theme from "../../gatsby-plugin-theme-ui"

const skills = [
  {
    skill: "HTML",
    level: "advanced",
    color: "",
  },
  {
    skill: "CSS",
    level: "advanced",
    color: "",
  },
  {
    skill: "SCSS",
    level: "advanced",
    color: "",
  },
  {
    skill: "Responsive Design",
    level: "advanced",
    color: "",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "",
  },
  {
    skill: "React",
    level: "advanced",
    color: "",
  },
  {
    skill: "Gatsby",
    level: "advanced",
    color: "",
  },
  {
    skill: "Theme UI",
    level: "intermediate",
    color: "",
  },
  {
    skill: "GraphQL",
    level: "beginner",
    color: "",
  },
  {
    skill: "a11y",
    level: "beginner",
    color: "",
  },
  {
    skill: "Node Js",
    level: "beginner",
    color: "",
  },
  {
    skill: "Jamstack",
    level: "beginner",
    color: "",
  },
  {
    skill: "Cyber Security",
    level: "beginner",
    color: "",
  },
  {
    skill: "Photography",
    level: "beginner",
    color: "",
  },
  {
    skill: "Mongo DB",
    level: "beginner",
    color: "",
  },
  {
    skill: "Supabase",
    level: "beginner",
    color: "",
  },
  {
    skill: "Color Theory",
    level: "advanced",
    color: " ",
  },
  {
    skill: "Photoshop",
    level: "advanced",
    color: " ",
  },
]

const StyledSection = styled.section`
  padding: 5rem 0 6rem 0;
  .step-img-box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
  }

  img {
    max-width: 250px;
    border-radius: 10px;
  }

  .grid--2-cols-other {
    grid-template-columns: repeat(1, 2fr 2.1fr);
  }

  .projects {
    width: 444px;
    display: flex;
    flex-direction: column;
    gap: 28px;
    justify-content: center;
  }

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
    background: #7887;
  }

  .project {
    border-radius: 30px;
    background-color: blue;
  }

  ul {
    background-color: red;
  }

  li {
    color: #263147;
    background-color: blue;
    max-width: 30rem;
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
  @media (max-width: 34em) {
    .skill-list {
      gap: 6px;
      margin: 2rem 0 5rem 0;
    }
    .skill {
      padding: 0.5rem 0.9rem;
      font-size: 0.7rem;
    }

    .data {
      padding: 0;
    }
  }

  /* BELOW 544px (Phones) */
  @media (max-width: 34em) {
    .grid--2-cols-other {
      grid-template-columns: 1fr;
    }

    .data:nth-child(1) {
      grid-row: 2;
    }

    .skill-list {
      margin-top: 0;
    }
    /* .step-img-box {
      transform: translateY(2.4rem);
    } */
  }
`

const Background = ({ content }) => {
  const { frontmatter, rawMarkdownBody } = content
  return (
    <StyledSection>
      <div className="container grid-2">
        <div className="data">
          <SkillList />
        </div>
        <div>
          <Heading
            sx={{
              ...theme.styles.h2,
            }}
          >
            {frontmatter.title}
          </Heading>
          <Text sx={theme.text.default}>{frontmatter.text}</Text>
        </div>
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
        {level === "advanced" && "x"}
      </span>
    </div>
  )
}
export default Background
