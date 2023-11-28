import React from "react"
import styled from "styled-components"
import aboutImg from "../../images/about.jpg"
import { Heading, Text, sx, Container } from "theme-ui"
import theme from "../../gatsby-plugin-theme-ui"
import { graphql } from "gatsby"

const skills = [
  {
    skill: "HTML",
    level: "advanced",
    color: "#F5D7DB",
  },
  {
    skill: "CSS",
    level: "advanced",
    color: "",
  },
  {
    skill: "SCSS",
    level: "advanced",
    color: " hsl(260, 20%, 40%)",
  },
  {
    skill: "Responsive Design",
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
  {
    skill: "Node Js",
    level: "beginner",
    color: "hsl(260, 20%, 40%)",
  },
  {
    skill: "Jamstack",
    level: "beginner",
    color: "hsl(260, 20%, 40%)",
  },
  {
    skill: "Cyber Security",
    level: "beginner",
    color: "hsl(260, 20%, 40%)",
  },
  {
    skill: "Mongo DB",
    level: "beginner",
    color: "hsl(260, 20%, 40%)",
  },
  {
    skill: "Supabase",
    level: "beginner",
    color: "hsl(260, 20%, 40%)",
  },
  {
    skill: "Photography",
    level: "beginner",
    color: "hsl(260, 20%, 40%)",
  },
  {
    skill: "Color Theory",
    level: "advanced",
    color: " hsl(260, 20%, 40%)",
  },
]

const StyledSection = styled.section`
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
    /* padding: 1rem 2rem; */
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
      margin-top: 1.5rem;
    }
    .skill {
      padding: 0.5rem 0.9rem;
      font-size: 0.7rem;
    }
  }

  /**************************/
  /* BELOW 544px (Phones) */
  /**************************/

  @media (max-width: 34em) {
    .grid--2-cols-other {
      grid-template-columns: 1fr;
    }

    .step-img-box:nth-child(1) {
      grid-row: 2;
    }
    .step-img-box {
      transform: translateY(2.4rem);
    }
  }
`

const Background = ({ content }) => {
  const { frontmatter, rawMarkdownBody } = content
  return (
    <StyledSection>
      <div className="container grid grid--2-cols-other">
        <div className="step-img-box">
          <img src={aboutImg} alt="" />
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
          <div className="data">
            <SkillList />
          </div>
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
      {/* <span>
       {level === "beginner" && ""}
        {level === "intermediate" && ""}
        {level === "advanced" && ""} 
      </span> */}
    </div>
  )
}
export default Background
