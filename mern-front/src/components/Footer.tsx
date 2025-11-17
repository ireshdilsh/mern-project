import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-neutral-900 text-neutral-300'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Brand */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <div className='bg-gradient-to-br from-purple-600 to-pink-500 p-2 rounded-xl'>
                <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                </svg>
              </div>
              <span className='text-xl font-bold text-white'>MemoryKeeper</span>
            </div>
            <p className='text-sm'>AI-powered platform to preserve, organize, and relive your family memories.</p>
            <div className='flex space-x-4'>
              <a href='#' className='hover:text-purple-400 transition-colors'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/>
                </svg>
              </a>
              <a href='#' className='hover:text-purple-400 transition-colors'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'/>
                </svg>
              </a>
              <a href='#' className='hover:text-purple-400 transition-colors'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.03-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.176.943.112.78.89z'/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className='font-semibold text-white mb-4'>Product</h3>
            <ul className='space-y-2 text-sm'>
              <li><Link to='/features' className='hover:text-purple-400 transition-colors'>Features</Link></li>
              <li><Link to='/pricing' className='hover:text-purple-400 transition-colors'>Pricing</Link></li>
              <li><Link to='/faq' className='hover:text-purple-400 transition-colors'>FAQ</Link></li>
              <li><Link to='/roadmap' className='hover:text-purple-400 transition-colors'>Roadmap</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className='font-semibold text-white mb-4'>Company</h3>
            <ul className='space-y-2 text-sm'>
              <li><Link to='/about' className='hover:text-purple-400 transition-colors'>About Us</Link></li>
              <li><Link to='/blog' className='hover:text-purple-400 transition-colors'>Blog</Link></li>
              <li><Link to='/careers' className='hover:text-purple-400 transition-colors'>Careers</Link></li>
              <li><Link to='/contact' className='hover:text-purple-400 transition-colors'>Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className='font-semibold text-white mb-4'>Legal</h3>
            <ul className='space-y-2 text-sm'>
              <li><Link to='/privacy' className='hover:text-purple-400 transition-colors'>Privacy Policy</Link></li>
              <li><Link to='/terms' className='hover:text-purple-400 transition-colors'>Terms of Service</Link></li>
              <li><Link to='/cookies' className='hover:text-purple-400 transition-colors'>Cookie Policy</Link></li>
              <li><Link to='/security' className='hover:text-purple-400 transition-colors'>Security</Link></li>
            </ul>
          </div>
        </div>

        <div className='border-t border-neutral-800 mt-12 pt-8 text-sm text-center'>
          <p>&copy; 2025 MemoryKeeper. All rights reserved. Made with ❤️ for families worldwide.</p>
        </div>
      </div>
    </footer>
  )
}
