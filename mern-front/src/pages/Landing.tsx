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

            <section id="pricing" className='bg-white flex content-center items-center flex-col mt-6 pt-18 pb-28 pl-36 pr-36'>
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

            <section id="about" className='bg-gray-50 flex content-center items-center flex-col mt-10 pt-10 pb-20 pl-36 pr-36'>
                <div className='max-w-7xl mx-auto'>
                    {/* Header */}
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl font-bold text-gray-900 mb-4'>About Currents</h2>
                        <p className='text-gray-600 max-w-3xl mx-auto'>
                            We believe every story deserves to be heard. Currents is more than a platform—it's a community where ideas flow freely, creativity thrives, and authentic voices find their audience.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
                        {/* Left Content */}
                        <div className='space-y-6'>
                            <h3 className='text-3xl font-bold text-gray-900'>Our Mission</h3>
                            <p className=' text-gray-600 leading-relaxed'>
                                Founded in 2024, Currents emerged from a simple belief: that powerful storytelling shouldn't be confined by traditional publishing barriers. We've created a space where writers can focus on what they do best—crafting compelling narratives that resonate with readers worldwide.
                            </p>
                            <p className=' text-gray-600 leading-relaxed'>
                                From personal essays that spark conversations to in-depth analyses that challenge perspectives, our platform empowers creators to share their unique voice with a community that values authentic, thoughtful content.
                            </p>
                            <div className='flex items-center space-x-8 mt-8'>
                                <div className='text-center'>
                                    <div className='text-3xl font-bold text-indigo-600'>10K+</div>
                                    <div className='text-sm text-gray-600'>Writers</div>
                                </div>
                                <div className='text-center'>
                                    <div className='text-3xl font-bold text-indigo-600'>50K+</div>
                                    <div className='text-sm text-gray-600'>Stories</div>
                                </div>
                                <div className='text-center'>
                                    <div className='text-3xl font-bold text-indigo-600'>1M+</div>
                                    <div className='text-sm text-gray-600'>Readers</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className='relative'>
                            <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 transform rotate-3 rounded-lg'></div>
                            <img 
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                                alt="Team collaboration" 
                                className='relative rounded-lg shadow-xl w-full h-96 object-cover'
                            />
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
                        <div className='text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                </svg>
                            </div>
                            <h4 className='text-xl font-bold text-gray-900 mb-2'>Quality Content</h4>
                            <p className='text-gray-600'>We curate and promote high-quality, thought-provoking content that adds value to our readers' lives.</p>
                        </div>

                        <div className='text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <h4 className='text-xl font-bold text-gray-900 mb-2'>Community First</h4>
                            <p className='text-gray-600'>Our platform is built around fostering genuine connections between writers and readers who share similar passions.</p>
                        </div>

                        <div className='text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h4 className='text-xl font-bold text-gray-900 mb-2'>Innovation</h4>
                            <p className='text-gray-600'>We continuously evolve our tools and features to provide the best possible writing and reading experience.</p>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                        {/* Left Image */}
                        <div className='relative order-2 lg:order-1'>
                            <div className='absolute inset-0 bg-gradient-to-l from-green-500 to-blue-600 transform -rotate-3 rounded-lg'></div>
                            <img 
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                                alt="Creative workspace" 
                                className='relative rounded-lg shadow-xl w-full h-96 object-cover'
                            />
                        </div>

                        {/* Right Content */}
                        <div className='space-y-6 order-1 lg:order-2'>
                            <h3 className='text-3xl font-bold text-gray-900'>Meet Our Team</h3>
                            <p className='text-gray-600 leading-relaxed'>
                                Behind Currents is a passionate team of writers, developers, and creative minds who understand the power of storytelling. We're not just building a platform—we're cultivating a movement.
                            </p>
                            <p className='text-lg text-gray-600 leading-relaxed'>
                                Our diverse team brings together expertise in technology, content curation, and community building to create an environment where creativity can flourish without boundaries.
                            </p>
                            <button className='bg-indigo-600 text-white px-8 py-2.5 cursor-pointer rounded-4xl font-medium hover:bg-indigo-700 transition-colors duration-200'>
                                Join Our Community
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

// https://uncutjalwa.net/page/96/?s