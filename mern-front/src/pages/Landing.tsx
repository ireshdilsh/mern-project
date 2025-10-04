import React from 'react'
import logo from '../assets/logo.png'

export default function Landing() {

    return (
        <div id='main-page' className='min-h-screen bg-gray-100'>

            <nav className='flex items-center justify-between pl-36 pr-36 pt-8 pb-4'>
                <img src={logo} alt="" className='h-16' />
                <div className='flex gap-6'>
                    <a href="#features" className='text-gray-600'>Home</a>
                    <a href="#features" className='text-gray-600 '>Features</a>
                    <a href="#features" className='text-gray-600 '>About</a>
                    <a href="#features" className='text-gray-600 '>Topics</a>
                    <a href="#features" className='text-gray-600 '>Pricing</a>
                    <a href="#features" className='text-gray-600 '>Write</a>
                </div>
            </nav>

            <div id="hero-section" className='mt-8 flex flex-col items-start justify-left pt-12 pb-12 pl-36 pr-36'>
                <h1 className='text-5xl font-bold mb-4 leading-16'>Weave your thoughts,<br /> frame your story.</h1>
                <p className='text-base text-gray-600'>Loom & Lens features in-depth writing and personal essays that explore ideas, <br /> culture, and creativity. Join a community of curious minds.</p>
                <div className='flex gap-2 mt-7'>
                    <button className='bg-indigo-500 text-white px-8 py-2 rounded cursor-pointer rounded-4xl text-base '>Publish Your Story</button>
                    <button className='px-8 font-medium py-2 rounded cursor-pointer rounded-4xl text-base '>Join Now</button>
                </div>
            </div>
        </div>
    )
}
