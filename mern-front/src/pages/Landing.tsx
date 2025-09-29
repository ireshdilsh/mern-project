import React from 'react'

export default function Landing() {
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-gray-100 gap-24'>
            <div className=''>
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
