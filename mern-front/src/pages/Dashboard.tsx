import React from 'react'
import Navbar from '../component/Navbar'
import '../styles/dashboard.css'

export default function Dashboard() {
  return (
    <div className='flex justify-center items-left flex-col w-full' id='dashboard-page'>
      <Navbar />
      <div className='flex justify-start items-start flex-col w-full'>
            <h1 className='text-4xl tracking-tighter pl-50 pt-15'>Dashboard</h1>
        </div>
    </div>
  )
}
