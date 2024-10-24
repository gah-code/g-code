// src/components/seo.d.ts
import React from 'react'

interface SEOProps {
  title: string
  description?: string
  keywords?: string[]
  pathname?: string
}

const SEO: React.FC<SEOProps>
export default SEO

