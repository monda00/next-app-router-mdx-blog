import { FaCircleArrowRight } from 'react-icons/fa6'
import { MdFormatListBulleted } from 'react-icons/md'
import CategoryCard from '@/components/category/categoryCard'
import { CustomIcon } from '@/components/ui/customIcon'
import IconButton from '@/components/ui/iconButton'
import { allCategories, selectedCategories } from '@/libs/constants'

function CategoryTop() {
  return (
    <div className="w-96 md:w-180 lg:w-240 xl:w-304 mx-auto pb-16">
      <h2 className="flex justify-center items-center text-2xl md:text-3xl">
        <CustomIcon
          icon={MdFormatListBulleted}
          size={28}
          className="text-secondary mr-2"
        />
        Category Top
        <IconButton link="/category" className="text-primary">
          <CustomIcon icon={FaCircleArrowRight} size={28} className="ml-2" />
        </IconButton>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-5">
        {Object.entries(selectedCategories).map(([key, value], index) => (
          <CategoryCard
            key={key}
            categoryKey={key as keyof typeof allCategories}
            categoryName={value}
            className={
              index >= 6 && index < 8
                ? 'hidden lg:block'
                : index >= 8
                  ? 'hidden xl:block'
                  : ''
            }
          />
        ))}
      </div>
    </div>
  )
}

export default CategoryTop
