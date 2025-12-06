import React from 'react'

export default function ContatctPage() {
    return (
        <div>
            <div className='min-h-screen'>

                {/* Header Section */}
                <header className=''>
                    <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center'>
                        <p className='text-sm font-semibold text-indigo-600 uppercase tracking-wide'>
                            Get in Touch
                        </p>
                        <h1 className='mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900'>
                            We'd Love to Hear From You
                        </h1>
                        <p className='mt-2 max-w-2xl text-neutral-600 mx-auto'>
                            Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
                        </p>
                    </div>
                </header>

                {/* Main Content Area: Info (Left) + Form (Right) */}
                <main className='py-10'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16'>

                            {/* Left Column: Contact Information */}
                            <div className='lg:col-span-1 space-y-10'>

                                {/* General Inquiry */}
                                <div>
                                    <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                                        General Inquiries
                                    </h3>
                                    <p className='text-lg text-neutral-700'>
                                        For all questions regarding the platform, partnerships, or press.
                                    </p>
                                    <div className='mt-4'>
                                        <p className='text-indigo-600 font-medium'>
                                            Email: <a href="mailto:contact@stability.ai" className='hover:underline'>contact@stability.ai</a>
                                        </p>
                                    </div>
                                </div>

                                {/* Support */}
                                <div>
                                    <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                                        Technical Support
                                    </h3>
                                    <p className='text-lg text-neutral-700'>
                                        Need help with your account, API integration, or a bug report?
                                    </p>
                                    <div className='mt-4'>
                                        <p className='text-indigo-600 font-medium'>
                                            Support Center: <a href="#" className='hover:underline'>View Documentation</a>
                                        </p>
                                        <p className='text-indigo-600 font-medium'>
                                            Email: <a href="mailto:support@stability.ai" className='hover:underline'>support@stability.ai</a>
                                        </p>
                                    </div>
                                </div>

                                {/* Location/Headquarters (Optional) */}
                                <div>
                                    <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                                        Global Headquarters
                                    </h3>
                                    <address className='text-lg text-neutral-700 not-italic'>
                                        123 AI Boulevard, Suite 500<br />
                                        San Francisco, CA 94107<br />
                                        United States
                                    </address>
                                </div>

                            </div>

                            {/* Right Column: Contact Form */}
                            <div className='lg:col-span-2 bg-white p-8 sm:p-10 rounded-xl border border-neutral-100'>
                                <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
                                    Send Us a Message
                                </h2>
                                <form className='space-y-6'>

                                    {/* Name and Email in a single row for desktop */}
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                        <div>
                                            <label htmlFor="full-name" className='block text-sm font-medium text-gray-700'>Full Name</label>
                                            <input
                                                type="text"
                                                name="full-name"
                                                id="full-name"
                                                required
                                                className='mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500'
                                                placeholder="Jane Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                required
                                                className='mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500'
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Subject/Topic */}
                                    <div>
                                        <label htmlFor="topic" className='block text-sm font-medium text-gray-700'>Subject / Topic</label>
                                        <select
                                            id="topic"
                                            name="topic"
                                            required
                                            className='mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500 bg-white'
                                        >
                                            <option>Select a topic...</option>
                                            <option>General Inquiry</option>
                                            <option>Technical Support</option>
                                            <option>Partnership Request</option>
                                            <option>Billing Question</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            required
                                            className='mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500'
                                            placeholder="Tell us how we can help you..."
                                        ></textarea>
                                    </div>

                                    {/* Submission Button */}
                                    <div className='pt-4'>
                                        <button
                                            type="submit"
                                            className='cursor-pointer w-full inline-flex justify-center py-3 px-6 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
