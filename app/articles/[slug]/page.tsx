import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ReadingProgress from '@/components/ReadingProgress'
import { articles, getArticleBySlug, getAdjacentArticles } from '@/data/articles'
import type { ArticleSection } from '@/data/articles'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: `${article.title} — Bible & Nutrition`,
    description: article.excerpt,
  }
}

function Section({ section }: { section: ArticleSection }) {
  return (
    <div className="mb-2">
      {section.heading && (
        <h2 className="font-serif text-2xl font-bold text-[#16503d] mt-10 mb-4">
          {section.heading}
        </h2>
      )}

      {section.body && <p className="text-[1.0625rem] leading-[1.85] text-gray-700 mb-4">{section.body}</p>}

      {section.bullets && section.bullets.length > 0 && (
        <ul className="my-4 space-y-2">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-[1.0625rem] leading-relaxed text-gray-700">
              <span className="text-amber-500 mt-1 text-xs flex-shrink-0">✦</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {section.quote && (
        <div className="verse-callout my-8">
          <blockquote>&ldquo;{section.quote.text}&rdquo;</blockquote>
          <cite>— {section.quote.ref}</cite>
        </div>
      )}

      {section.highlight && (
        <div className="highlight-box my-8">
          {section.highlight}
        </div>
      )}

      {section.tableHeaders && section.tableRows && (
        <div className="overflow-x-auto my-6 rounded-xl shadow-sm border border-gray-100">
          <table className="data-table">
            <thead>
              <tr>
                {section.tableHeaders.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.tableRows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const { prev, next } = getAdjacentArticles(slug)

  return (
    <>
      <ReadingProgress />
      <NavBar />

      <main className="pt-16">
        {/* ── Hero ─────────────────────────────────────── */}
        <div className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-white text-xs font-bold px-3 py-1 rounded-full"
                style={{ backgroundColor: article.accentHex }}
              >
                {article.category}
              </span>
              <span className="text-gray-300 text-sm">{article.readTime}</span>
              <span className="text-gray-400 text-sm">· Article {article.number} of {articles.length}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
              {article.title}
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">{article.subtitle}</p>
          </div>
        </div>

        {/* ── Opening verse card ───────────────────────── */}
        <div className="bg-[#faf8f3] border-b border-amber-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="verse-callout">
              <blockquote>&ldquo;{article.verse.text}&rdquo;</blockquote>
              <cite>— {article.verse.ref}</cite>
            </div>
          </div>
        </div>

        {/* ── Article body ─────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose-article">
            {article.sections.map((section, i) => (
              <Section key={i} section={section} />
            ))}
          </div>

          {/* ── Prev / Next navigation ───────────────── */}
          <nav className="mt-20 pt-10 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {prev ? (
              <Link
                href={`/articles/${prev.slug}/`}
                className="group flex flex-col gap-1 p-5 rounded-2xl border border-gray-100 hover:border-[#16503d]/30 hover:bg-[#f0f7f4] transition-all"
              >
                <span className="text-xs text-gray-400 uppercase tracking-wider">← Previous</span>
                <span className="font-serif font-bold text-[#16503d] group-hover:text-[#0e3328] transition-colors">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/articles/${next.slug}/`}
                className="group flex flex-col gap-1 p-5 rounded-2xl border border-gray-100 hover:border-[#16503d]/30 hover:bg-[#f0f7f4] transition-all text-right"
              >
                <span className="text-xs text-gray-400 uppercase tracking-wider">Next →</span>
                <span className="font-serif font-bold text-[#16503d] group-hover:text-[#0e3328] transition-colors">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </nav>

          {/* Back to all articles */}
          <div className="mt-8 text-center">
            <Link
              href="/#articles"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#16503d] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              All Articles
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
