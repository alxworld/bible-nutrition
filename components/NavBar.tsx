import Link from 'next/link'

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">✦</span>
          <span className="font-serif font-bold text-xl text-[#16503d]">Bible&nbsp;&amp;&nbsp;Nutrition</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/#articles" className="hover:text-[#16503d] transition-colors">Articles</Link>
          <Link href="/#about" className="hover:text-[#16503d] transition-colors">About</Link>
          <Link
            href="/#articles"
            className="bg-[#16503d] text-white px-4 py-2 rounded-full hover:bg-[#0e3328] transition-colors"
          >
            Start Reading
          </Link>
        </nav>
      </div>
    </header>
  )
}
