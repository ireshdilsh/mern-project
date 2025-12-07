import React from 'react'

export default function AboutPage() {
    return (
        <div>
            <div className='min-h-screen bg-gray-50'>

                {/* Header & Hero Introduction */}
                <header className='bg-white shadow-sm'>
                    <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
                        <p className='text-sm font-semibold text-indigo-600 uppercase tracking-wide'>
                            Our Story
                        </p>
                        <h1 className='mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900'>
                            Pioneering Accessible Generative AI
                        </h1>
                        <p className='mt-4 max-w-3xl text-xl text-neutral-600'>
                            We are a collective of researchers, engineers, and artists dedicated to building the most powerful, open, and user-friendly creative tools for the digital age.
                        </p>
                    </div>
                </header>

                <main className='py-16'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20'>

                        {/* 1. Mission and Vision (Two-Column Layout) */}
                        <section className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>

                            {/* Left: Mission & Vision Content */}
                            <div className='space-y-10'>
                                <div className='p-6 bg-white rounded-xl shadow-lg border border-neutral-100'>
                                    <h3 className='text-3xl font-bold text-gray-900 mb-4 flex items-center'>
                                        <span className='mr-3 text-indigo-600'>🚀</span> Our Mission
                                    </h3>
                                    <p className='text-lg text-neutral-700 leading-relaxed'>
                                        Our core mission is to democratize creation. We aim to break down the technical barriers to digital art, allowing anyone, regardless of skill, to realize their imaginative ideas instantly and affordably.
                                    </p>
                                </div>

                                <div className='p-6 bg-white rounded-xl shadow-lg border border-neutral-100'>
                                    <h3 className='text-3xl font-bold text-gray-900 mb-4 flex items-center'>
                                        <span className='mr-3 text-indigo-600'>💡</span> Our Vision
                                    </h3>
                                    <p className='text-lg text-neutral-700 leading-relaxed'>
                                        To be the foundational layer for all future visual content creation, driving global innovation in fields from entertainment and marketing to scientific visualization and education.
                                    </p>
                                </div>
                            </div>

                            {/* Right: Visionary Image Placeholder */}
                            <div className='relative w-full h-96 bg-neutral-200 rounded-xl shadow-xl overflow-hidden mt-8 lg:mt-0'>
                                <div className='absolute inset-0 flex items-center justify-center text-xl font-semibold text-neutral-600 p-4 text-center'>
                                    [Placeholder for Visionary Image: AI-generated futuristic cityscape or abstract art]
                                    {/* Replace with your image */}
                                </div>
                            </div>
                        </section>

                        {/* 2. Our Values (Feature Grid) */}
                        <section>
                            <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-10'>
                                The Principles That Guide Us
                            </h2>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

                                <div className='text-center p-6 bg-white rounded-xl shadow-md'>
                                    <span className='inline-block p-3 bg-indigo-100 rounded-full text-indigo-600 mb-4'>[Icon]</span>
                                    <h3 className='text-xl font-bold mb-2'>Inclusivity</h3>
                                    <p className='text-neutral-600'>Building tools that are accessible and beneficial to everyone, everywhere.</p>
                                </div>

                                <div className='text-center p-6 bg-white rounded-xl shadow-md'>
                                    <span className='inline-block p-3 bg-indigo-100 rounded-full text-indigo-600 mb-4'>[Icon]</span>
                                    <h3 className='text-xl font-bold mb-2'>Transparency</h3>
                                    <p className='text-neutral-600'>Being open about our models, data sourcing, and content policies.</p>
                                </div>

                                <div className='text-center p-6 bg-white rounded-xl shadow-md'>
                                    <span className='inline-block p-3 bg-indigo-100 rounded-full text-indigo-600 mb-4'>[Icon]</span>
                                    <h3 className='text-xl font-bold mb-2'>Responsibility</h3>
                                    <p className='text-neutral-600'>Prioritizing safety and ethical guidelines in AI development.</p>
                                </div>

                                <div className='text-center p-6 bg-white rounded-xl shadow-md'>
                                    <span className='inline-block p-3 bg-indigo-100 rounded-full text-indigo-600 mb-4'>[Icon]</span>
                                    <h3 className='text-xl font-bold mb-2'>Excellence</h3>
                                    <p className='text-neutral-600'>Pursuing state-of-the-art quality in all our generative models.</p>
                                </div>
                            </div>
                        </section>

                        {/* 3. The Team (Simple Testimonial/Team Intro Placeholder) */}
                        <section className='text-center'>
                            <h2 className='text-3xl font-extrabold text-gray-900 mb-4'>
                                Meet Our Leadership
                            </h2>
                            <p className='max-w-4xl mx-auto text-xl text-neutral-600 mb-10'>
                                A dedicated group of experts driving innovation at the intersection of AI, creativity, and engineering.
                            </p>

                            {/* Team Grid Placeholder */}
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                                <div className='p-4'>
                                    <div className='w-full h-32 bg-neutral-200 rounded-full mx-auto mb-3'>[Photo]</div>
                                    <h4 className='font-bold text-gray-900'>Jane Doe</h4>
                                    <p className='text-sm text-indigo-600'>CEO & Co-founder</p>
                                </div>
                                <div className='p-4'>
                                    <div className='w-full h-32 bg-neutral-200 rounded-full mx-auto mb-3'>[Photo]</div>
                                    <h4 className='font-bold text-gray-900'>John Smith</h4>
                                    <p className='text-sm text-indigo-600'>CTO & Head of Research</p>
                                </div>
                                <div className='p-4'>
                                    <div className='w-full h-32 bg-neutral-200 rounded-full mx-auto mb-3'>[Photo]</div>
                                    <h4 className='font-bold text-gray-900'>Alice Chen</h4>
                                    <p className='text-sm text-indigo-600'>Lead Product Designer</p>
                                </div>
                                <div className='p-4'>
                                    <div className='w-full h-32 bg-neutral-200 rounded-full mx-auto mb-3'>[Photo]</div>
                                    <h4 className='font-bold text-gray-900'>Robert Green</h4>
                                    <p className='text-sm text-indigo-600'>Head of Engineering</p>
                                </div>
                            </div>
                        </section>

                        {/* 4. Contact CTA */}
                        <section className='text-center bg-white p-10 rounded-xl shadow-xl'>
                            <h2 className='text-3xl font-extrabold text-gray-900 mb-4'>
                                Ready to Create with Stability.ai?
                            </h2>
                            <p className='text-xl text-neutral-600 mb-6'>
                                Join millions of creators pushing the limits of visual imagination.
                            </p>
                            <a href="/app" className='inline-flex items-center justify-center px-12 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 transition duration-150'>
                                Start Generating Images
                            </a>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    )
}
