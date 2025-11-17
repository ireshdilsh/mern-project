import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Landing() {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Organization',
      description: 'Automatically detect events, identify people, and categorize your memories intelligently'
    },
    {
      icon: '📸',
      title: 'Smart Albums',
      description: 'AI creates beautiful albums from your photos based on events, locations, and people'
    },
    {
      icon: '✨',
      title: 'Auto-Generated Stories',
      description: 'Transform your memories into cinematic video stories with AI narration and music'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Groups',
      description: 'Share memories securely with family members and collaborate on albums'
    },
    {
      icon: '🎨',
      title: 'Image Enhancement',
      description: 'AI-powered photo restoration, color correction, and quality improvement'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'End-to-end encryption ensures your family memories stay safe and private'
    }
  ]

  const howItWorks = [
    { step: '1', title: 'Upload', description: 'Drag and drop your photos and videos' },
    { step: '2', title: 'AI Analyzes', description: 'Our AI detects faces, events, and moments' },
    { step: '3', title: 'Enjoy', description: 'Browse albums, stories, and highlights' }
  ]

  return (
    <div className='min-h-screen bg-white'>
      <Navbar />

      {/* Hero Section */}
      <section className='pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6'>
                ✨ AI-Powered Memory Keeper
              </div>
              <h1 className='text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight'>
                Preserve Your Family <span className='bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent'>Memories</span> Forever
              </h1>
              <p className='text-xl text-neutral-600 mb-8 leading-relaxed'>
                Let AI organize, enhance, and transform your photos into beautiful stories. Never lose a precious moment again.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Link
                  to='/register'
                  className='bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all text-center'
                >
                  Get Started Free
                </Link>
                <Link
                  to='/features'
                  className='border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all text-center'
                >
                  Learn More
                </Link>
              </div>
              <p className='text-sm text-neutral-500 mt-6'>
                ✓ No credit card required  ✓ 14-day free trial  ✓ Cancel anytime
              </p>
            </div>
            <div className='relative'>
              <div className='relative z-10'>
                <img
                  src='https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800'
                  alt='Happy family'
                  className='rounded-3xl shadow-2xl'
                />
                <div className='absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl'>
                  <div className='flex items-center space-x-3'>
                    <div className='bg-green-100 p-3 rounded-xl'>
                      <svg className='w-6 h-6 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                      </svg>
                    </div>
                    <div>
                      <p className='font-semibold text-neutral-900'>2,847 Memories</p>
                      <p className='text-sm text-neutral-600'>Organized by AI</p>
                    </div>
                  </div>
                </div>
                <div className='absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl'>
                  <div className='flex items-center space-x-3'>
                    <div className='bg-purple-100 p-3 rounded-xl'>
                      <svg className='w-6 h-6 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                      </svg>
                    </div>
                    <div>
                      <p className='font-semibold text-neutral-900'>AI Powered</p>
                      <p className='text-sm text-neutral-600'>Smart Detection</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20'></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 px-6 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-neutral-900 mb-4'>Powerful Features</h2>
            <p className='text-xl text-neutral-600'>Everything you need to preserve and relive your family moments</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <div key={index} className='bg-neutral-50 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all hover:shadow-lg group'>
                <div className='text-5xl mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-bold text-neutral-900 mb-3'>{feature.title}</h3>
                <p className='text-neutral-600'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className='py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-neutral-900 mb-4'>How It Works</h2>
            <p className='text-xl text-neutral-600'>Get started in minutes, not hours</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {howItWorks.map((item, index) => (
              <div key={index} className='relative'>
                <div className='bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all'>
                  <div className='bg-gradient-to-br from-purple-600 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold'>
                    {item.step}
                  </div>
                  <h3 className='text-2xl font-bold text-neutral-900 mb-3'>{item.title}</h3>
                  <p className='text-neutral-600'>{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className='hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2'>
                    <svg className='w-8 h-8 text-purple-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Showcase */}
      <section className='py-20 px-6 bg-neutral-900 text-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>Beautiful Interface</h2>
            <p className='text-xl text-neutral-400'>Designed for families, powered by AI</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-neutral-800 rounded-2xl p-6 hover:bg-neutral-700 transition-colors'>
              <img src='https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=400' alt='Dashboard' className='rounded-xl mb-4 w-full h-48 object-cover' />
              <h3 className='font-semibold text-lg mb-2'>Smart Dashboard</h3>
              <p className='text-neutral-400 text-sm'>View all your memories at a glance</p>
            </div>
            <div className='bg-neutral-800 rounded-2xl p-6 hover:bg-neutral-700 transition-colors'>
              <img src='https://images.unsplash.com/photo-1533854775446-95c4609da544?w=400' alt='Albums' className='rounded-xl mb-4 w-full h-48 object-cover' />
              <h3 className='font-semibold text-lg mb-2'>Auto Albums</h3>
              <p className='text-neutral-400 text-sm'>AI organizes photos into albums</p>
            </div>
            <div className='bg-neutral-800 rounded-2xl p-6 hover:bg-neutral-700 transition-colors'>
              <img src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400' alt='Stories' className='rounded-xl mb-4 w-full h-48 object-cover' />
              <h3 className='font-semibold text-lg mb-2'>AI Stories</h3>
              <p className='text-neutral-400 text-sm'>Watch your memories come alive</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-6 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500'>
        <div className='max-w-4xl mx-auto text-center text-white'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
            Start Preserving Your Memories Today
          </h2>
          <p className='text-xl mb-8 text-white/90'>
            Join thousands of families already using AI to keep their memories alive
          </p>
          <Link
            to='/register'
            className='inline-block bg-white text-purple-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all'
          >
            Get Started Free →
          </Link>
          <p className='text-white/80 mt-6'>No credit card required • 14-day free trial</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
