import GoogleAdsense from '@/components/googleAdsense/googleAds'
import PostContent from '@/components/post/contents/postContent'
import PostTitle from '@/components/post/contents/postTitle'
import RelatedPosts from '@/components/post/contents/relatedPosts'
import SnsShareSide from '@/components/post/contents/snsShareSide'
import Toc from '@/components/post/contents/toc'
import Breadcrumb from '@/components/ui/breadcrumb'
import ProfileCard from '@/components/ui/profileCard'
import { siteURL } from '@/libs/constants'
import { GetAllPostSlugs, GetPostBySlug } from '@/libs/posts'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = GetAllPostSlugs()
  return slugs.map((slug) => ({ params: { slug } }))
}

export default async function PostPage({ params }: PostPageProps) {
  const { content, data } = GetPostBySlug(params.slug)

  return (
    <div className="flex flex-col pb-8">
      <Breadcrumb category={data.category} className="ml-4 md:ml-22 mt-4" />
      <div className="flex flex-col lg:flex-row justify-center w-96 md:w-180 lg:w-240 xl:w-304 mt-2 md:mt-10 mx-auto">
        <SnsShareSide url={`${siteURL}/${params.slug}`} title={data.title} />
        <div className="w-full lg:w-9/12 lg:pr-8">
          <PostTitle
            postTitle={data.title}
            publishDate={data.publish}
            updateDate={data.lastUpdate}
            category={data.category}
            tags={data.tags}
          />
          <PostContent
            content={content}
            slug={params.slug}
            title={data.title}
          />
          {process.env.NODE_ENV === 'production' && (
            <GoogleAdsense
              slot={process.env.GOOGLE_ADS_SLOT}
              className="max-w-full m-4 p-4 rounded-lg shadow-xl"
            />
          )}
          <RelatedPosts category={data.category} mySlug={params.slug} />
          {process.env.NODE_ENV === 'production' && (
            <GoogleAdsense
              slot={process.env.GOOGLE_ADS_SLOT}
              className="max-w-full m-4 p-4 rounded-lg shadow-xl"
            />
          )}
        </div>
        <div className="flex flex-col items-center lg:items-start w-full lg:w-3/12">
          <ProfileCard widthClass="w-80 md:w-96 lg:w-60 xl:w-68" />
          <Toc />
        </div>
      </div>
    </div>
  )
}
