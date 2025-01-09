import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const orders = [
  { id: 'ORD001', date: '2023-06-28', status: 'In Transit', eta: '2023-07-02' },
  { id: 'ORD002', date: '2023-06-15', status: 'Delivered', deliveredDate: '2023-06-20' },
]

export default function OrderSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4">
              <div>
                <p className="font-medium">{order.id}</p>
                <p className="text-sm text-gray-500">Ordered on {order.date}</p>
              </div>
              <div className="mt-2 sm:mt-0 sm:text-right">
                <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>
                  {order.status}
                </Badge>
                <p className="text-sm text-gray-500 mt-1">
                  {order.status === 'Delivered' 
                    ? `Delivered on ${order.deliveredDate}`
                    : `Estimated delivery: ${order.eta}`
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

