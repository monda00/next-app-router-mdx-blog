import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import ProfileCard from '../../components/profileCard'
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
      rehypePlugins: [rehypeHighlight, rehypeSlug],
    },
  }

  return (
    <div>
      <div className="flex justify-center p-10">
        <h1 className="my-3">{data.title}</h1>
      </div>
      <div className="flex justify-center w-288">
        <div className="post prose w-9/12 max-w-full bg-white rounded-lg p-8">
          {/* @ts-expect-error the actual code should just work but the types depend on a new major of unified */}
          <MDXRemote source={content} options={options} />
        </div>
        <div className="flex flex-col w-3/12">
          <ProfileCard />
          <Toc />
        </div>
      </div>
    </div>
  )
}
