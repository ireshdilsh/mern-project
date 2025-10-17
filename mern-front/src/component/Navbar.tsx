import React from 'react'
import logo from '../assets/logo.png'
import '../styles/navbar.css'

export default function Navbar() {
    return (
        <div className='flex justify-center items-center w-full' id='navbar-page'>
            <nav className='flex justify-between items-center w-full px-30'>
                <div className='flex justify-center items-center gap-15'>
                    <img src={logo} alt="navbar-logo" className='h-16' />
                    <div className='flex justify-center items-center relative'>
                        <img src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000" alt="search-icon" className='h-6 absolute right-6 cursor-pointer' />
                        <input type="text" placeholder='Search here ...' className='bg-neutral-50 h-11 w-85 rounded-4xl px-5 outline-none' />
                    </div>
                </div>
               <div className='flex justify-center items-center gap-15'>
                    <div className='flex justify-center items-center gap-5'>
                        <img src="https://img.icons8.com/?size=100&id=36871&format=png&color=000000" alt="" />
                        <p>Write</p>
                    </div>
               </div>
            </nav>
        </div>
    )
}
