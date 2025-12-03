import React from 'react'
import Blocks from './Blocks'
import logo from '../assets/logo.png'

export default function Landing() {
  return (
    <div className='w-full'>
      <Blocks/>

      <div className='flex flex-col justify-center items-center absolute top-0 left-0 w-full px-35'>
        <nav className='flex justify-between items-center w-full mt-1 bg-white py-5'>
            <img src={logo} className='h-8' alt="" />
          <div className='flex justify-center items-center gap-4'>
            
          </div>
        </nav>

      <section className='flex flex-col justify-center items-center gap-5 mt-30 text-[#333]'>
        <h1 className='text-7xl font-semibold bg-white text-center tracking-tighter'>Create Stunning AI Images <br /> in Seconds</h1>
        <p className='text-neutral-400 text-center text-lg bg-white'>Turn your ideas into powerful, photorealistic images instantly. Simply describe what you want, and our AI transforms your <br />
         text into high-quality visuals — fast, accurate, and effortless. Perfect for creators, marketers, designers, and anyone <br />
          who wants studio-grade images with zero design skills.</p>
        <div className='flex justify-center items-center gap-6 mt-2.5'>
          <button className='bg-[#333] text-white font-medium py-2.5 px-5.5 outline-none rounded-md border-none shadow-lg hover:opacity-80 cursor-pointer'>Create Account</button>
          <button className='font-medium py-2.5 px-5.5 outline-none rounded-md cursor-pointer hover:border border-black'>Start Creation</button>
        </div>
      </section>
      </div>

    </div>
  )
}
