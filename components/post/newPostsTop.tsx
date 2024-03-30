import { AiOutlineSound } from 'react-icons/ai'
import { FaCircleArrowRight } from 'react-icons/fa6'
import PostCard from '@/components/post/postCard'
import { CustomIcon } from '@/components/ui/customIcon'
import LinkButton from '@/components/ui/linkButton'
import type { Post } from '@/types/post'

interface NewPostsTopProps {
  posts: [Post, Post, Post]
}

function NewPostsTop({ posts }: NewPostsTopProps) {
  return (
    <div className="pb-10">
      <div className="flex flex-col justify-center items-center lg:items-stretch w-96 md:w-180 lg:w-240 xl:w-304 mx-auto">
        <h2 className="flex items-center text-2xl md:text-3xl">
          <CustomIcon
            icon={AiOutlineSound}
            size={28}
            className="text-secondary mr-2"
          />
          New Posts
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <PostCard
            key={posts[0].slug}
            post={posts[0]}
            widthClass={'w-80 md:w-148 lg:w-112 xl:w-132'}
            mainClassName="flex flex-col"
            cardClassName="w-full mb-5"
            cardLinkClassName="h-4/5"
            titleClassName="w-full h-1/5"
            textSize="text-base md:text-xl"
            subTextSize="text-xs md:text-sm"
          />
          <div className="grid grid-rows-2 gap-0">
            <PostCard
              key={posts[1].slug}
              post={posts[1]}
              widthClass={'w-80 md:w-148 lg:w-120 xl:w-148'}
              mainClassName="flex flex-col lg:flex-row"
              cardClassName="w-full lg:w-1/2 mb-5 lg:mb-10 lg:mr-5"
              cardLinkClassName="h-4/5"
              titleClassName="w-full h-1/5 lg:h-ful lg:w-1/2"
              textSize="text-base md:text-xl"
              subTextSize="text-xs md:text-sm"
            />
            <PostCard
              key={posts[2].slug}
              post={posts[2]}
              widthClass={'w-80 md:w-148 lg:w-120 xl:w-148'}
              mainClassName="flex flex-col lg:flex-row"
              cardClassName="w-full lg:w-1/2 mb-5 lg:mb-10 lg:mr-5"
              cardLinkClassName="h-4/5"
              titleClassName="w-full h-1/5 lg:h-ful lg:w-1/2"
              textSize="text-base md:text-xl"
              subTextSize="text-xs md:text-sm"
            />
          </div>
        </div>
        <div className="flex justify-center text-lg pt-5">
          <LinkButton link="/posts">
            More
            <CustomIcon icon={FaCircleArrowRight} size={18} className="" />
          </LinkButton>
        </div>
      </div>
    </div>
  )
}

export default NewPostsTop
