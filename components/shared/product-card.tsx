'use client'

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ShoppingCart, Eye } from 'lucide-react'
import { productT } from "@/types"

interface ProductCardProps {
  product: productT 
}

export function ProductCard({ product }: ProductCardProps) {
  const discountedPrice = product.discount 
    ? product.price - (product.price * product.discount / 100)
    : product.price;

  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <CardHeader className="p-0 relative">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={384}
          height={288}
          className="w-full h-72 object-cover object-top"
        />
        {product.discount && (
          <Badge className="absolute bg-red-500 hover:bg-red-500 top-2 right-2  text-primary-foreground">
            {product.discount}%
          </Badge>
        )}
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold line-clamp-1">{product.name}</h3>
          <div className="flex flex-col items-end">
            <span className="text-lg font-bold text-primary">${discountedPrice.toFixed(2)}</span>
            {product.discount && (
              <span className="text-sm text-muted-foreground line-through">${product.price.toFixed(2)}</span>
            )}
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between gap-2">
        <Button variant="outline" className="w-1/2">
          <Eye className="w-4 h-4 mr-2" />
          View Details
        </Button>
        <Button className="w-1/2">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

