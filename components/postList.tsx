import type { Post } from '../types/post'
import PostCard from './postCard'

interface PostListProps {
  posts: Post[]
}

function PostList({ posts }: PostListProps) {
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}

export default PostList
