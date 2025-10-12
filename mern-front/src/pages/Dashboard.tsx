import React from 'react'
import { useNavigate, type NavigateFunction } from 'react-router-dom'
import logo from '../assets/logo.png'
export default function Dashboard() {

  const navigate: NavigateFunction = useNavigate()

  return (
    <div className='flex flex-col justify-center items-center'>
      <nav className='pl-40 pr-40 pt-4 pb-4 border-b border-gray-200 w-full flex justify-between items-center'>
        <img src={logo} alt="" className='h-9 cursor-pointer' onClick={() => { navigate('/') }} />
        <div className='flex gap-7 items-center justify-center'>
          <button onClick={() => { navigate('/write') }} className='flex items-center gap-2 text-gray-500 cursor-pointer text-sm'><img src="https://img.icons8.com/?size=100&id=NNvh71bQhaH2&format=png&color=99a1af" alt="" className='h-5.5' />Write</button>
          <img src="https://img.icons8.com/?size=100&id=eMfeVHKyTnkc&format=png&color=99a1af" alt="" className='h-5.5 cursor-pointer' />
          <div className='bg-pink-600 h-9 w-9 rounded-4xl flex justify-center items-center cursor-pointer'><p className='text-xl text-white font-medium'>I</p></div>
        </div>
      </nav>

      

    </div>
  )
}
