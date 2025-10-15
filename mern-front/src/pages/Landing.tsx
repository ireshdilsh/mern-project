import React from 'react'
import logo from '../assets/logo.png'
import '../styles/landing.css'
export default function Landing() {
  return (
    <div id='landing-page' className='flex justify-center items-center flex-col '>
      <nav className='flex justify-between items-center w-full mt-4'>
        <img src={logo} alt="logo" className='h-18 ml-50'/>
        <div className='flex justify-center items-center gap-4 mr-50'>
          <a className='font-normal ' href="http://">Home</a>
          <a className='font-normal' href="http://">Topics</a>
          <a className='font-normal' href="http://">Trending</a>
          <a className='font-normal' href="http://">Publih</a>
          <a className='font-normal' href="http://">Community</a>
          <a className='font-normal' href="http://">Resources</a>
          <a className='font-normal' href="http://">About</a>
        </div>
      </nav>

      <section className='flex justify-center items-center flex-col mt-30 px-50'>
        <h1 className='text-7xl font-medium tracking-tighter leading-20 text-center'>Empowering <span>Developers to Share, Learn,</span> and Innovate.</h1>
        <p className=' text-neutral-500 text-center text-lg mt-4'>DevForum is a dedicated space for programmers and IT professionals to publish ideas, explore the latest tech trends, and connect with a global community of passionate developers. Share your knowledge, inspire others, and grow together in the ever-evolving world of technology.</p>
        <div className='flex justify-center items-center gap-8 mt-8'>
          <button className='bg-black text-xl text-white border-none rounded-4xl cursor-pointer px-10 py-3 font-medium w-52'>Join Now</button>
          <button className='cursor-pointer text-xl font-normal'>Start Reading</button>
        </div>
      </section>
    </div>
  )
}
