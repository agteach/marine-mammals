import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <nav className="flex justify-center fixed bottom-0 w-full z-50 space-x-8 mt-4 p-5 bg-gray-500 shadow-sm">
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
  )
}

export default Footer