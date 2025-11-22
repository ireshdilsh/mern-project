import { Link } from 'react-router-dom'

export default function Press() {
  const pressReleases = [
    {
      title: 'MemoryVerse Raises $5M Series A to Revolutionize Family Photo Management',
      date: 'March 20, 2025',
      excerpt: 'Leading venture capital firm Sequoia Capital leads round to help families preserve their most precious memories using AI technology.',
      category: 'Funding'
    },
    {
      title: 'MemoryVerse Reaches 50,000 Active Families Milestone',
      date: 'March 1, 2025',
      excerpt: 'Platform celebrates major growth milestone as families increasingly turn to AI-powered solutions for organizing photos.',
      category: 'Milestone'
    },
    {
      title: 'MemoryVerse Launches Smart Albums Feature with Advanced Face Recognition',
      date: 'February 15, 2025',
      excerpt: 'New AI-powered feature automatically organizes photos by people, events, and locations with 99.5% accuracy.',
      category: 'Product'
    },
    {
      title: 'MemoryVerse Partners with Shutterfly for Print Services',
      date: 'January 30, 2025',
      excerpt: 'Strategic partnership enables users to create high-quality photo books and prints directly from the platform.',
      category: 'Partnership'
    }
  ]

  const coverage = [
    {
      outlet: 'TechCrunch',
      headline: 'MemoryVerse is Making Family Photo Organization Finally Easy',
      date: 'March 18, 2025',
      logo: '📰'
    },
    {
      outlet: 'The Verge',
      headline: 'How AI is Changing the Way Families Preserve Memories',
      date: 'March 10, 2025',
      logo: '🔷'
    },
    {
      outlet: 'Wired',
      headline: 'The Future of Family Photographs is Here',
      date: 'February 25, 2025',
      logo: '⚡'
    },
    {
      outlet: 'Forbes',
      headline: 'This Startup Wants to Organize Your Family\'s Photo Chaos',
      date: 'February 12, 2025',
      logo: '💼'
    }
  ]

  const stats = [
    { value: '50K+', label: 'Active Families' },
    { value: '10M+', label: 'Photos Stored' },
    { value: '99.9%', label: 'Uptime' },
    { value: '4.9★', label: 'User Rating' }
  ]

  const brandAssets = [
    {
      name: 'Logo Package',
      description: 'Full color, monochrome, and icon versions',
      format: 'PNG, SVG'
    },
    {
      name: 'Brand Guidelines',
      description: 'Colors, typography, and usage guidelines',
      format: 'PDF'
    },
    {
      name: 'Product Screenshots',
      description: 'High-resolution app interface images',
      format: 'PNG'
    },
    {
      name: 'Team Photos',
      description: 'Executive headshots and team photos',
      format: 'JPG'
    }
  ]

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <nav className='bg-white border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <Link to='/' className='flex items-center space-x-2'>
              <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center'>
                <span className='text-white font-bold text-xl'>M</span>
              </div>
              <span className='text-2xl font-bold text-gray-900'>MemoryVerse</span>
            </Link>
            
            <div className='flex items-center space-x-4'>
              <Link to='/login' className='px-5 py-2.5 text-gray-700 hover:text-gray-900 font-medium transition-colors'>
                Sign In
              </Link>
              <Link to='/register' className='px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all'>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-50 to-purple-50 py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center max-w-3xl mx-auto'>
            <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
              Press & Media
            </h1>
            <p className='text-xl text-gray-600 mb-8'>
              The latest news, updates, and press resources about MemoryVerse
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='text-4xl lg:text-5xl font-bold text-blue-600 mb-2'>{stat.value}</div>
                <div className='text-gray-600'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Press Releases</h2>
            <p className='text-xl text-gray-600'>Latest announcements and updates</p>
          </div>
          <div className='space-y-6 max-w-4xl mx-auto'>
            {pressReleases.map((release, index) => (
              <article key={index} className='bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all group'>
                <div className='flex items-start justify-between gap-6'>
                  <div className='flex-1'>
                    <div className='flex items-center space-x-3 mb-3'>
                      <span className='px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full'>
                        {release.category}
                      </span>
                      <span className='text-sm text-gray-500'>{release.date}</span>
                    </div>
                    <h3 className='text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors'>
                      {release.title}
                    </h3>
                    <p className='text-gray-600 mb-4'>{release.excerpt}</p>
                    <button className='text-blue-600 hover:text-blue-700 font-semibold flex items-center'>
                      Read Full Release
                      <svg className='w-5 h-5 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Media Coverage</h2>
            <p className='text-xl text-gray-600'>What people are saying about us</p>
          </div>
          <div className='grid md:grid-cols-2 gap-6 max-w-5xl mx-auto'>
            {coverage.map((item, index) => (
              <div key={index} className='bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow'>
                <div className='flex items-start space-x-4'>
                  <div className='text-4xl'>{item.logo}</div>
                  <div className='flex-1'>
                    <div className='font-bold text-gray-900 mb-2'>{item.outlet}</div>
                    <h3 className='text-lg text-gray-800 mb-2 leading-snug'>"{item.headline}"</h3>
                    <div className='text-sm text-gray-500'>{item.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Brand Assets</h2>
            <p className='text-xl text-gray-600'>Download logos, photos, and brand guidelines</p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {brandAssets.map((asset, index) => (
              <div key={index} className='bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all group'>
                <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors'>
                  <svg className='w-6 h-6 text-blue-600 group-hover:text-white transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10' />
                  </svg>
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>{asset.name}</h3>
                <p className='text-sm text-gray-600 mb-3'>{asset.description}</p>
                <div className='text-xs text-gray-500 mb-4'>{asset.format}</div>
                <button className='w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-all'>
                  Download
                </button>
              </div>
            ))}
          </div>
          <div className='text-center mt-12'>
            <p className='text-gray-600 mb-4'>Need something else?</p>
            <button className='px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-all'>
              Contact Press Team
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            Media Inquiries
          </h2>
          <p className='text-xl text-blue-100 mb-8'>
            For press inquiries, interviews, or additional information, please contact our media team
          </p>
          <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto'>
            <div className='space-y-4'>
              <div className='flex items-center justify-center space-x-3 text-white'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
                <span className='text-lg font-semibold'>press@memoryverse.com</span>
              </div>
              <div className='flex items-center justify-center space-x-3 text-white'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                </svg>
                <span className='text-lg font-semibold'>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
