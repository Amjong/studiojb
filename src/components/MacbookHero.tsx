'use client'
import AnimatedSection from './AnimatedSection'
import Image from 'next/image'

export default function MacbookHero() {
  return (
    <div className="bg-black text-white">
      <AnimatedSection>
        <div className="text-center">
          <h1 className="text-5xl sm:text-7xl font-semibold">북극성 - 독서 기록, 책 추천</h1>
          <p className="mt-4 text-4xl text-gray-400">책 읽기 기록을 독서 습관을 한 번에</p>
          <p className="mt-4 text-2xl text-gray-200">iOS Only Supported.</p>
          <div className="mt-12">
            <Image
              src='/images/polarBookIcon.png'
              alt="MacBook Air"
              width={800}
              height={480}
              className="mx-auto cursor-pointer"
              priority
              onClick={() => window.open('https://apps.apple.com/kr/app/%EB%B6%81%EA%B7%B9%EC%84%B1-%EB%8F%85%EC%84%9C-%EA%B8%B0%EB%A1%9D-%EC%B1%85-%EC%B6%94%EC%B2%9C/id6740491069?l=ko-KR', '_blank')}
            />
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
