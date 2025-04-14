'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface LinkButtonProps {
  children?: ReactNode
  link: string
  className?: string
}

function LinkButton({ children, link, className = '' }: LinkButtonProps) {
  return (
    <Link href={link}>
      <motion.button
        className={`btn btn-lg btn-primary text-base-100 rounded-3xl px-10 ${className}`}
        whileHover={{ scale: 1.05 }}
        whileFocus={{
          outline: 0,
          boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
        }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>
    </Link>
  )
}

export default LinkButton
