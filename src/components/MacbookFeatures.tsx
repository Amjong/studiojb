'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
  { title: 'React Native/Expo', desc: 'React Native와 Expo를 활용한 모바일 앱 개발' },
  { title: 'Tailwind CSS', desc: '모던하고 일관된 스타일링 구현' },
  { title: 'Framer Motion', desc: '애플 감성의 인터랙션 표현' },
]

export default function MacbookFeatures() {
  const sectionRef = useRef(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(itemRefs.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4"
    >
      <h2 className="text-3xl font-semibold mb-12">Tech Stack</h2>
      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl w-full">
        {features.map((item, i) => (
          <div
            key={i}
            ref={(el) => (itemRefs.current[i] = el)}
            className="bg-gray-800 rounded-lg p-6"
          >
            <h3 className="text-xl font-medium">{item.title}</h3>
            <p className="mt-2 text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
