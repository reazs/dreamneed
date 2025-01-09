import BottomNav from "@/components/shared/bottom-nav";
import Header from "@/components/shared/header";
import OrderSummary from "@/components/shared/order-summary";
import { ProductCard } from "@/components/shared/product-card";
import RecentActivity from "@/components/shared/recent-activity";
import { products } from "@/lib/models/productData";


export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 mb-16 md:mb-0">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Welcome back, Alex</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <OrderSummary />
          <RecentActivity />
         
            
        </div>
             {/* Featured Products */}
             <section className="py-16   max-w-screen-xl mx-auto">
                   <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {products.map((product) => (
                       <ProductCard  product={product}/>
                     ))}
                   </div>
                 </section>
      </main>
      <BottomNav />
    </div>
  )
}

