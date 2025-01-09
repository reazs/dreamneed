import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, RotateCcw, Gift, Headphones } from 'lucide-react'

const actions = [
  { name: 'Track Order', icon: Truck, description: 'Check your order status' },
  { name: 'Return Item', icon: RotateCcw, description: 'Initiate a return or exchange' },
  { name: 'Redeem Points', icon: Gift, description: 'Use your reward points' },
  { name: 'Contact Support', icon: Headphones, description: 'Get help from our team' },
]

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {actions.map((action) => (
          <Button key={action.name} variant="outline" className="w-full justify-start h-auto py-4">
            <div className="flex items-center">
              <div className="rounded-full bg-primary/10 p-2 mr-4">
                <action.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">{action.name}</div>
                <p className="text-sm text-muted-foreground">{action.description}</p>
              </div>
            </div>
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}

