import React from 'react'
import logo from '../assets/logo.png'

export default function Landing() {
  return (
    <div>
      <nav className='mt-5 flex justify-between items-center px-35'>
        <img src={logo} alt="ai-logo" className='h-8' />
        <div className="flex">

        </div>
        <div className="flex justify-center items-center gap-2">
          <button className='font-medium cursor-pointer hover:bg-neutral-100 px-3.5 py-2 rounded-3xl'>Sign in</button>
          <button className='font-medium cursor-pointer bg-[#333] text-sm text-white px-3.5 py-2 rounded-3xl hover:opacity-80'>Sign up</button>
        </div>
      </nav>
      <div className='flex flex-col justify-center items-center mt-35 px-35'>
        <h1 className='text-6xl font-semibold tracking-tighter text-[#333] text-center'>Create Viral <span className='bg-clip-text text-transparent bg-gradient-to-r to-blue-600 via-indigo-600 from-pink-600'>YouTube <br /> Thumbnails</span> in Seconds.</h1>
        <p className='text-neutral-400 text-lg mt-2'>Turn ideas into high-impact thumbnails with AI. Generate, style, and optimize your thumbnails instantly—no design skills needed.</p>
        <div className='flex justify-center items-center gap-4 mt-7'>
          <input type="text" className='w-3xl h-12 border border-neutral-200 rounded-3xl px-5 outline-none' placeholder='Type your thumbnail idea…' />
          <button className='bg-[#333] rounded-3xl flex justify-center items-center px-5 py-2.5 cursor-pointer h-12'><img className='h-6' src="https://img.icons8.com/?size=100&id=60700&format=png&color=ffffff" alt="send-icon" /></button>
        </div>
      </div>
    </div>
  )
}
