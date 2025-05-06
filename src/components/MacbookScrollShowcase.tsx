import React from 'react'
import ScrollPinnedSection from './ScrollPinnedSection'

export default function MacbookScrollShowcase() {
  return (
    <ScrollPinnedSection>
           <div>
        <h2 className="text-5xl font-bold">MacBook Air</h2>
        <p className="mt-4 text-lg text-gray-300">초경량, 초고속 노트북</p>
      </div>
      <div>
        <h2 className="text-5xl font-bold">Apple Silicon</h2>
        <p className="mt-4 text-lg text-gray-300">M3 칩으로 더 강력하게</p>
      </div>
      <div>
        <h2 className="text-5xl font-bold">Studio JB Clone</h2>
        <p className="mt-4 text-lg text-gray-300">Next.js + GSAP으로 구현</p>
      </div>
    </ScrollPinnedSection>
  )
}
