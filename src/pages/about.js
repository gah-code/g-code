// /** @jsxImportSource theme-ui */
import React from 'react'
import { Link } from 'gatsby'
import { Heading, Text, Button, Box, Grid } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ResponsiveSection from '../styles/ResponsiveSection'

const movies = ['Whiplash', 'Kill Bill Vol 2', 'King Kong', 'Kung Fu Hustle', '1917', '2001: A Space Odyssey']
const shows = ['Breaking Bad', 'Mr. Robot', 'Everybody Hates Chris']
const books = ['Breaking Through', 'Death of a Salesman', 'The Great Gatsby', 'Ultimate Power']

const About = ({ alt, maxWidth }) => (
  <Layout>
    <ResponsiveSection
      maxWidth="80rem"
      padding="4rem 2rem"
      columnGap84="6rem"
      rowGap84="8rem"
      columnGap75="2rem"
      rowGap75="6.9rem"
      columnGap59="1rem"
      rowGap59="6rem"
      paddingSmall="3rem 1.5rem 2rem 1.5rem"
      rowGap34="5rem"
    >
      <SEO
        title="About Me"
        description="Discover more about my background in web development, design, and creativity. Learn about what movies, shows, and books that inspire me."
        keywords={['About', 'Web Development', 'Movies', 'Books', 'Shows', 'Design', 'Digital Art']}
        article={false}
        pathname="/about"
      />

      {/* Intro Section */}
      <Box
      // as="section"
      // sx={{
      //   maxWidth: '80rem',
      //   padding: '4rem 2rem',
      //   mx: 'auto',
      //   '@media screen and (max-width: 84em)': {
      //     columnGap: '6rem',
      //     rowGap: '8rem',
      //   },
      //   '@media screen and (max-width: 75em)': {
      //     columnGap: '4rem',
      //     rowGap: '6.9rem',
      //   },
      //   '@media screen and (max-width: 59em)': {
      //     columnGap: '4rem',
      //     rowGap: '6rem',
      //   },
      //   '@media screen and (max-width: 34em)': {
      //     rowGap: '5rem',
      //   },
      // }}
      >
        <Heading as="h2" sx={{ variant: 'styles.h2', color: 'primary', mb: 3 }}>
          A little about me
        </Heading>
        <Text sx={{ ...theme.text.paragraph, mb: 4 }}>
          Looking back, I realize that my childhood hobbies were the early beginnings of my current career. From
          doodling in my notebook to creating homemade comic books and playing around with different fonts, I've always
          loved finding ways to express my creativity. My interest in digital art took off during the MySpace days,
          eventually leading me to pursue professional photography. However, I needed a platform to showcase my work.
          That's when I stumbled upon the world of web development. It provided a stage for my photography and opened up
          so many opportunities, allowing me to bring together all my passions and skills. Today, as a Web Developer, I
          combine my love for design, typography, digital art, branding, and photography to craft unique and impactful
          digital experiences.
        </Text>
      </Box>

      {/* Movies, Shows, and Books Section */}
      <Grid columns={[1, 1, 3, 3]} gap={4} sx={{ maxWidth: '85rem', margin: '0 auto', padding: '2rem 0.1rem' }}>
        {[
          { title: 'Movies', items: movies },
          { title: 'Shows', items: shows },
          { title: 'Books', items: books },
        ].map((category, index) => (
          <Box
            key={index}
            sx={{
              padding: 3,
              borderRadius: '8px',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
              backgroundColor: 'background',
              color: 'text',
              '&:hover': {
                backgroundColor: 'highlight',
              },
            }}
          >
            <Heading as="h3" sx={{ variant: 'styles.h3', mb: 3 }}>
              {category.title}
            </Heading>
            <Box as="ul" sx={{ listStyleType: 'disc', paddingLeft: 4, margin: 0 }}>
              {category.items.map((item, idx) => (
                <Text
                  as="li"
                  key={idx}
                  sx={{
                    variant: 'text.default',
                    mb: 2,
                    lineHeight: 'body',
                    color: 'textDark',
                    fontSize: [2, 3],
                  }}
                >
                  {item}
                </Text>
              ))}
            </Box>
          </Box>
        ))}
      </Grid>

      {/* Update Section */}
      <UpdateSection />
    </ResponsiveSection>
  </Layout>
)

