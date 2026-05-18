import { useState } from 'react'
import { FiPlus, FiEdit2, FiTrash2, FiHome } from 'react-icons/fi'

export default function Addresses() {
  const [addresses, setAddresses] = useState([
    { id: 1, name: 'Home', address: 'House 123, Street 4, Karachi', phone: '0300-1234567', isDefault: true },
    { id: 2, name: 'Office', address: 'Office 45, Main Boulevard, Lahore', phone: '0321-9876543', isDefault: false },
  ])
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Saved Addresses</h1>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700"
        >
          <FiPlus /> Add New Address
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
          <h3 className="text-lg font-semibold mb-4">Add New Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="border rounded-lg px-4 py-2" />
            <input type="text" placeholder="Phone Number" className="border rounded-lg px-4 py-2" />
            <input type="text" placeholder="Address" className="border rounded-lg px-4 py-2 md:col-span-2" />
            <input type="text" placeholder="City" className="border rounded-lg px-4 py-2" />
            <input type="text" placeholder="Postal Code" className="border rounded-lg px-4 py-2" />
          </div>
          <div className="flex gap-2 mt-4">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg">Save</button>
            <button onClick={() => setShowForm(false)} className="border px-6 py-2 rounded-lg">Cancel</button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((addr) => (
          <div key={addr.id} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <FiHome className="text-purple-600" />
                <h3 className="font-semibold text-lg">{addr.name}</h3>
                {addr.isDefault && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Default</span>
                )}
              </div>
              <div className="flex gap-2">
                <button className="text-blue-600 hover:text-blue-800"><FiEdit2 /></button>
                <button className="text-red-600 hover:text-red-800"><FiTrash2 /></button>
              </div>
            </div>
            <p className="text-gray-600 mb-2">{addr.address}</p>
            <p className="text-gray-600">{addr.phone}</p>
          </div>
        ))}
      </div>
    </div>
  )
}