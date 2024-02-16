import CategoryList from '@/components/categoryList'
import PostList from '@/components/postList'
import ProfileCard from '@/components/profileCard'
import { GetAllPosts } from '@/utils/posts'

export default function Home() {
  const posts = GetAllPosts()
  return (
    <div className="flex justivy-center w-224">
      <div className="w-4/6">
        <PostList posts={posts} />
      </div>
      <div className="w-2/6">
        <CategoryList />
        <div className="mt-3">
          <ProfileCard />
        </div>
      </div>
    </div>
  )
}
