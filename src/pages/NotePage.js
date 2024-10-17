import React from 'react'
import Layout from '../components/layout'
import AllNotes from '../components/AllNotes'
import SEO from '../components/seo'

const NotePage = () => {
  const pageTitle = 'My Notes'
  const pageDescription = 'Browse through all my notes with tags and additional details.'
  const pageUrl = '/notes/'

  return (
    <Layout>
      <SEO
        title={pageTitle} // Pass the title to SEO
        description={pageDescription}
        pathname={pageUrl}
        // Optionally, add an image for better sharing on social media
        // image="https://mywebsite.com/images/notes-preview.png"
      />
      <main className="page">
        {/* You can display the page title if needed */}
        <h1>{pageTitle}</h1>
        <AllNotes />
      </main>
    </Layout>
  )
}

export default NotePage

