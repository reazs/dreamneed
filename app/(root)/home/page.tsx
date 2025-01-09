import Navbar from "@/components/navbar";
import FeaturedCategories from "@/components/shared/featured-catergories";
import Header from "@/components/shared/header";
import RecentlyViewed from "@/components/shared/recently-viewed";
import Sidebar from "@/components/shared/sidebar";
import UserSummary from "@/components/shared/user-summer";


export default function UserDashboard() {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header/>
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8 ml-64 mt-16"> {/* Added mt-16 for header height */}
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Welcome back, Taylor</h1>
            <div className="space-y-8">
              <UserSummary />
              <FeaturedCategories />
              <RecentlyViewed />
            </div>
          </main>
        </div>
      </div>
    )
  }
  
  

