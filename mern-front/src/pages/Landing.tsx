import React, { useState, useEffect } from 'react'

export default function Landing() {
  const [isDragging, setIsDragging] = useState(false)
  const [generatingStory, setGeneratingStory] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])
  const [showConfetti, setShowConfetti] = useState(false)

  const floatingImages = [
    'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1540479859555-17af45c78602?w=400&h=400&fit=crop',
  ]

  const memoryCards = [
    { image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop', date: 'Dec 15, 2024', location: 'Beach Vacation', caption: 'Building sandcastles with Dad' },
    { image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop', date: 'Nov 23, 2024', location: 'Home', caption: 'First steps captured forever' },
    { image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=400&fit=crop', date: 'Oct 10, 2024', location: 'Park', caption: 'Family picnic memories' },
    { image: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?w=600&h=400&fit=crop', date: 'Sep 5, 2024', location: 'Birthday Party', caption: 'Celebration of love and joy' },
  ]

  const familyMembers = [
    { name: 'Dad', relationship: 'Father', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop', memories: 234 },
    { name: 'Mom', relationship: 'Mother', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop', memories: 312 },
    { name: 'Emma', relationship: 'Daughter', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop', memories: 189 },
    { name: 'Jake', relationship: 'Son', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop', memories: 156 },
  ]

  const pricingPlans = [
    {
      name: 'Family Starter',
      price: 'Free',
      period: '',
      features: ['100 memories/month', 'Basic AI captions', '3 family members', 'Photo storage', 'Monthly recap'],
      popular: false,
      gradient: 'from-[#FFD180] to-[#FF8A80]'
    },
    {
      name: 'Memory Keeper',
      price: '$12',
      period: '/month',
      features: ['Unlimited memories', 'AI story generation', 'Unlimited family', 'Video support', 'Voice narration', 'Auto-sync (Drive/WhatsApp)', 'Year-in-review'],
      popular: true,
      gradient: 'from-[#FF8A80] to-[#4E54C8]'
    },
    {
      name: 'Legacy',
      price: '$29',
      period: '/month',
      features: ['Everything in Memory Keeper', 'AI biography generator', 'Premium templates', '4K video export', 'Priority support', 'Family tree builder', 'Lifetime archive'],
      popular: false,
      gradient: 'from-[#4E54C8] to-[#857AFF]'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % floatingImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    setUploadedFiles(prev => [...prev, 'photo.jpg'])
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  const handleGenerateStory = () => {
    setGeneratingStory(true)
    setTimeout(() => {
      setGeneratingStory(false)
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    }, 2500)
  }

  return (
    <div className='min-h-screen bg-[#FDF7F2] text-[#2D2D2D] overflow-x-hidden'>
      {/* Confetti Effect */}
      {showConfetti && (
        <div className='fixed inset-0 z-[200] pointer-events-none'>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className='absolute animate-bounce'
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                animation: `fall ${2 + Math.random() * 2}s linear forwards`,
                fontSize: '24px',
              }}
            >
              {['❤️', '✨', '🌟', '💖', '🎉'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes heartPop {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
        .animate-heart-pop { animation: heartPop 0.3s ease-out; }
      `}</style>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-white/60 backdrop-blur-md'}`}>
        <div className='max-w-7xl mx-auto px-6 py-4'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF8A80] to-[#FFD180] flex items-center justify-center shadow-lg'>
                <span className='text-2xl'>❤️</span>
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-[#FF8A80] to-[#4E54C8] bg-clip-text text-transparent'>AI Memory Keeper</span>
            </div>
            
            <div className='hidden md:flex items-center gap-8'>
              <a href='#memories' className='text-[#2D2D2D] hover:text-[#FF8A80] transition-all font-medium hover:scale-105'>Memories</a>
              <a href='#auto-story' className='text-[#2D2D2D] hover:text-[#FF8A80] transition-all font-medium hover:scale-105'>Auto-Story</a>
              <a href='#family' className='text-[#2D2D2D] hover:text-[#FF8A80] transition-all font-medium hover:scale-105'>Family Members</a>
              <a href='#pricing' className='text-[#2D2D2D] hover:text-[#FF8A80] transition-all font-medium hover:scale-105'>Pricing</a>
              <a href='/login' className='text-[#2D2D2D] hover:text-[#FF8A80] transition-all font-medium hover:scale-105'>Login</a>
              <a
                href='/signup'
                className='bg-gradient-to-r from-[#FF8A80] to-[#FFD180] text-white px-6 py-2.5 rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all flex items-center gap-2'
              >
                <span>✨</span> Add Memory
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='py-20 px-6 relative overflow-hidden'>
        {/* Animated Background Blobs */}
        <div className='absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#FFD180]/20 to-[#FF8A80]/20 rounded-full blur-3xl animate-float'></div>
        <div className='absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-[#4E54C8]/10 to-[#857AFF]/10 rounded-full blur-3xl' style={{ animation: 'float 4s ease-in-out infinite' }}></div>

        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10'>
          <div className='space-y-8'>
            <div className='inline-block'>
              <span className='px-4 py-2 bg-gradient-to-r from-[#FFD180]/30 to-[#FF8A80]/30 rounded-full text-sm font-semibold text-[#2D2D2D] border border-[#FF8A80]/30'>
                ✨ AI-Powered Family Stories
              </span>
            </div>
            
            <h1 className='text-6xl lg:text-7xl font-bold leading-tight'>
              Capture Your Family's{' '}
              <span className='bg-gradient-to-r from-[#FF8A80] to-[#4E54C8] bg-clip-text text-transparent'>
                Story
              </span>{' '}
              — Effortlessly
            </h1>
            
            <p className='text-xl text-[#2D2D2D]/70 leading-relaxed'>
              AI organizes your photos, messages, and moments into a beautiful family history. Preserve memories, create stories, relive the magic.
            </p>

            <div className='flex flex-wrap gap-4'>
              <button className='bg-gradient-to-r from-[#FF8A80] to-[#FFD180] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all flex items-center gap-2'>
                <span>📸</span> Upload Your Memories
              </button>
              <button className='bg-white text-[#2D2D2D] px-8 py-4 rounded-full font-bold text-lg border-2 border-[#FF8A80]/30 hover:scale-105 hover:border-[#FF8A80] hover:shadow-xl transition-all flex items-center gap-2'>
                <span>🎬</span> Try Auto-Story Demo
              </button>
            </div>

            {/* Upload Drag Area */}
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`mt-8 border-2 border-dashed rounded-3xl p-8 text-center transition-all ${
                isDragging 
                  ? 'border-[#FF8A80] bg-[#FF8A80]/10 scale-105' 
                  : 'border-[#FFD180]/50 bg-white/50 hover:border-[#FF8A80]/70 hover:bg-white/80'
              }`}
            >
              <div className='flex flex-col items-center gap-3'>
                <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFD180]/30 to-[#FF8A80]/30 flex items-center justify-center'>
                  <svg className='w-8 h-8 text-[#FF8A80]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' />
                  </svg>
                </div>
                <p className='text-lg font-semibold text-[#2D2D2D]'>Drop photos, videos, or voice notes</p>
                <p className='text-sm text-[#2D2D2D]/60'>or click to browse</p>
                {uploadedFiles.length > 0 && (
                  <p className='text-sm text-[#4E54C8] font-semibold mt-2'>✓ {uploadedFiles.length} files uploaded</p>
                )}
              </div>
            </div>
          </div>

          {/* Floating Images Collage */}
          <div className='relative h-[600px] hidden lg:block'>
            <div className='absolute top-10 left-10 w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-500'>
              <img src={floatingImages[0]} alt='Family memory' className='w-full h-full object-cover' />
            </div>
            <div className='absolute top-32 right-10 w-56 h-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-white -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-500 animate-float'>
              <img src={floatingImages[1]} alt='Family memory' className='w-full h-full object-cover' />
            </div>
            <div className='absolute bottom-32 left-20 w-48 h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-500'>
              <img src={floatingImages[2]} alt='Family memory' className='w-full h-full object-cover' />
            </div>
            <div className='absolute bottom-10 right-24 w-52 h-52 rounded-3xl overflow-hidden shadow-2xl border-4 border-white -rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-500 animate-float'>
              <img src={floatingImages[3]} alt='Family memory' className='w-full h-full object-cover' />
            </div>
            
            {/* AI Sparkles */}
            <div className='absolute top-5 right-5 text-4xl animate-sparkle'>✨</div>
            <div className='absolute bottom-5 left-5 text-3xl animate-sparkle' style={{ animationDelay: '0.5s' }}>🌟</div>
            <div className='absolute top-1/2 left-0 text-3xl animate-sparkle' style={{ animationDelay: '1s' }}>💫</div>

            {/* Timeline Lines */}
            <svg className='absolute inset-0 w-full h-full pointer-events-none opacity-20'>
              <line x1='20%' y1='0' x2='80%' y2='100%' stroke='#FF8A80' strokeWidth='2' strokeDasharray='10,10' />
              <line x1='80%' y1='0' x2='20%' y2='100%' stroke='#FFD180' strokeWidth='2' strokeDasharray='10,10' />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 px-6 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='text-center space-y-2'>
              <div className='text-5xl font-bold bg-gradient-to-r from-[#FF8A80] to-[#FFD180] bg-clip-text text-transparent'>2M+</div>
              <p className='text-[#2D2D2D]/70 font-medium'>Memories Preserved</p>
            </div>
            <div className='text-center space-y-2'>
              <div className='text-5xl font-bold bg-gradient-to-r from-[#FFD180] to-[#4E54C8] bg-clip-text text-transparent'>500K+</div>
              <p className='text-[#2D2D2D]/70 font-medium'>Stories Created</p>
            </div>
            <div className='text-center space-y-2'>
              <div className='text-5xl font-bold bg-gradient-to-r from-[#4E54C8] to-[#857AFF] bg-clip-text text-transparent'>150K+</div>
              <p className='text-[#2D2D2D]/70 font-medium'>Happy Families</p>
            </div>
            <div className='text-center space-y-2'>
              <div className='text-5xl font-bold bg-gradient-to-r from-[#857AFF] to-[#FF8A80] bg-clip-text text-transparent'>4.9★</div>
              <p className='text-[#2D2D2D]/70 font-medium'>User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Memory Timeline Section */}
      <section id='memories' className='py-24 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-5xl font-bold mb-4'>
              Your <span className='bg-gradient-to-r from-[#FF8A80] to-[#4E54C8] bg-clip-text text-transparent'>Memory Timeline</span>
            </h2>
            <p className='text-xl text-[#2D2D2D]/70'>Every moment, beautifully organized by AI</p>
          </div>

          {/* Filter Pills */}
          <div className='flex flex-wrap justify-center gap-3 mb-12'>
            {['All Moments', '2024', '2023', 'Birthdays', 'Vacations', 'School'].map((filter) => (
              <button key={filter} className='px-6 py-3 bg-white rounded-full font-medium text-[#2D2D2D] border-2 border-transparent hover:border-[#FF8A80] hover:bg-[#FF8A80]/10 hover:scale-105 transition-all shadow-md'>
                {filter}
              </button>
            ))}
          </div>

          {/* Timeline Cards */}
          <div className='space-y-8'>
            {memoryCards.map((card, idx) => (
              <div 
                key={idx}
                className='group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]'
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className='grid grid-cols-1 md:grid-cols-3 gap-0'>
                  <div className='relative overflow-hidden h-64 md:h-auto'>
                    <img src={card.image} alt={card.caption} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' />
                    <div className='absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-[#2D2D2D] shadow-lg'>
                      📅 {card.date}
                    </div>
                  </div>
                  
                  <div className='md:col-span-2 p-8 flex flex-col justify-center space-y-4'>
                    <div className='flex items-center gap-2 text-[#FF8A80] font-semibold'>
                      <span>📍</span> {card.location}
                    </div>
                    <h3 className='text-2xl font-bold text-[#2D2D2D]'>{card.caption}</h3>
                    <p className='text-[#2D2D2D]/60'>Generated by AI • Auto-tagged • Voice playback available</p>
                    
                    <div className='flex gap-3 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <button className='px-6 py-3 bg-gradient-to-r from-[#FF8A80] to-[#FFD180] text-white rounded-full font-semibold hover:scale-105 transition-all shadow-lg flex items-center gap-2'>
                        <span>✨</span> Generate Story
                      </button>
                      <button className='px-6 py-3 bg-white border-2 border-[#FF8A80]/30 text-[#2D2D2D] rounded-full font-semibold hover:border-[#FF8A80] hover:scale-105 transition-all flex items-center gap-2'>
                        <span>🎵</span> Play Audio
                      </button>
                      <button className='p-3 bg-white border-2 border-[#FF8A80]/30 text-[#FF8A80] rounded-full hover:bg-[#FF8A80] hover:text-white hover:scale-110 transition-all animate-heart-pop'>
                        ❤️
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Auto-Story Section */}
      <section id='auto-story' className='py-24 px-6 bg-gradient-to-br from-[#FDF7F2] to-white'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-5xl font-bold mb-4'>
              Turn Moments Into{' '}
              <span className='bg-gradient-to-r from-[#FF8A80] to-[#4E54C8] bg-clip-text text-transparent'>
                Magical Stories
              </span>
            </h2>
            <p className='text-xl text-[#2D2D2D]/70'>Let AI create beautiful narratives from your memories</p>
          </div>

          <div className='bg-white rounded-3xl p-10 shadow-2xl border-2 border-[#FFD180]/20'>
            <div className='space-y-8'>
              {/* Upload for Story */}
              <div className='border-2 border-dashed border-[#FFD180] rounded-2xl p-10 text-center bg-gradient-to-br from-[#FFD180]/5 to-[#FF8A80]/5 hover:border-[#FF8A80] hover:scale-105 transition-all cursor-pointer'>
                <div className='flex flex-col items-center gap-4'>
                  <div className='w-20 h-20 rounded-full bg-gradient-to-br from-[#FFD180] to-[#FF8A80] flex items-center justify-center shadow-xl'>
                    <span className='text-4xl'>📚</span>
                  </div>
                  <h3 className='text-2xl font-bold text-[#2D2D2D]'>Upload Photos for Story</h3>
                  <p className='text-[#2D2D2D]/60'>Select 3-10 photos to create an AI-generated story</p>
                  <button 
                    onClick={handleGenerateStory}
                    className='mt-4 bg-gradient-to-r from-[#FF8A80] to-[#4E54C8] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all flex items-center gap-2'
                  >
                    {generatingStory ? (
                      <>
                        <div className='w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin'></div>
                        <span>Creating Magic...</span>
                      </>
                    ) : (
                      <>
                        <span>✨</span> Generate Story
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Generated Story Preview */}
              {!generatingStory && (
                <div className='bg-gradient-to-br from-[#FFD180]/10 via-[#FF8A80]/10 to-[#4E54C8]/10 rounded-2xl p-8 space-y-6'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-2xl font-bold text-[#2D2D2D]'>📖 Your Story</h3>
                    <button className='p-3 bg-white rounded-full hover:scale-110 transition-all shadow-md'>
                      <span className='text-2xl'>🎙️</span>
                    </button>
                  </div>
                  
                  <div className='prose prose-lg text-[#2D2D2D]/80 leading-relaxed'>
                    <p>
                      "On a warm December afternoon, our family gathered at the beach. The children's laughter echoed as they built sandcastles, 
                      while the waves gently kissed the shore. These precious moments, captured forever, remind us that the greatest treasures 
                      are not things, but the people we share our time with..."
                    </p>
                  </div>

                  <div className='flex flex-wrap gap-3'>
                    <button className='px-6 py-3 bg-white border-2 border-[#FF8A80]/30 text-[#2D2D2D] rounded-full font-semibold hover:border-[#FF8A80] hover:scale-105 transition-all'>
                      🔄 Rephrase
                    </button>
                    <button className='px-6 py-3 bg-white border-2 border-[#FF8A80]/30 text-[#2D2D2D] rounded-full font-semibold hover:border-[#FF8A80] hover:scale-105 transition-all'>
                      💖 Make Emotional
                    </button>
                    <button className='px-6 py-3 bg-white border-2 border-[#FF8A80]/30 text-[#2D2D2D] rounded-full font-semibold hover:border-[#FF8A80] hover:scale-105 transition-all'>
                      😄 Make Funny
                    </button>
                    <button className='px-6 py-3 bg-gradient-to-r from-[#FF8A80] to-[#4E54C8] text-white rounded-full font-semibold hover:scale-105 transition-all shadow-lg'>
                      📥 Download PDF
                    </button>
                    <button className='px-6 py-3 bg-gradient-to-r from-[#4E54C8] to-[#857AFF] text-white rounded-full font-semibold hover:scale-105 transition-all shadow-lg'>
                      🎬 Video Slideshow
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Family Members Section */}
      <section id='family' className='py-24 px-6 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-5xl font-bold mb-4'>
              Your <span className='bg-gradient-to-r from-[#FF8A80] to-[#4E54C8] bg-clip-text text-transparent'>Family Circle</span>
            </h2>
            <p className='text-xl text-[#2D2D2D]/70'>Each member's journey, beautifully preserved</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {familyMembers.map((member, idx) => (
              <div 
                key={idx}
                className='group relative bg-gradient-to-br from-white to-[#FDF7F2] rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-transparent hover:border-[#FF8A80]/30'
              >
                <div className='text-center space-y-4'>
                  <div className='relative inline-block'>
                    <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto'>
                      <img src={member.image} alt={member.name} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
                    </div>
                    <div className='absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-[#FF8A80] to-[#FFD180] rounded-full flex items-center justify-center shadow-lg'>
                      <span className='text-xl'>❤️</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className='text-2xl font-bold text-[#2D2D2D]'>{member.name}</h3>
                    <p className='text-[#2D2D2D]/60 font-medium'>{member.relationship}</p>
                  </div>

                  <div className='bg-gradient-to-r from-[#FFD180]/20 to-[#FF8A80]/20 rounded-2xl p-4'>
                    <div className='text-3xl font-bold text-[#2D2D2D]'>{member.memories}</div>
                    <div className='text-sm text-[#2D2D2D]/70 font-medium'>Memories</div>
                  </div>

                  <button className='w-full bg-white border-2 border-[#FF8A80]/30 text-[#2D2D2D] py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#FF8A80] hover:to-[#FFD180] hover:text-white hover:border-transparent transition-all'>
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id='pricing' className='py-24 px-6 bg-gradient-to-br from-[#FDF7F2] via-white to-[#FDF7F2]'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-5xl font-bold mb-4'>
              Choose Your{' '}
              <span className='bg-gradient-to-r from-[#FF8A80] to-[#4E54C8] bg-clip-text text-transparent'>
                Memory Plan
              </span>
            </h2>
            <p className='text-xl text-[#2D2D2D]/70'>Preserve your family legacy with the perfect plan</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-8 transition-all duration-500 hover:scale-105 ${
                  plan.popular
                    ? 'bg-white border-4 border-[#FF8A80] shadow-2xl scale-105'
                    : 'bg-white border-2 border-[#FFD180]/30 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className='absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF8A80] to-[#FFD180] text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl'>
                    ⭐ Most Popular
                  </div>
                )}

                <div className='mb-6'>
                  <h3 className='text-2xl font-bold mb-3'>{plan.name}</h3>
                  <div className='flex items-baseline gap-1'>
                    <span className='text-6xl font-bold bg-gradient-to-r from-[#FF8A80] to-[#4E54C8] bg-clip-text text-transparent'>{plan.price}</span>
                    {plan.period && <span className='text-[#2D2D2D]/60 text-lg'>{plan.period}</span>}
                  </div>
                </div>

                <ul className='space-y-4 mb-8'>
                  {plan.features.map((feature, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <span className='text-[#FF8A80] text-xl flex-shrink-0'>✓</span>
                      <span className='text-[#2D2D2D]/80'>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:scale-105 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-2xl`
                      : 'bg-white border-2 border-[#FF8A80]/30 text-[#2D2D2D] hover:bg-gradient-to-r hover:from-[#FFD180] hover:to-[#FF8A80] hover:text-white hover:border-transparent'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Touch - Daily Memory Reminder */}
      <section className='py-16 px-6 bg-gradient-to-r from-[#FF8A80]/10 via-[#FFD180]/10 to-[#4E54C8]/10'>
        <div className='max-w-4xl mx-auto text-center space-y-6'>
          <div className='text-6xl mb-4'>💭</div>
          <h3 className='text-3xl font-bold text-[#2D2D2D]'>
            "On this day, 5 years ago..."
          </h3>
          <p className='text-xl text-[#2D2D2D]/70'>
            Get daily reminders of precious memories. Relive the joy, laughter, and love — automatically curated by AI.
          </p>
          <button className='bg-gradient-to-r from-[#FF8A80] to-[#FFD180] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all'>
            Enable Daily Memories
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-[#2D2D2D] text-white py-16 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'>
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF8A80] to-[#FFD180] flex items-center justify-center'>
                  <span className='text-2xl'>❤️</span>
                </div>
                <span className='text-xl font-bold'>AI Memory Keeper</span>
              </div>
              <p className='text-white/70'>Preserving family stories, one memory at a time.</p>
            </div>

            <div>
              <h4 className='font-bold mb-4 text-lg'>Product</h4>
              <ul className='space-y-3 text-white/70'>
                <li><a href='#' className='hover:text-[#FF8A80] transition-colors'>Features</a></li>
                <li><a href='#' className='hover:text-[#FF8A80] transition-colors'>Pricing</a></li>
                <li><a href='#' className='hover:text-[#FF8A80] transition-colors'>Auto-Sync</a></li>
                <li><a href='#' className='hover:text-[#FF8A80] transition-colors'>Mobile App</a></li>
              </ul>
            </div>

            <div>
              <h4 className='font-bold mb-4 text-lg'>Company</h4>
              <ul className='space-y-3 text-white/70'>
                <li><a href='#' className='hover:text-[#FF8A80] transition-colors'>About Us</a></li>
                <li><a href='#' className='hover:text-[#FF8A80] transition-colors'>Blog</a></li>
                <li><a href='#' className='hover:text-[#FF8A80] transition-colors'>Careers</a></li>
                <li><a href='#' className='hover:text-[#FF8A80] transition-colors'>Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className='font-bold mb-4 text-lg'>Legal</h4>
              <ul className='space-y-3 text-white/70'>
                <li><a href='#' className='hover:text-[#FF8A80] transition-colors'>Privacy Policy</a></li>
                <li><a href='#' className='hover:text-[#FF8A80] transition-colors'>Terms of Service</a></li>
                <li><a href='#' className='hover:text-[#FF8A80] transition-colors'>Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className='border-t border-white/10 pt-8 text-center space-y-4'>
            <div className='flex justify-center gap-6'>
              <a href='#' className='w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#FF8A80] hover:to-[#FFD180] flex items-center justify-center transition-all hover:scale-110'>
                <span className='text-xl'>📘</span>
              </a>
              <a href='#' className='w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#FF8A80] hover:to-[#FFD180] flex items-center justify-center transition-all hover:scale-110'>
                <span className='text-xl'>🐦</span>
              </a>
              <a href='#' className='w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#FF8A80] hover:to-[#FFD180] flex items-center justify-center transition-all hover:scale-110'>
                <span className='text-xl'>📸</span>
              </a>
            </div>
            <p className='text-white/60'>© 2025 AI Memory Keeper. Made with ❤️ for families everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
