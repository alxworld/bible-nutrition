import Link from 'next/link'
import Image from 'next/image'
import type { Article } from '@/data/articles'

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/articles/${article.slug}/`} className="group block">
      <article className="card-hover rounded-2xl overflow-hidden bg-white shadow-md h-full flex flex-col">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={article.cardImage}
            alt={article.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          {/* Article number badge */}
          <div
            className="absolute top-3 left-3 w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
            style={{ backgroundColor: article.accentHex }}
          >
            {article.number}
          </div>
          {/* Category pill */}
          <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
            {article.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#16503d] transition-colors">
            {article.title}
          </h3>

          {/* Bible verse */}
          <p className="text-xs font-semibold text-amber-600 mb-3 italic">
            &ldquo;{article.verse.text.slice(0, 80)}{article.verse.text.length > 80 ? '…' : ''}&rdquo;
            <span className="not-italic ml-1 text-gray-400">— {article.verse.ref}</span>
          </p>

          <p className="text-sm text-gray-600 leading-relaxed flex-1">
            {article.excerpt}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-gray-400">{article.readTime}</span>
            <span
              className="text-sm font-semibold flex items-center gap-1 transition-gap"
              style={{ color: article.accentHex }}
            >
              Read article
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>

        {/* Accent bottom bar */}
        <div className="h-1 w-full" style={{ backgroundColor: article.accentHex }} />
      </article>
    </Link>
  )
}
