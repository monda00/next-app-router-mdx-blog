import { MDXComponents } from 'mdx/types'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypekatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import remarkDirective from 'remark-directive'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import CodeBlock from '@/components/post/contents/codeBlock'
import LinkCard from '@/components/post/contents/linkCard'
import SnsShare from '@/components/post/contents/snsShare'
import BuyMeACoffee from '@/components/ui/buyMeACoffee'
import { siteURL } from '@/libs/constants'
import { remarkCustomDirective } from '@/libs/remark'

interface PostContentProps {
  content: string
  slug: string
  title: string
}

function PostContent({ content, slug, title }: PostContentProps) {
  const options = {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        remarkMath,
        remarkDirective,
        remarkCustomDirective,
      ],
      rehypePlugins: [rehypeSlug, rehypekatex],
    },
  }

  const components: MDXComponents = {
    p: (props: React.PropsWithChildren<object>) => (
      <LinkCard>{props.children}</LinkCard>
    ),
    h2: (props: React.PropsWithChildren<{ id?: string }>) => (
      <h2 id={props.id} className="text-2xl font-bold text-base-content mb-10">
        {props.children}
        <div className="border-secondary border-t-2 border-dotted w-full mt-2"></div>
      </h2>
    ),
    pre: (props: React.PropsWithChildren<object>) => (
      <CodeBlock>{props.children}</CodeBlock>
    ),
    table: (props: React.PropsWithChildren<object>) => (
      <div className="overflow-x-auto">
        <table className="table table-zebra table-pin-rows">
          {props.children}
        </table>
      </div>
    ),
  }

  return (
    <div className="post prose max-w-full rounded-lg p-4 mt-8 mb-5">
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      <MDXRemote source={content} options={options} components={components} />
      <div className="mt-10">
        <div className="divider text-xl">Support</div>
        <p className="flex justify-center mx-auo mt-8 mb-0 text-xs md:text-lg">
          \ Please support me by buying me a coffee /
        </p>
        <BuyMeACoffee className="mb-8" />
      </div>
      <SnsShare url={`${siteURL}/${slug}`} title={title} />
    </div>
  )
}

export default PostContent
