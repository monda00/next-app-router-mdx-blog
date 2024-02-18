import Link from 'next/link'
import { categories } from '@/utils/constants'

function CategoryList() {
  return (
    <ul className="menu bg-base-200 w-72 rounded-box">
      <li className="menu-title">Categories</li>
      {Object.entries(categories).map(([key, value]) => (
        <li key={key}>
          <Link href={`/category/${key}`} className="no-underline">
            {value}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default CategoryList
