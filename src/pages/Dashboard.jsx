import { useUser, UserButton, UserProfile } from '@clerk/clerk-react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FiGrid, FiShoppingBag, FiHeart, FiMapPin, FiSettings, FiMenu, FiX } from 'react-icons/fi'

export default function Dashboard() {
  const { user } = useUser()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav user={user} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 overflow-y-auto p-2 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export function Sidebar({ isOpen, setIsOpen }) {
  const menuItems = [
    { name: 'Overview', path: '/dashboard', icon: <FiGrid />, end: true },
    { name: 'My Orders', path: '/dashboard/orders', icon: <FiShoppingBag /> },
    { name: 'Wishlist', path: '/dashboard/wishlist', icon: <FiHeart /> },
    { name: 'Addresses', path: '/dashboard/addresses', icon: <FiMapPin /> },
    { name: 'Settings', path: '/dashboard/settings', icon: <FiSettings /> },
  ]

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white
        transform ${isOpen? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 transition-transform duration-300
      `}>
        <div className="flex items-center justify-between p-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button onClick={() => setIsOpen(false)} className="lg:hidden">
            <FiX size={24} />
          </button>
        </div>

        <nav className="mt-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
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

export function TopNav({ user, toggleSidebar }) {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6">
      <button onClick={toggleSidebar} className="lg:hidden">
        <FiMenu size={24} />
      </button>

      <div className="flex items-center gap-4 ml-auto">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-gray-900">{user?.fullName}</p>
          <p className="text-xs text-gray-500">{user?.primaryEmailAddress?.emailAddress}</p>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  )
}