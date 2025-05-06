'use client'

import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useRef } from 'react'
import FeatureSection from '@/components/FeatureSection'

export default function Hero() {
  const scrollTargetRef = useRef<null | HTMLDivElement>(null)

  const scrollToSection = () => {
    scrollTargetRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="h-[90vh] flex flex-col justify-center items-center text-center bg-black text-white px-4 relative">
        <motion.h1
          className="text-5xl sm:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello. <br className="sm:hidden" />
          This is Studio JB.
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A developer & designer who builds like Apple.
        </motion.p>

        <motion.button
          onClick={scrollToSection}
          className="absolute bottom-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="scroll down"
        >
          <ChevronDownIcon className="w-6 h-6 text-gray-400" />
        </motion.button>
      </section>

      {/* 이게 다음 섹션용 ref */}
      <div ref={scrollTargetRef}>
        <FeatureSection />
      </div>
    </>
  )
}
