import React from 'react'
import logo from '../assets/logo.png'
import '../styles/navbar.css'

export default function Navbar() {
    return (
        <div className='flex justify-center items-center w-full' id='navbar-page'>
            <nav className='flex justify-between items-center w-full px-30 border-b border-b-neutral-100 py-1'>
                <div className='flex justify-center items-center gap-12'>
                    <img src={logo} alt="navbar-logo" className='h-16' />
                    <div className='flex justify-center items-center relative'>
                        <img src="https://img.icons8.com/?size=100&id=59878&format=png&color=a3a3a3" alt="search-icon" className='h-6 absolute right-6 cursor-pointer' />
                        <input type="text" placeholder='Search here ...' className='bg-neutral-50 h-11 w-85 rounded-4xl px-5 outline-none pr-15' />
                    </div>
                </div>
               <div className='flex justify-center items-center gap-8'>
                    <div className='flex justify-center items-center gap-2 cursor-pointer'>
                        <img src="https://img.icons8.com/?size=100&id=36929&format=png&color=a3a3a3" alt="" className='h-6'/>
                        <p className='text-neutral-500 text-sm'>Write</p>
                    </div>
                        <img src="https://img.icons8.com/?size=100&id=62atSgaif9UE&format=png&color=a3a3a3" alt="" className='h-5 cursor-pointer'/>
               </div>
            </nav>
        </div>
    )
}
