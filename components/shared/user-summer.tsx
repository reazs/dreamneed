import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ShoppingBag, Heart, Gift } from 'lucide-react'

export default function UserSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
            <ShoppingBag className="h-8 w-8 text-indigo-500" />
          </div>
          <p className="text-xs text-gray-500 mt-2">3 orders this month</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Wishlist Items</p>
              <p className="text-2xl font-bold text-gray-900">17</p>
            </div>
            <Heart className="h-8 w-8 text-pink-500" />
          </div>
          <p className="text-xs text-gray-500 mt-2">5 items on sale</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Reward Points</p>
              <p className="text-2xl font-bold text-gray-900">1,240</p>
            </div>
            <Gift className="h-8 w-8 text-green-500" />
          </div>
          <Progress value={62} className="mt-2" />
          <p className="text-xs text-gray-500 mt-1">62% to next reward</p>
        </CardContent>
      </Card>
    </div>
  )
}

