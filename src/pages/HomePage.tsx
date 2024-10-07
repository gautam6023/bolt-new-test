import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to MyApp</h1>
      <p className="text-xl mb-8">Get started by logging in or signing up.</p>
      <div className="space-x-4">
        <Link to="/login" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
          Login
        </Link>
        <Link to="/signup" className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default HomePage