import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link, useNavigate, type NavigateFunction } from 'react-router-dom'

export default function TermsService() {

    const navigate: NavigateFunction = useNavigate()

    const [openModel, setOpenModel] = useState<boolean>(false)
    const [openModelSignUp, setOpenModelSignUp] = useState<boolean>(false)

    return (
        <div className='flex flex-col justify-left items-start '>
            <nav className='pl-40 pr-40 pt-4 pb-4 border-b-3 border-green-500 w-full flex justify-between items-center'>
                <img src={logo} alt="" className='h-12' onClick={() => { navigate('/') }} />
                <div className='flex gap-5 items-center justify-center'>
                    <button onClick={()=>{setOpenModel(true)}} className='flex items-center text-sm gap-2 text-gray-500 cursor-pointer'><img src="https://img.icons8.com/?size=100&id=NNvh71bQhaH2&format=png&color=99a1af" alt="" className='h-5' />write</button>
                    <button onClick={()=>{setOpenModelSignUp(true)}} className='bg-green-700 text-white text-sm rounded-4xl pl-3 pr-3 pt-1.5 pb-1.5 cursor-pointer'>Sign up</button>
                    <button onClick={()=>{setOpenModel(true)}} className='text-gray-500 text-sm cursor-pointer'>Sign in</button>
                </div>
            </nav>

            <h1 className='pl-40 pr-40 border-b border-gray-100 w-full font-medium text-xl pt-3.5 pb-3.5' onClick={() => { navigate('/') }}>currents. policy</h1>

            <div className='-mt-5 pl-40 pr-40'>
                <h1 className='mt-15 text-5xl font-bold tracking-tighter'>currents. Terms of Service</h1>
                <p className='text-2xl text-gray-400 mt-2'>Effective: September 1, 2020</p>
                <p className='text-sm text-gray-400 mt-1.5'>12 min read · Sep 2, 2020</p>
            </div>

            {/* Sign in modal */}
            {openModel && (
                <div>
                    <div className='fixed top-0 left-0 w-full h-full bg-black opacity-40 z-20'></div>
                    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-sm z-30 flex justify-center items-center flex-col' id='modal-card'>
                        <img src="https://img.icons8.com/?size=100&id=83149&format=png&color=000000" className='h-5 absolute top-6 right-5 cursor-pointer' onClick={() => { setOpenModel(false) }} alt="" />
                        <h1 className='text-3xl'>Welcome back.</h1>
                        <div className="flex flex-col gap-4 mt-8 mb-8">
                            <button className='cursor-pointer relative border border-black rounded-4xl pt-2 pb-2 pl-16 pr-16 w-76'><img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" className='absolute left-4 top-1/2 transform -translate-y-1/2 h-6' alt="" />Sign in with Google</button>
                            <button className='cursor-pointer relative border border-black rounded-4xl pt-2 pb-2 pl-16 pr-16 w-76'><img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" className='absolute left-4 top-1/2 transform -translate-y-1/2 h-7' alt="" />Sign in with Facebook</button>
                            <button className='cursor-pointer relative border border-black rounded-4xl pt-2 pb-2 pl-16 pr-16 w-76'><img src="https://img.icons8.com/?size=100&id=12580&format=png&color=000000" className='absolute left-4 top-1/2 transform -translate-y-1/2 h-5.5' alt="" />Sign in with Email</button>
                        </div>
                        <div id="sign-up" className='flex gap-1 mb-5'>
                            <p>No account?</p>
                            <a href='#' onClick={() => { setOpenModelSignUp(true); setOpenModel(false); }} className='underline underline-offset-4'>Create one</a>
                        </div>
                        <div id="help" className='flex gap-1 mb-5'>
                            <p>Forgot email or trouble signing in? </p>
                            <Link to='/help-center' className='underline underline-offset-4'>Get help</Link>
                        </div>
                        <p id='modal-footer' className='text-gray-500'>By clicking "Sign in", you accept Medium's <Link to='/terms-service' className='underline underline-offset-4'>Terms of Service</Link> and <Link to='' className='underline underline-offset-4'>Privacy Policy</Link>.</p>
                    </div>
                </div>
            )}

            {/* Sign up modal */}
            {openModelSignUp && (
                <div>
                    <div className='fixed top-0 left-0 w-full h-full bg-black opacity-40 z-20'></div>
                    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-sm z-30 flex justify-center items-center flex-col' id='modal-card'>
                        <img src="https://img.icons8.com/?size=100&id=83149&format=png&color=000000" className='h-5 absolute top-6 right-5 cursor-pointer' onClick={() => { setOpenModelSignUp(false) }} alt="" />
                        <h1 className='text-3xl'>Join Medium.</h1>
                        <div className="flex flex-col gap-4 mt-8 mb-8">
                            <button className='cursor-pointer relative border border-black rounded-4xl pt-2 pb-2 pl-16 pr-16 w-76'><img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" className='absolute left-4 top-1/2 transform -translate-y-1/2 h-6' alt="" />Sign up with Google</button>
                            <button className='cursor-pointer relative border border-black rounded-4xl pt-2 pb-2 pl-16 pr-16 w-76'><img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" className='absolute left-4 top-1/2 transform -translate-y-1/2 h-7' alt="" />Sign up with Facebook</button>
                            <button className='cursor-pointer relative border border-black rounded-4xl pt-2 pb-2 pl-16 pr-16 w-76'><img src="https://img.icons8.com/?size=100&id=12580&format=png&color=000000" className='absolute left-4 top-1/2 transform -translate-y-1/2 h-5.5' alt="" />Sign up with Email</button>
                        </div>
                        <div id="sign-up" className='flex gap-1 mb-5'>
                            <p>Already have an account?</p>
                            <a href='#' onClick={() => { setOpenModel(true); setOpenModelSignUp(false) }} className='underline underline-offset-4'>Sign in</a>
                        </div>
                        <p id='modal-footer' className='text-gray-500'>By clicking "Sign up", you accept Medium's <Link to='/terms-service' className='underline underline-offset-4'>Terms of Service</Link> and <Link to='' className='underline underline-offset-4'>Privacy Policy</Link>.</p>
                    </div>
                </div>
            )}
        </div>
    )
}
