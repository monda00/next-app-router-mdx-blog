import PostList from '@/components/postList'
import { categories } from '@/utils/constants'
import { GetPostsByCategory } from '@/utils/posts'

interface CategoryPageProps {
  params: {
    category: keyof typeof categories
  }
}

export async function generateStaticParams() {
  const category_keys = Object.keys(categories)
  return category_keys.map((category) => ({ params: { category } }))
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const posts = GetPostsByCategory(params.category)
  return (
    <div className="w-160">
      <h1>Category: {categories[params.category]}</h1>
      <PostList posts={posts} />
    </div>
  )
}
