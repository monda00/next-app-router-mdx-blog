import CategoryIcon from '@/components/category/categoryIcon'
import GoogleAdsense from '@/components/googleAdsense/googleAds'
import PostList from '@/components/post/postList'
import RankingSide from '@/components/post/rankingSide'
import BreadcrumbCategory from '@/components/ui/breadcrumbCategory'
import ProfileCard from '@/components/ui/profileCard'
import { allCategories } from '@/libs/constants'
import { GetPostsByCategory } from '@/libs/posts'

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export function generateStaticParams() {
  const categoryKeys = Object.keys(allCategories)
  return categoryKeys.map((category) => ({ params: { category } }))
}

export default async function CategoryPage(props: CategoryPageProps) {
  const params = await props.params
  const { category } = params
  const posts = GetPostsByCategory(category)

  const categoryName = allCategories[category as keyof typeof allCategories]

  return (
    <div className="w-96 md:w-180 lg:w-240 xl:w-304 mx-auto">
      <BreadcrumbCategory category={category} className="mt-8 ml-8 md:ml-0" />
      <div className="flex flex-col justify-center items-center md:items-stretch">
        <h2 className="flex text-2xl font-bold mt-8 mb-4">
          <CategoryIcon
            category={category[0]}
            size={30}
            className="text-primary mr-2"
          />
          {categoryName}
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
