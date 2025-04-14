'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegFolderOpen } from 'react-icons/fa6'
import { GoClock } from 'react-icons/go'
import { CustomIcon } from '@/components/ui/customIcon'
import { allCategories } from '@/libs/constants'
import type { Post } from '@/types/post'

interface PostCardProps {
  post: Post
  widthClass: string
  mainClassName?: string
  cardClassName?: string
  cardLinkClassName?: string
  titleClassName?: string
  textSize?: string
  subTextSize?: string
  showCategory?: boolean
}

function PostCard({
  post,
  widthClass,
  mainClassName,
  cardClassName,
  cardLinkClassName,
  titleClassName,
  textSize = 'text-xl',
  subTextSize = 'text-sm',
  showCategory = true,
}: PostCardProps) {
  return (
    <div className={`${widthClass} my-5 ${mainClassName}`}>
      <motion.div
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.98 }}
        className={`bg-base-100 shadow-xl rounded-lg ${cardClassName}`}
      >
        <Link href={`/${post.slug}`} className={`${cardLinkClassName}`}>
          <Image
            src={`/post/${post.slug}/${post.slug}.webp`}
            width={600}
            height={300}
            alt={post.data.title}
            className="rounded-lg my-0"
          />
        </Link>
      </motion.div>
      <div className={`${titleClassName}`}>
        <Link href={`/${post.slug}`} className="no-underline">
          <h2 className={`font-semibold ${textSize} my-0 hover:text-primary`}>
            {post.data.title}
          </h2>
        </Link>
        <div className={`flex items-start ${subTextSize} pt-1`}>
          <div className="flex items-center mr-3">
            <CustomIcon icon={GoClock} size={15} className="mr-1" />
            {post.data.publish}
          </div>
          {showCategory && (
            <Link
              href={`/category/${post.data.category}`}
              className="no-underline"
            >
              <span className={`flex items-center`}>
                <CustomIcon icon={FaRegFolderOpen} size={15} className="mr-1" />
                {
                  allCategories[
                    post.data.category as keyof typeof allCategories
                  ]
                }
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default PostCard
