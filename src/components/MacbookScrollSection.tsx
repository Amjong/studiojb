'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MacbookScrollSection() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',   // 섹션이 뷰포트 아래 80% 지점에 도달할 때 시작
            toggleActions: 'play none none reverse',
            markers: false,     // true로 하면 디버깅 가이드선 나옴
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen bg-black flex items-center justify-center px-4">
      <div
        ref={contentRef}
        className="text-white text-center max-w-2xl"
      >
        <h2 className="text-4xl sm:text-5xl font-semibold">MacBook Air</h2>
        <p className="mt-4 text-lg text-gray-400">
          Apple Silicon으로 재탄생한 초경량 노트북, Studio JB가 클론했습니다.
        </p>
      </div>
    </section>
  )
}
