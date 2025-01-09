import Link from 'next/link'
import { Bell, ShoppingCart, Search, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              StyleHub
            </Link>
          </div>
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input type="text" placeholder="Search for clothes..." className="pl-10 w-full" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-gray-600 hover:text-gray-900">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

