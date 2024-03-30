import { MetadataRoute } from 'next'
import { siteURL } from '@/libs/constants'
import { GetAllPosts } from '@/libs/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticPaths = [
    {
      url: `${siteURL}/`,
      lastModified,
    },
    {
      url: `${siteURL}/contact`,
      lastModified,
    },
  ]

  const posts = GetAllPosts()
  const dynamicPaths = posts.map((post) => ({
    url: `${siteURL}/posts/${post.slug}`,
    lastModified: new Date(post.data.lastUpdate).toISOString(),
  }))

  return [...staticPaths, ...dynamicPaths]
}
