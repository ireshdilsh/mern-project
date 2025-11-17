import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Albums() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const albums = [
    {
      id: 1,
      title: 'Summer Vacation 2025',
      coverImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600',
      photosCount: 247,
      videosCount: 12,
      date: 'June - August 2025',
      aiGenerated: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Family Birthdays',
      coverImage: 'https://images.unsplash.com/photo-1533854775446-95c4609da544?w=600',
      photosCount: 156,
      videosCount: 8,
      date: 'Throughout 2025',
      aiGenerated: true,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 3,
      title: 'Holiday Celebrations',
      coverImage: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=600',
      photosCount: 89,
      videosCount: 5,
      date: 'December 2024',
      aiGenerated: false,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 4,
      title: 'Kids Growing Up',
      coverImage: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600',
      photosCount: 523,
      videosCount: 34,
      date: '2020 - 2025',
      aiGenerated: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      title: 'Weekend Adventures',
      coverImage: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600',
      photosCount: 198,
      videosCount: 15,
      date: '2025',
      aiGenerated: true,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 6,
      title: 'Home Sweet Home',
      coverImage: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600',
      photosCount: 341,
      videosCount: 22,
      date: 'Ongoing',
      aiGenerated: false,
      color: 'from-amber-500 to-yellow-500'
    },
  ]

  const filters = [
    { id: 'all', label: 'All Albums', count: albums.length },
    { id: 'ai', label: 'AI Generated', count: albums.filter(a => a.aiGenerated).length },
    { id: 'manual', label: 'Manual', count: albums.filter(a => !a.aiGenerated).length },
  ]

  const filteredAlbums = selectedFilter === 'all' 
    ? albums 
    : albums.filter(a => selectedFilter === 'ai' ? a.aiGenerated : !a.aiGenerated)

  return (
    <div className='min-h-screen bg-neutral-50'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        {/* Header */}
        <div className='flex items-center justify-between mb-8'>
          <div>
            <h1 className='text-4xl font-bold text-neutral-900 mb-2'>My Albums</h1>
            <p className='text-neutral-600'>Organize and explore your family memories</p>
          </div>
          <Link
            to='/create-album'
            className='flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-medium'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
            </svg>
            <span>Create Album</span>
          </Link>
        </div>

        {/* Filters & View Toggle */}
        <div className='bg-white rounded-2xl shadow-sm p-6 mb-6'>
          <div className='flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0'>
            {/* Filters */}
            <div className='flex flex-wrap gap-2'>
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedFilter === filter.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className='flex items-center space-x-2 bg-neutral-100 rounded-lg p-1'>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-neutral-200'
                }`}
              >
                <svg className='w-5 h-5 text-neutral-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-neutral-200'
                }`}
              >
                <svg className='w-5 h-5 text-neutral-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Albums Grid/List */}
        {viewMode === 'grid' ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredAlbums.map(album => (
              <Link
                key={album.id}
                to={`/album/${album.id}`}
                className='group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden'
              >
                <div className='relative h-64 overflow-hidden'>
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
                  {album.aiGenerated && (
                    <div className='absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1'>
                      <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                      </svg>
                      <span>AI</span>
                    </div>
                  )}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${album.color}`}></div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-neutral-900 mb-2 group-hover:text-purple-600 transition-colors'>
                    {album.title}
                  </h3>
                  <p className='text-neutral-600 text-sm mb-4'>{album.date}</p>
                  <div className='flex items-center justify-between text-sm text-neutral-600'>
                    <div className='flex items-center space-x-1'>
                      <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                      </svg>
                      <span>{album.photosCount} photos</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
                      </svg>
                      <span>{album.videosCount} videos</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className='space-y-4'>
            {filteredAlbums.map(album => (
              <Link
                key={album.id}
                to={`/album/${album.id}`}
                className='flex bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden group'
              >
                <div className='relative w-48 h-32 flex-shrink-0'>
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${album.color}`}></div>
                </div>
                <div className='flex-1 p-6 flex items-center justify-between'>
                  <div>
                    <div className='flex items-center space-x-3 mb-2'>
                      <h3 className='text-xl font-bold text-neutral-900 group-hover:text-purple-600 transition-colors'>
                        {album.title}
                      </h3>
                      {album.aiGenerated && (
                        <span className='bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium'>
                          AI Generated
                        </span>
                      )}
                    </div>
                    <p className='text-neutral-600 text-sm mb-3'>{album.date}</p>
                    <div className='flex items-center space-x-4 text-sm text-neutral-600'>
                      <div className='flex items-center space-x-1'>
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                        </svg>
                        <span>{album.photosCount} photos</span>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
                        </svg>
                        <span>{album.videosCount} videos</span>
                      </div>
                    </div>
                  </div>
                  <svg className='w-6 h-6 text-neutral-400 group-hover:text-purple-600 transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
