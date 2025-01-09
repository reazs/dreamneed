import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const orders = [
  { id: 'ORD001', date: '2023-06-01', total: '$120.50', status: 'Delivered' },
  { id: 'ORD002', date: '2023-06-15', total: '$85.99', status: 'In Transit' },
  { id: 'ORD003', date: '2023-06-28', total: '$220.00', status: 'Processing' },
]

export default function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{order.id}</p>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{order.total}</p>
                <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>
                  {order.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4" variant="outline">View All Orders</Button>
      </CardContent>
    </Card>
  )
}

