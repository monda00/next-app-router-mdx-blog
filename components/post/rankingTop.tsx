import { FaStar } from 'react-icons/fa6'
import { PiMedalDuotone } from 'react-icons/pi'
import PostCard from '@/components/post/postCard'
import { CustomIcon } from '@/components/ui/customIcon'
import { GetRankingPosts } from '@/libs/posts'

async function RankingTop() {
  const posts = await GetRankingPosts()
  return (
    <div className="pb-10">
      <div className="flex flex-col justify-center items-center lg:items-stretch w-96 md:w-180 lg:w-240 xl:w-304 mx-auto">
        <h2 className="flex items-center text-2xl md:text-3xl font-bold mt-16 mb-8">
          <CustomIcon
            icon={PiMedalDuotone}
            size={28}
            className="text-secondary mr-2"
          />
          Ranking
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div>
            <div className="relative">
              <CustomIcon icon={FaStar} size={40} className="text-warning" />
              <span className="absolute top-0 left-0 text-warning-content text-sm font-medium h-10 w-10 flex items-center justify-center">
                1
              </span>
            </div>
            <PostCard
              key={posts[0].slug}
              post={posts[0]}
              widthClass={'w-80 md:w-148 lg:w-72 xl:w-96'}
              mainClassName="flex flex-col"
              cardClassName="w-full mb-5"
              cardLinkClassName="h-4/5"
              titleClassName="w-full h-1/5"
              textSize="text-base md:text-xl"
              subTextSize="text-xs md:text-sm"
            />
          </div>
          <div>
            <div className="relative">
              <CustomIcon icon={FaStar} size={40} className="text-warning" />
              <span className="absolute top-0 left-0 text-warning-content text-sm font-medium h-10 w-10 flex items-center justify-center">
                2
              </span>
            </div>
            <PostCard
              key={posts[1].slug}
              post={posts[1]}
              widthClass={'w-80 md:w-148 lg:w-72 xl:w-96'}
              mainClassName="flex flex-col"
              cardClassName="w-full mb-5"
              cardLinkClassName="h-4/5"
              titleClassName="w-full h-1/5"
              textSize="text-base md:text-xl"
              subTextSize="text-xs md:text-sm"
            />
          </div>
          <div>
            <div className="relative">
              <CustomIcon icon={FaStar} size={40} className="text-warning" />
              <span className="absolute top-0 left-0 text-warning-content text-sm font-medium h-10 w-10 flex items-center justify-center">
                3
              </span>
            </div>
            <PostCard
              key={posts[2].slug}
              post={posts[2]}
              widthClass={'w-80 md:w-148 lg:w-72 xl:w-96'}
              mainClassName="flex flex-col"
              cardClassName="w-full mb-5"
              cardLinkClassName="h-4/5"
              titleClassName="w-full h-1/5"
              textSize="text-base md:text-xl"
              subTextSize="text-xs md:text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RankingTop
