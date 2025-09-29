import React from 'react'

export default function Landing() {
    return (
        <div id='main-page' className='min-h-screen bg-gray-100'>
            <div id="hero-section" className='flex flex-col items-start justify-left pt-12 pb-12 pl-36 pr-36'>
                <h1 className='text-5xl font-bold mb-4 leading-16'>Weave your thoughts,<br /> frame your story.</h1>
                <p className='text-base text-gray-500 font-medium'>Loom & Lens features in-depth writing and personal essays that explore ideas, <br /> culture, and creativity. Join a community of curious minds.</p>
                <div className='mt-5 flex gap-2'>
                    <button className='bg-indigo-500 text-white px-4 py-2 rounded cursor-pointer font-medium text-base'>Publish Your Story</button>
                    <button className='bg-gray-300 text-gray-700 px-4 py-2 rounded cursor-pointer font-medium text-base'>Join Now</button>
                </div>
            </div>
        </div>
    )
}