const UpdateSection = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Heading as="h2" sx={{ variant: 'styles.h2', color: 'primary', mb: 3 }}>
        Update: 9/1/24
      </Heading>
      <Text sx={{ variant: 'text.paragraph' }}>
        These last few months, I've let my inner DJ take control, working as a web developer at Robert Half, learning
        how a team progressively scales a CMS globally, and digging into a mix of web application technologies after
        hours. I am exploring different design systems that pique my interest, putting my love for elegant composition
        and expressive patterns at the forefront.
      </Text>
      <Text sx={{ padding: 2, variant: 'text.paragraph' }}>
        <Link to="/" sx={{ variant: 'links.bold' }}>
          Back
        </Link>
      </Text>
    </Box>
  )
}

export default About

// const About = () => (
//   <Layout>
//     <StyledSection maxWidth="80rem" padding="4rem 2rem" columnGap84="6rem" rowGap84="8rem">
//       <SEO
//         title="About Me"
//         description="Discover more about my background in web development, design, and creativity. Learn about what movies, shows, and books that inspire me."
//         keywords={['About', 'Web Development', 'Movies', 'Books', 'Shows', 'Design', 'Digital Art']}
//         article={false}
//         pathname="/about"
//       />
//       <Box sx={{ maxWidth: '85rem', margin: '0 auto', padding: '2rem 0.1rem' }}>
//         <Grid columns={[1, 2, 2, 1]} gap={4} sx={{ marginBottom: '2rem' }}>
//           {/* Intro Section */}
//           <Box sx={{ gridColumn: ['1 / -1', '1 / span 3'], padding: 3 }}>
//             <Heading as="h2" sx={{ variant: 'styles.h2', color: 'primary', mb: 3 }}>
//               A little about me
//             </Heading>
//             <Text sx={{ ...theme.text.paragraph, mb: 4 }}>
//               Looking back, I realize that my childhood hobbies were the early beginnings of my current career. From
//               doodling in my notebook to creating homemade comic books and playing around with different fonts, I've
//               always loved finding ways to express my creativity. My interest in digital art took off during the MySpace
//               days, eventually leading me to pursue professional photography. However, I needed a platform to showcase
//               my work. That's when I stumbled upon the world of web development. It provided a stage for my photography
//               and opened up so many opportunities, allowing me to bring together all my passions and skills. Today, as a
//               Web Developer, I combine my love for design, typography, digital art, branding, and photography to craft
//               unique and impactful digital experiences.
//             </Text>
//           </Box>

//           {/* Movies, Shows, and Books Section */}
//           {[
//             { title: 'Movies', items: movies },
//             { title: 'Shows', items: shows },
//             { title: 'Books', items: books },
//           ].map((category, index) => (
//             <Box
//               key={index}
//               sx={{
//                 padding: 3,
//                 borderRadius: '8px',
//                 boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
//                 backgroundColor: 'background',
//                 color: 'text',
//                 '&:hover': {
//                   backgroundColor: 'highlight',
//                 },
//               }}
//             >
//               <Heading as="h3" sx={{ variant: 'styles.h3', mb: 3 }}>
//                 {category.title}
//               </Heading>
//               <Box as="ul" sx={{ listStyleType: 'disc', paddingLeft: 4, margin: 0 }}>
//                 {category.items.map((item, idx) => (
//                   <Text
//                     as="li"
//                     key={idx}
//                     sx={{
//                       variant: 'text.default',
//                       mb: 2,
//                       lineHeight: 'body',
//                       color: 'textDark',
//                       fontSize: [2, 3],
//                     }}
//                   >
//                     {item}
//                   </Text>
//                 ))}
//               </Box>
//             </Box>
//           ))}

//           {/* Update Section */}
//           <Box sx={{ gridColumn: ['1 / -1', '1 / span 3'], padding: 2 }}>
//             <Heading as="h2" sx={{ variant: 'styles.h2', color: 'primary', mb: 3 }}>
//               Update: 9/1/24
//             </Heading>
//             <Text sx={{ ...theme.text.paragraph }}>
//               These last few months, I've let my inner DJ take control, working as a web developer at Robert Half,
//               learning how a team progressively scales a CMS globally, and digging into a mix of web application
//               technologies after hours. I am exploring different design systems that pique my interest, putting my love
//               for elegant composition and expressive patterns at the forefront.
//             </Text>
//           </Box>
//         </Grid>
//         <Text sx={{ padding: 2, ...theme.text.paragraph }}>
//           <Link to="/" sx={{ variant: 'links.bold' }}>
//             Back
//           </Link>
//         </Text>
//       </Box>
//     </StyledSection>
//   </Layout>
// )

// export default About

