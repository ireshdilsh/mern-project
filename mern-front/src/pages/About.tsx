import { Link } from 'react-router-dom'

export default function About() {
  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO & Founder',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      bio: '15+ years in tech, passionate about preserving family memories'
    },
    {
      name: 'David Chen',
      role: 'CTO',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      bio: 'AI expert with background in machine learning and computer vision'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
      bio: 'UX designer focused on creating intuitive family experiences'
    },
    {
      name: 'Michael Park',
      role: 'Head of Engineering',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      bio: 'Built scalable systems for millions of users worldwide'
    }
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Mission Driven',
      description: 'Help families preserve and share their most precious memories for generations to come'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Your memories are yours. We use enterprise-grade encryption to keep them safe'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Leveraging cutting-edge AI to make memory organization effortless'
    },
    {
      icon: '❤️',
      title: 'Family Focus',
      description: 'Everything we build is designed with families in mind'
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
      <section className='relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl'></div>
        </div>
        
        <div className='max-w-7xl mx-auto px-6 relative z-10'>
          <div className='text-center max-w-3xl mx-auto'>
            <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
              About MemoryVerse
            </h1>
            <p className='text-xl text-gray-600 leading-relaxed'>
              We're on a mission to help families preserve, organize, and share their most precious memories using the power of AI and modern technology.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h2 className='text-4xl font-bold text-gray-900 mb-6'>Our Story</h2>
              <div className='space-y-4 text-gray-600 text-lg leading-relaxed'>
                <p>
                  MemoryVerse was born from a simple realization: families have thousands of photos scattered across devices, cloud services, and old hard drives, but no easy way to organize and share them meaningfully.
                </p>
                <p>
                  Founded in 2023, we set out to create a platform that makes it effortless to preserve family memories. Using advanced AI technology, we automatically organize photos, recognize faces, and create beautiful stories from your collection.
                </p>
                <p>
                  Today, over 50,000 families trust MemoryVerse to safeguard their most precious moments. We're just getting started.
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-blue-600 rounded-2xl p-8 text-white'>
                <div className='text-5xl font-bold mb-2'>50K+</div>
                <div className='text-blue-100'>Active Families</div>
              </div>
              <div className='bg-purple-600 rounded-2xl p-8 text-white'>
                <div className='text-5xl font-bold mb-2'>10M+</div>
                <div className='text-purple-100'>Photos Stored</div>
              </div>
              <div className='bg-green-600 rounded-2xl p-8 text-white'>
                <div className='text-5xl font-bold mb-2'>99.9%</div>
                <div className='text-green-100'>Uptime</div>
              </div>
              <div className='bg-orange-600 rounded-2xl p-8 text-white'>
                <div className='text-5xl font-bold mb-2'>4.9★</div>
                <div className='text-orange-100'>User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Our Values</h2>
            <p className='text-xl text-gray-600'>The principles that guide everything we do</p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <div key={index} className='bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow'>
                <div className='text-5xl mb-4'>{value.icon}</div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>{value.title}</h3>
                <p className='text-gray-600'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Meet Our Team</h2>
            <p className='text-xl text-gray-600'>The people behind MemoryVerse</p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {team.map((member, index) => (
              <div key={index} className='text-center group'>
                <div className='mb-6 relative'>
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity'></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-48 h-48 rounded-2xl mx-auto relative z-10 bg-gray-100'
                  />
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-1'>{member.name}</h3>
                <p className='text-blue-600 font-semibold mb-3'>{member.role}</p>
                <p className='text-gray-600 text-sm'>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            Join Thousands of Families
          </h2>
          <p className='text-xl text-blue-100 mb-8'>
            Start preserving your family memories today with a 14-day free trial
          </p>
          <Link
            to='/register'
            className='inline-block px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl'
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  )
}
