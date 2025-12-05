import React, { useState, useEffect } from 'react'
import Blocks from './Blocks'
import logo from '../assets/logo.png'
import img2 from '../assets/gallery/coding-2.jpg'
import img3 from '../assets/gallery/coding-3.jpg'
import img4 from '../assets/gallery/coding-4.jpg'

export default function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [img2, img3, img4]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className='w-full'>
      <Blocks/>

      <div className='flex flex-col justify-center items-center absolute top-0 left-0 w-full px-35'>
        <nav className='flex justify-between items-center w-full mt-1 bg-white py-5'>
            <img src={logo} className='h-8' alt="" />
          <div className='flex justify-center items-center gap-4'>
            
          </div>
        </nav>

      <section className='flex flex-col justify-center items-center gap-5 mt-15 text-[#333]'>
        <h1 className='text-7xl font-semibold bg-white text-center tracking-tighter'>Create Stunning <span className='bg-clip-text text-transparent bg-gradient-to-l to-blue-600 via-purple-600 from-pink-600'>AI Images</span> in Seconds</h1>
        <p className='text-neutral-400 text-center text-base bg-white'>Turn your ideas into powerful, photorealistic images instantly. Simply describe what you want, and our AI transforms your
         text into high-quality visuals — fast, accurate, and effortless. Perfect for creators, marketers, designers, and anyone
          who wants studio-grade images with zero design skills.</p>
        <div className='flex justify-center items-center gap-4 mt-2.5'>
          <button className='bg-[#333] text-white font-medium py-2.5 px-5.5 outline-none rounded-md border-none shadow-lg hover:opacity-80 cursor-pointer'>Create Account</button>
          <button className='text-[#333] font-medium py-2.5 px-5.5 outline-none rounded-md cursor-pointer hover:border border-black'>Start Creation</button>
        </div>
      </section>
       
      {/* Image Carousel */}
      <div className='relative my-10 w-full max-w-5xl'>
        <div className='overflow-hidden rounded-lg shadow-2xl'>
          <div className='relative h-96'>
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  idx === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className='w-full h-full object-cover'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all backdrop-blur-sm'
          aria-label='Previous slide'
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all backdrop-blur-sm'
          aria-label='Next slide'
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </button>
      </div>
      </div>
    </div>
  )
}
