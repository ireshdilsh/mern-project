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
                <div className='flex flex-col mt-5 gap-3'>
                    <button className='flex justify-center items-center gap-4 cursor-pointer border border-neutral-300 rounded-3xl w-100 text-neutral-700 py-2.5'><img src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000" alt="google-logo" className='h-7' /> Sign up with Google</button>
                    <button className='flex justify-center items-center gap-4 cursor-pointer border border-neutral-300 rounded-3xl w-100 text-neutral-700 py-2.5'><img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="facebook-logo" className='h-7' /> Sign up with Facebook</button>
                    <button className='flex justify-center items-center gap-4 cursor-pointer border border-neutral-300 rounded-3xl w-100 text-neutral-700 py-2.5'><img src="https://img.icons8.com/?size=100&id=of3VL9FKzJuz&format=png&color=000000" alt="email-logo" className='h-7' /> Sign up with Email</button>
                </div>
            </div>
        </div>
    )
}
