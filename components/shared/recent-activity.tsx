import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, ShoppingCart } from 'lucide-react'

const activities = [
  { type: 'view', item: 'Wireless Earbuds', date: '2 hours ago', image: '/pink-dress.png?height=40&width=40' },
  { type: 'purchase', item: 'Smart Watch', date: '1 day ago', image: '/potter-1.jpg?height=40&width=40' },
  { type: 'view', item: 'Laptop Stand', date: '3 days ago', image: '/lehengas.jpg?height=40&width=40' },
]

export default function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="relative">
                <Image
                  src={activity.image} 
                  alt={activity.item}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 rounded-full bg-white p-0.5">
                  {activity.type === 'view' ? (
                    <Eye className="h-4 w-4 text-blue-500" />
                  ) : (
                    <ShoppingCart className="h-4 w-4 text-green-500" />
                  )}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {activity.item}
                </p>
                <p className="text-sm text-gray-500">
                  {activity.type === 'view' ? 'Viewed' : 'Purchased'} {activity.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

