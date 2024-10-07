import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">MyApp</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
            <Link to="/signup" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar