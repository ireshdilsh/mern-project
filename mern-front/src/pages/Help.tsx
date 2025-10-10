import React, { useState } from 'react'
import logo from '../assets/white-logo.png'
import { Link, useNavigate, type NavigateFunction } from 'react-router-dom'

export default function Help() {

    const navigate: NavigateFunction = useNavigate()

    const [openContactModal, setOpenContactModal] = useState<boolean>(false)

    return (
        <div className='flex flex-col justify-center items-center'>
            <nav className='flex justify-between items-center w-full p-4 pl-40 pr-40 bg-black z-10 '>
                <img onClick={() => { navigate('/') }} src={logo} className='h-12 cursor-pointer' alt="" />
                <div className='flex justify-center items-center gap-3.5'>
                    <Link to='/' className='text-white text-sm'>Back to currents.</Link>
                    <button className='text-white border text-sm border-white rounded-3xl px-4 py-2 cursor-pointer' onClick={() => { setOpenContactModal(true) }}>Submit a request</button>
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

            {openContactModal && (
                <div>
                    <div className='fixed top-0 left-0 w-full h-full bg-black opacity-40 z-20'></div>
                    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg z-30 max-h-screen overflow-y-auto' style={{width: '600px', maxHeight: '90vh'}}>
                        
                        <div className='mt-4 mb-6'>
                            <h2 className='text-2xl font-bold text-gray-800 mb-2'>Submit a Request</h2>
                            <p className='text-gray-600 text-sm'>Fill out the form below and we'll get back to you as soon as possible.</p>
                        </div>

                        <form className='space-y-5'>
                            {/* Name Field */}
                            <div>
                                <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                                    Full Name <span className='text-red-500'>*</span>
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    required
                                    className='outline-none w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all'
                                    placeholder='Enter your full name'
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                                    Email Address <span className='text-red-500'>*</span>
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    required
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all'
                                    placeholder='Enter your email address'
                                />
                            </div>

                            {/* Subject Field */}
                            <div>
                                <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-2'>
                                    Subject <span className='text-red-500'>*</span>
                                </label>
                                <select
                                    id='subject'
                                    required
                                    className='cursor-pointer w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all bg-white'
                                >
                                    <option value=''>Select a subject</option>
                                    <option value='account'>Account Issues</option>
                                    <option value='technical'>Technical Support</option>
                                    <option value='billing'>Billing & Payment</option>
                                    <option value='content'>Content & Publishing</option>
                                    <option value='privacy'>Privacy & Security</option>
                                    <option value='feature'>Feature Request</option>
                                    <option value='other'>Other</option>
                                </select>
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                                    Message <span className='text-red-500'>*</span>
                                </label>
                                <textarea
                                    id='message'
                                    required
                                    rows={5}
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-vertical'
                                    placeholder='Please describe your issue or question in detail...'
                                ></textarea>
                            </div>

                            {/* Action Buttons */}
                            <div className='flex gap-4 pt-4'>
                                <button
                                    type='button'
                                    onClick={() => setOpenContactModal(false)}
                                    className='cursor-pointer flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium'
                                >
                                    Cancel
                                </button>
                                <button
                                    type='submit'
                                    className='cursor-pointer flex-1 px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-900 transition-colors font-medium'
                                >
                                    Submit Request
                                </button>
                            </div>
                        </form>

                        {/* Footer Note */}
                        <div className='mt-6 pt-4 border-t border-gray-200'>
                            <p className='text-xs text-gray-500 text-center'>
                                By submitting this form, you agree to our Terms of Service and Privacy Policy. 
                                We typically respond within 24 hours during business days.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
