import PostContent from '../../components/postContent'
import PostTitle from '../../components/postTitle'
import ProfileCard from '../../components/profileCard'
import Toc from '../../components/toc'
import { GetAllPostSlugs, GetPostBySlug } from '../../utils/posts'

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

  return (
    <div>
      <PostTitle postTitle={data.title} />
      <div className="flex justify-center w-288">
        <div className="w-9/12">
          <PostContent content={content} />
        </div>
        <div className="flex flex-col w-3/12">
          <ProfileCard />
          <Toc />
        </div>
      </div>
    </div>
  )
}
