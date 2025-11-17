import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn] = useState(false) // Toggle this to see logged in state

  return (
    <nav className='fixed top-0 w-full glass border-b border-slate-200 z-50 shadow-sm'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link to='/' className='flex items-center space-x-3 group'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl blur-md group-hover:blur-lg transition-all opacity-75'></div>
              <div className='relative bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-2.5 rounded-2xl'>
                <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                </svg>
              </div>
            </div>
            <span className='text-xl font-bold text-gradient tracking-tight'>
              MemoryVerse
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-1'>
            <Link to='/' className='px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all font-medium'>
              Home
            </Link>
            <Link to='/features' className='px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all font-medium'>
              Features
            </Link>
            <Link to='/pricing' className='px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all font-medium'>
              Pricing
            </Link>
            <Link to='/about' className='px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all font-medium'>
              About
            </Link>
          </div>

          {/* Auth Buttons / User Menu */}
          <div className='hidden md:flex items-center space-x-3'>
            {!isLoggedIn ? (
              <>
                <Link to='/login' className='px-5 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all font-medium'>
                  Sign In
                </Link>
                <Link to='/register' className='relative group px-6 py-2.5 rounded-xl font-semibold overflow-hidden'>
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 group-hover:scale-110 transition-transform'></div>
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity'></div>
                  <span className='relative text-white'>Get Started</span>
                </Link>
              </>
            ) : (
              <>
                <Link to='/dashboard' className='px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all font-medium'>
                  Dashboard
                </Link>
                <button className='flex items-center space-x-2 glass-card px-4 py-2 rounded-xl hover:bg-slate-50 transition-all group'>
                  <div className='relative'>
                    <div className='absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-sm group-hover:blur-md transition-all'></div>
                    <img src='https://ui-avatars.com/api/?name=John+Doe&background=gradient&color=fff' alt='User' className='relative w-8 h-8 rounded-full ring-2 ring-slate-200' />
                  </div>
                  <span className='font-medium text-slate-900'>John Doe</span>
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden text-slate-300 hover:text-white transition-colors'
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
          <div className='md:hidden py-4 space-y-2 border-t border-white/10'>
            <Link to='/' className='block px-4 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all font-medium'>
              Home
            </Link>
            <Link to='/features' className='block px-4 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all font-medium'>
              Features
            </Link>
            <Link to='/pricing' className='block px-4 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all font-medium'>
              Pricing
            </Link>
            <Link to='/about' className='block px-4 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all font-medium'>
              About
            </Link>
            <div className='pt-3 border-t border-white/10 space-y-2'>
              {!isLoggedIn ? (
                <>
                  <Link to='/login' className='block px-4 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all font-medium'>
                    Sign In
                  </Link>
                  <Link to='/register' className='block text-center px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white'>
                    Get Started
                  </Link>
                </>
              ) : (
                <Link to='/dashboard' className='block text-center px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white'>
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
