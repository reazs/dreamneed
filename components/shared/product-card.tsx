import Image from 'next/image'
import { Heart, ShoppingCart } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { productT } from "@/types"

interface ProductCardProps {
  product: productT
}

export function ProductCard({ product }: ProductCardProps) {
  const discountedPrice = product.discount 
    ? product.price - (product.price * product.discount / 100)
    : product.price;

  return (
    <Card className="group relative overflow-hidden">
      {/* Discount Badge */}
      {product.discount && (
        <div className="absolute top-2 right-2 z-10 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
          -{product.discount}%
        </div>
      )}
      
      {/* New Arrival Badge */}
      {product.isNewArrival && (
        <div className="absolute top-2 left-2 z-10 bg-blue-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
          New
        </div>
      )}

      {/* Wishlist Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 z-20"
      >
        <Heart className="h-5 w-5" />
      </Button>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <CardContent className="p-4">
        {/* Product Name */}
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold">৳{discountedPrice.toFixed(2)}</span>
          {product.discount && (
            <span className="text-sm text-muted-foreground line-through">
              ৳{product.price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Color Options */}
        <div className="flex items-center gap-2 mb-4">
          {product.colors.map((color) => (
            <div
              key={color}
              className="w-6 h-6 rounded-full border-2 border-gray-300"
              style={{ backgroundColor: color.toLowerCase() }}
              title={color}
            />
          ))}
        </div>

        {/* Size Options */}
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <Button
              key={size}
              variant="outline"
              size="sm"
              className="min-w-[3rem]"
            >
              {size}
            </Button>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 flex flex-col gap-2">
        <Button className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
        <Button variant="outline" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}

