import { UserProfile } from '@clerk/clerk-react'

export default function Settings() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Account Settings</h1>
      <div className="bg-white rounded-xl shadow-sm">
        <UserProfile 
          appearance={{
            elements: {
              card: "shadow-none",
              navbar: "hidden"
            }
          }}
        />
      </div>
    </div>
  )
}