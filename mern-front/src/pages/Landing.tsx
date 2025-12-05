import React, { useState, useEffect } from 'react'

export default function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prompt, setPrompt] = useState('')

  const showcaseImages = [
    { 
      url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=1000&fit=crop',
      prompt: 'Futuristic cyberpunk cityscape at night'
    },
    { 
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=1000&fit=crop',
      prompt: 'Abstract digital art with flowing colors'
    },
    { 
      url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=1000&fit=crop',
      prompt: 'Surreal landscape with floating islands'
    },
    { 
      url: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=800&h=1000&fit=crop',
      prompt: '3D rendered modern architecture'
    },
  ]

  const galleryImages = [
    'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?w=600&h=600&fit=crop',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='min-h-screen bg-black text-white overflow-x-hidden'>
      {/* Animated Background */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
        <div className='absolute top-0 -right-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
        <div className='absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000'></div>
      </div>

      {/* Navigation */}
      <nav className='fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center'>
              <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z' />
              </svg>
            </div>
            <span className='text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>ImageAI</span>
          </div>
          
          <div className='hidden md:flex items-center gap-8'>
            <a href='#home' className='text-white/70 hover:text-white transition-colors text-sm font-medium'>Home</a>
            <a href='#gallery' className='text-white/70 hover:text-white transition-colors text-sm font-medium'>Gallery</a>
            <a href='#features' className='text-white/70 hover:text-white transition-colors text-sm font-medium'>Features</a>
            <a href='#about' className='text-white/70 hover:text-white transition-colors text-sm font-medium'>About</a>
          </div>

          <div className='flex items-center gap-4'>
            <button className='text-white/70 hover:text-white transition-colors text-sm font-medium'>Sign In</button>
            <button className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all'>
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id='home' className='relative min-h-screen flex items-center justify-center pt-20'>
        <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='space-y-8 z-10'>
            <div className='inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
              </span>
              <span className='text-sm text-white/80'>AI-Powered Image Generation</span>
            </div>

            <h1 className='text-6xl lg:text-7xl font-bold leading-tight'>
              Create{' '}
              <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                Stunning Images
              </span>{' '}
              with AI
            </h1>

            <p className='text-xl text-white/60 leading-relaxed max-w-xl'>
              Transform your imagination into reality. Generate photorealistic images, digital art, and illustrations in seconds with our advanced AI technology.
            </p>

            {/* Prompt Input */}
            <div className='relative'>
              <div className='flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2 hover:border-purple-500/50 transition-all'>
                <input
                  type='text'
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder='Describe your image... (e.g., "a serene lake at sunset")'
                  className='flex-1 bg-transparent px-4 py-3 text-white placeholder-white/40 outline-none'
                />
                <button className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2'>
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                  </svg>
                  Generate
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className='flex items-center gap-8 pt-4'>
              <div>
                <div className='text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>2M+</div>
                <div className='text-sm text-white/50'>Images Created</div>
              </div>
              <div className='w-px h-12 bg-white/10'></div>
              <div>
                <div className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>100K+</div>
                <div className='text-sm text-white/50'>Active Users</div>
              </div>
              <div className='w-px h-12 bg-white/10'></div>
              <div>
                <div className='text-3xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent'>4.9/5</div>
                <div className='text-sm text-white/50'>User Rating</div>
              </div>
            </div>
          </div>

          {/* Right Showcase */}
          <div className='relative h-[600px] hidden lg:block'>
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl'></div>
            
            {showcaseImages.map((item, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ${
                  idx === currentIndex 
                    ? 'opacity-100 scale-100 rotate-0' 
                    : 'opacity-0 scale-95 rotate-3'
                }`}
              >
                <div className='relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 overflow-hidden'>
                  <img
                    src={item.url}
                    alt={item.prompt}
                    className='w-full h-full object-cover rounded-2xl'
                  />
                  <div className='absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-4'>
                    <p className='text-sm text-white/80 italic'>"{item.prompt}"</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Floating Elements */}
            <div className='absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl rotate-12 animate-float'></div>
            <div className='absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-float animation-delay-2000'></div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id='gallery' className='py-32 relative'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-5xl font-bold mb-4'>
              <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                Community Creations
              </span>
            </h2>
            <p className='text-white/60 text-lg'>Explore stunning images created by our community</p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className='group relative aspect-square overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer'
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6'>
                  <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-3'>
                      <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full'></div>
                      <span className='text-sm text-white font-medium'>AI Generated</span>
                    </div>
                    <button className='text-white/80 hover:text-white transition-colors'>
                      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='py-32 relative'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-5xl font-bold mb-4'>
              <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                Powerful Features
              </span>
            </h2>
            <p className='text-white/60 text-lg'>Everything you need to create amazing AI art</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              { icon: '⚡', title: 'Lightning Fast', desc: 'Generate images in seconds' },
              { icon: '🎨', title: 'Multiple Styles', desc: 'From realistic to artistic' },
              { icon: '🖼️', title: 'HD Quality', desc: 'Crystal clear 4K images' },
              { icon: '🔧', title: 'Full Control', desc: 'Fine-tune every detail' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className='group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all cursor-pointer'
              >
                <div className='text-5xl mb-4 transform group-hover:scale-110 transition-transform'>{feature.icon}</div>
                <h3 className='text-xl font-semibold mb-2 text-white'>{feature.title}</h3>
                <p className='text-white/60'>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/CTA Section */}
      <section id='about' className='py-32 relative'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-5xl font-bold mb-6'>
            Ready to Create{' '}
            <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Amazing Art?
            </span>
          </h2>
          <p className='text-white/60 text-xl mb-10 leading-relaxed'>
            Join thousands of creators worldwide and start generating stunning AI images today. No design skills required.
          </p>
          <button className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105'>
            Start Creating for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-white/10 py-12'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center'>
                <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z' />
                </svg>
              </div>
              <span className='text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>ImageAI</span>
            </div>
            
            <div className='text-white/40 text-sm'>
              © 2025 ImageAI. All rights reserved.
            </div>

            <div className='flex items-center gap-6'>
              <a href='#' className='text-white/40 hover:text-white transition-colors'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/>
                </svg>
              </a>
              <a href='#' className='text-white/40 hover:text-white transition-colors'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'/>
                </svg>
              </a>
              <a href='#' className='text-white/40 hover:text-white transition-colors'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z'/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

      