import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import Toc from '../../components/toc'
import { GetAllPostSlugs, GetPostBySlug } from '../../utils/posts'
import '../../styles/tokyo-night-dark.css'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = GetAllPostSlugs()
  return slugs.map((slug) => ({ params: { slug } }))
}

export default async function PostPage({ params }: PostPageProps) {
  const { content, data } = GetPostBySlug(params.slug)
  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    },
  }

  return (
    <div>
      <div className="flex justify-center p-10">
        <h1 className="my-3">{data.title}</h1>
      </div>
      <div className="flex justify-center w-256">
        <div className="post prose w-9/12 max-w-full bg-white rounded-lg p-5">
          {/* @ts-expect-error the actual code should just work but the types depend on a new major of unified */}
          <MDXRemote source={content} options={options} />
        </div>
        <div className="w-3/12">
          <Toc />
        </div>
      </div>
    </div>
  )
}
