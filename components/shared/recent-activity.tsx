import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Heart, Star } from 'lucide-react'

const activities = [
  { icon: ShoppingBag, content: 'You purchased Wireless Headphones', time: '2 hours ago', type: 'order' },
  { icon: Heart, content: 'You added Smart Watch to your wishlist', time: '1 day ago', type: 'wishlist' },
  { icon: Star, content: 'You reviewed Portable Charger', time: '3 days ago', type: 'review' },
  { icon: ShoppingBag, content: 'You purchased Laptop Backpack', time: '1 week ago', type: 'order' },
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
            <div key={index} className="flex items-center">
              <div className="mr-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <activity.icon className="h-4 w-4 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{activity.content}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              <Badge variant={activity.type === 'order' ? 'default' : 'secondary'}>
                {activity.type}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

