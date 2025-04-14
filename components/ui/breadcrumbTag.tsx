import Link from 'next/link'
import { FaTags } from 'react-icons/fa'
import { IoHomeOutline } from 'react-icons/io5'
import { LiaGreaterThanSolid } from 'react-icons/lia'
import { CustomIcon } from '@/components/ui/customIcon'
import { normalizeTag } from '@/libs/posts'

interface BreadcrumbTagProps {
  tagName: string
}

function BreadcrumbTag({ tagName }: BreadcrumbTagProps) {
  const normalizedTagName = normalizeTag(tagName)

  return (
    <div className="mt-8 ml-8 md:ml-0">
      <p className="flex items-center justify-start text-base-content text-sm">
        <Link href="/" className="no-underline">
          <span className="flex items-center">
            <CustomIcon icon={IoHomeOutline} size={20} className="mr-1" />
            Home
          </span>
        </Link>
        <CustomIcon
          icon={LiaGreaterThanSolid}
          size={20}
          className="text-base-content mx-1"
        />
        <Link href="/tag" className="no-underline">
          <span className="flex items-center">
            <CustomIcon icon={FaTags} size={20} className="mr-1" />
            Tag
          </span>
        </Link>
        <CustomIcon
          icon={LiaGreaterThanSolid}
          size={20}
          className="text-base-content mx-1"
        />
        <Link
          href={`/tag/${encodeURIComponent(normalizedTagName)}`}
          className="no-underline"
        >
          {tagName}
        </Link>
      </p>
    </div>
  )
}

export default BreadcrumbTag
