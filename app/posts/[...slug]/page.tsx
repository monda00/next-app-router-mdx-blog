import { readFile } from 'fs/promises'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeToc from 'rehype-toc'
import remarkGfm from 'remark-gfm'
import GetAllPostSlugs from '../../../utils/getAllPostSlugs'
import '../../../styles/tokyo-night-dark.css'

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
  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeToc],
    },
  }

  return (
    <div>
      <div>
        <h1>Frontmatter</h1>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
      <div>
        <h1>Markdown content</h1>
        <div className="prose prose-pink prose-h1:underline">
          {/* @ts-expect-error the actual code should just work but the types depend on a new major of unified */}
          <MDXRemote source={content} options={options} />
        </div>
      </div>
    </div>
  )
}
