import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('overview')

  // Mock data
  const stats = [
    { label: 'Total Memories', value: '2,847', icon: '📸', color: 'from-purple-500 to-pink-500' },
    { label: 'AI Stories', value: '156', icon: '✨', color: 'from-blue-500 to-cyan-500' },
    { label: 'Albums', value: '42', icon: '📁', color: 'from-green-500 to-emerald-500' },
    { label: 'Family Members', value: '8', icon: '👨‍👩‍👧‍👦', color: 'from-orange-500 to-red-500' },
  ]

  const recentMemories = [
    { id: 1, image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400', title: 'Beach Vacation', date: '2 days ago', ai: true },
    { id: 2, image: 'https://images.unsplash.com/photo-1533854775446-95c4609da544?w=400', title: 'Birthday Party', date: '5 days ago', ai: true },
    { id: 3, image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=400', title: 'Family Dinner', date: '1 week ago', ai: false },
    { id: 4, image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400', title: 'Mountain Trip', date: '2 weeks ago', ai: true },
  ]

  const aiStories = [
    { id: 1, title: 'November 2025 Highlights', description: 'AI-generated story featuring 47 photos', thumbnail: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=400', views: 23 },
    { id: 2, title: 'Summer Adventures', description: 'Your best moments from summer', thumbnail: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400', views: 45 },
  ]

  return (
    <div className='min-h-screen bg-neutral-50'>
      {/* Header */}
      <header className='bg-white border-b border-neutral-200'>
        <div className='max-w-7xl mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-2xl font-bold text-neutral-900'>Dashboard</h1>
              <p className='text-neutral-600 text-sm mt-1'>Welcome back, John! 👋</p>
            </div>
            <Link
              to='/upload'
              className='flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-medium'
            >
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
              </svg>
              <span>Upload Memories</span>
            </Link>
          </div>
        </div>
      </header>

      <div className='max-w-7xl mx-auto px-6 py-8'>
        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          {stats.map((stat, index) => (
            <div key={index} className='bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-neutral-600 text-sm font-medium'>{stat.label}</p>
                  <p className='text-3xl font-bold text-neutral-900 mt-2'>{stat.value}</p>
                </div>
                <div className={`bg-gradient-to-br ${stat.color} w-14 h-14 rounded-xl flex items-center justify-center text-2xl`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className='bg-white rounded-2xl shadow-sm mb-6'>
          <div className='border-b border-neutral-200 px-6'>
            <div className='flex space-x-8'>
              {['overview', 'timeline', 'albums', 'stories'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`py-4 px-2 font-medium text-sm capitalize transition-colors relative ${
                    selectedTab === tab
                      ? 'text-purple-600'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {tab}
                  {selectedTab === tab && (
                    <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500'></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Recent Memories */}
          <div className='lg:col-span-2 bg-white rounded-2xl shadow-sm p-6'>
            <div className='flex items-center justify-between mb-6'>
              <h2 className='text-xl font-bold text-neutral-900'>Recent Memories</h2>
              <Link to='/memories' className='text-purple-600 hover:text-purple-700 text-sm font-medium'>
                View All
              </Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {recentMemories.map((memory) => (
                <div key={memory.id} className='group relative overflow-hidden rounded-xl cursor-pointer'>
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
                  <div className='absolute bottom-0 left-0 right-0 p-4'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3 className='text-white font-semibold'>{memory.title}</h3>
                        <p className='text-white/80 text-sm'>{memory.date}</p>
                      </div>
                      {memory.ai && (
                        <div className='bg-purple-500/90 px-2 py-1 rounded-full'>
                          <span className='text-white text-xs font-medium'>AI</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Stories */}
          <div className='bg-white rounded-2xl shadow-sm p-6'>
            <div className='flex items-center justify-between mb-6'>
              <h2 className='text-xl font-bold text-neutral-900'>AI Stories</h2>
              <Link to='/stories' className='text-purple-600 hover:text-purple-700 text-sm font-medium'>
                View All
              </Link>
            </div>
            <div className='space-y-4'>
              {aiStories.map((story) => (
                <div key={story.id} className='group cursor-pointer'>
                  <div className='relative overflow-hidden rounded-xl mb-3'>
                    <img
                      src={story.thumbnail}
                      alt={story.title}
                      className='w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                    <div className='absolute bottom-2 left-2 right-2'>
                      <div className='flex items-center space-x-1 text-white text-xs'>
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                        </svg>
                        <span>{story.views} views</span>
                      </div>
                    </div>
                  </div>
                  <h3 className='font-semibold text-neutral-900 group-hover:text-purple-600 transition-colors'>
                    {story.title}
                  </h3>
                  <p className='text-neutral-600 text-sm mt-1'>{story.description}</p>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className='mt-6 pt-6 border-t border-neutral-200'>
              <h3 className='font-semibold text-neutral-900 mb-3'>Quick Actions</h3>
              <div className='space-y-2'>
                <Link
                  to='/create-album'
                  className='flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors'
                >
                  <div className='bg-purple-100 p-2 rounded-lg'>
                    <svg className='w-5 h-5 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
                    </svg>
                  </div>
                  <span className='text-neutral-700 font-medium'>Create Album</span>
                </Link>
                <Link
                  to='/family-groups'
                  className='flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors'
                >
                  <div className='bg-blue-100 p-2 rounded-lg'>
                    <svg className='w-5 h-5 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                    </svg>
                  </div>
                  <span className='text-neutral-700 font-medium'>Manage Family</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className='bg-white rounded-2xl shadow-sm p-6 mt-6'>
          <h2 className='text-xl font-bold text-neutral-900 mb-6'>Memory Timeline</h2>
          <div className='space-y-8'>
            {[
              { month: 'November 2025', count: 124, preview: ['https://images.unsplash.com/photo-1533854775446-95c4609da544?w=200', 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=200', 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=200'] },
              { month: 'October 2025', count: 98, preview: ['https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=200', 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=200', 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=200'] },
            ].map((period, index) => (
              <div key={index} className='flex items-start space-x-4'>
                <div className='flex-shrink-0'>
                  <div className='w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mt-2'></div>
                  <div className='w-0.5 h-full bg-gradient-to-b from-purple-200 to-transparent mx-auto mt-2'></div>
                </div>
                <div className='flex-1'>
                  <div className='flex items-center justify-between mb-3'>
                    <h3 className='font-semibold text-neutral-900'>{period.month}</h3>
                    <span className='text-sm text-neutral-600'>{period.count} memories</span>
                  </div>
                  <div className='flex space-x-2'>
                    {period.preview.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt=''
                        className='w-20 h-20 rounded-lg object-cover hover:scale-110 transition-transform cursor-pointer'
                      />
                    ))}
                    <div className='w-20 h-20 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 font-medium cursor-pointer hover:bg-neutral-200 transition-colors'>
                      +{period.count - 3}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
