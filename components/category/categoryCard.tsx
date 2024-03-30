'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import CategoryIcon from '@/components/category/categoryIcon'

interface CategoryCardProps {
  categoryKey: string
  categoryName: string
  className?: string
}

function CategoryCard({
  categoryKey,
  categoryName,
  className,
}: CategoryCardProps) {
  return (
    <Link
      key={categoryKey}
      href={`/category/${categoryKey}`}
      className={`no-underline ${className}`}
    >
      <motion.div
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95 }}
        className="card w-40 h-24 md:w-56 md:h-36 p-4 m-auto bg-base-100 shadow-xl"
      >
        <h2 className="card-title text-sm md:text-xl flex justify-center items-center my-auto">
          <div className="text-primary">
            <CategoryIcon
              category={categoryKey}
              size={30}
              color="currentColor"
            />
          </div>
          {categoryName}
        </h2>
      </motion.div>
    </Link>
  )
}

export default CategoryCard
