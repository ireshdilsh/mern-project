import React from 'react'

export default function FeaturesSection() {
    return (
        <div className='flex justify-center items-center flex-col mt-25 px-35'>
            <h1 className='text-5xl font-medium'>Smart Memory Organization</h1>
            <p className='text-neutral-500 text-base mt-2'>AI automatically sorts your photos and videos by events, people, and dates so everything stays beautifully organized.</p>
            <div className='flex justify-center items-center flex-col gap-6 mt-10'>
                <div className='flex justify-center items-center gap-5'>

                    {/* card-1 */}
                    <div className='p-4 border border-neutral-200 rounded-md w-100 hover:scale-103 transition-transform duration-300'>
                        <div className='flex justify-start items-center gap-2.5'>
                            <img src="" alt="" />
                            <h3 className='text-xl font-medium'>Lightning-Fast Performance</h3>
                        </div>
                        <p className='mt-3 text-justify'>Experience ultra-smooth speed with optimized architecture designed to load pages, animations, and interactions instantly.</p>
                    </div>

                    {/* card-2 */}
                    <div className='p-4 border border-neutral-200 rounded-md w-100 hover:scale-103 transition-transform duration-300'>
                        <div className='flex justify-start items-center gap-2.5'>
                            <img src="" alt="" />
                            <h3 className='text-xl font-medium'>Smart AI Assistance</h3>
                        </div>
                        <p className='mt-3 text-justify'>Leverage built-in AI that understands your needs, predicts actions , and streamlines tasks with intelligent automation.</p>
                    </div>

                    {/* card-3 */}
                    <div className='p-4 border border-neutral-200 rounded-md w-100 hover:scale-103 transition-transform duration-300'>
                        <div className='flex justify-start items-center gap-2.5'>
                            <img src="" alt="" />
                            <h3 className='text-xl font-medium'>Fully Responsive Design</h3>
                        </div>
                        <p className='mt-3 text-justify'>Enjoy a consistent, beautiful interface across all devices—mobile, tablet, or desktop—without losing quality or functionality.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-5'>

                    {/* card-4 */}
                    <div className='p-4 border border-neutral-200 rounded-md w-100 hover:scale-103 transition-transform duration-300'>
                        <div className='flex justify-start items-center gap-2.5'>
                            <img src="" alt="" />
                            <h3 className='text-xl font-medium'>Real-Time Sync</h3>
                        </div>
                        <p className='mt-3 text-justify'>All your data stays up to date with instant synchronization across platforms, ensuring nothing is ever out of step.</p>
                    </div>

                    {/* card-5 */}
                    <div className='p-4 border border-neutral-200 rounded-md w-100 hover:scale-103 transition-transform duration-300'>
                        <div className='flex justify-start items-center gap-2.5'>
                            <img src="" alt="" />
                            <h3 className='text-xl font-medium'>One-Tap Customization</h3>
                        </div>
                        <p className='mt-3 text-justify'>Modify layouts, styles, and content effortlessly with simple, intuitive editing tools tailored for beginners and pros.</p>
                    </div>

                  {/* card-6 */}
                    <div className='p-4 border border-neutral-200 rounded-md w-100 hover:scale-103 transition-transform duration-300'>
                        <div className='flex justify-start items-center gap-2.5'>
                            <img src="" alt="" />
                            <h3 className='text-xl font-medium'>Secure by Default</h3>
                        </div>
                        <p className='mt-3 text-justify'>Your data is protected with advanced encryption, multi-layer authentication, and the latest security standards.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
