import React from 'react'

export default function Features() {
     return (
          <div className='bg-neutral-50 py-20 lg:py-24'>
               <section id="features" className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
                    <div className='text-center mb-16'>
                         <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
                              Everything You Need to Succeed
                         </h2>
                         <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                              Powerful tools designed to help you write, publish, and grow your audience with ease.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                         {/* Feature Card 1 */}
                         <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                              <div className='w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300'>
                                   <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
                                   </svg>
                              </div>
                              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Intuitive Editor</h3>
                              <p className="text-neutral-600 leading-relaxed">
                                   Write with a distraction-free editor that supports rich formatting, images, and embedded media.
                              </p>
                         </div>

                         {/* Feature Card 2 */}
                         <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                              <div className='w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300'>
                                   <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                                   </svg>
                              </div>
                              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Instant Publishing</h3>
                              <p className="text-neutral-600 leading-relaxed">
                                   Go live instantly or schedule posts for optimal timing. Full control over your content calendar.
                              </p>
                         </div>

                         {/* Feature Card 3 */}
                         <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                              <div className='w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300'>
                                   <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                                   </svg>
                              </div>
                              <h3 className="text-xl font-semibold text-neutral-900 mb-3">SEO Optimized</h3>
                              <p className="text-neutral-600 leading-relaxed">
                                   Built-in SEO tools help your content rank higher and reach more readers organically.
                              </p>
                         </div>

                         {/* Feature Card 4 */}
                         <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                              <div className='w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300'>
                                   <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                                   </svg>
                              </div>
                              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Real-time Analytics</h3>
                              <p className="text-neutral-600 leading-relaxed">
                                   Track views, engagement, and audience growth with comprehensive analytics dashboard.
                              </p>
                         </div>

                         {/* Feature Card 5 */}
                         <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                              <div className='w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300'>
                                   <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                                   </svg>
                              </div>
                              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Custom Profiles</h3>
                              <p className="text-neutral-600 leading-relaxed">
                                   Build your personal brand with customizable author profiles and portfolios.
                              </p>
                         </div>

                         {/* Feature Card 6 */}
                         <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                              <div className='w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300'>
                                   <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                                   </svg>
                              </div>
                              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Engage Readers</h3>
                              <p className="text-neutral-600 leading-relaxed">
                                   Build a community with comments, reactions, and direct reader interactions.
                              </p>
                         </div>
                    </div>
               </section>
          </div>
     )
}
