import React from 'react'

export default function LegalPage() {
    return (
        <div>
            <div className='min-h-screen bg-white'>

                {/* Page Header */}
                <header className='bg-white border-b border-b-neutral-200'>
                    <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
                        <h1 className='text-3xl font-extrabold text-gray-900'>
                            Legal Documents & Policies
                        </h1>
                        <p className='mt-2 text-neutral-600'>
                            Your guide to image ownership, privacy, and terms of use for the platform.
                        </p>
                    </div>
                </header>

                {/* Main Content Area (Sidebar + Document) */}
                <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                    <div className='lg:grid lg:grid-cols-4 lg:gap-10'>

                        {/* Left Column: Navigation Sidebar (Sticky on Desktop) */}
                        <nav className='lg:col-span-1 mb-10 lg:mb-0'>
                            <div className='lg:sticky lg:top-24 space-y-4 p-4'>
                                <h3 className='text-xl font-bold text-gray-900 mb-4 border-b border-b-neutral-200 pb-2'>
                                    Quick Links
                                </h3>
                                <ul className='space-y-2 text-base'>
                                    <li>
                                        <a href="#tos" className='font-semibold text-black hover:text-indigo-600 transition duration-150'>
                                            1. Terms of Service (ToS)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#privacy" className='font-semibold text-gray-700 hover:text-indigo-600 transition duration-150'>
                                            2. Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#license" className='font-semibold text-gray-700 hover:text-indigo-600 transition duration-150'>
                                            3. Content License & Ownership
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#moderation" className='font-semibold text-gray-700 hover:text-indigo-600 transition duration-150'>
                                            4. Content Moderation
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contact" className='font-semibold text-gray-700 hover:text-indigo-600 transition duration-150'>
                                            5. Contact Legal Team
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        {/* Right Column: Legal Document Content */}
                        <div className='lg:col-span-3 bg-white p-8 border-l border-l-neutral-200'>

                            {/* 1. Terms of Service */}
                            <article id="tos" className='mb-12 border-b border-b-neutral-200 pb-8'>
                                <h2 className='text-3xl font-extrabold text-gray-900 mb-4'>
                                    1. Terms of Service
                                </h2>
                                <p className='text-sm text-neutral-500 mb-6'>
                                    Last Updated: December 6, 2025
                                </p>
                                <h3 className='text-xl font-bold text-gray-900 mt-6 mb-3'>
                                    1.1. Acceptance of Terms
                                </h3>
                                <p className='text-neutral-700 leading-relaxed'>
                                    By accessing or using the stability.ai service (the "Service"), you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
                                </p>
                                <h3 className='text-xl font-bold text-gray-900 mt-6 mb-3'>
                                    1.2. Account Responsibility
                                </h3>
                                <p className='text-neutral-700 leading-relaxed'>
                                    You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
                                </p>
                                {/* ... More ToS clauses ... */}
                            </article>

                            {/* 2. Privacy Policy */}
                            <article id="privacy" className='mb-12 border-b border-b-neutral-200 pb-8'>
                                <h2 className='text-3xl font-extrabold text-gray-900 mb-4'>
                                    2. Privacy Policy
                                </h2>
                                <p className='text-sm text-neutral-500 mb-6'>
                                    Effective Date: November 1, 2025
                                </p>
                                <h3 className='text-xl font-bold text-gray-900 mt-6 mb-3'>
                                    2.1. Information We Collect
                                </h3>
                                <p className='text-neutral-700 leading-relaxed'>
                                    We collect information you provide directly to us, such as account registration details (email, username, payment info) and technical data (IP address, usage patterns). **We do not train our general models on your private prompt inputs without explicit permission.**
                                </p>
                                <h3 className='text-xl font-bold text-gray-900 mt-6 mb-3'>
                                    2.2. Use of Data
                                </h3>
                                <p className='text-neutral-700 leading-relaxed'>
                                    Your data is used solely to provide, maintain, and improve the Service, process transactions, and communicate with you about your account.
                                </p>
                                {/* ... More Privacy Policy clauses ... */}
                            </article>

                            {/* 3. Content License & Ownership */}
                            <article id="license" className='mb-12 border-b border-b-neutral-200 pb-8'>
                                <h2 className='text-3xl font-extrabold text-gray-900 mb-4'>
                                    3. Content License & Ownership
                                </h2>
                                <h3 className='text-xl font-bold text-gray-900 mt-6 mb-3'>
                                    3.1. User Image Ownership
                                </h3>
                                <p className='text-neutral-700 leading-relaxed'>
                                    **You own the images you create.** Subject to your compliance with these Terms, stability.ai hereby assigns to you all right, title, and interest in and to the images you generate using the Service (for paid users). You may use your generated images for commercial purposes, including selling, licensing, and merchandising.
                                </p>
                                <h3 className='text-xl font-bold text-gray-900 mt-6 mb-3'>
                                    3.2. Platform IP
                                </h3>
                                <p className='text-neutral-700 leading-relaxed'>
                                    All intellectual property rights in the AI models, software, and underlying technology used to provide the Service are owned by stability.ai or its licensors.
                                </p>
                                {/* ... More License clauses ... */}
                            </article>

                            {/* 4. Content Moderation */}
                            <article id="moderation" className='mb-12 border-b border-b-neutral-200 pb-8'>
                                <h2 className='text-3xl font-extrabold text-gray-900 mb-4'>
                                    4. Content Moderation
                                </h2>
                                <h3 className='text-xl font-bold text-gray-900 mt-6 mb-3'>
                                    4.1. Prohibited Content
                                </h3>
                                <p className='text-neutral-700 leading-relaxed'>
                                    The Service must not be used to generate or distribute content that is illegal, infringes on third-party rights, or promotes hate speech, violence, or self-harm. Attempts to bypass safety filters will result in account termination.
                                </p>
                                {/* ... More Moderation clauses ... */}
                            </article>

                            {/* 5. Contact Legal Team */}
                            <article id="contact" className='mb-12'>
                                <h2 className='text-3xl font-extrabold text-gray-900 mb-4'>
                                    5. Contact Legal Team
                                </h2>
                                <p className='text-neutral-700 leading-relaxed'>
                                    If you have any questions about these legal documents, please contact us at:
                                </p>
                                <p className='mt-4 font-semibold text-lg text-indigo-600'>
                                    legal@stability.ai
                                </p>
                            </article>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
