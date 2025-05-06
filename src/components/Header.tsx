'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold tracking-tight text-gray-900">
          Studio JB
        </Link>
        <nav className="space-x-6 text-sm text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/macbook-air">Works</Link>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
