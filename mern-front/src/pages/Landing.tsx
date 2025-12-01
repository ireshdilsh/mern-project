import React from 'react'
import Navbar from '../components/Navbar'
import Gallery from './Gallery'

export default function Landing() {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col justify-center items-center mt-35 px-35'>
        <h1 className='text-7xl font-semibold tracking-tighter text-[#333] text-center'>Create Stunning <span className='bg-clip-text text-transparent bg-gradient-to-r to-blue-600 via-indigo-600 from-pink-600'>AI Images </span> <br /> in Seconds.</h1>
        <p className='text-neutral-400 text-lg mt-2'>Turn your ideas into vibrant, high-quality images with AI. Generate, style, and customize artwork instantly—no design skills required.</p>
        <div className='flex justify-center items-center gap-4 mt-7'>
          <input type="text" className='w-3xl h-12 border border-neutral-200 rounded-3xl px-5 outline-none' placeholder='Type your text to image promt ....' />
          <button className='bg-[#333] rounded-3xl flex justify-center items-center px-5 py-2.5 cursor-pointer h-12'><img className='h-6' src="https://img.icons8.com/?size=100&id=60700&format=png&color=ffffff" alt="send-icon" /></button>
        </div>

        {/* gallery */}
        <section id='gallery'>  
            <Gallery/>
        </section>
        <footer>

        </footer>
      </div>
    </div>
  )
}
