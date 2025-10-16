import React from 'react'
import logo from '../assets/logo.png'
import '../styles/register.css'

export default function Register() {
    return (
        <div className='flex justify-center items-center' id='register-page'>
            <div className='flex justify-center items-center flex-col mt-20 w-150'>
                <img src={logo} className='h-20' alt="" />
                <h1 className='text-4xl font-medium tracking-tighter mt-10'>Create <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent'>Your DevForum </span> Account</h1>
                <p className='text-neutral-500 mt-2.5 text-center'>Join DevForum to share your programming insights, connect with IT professionals, and grow within a developer-driven community.</p>
            </div>
        </div>
    )
}
