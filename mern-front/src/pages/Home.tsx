import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-16'>
        {/* Animated Background */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-100 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100 rounded-full blur-3xl animate-pulse' style={{animationDelay: '2s'}}></div>
        </div>

        <div className='relative max-w-7xl mx-auto px-6 py-20 text-center'>
          {/* Badge */}
          <div className='inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-8 glow'>
            <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
            <span className='text-sm font-medium text-slate-700'>AI-Powered Memory Platform</span>
            <span className='px-2 py-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-xs font-bold text-white'>NEW</span>
          </div>

          {/* Main Heading */}
          <h1 className='text-6xl md:text-8xl font-black mb-6 leading-tight'>
            <span className='text-gradient'>Preserve Your</span>
            <br />
            <span className='text-slate-900'>Family Memories</span>
            <br />
            <span className='text-gradient-warm'>Forever</span>
          </h1>

          <p className='text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto font-light'>
            Transform your photos into stunning AI-powered stories. Organize, share, and relive your most precious moments with cutting-edge technology.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-16'>
            <Link to='/register' className='group relative px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden glow-hover transition-all'>
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 group-hover:scale-110 transition-transform'></div>
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity'></div>
              <span className='relative text-white flex items-center space-x-2'>
                <span>Start Free Trial</span>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                </svg>
              </span>
            </Link>
            <button className='px-8 py-4 glass-card rounded-2xl font-bold text-lg text-slate-900 hover:bg-slate-50 transition-all flex items-center space-x-2 group'>
              <svg className='w-6 h-6 text-cyan-400' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M8 5v14l11-7z' />
              </svg>
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'>
            <div className='glass-card p-6 rounded-2xl'>
              <div className='text-4xl font-black text-gradient mb-2'>50K+</div>
              <div className='text-slate-600 font-medium'>Active Users</div>
            </div>
            <div className='glass-card p-6 rounded-2xl'>
              <div className='text-4xl font-black text-gradient mb-2'>2M+</div>
              <div className='text-slate-600 font-medium'>Photos Stored</div>
            </div>
            <div className='glass-card p-6 rounded-2xl'>
              <div className='text-4xl font-black text-gradient-warm mb-2'>100K+</div>
              <div className='text-slate-600 font-medium'>AI Stories</div>
            </div>
            <div className='glass-card p-6 rounded-2xl'>
              <div className='text-4xl font-black text-gradient-warm mb-2'>4.9★</div>
              <div className='text-slate-600 font-medium'>User Rating</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <svg className='w-6 h-6 text-slate-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className='relative py-32 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-20'>
            <h2 className='text-5xl md:text-6xl font-black mb-6'>
              <span className='text-gradient'>Powered by AI</span>
            </h2>
            <p className='text-xl text-slate-400 max-w-2xl mx-auto'>
              Experience the future of family photo management with our intelligent features
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Feature 1 */}
            <div className='group glass-card p-8 rounded-3xl hover:bg-white/15 transition-all glow-hover'>
              <div className='w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>Smart Organization</h3>
              <p className='text-slate-600'>AI automatically organizes your photos by people, places, and events</p>
            </div>

            {/* Feature 2 */}
            <div className='group glass-card p-8 rounded-3xl hover:shadow-2xl transition-all glow-hover'>
              <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>AI Story Videos</h3>
              <p className='text-slate-600'>Transform your memories into beautiful cinematic video stories</p>
            </div>

            {/* Feature 3 */}
            <div className='group glass-card p-8 rounded-3xl hover:shadow-2xl transition-all glow-hover'>
              <div className='w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>Family Sharing</h3>
              <p className='text-slate-600'>Create private family groups and share memories securely</p>
            </div>

            {/* Feature 4 */}
            <div className='group glass-card p-8 rounded-3xl hover:shadow-2xl transition-all glow-hover'>
              <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>Secure Storage</h3>
              <p className='text-slate-600'>Military-grade encryption keeps your precious memories safe</p>
            </div>

            {/* Feature 5 */}
            <div className='group glass-card p-8 rounded-3xl hover:shadow-2xl transition-all glow-hover'>
              <div className='w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>Photo Enhancement</h3>
              <p className='text-slate-600'>AI-powered tools to enhance, restore, and colorize old photos</p>
            </div>

            {/* Feature 6 */}
            <div className='group glass-card p-8 rounded-3xl hover:shadow-2xl transition-all glow-hover'>
              <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>Smart Search</h3>
              <p className='text-slate-600'>Find any photo instantly with powerful AI-driven search</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className='relative py-32 px-6 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-20'>
            <h2 className='text-5xl md:text-6xl font-black mb-6'>
              <span className='text-slate-900'>Simple as</span> <span className='text-gradient'>1-2-3</span>
            </h2>
            <p className='text-xl text-slate-600 max-w-2xl mx-auto'>
              Get started in minutes and let AI do the heavy lifting
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-12'>
            {/* Step 1 */}
            <div className='relative text-center'>
              <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full text-4xl font-black text-white mb-6 glow'>
                1
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>Upload Photos</h3>
              <p className='text-slate-600'>Drag and drop your photos or sync from your devices automatically</p>
            </div>

            {/* Step 2 */}
            <div className='relative text-center'>
              <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full text-4xl font-black text-white mb-6 glow'>
                2
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>AI Organizes</h3>
              <p className='text-slate-600'>Our AI automatically tags, organizes, and creates beautiful albums</p>
            </div>

            {/* Step 3 */}
            <div className='relative text-center'>
              <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full text-4xl font-black text-white mb-6 glow'>
                3
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>Share & Enjoy</h3>
              <p className='text-slate-600'>Share with family, create stories, and relive your precious moments</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative py-32 px-6'>
        <div className='max-w-5xl mx-auto text-center'>
          <div className='glass-card p-12 md:p-20 rounded-3xl glow'>
            <h2 className='text-5xl md:text-6xl font-black mb-6'>
              <span className='text-gradient'>Ready to Start?</span>
            </h2>
            <p className='text-xl text-slate-700 mb-10 max-w-2xl mx-auto'>
              Join thousands of families already preserving their memories with MemoryVerse
            </p>
            <Link to='/register' className='inline-flex group relative px-10 py-5 rounded-2xl font-bold text-xl overflow-hidden glow-hover transition-all'>
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 group-hover:scale-110 transition-transform'></div>
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity'></div>
              <span className='relative text-white flex items-center space-x-2'>
                <span>Get Started Free</span>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                </svg>
              </span>
            </Link>
            <p className='mt-6 text-sm text-slate-500'>No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
