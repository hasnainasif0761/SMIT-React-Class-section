import { useUser } from '@clerk/clerk-react'
import { FiShoppingBag, FiHeart, FiDollarSign, FiPackage } from 'react-icons/fi'

export default function Overview() {
  const { user } = useUser()

  const stats = [
    { title: 'Total Orders', value: '12', icon: <FiShoppingBag />, color: 'bg-blue-500' },
    { title: 'Wishlist Items', value: '5', icon: <FiHeart />, color: 'bg-pink-500' },
    { title: 'Total Spent', value: 'Rs 45,000', icon: <FiDollarSign />, color: 'bg-green-500' },
    { title: 'Pending Orders', value: '2', icon: <FiPackage />, color: 'bg-orange-500' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Welcome back, {user?.firstName}! 👋
      </h1>
      <p className="text-gray-600 mb-8">Here's what's happening with your account</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.color} text-white p-3 rounded-lg`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
        <p className="text-gray-500">No recent orders yet</p>
      </div>
    </div>
  )
}