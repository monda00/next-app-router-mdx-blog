import { FaStar } from 'react-icons/fa6'
import { PiMedalDuotone } from 'react-icons/pi'
import PostCard from '@/components/post/postCard'
import { CustomIcon } from '@/components/ui/customIcon'
import { GetRankingPosts } from '@/libs/posts'

async function RankingSide() {
  const posts = await GetRankingPosts()
  return (
    <div className="flex flex-col justify-center w-80 md:w-44 lg:w-60 xl:w-72">
      <h3 className="flex text-xl font-semibold mt-8 mb-4">
        <CustomIcon
          icon={PiMedalDuotone}
          size={30}
          className="text-secondary mr-2"
        />
        Ranking
      </h3>
      <div className="grid grid-cols-1 gap-0">
        <div>
          <div className="relative">
            <CustomIcon icon={FaStar} className="text-warning" />
            <span className="absolute top-0 left-0 text-primary-content text-xs h-8 w-8 flex items-center justify-center">
              1
            </span>
          </div>
          <PostCard
            key={posts[0].slug}
            post={posts[0]}
            widthClass={'w-80 md:w-44 lg:w-60 xl:w-72'}
            mainClassName="flex flex-col"
            cardClassName="w-full mb-5"
            cardLinkClassName="h-4/5"
            titleClassName="w-full h-1/5"
            textSize="text-base"
            subTextSize="text-xs"
          />
        </div>
        <div>
          <div className="relative">
            <CustomIcon icon={FaStar} className="text-warning" />
            <span className="absolute top-0 left-0 text-primary-content text-xs h-8 w-8 flex items-center justify-center">
              2
            </span>
          </div>
          <PostCard
            key={posts[1].slug}
            post={posts[1]}
            widthClass={'w-80 md:w-44 lg:w-60 xl:w-72'}
            mainClassName="flex flex-col"
            cardClassName="w-full mb-5"
            cardLinkClassName="h-4/5"
            titleClassName="w-full h-1/5"
            textSize="text-base"
            subTextSize="text-xs"
          />
        </div>
        <div>
          <div className="relative">
            <CustomIcon icon={FaStar} className="text-warning" />
            <span className="absolute top-0 left-0 text-primary-content text-xs h-8 w-8 flex items-center justify-center">
              3
            </span>
          </div>
          <PostCard
            key={posts[2].slug}
            post={posts[2]}
            widthClass={'w-80 md:w-44 lg:w-60 xl:w-72'}
            mainClassName="flex flex-col"
            cardClassName="w-full mb-5"
            cardLinkClassName="h-4/5"
            titleClassName="w-full h-1/5"
            textSize="text-base"
            subTextSize="text-xs"
          />
        </div>
        <div>
          <div className="relative">
            <CustomIcon icon={FaStar} className="text-warning" />
            <span className="absolute top-0 left-0 text-primary-content text-xs h-8 w-8 flex items-center justify-center">
              4
            </span>
          </div>
          <PostCard
            key={posts[3].slug}
            post={posts[3]}
            widthClass={'w-80 md:w-44 lg:w-60 xl:w-72'}
            mainClassName="flex flex-col"
            cardClassName="w-full mb-5"
            cardLinkClassName="h-4/5"
            titleClassName="w-full h-1/5"
            textSize="text-base"
            subTextSize="text-xs"
          />
        </div>
        <div>
          <div className="relative">
            <CustomIcon icon={FaStar} className="text-warning" />
            <span className="absolute top-0 left-0 text-primary-content text-xs h-8 w-8 flex items-center justify-center">
              5
            </span>
          </div>
          <PostCard
            key={posts[4].slug}
            post={posts[4]}
            widthClass={'w-80 md:w-44 lg:w-60 xl:w-72'}
            mainClassName="flex flex-col"
            cardClassName="w-full mb-5"
            cardLinkClassName="h-4/5"
            titleClassName="w-full h-1/5"
            textSize="text-base"
            subTextSize="text-xs"
          />
        </div>
      </div>
    </div>
  )
}

export default RankingSide
