'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function AnimatedSection({ children }: { children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{amount: 0.6, once: false }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      {children}
    </motion.section>
  )
}
