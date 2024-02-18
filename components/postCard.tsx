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
      className="card w-128 bg-base-100 shadow-xl m-5"
    >
      <Link href={`/${post.slug}`}>
        <Image
          src={`/${post.slug}/cover.webp`}
          width={1200}
          height={600}
          alt={post.data.title}
          className="rounded-lg my-0"
        />
      </Link>
    </motion.div>
  )
}

export default PostCard
