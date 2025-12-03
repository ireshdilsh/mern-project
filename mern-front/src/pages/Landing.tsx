import React from 'react'
import Blocks from './Blocks'
import logo from '../assets/logo.png'

export default function Landing() {
  return (
    <div className='w-full'>
      <Blocks/>

      <div className='flex flex-col justify-center items-center absolute top-0 left-0 w-full px-35'>
        <nav className='flex justify-between items-center w-full mt-1 bg-white py-5'>
            <img src={logo} className='h-8' alt="" />
          <div>
            dfgdfg
          </div>
        </nav>
      </div>

    </div>
  )
}
