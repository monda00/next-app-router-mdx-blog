import { FaTag } from 'react-icons/fa'
import GoogleAdsense from '@/components/googleAdsense/googleAds'
import PostList from '@/components/post/postList'
import RankingSide from '@/components/post/rankingSide'
import BreadcrumbTag from '@/components/ui/breadcrumbTag'
import { CustomIcon } from '@/components/ui/customIcon'
import ProfileCard from '@/components/ui/profileCard'
import { GetPostsByTag, GetAllTagsWithCount } from '@/libs/posts'

interface TagPostsProps {
  params: {
    normalizedTag: string
  }
}

export function generateStaticParams() {
  const tags = GetAllTagsWithCount()
  return tags.map((tag) => ({
    params: { normalizedTag: tag.normalizedName },
  }))
}

export default function TagPosts({ params }: TagPostsProps) {
  const normalizedTag = decodeURIComponent(params.normalizedTag)

  const tags = GetAllTagsWithCount()
  const currentTag = tags.find((tag) => tag.normalizedName === normalizedTag)
  const tagName = currentTag ? currentTag.name : normalizedTag
  const posts = GetPostsByTag(normalizedTag)

  return (
    <div className="w-96 md:w-180 lg:w-240 xl:w-304 mx-auto">
      <BreadcrumbTag tagName={tagName} />
      <div className="flex flex-col justify-center items-center md:items-stretch">
        <h2 className="flex mt-5">
          <CustomIcon icon={FaTag} size={30} className="text-primary mr-2" />
          {tagName}
        </h2>
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
    </div>
  )
}
