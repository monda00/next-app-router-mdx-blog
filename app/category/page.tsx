import { MdFormatListBulleted } from 'react-icons/md'
import CategoryList from '@/components/category/categoryList'
import { CustomIcon } from '@/components/ui/customIcon'

export default function CategoryPage() {
  return (
    <div className="w-96 md:w-180 lg:w-240 xl:w-304 pb-10 mx-auto">
      <h2 className="flex justify-center items-center text-2xl md:text-3xl">
        <CustomIcon
          icon={MdFormatListBulleted}
          size={28}
          className="text-secondary mr-2"
        />
        Category
      </h2>
      <CategoryList />
    </div>
  )
}
