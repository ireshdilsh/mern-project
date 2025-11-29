import React, { useState } from 'react'
import logo from '../assets/logo.png'
import login from '../assets/login.jpeg'
import '../styles/landing.css'

export default function Navbar() {

    const [signInModal, setsignInModal] = useState(false);
    const [signUpModal, setsignUpModal] = useState(false);

    const openSininModal = () => {
        setsignInModal(true)
    }

    const closeSigninModal = () => {
        setsignInModal(false)
    }

    return (
        <div>
            <nav className='mt-5 flex justify-between items-center px-35'>
                <img src={logo} alt="ai-logo" className='h-8' />
                <div className="flex justify-center items-center gap-4">

                </div>
                <div className="flex justify-center items-center gap-2">
                    <button onClick={openSininModal} className='font-medium cursor-pointer hover:bg-neutral-100 px-3.5 py-2 rounded-3xl'>Sign in</button>
                    <button className='font-medium cursor-pointer bg-[#333] text-sm text-white px-3.5 py-2 rounded-3xl hover:opacity-80'>Sign up</button>
                </div>
            </nav>

            {/* Sign in Modal */}
            {signInModal && (
                <div className='flex justify-center items-center flex-col w-full h-full absolute left-0 top-0' id='modal-overlay'>
                    <div className='bg-white  rounded-md flex justify-between items-center h-126 relative'>
                        <img src="https://img.icons8.com/?size=100&id=83149&format=png&color=000000" className='absolute right-5 cursor-pointer top-5 h-5' alt="close-icn" onClick={closeSigninModal}/>
                        <div className='flex flex-col p-10 '>
                            <img src={logo} className='w-30 mb-4' alt="" />
                            <h1 className='text-2xl font-semibold text-[#333] tracking-tighter'>Sign In to Continue</h1>
                            <p className='mt-3 text-neutral-400 w-96 text-justify text-sm'>Manage your projects, generate thumbnails, and keep your progress synced across devices.</p>
                            <div className='mt-10 flex flex-col gap-2'>
                                <button className='w-96 border border-neutral-200 py-2.5 rounded-3xl flex justify-center items-center gap-6 cursor-pointer font-medium'><img src="https://img.icons8.com/?size=100&id=85500&format=png&color=333333" alt="" className='h-5.5'/>Continue With Email</button>
                                <button className='w-96 border border-neutral-200 py-2.5 rounded-3xl flex justify-center items-center gap-6 cursor-pointer font-medium'><img src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000" alt="" className='h-5.5'/>Continue With Google</button>
                            </div>
                            <div className='mt-6 flex w-96 justify-between items-center'>
                                <p>If you haven't an account ?</p>
                                <button className='text-blue-600 text-sm cursor-pointer font-medium'>Signup here</button>
                            </div>
                            <p className='text-sm w-96 text-neutral-400 mt-8 text-center'>By continuing, you confirm that you have read and agree to our Terms and Privacy Policy.</p>
                        </div>
                        <div className='h-full'>
                            <img id='signin-img' src={login} alt="" className='overflow-hidden w-130 h-full'/>
                        </div>
                    </div>
                </div>
            )}


            {/* Sign up Modal */}
        </div>
    )
}
