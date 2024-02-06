import { readFile } from 'fs/promises'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import GetAllPostSlugs from '../../../utils/getAllPostSlugs' // Fixed import

interface PostPageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams() {
  const slugs = GetAllPostSlugs()
  return slugs.map((slug) => ({ params: { slug } }))
}

export default async function PostPage({ params }: PostPageProps) {
  const slug = params.slug.join('/')
  const markdown = await readFile(`contents/posts/${slug}.mdx`, {
    encoding: 'utf8',
  })
  const { content, data } = matter(markdown)

  return (
    <div>
      <div>
        <h1>Frontmatter</h1>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
      <div>
        <h1>Markdown content</h1>
        <MDXRemote source={content} />
      </div>
    </div>
  )
}
