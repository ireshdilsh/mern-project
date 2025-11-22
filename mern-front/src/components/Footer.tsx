import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-400 py-12'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8'>
          <div className='lg:col-span-1'>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center'>
                <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                </svg>
              </div>
              <span className='text-xl font-bold text-white'>MemoryVerse</span>
            </div>
            <p className='text-sm mb-4'>Preserving family memories with AI-powered technology.</p>
            <div className='flex space-x-4'>
              <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'><path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' /></svg>
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'><path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' /></svg>
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'><path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z' /></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className='text-white font-semibold mb-4'>Product</h4>
            <ul className='space-y-2 text-sm'>
              <li><a href='#features' className='hover:text-white transition-colors'>Features</a></li>
              <li><Link to='/pricing' className='hover:text-white transition-colors'>Pricing</Link></li>
              <li><a href='#' className='hover:text-white transition-colors'>Security</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h4 className='text-white font-semibold mb-4'>Company</h4>
            <ul className='space-y-2 text-sm'>
              <li><Link to='/about' className='hover:text-white transition-colors'>About</Link></li>
              <li><Link to='/blog' className='hover:text-white transition-colors'>Blog</Link></li>
              <li><Link to='/careers' className='hover:text-white transition-colors'>Careers</Link></li>
              <li><Link to='/press' className='hover:text-white transition-colors'>Press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='text-white font-semibold mb-4'>Support</h4>
            <ul className='space-y-2 text-sm'>
              <li><a href='#' className='hover:text-white transition-colors'>Help Center</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>Contact Us</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>Privacy Policy</a></li>
              <li><a href='#' className='hover:text-white transition-colors'>Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className='border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-sm'>© 2025 MemoryVerse. All rights reserved.</p>
          <p className='text-sm mt-4 md:mt-0'>Made with ❤️ for families everywhere</p>
        </div>
      </div>
    </footer>
  )
}
