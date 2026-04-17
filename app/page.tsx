import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import { articles } from '@/data/articles'

const zones = [
  {
    label: 'Foundation',
    description: 'Start here — the theological and metabolic framework behind everything.',
    slugs: ['bible-gods-nutrition-manual', 'metabolism-krebs-cycle'],
  },
  {
    label: 'Macronutrients',
    description: 'Deep dives into carbohydrates, protein, and fats — the three pillars of diet.',
    slugs: ['carbohydrates-sweet-truth', 'protein-amino-acids', 'fat-not-the-enemy'],
  },
  {
    label: 'Practical Living',
    description: 'Micronutrients, superfoods, numbers, and myth-busting for everyday health.',
    slugs: [
      'vitamins-minerals-antioxidants',
      'biblical-superfoods',
      'vegetables-fruits-nuts-grains',
      'know-your-numbers',
      'myths-busted-healthy-living',
    ],
  },
]

const stats = [
  { value: '35', label: 'Source Documents' },
  { value: '10', label: 'In-depth Articles' },
  { value: '3500+', label: 'Years of Wisdom' },
  { value: '100%', label: 'Science-Backed' },
]

export default function Home() {
  const articlesBySlug = Object.fromEntries(articles.map((a) => [a.slug, a]))

  return (
    <>
      <NavBar />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1800&q=80"
            alt="Open Bible with golden wheat in sunlight"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0e3328]/90" />

          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-16">
            {/* Eyebrow */}
            <p className="text-amber-400 font-semibold tracking-[0.2em] uppercase text-sm mb-6">
              Bible &amp; Nutrition Series
            </p>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
              God&rsquo;s Original<br />
              <span className="text-amber-400">Nutrition Manual</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-10">
              Long before nutrition labels and dietary guidelines, God provided a complete nutritional framework in scripture. Modern science is only now catching up.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#articles"
                className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-full transition-colors text-base"
              >
                Explore the Articles
              </Link>
              <Link
                href={`/articles/${articles[0].slug}/`}
                className="border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-colors text-base backdrop-blur-sm"
              >
                Start with Article 1
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 bounce-slow flex flex-col items-center gap-1">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </section>

        {/* ── Stats strip ───────────────────────────────── */}
        <section className="bg-[#16503d] text-white py-12">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-4xl font-bold text-amber-400">{s.value}</p>
                <p className="text-sm text-gray-300 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── About strip ───────────────────────────────── */}
        <section id="about" className="bg-[#faf8f3] py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-4">Why This Matters</p>
            <h2 className="font-serif text-4xl font-bold text-[#16503d] mb-6">
              The Maker&rsquo;s Instruction Manual
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Every complex machine comes with instructions from its maker. The human body is no different. The Bible — written by the One who designed our biology — contains precise, practical guidance on what to eat, what to avoid, and how much is enough.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              This series explores 35 source documents covering every major area of nutrition science and maps them back to their biblical origins. Whether you are a student, a parent, or simply someone trying to eat better — this is for you.
            </p>
            <blockquote className="mt-8 italic text-[#16503d] font-serif text-xl border-l-4 border-amber-400 pl-6 text-left max-w-xl mx-auto">
              &ldquo;I wrote for them the many things of my law, but they regarded them as something foreign.&rdquo;
              <cite className="block not-italic text-sm text-amber-600 mt-2 font-sans font-semibold">— Hosea 8:12</cite>
            </blockquote>
          </div>
        </section>

        {/* ── Articles by zone ──────────────────────────── */}
        <section id="articles" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-3">10 Articles</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#16503d]">
                Explore the Series
              </h2>
            </div>

            {zones.map((zone) => (
              <div key={zone.label} className="mb-20">
                {/* Zone header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200" />
                  <div className="text-center px-4">
                    <h3 className="font-serif text-2xl font-bold text-[#16503d]">{zone.label}</h3>
                    <p className="text-sm text-gray-500 mt-1">{zone.description}</p>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200" />
                </div>

                {/* Cards grid */}
                <div className={`grid gap-6 ${
                  zone.slugs.length === 2
                    ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
                    : zone.slugs.length === 3
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {zone.slugs.map((slug) => {
                    const article = articlesBySlug[slug]
                    return article ? <ArticleCard key={slug} article={article} /> : null
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA banner ────────────────────────────────── */}
        <section className="relative py-24 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1800&q=80"
            alt="Vibrant colourful vegetables"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#16503d]/85" />
          <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              Ready to Eat<br />
              <span className="text-amber-400">as God Intended?</span>
            </h2>
            <p className="text-gray-200 text-lg mb-8 leading-relaxed">
              Start with Article 1 and follow the series in order, or jump directly to the topic that matters most to you right now.
            </p>
            <Link
              href={`/articles/${articles[0].slug}/`}
              className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-4 rounded-full transition-colors text-base"
            >
              Begin the Journey →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
