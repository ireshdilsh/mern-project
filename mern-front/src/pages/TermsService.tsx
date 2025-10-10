import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link, useNavigate, type NavigateFunction } from 'react-router-dom'
import '../styles/termsandservice.css'

export default function TermsService() {

    const navigate: NavigateFunction = useNavigate()

    const [openModel, setOpenModel] = useState<boolean>(false)
    const [openModelSignUp, setOpenModelSignUp] = useState<boolean>(false)

    return (
        <div className='flex flex-col justify-left items-start '>
            <nav className='pl-40 pr-40 pt-4 pb-4 border-b-3 border-green-500 w-full flex justify-between items-center'>
                <img src={logo} alt="" className='h-12' onClick={() => { navigate('/') }} />
                <div className='flex gap-5 items-center justify-center'>
                    <button onClick={() => { setOpenModel(true) }} className='flex items-center text-sm gap-2 text-gray-500 cursor-pointer'><img src="https://img.icons8.com/?size=100&id=NNvh71bQhaH2&format=png&color=99a1af" alt="" className='h-5' />write</button>
                    <button onClick={() => { setOpenModelSignUp(true) }} className='bg-green-700 text-white text-sm rounded-4xl pl-3 pr-3 pt-1.5 pb-1.5 cursor-pointer'>Sign up</button>
                    <button onClick={() => { setOpenModel(true) }} className='text-gray-500 text-sm cursor-pointer'>Sign in</button>
                </div>
            </nav>

            <h1 className='pl-40 pr-40 border-b border-gray-100 w-full font-medium text-xl pt-3.5 pb-3.5' onClick={() => { navigate('/') }}>currents. policy</h1>

            <div className='pl-40 pr-40 flex justify-center gap-24'>
                <div className='flex flex-col mt-19'>
                    <p className='text-gray-400 font-medium text-sm'>Terms of Service, Rules, and Policies</p>
                </div>
                <div className='flex flex-col w-full'>
                    <h1 className='mt-15 text-5xl font-bold tracking-tighter'>currents. Terms of Service</h1>
                    <p className='text-2xl text-gray-400 mt-2'>Effective: September 1, 2020</p>
                    <p className='text-sm text-gray-400 mt-1.5 border-b border-gray-100 pb-5'>12 min read · Sep 2, 2020</p>
                    <p id='terms-tenses' className='mt-4 text-xl leading-8 '>
                        <span className='italic font-black tracking-tighter'>You can see our previous Terms here.</span> <br />
                        <br />
                        Thanks for using Medium. Our mission is to deepen people’s understanding of the world and spread ideas that matter.
                        <br /><br />
                        These Terms of Service (“Terms”) apply to your access to and use of the websites, mobile applications and other online products and services (collectively, the “Services”) provided <span className='font-black'>by A Medium Corporation (“Medium” or “we”). By clicking your consent (e.g. “Continue,” “Sign-in,” or “Sign-up,”) or by using our Services, you agree to these Terms, including the mandatory arbitration provision and class action waiver in the Resolving Disputes; Binding Arbitration Section.</span>
                        <br /><br />
                        Our Privacy Policy explains how we collect and use your information while our Rules outline your responsibilities when using our Services. By using our Services, you’re agreeing to be bound by these Terms and our Rules. Please see our Privacy Policy for information about how we collect, use, share and otherwise process information about you.
                        <br /><br />
                        If you have any questions about these Terms or our Services, please contact us at legal@medium.com.
                    </p>
                    <p id='title' className='tracking-tighter text-2xl mt-10 font-bold'>Your Account and Responsibilities</p>
                    <p id='terms-tenses' className='mt-4 text-xl leading-8 '>
                        Medium may review your conduct and content for compliance with these Terms and our Rules, and reserves the right to remove any violating content.
                        <br /><br />
                        Medium reserves the right to delete or disable content alleged to be infringing the intellectual property rights of others, and to terminate accounts of repeat infringers. We respond to notices of alleged copyright infringement if they comply with the law; please report such notices using our Copyright Policy.
                    </p>
                </div>
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
