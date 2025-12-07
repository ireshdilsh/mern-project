import React from 'react'
import logo from '../assets/CTRMaker__1_-removebg-preview.png'

export default function Dashboard() {
  return (
    <div>
      <nav className='flex justify-between items-center w-full px-25 py-5 border-b border-b-neutral-100'>
        <div className='flex justify-center items-center gap-2'>
          <img src={logo} alt="logo" className='h-6'/>
          <h1 className='font-semibold text-lg'>stability.ai</h1>
        </div>
        <div className='flex justify-center gap-4'>
          <div className='bg-pink-600 font-bold h-8 w-8 p-5 text-sm rounded-full text-white flex justify-center items-center'>ID</div>
          <div>
            <p className='font-medium'>Iresh Dilshan</p>
            <p className='text-sm text-neutral-500 -mt-1'>ireshdilshan46@gmail.com</p>
          </div>
        </div>
      </nav>
    </div>
  )
}
