import React, { useState } from 'react'
import logo from '../assets/logo.png'
import '../styles/navbar.css'

export default function Navbar() {

    const [offCanvas, setOffCanvas] = useState<boolean>(false);

    const openCanvas = (): void => {
        setOffCanvas(true)
    }

    return (
        <div className='flex justify-center items-center w-full' id='navbar-page'>
            <nav className='flex justify-between items-center w-full px-30 border-b border-b-neutral-100 py-1'>
                <div className='flex justify-center items-center gap-8'>
                    <img src="https://img.icons8.com/?size=100&id=36389&format=png&color=000000" onClick={openCanvas} alt="menu-icon" className='h-5 cursor-pointer' />
                    <img src={logo} alt="navbar-logo" className='h-16' />
                </div>
                <div className='flex justify-center items-center relative'>
                    <img src="https://img.icons8.com/?size=100&id=59878&format=png&color=a3a3a3" alt="search-icon" className='h-6 absolute right-6 cursor-pointer' />
                    <input type="text" placeholder='Search here ...' className='bg-neutral-50 h-11 w-85 rounded-4xl px-5 outline-none pr-15' />
                </div>
            </nav>


        </div>
    )
}
