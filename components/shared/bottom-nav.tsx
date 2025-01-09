import Link from 'next/link'
import { Home, Package, Clock, User } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Package, label: 'Orders', href: '/orders' },
  { icon: Clock, label: 'Recent', href: '/recent' },
  { icon: User, label: 'Profile', href: '/profile' },
]

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="flex flex-col items-center py-2">
            <item.icon className="h-6 w-6 text-gray-600" />
            <span className="text-xs mt-1 text-gray-600">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

