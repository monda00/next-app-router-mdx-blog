'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Post } from '../types/post'

interface PostCardProps {
  post: Post
}

function PostCard({ post }: PostCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={`/${post.slug}`}>
        <div className="w-full mx-auto bg-white rounded-xl shadow-xl overflow-hidden m-5">
          <div className="px-4">
            <Image
              src={`/${post.slug}/cover.webp`}
              width={1200}
              height={600}
              alt={post.data.title}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default PostCard
