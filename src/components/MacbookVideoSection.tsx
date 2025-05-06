'use client'

import { motion } from 'framer-motion'

export default function MacbookVideoSection() {
  return (
    <section className="relative bg-black py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="aspect-video overflow-hidden rounded-xl hover:ring-white/30 transition-shadow relative group"
        >
          {/* glow 효과 */}
          <div className="absolute inset-0 rounded-xl pointer-events-none group-hover:shadow-[0_0_100px_20px_rgba(255,255,255,0.1)] transition-all duration-500" />

          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/polarBook-Intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.div>
    </section>
  )
}
