import { useState } from 'react'

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='min-h-screen bg-white'>
      {/* Apple Navigation Bar - Exact replica */}
      <nav className='fixed top-0 w-full bg-[#161617]/80 backdrop-blur-2xl z-50'>
        <div className='max-w-[980px] mx-auto px-6'>
          <div className='flex justify-between items-center h-11'>
            {/* Apple Logo */}
            <a href='/' className='flex items-center'>
              <svg className='w-[15px] h-11 mt-5 text-[#f5f5f7] hover:text-white transition-colors' viewBox='0 0 14 44' fill='currentColor'>
                <path d='M12.5849 14.8672C12.2812 14.8672 11.5098 14.7754 10.7129 14.7754C9.91602 14.7754 9.14453 14.8672 9.14453 14.8672C8.59766 14.8672 8.16016 14.4297 8.16016 13.8828C8.16016 13.3613 8.5625 12.9492 9.0332 12.9238C9.0332 12.9238 9.91602 12.832 10.7129 12.832C11.5098 12.832 12.3926 12.9238 12.3926 12.9238C12.8633 12.9492 13.2656 13.3613 13.2656 13.8828C13.2656 14.4297 12.8281 14.8672 12.2812 14.8672H12.5849ZM7.32617 5.29297C8.11523 4.48047 8.66211 3.33398 8.53711 2.16211C7.41602 2.28711 6.09961 3.00586 5.28711 3.86914C4.52539 4.68164 3.95312 5.80273 4.10352 6.92383C5.27539 7.02344 6.51172 6.13086 7.32617 5.29297ZM11.6074 18.1738C10.3467 18.1738 9.49805 17.335 8.53711 17.335C7.55078 17.335 6.55273 18.2236 5.46875 18.2236C2.83398 18.2236 0.5 15.3359 0.5 12.2031C0.5 9.07031 2.43164 7.07422 4.52539 7.07422C5.71875 7.07422 6.625 7.88672 7.47461 7.88672C8.29883 7.88672 9.31836 7.02344 10.6885 7.02344C11.2354 7.02344 13.2656 7.12305 14.5 8.9375C11.7344 10.6055 12.1172 14.7012 14.5 15.6113C14.0039 16.8975 12.5918 18.9648 11.6074 18.1738Z'></path>
              </svg>
            </a>

            {/* Desktop Navigation Links */}
            <div className='hidden lg:flex items-center space-x-8 text-xs'>
              <a href='#store' className='text-[#f5f5f7] hover:text-white transition-colors font-light'>Store</a>
              <a href='#mac' className='text-[#f5f5f7] hover:text-white transition-colors font-light'>Mac</a>
              <a href='#ipad' className='text-[#f5f5f7] hover:text-white transition-colors font-light'>iPad</a>
              <a href='#iphone' className='text-[#f5f5f7] hover:text-white transition-colors font-light'>iPhone</a>
              <a href='#watch' className='text-[#f5f5f7] hover:text-white transition-colors font-light'>Watch</a>
              <a href='#airpods' className='text-[#f5f5f7] hover:text-white transition-colors font-light'>AirPods</a>
              <a href='#tv-home' className='text-[#f5f5f7] hover:text-white transition-colors font-light'>TV & Home</a>
              <a href='#entertainment' className='text-[#f5f5f7] hover:text-white transition-colors font-light'>Entertainment</a>
              <a href='#accessories' className='text-[#f5f5f7] hover:text-white transition-colors font-light'>Accessories</a>
              <a href='#support' className='text-[#f5f5f7] hover:text-white transition-colors font-light'>Support</a>
            </div>

            {/* Search and Shopping Bag Icons */}
            <div className='flex items-center space-x-4'>
              <button className='text-[#f5f5f7] hover:text-white transition-colors'>
                <svg className='w-[15px] h-11' fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
                </svg>
              </button>
              <button className='text-[#f5f5f7] hover:text-white transition-colors'>
                <svg className='w-[15px] h-11' fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' />
                </svg>
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='lg:hidden text-[#f5f5f7] hover:text-white transition-colors'
              >
                <svg className='w-[15px] h-11' fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24'>
                  {isMenuOpen ? (
                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                  ) : (
                    <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className='lg:hidden py-4 space-y-3 border-t border-white/10'>
              <a href='#store' className='block text-sm text-[#f5f5f7] hover:text-white font-light'>Store</a>
              <a href='#mac' className='block text-sm text-[#f5f5f7] hover:text-white font-light'>Mac</a>
              <a href='#ipad' className='block text-sm text-[#f5f5f7] hover:text-white font-light'>iPad</a>
              <a href='#iphone' className='block text-sm text-[#f5f5f7] hover:text-white font-light'>iPhone</a>
              <a href='#watch' className='block text-sm text-[#f5f5f7] hover:text-white font-light'>Watch</a>
              <a href='#airpods' className='block text-sm text-[#f5f5f7] hover:text-white font-light'>AirPods</a>
              <a href='#tv-home' className='block text-sm text-[#f5f5f7] hover:text-white font-light'>TV & Home</a>
              <a href='#entertainment' className='block text-sm text-[#f5f5f7] hover:text-white font-light'>Entertainment</a>
              <a href='#accessories' className='block text-sm text-[#f5f5f7] hover:text-white font-light'>Accessories</a>
              <a href='#support' className='block text-sm text-[#f5f5f7] hover:text-white font-light'>Support</a>
            </div>
          )}
        </div>
      </nav>

      <section className='bg-black mt-10 flex justify-center items-center flex-col'>
        <h1 className='text-5xl text-white font-semibold pt-16 z-50'>iPhone 17 Pro</h1>
        <h3 className='text-white text-3xl mt-4 font-normal z-50'>All out Pro.</h3>
        <div className='flex justify-center items-center gap-5 mt-5'>
          <button className='bg-blue-500 text-white text-lg px-5 py-2 rounded-4xl cursor-pointer z-10'>Learn more</button>
          <button className='border border-blue-500 text-blue-500 rounded-4xl px-5 py-2 text-lg cursor-pointer z-10 hover:bg-blue-500 hover:text-white'>Buy</button>
        </div>
        <img src='https://www.apple.com/v/home/ci/images/heroes/iphone-17-pro/hero_iphone_17_pro__bknyzxfk2agi_large.jpg' alt="iPhone 17 Pro" className='scale-180 -mt-20 object-cover w-full h-80' />
      </section>

      <section className='bg-[#f5f5f7] w-full flex justify-center items-center flex-col mt-36'>
        <h1 className='font-semibold text-5xl pt-10 z-50'>iPhone Air</h1>
        <h3 className='text-3xl mt-4 z-50 font-normal'>The thinnest iPhone ever.</h3>
        <h3 className='text-3xl z-50 font-normal'>With the power of pro inside.</h3>
        <div className='flex justify-center items-center gap-5 mt-5'>
          <button className='bg-blue-500 text-white text-lg px-5 py-2 rounded-4xl cursor-pointer z-10'>Learn more</button>
          <button className='border border-blue-500 text-blue-500 rounded-4xl px-5 py-2 text-lg cursor-pointer z-10 hover:bg-blue-500 hover:text-white'>Buy</button>
        </div>
        <img src="https://www.apple.com/v/home/ci/images/heroes/iphone-air/hero_iphone_air__0gxyavihpiqu_large.jpg" className='h-150 overflow-x-hidden object-cover -mt-40' alt="" />
      </section>

      <section className='mt-7 flex justify-center items-center flex-col'>
        <h1 className='font-semibold text-5xl pt-10 z-50'>iPad air</h1>
        <h3 className='text-3xl z-50 mt-4 font-normal'>Now supercharged by the M3 chip.</h3>
        <div className='flex justify-center items-center gap-5 mt-5'>
          <button className='bg-blue-500 text-white text-lg px-5 py-2 rounded-4xl cursor-pointer z-10'>Learn more</button>
          <button className='border border-blue-500 text-blue-500 rounded-4xl px-5 py-2 text-lg cursor-pointer z-10 hover:bg-blue-500 hover:text-white'>Buy</button>
        </div>
        <img src="https://www.apple.com/v/home/ci/images/heroes/ipad-air/hero_ipad_air_avail__c34ycq52exg2_medium_2x.jpg" className='-mt-55 object-cover h-160 w-full' alt="" />
      </section>

      <section className='flex justify-center items-center mt-4 w-full gap-4'>
        <div className='bg-[#f5f5f7] flex justify-center items-center flex-col p-20'>
          <h1 className='text-4xl font-semibold'>AirPods Pro 3</h1>
          <h3 className='text-xl mt-2 font-normal z-50'>The world's best in-ear</h3>
          <h3 className='text-xl font-normal z-50'>Active Noise Cansellation.</h3>
          <div className='flex justify-center items-center gap-5 mt-5'>
            <button className='bg-blue-500 text-white px-5 py-2 rounded-4xl cursor-pointer z-10'>Learn more</button>
            <button className='border border-blue-500 text-blue-500 rounded-4xl px-5 py-2 cursor-pointer z-10 hover:bg-blue-500 hover:text-white'>Buy</button>
          </div>
          <img src="https://www.apple.com/v/home/ci/images/promos/airpods-pro-3/promo_airpodspro_3__f6xmza7bglei_large_2x.jpg" className='object-cover h-90 w-200 scale-125 -mt-20' alt="" />
        </div>
        <div className='bg-[#f5f5f7] flex justify-center items-center flex-col p-20'>
          <div className='flex justify-center items-center gap-2'>
            <img src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000" className='h-8' alt="" />
            <h1 className='text-4xl font-semibold z-50 '>WATCH Siries 11</h1>
          </div>
          <h3 className='text-xl font-normal z-50'>The ultimate way to watch your health.</h3>
          <div className='flex justify-center items-center gap-5 mt-5'>
            <button className='bg-blue-500 text-white px-5 py-2 rounded-4xl cursor-pointer z-10'>Learn more</button>
            <button className='border border-blue-500 text-blue-500 rounded-4xl px-5 py-2 cursor-pointer z-10 hover:bg-blue-500 hover:text-white'>Buy</button>
          </div>
          <img src="https://www.apple.com/v/home/ci/images/promos/apple-watch-series-11/promo_apple_watch_series_11__b63hxviqvonm_large.jpg" className='object-cover h-90 w-200 scale-125 -mt-11' alt="" />
        </div>
      </section>

      <section className='flex justify-center items-center mt-4 w-full gap-4'>
        <div className='bg-black flex justify-center items-center flex-col p-20'>
          <h1 className='text-4xl font-semibold text-white'>iPad Pro</h1>
          <h3 className='text-xl mt-2 font-normal z-50 text-white'>Advanced AI Performance</h3>
          <h3 className='text-xl font-normal z-50 text-white'>and game-changing capabilities.</h3>
          <div className='flex justify-center items-center gap-5 mt-5'>
            <button className='bg-blue-500 text-white px-5 py-2 rounded-4xl cursor-pointer z-10'>Learn more</button>
            <button className='border border-blue-500 text-blue-500 rounded-4xl px-5 py-2 cursor-pointer z-10 hover:bg-blue-500 hover:text-white'>Buy</button>
          </div>
          <img src="https://www.apple.com/v/home/ci/images/promos/ipad-pro/promo_ipad_pro__c529dk533k4m_large.jpg" className='object-cover h-90 w-200 scale-125 -mt-20' alt="" />
        </div>
        <div className='bg-black flex justify-center items-center flex-col p-20'>
          <h1 className='text-4xl font-semibold text-white'>Mac Book Pro 14"</h1>
          <h3 className='text-xl mt-2 font-normal z-50 text-white'>Supercharged by M5</h3>
          <div className='flex justify-center items-center gap-5 mt-5'>
            <button className='bg-blue-500 text-white px-5 py-2 rounded-4xl cursor-pointer z-10'>Learn more</button>
            <button className='border border-blue-500 text-blue-500 rounded-4xl px-5 py-2 cursor-pointer z-10 hover:bg-blue-500 hover:text-white'>Buy</button>
          </div>
          <img src="https://www.apple.com/v/home/ci/images/promos/macbook-pro-m5/promo_macbook_pro_m5__gnwzdhijhm6a_large.jpg" className='object-cover h-90 w-200 scale-125 -mt-14' alt="" />
        </div>
      </section>

      <section className='flex justify-center items-center mt-4 w-full gap-4'>
        <div className='bg-[#f5f5f7] flex justify-center items-center flex-col p-20'>
          <div className='flex justify-center items-center gap-2'>
            <img src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000" className='h-8' alt="" />
            <h1 className='text-4xl font-semibold z-50 '>Trade In</h1>
          </div>
          <h3 className='text-xl mt-2 font-normal z-50'>Get up to $180-$670</h3>
          <h3 className='text-xl font-normal z-50'>in credit when you trade in</h3>
          <h3 className='text-xl font-normal z-50'>iPhone 13 or higher.</h3>
          <div className='flex justify-center items-center gap-5 mt-5'>
            <button className='bg-blue-500 text-white px-5 py-2 rounded-4xl cursor-pointer z-10'>Get your estimate</button>
          </div>
          <img src="https://www.apple.com/v/home/ci/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large_2x.jpg" className='object-cover h-90 w-200 scale-127 -mt-27' alt="" />
        </div>
        <div className='bg-[#f5f5f7] flex justify-center items-center flex-col p-20 '>
          <div className='flex justify-center items-center gap-2'>
            <img src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000" className='h-8' alt="" />
            <h1 className='text-4xl font-semibold z-50 '>Card</h1>
          </div>
          <h3 className='text-xl mt-2 font-normal z-50'>Get up to 3% Daily Cash back</h3>
          <h3 className='text-xl font-normal z-50'>with every purchase.</h3>
          <div className='flex justify-center items-center gap-5 mt-5'>
            <button className='bg-blue-500 text-white px-5 py-2 rounded-4xl cursor-pointer z-10'>Learn more</button>
            <button className='border border-blue-500 text-blue-500 rounded-4xl px-5 py-2 cursor-pointer z-10 hover:bg-blue-500 hover:text-white'>Apply now</button>
          </div>
          <img src="https://www.apple.com/v/home/ci/images/promos/apple-card/promo_apple_card__5cm7draujpey_large.jpg" className='object-cover h-90 w-200 scale-125 -mt-20' alt="" />
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-[#f5f5f7] text-[#6e6e73] pt-4 pb-5 px-6 mt-11'>
        <div className='max-w-[980px] mx-auto'>
          {/* Footnotes */}
          <div className='text-[12px] leading-[1.33337] mb-3 border-b border-[#d2d2d7] pb-2'>
            <p className='mb-2.5'>
              1. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple's trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.
            </p>
          </div>

          {/* Footer Links */}
          <div className='grid grid-cols-1 md:grid-cols-5 gap-4 text-[12px] leading-[1.33337] mb-2'>
            <div>
              <h3 className='font-semibold text-black mb-2'>Shop and Learn</h3>
              <ul className='space-y-2'>
                <li><a href='#' className='hover:text-black hover:underline'>Store</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Mac</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>iPad</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>iPhone</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Watch</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>AirPods</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>TV & Home</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>AirTag</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Accessories</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Gift Cards</a></li>
              </ul>
            </div>

            <div>
              <h3 className='font-semibold text-black mb-2'>Services</h3>
              <ul className='space-y-2'>
                <li><a href='#' className='hover:text-black hover:underline'>Apple Music</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Apple TV+</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Apple Fitness+</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Apple News+</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Apple Arcade</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>iCloud+</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Apple One</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Apple Card</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Apple Books</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Apple Podcasts</a></li>
              </ul>
            </div>

            <div>
              <h3 className='font-semibold text-black mb-2'>Apple Store</h3>
              <ul className='space-y-2'>
                <li><a href='#' className='hover:text-black hover:underline'>Find a Store</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Genius Bar</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Today at Apple</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Apple Camp</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Apple Store App</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Certified Refurbished</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Apple Trade In</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Financing</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Order Status</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Shopping Help</a></li>
              </ul>
            </div>

            <div>
              <h3 className='font-semibold text-black mb-2'>For Business</h3>
              <ul className='space-y-2'>
                <li><a href='#' className='hover:text-black hover:underline'>Apple and Business</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Shop for Business</a></li>
              </ul>

              <h3 className='font-semibold text-black mt-4 mb-2'>For Education</h3>
              <ul className='space-y-2'>
                <li><a href='#' className='hover:text-black hover:underline'>Apple and Education</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Shop for K-12</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Shop for College</a></li>
              </ul>

              <h3 className='font-semibold text-black mt-4 mb-2'>For Healthcare</h3>
              <ul className='space-y-2'>
                <li><a href='#' className='hover:text-black hover:underline'>Apple in Healthcare</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Health on Apple Watch</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Health Records on iPhone</a></li>
              </ul>
            </div>

            <div>
              <h3 className='font-semibold text-black mb-2'>Apple Values</h3>
              <ul className='space-y-2'>
                <li><a href='#' className='hover:text-black hover:underline'>Accessibility</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Education</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Environment</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Inclusion and Diversity</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Privacy</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Racial Equity and Justice</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Supplier Responsibility</a></li>
              </ul>

              <h3 className='font-semibold text-black mt-4 mb-2'>About Apple</h3>
              <ul className='space-y-2'>
                <li><a href='#' className='hover:text-black hover:underline'>Newsroom</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Apple Leadership</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Career Opportunities</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Investors</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Ethics & Compliance</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Events</a></li>
                <li><a href='#' className='hover:text-black hover:underline'>Contact Apple</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Info */}
          <div className='text-[12px] leading-[1.33337] pt-2 border-t border-[#d2d2d7]'>
            <p className='mb-1'>
              More ways to shop: <a href='#' className='text-[#06c] hover:underline'>Find an Apple Store</a> or <a href='#' className='text-[#06c] hover:underline'>other retailer</a> near you. Or call 1-800-MY-APPLE.
            </p>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-2'>
              <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
              <div className='flex flex-wrap gap-2'>
                <a href='#' className='hover:underline'>Privacy Policy</a>
                <span>|</span>
                <a href='#' className='hover:underline'>Terms of Use</a>
                <span>|</span>
                <a href='#' className='hover:underline'>Sales and Refunds</a>
                <span>|</span>
                <a href='#' className='hover:underline'>Legal</a>
                <span>|</span>
                <a href='#' className='hover:underline'>Site Map</a>
              </div>
            </div>
            <div className='mt-1'>
              <a href='#' className='hover:underline'>United States</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
