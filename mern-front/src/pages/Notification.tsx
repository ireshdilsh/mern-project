import React from 'react'
import Navbar from '../component/Navbar'
import '../styles/notification.css'

export default function Notification() {
  return (
    <div className='flex justify-center items-start flex-col' id='notification-page'>
        <Navbar/>
        <div className='flex justify-start items-start flex-col'>
            <h1 className='text-4xl tracking-tighter pl-50 pt-15'>Notification (45)</h1>
        </div>
    </div>
  )
}
