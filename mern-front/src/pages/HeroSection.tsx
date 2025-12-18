import { useState } from "react";
import { useGoogleAuth } from "../hooks/useGoogleAuth";

export default function HeroSection() {
    const [signin, setSignin] = useState(false);
    const [signup, setSignup] = useState(false);
    const { signInWithGoogle, isLoading, error } = useGoogleAuth();

    const openSigninModal = () => {
        setSignin(true);
        setSignup(false);
    };

    const openSignupModal = () => {
        setSignup(true);
    };

    const openModal = () => {
        setSignup(true)
        setSignin(false);
    }

    const closeModals = () => {
        setSignin(false);
        setSignup(false);
    };

    const GoogleButton = () => (
        <>
            <button
                className='w-full border border-neutral-200 rounded-md mt-3 flex justify-center items-center gap-3 py-3 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed hover:bg-neutral-50 transition-all duration-200'
                onClick={signInWithGoogle}
                disabled={isLoading}
            >
                <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="google-icn" className='h-5 w-5' />
                <span className='text-sm font-medium'>{isLoading ? "Loading..." : "Continue with Google"}</span>
            </button>
            {error && <p className='text-sm text-red-600 text-center mt-2'>{error}</p>}
        </>
    );

    return (
        <div id="home" className='px-6 sm:px-12 lg:px-24 py-20 bg-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16'>
                    {/* Left Content */}
                    <div className='flex flex-col gap-8 lg:w-1/2'>
                        <div className='inline-flex items-center gap-2 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-full w-fit'>
                            <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
                            <span className='text-sm font-medium text-neutral-700'>Join 10,000+ Writers Worldwide</span>
                        </div>
                        
                        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-neutral-900'>
                            Turn Your Ideas Into 
                            <span className='block mt-2 text-neutral-700'>Compelling Stories</span>
                        </h1>
                        
                        <p className='text-lg sm:text-lg text-neutral-600 leading-relaxed'>
                            A modern platform built for creators who want to write, publish, and grow their audience. No complexity, just pure creativity.
                        </p>
                        
                        <div className='flex flex-col sm:flex-row gap-4 mt-4'>
                            <button 
                                onClick={openSignupModal} 
                                className='px-8 py-4 bg-black text-white text-base font-semibold rounded-lg hover:bg-neutral-800 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl'
                            >
                                Start Writing for Free
                            </button>
                            <button 
                                onClick={openSigninModal} 
                                className='px-8 py-4 bg-white text-neutral-900 text-base font-semibold border-2 border-neutral-200 rounded-lg hover:border-neutral-300 hover:shadow-md transition-all duration-200 cursor-pointer'
                            >
                                Explore Platform
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className='flex items-center gap-8 pt-6 border-t border-neutral-200'>
                            <div className='flex flex-col'>
                                <span className='text-2xl font-bold text-neutral-900'>500K+</span>
                                <span className='text-sm text-neutral-600'>Articles Published</span>
                            </div>
                            <div className='w-px h-12 bg-neutral-200'></div>
                            <div className='flex flex-col'>
                                <span className='text-2xl font-bold text-neutral-900'>2M+</span>
                                <span className='text-sm text-neutral-600'>Monthly Readers</span>
                            </div>
                            <div className='w-px h-12 bg-neutral-200'></div>
                            <div className='flex flex-col'>
                                <span className='text-2xl font-bold text-neutral-900'>98%</span>
                                <span className='text-sm text-neutral-600'>Satisfaction</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Visual Element */}
                    <div className='lg:w-1/2 w-full'>
                        <div className='relative'>
                            {/* Main Image */}
                            <div className='rounded-2xl overflow-hidden shadow-2xl border border-neutral-200'>
                                <img 
                                    src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80' 
                                    alt='Person writing on laptop' 
                                    className='w-full h-auto object-cover'
                                />
                            </div>
                            
                            {/* Floating Stats */}
                            <div className='absolute -top-4 -right-4 bg-white border border-neutral-200 rounded-xl p-4 shadow-lg'>
                                <div className='flex items-center gap-2'>
                                    <div className='text-2xl'>📈</div>
                                    <div>
                                        <div className='text-xs text-neutral-500'>Views</div>
                                        <div className='text-lg font-bold'>12.5K</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='absolute -bottom-4 -left-4 bg-white border border-neutral-200 rounded-xl p-4 shadow-lg'>
                                <div className='flex items-center gap-2'>
                                    <div className='text-2xl'>✨</div>
                                    <div>
                                        <div className='text-xs text-neutral-500'>Engagement</div>
                                        <div className='text-lg font-bold'>95%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Signup Modal */}
            {signup && (
                <div className='fixed inset-0 flex justify-center items-center bg-[rgb(0,0,0,0.5)] bg-opacity-50 backdrop-blur-sm z-50 px-4'>
                    <div className='bg-white w-full max-w-md rounded-2xl shadow-2xl relative p-8 sm:p-10'>
                        <button 
                            onClick={closeModals}
                            className='absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer'
                        >
                            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </button>
                        
                        <div className='flex flex-col gap-6'>
                            <div className='text-center'>
                                <h1 className='text-3xl font-bold tracking-tight text-neutral-900'>Create Account</h1>
                                <p className='text-neutral-600 text-sm mt-2'>Start your writing journey today</p>
                            </div>
                            
                            <div className='flex flex-col gap-4 pb-6 border-b border-neutral-200'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="fullname" className='text-sm font-medium text-neutral-700'>Full Name</label>
                                    <input 
                                        type="text" 
                                        id="fullname"
                                        placeholder='John Doe' 
                                        className='border border-neutral-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all cursor-text' 
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="email" className='text-sm font-medium text-neutral-700'>Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        placeholder='you@example.com' 
                                        className='border border-neutral-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all cursor-text' 
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="password" className='text-sm font-medium text-neutral-700'>Password</label>
                                    <input 
                                        type="password" 
                                        id="password"
                                        placeholder='••••••••' 
                                        className='border border-neutral-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all cursor-text' 
                                    />
                                </div>
                                <button className='bg-black text-white w-full cursor-pointer py-3 rounded-lg hover:bg-neutral-800 transition-all duration-200 font-semibold mt-2'>
                                    Create Account
                                </button>
                            </div>
                            
                            <div className='text-center'>
                                <p className='text-xs text-neutral-500 mb-3'>Or continue with</p>
                                <GoogleButton />
                            </div>
                            
                            <p className='text-center text-sm text-neutral-600'>
                                Already have an account? 
                                <button onClick={openSigninModal} className='ml-1 font-semibold text-black hover:underline cursor-pointer'>
                                    Sign In
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Signin Modal */}
            {signin && (
                <div className='fixed inset-0 flex justify-center items-center bg-[rgb(0,0,0,0.5)] bg-opacity-50 backdrop-blur-sm z-50 px-4'>
                    <div className='bg-white w-full max-w-md rounded-2xl shadow-2xl relative p-8 sm:p-10'>
                        <button 
                            onClick={closeModals}
                            className='absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer'
                        >
                            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </button>
                        
                        <div className='flex flex-col gap-6'>
                            <div className='text-center'>
                                <h1 className='text-3xl font-bold tracking-tight text-neutral-900'>Welcome Back</h1>
                                <p className='text-neutral-600 text-sm mt-2'>Sign in to continue your journey</p>
                            </div>
                            
                            <div className='flex flex-col gap-4 pb-6 border-b border-neutral-200'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="signin-email" className='text-sm font-medium text-neutral-700'>Email Address</label>
                                    <input 
                                        type="email" 
                                        id="signin-email"
                                        placeholder='you@example.com' 
                                        className='border border-neutral-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all cursor-text' 
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex justify-between items-center'>
                                        <label htmlFor="signin-password" className='text-sm font-medium text-neutral-700'>Password</label>
                                        <a href="#" className='text-xs text-neutral-600 hover:text-black cursor-pointer'>Forgot?</a>
                                    </div>
                                    <input 
                                        type="password" 
                                        id="signin-password"
                                        placeholder='••••••••' 
                                        className='border border-neutral-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all cursor-text' 
                                    />
                                </div>
                                <button className='bg-black text-white w-full cursor-pointer py-3 rounded-lg hover:bg-neutral-800 transition-all duration-200 font-semibold mt-2'>
                                    Sign In
                                </button>
                            </div>
                            
                            <div className='text-center'>
                                <p className='text-xs text-neutral-500 mb-3'>Or continue with</p>
                                <GoogleButton />
                            </div>
                            
                            <p className='text-center text-sm text-neutral-600'>
                                Don't have an account? 
                                <button onClick={openModal} className='ml-1 font-semibold text-black hover:underline cursor-pointer'>
                                    Sign Up
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
