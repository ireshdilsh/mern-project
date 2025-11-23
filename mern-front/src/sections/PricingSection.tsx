import React from 'react'

export default function PricingSection() {
    return (
        <div className='flex justify-center items-center flex-col mt-25 px-35 py-15 bg-neutral-50'>
            <h1 className='text-5xl font-medium'>Plans for Every Stage</h1>
            <p className='text-neutral-500 text-base mt-2'>Whether you're just starting out or scaling fast, our pricing is built to match your needs and budget.</p>
            <div className='flex justify-center items-center mt-10 gap-3.5'>
                {/* Basic Plan */}
                <div className='flex justify-start items-start flex-col border border-neutral-300 rounded-md p-10 w-100'>
                    <h1 className='text-xl font-medium'>Basic Plan</h1>
                    <p className='text-neutral-600'>Perfect for beginners and personal use.</p>
                    <hr className='w-full mb-5 mt-5 border border-neutral-200' />
                    <ul className='flex flex-col gap-1'>
                        <li>Upload & organize memories</li>
                        <li>Smart album creation</li>
                        <li>AI captions (limited)</li>
                        <li>5GB secure cloud storage</li>
                        <li>Email support</li>
                    </ul>
                    <button className='mt-5 bg-black px-5 py-2 text-white border-none rounded-sm w-full cursor-pointer font-semibold hover:opacity-80'>$9/month</button>
                </div>

                {/* Pro Plan */}
                <div className='flex justify-start items-start flex-col border border-neutral-300 rounded-md p-10 w-100'>
                    <h1 className='text-xl font-medium'>Pro Plan</h1>
                    <p className='text-neutral-600'>For creators, families, and growing users.</p>
                    <hr className='w-full mb-5 mt-5 border border-neutral-200' />
                    <ul className='flex flex-col gap-1'>
                        <li>Everything in Basic</li>
                        <li>Unlimited uploads</li>
                        <li>Advanced AI story generation</li>
                        <li>Auto-highlight video creation</li>
                        <li>100GB cloud storage</li>
                        <li>Priority support</li>
                    </ul>
                    <button className='mt-5 bg-black px-5 py-2 text-white border-none rounded-sm w-full cursor-pointer font-semibold hover:opacity-80'>$19/month</button>
                </div>

                {/* Enterprise Plan */}
                <div className='flex justify-start items-start flex-col border border-neutral-300 rounded-md p-10 w-100 '>
                    <h1 className='text-xl font-medium'>Enterprise Plan</h1>
                    <p className='text-neutral-600'>For businesses and teams who need powerful tools.</p>
                    <hr className='w-full mb-5 mt-5 border border-neutral-200' />
                    <ul className='flex flex-col gap-1'>
                        <li>Everything in Pro</li>
                        <li>Team collaboration features</li>
                        <li>Custom AI workflows</li>
                        <li>Admin dashboard & permissions</li>
                        <li>Unlimited cloud storage</li>
                        <li>Dedicated account manager</li>
                    </ul>
                    <button className='mt-5 bg-black px-5 py-2 text-white border-none rounded-sm w-full cursor-pointer font-semibold hover:opacity-80'>Let's talk</button>
                </div>
            </div>
        </div>
    )
}
