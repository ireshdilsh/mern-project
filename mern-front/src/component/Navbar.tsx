import React from 'react'
import logo from '../assets/logo.png'
import '../styles/navbar.css'
import { useNavigate, type NavigateFunction } from 'react-router-dom'

export default function Navbar() {

    const navigate : NavigateFunction = useNavigate()

    const gotoWritePage = ():void => {
        navigate('/write/page/')
    }

    const gotoNotificationsPage = ():void => {
        navigate('/notification/page')
    }

    return (
        <div className='flex justify-center items-center flex-col w-full' id='navbar-page'>
            <nav className='flex justify-between items-center w-full px-50 border-b border-b-neutral-100 py-1'>
                <div className='flex justify-center items-center gap-8'>
                    <img src={logo} alt="navbar-logo" className='h-12' />
                    <div className='flex justify-center items-center relative'>
                        <img src="https://img.icons8.com/?size=100&id=59878&format=png&color=a3a3a3" alt="search-icon" className='h-6 absolute right-6 cursor-pointer' />
                        <input type="text" placeholder='Search here ...' className='bg-neutral-100 h-11 w-85 rounded-4xl px-5 outline-none pr-15' />
                    </div>
                </div>
                <div className='flex justify-center items-center gap-8'>
                    <div onClick={gotoWritePage} className='flex justify-center items-center gap-2 cursor-pointer'>
                        <img src="https://img.icons8.com/?size=100&id=kZ0eCZEs0tfC&format=png&color=000000" alt="" className='h-5'/>
                        <p className='text-sm'>Write</p>
                    </div>
                    <img onClick={gotoNotificationsPage} src="https://img.icons8.com/?size=100&id=62atSgaif9UE&format=png&color=000000" className='h-5 cursor-pointer' alt="" />
                    <div className='flex justify-center items-center rounded-full h-12 w-12 bg-neutral-300 cursor-pointer'>
                        <p className='text-base font-medium'>ID</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}