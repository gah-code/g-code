import React from 'react'
import Layout from '../components/layout'
import AllRecipes from '../components/AllRecipes'
// import AllBlogs from '../components/AllBlogs';
import SEO from '../components/SEO'

const Recipes = () => {
  return (
    <Layout>
      <SEO title="Recipes" />
      <main className="page">
        {/* <AllBlogs /> */}
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes

