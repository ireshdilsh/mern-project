import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Pricing() {
    return (
        <div>
            <Navbar/>
            {/* Pricing */}
            <section className='flex justify-center items-center flex-col mt-25 px-35' id='pricing'>
                <h1 className='text-5xl font-medium'>Plans for Every Stage</h1>
                <p className='text-neutral-500 text-base mt-2'>Whether you're just starting out or scaling fast, our pricing is built to match your needs and budget.</p>
                <div className='flex justify-center items-center mt-10 gap-2'>
                    {/* Basic Plan */}
                    <div className='flex justify-start items-start flex-col border border-neutral-300 rounded-md p-10 w-100'>
                        <h1 className='text-xl font-medium'>Basic Plan</h1>
                        <p className='text-neutral-600'>Perfect for beginners and personal use.</p>
                        <hr className='w-full mb-5 mt-5 border border-neutral-200' />
                        <ul className='flex flex-col gap-3'>
                            <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Upload & organize memories</li>
                            <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Smart album creation</li>
                            <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />AI captions (limited)</li>
                            <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />5GB secure cloud storage</li>
                            <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Email support</li>
                        </ul>
                        <button className='mt-7 bg-black px-5 py-2 text-white border-none rounded-sm w-full cursor-pointer font-semibold hover:opacity-80'>$9/month</button>
                    </div>

                    {/* Pro Plan */}
                    <div className='flex justify-start items-start flex-col border border-neutral-300 rounded-md p-10 w-100'>
                        <h1 className='text-xl font-medium'>Pro Plan</h1>
                        <p className='text-neutral-600'>For creators, families, and growing users.</p>
                        <hr className='w-full mb-5 mt-5 border border-neutral-200' />
                        <ul className='flex flex-col gap-3'>
                            <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Everything in Basic</li>
                            <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Unlimited uploads</li>
                            <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Advanced AI story generation</li>
                            <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Auto-highlight video creation</li>
                            <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />100GB cloud storage</li>
                            <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Priority support</li>
                        </ul>
                        <button className='mt-7 bg-black px-5 py-2 text-white border-none rounded-sm w-full cursor-pointer font-semibold hover:opacity-80'>$19/month</button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className='flex justify-start items-start flex-col border border-neutral-300 rounded-md p-10 w-100 '>
                        <h1 className='text-xl font-medium'>Enterprise Plan</h1>
                        <p className='text-neutral-600'>For businesses and teams who need powerful tools.</p>
                        <hr className='w-full mb-5 mt-5 border border-neutral-200' />
                        <ul className='flex flex-col gap-3'>
                            <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Everything in Pro</li>
                            <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Team collaboration features</li>
                            <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Custom AI workflows</li>
                            <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Admin dashboard & permissions</li>
                            <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Unlimited cloud storage</li>
                            <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Dedicated account manager</li>
                        </ul>
                        <button className='mt-7 bg-black px-5 py-2 text-white border-none rounded-sm w-full cursor-pointer font-semibold hover:opacity-80'>Let's talk</button>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
