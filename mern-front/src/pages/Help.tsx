import React from 'react'
import logo from '../assets/white-logo.png'
import { Link, useNavigate, type NavigateFunction } from 'react-router-dom'

export default function Help() {

    const navigate: NavigateFunction = useNavigate()

    return (
        <div className='flex flex-col justify-center items-center'>
            <nav className='flex justify-between items-center w-full p-4 pl-40 pr-40 bg-black z-10 '>
                <img onClick={() => { navigate('/') }} src={logo} className='h-12 cursor-pointer' alt="" />
                <div className='flex justify-center items-center gap-3.5'>
                    <Link to='/' className='text-white text-sm'>Back to currents.</Link>
                    <button className='text-white border text-sm border-white rounded-3xl px-4 py-2'>Submit a request</button>
                </div>
            </nav>

            <div className='flex justify-between items-center w-full pr-40 pl-40 border border-b-gray-300 pb-6 pt-6'>
                <p className='text-gray-500 flex justify-center items-center gap-2.5 cursor-pointer' onClick={() => { navigate('/help-center') }}>currents. Help center <img src="https://img.icons8.com/?size=100&id=61&format=png&color=000000" className='h-4 mt-0.5' alt="" /><span className='text-black'>Submit a request</span></p>
                <input type="text" className='border border-gray-300 rounded-4xl px-5 py-5 w-70 h-12 text-left outline-none' placeholder='Search...' />
            </div>

            <p className="flex justify-center gap-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 mt-8 mr-40 ml-40 ">
                <img src="https://img.icons8.com/?size=100&id=5tH5sHqq0t2q&format=png&color=000000" className='h-6' alt="" />
                Please do not share sensitive personal information in your help requests. If your issue is urgent or involves your account security, contact our support team directly. For common questions, check our Help Center first.
            </p>
            <h1 className='mt-15 text-5xl font-bold tracking-tighter'>How can we help you?</h1>
            {/* has write the help for things */}
        </div>
    )
}
