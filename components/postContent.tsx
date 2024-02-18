import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface PostContentProps {
  content: string
}

function PostContent({ content }: PostContentProps) {
  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight, rehypeSlug],
    },
  }
  return (
    <div className="post prose max-w-full bg-base-200 rounded-lg p-8 mx-5">
      {/* @ts-expect-error the actual code should just work but the types depend on a new major of unified */}
      <MDXRemote source={content} options={options} />
    </div>
  )
}

export default PostContent
