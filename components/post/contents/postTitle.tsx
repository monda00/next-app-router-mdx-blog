import { FaRegFolderOpen } from 'react-icons/fa'
import { GoClock } from 'react-icons/go'
import { MdUpdate } from 'react-icons/md'
import TagList from '@/components/post/contents/tagList'
import { CustomIcon } from '@/components/ui/customIcon'
import { allCategories } from '@/libs/constants'

interface PostTitleProps {
  postTitle: string
  publishDate: string
  updateDate: string
  category: string
  tags: string[]
}

function PostTitle({
  postTitle,
  publishDate,
  updateDate,
  category,
  tags,
}: PostTitleProps) {
  return (
    <div className="hero">
      <div className="hero-content justify-start w-full">
        <div className="flex flex-col">
          <div className="">
            <h1 className="text-2xl md:text-3xl font-bold leading-snug mb-2">
              {postTitle}
            </h1>
          </div>
          <div className={`flex flex-col md:flex-row text-xs md:text-sm my-2`}>
            <div className="flex">
              <div className="flex items-center mr-3">
                <CustomIcon icon={GoClock} size={15} className="mr-1" />
                {publishDate}
              </div>
              <div className="flex items-center mr-3">
                <CustomIcon icon={MdUpdate} size={15} className="mr-1" />
                {updateDate}
              </div>
            </div>
            <div className={`flex items-center mt-2 md:mt-0`}>
              <CustomIcon icon={FaRegFolderOpen} size={15} className="mr-1" />
              {allCategories[category as keyof typeof allCategories]}
            </div>
          </div>
          <div>
            <TagList tags={tags} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostTitle
