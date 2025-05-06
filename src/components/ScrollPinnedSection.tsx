'use client'

import { useEffect, useRef, useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { ReactNode } from 'react'

gsap.registerPlugin(ScrollTrigger)

interface ScrollPinnedSectionProps {
  children: ReactNode[]
}

export default function ScrollPinnedSection({ children }: ScrollPinnedSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const panelRefs = useRef<(HTMLDivElement | null)[]>([])
  const [totalHeight, setTotalHeight] = useState<number>(0)

  useLayoutEffect(() => {
    if (panelRefs.current.length > 0) {
      // 기준이 되는 첫 패널의 높이 측정
      let totalHeight = 0;
      panelRefs.current.forEach((panel, i) => {
        if (!panel) return
        const panelHeight = panel.clientHeight;
        if (i === panelRefs.current.length - 1) {
            totalHeight += window.innerHeight;
        } else {
            totalHeight += panelHeight * 3;
        }
      })

      setTotalHeight(totalHeight);
    
    }
  }, [children.length])

  useEffect(() => {
    if (!totalHeight) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: totalHeight,
        pin: true,
        scrub: 0.3,
      })

      panelRefs.current.forEach((panel, i) => {
        if (!panel) return
        const content = panel.querySelector('.content')
        if (!content) return

        const panelHeight = panel.clientHeight;

        gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: () => `${i * panelHeight}px`,
            end: () => `${(i + 1) * panelHeight}px`,
            scrub: 0.3,
          },
        })
          .fromTo(
            content,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
          )
          .to(
            content,
            { opacity: 0, y: -100, duration: 0.3, ease: 'power2.in' }
          )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [totalHeight, children.length])

  return (
    <section
      ref={containerRef}
      className="relative bg-black text-white overflow-hidden"
      style={{ height: `${totalHeight}px` }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-4">
        {children.map((child, i) => (
          <div
            key={i}
            ref={(el) => (panelRefs.current[i] = el)}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            style={{ zIndex: 10 - i }}
          >
            <div className="content w-full h-full flex items-center justify-center text-center">
              {child}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
