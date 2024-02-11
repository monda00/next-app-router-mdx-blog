import Link from 'next/link'
import PostList from '@/components/postList'
import { GetAllPosts } from '@/utils/posts'

export default function Home() {
  const posts = GetAllPosts()
  return (
    <div>
      <h1>Hello, World!</h1>
      <Link href="/hello-world">Hello, World</Link>

      <PostList posts={posts} />
    </div>
  )
}
