'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function MacbookSummary() {
    const sectionRef = useRef(null)
    const contentRef = useRef(null)
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }, sectionRef)
  
      return () => ctx.revert()
    }, [])
  
    return (
      <section
        ref={sectionRef}
        className="bg-black text-white min-h-screen flex items-center justify-center px-4"
      >
        <div ref={contentRef} className="text-center max-w-2xl">
          <h2 className="text-3xl font-semibold mb-6">Project Summary</h2>
          <p className="text-lg text-gray-400">
            이 프로젝트는 Apple의 MacBook Air 제품 페이지를 클론하여 제작한 포트폴리오입니다. Next.js의 App Router 구조와 Tailwind CSS를 활용해 반응형 및 애니메이션 요소를 구현했습니다.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="https://your-demo-url.com"
              target="_blank"
              className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
            >
              데모 보기
            </a>
            <a
              href="https://github.com/your-repo"
              target="_blank"
              className="px-6 py-3 border border-white rounded-full font-medium hover:bg-white hover:text-black transition"
            >
              코드 보기
            </a>
          </div>
        </div>
      </section>
    )
  }
