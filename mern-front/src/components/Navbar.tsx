import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [openSignInModal, setOpenSignInModal] = useState<boolean>(false);
    const [openSignUpModal, setOpenSignUpModal] = useState<boolean>(false);

    const navigateModalSignUp = (): void => {
        setOpenSignInModal(false);
        setOpenSignUpModal(true);
    }

    const navigateModalSignIn = (): void => {
        setOpenSignUpModal(false);
        setOpenSignInModal(true);
    }

    return (
        <div>
            <nav className='flex justify-between items-center w-full px-35 pt-16'>
                <div className="logo">
                    MemoraAI
                </div>
                <div className='flex justify-center items-center gap-6'>
                    <Link to="/">Home</Link>
                    <Link to="/features">Features</Link>
                    <Link to="/how/it/works">How it works</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/about">About</Link>
                    <Link to="/gallery">Gallery</Link>
                    <p className='cursor-pointer' onClick={() => { setOpenSignInModal(true) }}>Sign in</p>
                </div>
            </nav>

            {/* Sign in modal */}
            {openSignInModal && (
                <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center' id='modal-overlay'>
                    <div className='bg-white py-12 px-15 w-120 flex justify-center items-center flex-col rounded-lg'>
                        <img onClick={() => { setOpenSignInModal(false) }} className='h-4 cursor-pointer -mr-100 -mt-6' src="https://img.icons8.com/?size=100&id=88571&format=png&color=000000" alt="close-icn" />
                        <h1 className='text-3xl font-semibold mt-5'>Good to See You Again !</h1>
                        <p className='text-neutral-500 text-center mt-3'>Enter your details to reconnect with your memories and tools instantly.</p>
                        <button className='cursor-pointer mt-7 mb-5 border border-neutral-400 rounded-sm w-full py-2 font-bold text-neutral-700 flex justify-center items-center gap-5'><img className='h-6' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" />Continue with google</button>
                        <div className='flex justify-center items-center gap-4 mt-3.5'>
                            <p className='text-neutral-700'>If you haven't an account ?</p>
                            <p onClick={navigateModalSignUp} className='text-blue-500 cursor-pointer'>Sign up</p>
                        </div>
                        <p className='text-neutral-500 mt-5 text-center' style={{ fontSize: '12px' }}>By clicking "Sign in", you accept Medium's Terms of Service and Privacy Policy.</p>
                    </div>
                </div>
            )}

            {/* Sign up modal */}
            {openSignUpModal && (
                <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center' id='modal-overlay'>
                    <div className='bg-white py-12 px-15 w-120 flex justify-center items-center flex-col rounded-lg'>
                        <img onClick={() => { setOpenSignUpModal(false) }} className='h-4 cursor-pointer -mr-100 -mt-6' src="https://img.icons8.com/?size=100&id=88571&format=png&color=000000" alt="close-icn" />
                        <h1 className='text-3xl font-semibold mt-5'>Start Your Journey !</h1>
                        <p className='text-neutral-500 text-center mt-3'>Sign up in seconds and unlock powerful features to organize your digital life.</p>
                        <button className='cursor-pointer mt-7 mb-5 border border-neutral-400 rounded-sm w-full py-2 font-bold text-neutral-700 flex justify-center items-center gap-5'><img className='h-6' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" />Continue with google</button>
                        <div className='flex justify-center items-center gap-4 mt-3.5'>
                            <p className='text-neutral-700'>If you have an account ?</p>
                            <p onClick={navigateModalSignIn} className='text-blue-500 cursor-pointer'>Sign in</p>
                        </div>
                        <p className='text-neutral-500 mt-5 text-center' style={{ fontSize: '12px' }}>By clicking "Sign up", you accept Medium's Terms of Service and Privacy Policy.</p>
                    </div>
                </div>
            )}
        </div>
    )
}
