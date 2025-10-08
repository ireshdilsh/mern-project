import React, { useState } from 'react'
import logo from '../assets/logo.png'
import '../styles/landing.css'
import { Link } from 'react-router-dom'

export default function Landing() {

    const [openModel, setOpenModel] = useState<boolean>(false)

    return (
        <div id='landing-page' className='flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full p-4 pl-40 pr-40 bg-white z-10 border-b border-black'>
                <img src={logo} alt="" className='h-12' />
                <div id='links' className='flex justify-center items-center gap-6'>
                    <a href="">Our Story</a>
                    <a href="">Membership</a>
                    <a href="#" onClick={() => { setOpenModel(true) }}>Write</a>
                    <a href="#" onClick={() => { setOpenModel(true) }}>Sign in</a>
                    <button className='bg-black text-white  pt-2 pb-2 pl-4.5 pr-4.5 rounded-3xl cursor-pointer'>Get Started</button>
                </div>
            </nav>

            <section id='landing-body' className='mt-10 flex justify-between items-center w-full pl-40 border-b border-black'>
                <div id='left-side' className=''>
                    <h1 className='tracking-tighter leading-30'>Words <br /> Minds & Ideas</h1>
                    <p className='text-xl text-gray-600 mb-8 mt-2'>Create meaningful stories, connect hearts, and share your passion with everyone.</p>
                    <button className='bg-black text-white pt-2.5 pb-2.5 outline-none border-none pl-12 pr-12 rounded-4xl cursor-pointer text-lg font-semibold'>Start reading</button>
                </div>
                <div id='right-side'>
                    <img src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt="" className='scale-120 mr-10 pb-4' />
                </div>
            </section>

            <section id='landing-footer' className='flex justify-center items-center w-full z-0 bg-white'>
                <div className="mt-6 flex gap-5 text-gray-500 z-10 ">
                    <Link to="/home">Help</Link>
                    <Link to="/home">Status</Link>
                    <Link to="/home">About</Link>
                    <Link to="/home">Careers</Link>
                    <Link to="/home">Press</Link>
                    <Link to="/home">Status</Link>
                    <Link to="/home">Privacy</Link>
                    <Link to="/home">Rules</Link>
                    <Link to="/home">Terms</Link>
                </div>
            </section>

            {/* Sign in modal */}
            {openModel && (
                <div>
                    <div className='fixed top-0 left-0 w-full h-full bg-black opacity-40 z-20' onClick={() => setOpenModel(false)}></div>
                    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-sm z-30 flex justify-center items-center flex-col' id='modal-card'>
                        <h1 className='text-3xl'>Welcome back.</h1>
                        <div className="flex flex-col gap-4 mt-8 mb-8">
                            <button className='relative border border-black rounded-4xl pt-2 pb-2 pl-16 pr-16 w-76'><img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" className='absolute left-4 top-1/2 transform -translate-y-1/2 h-6' alt="" />Sign in with Google</button>
                            <button className='relative border border-black rounded-4xl pt-2 pb-2 pl-16 pr-16 w-76'><img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" className='absolute left-4 top-1/2 transform -translate-y-1/2 h-7' alt="" />Sign in with Facebook</button>
                            <button className='relative border border-black rounded-4xl pt-2 pb-2 pl-16 pr-16 w-76'><img src="https://img.icons8.com/?size=100&id=12580&format=png&color=000000" className='absolute left-4 top-1/2 transform -translate-y-1/2 h-5.5' alt="" />Sign in with Email</button>
                        </div>
                        <div id="sign-up" className='flex gap-1 mb-5'>
                            <p>No account?</p>
                            <Link to='' className='hover:underline'>Create one</Link>
                        </div>
                        <div id="help" className='flex gap-1 mb-5'>
                            <p>Forgot email or trouble signing in? </p>
                            <Link to='' className='hover:underline'>Get help</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>


    )
}

// https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png