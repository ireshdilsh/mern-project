import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <nav className='fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>
            {/* Logo */}
            <Link to='/' className='flex items-center space-x-3 group'>
              <div className='relative'>
                <div className='absolute inset-0 bg-blue-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity'></div>
                <div className='relative bg-blue-600 p-2.5 rounded-xl'>
                  <svg className='w-7 h-7 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                  </svg>
                </div>
              </div>
              <span className='text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>
                MemoryVerse
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-1'>
              <a href='#features' className='px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all font-medium'>Features</a>
              <a href='#how-it-works' className='px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all font-medium'>How It Works</a>
              <a href='#testimonials' className='px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all font-medium'>Testimonials</a>
              <Link to='/pricing' className='px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all font-medium'>Pricing</Link>
            </div>

            {/* CTA Buttons */}
            <div className='hidden lg:flex items-center space-x-4'>
              <Link to='/login' className='px-5 py-2.5 text-gray-700 hover:text-gray-900 font-medium transition-colors'>
                Sign In
              </Link>
              <Link to='/register' className='px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-sm hover:shadow-md'>
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all'
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
            <div className='lg:hidden py-4 border-t border-gray-100'>
              <div className='flex flex-col space-y-2'>
                <a href='#features' className='px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all font-medium'>Features</a>
                <a href='#how-it-works' className='px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all font-medium'>How It Works</a>
                <a href='#testimonials' className='px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all font-medium'>Testimonials</a>
                <Link to='/pricing' className='px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all font-medium'>Pricing</Link>
                <div className='pt-4 flex flex-col space-y-2'>
                  <Link to='/login' className='px-4 py-2 text-center text-gray-700 hover:text-gray-900 font-medium transition-colors'>
                    Sign In
                  </Link>
                  <Link to='/register' className='px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg font-semibold transition-all'>
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className='relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden'>
        {/* Background Decoration */}
        <div className='absolute inset-0 -z-10'>
          <div className='absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50'></div>
          <div className='absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50'></div>
        </div>

        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <div className='text-center lg:text-left'>
              <div className='inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6'>
                <span className='w-2 h-2 bg-blue-600 rounded-full animate-pulse'></span>
                <span className='text-sm font-semibold text-blue-600'>AI-Powered Memory Platform</span>
              </div>

              <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight'>
                Preserve Your
                <span className='block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                  Family Memories
                </span>
                Forever
              </h1>

              <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0'>
                Transform your photos into stunning AI-powered stories. Organize, share, and relive your most precious moments with cutting-edge technology.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8'>
                <Link to='/register' className='group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2'>
                  <span>Start Free Trial</span>
                  <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                  </svg>
                </Link>
                <button className='px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-gray-300 rounded-xl font-semibold text-lg transition-all flex items-center justify-center space-x-2'>
                  <svg className='w-6 h-6 text-blue-600' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M8 5v14l11-7z' />
                  </svg>
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Stats */}
              <div className='grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0'>
                <div>
                  <div className='text-3xl font-bold text-gray-900'>50K+</div>
                  <div className='text-sm text-gray-600'>Active Users</div>
                </div>
                <div>
                  <div className='text-3xl font-bold text-gray-900'>2M+</div>
                  <div className='text-sm text-gray-600'>Photos Stored</div>
                </div>
                <div>
                  <div className='text-3xl font-bold text-gray-900'>4.9★</div>
                  <div className='text-sm text-gray-600'>User Rating</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className='relative'>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                <img
                  src='https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop'
                  alt='Family memories'
                  className='w-full h-auto'
                />
              </div>
              {/* Floating Card */}
              <div className='absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100'>
                <div className='flex items-center space-x-3'>
                  <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center'>
                    <svg className='w-6 h-6 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                    </svg>
                  </div>
                  <div>
                    <div className='text-sm font-semibold text-gray-900'>100% Secure</div>
                    <div className='text-xs text-gray-500'>End-to-end encryption</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='py-20 px-6 lg:px-8 bg-gray-50'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
              Powerful Features for Your Memories
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Everything you need to organize, enhance, and share your family photos
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Feature 1 */}
            <div className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow group'>
              <div className='w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <svg className='w-7 h-7 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>AI Auto-Organization</h3>
              <p className='text-gray-600'>Automatically organize photos by people, places, and events with advanced AI technology.</p>
            </div>

            {/* Feature 2 */}
            <div className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow group'>
              <div className='w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <svg className='w-7 h-7 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Smart Albums</h3>
              <p className='text-gray-600'>Create beautiful albums that automatically update as you add new photos.</p>
            </div>

            {/* Feature 3 */}
            <div className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow group'>
              <div className='w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <svg className='w-7 h-7 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Secure Storage</h3>
              <p className='text-gray-600'>Military-grade encryption keeps your precious memories safe and private.</p>
            </div>

            {/* Feature 4 */}
            <div className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow group'>
              <div className='w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <svg className='w-7 h-7 text-orange-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Family Sharing</h3>
              <p className='text-gray-600'>Invite family members to view, comment, and contribute to shared albums.</p>
            </div>

            {/* Feature 5 */}
            <div className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow group'>
              <div className='w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <svg className='w-7 h-7 text-pink-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Photo Enhancement</h3>
              <p className='text-gray-600'>AI-powered tools to restore, enhance, and colorize old photos automatically.</p>
            </div>

            {/* Feature 6 */}
            <div className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow group'>
              <div className='w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <svg className='w-7 h-7 text-indigo-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Smart Search</h3>
              <p className='text-gray-600'>Find any photo instantly using AI-powered facial recognition and object detection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id='how-it-works' className='py-20 px-6 lg:px-8 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
              Simple as 1-2-3
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Get started in minutes and let AI do the heavy lifting
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-12'>
            {/* Step 1 */}
            <div className='relative text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-2xl text-2xl font-bold mb-6 shadow-lg'>
                1
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Upload Photos</h3>
              <p className='text-gray-600 mb-6'>Drag and drop your photos or sync from your devices automatically. Support for all major formats.</p>
              <div className='bg-gray-50 rounded-xl p-6'>
                <div className='w-full h-40 bg-white rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center'>
                  <svg className='w-12 h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' />
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className='relative text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-2xl text-2xl font-bold mb-6 shadow-lg'>
                2
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>AI Organizes</h3>
              <p className='text-gray-600 mb-6'>Our AI automatically tags, organizes, and creates beautiful albums based on people, places, and events.</p>
              <div className='bg-gray-50 rounded-xl p-6'>
                <div className='space-y-2'>
                  <div className='flex items-center space-x-2'>
                    <div className='w-8 h-8 bg-blue-100 rounded flex-shrink-0'></div>
                    <div className='flex-1 h-4 bg-gray-200 rounded'></div>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <div className='w-8 h-8 bg-purple-100 rounded flex-shrink-0'></div>
                    <div className='flex-1 h-4 bg-gray-200 rounded'></div>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <div className='w-8 h-8 bg-green-100 rounded flex-shrink-0'></div>
                    <div className='flex-1 h-4 bg-gray-200 rounded'></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className='relative text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-2xl text-2xl font-bold mb-6 shadow-lg'>
                3
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Share & Enjoy</h3>
              <p className='text-gray-600 mb-6'>Share with family, create stories, and relive your precious moments anytime, anywhere.</p>
              <div className='bg-gray-50 rounded-xl p-6'>
                <div className='grid grid-cols-2 gap-2'>
                  <div className='aspect-square bg-blue-200 rounded-lg'></div>
                  <div className='aspect-square bg-purple-200 rounded-lg'></div>
                  <div className='aspect-square bg-green-200 rounded-lg'></div>
                  <div className='aspect-square bg-orange-200 rounded-lg'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id='testimonials' className='py-20 px-6 lg:px-8 bg-gray-50'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
              Loved by Families Worldwide
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              See what our users have to say about MemoryVerse
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {[
              { name: 'Sarah Johnson', role: 'Mother of 3', rating: 5, text: 'MemoryVerse has completely transformed how we preserve our family memories. The AI features are incredible and so easy to use!' },
              { name: 'Michael Chen', role: 'Photographer', rating: 5, text: 'As a professional photographer, I\'m impressed by the quality of AI organization. It saves me hours of manual sorting!' },
              { name: 'Emma Williams', role: 'Grandmother', rating: 5, text: 'I love being able to share memories with my grandchildren so easily. The interface is beautiful and intuitive.' }
            ].map((testimonial, index) => (
              <div key={index} className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow'>
                <div className='flex items-center mb-4'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className='w-5 h-5 text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
                <p className='text-gray-600 mb-6 italic'>"{testimonial.text}"</p>
                <div className='flex items-center space-x-3'>
                  <div className='w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg'>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className='font-semibold text-gray-900'>{testimonial.name}</div>
                    <div className='text-sm text-gray-500'>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-6 lg:px-8 bg-blue-600'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl lg:text-5xl font-bold text-white mb-6'>
            Ready to Preserve Your Memories?
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
            Join over 50,000 families already using MemoryVerse to organize and share their precious moments
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to='/register' className='px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl'>
              Start Free Trial
            </Link>
            <button className='px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white border-2 border-white/20 rounded-xl font-semibold text-lg transition-all'>
              Schedule Demo
            </button>
          </div>
          <p className='mt-6 text-blue-100 text-sm'>
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
}
