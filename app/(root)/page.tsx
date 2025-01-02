import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Header from '@/components/header'
import Footer from '@/components/footer'
import shoppingBag from "@/assets/images/undraw_shopping-bags.svg"
import onlineShopping from "@/assets/images/Online Shopping Concept.jpg"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
      <div className="px-[15px] h-[70vh] grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:mt-0 mt-10">
          {/* Left Column */}
          <div className="space-y-6 mx-auto md:text-start text-center">
            <h1 className="text-5xl  md:text-7xl font-bold">
              <span className="text-[#FF6B6B]">Happy</span>
              <br />
              <span className="text-[#2A9D8F]">Shopping</span>
            </h1>
            <p className="text-gray-600 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
            <Button 
              className="bg-[#FF6B6B] hover:bg-coral-red/90  rounded-full px-8"
            >
              READ MORE
            </Button>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full bg-teal-500/10"
                  style={{
                    gridColumn: Math.floor(Math.random() * 3) + 1,
                    gridRow: Math.floor(Math.random() * 3) + 1,
                  }}
                />
              ))}
            </div>
            <Image
              src={shoppingBag}
              alt="Happy Shopping Illustration"
              width={600}
              height={600}
              priority
              className="relative z-10"
            />
          </div>
        </div>
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center">
          <Image
            src={onlineShopping}
            alt="DreamNeed Fashion"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to DreamNeed</h1>
            <p className="text-xl md:text-2xl mb-8">Discover the latest fashion trends in Bangladesh</p>
            <Button asChild size="lg">
              <Link href="/shop">Shop Now</Link>
            </Button>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="transition-transform hover:scale-105">
                <CardHeader>
                  <CardTitle>Product {i}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={`/product-${i}.jpg`}
                    alt={`Product ${i}`}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover rounded-md"
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="font-bold">৳1999</span>
                  <Button>Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 px-4 md:px-8 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Men', 'Women', 'Accessories', 'Traditional'].map((category) => (
              <Link key={category} href={`/category/${category.toLowerCase()}`} className="group">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={`/${category.toLowerCase()}-category.jpg`}
                    alt={category}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{category}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

