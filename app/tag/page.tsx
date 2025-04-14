import { FaTags } from 'react-icons/fa'
import TagList from '@/components/tag/tagList'
import { CustomIcon } from '@/components/ui/customIcon'
import { GetAllTagsWithCount } from '@/libs/posts'

export default function TagPage() {
  const tags = GetAllTagsWithCount()

  return (
    <div className="w-96 md:w-180 lg:w-240 xl:w-304 pb-10 mx-auto">
      <h2 className="flex justify-center items-center text-2xl md:text-3xl font-bold mt-16 mb-8">
        <CustomIcon icon={FaTags} size={28} className="text-secondary mr-2" />
        Tag
      </h2>
      <TagList tags={tags} />
    </div>
  )
}
