'use client'

import { useState } from 'react'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import ReactPaginate from 'react-paginate'
import PostCard from '@/components/post/postCard'
import { CustomIcon } from '@/components/ui/customIcon'
import type { Post } from '@/types/post'

interface PostListProps {
  posts: Post[]
}

interface selectedItem {
  selected: number
}

function PostList({ posts }: PostListProps) {
  const itemsPerPage = 10
  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + itemsPerPage
  const currentItems = posts.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(posts.length / itemsPerPage)

  const handlePageChange = (event: selectedItem) => {
    console.log('click')
    const newOffset = (event.selected * itemsPerPage) % posts.length
    setItemOffset(newOffset)
  }

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-0 gap-x-5">
        {currentItems.map((post) => (
          <PostCard
            key={post.slug}
            post={post}
            widthClass={'w-80 md:w-56 lg:w-80 xl:w-104'}
            mainClassName="flex flex-col mx-auto"
            cardClassName="w-full mb-5"
            cardLinkClassName="h-4/5"
            titleClassName="w-full h-1/5"
            textSize="text-base lg:text-xl"
            subTextSize="text-xs lg:text-sm"
          />
        ))}
      </div>
      <ReactPaginate
        breakLabel={'...'}
        nextLabel={<CustomIcon icon={GrFormNext} size={24} />}
        previousLabel={<CustomIcon icon={GrFormPrevious} size={24} />}
        pageCount={pageCount}
        pageRangeDisplayed={2}
        onPageChange={handlePageChange}
        renderOnZeroPageCount={null}
        containerClassName={'flex justify-center mb-10 mt-0 px-0'}
        pageClassName={
          'flex justify-center items-center p-0 m-0 h-10 w-10 md:h-12 md:w-12 bg-base-200 text-xs md:text-sm font-semibold list-none'
        }
        pageLinkClassName={'px-4 py-2 no-underline'}
        breakClassName={
          'flex justify-center items-center p-0 m-0 h-10 w-10 md:h-12 md:w-12 bg-base-200 text-xs md:text-sm font-semibold list-none'
        }
        breakLinkClassName={'px-4 py-2 no-underline'}
        previousClassName={
          'flex justify-center items-center p-0 m-0 h-10 w-10 md:h-12 md:w-12 bg-base-200 text-xs md:text-sm font-semibold list-none'
        }
        previousLinkClassName={'px-4 py-2 no-underline'}
        nextClassName={
          'flex justify-center items-center p-0 m-0 h-10 w-10 md:h-12 md:w-12 bg-base-200 text-xs md:text-sm font-semibold list-none'
        }
        nextLinkClassName={'px-4 py-2 no-underline'}
        activeClassName={'bg-base-300'}
      />
    </div>
  )
}

export default PostList
