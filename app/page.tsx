import CategoryTop from '@/components/category/categoryTop'
import NewPostsTop from '@/components/post/newPostsTop'
import PickUpTop from '@/components/post/pickUpTop'
import RankingTop from '@/components/post/rankingTop'
import ProfileCardHome from '@/components/ui/profileCardHome'
import { GetAllPosts, GetPickUpPosts } from '@/libs/posts'
import type { Post } from '@/types/post'

export default async function Home() {
  const posts = GetAllPosts()
  const pickupPosts = GetPickUpPosts()
  return (
    <div className="w-full">
      <div className="bg-base-100">
        <CategoryTop />
      </div>
      <div className="bg-base-200">
        <NewPostsTop posts={posts.slice(0, 3) as [Post, Post, Post]} />
      </div>
      <div className="bg-base-100">
        <RankingTop />
      </div>
      <div className="bg-base-200">
        <PickUpTop
          posts={pickupPosts as [Post, Post, Post, Post, Post, Post]}
        />
      </div>
      <div>
        <ProfileCardHome />
      </div>
    </div>
  )
}
