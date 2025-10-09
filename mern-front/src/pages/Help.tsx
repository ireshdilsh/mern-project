import React from 'react'
import logo from '../assets/white-logo.png'
import { Link, useNavigate, type NavigateFunction } from 'react-router-dom'

export default function Help() {

    const navigate : NavigateFunction = useNavigate()

  return (
    <div className='flex justify-center items-center'>
        <nav className='flex justify-between items-center w-full p-4 pl-40 pr-40 bg-black z-10 '>
            <img onClick={()=>{navigate('/')}} src={logo} className='h-12 cursor-pointer' alt="" />
            <div className='flex justify-center items-center gap-3.5'>
                <Link to='/' className='text-white text-sm'>Back to currents.</Link>
                <button className='text-white border text-sm border-white rounded-3xl px-4 py-2'>Submit a request</button>
            </div>
        </nav>
    </div>
  )
}
