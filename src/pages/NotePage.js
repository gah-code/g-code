import React from 'react'
import Layout from '../components/layout'
import AllRecipes from '../components/AllRecipes'
// import AllBlogs from '../components/AllBlogs';
import AllNotes from '../components/AllNotes'
import SEO from '../components/SEO'

const NotePage = () => {
  return (
    <Layout>
      <SEO title="Recipes" />
      <main className="page">
        {/* <AllBlogs /> */}
        {/* <AllRecipes /> */}
        <AllNotes />
      </main>
    </Layout>
  )
}

export default NotePage

