'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          DreamNeed
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-primary">Home</Link>
          <Link href="/shop" className="text-gray-600 hover:text-primary">Shop</Link>
          <Link href="/about" className="text-gray-600 hover:text-primary">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <form className="flex w-full max-w-sm items-center space-x-2">
            <Input type="search" placeholder="Search..." />
            <Button type="submit">Search</Button>
          </form>
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            <Link href="/" className="text-gray-600 hover:text-primary">Home</Link>
            <Link href="/shop" className="text-gray-600 hover:text-primary">Shop</Link>
            <Link href="/about" className="text-gray-600 hover:text-primary">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link>
          </nav>
          <form className="flex items-center space-x-2 px-4 py-2">
            <Input type="search" placeholder="Search..." className="flex-grow" />
            <Button type="submit">Search</Button>
          </form>
          <div className="px-4 py-2">
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

