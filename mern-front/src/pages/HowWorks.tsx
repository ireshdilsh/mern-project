import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function HowWorks() {
    return (
        <div>
            <Navbar/>
           <section className='flex justify-center items-center flex-col px-35 mt-5 py-25' id='work'>
        <h1 className='text-5xl font-medium'>How It Works</h1>
        <p className='text-neutral-500 mt-2 text-base'>Experience the magic of AI-powered photo management in just a few simple steps.</p>
        <div className='flex justify-center items-center mt-10 gap-10'>
          <div className='flex justify-center items-center flex-col gap-4'>
            <div className='h-20 w-20 bg-blue-100 flex justify-center items-center rounded-full'>
              <span className='text-2xl font-semibold text-blue-600'>1</span>
            </div>
            <h2 className='text-xl font-medium'>Upload Your Photos</h2>
            <p className='text-center text-neutral-500'>Easily upload your photos from any device. Our platform supports all major formats and ensures your images are securely stored.</p>
          </div>
          <div className='flex justify-center items-center flex-col gap-4'>
            <div className='h-20 w-20 bg-blue-100 flex justify-center items-center rounded-full'>
              <span className='text-2xl font-semibold text-blue-600'>2</span>
            </div>
            <h2 className='text-xl font-medium'>AI-Powered Organization</h2>
            <p className='text-center text-neutral-500'>Our advanced AI analyzes and categorizes your photos based on content, location, and time, making it easy to find specific memories.</p>
          </div>
          <div className='flex justify-center items-center flex-col gap-4'>
            <div className='h-20 w-20 bg-blue-100 flex justify-center items-center rounded-full'>
              <span className='text-2xl font-semibold text-blue-600'>3</span>
            </div>
            <h2 className='text-xl font-medium'>Create and Share</h2>
            <p className='text-center text-neutral-500'>Easily create albums, slideshows, and share your favorite moments with friends and family directly from the platform.</p>
          </div>
        </div>
        <div className='flex justify-center items-center mt-20 gap-10'>
          <div className='flex justify-center items-center flex-col gap-4'>
            <div className='h-20 w-20 bg-blue-100 flex justify-center items-center rounded-full'>
              <span className='text-2xl font-semibold text-blue-600'>4</span>
            </div>
            <h2 className='text-xl font-medium'>AI-Powered Organization</h2>
            <p className='text-center text-neutral-500'>Our advanced AI analyzes and categorizes your photos based on content, location, and time, making it easy to find specific memories.</p>
          </div>

          <div className='flex justify-center items-center flex-col gap-4'>
            <div className='h-20 w-20 bg-blue-100 flex justify-center items-center rounded-full'>
              <span className='text-2xl font-semibold text-blue-600'>5</span>
            </div>
            <h2 className='text-xl font-medium'>Create and Share</h2>
            <p className='text-center text-neutral-500'>Easily create albums, slideshows, and share your favorite moments with friends and family directly from the platform.</p>
          </div>

          <div className='flex justify-center items-center flex-col gap-4'>
            <div className='h-20 w-20 bg-blue-100 flex justify-center items-center rounded-full'>
              <span className='text-2xl font-semibold text-blue-600'>6</span>
            </div>
            <h2 className='text-xl font-medium'>Create and Share</h2>
            <p className='text-center text-neutral-500'>Easily create albums, slideshows, and share your favorite moments with friends and family directly from the platform.</p>
          </div>
        </div>
      </section>
            <Footer/>
        </div>
    )
}
