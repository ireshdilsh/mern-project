import React from 'react'
import logo from '../assets/logo.png'

export default function Landing() {

    return (
        <div id='main-page' className='min-h-screen bg-gray-100'>

            <nav className='flex items-center justify-between pl-36 pr-36 pt-8 pb-4'>
                <img src={logo} alt="" className='h-16' />
                <div className='flex gap-6'>
                    <a href="#features" className=''>Home</a>
                    <a href="#features" className=''>Features</a>
                    <a href="#features" className=''>About</a>
                    <a href="#features" className=''>Topics</a>
                    <a href="#features" className=''>Pricing</a>
                    <a href="#features" className=''>Write</a>
                    <a href="#features" className=''>Get In Touch</a>
                </div>
            </nav>

            <div id="hero-section" className='flex justify-between items-center mt-5 pt-12 pb-12 pl-36 pr-36'>
                <div className="flex flex-col items-start justify-left mt-6">
                    <h1 className='text-5xl font-bold mb-4 leading-16'>Weave your thoughts,<br /> frame your story.</h1>
                    <p className='text-base text-gray-600'>Loom & Lens features in-depth writing and personal essays that explore ideas, <br /> culture, and creativity. Join a community of curious minds.</p>
                    <div className='flex gap-2 mt-7'>
                        <button className='bg-indigo-500 text-white px-8 py-2 cursor-pointer rounded-4xl text-base '>Publish Your Story</button>
                        <button className='px-8 font-medium py-2 cursor-pointer rounded-4xl text-base '>Join Now</button>
                    </div>
                </div>
                <div className='flex content-center items-center relative'>
                    <span className='text-9xl font-extrabold absolute text-gray-300 right-96 bottom-2'>C</span>
                    <span className='text-9xl font-extrabold absolute text-gray-300 right-60'>u</span>
                    <span className='text-9xl font-extrabold absolute text-gray-300 right-96 top-8'>r</span>
                    <span className='text-9xl font-extrabold absolute text-gray-300 right-40 top-20'>r</span>
                    <span className='text-9xl font-extrabold absolute text-gray-300 right-18 top-8'>e</span>
                    <span className='text-9xl font-extrabold absolute text-gray-300 right-0 bottom-2'>n</span>
                    <span className='text-9xl font-extrabold absolute text-gray-300 right-46 bottom-8'>t</span>
                    <span className='text-9xl font-extrabold absolute text-gray-300 top-8 right-66'>s</span>
                </div>
            </div>
        </div>
    )
}
