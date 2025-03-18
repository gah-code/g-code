import React, { useState } from 'react'
import '../components/organisms/Courses/certs.css'
import Categories from '../components/organisms/Categories/Categories'
import Layout from '../components/layout'
import StyledSection from '../styles/StyledSection'
import Certs from '../components/organisms/Courses/Certs'
import certificateData from '../data/certificateData.jsx' // Import the data

// Define or import the items array
// const items = [
//   {
//     id: 'rec6d6T3q5EBIdCfD',
//     title: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
//     category: 'CSS',
//     // price: 15.99,
//     img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-00719bf7-a85a-41f4-8dac-bc4171f02d45.jpg?v=1588540810000',
//     desc: 'This Advanced CSS and Sass course offers an in-depth guide to modern and advanced CSS techniques for developers looking to elevate their skills. It covers everything from complex CSS animations, Flexbox, and CSS Grid layouts, to responsive design strategies, CSS architecture, and using Sass for scalable codebases. The course provides hands-on projects to help learners master cutting-edge CSS properties and concepts, ensuring they understand how CSS works behind the scenes. With 28+ hours of content, downloadable resources, and Q&A support, this course is ideal for intermediate developers ready to advance their CSS expertise.',
//     date: '05/03/2020',
//   },
//   {
//     id: 2,
//     title: 'diner double',
//     category: 'React',
//     price: 13.99,
//     img: './images/item-2.jpeg',
//     desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
//   },
//   {
//     id: 3,
//     title: 'godzilla milkshake',
//     category: 'JavaScript',
//     price: 6.99,
//     img: './images/item-3.jpeg',
//     desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
//   },
//   {
//     id: 4,
//     title: 'country delight',
//     category: 'Node.js',
//     price: 20.99,
//     img: './images/item-4.jpeg',
//     desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
//   },
//   {
//     id: 4,
//     title: 'country delight',
//     category: 'Other',
//     price: 20.99,
//     img: './images/item-4.jpeg',
//     desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
//   },
//   // Add other items here...
// ]

// Create a list of all categories
// const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const Certificates = () => {
  const [loading, setLoading] = useState(false)
  const [certs] = useState(certificateData) // Original certificates data
  const [filteredCerts, setFilteredCerts] = useState(certificateData) // Certificates to be displayed
  // const [menuItems, setMenuItems] = useState(items)
  // const [categories] = useState(allCategories) // `setCategories` is not necessary if we don't need to modify `categories`

  // const filterItems = (category) => {
  //   if (category === 'all') {
  //     setMenuItems(items)
  //     return
  //   }
  //   const newItems = items.filter((item) => item.category === category)
  //   setMenuItems(newItems)
  // }
  const allCategories = ['all', ...new Set(certificateData.map((cert) => cert.category).filter((category) => category))]

  const filterItems = (category) => {
    if (category === 'all') {
      setFilteredCerts(certificateData)
    } else {
      const newItems = certificateData.filter((cert) => cert.category === category)
      setFilteredCerts(newItems)
    }
  }

  if (certs.length === 0) {
    return (
      <div className="title">
        <h2>No certificates left</h2>
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={() => setFilteredCerts(certificateData)} // Reset to initial data when refreshing
        >
          Refresh
        </button>
      </div>
    )
  }

  return (
    <Layout>
      <StyledSection>
        <Certs certs={filteredCerts} categories={allCategories} filterItems={filterItems} />
        {/* <div className="title">
          <h2>Certificates</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} /> */}
      </StyledSection>
    </Layout>
  )
}

export default Certificates

