import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <div className="flex items-center justify-center min-h-screen bg-purple-200">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-semibold">Welcome to Your Dashboard</h1>
        <p className="text-gray-700 mt-2">
          This is the place where you can manage your account.
        </p>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300">
            Update Profile
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard