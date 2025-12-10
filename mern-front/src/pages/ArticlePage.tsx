import React from 'react'
import UserNavbar from '../components/UserNavbar'

export default function ArticlePage() {
  return (
    <div>
      <UserNavbar />
      <div className='flex flex-col justify-center items-center px-40 mt-15 gap-7'>
        <input type="text" placeholder='Title' className='text-5xl w-200 outline-none text-[#333]' id='write-title' />
        <div className='flex gap-4'>
          <button className='h-8'>
            <img src="https://img.icons8.com/?size=100&id=24717&format=png&color=999999" className='h-8 cursor-pointer' alt="" />
          </button>
          <textarea name="" id="" className='text-2xl w-215 h-90 outline-none' placeholder='Tell your story ....'></textarea>
        </div>
      </div>
    </div>
  )
}
