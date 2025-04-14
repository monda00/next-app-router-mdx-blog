import type { FuseResult } from 'fuse.js'
import { useRouter } from 'next/navigation'
import type { SearchResultPost } from '@/types/post'

interface SearchResultItemProps {
  result: FuseResult<SearchResultPost>
  onClick: () => void
}

function SearchResultItem({ result, onClick }: SearchResultItemProps) {
  const router = useRouter()

  const handleClick = () => {
    onClick()
    router.push(`/posts/${result.item.slug}`)
  }

  return (
    <li
      className="list-none font-semibold text-sm text-base-content p-4 hover:text-primary hover:bg-base-200 cursor-pointer transition-colors duration-200 ease-in-out"
      onClick={handleClick}
    >
      {result.item.title}
    </li>
  )
}

export default SearchResultItem
