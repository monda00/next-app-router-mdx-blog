import PostList from '@/components/postList'
import { GetAllPosts } from '@/utils/posts'

export default function Home() {
  const posts = GetAllPosts()
  return (
    <div>
      <PostList posts={posts} />
    </div>
  )
}
