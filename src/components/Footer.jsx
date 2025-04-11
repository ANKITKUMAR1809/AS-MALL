import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:flex-row lg:justify-between">
        
        {/* Navigation Links */}
        <div className="flex flex-col items-center lg:items-start gap-4">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <Link to="/" className="hover:underline text-gray-300">Home</Link>
          <Link to="/men" className="hover:underline text-gray-300">Men</Link>
          <Link to="/women" className="hover:underline text-gray-300">Women</Link>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Subscribe to our Newsletter</h2>
          <input 
            type="email" 
            placeholder="youremail@gmail.com" 
            className="px-4 py-2 rounded-md text-black w-full max-w-sm"
          />
          <button className="mt-3 bg-blue-700 hover:bg-blue-600 transition-colors text-white px-6 py-2 rounded-md shadow-md">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center border-t border-gray-700 mt-10 pt-4">
        <p className="text-sm text-gray-400">SAK © AK THE PROGRAMMER</p>
      </div>
    </footer>
  )
}

export default Footer
