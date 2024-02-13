import Link from 'next/link'
import { categories } from '@/utils/constants'

function CategoryList() {
  return (
    <div className="m-5 px-5 pb-3 rounded-xl bg-white">
      <p className="flex justify-center pt-5 font-bold text-lg">Categories</p>
      <ul className="list-none">
        {Object.entries(categories).map(([key, value]) => (
          <li key={key}>
            <Link href={`/category/${key}`}>{value}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryList
