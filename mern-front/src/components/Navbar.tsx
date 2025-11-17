import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn] = useState(false) // Change to true to see logged-in state

  return (
    <nav className='fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 shadow-sm border-b border-neutral-100'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link to='/' className='flex items-center space-x-2'>
            <div className='bg-gradient-to-br from-purple-600 to-pink-500 p-2 rounded-xl'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
              </svg>
            </div>
            <span className='text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent'>
              MemoryKeeper
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link to='/' className='text-neutral-600 hover:text-purple-600 transition-colors font-medium'>
              Home
            </Link>
            <Link to='/features' className='text-neutral-600 hover:text-purple-600 transition-colors font-medium'>
              Features
            </Link>
            <Link to='/pricing' className='text-neutral-600 hover:text-purple-600 transition-colors font-medium'>
              Pricing
            </Link>
            <Link to='/about' className='text-neutral-600 hover:text-purple-600 transition-colors font-medium'>
              About
            </Link>
          </div>

          {/* Auth Buttons / User Menu */}
          <div className='hidden md:flex items-center space-x-4'>
            {!isLoggedIn ? (
              <>
                <Link to='/login' className='text-neutral-600 hover:text-purple-600 transition-colors font-medium'>
                  Login
                </Link>
                <Link to='/register' className='bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-medium'>
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link to='/dashboard' className='text-neutral-600 hover:text-purple-600 transition-colors font-medium'>
                  Dashboard
                </Link>
                <button className='flex items-center space-x-2 bg-neutral-100 hover:bg-neutral-200 px-4 py-2 rounded-full transition-colors'>
                  <img src='https://ui-avatars.com/api/?name=John+Doe&background=9333ea&color=fff' alt='User' className='w-8 h-8 rounded-full' />
                  <span className='font-medium text-neutral-700'>John Doe</span>
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden text-neutral-600 hover:text-purple-600 transition-colors'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              {isMenuOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden py-4 space-y-3 border-t border-neutral-100'>
            <Link to='/' className='block text-neutral-600 hover:text-purple-600 transition-colors font-medium'>
              Home
            </Link>
            <Link to='/features' className='block text-neutral-600 hover:text-purple-600 transition-colors font-medium'>
              Features
            </Link>
            <Link to='/pricing' className='block text-neutral-600 hover:text-purple-600 transition-colors font-medium'>
              Pricing
            </Link>
            <Link to='/about' className='block text-neutral-600 hover:text-purple-600 transition-colors font-medium'>
              About
            </Link>
            <div className='pt-3 border-t border-neutral-100 space-y-3'>
              {!isLoggedIn ? (
                <>
                  <Link to='/login' className='block text-neutral-600 hover:text-purple-600 transition-colors font-medium'>
                    Login
                  </Link>
                  <Link to='/register' className='block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full text-center font-medium'>
                    Get Started
                  </Link>
                </>
              ) : (
                <Link to='/dashboard' className='block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full text-center font-medium'>
                  Dashboard
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
