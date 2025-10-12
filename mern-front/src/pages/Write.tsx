import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { useNavigate, type NavigateFunction } from 'react-router-dom'
import '../styles/write.css'

export default function Write() {

  const navigate: NavigateFunction = useNavigate()

  const [dotsModal, setDotsModal] = useState<boolean>(false)

  return (
    <div id='write-page' className='flex justify-left items-start flex-col'>
      <nav className='flex justify-between items-center w-full pl-40 pr-40 pt-4 pb-4'>
        <div className='flex gap-6'>
          <img src={logo} alt="" className='h-11 cursor-pointer' onClick={() => { navigate('/dashboard') }} />
          <p className='text-sm'>Draft in Iresh Dilshan</p>
        </div>
        <div className='flex justify-center items-center gap-6'>
          <button className='bg-green-700 text-white text-sm rounded-4xl pl-2.5 pr-2.5 pt-0.5 pb-0.5 cursor-pointer hover:bg-green-800'>Publish</button>
          <img src="https://img.icons8.com/?size=100&id=36944&format=png&color=99a1af" className='h-5 cursor-pointer' alt="3-dots" onClick={() => { setDotsModal(true) }} />
          <img src="https://img.icons8.com/?size=100&id=eMfeVHKyTnkc&format=png&color=99a1af" className='h-5 cursor-pointer' alt="notification-icon" />
          <div className='bg-pink-600 h-9 w-9 rounded-4xl flex justify-center items-center cursor-pointer'><p className='text-xl text-white font-medium'>I</p></div>
        </div>
      </nav>

      <div className='w-180 flex flex-col justify-left items-start ml-90 mr-100 mt-14 p-5' onClick={() => { setDotsModal(false) }}>
        <input type="text" className='w-190 text-5xl outline-none' placeholder='Title'/>
        <textarea className='text-2xl w-190 outline-none mt-8 h-105' placeholder='Tell your story ...'></textarea>
      </div>

      {dotsModal && (
        <div className='w-60 border border-gray-200 absolute top-18 left-284 rounded-sm bg-white'>
          <div className='h-6 w-6 bg-white border border-gray-200 absolute -top-3 left-28 -z-10 rotate-45'></div>
          <div className='pl-4 pt-2 pb-4 cursor-pointer'>
            <p className='text-sm text-gray-500 mt-2.5 '>Submit to publication</p>
            <p className='text-sm text-gray-500 mt-3'>Share draft links</p>
            <p className='text-sm text-gray-500 mt-3'>Share to X</p>
            <p className='text-sm text-gray-500 mt-3'>Manage unlisted setting</p>
            <p className='text-sm text-gray-500 mt-3'>Change featured image</p>
            <p className='text-sm text-gray-500 mt-3'>Change display title / subtitle</p>
            <p className='text-sm text-gray-500 mt-3 '>Change topics</p>
            <p className='text-sm text-gray-500 mt-3 '>See revision history</p>
            <p className='text-sm text-gray-500 mt-3 '>More settings</p>
            <p className='text-sm text-gray-500 mt-3 '>Hints and keyboard shortcuts</p>
            <p className='text-sm text-gray-500 mt-3 '>More help</p>

          </div>
        </div>
      )}

    </div>
  )
}
