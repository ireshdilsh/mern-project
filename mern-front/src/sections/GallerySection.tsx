import React from 'react'

export default function GallerySection() {
  return (
    <div className='flex justify-center items-center flex-col my-25 px-35'>
      <h1 className='text-5xl font-medium'>Moments That Matter</h1>
      <p className='text-neutral-500 mt-2 text-base'>Discover a collection of memories captured, organized, and brought to life with AI. Every image holds a story worth remembering.</p>
      <div className='flex justify-center items-center mt-8 gap-2.5'>
        <img className='h-120 bg-cover object-cover rounded-xl' src="https://images.pexels.com/photos/34158115/pexels-photo-34158115.jpeg" alt="image-1" />
        <img className='h-120 bg-cover object-cover rounded-xl' src="https://images.pexels.com/photos/28484412/pexels-photo-28484412.jpeg" alt="" />
        <img className='h-120 bg-cover object-cover rounded-xl' src="https://images.pexels.com/photos/34594456/pexels-photo-34594456.jpeg" alt="" />
        <img className='h-120 w-80 bg-cover object-cover rounded-xl' src="https://images.pexels.com/photos/31072029/pexels-photo-31072029.jpeg" alt="" />
      </div>
      <div className='flex justify-center items-center mt-2 gap-2.5'>
        <img className='h-80 w-108 bg-cover object-cover rounded-xl' src="https://images.pexels.com/photos/8829191/pexels-photo-8829191.jpeg" alt="" />
        <img className='h-80 w-108 bg-cover object-cover rounded-xl' src="https://images.pexels.com/photos/5637770/pexels-photo-5637770.jpeg" alt="" />
        <img className='h-80 w-108 bg-cover object-cover rounded-xl' src="https://images.pexels.com/photos/3968133/pexels-photo-3968133.jpeg" alt="" />
      </div>
      <button className='mt-10 flex justify-center items-center gap-2 px-7 font-medium py-2 cursor-pointer'>Load More <img src="https://img.icons8.com/?size=100&id=60662&format=png&color=000000" className='h-4' alt="" /></button>
    </div>
  )
}
