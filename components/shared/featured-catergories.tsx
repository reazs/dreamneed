import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const categories = [
  { name: "Summer Collection", image: "/placeholder.svg?height=100&width=100" },
  { name: "Formal Wear", image: "/placeholder.svg?height=100&width=100" },
  { name: "Activewear", image: "/placeholder.svg?height=100&width=100" },
  { name: "Accessories", image: "/placeholder.svg?height=100&width=100" },
]

export default function FeaturedCategories() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gray-800">Featured Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center">
              <Image
                src={category.image}
                alt={category.name}
                width={100}
                height={100}
                className="rounded-md mb-2"
              />
              <h3 className="font-medium text-sm text-center text-gray-800">{category.name}</h3>
              <Button className="mt-2" size="sm" variant="outline">Shop Now</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

