import PostCard from '@/components/post/postCard'
import { GetRelatedPosts } from '@/libs/posts'

interface RelatedPostsProps {
  mySlug: string
  category: string
}

function RelatedPosts({ category, mySlug }: RelatedPostsProps) {
  const posts = GetRelatedPosts(category, mySlug)
  return (
    <div className="max-w-full p-4">
      <h2 className="text-xl font-bold border-l-4 border-secondary pl-1 mt-8 mb-4">
        Related Posts
      </h2>
      <div className="flex justify-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              post={post}
              widthClass={'w-80 xl:w-96'}
              mainClassName="flex flex-col"
              cardClassName="w-full mb-5"
              cardLinkClassName="h-4/5"
              titleClassName="w-full h-1/5"
              textSize="text-sm md:text-base"
              subTextSize="text-xs"
              showCategory={false}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RelatedPosts
