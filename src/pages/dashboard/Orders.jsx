import { useState } from 'react'
import { FiEye } from 'react-icons/fi'

export default function Orders() {
  const [orders] = useState([
    { id: '#ORD001', date: '15 May 2026', status: 'Delivered', total: 'Rs 5,000', items: 3 },
    { id: '#ORD002', date: '10 May 2026', status: 'Processing', total: 'Rs 12,500', items: 2 },
    { id: '#ORD003', date: '05 May 2026', status: 'Shipped', total: 'Rs 8,200', items: 1 },
  ])

  const getStatusColor = (status) => {
    const colors = {
      'Delivered': 'bg-green-100 text-green-800',
      'Processing': 'bg-yellow-100 text-yellow-800',
      'Shipped': 'bg-blue-100 text-blue-800',
      'Cancelled': 'bg-red-100 text-red-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Orders</h1>
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Order ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Items</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Total</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 text-gray-600">{order.items} items</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{order.total}</td>
                  <td className="px-6 py-4">
                    <button className="text-purple-600 hover:text-purple-800 flex items-center gap-1">
                      <FiEye /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}