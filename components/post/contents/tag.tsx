import Link from 'next/link'
import { FaTag } from 'react-icons/fa'
import { CustomIcon } from '@/components/ui/customIcon'
import { normalizeTag } from '@/libs/posts'

type TagProps = {
  name: string
}

function Tag({ name }: TagProps) {
  const normalizedName = normalizeTag(name)

  return (
    <Link
      key={name}
      href={`/tag/${encodeURIComponent(normalizedName)}`}
      className="no-underline"
    >
      <span className="flex items-center text-xs text-primary py-1 md:py-2 px-2 md:px-4 mr-2 md:mr-3 my-1 md:my-2 border border-primary bg-base-200 rounded-full hover:bg-primary hover:text-base-100 transition-all duration-200 ease-in-out">
        <CustomIcon icon={FaTag} size={10} className="mr-1" />
        {name}
      </span>
    </Link>
  )
}

export default Tag
