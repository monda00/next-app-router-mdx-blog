import CategoryCard from '@/components/category/categoryCard'
import { allCategories } from '@/libs/constants'

function CategoryList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-10">
      {Object.entries(allCategories).map(([key, value]) => (
        <CategoryCard key={key} categoryKey={key} categoryName={value} />
      ))}
    </div>
  )
}

export default CategoryList
