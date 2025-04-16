import { PiThumbsUpBold } from 'react-icons/pi'
import PostCard from '@/components/post/postCard'
import { CustomIcon } from '@/components/ui/customIcon'
import type { Post } from '@/types/post'

interface PickUpTopProps {
  posts: [Post, Post, Post, Post, Post, Post]
}

function PickUpTop({ posts }: PickUpTopProps) {
  return (
    <div className="pb-10">
      <div className="flex flex-col justify-center items-center lg:items-stretch w-96 md:w-180 lg:w-240 xl:w-304 mx-auto">
        <h2 className="flex items-center text-2xl md:text-3xl font-bold mt-16 mb-8">
          <CustomIcon
            icon={PiThumbsUpBold}
            size={28}
            className="text-secondary mr-2"
          />
          PickUp
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              post={post}
              widthClass={'w-80 md:w-72 xl:w-96'}
              mainClassName="flex flex-col"
              cardClassName="w-full mb-5"
              cardLinkClassName="h-4/5"
              titleClassName="w-full h-1/5"
              textSize="text-base md:text-xl"
              subTextSize="text-xs md:text-sm"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PickUpTop
