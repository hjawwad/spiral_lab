import type { Metadata } from 'next'
import { displayFont, uiFont, monoFont } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Spiral Lab - AI Solutions & Machine Learning Services',
  description: 'We architect AI systems for organizations building the future. Autonomous agents, neural networks, and production-grade intelligence.',
  keywords: ['AI', 'Machine Learning', 'Autonomous Agents', 'AI Solutions', 'Spiral Lab'],
  authors: [{ name: 'Spiral Lab' }],
  manifest: '/manifest.json',
  openGraph: {
    title: 'Spiral Lab - AI Solutions & Machine Learning Services',
    description: 'We architect AI systems for organizations building the future.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spiral Lab - AI Solutions & Machine Learning Services',
    description: 'We architect AI systems for organizations building the future.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${uiFont.variable} ${monoFont.variable}`}
    >
      <body className={`${uiFont.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
