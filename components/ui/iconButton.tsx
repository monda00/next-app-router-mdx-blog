'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface LinkButtonProps {
  children?: ReactNode
  link: string
  className?: string
}

function IconButton({ children, link, className = '' }: LinkButtonProps) {
  return (
    <Link href={link} className="no-underline">
      <motion.div
        className={`${className}`}
        whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
      >
        {children}
      </motion.div>
    </Link>
  )
}

export default IconButton
