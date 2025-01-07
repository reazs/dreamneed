'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, ShoppingCart } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { productT } from "@/types"

interface ProductCardProps {
  product: productT
}

export function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const discountedPrice = product.discount 
    ? product.price - (product.price * product.discount / 100)
    : product.price;

  return (
    <Card className="group relative overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Discount Badge */}
        {product.discount && (
          <Badge variant="destructive" className="absolute top-2 left-2 z-10">
            {product.discount}% OFF
          </Badge>
        )}
        
        {/* Favorite Button */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart className={cn("h-4 w-4", isFavorite ? "fill-red-500 text-red-500" : "text-gray-600")} />
        </Button>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 text-gray-800 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">৳{discountedPrice.toFixed(2)}</span>
          {product.discount && (
            <span className="text-sm text-gray-400 line-through">৳{product.price.toFixed(2)}</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-1">
            {product.colors.map((color) => (
              <div
                key={color}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              />
            ))}
          </div>
          <div className="text-sm text-gray-500">
            {product.sizes.join(' / ')}
          </div>
        </div>
      </CardFooter>

      {/* Add to Cart Button */}
      <div className="absolute inset-x-0 bottom-0 p-4 bg-white/90 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </Card>
  )
}
