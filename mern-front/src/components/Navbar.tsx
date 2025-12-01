import React, { useState } from 'react'
import logo from '../assets/logo.png'
import login from '../assets/login.jpeg'
import signup from '../assets/signup.jpeg'
import '../styles/landing.css'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [signInModal, setsignInModal] = useState(false);
    const [signUpModal, setsignUpModal] = useState(false);
    const [signinEmail, setsigninEmail] = useState(false);
    const [signupEmail, setsignupEmail] = useState(false);

    const openSigninModal = () => {
        setsignInModal(true)
    }

    const openSignupModal = () => {
        setsignUpModal(true)
    }

    const switchSigninToSignup = () => {
        setsignInModal(false);
        setsignUpModal(true);
    }

    const switchSignupToSignin = () => {
        setsignUpModal(false);
        setsignInModal(true);
    }

    const gotoSigninEmailModal = () => {
        setsignInModal(false)
        setsigninEmail(true)
    }

    const gotoSignupEmail = () => {
        setsignUpModal(false)
        setsignupEmail(true)
    }

    const closeSigninModal = () => {
        setsignInModal(false)
    }

    const closeSignupModal = () => {
        setsignUpModal(false)
    }

    return (
        <div>
            <nav className='mt-5 flex justify-between items-center px-35'>
                <img src={logo} alt="ai-logo" className='h-8' />
                <div className="flex justify-center items-center gap-4">
                    <a href="">Home</a>
                    <Link to="/how/it/works">How it Works</Link>
                    <a href="">Gallery</a>
                    <a href="">Terms & Conditions</a>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <button onClick={openSigninModal} className='font-medium cursor-pointer hover:bg-neutral-100 px-3.5 py-2 rounded-3xl'>Sign in</button>
                    <button onClick={openSignupModal} className='font-medium cursor-pointer bg-[#333] text-sm text-white px-3.5 py-2 rounded-3xl hover:opacity-80'>Sign up</button>
                </div>
            </nav>

            {/* Sign in Modal */}
            {signInModal && (
                <div className='flex justify-center items-center flex-col w-full h-full absolute left-0 top-0' id='modal-overlay'>
                    <div className='bg-white  rounded-md flex justify-between items-center h-126 relative'>
                        <img src="https://img.icons8.com/?size=100&id=83149&format=png&color=000000" className='absolute right-5 cursor-pointer top-5 h-5' alt="close-icn" onClick={closeSigninModal} />
                        <div className='flex flex-col p-10 '>
                            <img src={logo} className='w-30 mb-4' alt="" />
                            <h1 className='text-2xl font-semibold text-[#333] tracking-tighter'>Sign In to Continue</h1>
                            <p className='mt-3 text-neutral-400 w-96 text-justify text-sm'>Manage your projects, generate thumbnails, and keep your progress synced across devices.</p>
                            <div className='mt-10 flex flex-col gap-2'>
                                <button onClick={gotoSigninEmailModal} className='w-96 border border-neutral-200 py-2.5 rounded-3xl flex justify-center items-center gap-6 cursor-pointer font-medium'><img src="https://img.icons8.com/?size=100&id=85500&format=png&color=333333" alt="" className='h-5.5' />Continue With Email</button>
                                <button className='w-96 border border-neutral-200 py-2.5 rounded-3xl flex justify-center items-center gap-6 cursor-pointer font-medium'><img src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000" alt="" className='h-5.5' />Continue With Google</button>
                            </div>
                            <div className='mt-6 flex w-96 justify-between items-center'>
                                <p>If you haven't an account ?</p>
                                <button className='text-blue-600 text-sm cursor-pointer font-medium' onClick={switchSigninToSignup}>Signup here</button>
                            </div>
                            <p className='text-sm w-96 text-neutral-400 mt-8 text-center'>By continuing, you confirm that you have read and agree to our Terms and Privacy Policy.</p>
                        </div>
                        <div className='h-full'>
                            <img id='signin-img' src={login} alt="" className='overflow-hidden w-130 h-full' />
                        </div>
                    </div>
                </div>
            )}

            {/* Sign up Modal */}
            {signUpModal && (
                <div className='flex justify-center items-center flex-col w-full h-full absolute left-0 top-0' id='modal-overlay'>
                    <div className='bg-white  rounded-md flex justify-between items-center h-126 relative'>
                        <img src="https://img.icons8.com/?size=100&id=83149&format=png&color=000000" className='absolute right-5 cursor-pointer top-5 h-5' alt="close-icn" onClick={closeSignupModal} />
                        <div className='flex flex-col p-10 '>
                            <img src={logo} className='w-30 mb-4' alt="" />
                            <h1 className='text-2xl font-semibold text-[#333] tracking-tighter'>Start Creating in Seconds</h1>
                            <p className='mt-3 text-neutral-400 w-96 text-justify text-sm'>Register to unlock smart templates, AI-powered designs, and unlimited creativity.</p>
                            <div className='mt-10 flex flex-col gap-2'>
                                <button onClick={gotoSignupEmail} className='w-96 border border-neutral-200 py-2.5 rounded-3xl flex justify-center items-center gap-6 cursor-pointer font-medium'><img src="https://img.icons8.com/?size=100&id=85500&format=png&color=333333" alt="" className='h-5.5' />Continue With Email</button>
                                <button className='w-96 border border-neutral-200 py-2.5 rounded-3xl flex justify-center items-center gap-6 cursor-pointer font-medium'><img src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000" alt="" className='h-5.5' />Continue With Google</button>
                            </div>
                            <div className='mt-6 flex w-96 justify-between items-center'>
                                <p>If you have an account ?</p>
                                <button className='text-blue-600 text-sm cursor-pointer font-medium' onClick={switchSignupToSignin}>Signin here</button>
                            </div>
                            <p className='text-sm w-96 text-neutral-400 mt-8 text-center'>By continuing, you confirm that you have read and agree to our Terms and Privacy Policy.</p>
                        </div>
                        <div className='h-full'>
                            <img id='signin-img' src={signup} alt="" className='overflow-hidden w-130 h-full' />
                        </div>
                    </div>
                </div>
            )}

            {/* Signin With Email */}
            {signinEmail && (
                <div className='flex justify-center items-center flex-col w-full h-full absolute left-0 top-0' id='modal-overlay'>
                    <div className='bg-white  rounded-md flex justify-between items-center h-126 relative'>
                        <img src="https://img.icons8.com/?size=100&id=83149&format=png&color=000000" className='absolute right-5 cursor-pointer top-5 h-5' alt="close-icn" onClick={() => { setsigninEmail(false) }} />
                        <div className='flex flex-col p-10 '>
                            <img src={logo} className='w-30 mb-4' alt="" />
                            <h1 className='text-2xl font-semibold text-[#333] tracking-tighter'>Sign In to Continue</h1>
                            <p className='mt-3 text-neutral-400 w-96 text-justify text-sm'>Manage your projects, generate thumbnails, and keep your progress synced across devices.</p>
                            <div className='mt-5 flex flex-col gap-2'>
                                <input type="text" placeholder='Email Address' className='h-11 px-5 border border-neutral-200 rounded-3xl outline-none' />
                                <input type="password" placeholder='Password' className='h-11 px-5 border border-neutral-200 rounded-3xl outline-none' />
                                <button className='bg-[#333] text-white font-medium cursor-pointer h-11 rounded-3xl mt-2'>Authorize Now</button>
                            </div>
                            <div className='mt-6 flex w-96 justify-between items-center'>
                                <p>If you haven't an account ?</p>
                                <button className='text-blue-600 text-sm cursor-pointer font-medium' onClick={() => { setsigninEmail(false); setsignUpModal(true) }}>Signup here</button>
                            </div>
                            <p className='text-sm w-96 text-neutral-400 mt-8 text-center'>By continuing, you confirm that you have read and agree to our Terms and Privacy Policy.</p>
                        </div>
                        <div className='h-full'>
                            <img id='signin-img' src={login} alt="" className='overflow-hidden w-130 h-full' />
                        </div>
                    </div>
                </div>
            )}

            {/* Signup with email */}
              {signupEmail && (
                <div className='flex justify-center items-center flex-col w-full h-full absolute left-0 top-0' id='modal-overlay'>
                    <div className='bg-white  rounded-md flex justify-between items-center h-126 relative'>
                        <img src="https://img.icons8.com/?size=100&id=83149&format=png&color=000000" className='absolute right-5 cursor-pointer top-5 h-5' alt="close-icn" onClick={() => { setsignupEmail(false) }} />
                        <div className='flex flex-col p-10 '>
                            <img src={logo} className='w-30 mb-4' alt="" />
                            <h1 className='text-2xl font-semibold text-[#333] tracking-tighter'>Sign In to Continue</h1>
                            <p className='mt-3 text-neutral-400 w-96 text-justify text-sm'>Manage your projects, generate thumbnails, and keep your progress synced across devices.</p>
                            <div className='mt-5 flex flex-col gap-2'>
                                <input type="text" placeholder='Email Address' className='h-11 px-5 border border-neutral-200 rounded-3xl outline-none' />
                                <input type="password" placeholder='Create Password' className='h-11 px-5 border border-neutral-200 rounded-3xl outline-none' />
                                <input type="password" placeholder='Confirm Password' className='h-11 px-5 border border-neutral-200 rounded-3xl outline-none' />
                                <button className='bg-[#333] text-white font-medium cursor-pointer h-11 rounded-3xl mt-2'>Create Account</button>
                            </div>
                            <div className='mt-6 flex w-96 justify-between items-center'>
                                <p>If you have an account ?</p>
                                <button className='text-blue-600 text-sm cursor-pointer font-medium' onClick={() => { setsignupEmail(false); setsignInModal(true) }}>Signin here</button>
                            </div>
                            <p className='text-sm w-96 text-neutral-400 mt-8 text-center'>By continuing, you confirm that you have read and agree to our Terms and Privacy Policy.</p>
                        </div>
                        <div className='h-full'>
                            <img id='signin-img' src={signup} alt="" className='overflow-hidden w-130 h-full' />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
