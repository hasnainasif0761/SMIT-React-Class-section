import { useUser, UserButton, UserProfile } from '@clerk/clerk-react'
import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { FiShoppingBag, FiHeart, FiMapPin, FiUser, FiLogOut, FiMenu } from 'react-icons/fi'

// 1. Main Dashboard Layout
function Dashboard() {
  const { user } = useUser()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <DashboardNav user={user} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet /> {/* Yahan nested routes render honge */}
        </main>
      </div>
    </div>
  )
}

// 2. Sidebar Component
function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate()

  const menuItems = [
    { name: 'Overview', path: '/dashboard', icon: <FiUser /> },
    { name: 'My Orders', path: '/dashboard/orders', icon: <FiShoppingBag /> },
    { name: 'Wishlist', path: '/dashboard/wishlist', icon: <FiHeart /> },
    { name: 'Addresses', path: '/dashboard/addresses', icon: <FiMapPin /> },
    { name: 'Profile Settings', path: '/dashboard/profile', icon: <FiUser /> },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white
        transform ${isOpen? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 transition-transform duration-200
      `}>
        <div className="p-6">
          <h2 className="text-2xl font-bold">My Account</h2>
        </div>

        <nav className="mt-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/dashboard'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition ${
                  isActive? 'bg-gray-800 border-l-4 border-purple-500' : ''
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}

// 3. Dashboard Top Nav
function DashboardNav({ user, toggleSidebar }) {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6">
      <button onClick={toggleSidebar} className="lg:hidden">
        <FiMenu size={24} />
      </button>

      <div className="flex items-center gap-4 ml-auto">
        <span className="text-gray-700">Hi, {user?.firstName}</span>
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  )
}
// 4. Dashboard Pages
function Overview() {
  const { user } = useUser()
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Orders" value="12" />
        <StatCard title="Wishlist Items" value="5" />
        <StatCard title="Total Spent" value="Rs 45,000" />
      </div>
    </div>
  )
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  )
}

function Orders() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">Order ID</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-6 py-4">#12345</td>
              <td className="px-6 py-4">15 May 2026</td>
              <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">Delivered</span></td>
              <td className="px-6 py-4">Rs 5,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Wishlist() {
  return <h1 className="text-3xl font-bold">My Wishlist</h1>
}

function Addresses() {
  return <h1 className="text-3xl font-bold">Saved Addresses</h1>
}

function ProfileSettings() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
      {/* Clerk ka UserProfile yahan embed kar sakte ho */}
      {/* <div className="bg-white rounded-lg shadow p-6"> */}
        <UserProfile/>
    </div>
  )
}
export default Dashboard
export { Overview, Orders, Wishlist, Addresses, ProfileSettings }