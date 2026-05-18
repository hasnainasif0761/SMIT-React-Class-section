import { useState } from 'react'
import { FiTrash2, FiShoppingCart } from 'react-icons/fi'

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([
    { id: 1, name: 'iPhone 15 Pro', price: 'Rs 250,000', image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'MacBook Air M2', price: 'Rs 320,000', image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'AirPods Pro', price: 'Rs 45,000', image: 'https://via.placeholder.com/200' },
  ])

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id))
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Wishlist</h1>
      
      {wishlist.length === 0? (
        <div className="bg-white p-12 rounded-xl shadow-sm text-center">
          <p className="text-gray-500">Your wishlist is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-2xl font-bold text-purple-600 mb-4">{item.price}</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 flex items-center justify-center gap-2">
                    <FiShoppingCart /> Add to Cart
                  </button>
                  <button 
                    onClick={() => removeFromWishlist(item.id)}
                    className="p-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}