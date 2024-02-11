import Link from 'next/link'
import type { Post } from '../types/post'

interface PostListProps {
  posts: Post[]
}

function PostList({ posts }: PostListProps) {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/${post.slug}`}>
              <h3>{post.data.title}</h3>
              <p>{post.data.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
