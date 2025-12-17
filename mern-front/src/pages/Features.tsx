import React from 'react'

export default function Features() {
     return (
          <div>
               <section id="features" className="mt-25 flex flex-col justify-start items-start px-15 w-full sm:px-25 lg:px-25">
                    <h1 className="tracking-tighter text-4xl">Everything You Need to Share Your Ideas</h1>
                    <p className="text-neutral-500">From writing to publishing, our platform gives you full control over your content and audience.</p>
                    <div className="flex justify-center items-center flex-col mt-5">
                         <div className="flex justify-center items-center gap-2.5 ">
                              <div className="border border-neutral-200 bg-white rounded-sm p-8 w-110 h-50 relative">
                                   <div className='bg-[#6366f1] w-full h-1 absolute top-0 left-0 rounded-2xl'></div>
                                   <h2 className="text-xl font-medium tracking-tight">Easy Article Creation</h2>
                                   <p className="text-lg text-neutral-600 mt-7">Write and edit articles effortlessly with a user-friendly editor that supports rich text formatting and images.</p>
                              </div>
                              <div className="border border-neutral-200 bg-white rounded-sm p-8 w-110 h-50 relative">
                                   <div className='bg-[#6366f1] w-full h-1 absolute top-0 left-0 rounded-2xl'></div>
                                   <h2 className="text-xl font-medium tracking-tight">Instant Publishing</h2>
                                   <p className="text-lg text-neutral-600 mt-7">Publish your content immediately or schedule posts for later to keep your audience engaged.</p>
                              </div>
                              <div className="border border-neutral-200 bg-white rounded-sm p-8 w-110 h-50 relative">
                                   <div className='bg-[#6366f1] w-full h-1 absolute top-0 left-0 rounded-2xl'></div>
                                   <h2 className="text-xl font-medium tracking-tight">SEO Optimization Tools</h2>
                                   <p className="text-lg text-neutral-600 mt-7">Built-in SEO tools help your articles rank higher and reach more readers organically.</p>
                              </div>
                         </div>
                         <div className="flex justify-center items-center gap-2.5 mt-3">
                              <div className="border border-neutral-200 bg-white rounded-sm p-8 w-110 h-50 relative">
                                   <div className='bg-pink-500 w-full h-1 absolute top-0 left-0 rounded-2xl'></div>
                                   <h2 className="text-xl font-medium tracking-tight">Analytics Dashboard</h2>
                                   <p className="text-lg text-neutral-600 mt-7">Track your article performance, reader engagement, and traffic insights in one dashboard.</p>
                              </div>
                              <div className="border border-neutral-200 bg-white rounded-sm p-8 w-110 h-50 relative">
                                   <div className='bg-pink-500 w-full h-1 absolute top-0 left-0 rounded-2xl'></div>
                                   <h2 className="text-xl font-medium tracking-tight">Customizable Profiles</h2>
                                   <p className="text-lg text-neutral-600 mt-7">Personalize your author profile to showcase your brand and connect with readers.</p>
                              </div>
                              <div className="border border-neutral-200 bg-white rounded-sm p-8 w-110 h-50 relative">
                                   <div className='bg-pink-500 w-full h-1 absolute top-0 left-0 rounded-2xl'></div>
                                   <h2 className="text-xl font-medium tracking-tight">Community Engagement</h2>
                                   <p className="text-lg text-neutral-600 mt-7">Enable comments, likes, and shares to interact with your audience and build a loyal community.</p>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     )
}
