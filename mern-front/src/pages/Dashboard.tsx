import React from 'react'
import logo from '../assets/CTRMaker__1_-removebg-preview.png'

export default function Dashboard() {
  return (
    <div>
      <div className='flex h-full w-full'>
        <div className='w-90 border-r border-r-neutral-200 pl-10 pt-10' id='side-bar'>
          <img src={logo} alt="logo" className='h-8' />
          <div className='mt-10 flex flex-col gap-4 justify-start items-start'>
       
            <button className='font-semibold text-sm cursor-pointer flex items-center gap-2'>
              <img src="https://img.icons8.com/?size=100&id=CoTsnH1VAqb5&format=png&color=000000" className='h-5' alt="" />
              New Chat</button>

            <button className='font-semibold text-sm cursor-pointer flex items-center gap-2'>
              <img src="https://img.icons8.com/?size=100&id=vqQ97GqpyxGZ&format=png&color=000000" className='h-5' alt="" />
              Search Chat</button>
       
            <button className='font-semibold text-sm cursor-pointer flex items-center gap-2'>
              <img src="https://img.icons8.com/?size=100&id=1OPNhLODh78Q&format=png&color=000000" className='h-5' alt="" />
              Library</button>
          </div>
          <div className='mt-25'>
            <p className='font-semibold text-neutral-600'>Your Chats</p>
            <div className='mt-8'>
              {/* chat history */}

            </div>
          </div>
        </div>
        <div className='w-full pt-10 h-full px-10' id='img-generate-body'>
          <h1 className='text-lg font-semibold'>stability.ai</h1>
          <div>
            <h1 className='text-3xl text-neutral-400 text-center mt-65'>Ask anything</h1>
          </div>
          <div className='mt-55 flex justify-center items-center'>
            <input type="text" className='bg-neutral-50 rounded-3xl w-180 h-13 outline-none px-5'/>
          </div>
          <p className='text-sm font-medium text-neutral-600 text-center mt-2.5'>stability.ai can make mistakes. Check important info.</p>
        </div>
      </div>
    </div>
  )
}
