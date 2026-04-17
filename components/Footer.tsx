import Link from 'next/link'
import { articles } from '@/data/articles'

export default function Footer() {
  return (
    <footer className="bg-[#0e3328] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl text-amber-400">✦</span>
              <span className="font-serif font-bold text-xl">Bible &amp; Nutrition</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Exploring the profound nutritional wisdom woven through scripture — and the modern science that validates it.
            </p>
            <p className="mt-4 text-xs text-gray-500 italic">
              &ldquo;I wrote for them the many things of my law, but they regarded them as something foreign.&rdquo; — Hosea 8:12
            </p>
          </div>

          {/* Articles list */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-lg font-semibold mb-4 text-amber-400">All Articles</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {articles.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/articles/${article.slug}/`}
                    className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-amber-500 text-xs">✦</span>
                    {article.number}. {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>Content based on the Bible &amp; Nutrition educational series. For educational purposes only.</p>
          <Link href="/" className="hover:text-gray-300 transition-colors">Back to top ↑</Link>
        </div>
      </div>
    </footer>
  )
}
