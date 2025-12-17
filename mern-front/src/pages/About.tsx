import React from 'react'

export default function About() {
  return (
    <div>
     <section id='about' className='mt-25 flex flex-col justify-center items-center px-15 w-full sm:px-25 lg:px-25'>
          <h1 className='text-4xl tracking-tight'>Everyone has a story to tell</h1>
          <p className='text-neutral-500 text-center mt-3 w-160'>Share your experiences, ideas, and insights with the world.
                Our platform gives every writer the space to tell their story and reach readers everywhere.</p>
          <div className='flex justify-center items-center gap-10 mt-5'>
               <div>
                    this is text
               </div>
               <div>
                    this is image
               </div>
          </div>
     </section>
    </div>
  )
}
