import { Inter, JetBrains_Mono } from 'next/font/google'

// Display and UI font - Inter
export const displayFont = Inter({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-display',
  display: 'swap',
})

export const uiFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ui',
  display: 'swap',
})

// Mono font - JetBrains Mono
export const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})
