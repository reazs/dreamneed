import Link from 'next/link'
import { Home, ShoppingBag, Heart, Tag, Settings, HelpCircle, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: ShoppingBag, label: 'My Orders', href: '/orders' },
  { icon: Heart, label: 'Wishlist', href: '/wishlist' },
  { icon: Tag, label: 'New Arrivals', href: '/new-arrivals' },
  { icon: Settings, label: 'Account Settings', href: '/settings' },
  { icon: HelpCircle, label: 'Help & Support', href: '/support' },
]

export default function Sidebar() {
  return (
    <div className="bg-white w-64 min-h-screen p-4 fixed left-0 top-16 border-r border-gray-200">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-100">
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-4 w-56">
        <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </div>
    </div>
  )
}

