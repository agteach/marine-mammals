import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="text-center py-4 flex fixed top-0 w-full z-50  justify-between items-center px-6 bg-gray-50 shadow-sm">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          #VANLIFE
        </Link>

        <nav className="flex justify-center mb-8 space-x-6 mt-4">
          <Link to="/manatee" className="hover:text-blue-500">
            Manatee
          </Link>
          <Link to="/narwhal" className="hover:text-blue-500">
            Narwhal
          </Link>
          <Link to="/whale" className="hover:text-blue-500">
            Whale
          </Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
        </nav>
      </header>
  )
}

export default Header