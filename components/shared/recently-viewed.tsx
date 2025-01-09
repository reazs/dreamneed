import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const recentItems = [
  { id: 1, name: "Floral Summer Dress", price: 59.99, image: "/placeholder.svg?height=80&width=80" },
  { id: 2, name: "Classic White Shirt", price: 39.99, image: "/placeholder.svg?height=80&width=80" },
  { id: 3, name: "Denim Jacket", price: 79.99, image: "/placeholder.svg?height=80&width=80" },
  { id: 4, name: "Leather Handbag", price: 129.99, image: "/placeholder.svg?height=80&width=80" },
]

export default function RecentlyViewed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gray-800">Recently Viewed</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recentItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md mb-2"
              />
              <h3 className="font-medium text-sm text-center text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-600">${item.price}</p>
              <Button className="mt-2" size="sm">Add to Cart</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

