import { FaTag } from 'react-icons/fa'
import { CustomIcon } from '@/components/ui/customIcon'

type TagProps = {
  name: string
}

function Tag({ name }: TagProps) {
  return (
    <span className="flex items-center text-xs text-primary py-1 md:py-2 px-2 md:px-4 mr-2 md;mr-3 my-1 md:my-2 border border-primary bg-base-200 rounded-full">
      <CustomIcon icon={FaTag} size={10} className="mr-1" />
      {name}
    </span>
  )
}

export default Tag
