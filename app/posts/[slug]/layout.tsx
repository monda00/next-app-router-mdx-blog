import type { Metadata } from 'next'
import { siteURL, siteName } from '@/libs/constants'
import { GetPostBySlug } from '@/libs/posts'

interface LayoutProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(props: LayoutProps): Promise<Metadata> {
  const params = await props.params
  const slug = params.slug
  const post = GetPostBySlug(slug)
  const description = post.content
    .replace(/## /g, '')
    .replace(/\n/g, ' ')
    .slice(0, 50)

  return {
    title: post.data.title,
    description: description,
    openGraph: {
      title: post.data.title,
      description: description,
      url: `${siteURL}/${slug}`,
      siteName: siteName,
      images: [
        {
          url: `/post/${slug}/${slug}.webp`,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.data.title,
      description: description,
      images: [`${siteURL}/post/${slug}/${slug}.webp`],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"
        integrity="sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"
        crossOrigin="anonymous"
      />
      {children}
    </>
  )
}
