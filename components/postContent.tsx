import { MDXComponents } from 'mdx/types'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import CodeBlock from './codeBlock'
import LinkCard from './linkCard'

interface PostContentProps {
  content: string
}

function PostContent({ content }: PostContentProps) {
  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    },
  }

  const components: MDXComponents = {
    p: (props: React.PropsWithChildren<object>) => (
      <LinkCard>{props.children}</LinkCard>
    ),
    h2: (props: React.PropsWithChildren<{ id?: string }>) => (
      <h2 id={props.id} className="text-4xl font-bold text-primary">
        {props.children}
      </h2>
    ),
    pre: (props: React.PropsWithChildren<object>) => (
      <CodeBlock>{props.children}</CodeBlock>
    ),
  }

  return (
    <div className="post prose max-w-full bg-base-200 rounded-lg p-8 mx-5">
      <MDXRemote source={content} options={options} components={components} />
    </div>
  )
}

export default PostContent
