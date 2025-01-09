import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const products = [
  { id: 1, name: "Wireless Earbuds", price: 99.99, image: "/placeholder.svg?height=200&width=200", discount: 10 },
  { id: 2, name: "Smart Watch", price: 199.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Bluetooth Speaker", price: 79.99, image: "/placeholder.svg?height=200&width=200", discount: 15 },
  { id: 4, name: "Laptop Backpack", price: 59.99, image: "/placeholder.svg?height=200&width=200" },
]

export default function FeaturedProducts() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              {product.discount && (
                <Badge className="absolute top-2 right-2 bg-red-500">
                  {product.discount}% OFF
                </Badge>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

