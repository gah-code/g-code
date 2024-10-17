import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({
  title,
  description,
  keywords = [],
  image,
  author,
  pathname,
  article,
  publishedDate,
  modifiedDate,
  children,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  // Check if site metadata exists before rendering SEO
  if (!site?.siteMetadata) {
    console.error('SEO component is missing site metadata.')
    return null
  }

  const metaDescription = description || site.siteMetadata.description
  const metaUrl = `${site.siteMetadata.siteUrl}${pathname || ''}`
  const metaImage = image || `${site.siteMetadata.siteUrl}/default-image.jpg` // Default image fallback
  const isArticle = article ? 'article' : 'website'
  const metaAuthor = author || site.siteMetadata?.author

  return (
    <Helmet>
      <title>{title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={metaUrl} />

      {/* Keywords Meta Tag */}
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={isArticle} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={metaAuthor} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Article-specific Meta Tags */}
      {article && (
        <>
          <meta property="article:published_time" content={publishedDate} />
          <meta property="article:modified_time" content={modifiedDate} />
        </>
      )}

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'http://schema.org',
          '@type': article ? 'Article' : 'WebPage',
          headline: title,
          image: metaImage,
          url: metaUrl,
          datePublished: publishedDate,
          dateModified: modifiedDate,
          author: {
            '@type': 'Person',
            name: metaAuthor,
          },
          publisher: {
            '@type': 'Organization',
            name: site.siteMetadata?.title,
            logo: {
              '@type': 'ImageObject',
              url: `${site.siteMetadata.siteUrl}/logo.jpg`,
            },
          },
        })}
      </script>

      {children}
    </Helmet>
  )
}

export default SEO

