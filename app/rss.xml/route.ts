import { NextResponse } from 'next/server'
import RSS from 'rss'
import { siteURL, siteName, siteDescription } from '@/libs/constants'
import { GetAllPosts } from '@/libs/posts'

export async function GET() {
  const feed = new RSS({
    title: siteName,
    description: siteDescription,
    site_url: siteURL,
    feed_url: `${siteURL}/rss.xml`,
    language: 'ja',
  })

  const posts = GetAllPosts()
  posts.forEach((post) => {
    feed.item({
      title: post.data.title,
      description: post.data.description,
      url: `${siteURL}/${post.slug}`,
      date: post.data.publish,
    })
  })

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
