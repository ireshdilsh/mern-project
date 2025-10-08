import React, { useState } from 'react'
import logo from '../assets/logo.png'
import '../styles/landing.css'

export default function Landing() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <div id='main-page' className='min-h-screen bg-gray-50'>

            <nav className='pt-3 fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50'>
                <div className='flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-4'>
                    <img src={logo} alt="" className='h-12 md:h-16' />
                    
                    {/* Desktop Navigation */}
                    <div id='links' className='hidden md:flex gap-4 lg:gap-6'>
                        <a href="#home" className='text-sm lg:text-base hover:text-indigo-600 transition-colors'>Home</a>
                        <a href="#features" className='text-sm lg:text-base hover:text-indigo-600 transition-colors'>Features</a>
                        <a href="#topics" className='text-sm lg:text-base hover:text-indigo-600 transition-colors'>Topics</a>
                        <a href="#pricing" className='text-sm lg:text-base hover:text-indigo-600 transition-colors'>Pricing</a>
                        <a href="#write" className='text-sm lg:text-base hover:text-indigo-600 transition-colors'>Write</a>
                        <a href="#about" className='text-sm lg:text-base hover:text-indigo-600 transition-colors'>About</a>
                    </div>
                    
                    {/* Mobile menu button */}
                    <button 
                        className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className='md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40'>
                        <div className='px-4 py-2 space-y-1'>
                            <a 
                                href="#home" 
                                className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </a>
                            <a 
                                href="#features" 
                                className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Features
                            </a>
                            <a 
                                href="#topics" 
                                className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Topics
                            </a>
                            <a 
                                href="#pricing" 
                                className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Pricing
                            </a>
                            <a 
                                href="#write" 
                                className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Write
                            </a>
                            <a 
                                href="#about" 
                                className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            <div id="hero-section" className='flex flex-col lg:flex-row justify-between items-center mt-20 md:mt-24 pt-8 md:pt-12 pb-16 md:pb-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36'>
                <div className="flex flex-col items-start justify-left mt-6 w-full lg:w-1/2">
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight'>
                        Weave your thoughts,frame your story.
                    </h1>
                    <p className='text-sm sm:text-base lg:text-lg text-gray-600 mb-6 lg:mb-0 max-w-lg'>
                        Loom & Lens features in-depth writing and personal essays that explore ideas, culture, and creativity. Join a community of curious minds.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-3 sm:gap-2 mt-7 w-full sm:w-auto'>
                        <button className='bg-indigo-500 text-white px-6 sm:px-8 py-2.5 sm:py-2 cursor-pointer rounded-full text-sm sm:text-base font-medium hover:bg-indigo-600 transition-colors'>
                            Publish Your Story
                        </button>
                        <button className='flex justify-center items-center gap-3.5 px-6 sm:px-8 font-medium py-2.5 sm:py-2 cursor-pointer rounded-full text-sm sm:text-base border border-gray-300 hover:border-indigo-300 transition-colors'>
                            Join Now 
                            <img src="https://img.icons8.com/?size=100&id=39777&format=png&color=000000" alt="right-side-arrow" className='h-4 mt-0.5'/>
                        </button>
                    </div>
                </div>
                <div className='hidden lg:flex content-center items-center relative w-1/2 h-96'>
                    <span id='span-c' className='text-6xl xl:text-9xl font-extrabold absolute text-gray-300 right-96 bottom-2'>C</span>
                    <span id='span-u' className='text-6xl xl:text-9xl font-extrabold absolute text-gray-300 right-60'>U</span>
                    <span id='span-r1' className='text-6xl xl:text-9xl font-extrabold absolute text-gray-300 right-0 top-8'>R</span>
                    <span id='span-r2' className='text-6xl xl:text-9xl font-extrabold absolute text-gray-300 right-40 top-20'>R</span>
                    <span id='span-e' className='text-6xl xl:text-9xl font-extrabold absolute text-gray-300 right-18 bottom-5'>E</span>
                    <span id='span-n' className='text-6xl xl:text-9xl font-extrabold absolute text-gray-300 right-0 bottom-2'>N</span>
                    <span id='span-t' className='text-6xl xl:text-9xl font-extrabold absolute text-gray-300 right-46 bottom-8'>T</span>
                    <span id='span-s' className='text-6xl xl:text-9xl font-extrabold absolute text-gray-300 top-8 right-66'>S</span>
                </div>
            </div>

            <section id='features' className='bg-white flex content-center items-center flex-col mt-6 pt-12 pb-16 md:pb-22 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mt-6 md:mt-10 text-center'>Features that Empower Every Writer</h1>
                <p className='text-center mt-2 text-gray-500 text-sm sm:text-base max-w-3xl'>Discover a suite of tools designed to enhance your writing experience, from intuitive editing to collaborative feedback.</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8 md:mt-12 w-full'>
                    <div id='left-side' className='flex flex-col gap-6 order-2 lg:order-1'>

                        <div className='space-y-2'>
                            <h2 className='text-lg sm:text-xl font-medium'>Smart Writing Editor</h2>
                            <p className='text-gray-500 text-sm sm:text-base leading-relaxed'>Craft your thoughts in a clean, distraction-free space with built-in formatting, markdown support, and real-time saving — so you never lose your flow.</p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-lg sm:text-xl font-medium'>Personalized Profiles</h2>
                            <p className='text-gray-500 text-sm sm:text-base leading-relaxed'>Showcase your personality with customizable author pages, profile images, and bios — turning your readers into loyal followers.</p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-lg sm:text-xl font-medium'>Reader Insights</h2>
                            <p className='text-gray-500 text-sm sm:text-base leading-relaxed'>Track how your stories perform with simple analytics that reveal views, reads, and engagement — helping you grow your audience strategically.</p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-lg sm:text-xl font-medium'>Community Connection</h2>
                            <p className='text-gray-500 text-sm sm:text-base leading-relaxed'>Join a growing network of writers and readers. Comment, follow, and collaborate to make your ideas part of something bigger.</p>
                        </div>

                    </div>
                    <div id='right-side' className='flex items-center justify-center relative order-1 lg:order-2'>
                        <div className='relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto'>
                            {/* Background decoration */}
                            <div className='absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 transform rotate-6 rounded-2xl opacity-20'></div>
                            <div className='absolute inset-0 bg-gradient-to-tl from-blue-400 to-cyan-500 transform -rotate-3 rounded-2xl opacity-15'></div>
                            
                            {/* Main image */}
                            <div className='relative bg-white rounded-xl lg:rounded-2xl shadow-2xl p-3 lg:p-4'>
                                <img 
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                                    alt="Modern writing and analytics dashboard" 
                                    className='rounded-lg lg:rounded-xl w-full h-60 sm:h-72 lg:h-80 object-cover'
                                />
                                
                                {/* Floating feature cards - Hidden on mobile */}
                                <div className='hidden sm:block absolute -top-3 lg:-top-4 -right-3 lg:-right-4 bg-white rounded-lg shadow-lg p-2 lg:p-3 border border-gray-100'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-2 lg:w-3 h-2 lg:h-3 bg-green-500 rounded-full'></div>
                                        <span className='text-xs font-medium text-gray-700'>Live Analytics</span>
                                    </div>
                                </div>
                                
                                <div className='hidden sm:block absolute -bottom-4 lg:-bottom-6 -left-3 lg:-left-4 bg-white rounded-lg shadow-lg p-2 lg:p-3 border border-gray-100'>
                                    <div className='flex items-center gap-2'>
                                        <svg className="w-3 lg:w-4 h-3 lg:h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                        </svg>
                                        <span className='text-xs font-medium text-gray-700'>Smart Editor</span>
                                    </div>
                                </div>
                                
                                <div className='hidden md:block absolute top-1/2 -left-4 lg:-left-6 transform -translate-y-1/2 bg-white rounded-lg shadow-lg p-2 lg:p-3 border border-gray-100'>
                                    <div className='flex items-center gap-2'>
                                        <svg className="w-3 lg:w-4 h-3 lg:h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                        </svg>
                                        <span className='text-xs font-medium text-gray-700'>Community</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='topics' className='flex flex-col content-center items-start mt-6 pt-8 md:pt-12 pb-8 md:pb-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Explore Every Idea</h1>
                <p className='text-gray-500 mt-2 text-sm sm:text-base leading-relaxed max-w-3xl'>
                    From tech and lifestyle to culture and personal growth, Currents brings together a world of stories. 
                    <span className='hidden sm:inline'><br /></span>
                    <span className='sm:hidden'> </span>
                    Find topics that spark your curiosity and dive into ideas that inspire.
                </p>
            </section>

            <section id="pricing" className='bg-white flex content-center items-center flex-col mt-6 pt-12 md:pt-18 pb-16 md:pb-28 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center'>Choose a Plan That Fits You</h1>
                <p className='text-gray-500 mt-2 text-center text-sm sm:text-base max-w-4xl leading-relaxed'>
                    Whether you're just starting out or sharing stories with a growing audience, Currents offers flexible plans to suit every creator. 
                    <span className='hidden sm:inline'><br /></span>
                    <span className='sm:hidden'> </span>
                    Get access to powerful tools, insights, and features that help your ideas flow.
                </p>
                
                {/* Warning Message */}
                <div className='bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4 mt-6 sm:mt-8 mb-4 w-full max-w-4xl rounded-r-lg'>
                    <div className='flex items-start sm:items-center'>
                        <div className='flex-shrink-0'>
                            <svg className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className='ml-3'>
                            <p className='text-xs sm:text-sm text-yellow-700 leading-relaxed'>
                                <strong>Limited Time Offer:</strong> All paid plans come with a 30-day free trial. No credit card required for the Free plan. Cancel anytime during your trial period.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0 mt-8 md:mt-12 w-full max-w-6xl'>
                    {/* Free Plan */}
                    <div className='bg-white rounded-lg p-6 md:p-8 border-2 border-gray-200 hover:border-indigo-300 transition-colors duration-300'>
                        <div className='text-center'>
                            <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-2'>Free</h3>
                            <div className='mb-4'>
                                <span className='text-3xl md:text-4xl font-bold text-gray-900'>$0</span>
                                <span className='text-gray-600 text-sm md:text-base'>/month</span>
                            </div>
                            <p className='text-gray-600 mb-6 text-sm md:text-base'>Perfect for getting started with your writing journey</p>
                        </div>
                        <ul className='space-y-2 md:space-y-3 mb-6 md:mb-8'>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3 text-sm md:text-base'>✓</span>
                                <span className='text-sm md:text-base'>5 articles per month</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3 text-sm md:text-base'>✓</span>
                                <span className='text-sm md:text-base'>Basic writing editor</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3 text-sm md:text-base'>✓</span>
                                <span className='text-sm md:text-base'>Community access</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3 text-sm md:text-base'>✓</span>
                                <span className='text-sm md:text-base'>Basic profile page</span>
                            </li>
                        </ul>
                        <button className='w-full bg-gray-200 text-gray-800 py-2.5 md:py-2 rounded-full cursor-pointer font-medium hover:bg-gray-300 transition-colors duration-200 text-sm md:text-base'>
                            Get Started Free
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className='bg-indigo-50 rounded-lg p-6 md:p-8 border-2 lg:scale-110 border-indigo-500 relative hover:border-indigo-600 transition-colors duration-300 lg:-mx-4'>
                        <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                            <span className='bg-indigo-500 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium'>Most Popular</span>
                        </div>
                        <div className='text-center'>
                            <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-2'>Pro</h3>
                            <div className='mb-4'>
                                <span className='text-3xl md:text-4xl font-bold text-gray-900'>$9</span>
                                <span className='text-gray-600 text-sm md:text-base'>/month</span>
                            </div>
                            <p className='text-gray-600 mb-6 text-sm md:text-base'>For writers ready to grow their audience</p>
                        </div>
                        <ul className='space-y-2 md:space-y-3 mb-6 md:mb-8'>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3 text-sm md:text-base'>✓</span>
                                <span className='text-sm md:text-base'>Unlimited articles</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3 text-sm md:text-base'>✓</span>
                                <span className='text-sm md:text-base'>Advanced editor features</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3 text-sm md:text-base'>✓</span>
                                <span className='text-sm md:text-base'>Reader analytics</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3 text-sm md:text-base'>✓</span>
                                <span className='text-sm md:text-base'>Custom profile themes</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3 text-sm md:text-base'>✓</span>
                                <span className='text-sm md:text-base'>Email newsletter</span>
                            </li>
                        </ul>
                        <button className='w-full bg-indigo-500 text-white py-2.5 rounded-full cursor-pointer font-medium hover:bg-indigo-600 transition-colors duration-200 text-sm md:text-base'>
                            Start Pro Trial
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div className='bg-white rounded-lg p-6 md:p-8 border-2 border-gray-200 hover:border-purple-300 transition-colors duration-300 lg:col-span-1 md:col-start-2 lg:col-start-auto'>
                        <div className='text-center'>
                            <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-2'>Premium</h3>
                            <div className='mb-4'>
                                <span className='text-3xl md:text-4xl font-bold text-gray-900'>$19</span>
                                <span className='text-gray-600 text-sm md:text-base'>/month</span>
                            </div>
                            <p className='text-gray-600 mb-6 text-sm md:text-base'>For professional writers and content creators</p>
                        </div>
                        <ul className='space-y-2 md:space-y-3 mb-6 md:mb-8'>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3 text-sm md:text-base'>✓</span>
                                <span className='text-sm md:text-base'>Everything in Pro</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3 text-sm md:text-base'>✓</span>
                                <span className='text-sm md:text-base'>Priority support</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3 text-sm md:text-base'>✓</span>
                                <span className='text-sm md:text-base'>Advanced analytics</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3 text-sm md:text-base'>✓</span>
                                <span className='text-sm md:text-base'>Monetization tools</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3 text-sm md:text-base'>✓</span>
                                <span className='text-sm md:text-base'>Custom domain</span>
                            </li>
                        </ul>
                        <button className='w-full bg-gray-200 py-2.5 rounded-full cursor-pointer font-medium hover:bg-gray-300 transition-colors duration-200 text-sm md:text-base'>
                            Go Premium
                        </button>
                    </div>
                </div>
            </section>

            <section id="about" className='bg-gray-50 flex content-center items-center flex-col mt-6 md:mt-10 pt-8 md:pt-10 pb-12 md:pb-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36'>
                <div className='max-w-7xl mx-auto w-full'>
                    {/* Header */}
                    <div className='text-center mb-10 md:mb-16'>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>About Currents</h2>
                        <p className='text-gray-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed'>
                            We believe every story deserves to be heard. Currents is more than a platform—it's a community where ideas flow freely, creativity thrives, and authentic voices find their audience.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 md:mb-20'>
                        {/* Left Content */}
                        <div className='space-y-4 md:space-y-6 order-2 lg:order-1'>
                            <h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-900'>Our Mission</h3>
                            <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
                                Founded in 2024, Currents emerged from a simple belief: that powerful storytelling shouldn't be confined by traditional publishing barriers. We've created a space where writers can focus on what they do best—crafting compelling narratives that resonate with readers worldwide.
                            </p>
                            <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
                                From personal essays that spark conversations to in-depth analyses that challenge perspectives, our platform empowers creators to share their unique voice with a community that values authentic, thoughtful content.
                            </p>
                            <div className='flex items-center justify-center lg:justify-start space-x-6 sm:space-x-8 mt-6 md:mt-8'>
                                <div className='text-center'>
                                    <div className='text-2xl sm:text-3xl font-bold text-indigo-600'>10K+</div>
                                    <div className='text-xs sm:text-sm text-gray-600'>Writers</div>
                                </div>
                                <div className='text-center'>
                                    <div className='text-2xl sm:text-3xl font-bold text-indigo-600'>50K+</div>
                                    <div className='text-xs sm:text-sm text-gray-600'>Stories</div>
                                </div>
                                <div className='text-center'>
                                    <div className='text-2xl sm:text-3xl font-bold text-indigo-600'>1M+</div>
                                    <div className='text-xs sm:text-sm text-gray-600'>Readers</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className='relative order-1 lg:order-2 mb-8 lg:mb-0'>
                            <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 transform rotate-3 rounded-lg'></div>
                            <img 
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                                alt="Team collaboration" 
                                className='relative rounded-lg shadow-xl w-full h-64 sm:h-80 lg:h-96 object-cover'
                            />
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16'>
                        <div className='text-center bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='w-12 h-12 md:w-16 md:h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <svg className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                </svg>
                            </div>
                            <h4 className='text-lg md:text-xl font-bold text-gray-900 mb-2'>Quality Content</h4>
                            <p className='text-gray-600 text-sm md:text-base'>We curate and promote high-quality, thought-provoking content that adds value to our readers' lives.</p>
                        </div>

                        <div className='text-center bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <svg className="w-6 h-6 md:w-8 md:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <h4 className='text-lg md:text-xl font-bold text-gray-900 mb-2'>Community First</h4>
                            <p className='text-gray-600 text-sm md:text-base'>Our platform is built around fostering genuine connections between writers and readers who share similar passions.</p>
                        </div>

                        <div className='text-center bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1'>
                            <div className='w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h4 className='text-lg md:text-xl font-bold text-gray-900 mb-2'>Innovation</h4>
                            <p className='text-gray-600 text-sm md:text-base'>We continuously evolve our tools and features to provide the best possible writing and reading experience.</p>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
                        {/* Left Image */}
                        <div className='relative order-2 lg:order-1'>
                            <div className='absolute inset-0 bg-gradient-to-l from-green-500 to-blue-600 transform -rotate-3 rounded-lg'></div>
                            <img 
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                                alt="Creative workspace" 
                                className='relative rounded-lg shadow-xl w-full h-64 sm:h-80 lg:h-96 object-cover'
                            />
                        </div>

                        {/* Right Content */}
                        <div className='space-y-4 md:space-y-6 order-1 lg:order-2'>
                            <h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-900'>Meet Our Team</h3>
                            <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
                                Behind Currents is a passionate team of writers, developers, and creative minds who understand the power of storytelling. We're not just building a platform—we're cultivating a movement.
                            </p>
                            <p className='text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg'>
                                Our diverse team brings together expertise in technology, content curation, and community building to create an environment where creativity can flourish without boundaries.
                            </p>
                            <button className='bg-indigo-600 text-white px-6 sm:px-8 py-2.5 cursor-pointer rounded-full font-medium hover:bg-indigo-700 transition-colors duration-200 text-sm sm:text-base'>
                                Join Our Community
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className='bg-gray-900 text-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {/* Company Info */}
                        <div className='col-span-1 lg:col-span-1'>
                            <div className='flex items-center mb-4'>
                                <img src={logo} alt="Currents Logo" className='h-12 w-auto mr-3' />
                            </div>
                            <p className='text-gray-300 mb-6 text-sm leading-relaxed'>
                                Where stories flow and ideas connect. Join our community of writers and readers who believe in the power of authentic storytelling.
                            </p>
                            <div className='flex space-x-4'>
                                <a href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                    </svg>
                                </a>
                                <a href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                                <a href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.166-1.499-.69-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className='text-lg font-semibold mb-4'>Platform</h3>
                            <ul className='space-y-2'>
                                <li><a href="#features" className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'>Features</a></li>
                                <li><a href="#pricing" className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'>Pricing</a></li>
                                <li><a href="#topics" className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'>Topics</a></li>
                                <li><a href="#write" className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'>Start Writing</a></li>
                                <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'>Analytics</a></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className='text-lg font-semibold mb-4'>Resources</h3>
                            <ul className='space-y-2'>
                                <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'>Help Center</a></li>
                                <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'>Writing Guidelines</a></li>
                                <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'>Community Rules</a></li>
                                <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'>Blog</a></li>
                                <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'>API Documentation</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className='text-lg font-semibold mb-4'>Company</h3>
                            <ul className='space-y-2'>
                                <li><a href="#about" className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'>About Us</a></li>
                                <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'>Careers</a></li>
                                <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'>Press</a></li>
                                <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'>Contact</a></li>
                                <li><a href="#" className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'>Partner Program</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className='border-t border-gray-800 mt-12 pt-8'>
                        <div className='flex flex-col md:flex-row justify-between items-center'>
                            <div className='mb-4 md:mb-0'>
                                <h3 className='text-lg font-semibold mb-2'>Stay Updated</h3>
                                <p className='text-gray-300 text-sm'>Get weekly insights and writing tips delivered to your inbox.</p>
                            </div>
                            <div className='flex flex-col sm:flex-row gap-2 w-full md:w-auto'>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className='px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                                />
                                <button className='px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 whitespace-nowrap cursor-pointer'>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className='border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'>
                        <div className='text-gray-400 text-sm mb-4 md:mb-0'>
                            © 2024 Currents. All rights reserved.
                        </div>
                        <div className='flex space-x-6 text-sm'>
                            <a href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Privacy Policy</a>
                            <a href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Terms of Service</a>
                            <a href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
