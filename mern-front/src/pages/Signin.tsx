import React from 'react'
import logo from '../assets/CTRMaker__1_-removebg-preview.png'

export default function Signin() {
    return (
        // Added horizontal padding and adjusted vertical padding for mobile
        <div className='py-10 sm:py-20 px-4 sm:px-6'>
            <div className='flex justify-center items-center flex-col'>
                {/* Logo and Title Section */}
                <div className='flex justify-center items-center gap-4 mb-8'>
                    <img src={logo} className='h-8' alt="logo" />
                    <h1 className='text-xl font-bold'>stability.ai</h1>
                </div>
                <h1 className='text-lg sm:text-2xl font-semibold text-center'>Welcome Back to Your Creative Space</h1>
                <p className='text-neutral-400 text-center mt-1'>Access your account and continue generating stunning AI images instantly.</p>
            </div>

            {/* Form Section - Wrapper for centering and max-width */}
            <div className='flex justify-center items-center'>
                <div className='flex flex-col mt-10 gap-4 w-full max-w-xs sm:max-w-sm'>
                    
                    {/* Email Input */}
                    <div className='flex flex-col'>
                        <label htmlFor="email">Email address</label>
                        {/* Replaced non-standard w-90 with w-full */}
                        <input
                            id="email"
                            type="email"
                            className='border border-gray-300 rounded-md p-2 outline-none w-full'
                        />
                    </div>
                    
                    {/* Password Input */}
                    <div className='flex flex-col'>
                        <label htmlFor="password">Password</label>
                        {/* Replaced non-standard w-90 with w-full, changed type to password */}
                        <input
                            id="password"
                            type="password"
                            className='border border-gray-300 rounded-md p-2 outline-none w-full'
                        />
                    </div>

                    {/* Remember Me / Forgot Password Section */}
                    {/* Used justify-between to push the two elements to the edges, and removed non-standard gap-27 */}
                    <div className='flex justify-between items-center w-full text-sm sm:text-base'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember" className='text-neutral-600 font-semibold'>
                                remember me
                            </label>
                        </div>
                        <p className='text-blue-600 font-semibold hover:underline cursor-pointer underline-offset-4'>
                            forget password?
                        </p>
                    </div>

                    {/* Sign In Button */}
                    {/* Replaced non-standard w-90 with w-full */}
                    <button className='bg-black text-white font-semibold w-full py-2.5 rounded-md cursor-pointer hover:opacity-80 transition duration-150'>
                        Authenticate me
                    </button>
                    
                    <p className='text-center my-1'>or</p>
                    
                    {/* Continue with Google Button */}
                    {/* Replaced non-standard w-90 with w-full */}
                    <button className='flex justify-center items-center gap-4 text-neutral-700 font-semibold w-full py-2.5 rounded-md cursor-pointer border border-neutral-200 hover:bg-neutral-50 transition duration-150'>
                        <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="google-icn" className='h-6'/> continue with google
                    </button>
                </div>
            </div>
        </div>
    )
}