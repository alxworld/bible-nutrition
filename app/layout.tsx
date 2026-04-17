import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bible & Nutrition — God\'s Original Health Manual',
  description:
    'Discover how the Bible\'s nutritional wisdom aligns perfectly with modern science. 10 evidence-based articles on food, health, and the Creator\'s design.',
  keywords: 'Bible nutrition, biblical diet, healthy eating, God food, scripture health',
  openGraph: {
    title: 'Bible & Nutrition',
    description: 'The Bible is humanity\'s original nutrition manual. Modern science is catching up.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  )
}
