import PostList from '@/components/postList'
import { categories } from '@/utils/constants'
import { GetPostsByCategory } from '@/utils/posts'
import ProfileCard from '@/components/profileCard'
import CategoryList from '@/components/categoryList'

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
    <div className="flex justify-center w-224">
      <div className="w-4/6">
        <h1>Category: {categories[params.category]}</h1>
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
