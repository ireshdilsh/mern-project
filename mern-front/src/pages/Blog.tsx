import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Product Updates', 'Tips & Tricks', 'Family Stories', 'Technology']

  const posts = [
    {
      id: 1,
      title: 'Introducing Smart Albums: AI-Powered Photo Organization',
      excerpt: 'Our new Smart Albums feature uses advanced AI to automatically organize your photos by events, people, and locations.',
      category: 'Product Updates',
      author: 'Sarah Mitchell',
      date: 'Mar 15, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: '10 Tips for Preserving Old Family Photos',
      excerpt: 'Learn how to digitize and restore your precious family photographs with these expert tips.',
      category: 'Tips & Tricks',
      author: 'Emily Rodriguez',
      date: 'Mar 12, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800&auto=format&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'How the Johnson Family Preserved 50 Years of Memories',
      excerpt: 'A heartwarming story of how one family used MemoryVerse to digitize and share five decades of family history.',
      category: 'Family Stories',
      author: 'David Chen',
      date: 'Mar 8, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'The Technology Behind Face Recognition',
      excerpt: 'Deep dive into how our AI recognizes and groups photos of your loved ones automatically.',
      category: 'Technology',
      author: 'Michael Park',
      date: 'Mar 5, 2025',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=800&auto=format&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Creating Meaningful Photo Books for Grandparents',
      excerpt: 'Step-by-step guide to creating beautiful printed photo books that your grandparents will treasure.',
      category: 'Tips & Tricks',
      author: 'Emily Rodriguez',
      date: 'Mar 1, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'New Feature: Collaborative Family Timelines',
      excerpt: 'Now multiple family members can contribute to shared timelines, creating a complete family history together.',
      category: 'Product Updates',
      author: 'Sarah Mitchell',
      date: 'Feb 28, 2025',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop',
      featured: false
    }
  ]

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  const featuredPost = posts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

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
      <section className='bg-gradient-to-br from-blue-50 to-purple-50 py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center max-w-3xl mx-auto'>
            <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
              Blog
            </h1>
            <p className='text-xl text-gray-600'>
              Stories, updates, and tips about preserving family memories
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className='border-b border-gray-200 sticky top-0 bg-white z-10'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex space-x-2 overflow-x-auto py-4 scrollbar-hide'>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && (
        <section className='py-16'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 grid lg:grid-cols-2 gap-0'>
              <div className='relative h-80 lg:h-auto'>
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className='w-full h-full object-cover'
                />
                <div className='absolute top-6 left-6'>
                  <span className='px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full'>
                    Featured
                  </span>
                </div>
              </div>
              <div className='p-10 flex flex-col justify-center'>
                <div className='mb-4'>
                  <span className='px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full'>
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
                  {featuredPost.title}
                </h2>
                <p className='text-lg text-gray-600 mb-6'>
                  {featuredPost.excerpt}
                </p>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold'>
                      {featuredPost.author.charAt(0)}
                    </div>
                    <div>
                      <div className='font-semibold text-gray-900'>{featuredPost.author}</div>
                      <div className='text-sm text-gray-500'>{featuredPost.date} · {featuredPost.readTime}</div>
                    </div>
                  </div>
                  <button className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all'>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {regularPosts.map(post => (
              <article key={post.id} className='bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-shadow group'>
                <div className='relative h-56 overflow-hidden'>
                  <img
                    src={post.image}
                    alt={post.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute top-4 left-4'>
                    <span className='px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full'>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors'>
                    {post.title}
                  </h3>
                  <p className='text-gray-600 mb-4 line-clamp-3'>
                    {post.excerpt}
                  </p>
                  <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
                    <div>
                      <div className='font-semibold text-sm text-gray-900'>{post.author}</div>
                      <div className='text-xs text-gray-500'>{post.date}</div>
                    </div>
                    <div className='text-sm text-gray-500'>{post.readTime}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold text-white mb-4'>
            Subscribe to Our Newsletter
          </h2>
          <p className='text-xl text-blue-100 mb-8'>
            Get the latest updates, tips, and stories delivered to your inbox
          </p>
          <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white text-gray-900'
            />
            <button className='px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl whitespace-nowrap'>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
