import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate, type NavigateFunction } from 'react-router-dom'
export default function Write() {

  const navigate: NavigateFunction = useNavigate()

  return (
    <div className='flex justify-center items-center'>
      <nav className='flex justify-between items-center w-full pl-40 pr-40 pt-4 pb-4 border-b border-gray-200'>
        <div className='flex gap-6'>
          <img src={logo} alt="" className='h-11 cursor-pointer' onClick={() => { navigate('/') }} />
          <p className='text-sm'>Draft in Iresh Dilshan</p>
        </div>
        <div className='flex justify-center items-center gap-6'>
          <button className='bg-green-700 text-white text-sm rounded-4xl pl-3 pr-3 pt-1 pb-1 cursor-pointer'>Publish</button>
          <img src="https://img.icons8.com/?size=100&id=36944&format=png&color=99a1af" className='h-5' alt="" />
          <img src="https://img.icons8.com/?size=100&id=eMfeVHKyTnkc&format=png&color=99a1af" className='h-5' alt="" />
          <div className='bg-pink-600 h-9 w-9 rounded-4xl flex justify-center items-center cursor-pointer'><p className='text-xl text-white font-medium'>I</p></div>
        </div>
      </nav>
    </div>
  )
}
