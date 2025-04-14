import GoogleAdsense from '@/components/googleAdsense/googleAds'
import PostList from '@/components/post/postList'
import RankingSide from '@/components/post/rankingSide'
import ProfileCard from '@/components/ui/profileCard'
import { GetAllPosts } from '@/libs/posts'

export default function Posts() {
  const posts = GetAllPosts()
  return (
    <div className="flex flex-col justify-center items-center md:items-stretch w-96 md:w-180 lg:w-240 xl:w-304 mx-auto">
      <h2 className="text-2xl font-bold mt-16 mb-8">New Posts</h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch w-full">
        <div className="w-full md:w-9/12 pr-0 md:pr-5 lg:pr-10">
          <PostList posts={posts} />
          {process.env.NODE_ENV === 'production' && (
            <GoogleAdsense
              slot={process.env.GOOGLE_ADS_SLOT}
              className="max-w-full m-4 p-4 rounded-lg shadow-xl"
            />
          )}
        </div>
        <div className="flex flex-col items-center w-full md:w-3/12 pl-0 mt-5">
          <ProfileCard widthClass="w-80 md:w-44 lg:w-60 xl:w-72" />
          <RankingSide />
        </div>
      </div>
    </div>
  )
}
