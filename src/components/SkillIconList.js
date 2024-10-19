import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'

const SkillIconList = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    console.log('Element is in view: ', isInView)
  }, [isInView])

  const skills = [
    { skill: 'HTML', color: 'rgb(236, 201, 137)' },
    { skill: 'CSS', color: 'rgb(236, 201, 137)' },
    { skill: 'SCSS', color: 'rgb(236, 201, 137)' },
    { skill: 'Styled Components', color: 'rgb(236, 201, 137)' },
    { skill: 'JavaScript', color: 'rgb(236, 201, 137)' },
    { skill: 'React', color: 'rgb(236, 201, 137)' },
    { skill: 'Gatsby', color: 'rgb(236, 201, 137)' },
    { skill: 'Astro', color: 'rgb(236, 201, 137)' },
    { skill: 'GraphQL', color: 'rgb(236, 201, 137)' },
    { skill: 'MD', color: 'rgb(236, 201, 137)' },
    { skill: 'Vite', color: 'rgb(236, 201, 137)' },
    { skill: 'NPM', color: 'rgb(236, 201, 137)' },
    { skill: 'WordPress', color: 'rgb(236, 201, 137)' },
    { skill: 'Next Js', color: 'rgb(236, 201, 137)' },
    { skill: 'Webpack', color: 'rgb(236, 201, 137)' },
    { skill: 'Netlify', color: 'rgb(236, 201, 137)' },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <IconGrid
        as={motion.div}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {skills.slice(0, 16).map((skill, index) => (
          <SkillIcon
            as={motion.div}
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <img src={`https://skillicons.dev/icons?i=${getSkillIconName(skill.skill)}&theme=dark`} alt={skill.skill} />
          </SkillIcon>
        ))}
      </IconGrid>
    </motion.div>
  )
}

const getSkillIconName = (skillName) => {
  const skillMappings = {
    HTML: 'html',
    CSS: 'css',
    SCSS: 'sass',
    'Styled Components': 'styledcomponents',
    'Responsive Design': 'responsive',
    JavaScript: 'js',
    React: 'react',
    AEM: 'aem',
    Astro: 'astro',
    SEO: 'seo',
    'Theme UI': 'themeui',
    GraphQL: 'graphql',
    a11y: 'accessibility',
    'Progressive enhancement': 'progressive',
    'Design Graph': 'design',
    MDX: 'mdx',
    'Mongo DB': 'mongodb',
    Supabase: 'supabase',
    'Java Content Repository': 'jcr',
    'ACS Commons tools': 'acscommons',
    Photoshop: 'ps',
    Storybook: 'storybook',
    SSG: 'ssg',
    Redux: 'redux',
    'Next Js': 'nextjs',
    'Tailwind CSS': 'tailwind',
  }

  return skillMappings[skillName] || skillName.toLowerCase().replace(/\s+/g, '')
}

export default SkillIconList

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0.2rem;
  width: fit-content;
  margin: 0 auto;

  @media (max-width: 59em) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 2rem 0;
  }
`

const SkillIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  padding: 0.2rem;
  border-radius: 0.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  @media (max-width: 34em) {
    padding: 0.3rem;
  }
`

