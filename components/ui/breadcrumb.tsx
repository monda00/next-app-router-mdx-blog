import Link from 'next/link'
import { IoHomeOutline } from 'react-icons/io5'
import { LiaGreaterThanSolid } from 'react-icons/lia'
import { CustomIcon } from '@/components/ui/customIcon'
import { allCategories } from '@/libs/constants'

interface BreadcrumbProps {
  category: string
  className?: string
}

function Breadcrumb({ category, className }: BreadcrumbProps) {
  return (
    <div className={className}>
      <p className="flex items-center justify-start text-base-content text-sm">
        <CustomIcon
          icon={IoHomeOutline}
          size={20}
          className="text-base-content mr-1"
        />
        <Link href="/" className="no-underline">
          Home
        </Link>
        <CustomIcon
          icon={LiaGreaterThanSolid}
          size={20}
          className="text-base-content mx-1"
        />
        <Link href={`/category/${category}`} className="no-underline">
          {allCategories[category as keyof typeof allCategories]}
        </Link>
      </p>
    </div>
  )
}

export default Breadcrumb
