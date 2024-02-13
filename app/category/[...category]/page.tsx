import PostList from '@/components/postList'
import { GetPostsByCategory } from '@/utils/posts'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const posts = GetPostsByCategory(params.category)
  return (
    <div className="w-160">
      <h1>Category: {params.category}</h1>
      <PostList posts={posts} />
    </div>
  )
}
