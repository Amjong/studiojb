'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const items = Array.from({ length: 20 }, (_, i) => `기능 ${i + 1}`)

export default function BatchFadeList() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch('.fade-item', {
        interval: 0.2,
        batchMax: 5,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power2.out',
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            opacity: 0,
            y: 50,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power2.in',
          }),
        start: 'top 80%',
        end: 'bottom 20%',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="bg-black text-white py-20 px-4">
      <ul className="space-y-4 max-w-2xl mx-auto">
        {items.map((item, i) => (
          <li
            key={i}
            className="fade-item opacity-0 translate-y-10 bg-gray-800 rounded-lg px-4 py-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
