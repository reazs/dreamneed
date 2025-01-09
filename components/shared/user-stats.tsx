import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, ShoppingBag, CreditCard, Truck } from 'lucide-react'

const stats = [
  { title: 'Total Orders', value: 48, icon: ShoppingBag },
  { title: 'Reward Points', value: 2150, icon: Award },
  { title: 'Total Spent', value: '$3,240', icon: CreditCard },
  { title: 'In Transit', value: 2, icon: Truck },
]

export default function UserStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

