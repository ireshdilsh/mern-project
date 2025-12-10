import { useState } from "react";

export default function HeroSection() {

    const [signin, setSignin] = useState(false)
    const [signup, setSignup] = useState(false)

    const openSigninModal = () => {
        setSignin(true)
        setSignup(false)
    }

    const openSignupModal = () => {
        setSignup(true)
        // setSignin(false)
    }

    const closeModals = () => {
        setSignin(false)
        setSignup(false)
    }

    return (
        <div className='px-15 w-full sm:px-25 lg:px-25'>
            <div className='flex justify-between items-center w-full mt-20'>
                <div className='flex flex-col gap-5 w-200'>
                    <h1 className='text-7xl font-normal tracking-tighter'>Turn Your Thoughts into Powerful Stories</h1>
                    <p className='text-neutral-500 text-lg'>Whether you're a beginner or a pro, our platform helps you craft engaging blog posts and grow your online presence effortlessly.</p>
                    <div className='flex justify-start items-center gap-2'>
                        <button onClick={openSignupModal} className='bg-black text-white px-5 py-2 cursor-pointer rounded-sm hover:opacity-80'>Create Account</button>
                        <button onClick={openSigninModal} className=' px-9 py-2 cursor-pointer border rounded-sm hover:shadow-2xl'>Write Now</button>
                    </div>
                </div>
                <div>
                </div>
            </div>

            {/*    Signin Modal Desgin */}
            {signup && (
                <div className='flex justify-center items-center bg-[rgb(0,0,0,0.5)] w-full h-full absolute left-0 top-0'>
                    <div className='p-10 bg-white w-150 rounded-sm shadow-2xl relative'>
                        <img src="https://img.icons8.com/?size=100&id=83149&format=png&color=000000" alt="close-icn" className='h-5 absolute top-6 right-6 cursor-pointer' onClick={closeModals} />
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <h1 className='text-2xl font-semibold tracking-tighter mt-2'>Join the Writing Community.</h1>
                            <p className='text-neutral-500 text-sm text-center'>Register now and explore a powerful space built for creators. Write, publish, and share your ideas with the world.</p>
                            <div className='flex justify-center items-center flex-col gap-3 w-full border-b border-b-neutral-300 pb-4'>
                                <div className='flex flex-col gap-1.5 w-90'>
                                    <label htmlFor="" className='text-sm font-normal'>Full Name</label>
                                    <input type="text" placeholder='Enter Full Name' className='border py-2 px-2 border-neutral-200 rounded-sm' />
                                </div>
                                <div className='flex flex-col gap-1.5 w-90'>
                                    <label htmlFor="" className='text-sm font-normal'>Email Address</label>
                                    <input type="text" placeholder='Email Address' className='border py-2 px-2 border-neutral-200 rounded-sm' />
                                </div>
                                <div className='flex flex-col gap-1.5 w-90'>
                                    <label htmlFor="" className='text-sm font-normal'>Create Password</label>
                                    <input type="password" placeholder='Password' className='border py-2 px-2 border-neutral-200 rounded-sm' />
                                </div>
                                <button className='bg-black text-white w-90 cursor-pointer py-2.5 rounded-sm hover:opacity-80'>Create Account</button>
                            </div>
                            <button className='w-90 border border-neutral-200 rounded-sm mt-2 flex justify-center items-center gap-2 py-2.5 cursor-pointer'>
                                <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="google-icn" className='h-5.5' />continue with google</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Signin modal */}
            {signin && (
                <div className='flex justify-center items-center bg-[rgb(0,0,0,0.5)] w-full h-full absolute left-0 top-0'>
                    <div className='p-10 bg-white w-150 rounded-sm shadow-2xl relative'>
                        <img src="https://img.icons8.com/?size=100&id=83149&format=png&color=000000" alt="close-icn" className='h-5 absolute top-6 right-6 cursor-pointer' onClick={closeModals} />
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <h1 className='text-2xl font-semibold tracking-tighter mt-2'>Login to Your Account.</h1>
                            <p className='text-neutral-500 text-sm text-center'>Access your dashboard, drafts, and published articles. Continue your blogging journey in one click.</p>
                            <div className='flex justify-center items-center flex-col gap-3 w-full border-b border-b-neutral-300 pb-4'>
                                <div className='flex flex-col gap-1.5 w-90'>
                                    <label htmlFor="" className='text-sm font-normal'>Email Address</label>
                                    <input type="text" placeholder='Email Address' className='border py-2 px-2 border-neutral-200 rounded-sm' />
                                </div>
                                <div className='flex flex-col gap-1.5 w-90'>
                                    <label htmlFor="" className='text-sm font-normal'>Password</label>
                                    <input type="password" placeholder='Password' className='border py-2 px-2 border-neutral-200 rounded-sm' />
                                </div>
                                <button className='bg-black text-white w-90 cursor-pointer py-2.5 rounded-sm hover:opacity-80'>Authenticate Now</button>
                            </div>
                            <button className='w-90 border border-neutral-200 rounded-sm mt-2 flex justify-center items-center gap-2 py-2.5 cursor-pointer'>
                                <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="google-icn" className='h-5.5' />continue with google</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
