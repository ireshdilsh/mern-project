import React from 'react'
import logo from '../assets/logo.png'
import '../styles/navbar.css'

export default function Navbar() {

    return (
        <div className='flex justify-center items-center flex-col w-full' id='navbar-page'>
            <nav className='flex justify-between items-center w-full px-10 pl-5 border-b border-b-neutral-100 py-1'>
                <div className='flex justify-center items-center gap-8'>
                    <img src={logo} alt="navbar-logo" className='h-12' />
                </div>
                <div className='flex justify-center items-center relative'>
                    <img src="https://img.icons8.com/?size=100&id=59878&format=png&color=a3a3a3" alt="search-icon" className='h-6 absolute right-6 cursor-pointer' />
                    <input type="text" placeholder='Search here ...' className='bg-neutral-50 h-11 w-85 rounded-4xl px-5 outline-none pr-15' />
                </div>
            </nav>
            <div className='flex h-full w-full'>
                <aside className='min-h-screen w-25 flex flex-col justify-start items-center pt-10 border-r border-r-neutral-100 gap-8'>
                    <div className='flex justify-center items-center flex-col cursor-pointer'>
                        <img src="https://img.icons8.com/?size=100&id=1iF9PyJ2Thzo&format=png&color=a3a3a3" className='h-4.5' alt="" />
                        <p className='text-sm text-neutral-500'>Home</p>
                    </div>
                    <div className='flex justify-center items-center flex-col cursor-pointer'>
                        <img src="https://img.icons8.com/?size=100&id=36929&format=png&color=a3a3a3" className='h-5' alt="" />
                        <p className='text-sm text-neutral-500'>Write</p>
                    </div>
                    <div className='flex justify-center items-center flex-col cursor-pointer'>
                        <img src="https://img.icons8.com/?size=100&id=37975&format=png&color=a3a3a3" className='h-4.5' alt="" />
                        <p className='text-sm text-neutral-500'>Favourites</p>
                    </div>
                    <div className='flex justify-center items-center flex-col cursor-pointer'>
                        <img src="https://img.icons8.com/?size=100&id=60787&format=png&color=a3a3a3" className='h-4' alt="" />
                        <p className='text-sm text-neutral-500'>Collection</p>
                    </div>
                    <div className='flex justify-center items-center flex-col cursor-pointer'>
                        <img src="https://img.icons8.com/?size=100&id=2969&format=png&color=a3a3a3" className='h-4.5' alt="" />
                        <p className='text-sm text-neutral-500'>Settings</p>
                    </div>
                    <div className='flex justify-center items-center flex-col cursor-pointer'>
                        <img src="https://img.icons8.com/?size=100&id=8119&format=png&color=a3a3a3" className='h-4 mt-35' alt="" />
                        <p className='text-sm text-neutral-500'>Log out</p>
                    </div>
                </aside>
            </div>
        </div>
    )
}