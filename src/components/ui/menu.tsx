'use client'
import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
  { href: '/donate', label: 'Donate' },
]

export default function Menu() {
  return (
    <nav className="bg-green-700/90 rounded-xl mt-6 px-6 py-3 shadow flex flex-row flex-wrap justify-center gap-4">
      <ul className="flex flex-wrap items-center gap-6">
        {navItems.map(item => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-green-100 hover:text-white font-semibold px-3 py-2 rounded transition-colors hover:bg-green-900/40 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
