import React from 'react'
import logo from '../assets/CTRMaker__1_-removebg-preview.png'

export default function Signup() {
  return (
    <div className='py-20'>
      <div className='flex justify-center items-center flex-col'>
        <div className='flex justify-center items-center gap-4 mb-8'>
          <img src={logo} className='h-8' alt="logo" />
          <h1 className='text-xl font-bold'>stability.ai</h1>
        </div>
        <h1 className='text-lg font-semibold'>Create Your Free AI Creativity Account</h1>
        <p className='text-neutral-400 text-center mt-1'>
          Join thousands of creators using AI to turn ideas into powerful visuals. <br /> Start generating images in seconds—completely free.
        </p>
      </div>

      <div className='flex justify-center items-center flex-col mt-10 gap-4'>
        <div className='flex flex-col'>
          <label htmlFor="">Email address</label>
          <input type="text" className='border border-gray-300 rounded-md p-2 outline-none w-90' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="">Password</label>
          <input type="text" className='border border-gray-300 rounded-md p-2 outline-none w-90' />
        </div>
        <div className='flex justify-center items-center gap-27'>
          <div className='flex justify-center items-center gap-2.5'>
            <input type="checkbox" />
            <p className=' text-neutral-600 font-semibold'>remember me</p>
          </div>
          <p className=' text-blue-600 font-semibold hover:underline cursor-pointer underline-offset-4'>forget password?</p>
        </div>
        <button className='bg-black text-white font-semibold w-90 py-2.5 rounded-md cursor-pointer hover:opacity-80'>
          Authenticate me
        </button>
        <p>or</p>
        <button className='flex justify-center items-center gap-4 text-neutral-700 font-semibold w-90 py-2.5 rounded-md cursor-pointer border border-neutral-200'>
          <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="google-icn" className='h-6' /> continue with google
        </button>
      </div>
    </div>
  )
}
