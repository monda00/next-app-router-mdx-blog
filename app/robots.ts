import { MetadataRoute } from 'next'
import { siteURL } from '@/libs/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteURL}/sitemap.xml`,
  }
}
