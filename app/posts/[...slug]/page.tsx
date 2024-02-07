import { readFile } from 'fs/promises'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import GetAllPostSlugs from '../../../utils/getAllPostSlugs'

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
        <div className="prose dark:prose-invert prose-h1:underline prose-h2:prose-pink">
          <MDXRemote
            source={content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>
      </div>
    </div>
  )
}
