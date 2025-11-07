import { useState } from 'react'

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='min-h-screen bg-white'>
      {/* Apple-style Navigation */}
      <nav className='fixed top-0 w-full bg-[#161617]/80 backdrop-blur-2xl border-b border-white/10 z-50'>
        <div className='max-w-[980px] mx-auto px-6'>
          <div className='flex justify-between items-center h-11'>
            {/* Logo */}
            <div className='flex items-center'>
              <svg className='w-5 h-5 text-white cursor-pointer' viewBox='0 0 14 44' fill='currentColor'>
                <path d='M12.5 18.5c-.3 0-1.2-.1-2.2-.1-1.1 0-2.2.1-2.2.1-.7 0-1.2-.5-1.2-1.2 0-.6.4-1.1 1-1.2.1 0 1.2-.1 2.4-.1 1.2 0 2.3.1 2.4.1.6.1 1 .6 1 1.2 0 .7-.5 1.2-1.2 1.2zm-5-9.5c.8-.8 1.3-1.9 1.2-3.1-1.2.1-2.6.8-3.4 1.7-.8.8-1.4 2-1.3 3.2 1.3.1 2.7-.7 3.5-1.8zm4.3 16.6c-1.2 0-2.2-.8-2.8-.8-.6 0-1.6.8-2.6.8-2.7 0-5.4-3.3-5.4-6.6 0-3.3 2-5 3.9-5 1.2 0 2.2.8 2.9.8.7 0 1.8-.9 3.1-.9.5 0 2.4.1 3.6 1.6-2.2 1.2-1.9 4.4.4 5.3-.5 1.2-1.8 3.8-3.1 3.8z'></path>
              </svg>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8 text-xs'>
              <a href='#' className='text-white/90 hover:text-white transition-colors'>Store</a>
              <a href='#' className='text-white/90 hover:text-white transition-colors'>Mac</a>
              <a href='#' className='text-white/90 hover:text-white transition-colors'>iPad</a>
              <a href='#' className='text-white/90 hover:text-white transition-colors'>iPhone</a>
              <a href='#' className='text-white/90 hover:text-white transition-colors'>Watch</a>
              <a href='#' className='text-white/90 hover:text-white transition-colors'>AirPods</a>
              <a href='#' className='text-white/90 hover:text-white transition-colors'>TV & Home</a>
              <a href='#' className='text-white/90 hover:text-white transition-colors'>Entertainment</a>
              <a href='#' className='text-white/90 hover:text-white transition-colors'>Accessories</a>
              <a href='#' className='text-white/90 hover:text-white transition-colors'>Support</a>
            </div>

            {/* Search and Bag Icons */}
            <div className='flex items-center space-x-4'>
              <button className='text-white/90 hover:text-white'>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
              </button>
              <button className='text-white/90 hover:text-white'>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
                </svg>
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='md:hidden text-white/90 hover:text-white'
              >
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  {isMenuOpen ? (
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                  ) : (
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className='md:hidden py-4 space-y-3 border-t border-white/10'>
              <a href='#' className='block text-sm text-white/90 hover:text-white'>Store</a>
              <a href='#' className='block text-sm text-white/90 hover:text-white'>Mac</a>
              <a href='#' className='block text-sm text-white/90 hover:text-white'>iPad</a>
              <a href='#' className='block text-sm text-white/90 hover:text-white'>iPhone</a>
              <a href='#' className='block text-sm text-white/90 hover:text-white'>Watch</a>
              <a href='#' className='block text-sm text-white/90 hover:text-white'>AirPods</a>
              <a href='#' className='block text-sm text-white/90 hover:text-white'>TV & Home</a>
              <a href='#' className='block text-sm text-white/90 hover:text-white'>Entertainment</a>
              <a href='#' className='block text-sm text-white/90 hover:text-white'>Accessories</a>
              <a href='#' className='block text-sm text-white/90 hover:text-white'>Support</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - iPhone 15 Pro */}
      <section className='pt-11 bg-black text-white'>
        <div className='max-w-[980px] mx-auto px-6 pt-12 pb-16 text-center'>
          <h2 className='text-6xl md:text-7xl font-semibold mb-2 tracking-tight'>iPhone 15 Pro</h2>
          <p className='text-2xl md:text-3xl mb-6 text-gray-400'>Titanium. So strong. So light. So Pro.</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
            <a href='#' className='text-[#2997ff] hover:underline text-xl'>Learn more &gt;</a>
            <a href='#' className='text-[#2997ff] hover:underline text-xl'>Buy &gt;</a>
          </div>
          <div className='relative w-full h-[600px] flex items-center justify-center'>
            <div className='relative w-full max-w-2xl aspect-[9/16] max-h-[600px]'>
              <img 
                src='https://www.apple.com/v/iphone-15-pro/b/images/overview/welcome/hero__beyq9df7n5sy_large.jpg' 
                alt='iPhone 15 Pro'
                className='w-full h-full object-contain'
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1696446702183-cbd2c6f36c17?w=800'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* iPhone 15 Section */}
      <section className='bg-white text-black'>
        <div className='max-w-[980px] mx-auto px-6 pt-12 pb-16 text-center'>
          <h2 className='text-6xl md:text-7xl font-semibold mb-2 tracking-tight'>iPhone 15</h2>
          <p className='text-2xl md:text-3xl mb-6 text-gray-600'>New camera. New design. Newphoria.</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
            <a href='#' className='text-[#2997ff] hover:underline text-xl'>Learn more &gt;</a>
            <a href='#' className='text-[#2997ff] hover:underline text-xl'>Buy &gt;</a>
          </div>
          <div className='relative w-full h-[600px] flex items-center justify-center'>
            <div className='relative w-full max-w-2xl aspect-[9/16] max-h-[600px]'>
              <img 
                src='https://www.apple.com/v/iphone-15/a/images/overview/welcome/hero__bwlqt8x8wvau_large.jpg' 
                alt='iPhone 15'
                className='w-full h-full object-contain'
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Grid */}
      <section className='grid md:grid-cols-2 gap-3 px-3 pb-3'>
        {/* Apple Watch */}
        <div className='bg-black text-white pt-12 pb-16 text-center rounded-3xl overflow-hidden'>
          <div className='px-6'>
            <div className='flex items-center justify-center mb-2'>
              <svg className='h-11' viewBox='0 0 38 44' fill='currentColor'>
                <path d='M32.5 24.1c0-4.9 4-7.2 4.2-7.4-2.3-3.3-5.9-3.8-7.1-3.8-3-0.3-5.9 1.8-7.4 1.8s-3.9-1.7-6.4-1.7c-3.3 0.1-6.3 1.9-8 4.9-3.4 5.9-0.9 14.7 2.5 19.5 1.6 2.4 3.5 5 6.1 4.9 2.5-0.1 3.4-1.6 6.4-1.6s3.8 1.6 6.4 1.6c2.7 0 4.3-2.4 5.9-4.8 1.9-2.8 2.7-5.5 2.7-5.6-0.1 0-5.2-2-5.3-7.8z'></path>
                <path d='M26.5 6.5c1.3-1.6 2.2-3.8 2-6-1.9 0.1-4.2 1.3-5.6 2.9-1.2 1.4-2.3 3.7-2 5.9 2.1 0.1 4.3-1.1 5.6-2.8z'></path>
              </svg>
              <span className='text-3xl font-semibold ml-2'>WATCH</span>
            </div>
            <p className='text-xl mb-1 text-red-500 font-semibold'>SERIES 9</p>
            <p className='text-2xl mb-6'>Smarter. Brighter. Mightier.</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
              <a href='#' className='text-[#2997ff] hover:underline text-lg'>Learn more &gt;</a>
              <a href='#' className='text-[#2997ff] hover:underline text-lg'>Buy &gt;</a>
            </div>
            <div className='relative h-[300px] flex items-center justify-center'>
              <img 
                src='https://www.apple.com/v/home/takeover/l/images/overview/hero/apple_watch_series_9__b8bnbahw97e6_large.jpg' 
                alt='Apple Watch'
                className='max-h-full object-contain'
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600'
                }}
              />
            </div>
          </div>
        </div>

        {/* MacBook Pro */}
        <div className='bg-black text-white pt-12 pb-16 text-center rounded-3xl overflow-hidden'>
          <div className='px-6'>
            <h2 className='text-5xl font-semibold mb-2'>MacBook Pro</h2>
            <p className='text-2xl mb-6 text-gray-400'>Mind-blowing. Head-turning.</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
              <a href='#' className='text-[#2997ff] hover:underline text-lg'>Learn more &gt;</a>
              <a href='#' className='text-[#2997ff] hover:underline text-lg'>Buy &gt;</a>
            </div>
            <div className='relative h-[300px] flex items-center justify-center'>
              <img 
                src='https://www.apple.com/v/macbook-pro/ak/images/overview/hero/hero_intro_endframe__dk7hctk6h7me_large.jpg' 
                alt='MacBook Pro'
                className='max-h-full object-contain'
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600'
                }}
              />
            </div>
          </div>
        </div>

        {/* AirPods Pro */}
        <div className='bg-[#f5f5f7] text-black pt-12 pb-16 text-center rounded-3xl overflow-hidden'>
          <div className='px-6'>
            <h2 className='text-5xl font-semibold mb-2'>AirPods Pro</h2>
            <p className='text-2xl mb-6 text-gray-600'>Adaptive Audio. Now playing.</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
              <a href='#' className='text-[#2997ff] hover:underline text-lg'>Learn more &gt;</a>
              <a href='#' className='text-[#2997ff] hover:underline text-lg'>Buy &gt;</a>
            </div>
            <div className='relative h-[300px] flex items-center justify-center'>
              <img 
                src='https://www.apple.com/v/airpods-pro/j/images/overview/hero__gz0hoxr85eie_large.jpg' 
                alt='AirPods Pro'
                className='max-h-full object-contain'
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600'
                }}
              />
            </div>
          </div>
        </div>

        {/* iPad Pro */}
        <div className='bg-[#f5f5f7] text-black pt-12 pb-16 text-center rounded-3xl overflow-hidden'>
          <div className='px-6'>
            <h2 className='text-5xl font-semibold mb-2'>iPad Pro</h2>
            <p className='text-2xl mb-6 text-gray-600'>Supercharged by M2.</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
              <a href='#' className='text-[#2997ff] hover:underline text-lg'>Learn more &gt;</a>
              <a href='#' className='text-[#2997ff] hover:underline text-lg'>Buy &gt;</a>
            </div>
            <div className='relative h-[300px] flex items-center justify-center'>
              <img 
                src='https://www.apple.com/v/ipad-pro/ak/images/overview/hero/hero_endframe__bzu5zy4c6kgi_large.jpg' 
                alt='iPad Pro'
                className='max-h-full object-contain'
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600'
                }}
              />
            </div>
          </div>
        </div>

        {/* Apple TV 4K */}
        <div className='bg-black text-white pt-12 pb-16 text-center rounded-3xl overflow-hidden'>
          <div className='px-6'>
            <div className='flex items-center justify-center mb-2'>
              <svg className='h-10' viewBox='0 0 64 44' fill='currentColor'>
                <path d='M49.9 11.8c-1.1 0-2.9.3-4.6.3-1.7 0-3.5-.3-4.6-.3-1.2 0-2.1.9-2.1 2.1 0 1.1.8 1.9 1.7 2 .2 0 2 .3 4 .3 2 0 3.8-.3 4-.3.9-.1 1.7-.9 1.7-2 0-1.2-.9-2.1-2.1-2.1zm-8.3-15.8c1.3-1.4 2.2-3.4 2-5.4-2.1.1-4.6 1.4-6.1 3.1-1.3 1.4-2.4 3.6-2.1 5.8 2.2.1 4.6-1.2 6.2-3.5zm7.2 27.5c-2.1 0-3.8-1.4-4.8-1.4-1.1 0-2.7 1.4-4.5 1.4-4.6 0-9.2-5.7-9.2-11.4 0-5.7 3.4-8.6 6.7-8.6 2.1 0 3.8 1.4 5 1.4 1.2 0 3.1-1.5 5.4-1.5.9 0 4.1.2 6.2 2.8-3.8 2.1-3.2 7.6.7 9.2-.9 2.1-3.1 6.5-5.5 6.5z'></path>
              </svg>
              <span className='text-2xl font-semibold ml-2'>TV 4K</span>
            </div>
            <p className='text-2xl mb-6'>The Apple experience.<br/>Cinematic in every sense.</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
              <a href='#' className='text-[#2997ff] hover:underline text-lg'>Learn more &gt;</a>
              <a href='#' className='text-[#2997ff] hover:underline text-lg'>Buy &gt;</a>
            </div>
            <div className='relative h-[300px] flex items-center justify-center'>
              <img 
                src='https://www.apple.com/v/apple-tv-4k/i/images/overview/hero/hero__dbphk49ifbhy_large.jpg' 
                alt='Apple TV 4K'
                className='max-h-full object-contain'
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1593078165-75f1338c816c?w=600'
                }}
              />
            </div>
          </div>
        </div>

        {/* HomePod */}
        <div className='bg-[#f5f5f7] text-black pt-12 pb-16 text-center rounded-3xl overflow-hidden'>
          <div className='px-6'>
            <h2 className='text-5xl font-semibold mb-2'>HomePod</h2>
            <p className='text-2xl mb-6 text-gray-600'>Profound sound.</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
              <a href='#' className='text-[#2997ff] hover:underline text-lg'>Learn more &gt;</a>
              <a href='#' className='text-[#2997ff] hover:underline text-lg'>Buy &gt;</a>
            </div>
            <div className='relative h-[300px] flex items-center justify-center'>
              <img 
                src='https://www.apple.com/v/homepod/j/images/overview/hero/hero_homepod__eam53d677ya6_large.jpg' 
                alt='HomePod'
                className='max-h-full object-contain'
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=600'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-[#f5f5f7] text-[#6e6e73] py-8 px-6 mt-3'>
        <div className='max-w-[980px] mx-auto'>
          <div className='text-xs leading-relaxed mb-6'>
            <p className='mb-2'>1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple's trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.</p>
          </div>
          
          <div className='grid grid-cols-2 md:grid-cols-5 gap-8 mb-6 text-xs'>
            <div>
              <h3 className='font-semibold text-black mb-2'>Shop and Learn</h3>
              <ul className='space-y-2'>
                <li><a href='#' className='hover:text-black'>Store</a></li>
                <li><a href='#' className='hover:text-black'>Mac</a></li>
                <li><a href='#' className='hover:text-black'>iPad</a></li>
                <li><a href='#' className='hover:text-black'>iPhone</a></li>
                <li><a href='#' className='hover:text-black'>Watch</a></li>
                <li><a href='#' className='hover:text-black'>AirPods</a></li>
                <li><a href='#' className='hover:text-black'>TV & Home</a></li>
                <li><a href='#' className='hover:text-black'>AirTag</a></li>
                <li><a href='#' className='hover:text-black'>Accessories</a></li>
                <li><a href='#' className='hover:text-black'>Gift Cards</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className='font-semibold text-black mb-2'>Services</h3>
              <ul className='space-y-2'>
                <li><a href='#' className='hover:text-black'>Apple Music</a></li>
                <li><a href='#' className='hover:text-black'>Apple TV+</a></li>
                <li><a href='#' className='hover:text-black'>Apple Fitness+</a></li>
                <li><a href='#' className='hover:text-black'>Apple News+</a></li>
                <li><a href='#' className='hover:text-black'>Apple Arcade</a></li>
                <li><a href='#' className='hover:text-black'>iCloud+</a></li>
                <li><a href='#' className='hover:text-black'>Apple One</a></li>
                <li><a href='#' className='hover:text-black'>Apple Card</a></li>
                <li><a href='#' className='hover:text-black'>Apple Books</a></li>
                <li><a href='#' className='hover:text-black'>Apple Podcasts</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className='font-semibold text-black mb-2'>Apple Store</h3>
              <ul className='space-y-2'>
                <li><a href='#' className='hover:text-black'>Find a Store</a></li>
                <li><a href='#' className='hover:text-black'>Genius Bar</a></li>
                <li><a href='#' className='hover:text-black'>Today at Apple</a></li>
                <li><a href='#' className='hover:text-black'>Apple Camp</a></li>
                <li><a href='#' className='hover:text-black'>Apple Store App</a></li>
                <li><a href='#' className='hover:text-black'>Refurbished</a></li>
                <li><a href='#' className='hover:text-black'>Financing</a></li>
                <li><a href='#' className='hover:text-black'>Apple Trade In</a></li>
                <li><a href='#' className='hover:text-black'>Order Status</a></li>
                <li><a href='#' className='hover:text-black'>Shopping Help</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className='font-semibold text-black mb-2'>For Business</h3>
              <ul className='space-y-2'>
                <li><a href='#' className='hover:text-black'>Apple and Business</a></li>
                <li><a href='#' className='hover:text-black'>Shop for Business</a></li>
              </ul>
              
              <h3 className='font-semibold text-black mb-2 mt-4'>For Education</h3>
              <ul className='space-y-2'>
                <li><a href='#' className='hover:text-black'>Apple and Education</a></li>
                <li><a href='#' className='hover:text-black'>Shop for K-12</a></li>
                <li><a href='#' className='hover:text-black'>Shop for College</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className='font-semibold text-black mb-2'>Apple Values</h3>
              <ul className='space-y-2'>
                <li><a href='#' className='hover:text-black'>Accessibility</a></li>
                <li><a href='#' className='hover:text-black'>Education</a></li>
                <li><a href='#' className='hover:text-black'>Environment</a></li>
                <li><a href='#' className='hover:text-black'>Inclusion and Diversity</a></li>
                <li><a href='#' className='hover:text-black'>Privacy</a></li>
                <li><a href='#' className='hover:text-black'>Racial Equity and Justice</a></li>
                <li><a href='#' className='hover:text-black'>Supplier Responsibility</a></li>
              </ul>
              
              <h3 className='font-semibold text-black mb-2 mt-4'>About Apple</h3>
              <ul className='space-y-2'>
                <li><a href='#' className='hover:text-black'>Newsroom</a></li>
                <li><a href='#' className='hover:text-black'>Apple Leadership</a></li>
                <li><a href='#' className='hover:text-black'>Career Opportunities</a></li>
                <li><a href='#' className='hover:text-black'>Investors</a></li>
                <li><a href='#' className='hover:text-black'>Ethics & Compliance</a></li>
                <li><a href='#' className='hover:text-black'>Events</a></li>
                <li><a href='#' className='hover:text-black'>Contact Apple</a></li>
              </ul>
            </div>
          </div>
          
          <div className='border-t border-[#d2d2d7] pt-4 text-xs'>
            <p className='mb-2'>More ways to shop: <a href='#' className='text-[#06c] hover:underline'>Find an Apple Store</a> or <a href='#' className='text-[#06c] hover:underline'>other retailer</a> near you. Or call 1-800-MY-APPLE.</p>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
              <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
              <div className='flex flex-wrap gap-4 mt-2 md:mt-0'>
                <a href='#' className='hover:text-black'>Privacy Policy</a>
                <a href='#' className='hover:text-black'>Terms of Use</a>
                <a href='#' className='hover:text-black'>Sales and Refunds</a>
                <a href='#' className='hover:text-black'>Legal</a>
                <a href='#' className='hover:text-black'>Site Map</a>
              </div>
            </div>
            <div className='mt-2'>
              <a href='#' className='hover:text-black'>United States</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
