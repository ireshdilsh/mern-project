import React from 'react'

interface AboutProps {
  openSigninModal: () => void;
}

export default function About({ openSigninModal }: AboutProps) {
  return (
    <div className='bg-white py-20 lg:py-24'>
     <section id='about' className='px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto'>
          <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
               {/* Left Content */}
               <div className='lg:w-1/2 space-y-6'>
                    <div className='inline-block px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full'>
                         <span className='text-sm font-medium text-neutral-700'>About Our Platform</span>
                    </div>
                    
                    <h2 className='text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 leading-tight'>
                         Every Voice Deserves to Be Heard
                    </h2>
                    
                    <p className='text-lg text-neutral-600 leading-relaxed'>
                         We believe that everyone has unique stories, insights, and perspectives worth sharing. Our platform empowers writers of all levels to express themselves freely and connect with readers who care.
                    </p>
                    
                    <p className='text-lg text-neutral-600 leading-relaxed'>
                         Whether you're a seasoned blogger, aspiring journalist, or someone with a story to tell, we provide the tools and community to help your voice reach the world.
                    </p>

                    <div className='grid grid-cols-2 gap-6 pt-4'>
                         <div className='space-y-2'>
                              <div className='text-3xl font-bold text-neutral-900'>10K+</div>
                              <div className='text-sm text-neutral-600'>Active Writers</div>
                         </div>
                         <div className='space-y-2'>
                              <div className='text-3xl font-bold text-neutral-900'>500K+</div>
                              <div className='text-sm text-neutral-600'>Stories Published</div>
                         </div>
                         <div className='space-y-2'>
                              <div className='text-3xl font-bold text-neutral-900'>2M+</div>
                              <div className='text-sm text-neutral-600'>Monthly Readers</div>
                         </div>
                         <div className='space-y-2'>
                              <div className='text-3xl font-bold text-neutral-900'>150+</div>
                              <div className='text-sm text-neutral-600'>Countries Reached</div>
                         </div>
                    </div>

                    <button 
                         onClick={openSigninModal}
                         className='mt-6 px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-neutral-800 transition-all duration-200 cursor-pointer'>
                         Join Our Community
                    </button>
               </div>

               {/* Right Content - Visual */}
               <div className='lg:w-1/2 w-full'>
                    <div className='relative'>
                         {/* Main Image */}
                         <div className='rounded-2xl overflow-hidden shadow-2xl border border-neutral-200'>
                              <img 
                                   src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80' 
                                   alt='Community of writers collaborating' 
                                   className='w-full h-auto object-cover'
                              />
                         </div>

                         {/* Floating Card 1 */}
                         <div className='absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-neutral-200'>
                              <div className='flex items-center gap-3'>
                                   <img 
                                        src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80' 
                                        alt='User avatar' 
                                        className='w-10 h-10 rounded-full object-cover'
                                   />
                                   <div className='space-y-1'>
                                        <div className='text-xs font-semibold text-neutral-900'>Sarah Johnson</div>
                                        <div className='text-xs text-neutral-500'>Writer</div>
                                   </div>
                              </div>
                         </div>

                         {/* Floating Card 2 */}
                         <div className='absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-neutral-200'>
                              <div className='flex items-center gap-2'>
                                   <span className='text-2xl'>🎯</span>
                                   <div>
                                        <div className='text-xs text-neutral-500'>Impact Score</div>
                                        <div className='text-xl font-bold text-neutral-900'>9.8/10</div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </section>
    </div>
  )
}
