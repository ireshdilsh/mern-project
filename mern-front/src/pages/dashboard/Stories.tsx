import { Link } from 'react-router-dom'

export default function Stories() {
  const stories = [
    {
      id: 1,
      title: 'November 2025 Highlights',
      description: 'AI crafted a beautiful story from your 124 memories this month',
      thumbnail: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=800',
      duration: '3:42',
      photosCount: 124,
      date: 'Created today',
      views: 23,
      likes: 12,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Summer Adventures 2025',
      description: 'Your best moments from the summer vacation',
      thumbnail: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
      duration: '5:18',
      photosCount: 247,
      date: '3 days ago',
      views: 45,
      likes: 28,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Family Birthdays Collection',
      description: 'All your special birthday celebrations in one story',
      thumbnail: 'https://images.unsplash.com/photo-1533854775446-95c4609da544?w=800',
      duration: '4:25',
      photosCount: 156,
      date: '1 week ago',
      views: 67,
      likes: 42,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 4,
      title: 'Kids Growing Up',
      description: 'A heartwarming journey through your children\'s milestones',
      thumbnail: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
      duration: '6:54',
      photosCount: 523,
      date: '2 weeks ago',
      views: 89,
      likes: 56,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      title: 'Holiday Magic',
      description: 'Christmas and New Year celebrations captured perfectly',
      thumbnail: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=800',
      duration: '4:12',
      photosCount: 89,
      date: '1 month ago',
      views: 134,
      likes: 87,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 6,
      title: 'Everyday Moments',
      description: 'Beautiful memories from your daily life together',
      thumbnail: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800',
      duration: '3:56',
      photosCount: 198,
      date: '1 month ago',
      views: 112,
      likes: 68,
      color: 'from-amber-500 to-yellow-500'
    },
  ]

  return (
    <div className='min-h-screen bg-neutral-50'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-neutral-900 mb-3'>AI-Generated Stories</h1>
          <p className='text-neutral-600 max-w-2xl mx-auto'>
            Watch your memories come alive with AI-powered video stories, automatically created from your favorite moments
          </p>
        </div>

        {/* Featured Story */}
        <div className='relative bg-white rounded-3xl shadow-xl overflow-hidden mb-12 group cursor-pointer'>
          <div className='relative h-96'>
            <img
              src={stories[0].thumbnail}
              alt={stories[0].title}
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent'></div>
            
            {/* Play Button */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='bg-white/20 backdrop-blur-sm p-8 rounded-full group-hover:bg-white/30 transition-all'>
                <svg className='w-16 h-16 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M8 5v14l11-7z'/>
                </svg>
              </div>
            </div>

            {/* Info Overlay */}
            <div className='absolute bottom-0 left-0 right-0 p-8'>
              <div className='flex items-center space-x-2 mb-3'>
                <span className='bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium'>Featured</span>
                <span className='bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium'>
                  {stories[0].duration}
                </span>
              </div>
              <h2 className='text-3xl font-bold text-white mb-2'>{stories[0].title}</h2>
              <p className='text-white/90 text-lg mb-4'>{stories[0].description}</p>
              <div className='flex items-center space-x-6 text-white/80 text-sm'>
                <div className='flex items-center space-x-2'>
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                  </svg>
                  <span>{stories[0].photosCount} photos</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                  </svg>
                  <span>{stories[0].views} views</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                  </svg>
                  <span>{stories[0].likes} likes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Stories Grid */}
        <div className='mb-8'>
          <h2 className='text-2xl font-bold text-neutral-900 mb-6'>All Stories</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {stories.slice(1).map(story => (
              <Link
                key={story.id}
                to={`/story/${story.id}`}
                className='group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden'
              >
                <div className='relative h-56 overflow-hidden'>
                  <img
                    src={story.thumbnail}
                    alt={story.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>
                  
                  {/* Play Button */}
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                    <div className='bg-white/20 backdrop-blur-sm p-4 rounded-full'>
                      <svg className='w-10 h-10 text-white' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M8 5v14l11-7z'/>
                      </svg>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className='absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium'>
                    {story.duration}
                  </div>

                  {/* Bottom Info */}
                  <div className='absolute bottom-4 left-4 right-4'>
                    <div className={`h-1 bg-gradient-to-r ${story.color} rounded-full mb-3`}></div>
                    <h3 className='text-white font-bold text-lg mb-1'>{story.title}</h3>
                    <p className='text-white/80 text-sm'>{story.photosCount} photos</p>
                  </div>
                </div>

                <div className='p-5'>
                  <p className='text-neutral-600 text-sm mb-4 line-clamp-2'>{story.description}</p>
                  <div className='flex items-center justify-between text-xs text-neutral-500'>
                    <span>{story.date}</span>
                    <div className='flex items-center space-x-3'>
                      <div className='flex items-center space-x-1'>
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                        </svg>
                        <span>{story.views}</span>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                        </svg>
                        <span>{story.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Create Story CTA */}
        <div className='bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-3xl p-12 text-center text-white'>
          <div className='max-w-2xl mx-auto'>
            <div className='bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6'>
              <svg className='w-10 h-10' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
              </svg>
            </div>
            <h2 className='text-3xl font-bold mb-4'>Create Your AI Story</h2>
            <p className='text-white/90 mb-8 text-lg'>
              Let AI analyze your photos and videos to create a beautiful, cinematic story automatically
            </p>
            <button className='bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all'>
              Generate New Story
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
