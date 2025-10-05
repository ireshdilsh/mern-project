import logo from '../assets/logo.png'
import '../styles/landing.css'

export default function Landing() {

    return (
        <div id='main-page' className='min-h-screen bg-gray-50'>

            <nav className='flex items-center justify-between pl-36 pr-36 pt-8 pb-4'>
                <img src={logo} alt="" className='h-16' />
                <div id='links' className='flex gap-6'>
                    <a href="#home" className=''>Home</a>
                    <a href="#features" className=''>Features</a>
                    <a href="#topics" className=''>Topics</a>
                    <a href="#pricing" className=''>Pricing</a>
                    <a href="#write" className=''>Write</a>
                    <a href="#about" className=''>About</a>
                    <a href="#contact" className=''>Get In Touch</a>
                </div>
            </nav>

            <div id="hero-section" className='flex justify-between items-center mt-6 pt-12 pb-24 pl-36 pr-36'>
                <div className="flex flex-col items-start justify-left mt-6">
                    <h1 className='text-5xl font-bold mb-4 leading-16'>Weave your thoughts,<br /> frame your story.</h1>
                    <p className='text-base text-gray-600'>Loom & Lens features in-depth writing and personal essays that explore ideas, <br /> culture, and creativity. Join a community of curious minds.</p>
                    <div className='flex gap-2 mt-7'>
                        <button className='bg-indigo-500 text-white px-8 py-2 cursor-pointer rounded-4xl text-base '>Publish Your Story</button>
                        <button className='flex justify-center items-center gap-3.5 px-8 font-medium py-2 cursor-pointer rounded-4xl text-base '>Join Now <img src="https://img.icons8.com/?size=100&id=39777&format=png&color=000000" alt="right-side-arrow" className='h-4 mt-0.5'/></button>
                    </div>
                </div>
                <div className='flex content-center items-center relative'>
                    <span id='span-c' className='text-9xl font-extrabold absolute text-gray-300 right-96 bottom-2'>C</span>
                    <span id='span-u' className='text-9xl font-extrabold absolute text-gray-300 right-60'>U</span>
                    <span id='span-r1' className='text-9xl font-extrabold absolute text-gray-300 right-0 top-8'>R</span>
                    <span id='span-r2' className='text-9xl font-extrabold absolute text-gray-300 right-40 top-20'>R</span>
                    <span id='span-e' className='text-9xl font-extrabold absolute text-gray-300 right-18 bottom-5'>E</span>
                    <span id='span-n' className='text-9xl font-extrabold absolute text-gray-300 right-0 bottom-2'>N</span>
                    <span id='span-t' className='text-9xl font-extrabold absolute text-gray-300 right-46 bottom-8'>T</span>
                    <span id='span-s' className='text-9xl font-extrabold absolute text-gray-300 top-8 right-66'>S</span>
                </div>
            </div>

            <section id='features' className='bg-white flex content-center items-center flex-col mt-6 pt-12 pb-22 pl-36 pr-36'>
                <h1 className='text-4xl font-bold mt-10'>Features that Empower Every Writer</h1>
                <p className='text-center mt-2 text-gray-500'>Discover a suite of tools designed to enhance your writing experience, from intuitive editing to collaborative feedback.</p>
                <div className='grid grid-cols-2 gap-8 mt-12'>
                    <div id='left-side' className='flex flex-col gap-6'>

                        <h1 className='text-xl font-medium'>Smart Writing Editor</h1>
                        <p className='text-gray-500 -mt-2.5 text-justify'>Craft your thoughts in a clean, distraction-free space with built-in formatting, markdown support, and real-time saving — so you never lose your flow.</p>

                        <h1 className='text-xl font-medium'>Personalized Profiles</h1>
                        <p className='text-gray-500 -mt-2.5 text-justify'>Showcase your personality with customizable author pages, profile images, and bios — turning your readers into loyal followers.</p>

                        <h1 className='text-xl font-medium'>Reader Insights</h1>
                        <p className='text-gray-500 -mt-2.5 text-justify'>Track how your stories perform with simple analytics that reveal views, reads, and engagement — helping you grow your audience strategically.</p>


                        <h1 className='text-xl font-medium'>Community Connection</h1>
                        <p className='text-gray-500 -mt-2.5 text-justify'>Join a growing network of writers and readers. Comment, follow, and collaborate to make your ideas part of something bigger.</p>

                    </div>
                    <div id='right-side'></div>
                </div>
            </section>

            <section id='topics' className='flex flex-col content-center items-start mt-6 pt-12 pb-12 pl-36 pr-36'>
                <h1 className='text-4xl font-bold'>Explore Every Idea</h1>
                <p className='text-gray-500 mt-2'>From tech and lifestyle to culture and personal growth, Currents brings together a world of stories. <br /> Find topics that spark your curiosity and dive into ideas that inspire.</p>
            </section>

             <section id="pricing" className='bg-white flex content-center items-center flex-col mt-6 pt-18 pb-12 pl-36 pr-36'>
                <h1 className='text-4xl font-bold'>Choose a Plan That Fits You</h1>
                <p className='text-gray-500 mt-2 text-center'>Whether you're just starting out or sharing stories with a growing audience, Currents offers flexible plans to suit every creator. <br /> Get access to powerful tools, insights, and features that help your ideas flow.</p>
                
                {/* Warning Message */}
                <div className='bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8 mb-4 w-full max-w-4xl rounded-r-lg'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className='ml-3'>
                            <p className='text-sm text-yellow-700'>
                                <strong>Limited Time Offer:</strong> All paid plans come with a 30-day free trial. No credit card required for the Free plan. Cancel anytime during your trial period.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className='grid grid-cols-3 gap-0 mt-12 w-full max-w-6xl'>
                    {/* Free Plan */}
                    <div className='bg-white rounded-lg p-8 border-2 border-gray-200 hover:border-indigo-300 transition-colors duration-300'>
                        <div className='text-center'>
                            <h3 className='text-2xl font-bold text-gray-900 mb-2'>Free</h3>
                            <div className='mb-4'>
                                <span className='text-4xl font-bold text-gray-900'>$0</span>
                                <span className='text-gray-600'>/month</span>
                            </div>
                            <p className='text-gray-600 mb-6'>Perfect for getting started with your writing journey</p>
                        </div>
                        <ul className='space-y-3 mb-8'>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3'>✓</span>
                                <span>5 articles per month</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3'>✓</span>
                                <span>Basic writing editor</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3'>✓</span>
                                <span>Community access</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3'>✓</span>
                                <span>Basic profile page</span>
                            </li>
                        </ul>
                        <button className='w-full bg-gray-200 text-gray-800 py-2 rounded-4xl cursor-pointer font-medium hover:bg-gray-300 transition-colors duration-200'>
                            Get Started Free
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className='bg-indigo-50 rounded-lg p-8 border-2 scale-110 border-indigo-500 relative hover:border-indigo-600 transition-colors duration-300'>
                        <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                            <span className='bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium'>Most Popular</span>
                        </div>
                        <div className='text-center'>
                            <h3 className='text-2xl font-bold text-gray-900 mb-2'>Pro</h3>
                            <div className='mb-4'>
                                <span className='text-4xl font-bold text-gray-900'>$9</span>
                                <span className='text-gray-600'>/month</span>
                            </div>
                            <p className='text-gray-600 mb-6'>For writers ready to grow their audience</p>
                        </div>
                        <ul className='space-y-3 mb-8'>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3'>✓</span>
                                <span>Unlimited articles</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3'>✓</span>
                                <span>Advanced editor features</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3'>✓</span>
                                <span>Reader analytics</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3'>✓</span>
                                <span>Custom profile themes</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3'>✓</span>
                                <span>Email newsletter</span>
                            </li>
                        </ul>
                        <button className='w-full bg-indigo-500 text-white py-2.5 rounded-4xl cursor-pointer font-medium hover:bg-indigo-600 transition-colors duration-200'>
                            Start Pro Trial
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div className='bg-white rounded-lg p-8 border-2 border-gray-200 hover:border-purple-300 transition-colors duration-300'>
                        <div className='text-center'>
                            <h3 className='text-2xl font-bold text-gray-900 mb-2'>Premium</h3>
                            <div className='mb-4'>
                                <span className='text-4xl font-bold text-gray-900'>$19</span>
                                <span className='text-gray-600'>/month</span>
                            </div>
                            <p className='text-gray-600 mb-6'>For professional writers and content creators</p>
                        </div>
                        <ul className='space-y-3 mb-8'>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3'>✓</span>
                                <span>Everything in Pro</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3'>✓</span>
                                <span>Priority support</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3'>✓</span>
                                <span>Advanced analytics</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3'>✓</span>
                                <span>Monetization tools</span>
                            </li>
                            <li className='flex items-center'>
                                <span className='text-green-500 mr-3'>✓</span>
                                <span>Custom domain</span>
                            </li>
                        </ul>
                        <button className='w-full bg-gray-200 py-2.5 rounded-4xl cursor-pointer font-medium hover:bg-gray-300 transition-colors duration-200'>
                            Go Premium
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

// https://uncutjalwa.net/page/96/?s