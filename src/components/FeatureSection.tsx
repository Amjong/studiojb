'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
// Remove the import since we'll use the path directly

export default function FeatureSection() {
  return (
    <section className="bg-[#f5f5f7] py-20 text-center">
      <motion.div
        className="max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          <span className="inline-block align-middle">
            {/* <Image
              src="/apple-logo.svg"
              alt="Apple logo"
              width={24}
              height={24}
              className="inline-block mr-1"
            /> */}
          </span>
          북극성 <span className="font-light">(Mobile App)</span>
        </h2>

        <div className="mt-4 pt-4 pb-6 rounded-lg">
          <Image
            src="/images/polarBookIcon.png"
            alt="Polar Book Icon"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>

        <p className="mt-2 text-xl text-gray-800">독서 기록 & 책 추천 App</p>

        <div className="mt-6 flex justify-center gap-4">
            <Link href="/polarbook-star">
            <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
            더 알아보기
          </button>
            </Link>
          
          <button className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 text-sm font-medium hover:bg-blue-50 transition">
            구입하기
          </button>
        </div>
      </motion.div>
    </section>
  )
}
