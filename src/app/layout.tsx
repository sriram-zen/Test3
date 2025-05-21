import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { ThemeProvider } from '@/components/theme-switcher'
import { HeaderAuth } from '@/components/header-auth'
import { EnvVarWarning } from '@/components/env-var-warning'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Green Roots Platform',
  description: 'A privacy-first, community-driven platform for events, donations, and more',
  themeColor: '#043933',
  colorScheme: 'dark',
  openGraph: {
    title: 'Green Roots Platform',
    description: 'A privacy-first, community-driven platform for events, donations, and more',
    images: [
      {
        url: 'https://images.pexels.com/photos/31716531/pexels-photo-31716531/free-photo-of-dreamy-portrait-with-floral-face-art.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load',
        width: 1200,
        height: 800,
        alt: 'Green Roots Platform',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          'min-h-screen bg-[#043933] text-white antialiased flex flex-col'
        )}
        style={{ background: 'linear-gradient(135deg,#043933 60%,#145a52 100%)' }}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <header className="py-5 px-4 flex items-center justify-between bg-[#043933] shadow-lg z-20">
            <div className="flex items-center gap-4">
              <span className="font-extrabold text-2xl tracking-wide text-green-200 drop-shadow">Green Roots</span>
            </div>
            <nav className="flex items-center gap-4">
              {/* Menu and Auth Button appended below */}
              <a href="/" className="hover:text-green-300 font-medium transition">Home</a>
              <a href="/events" className="hover:text-green-300 font-medium transition">Events</a>
              <a href="/about" className="hover:text-green-300 font-medium transition">About</a>
              <a href="/gallery" className="hover:text-green-300 font-medium transition">Gallery</a>
              <a href="/contact" className="hover:text-green-300 font-medium transition">Contact</a>
              <a href="/donate" className="hover:text-green-300 font-medium transition">Donate</a>
              <HeaderAuth />
            </nav>
          </header>
          <EnvVarWarning />
          <main className="flex-1 flex flex-col">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
