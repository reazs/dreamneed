'use client'

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart, Star, Info } from 'lucide-react'
import { AccessoryT } from "@/types"

interface AccessoryCardProps {
  accessory: AccessoryT 
}

export function AccessoryCard({ accessory }: AccessoryCardProps) {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-square">
        <Image
          src={accessory.images[0]}
          alt={accessory.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <Badge className="bg-primary text-primary-foreground">
            {accessory.category}
          </Badge>
          {accessory.isNewArrival && (
            <Badge variant="secondary">New Arrival</Badge>
          )}
          {accessory.isBestSeller && (
            <Badge variant="secondary">Best Seller</Badge>
          )}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold line-clamp-1">{accessory.name}</h3>
          <div className="flex flex-col items-end">
            <span className="text-lg font-bold text-primary">${accessory.price.toFixed(2)}</span>
            {accessory.discount && (
              <span className="text-sm text-muted-foreground line-through">
                ${(accessory.price / (1 - accessory.discount / 100)).toFixed(2)}
              </span>
            )}
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{accessory.description}</p>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(accessory.ratings.average) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">
              ({accessory.ratings.count})
            </span>
          </div>
          <span className="text-sm font-medium">
            {accessory.stock > 0 ? `${accessory.stock} in stock` : 'Out of stock'}
          </span>
        </div>
        <div className="flex flex-wrap gap-1">
          {accessory.materials.map((material, index) => (
            <Badge key={index} variant="outline">{material}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button className="flex-1" disabled={accessory.stock === 0}>
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
        <Button variant="outline" className="px-3">
          <Info className="w-4 h-4" />
          <span className="sr-only">More Info</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

