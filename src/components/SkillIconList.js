import React, { useRef, useEffect } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import { Box, Grid, Image } from 'theme-ui'

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
      <Grid
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
        columns={[4, 4, 6, 6]}
        gap={1}
        sx={{
          width: 'fit-content',
          margin: '0 auto',
          padding: ['1rem', '1rem'],
        }}
      >
        {skills.map((skill, index) => (
          <Box
            as={motion.div}
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: skill.color,
              padding: ['0.2rem', '0.3rem'],
              borderRadius: '0.5rem',
            }}
          >
            <Image
              src={`https://skillicons.dev/icons?i=${getSkillIconName(skill.skill)}&theme=dark`}
              alt={skill.skill}
              sx={{
                width: ['3rem', '4rem'],
                height: ['3rem', '4rem'],
              }}
            />
          </Box>
        ))}
      </Grid>
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

