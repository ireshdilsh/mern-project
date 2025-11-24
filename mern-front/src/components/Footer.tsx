import React from 'react'
import '../styles/landing.css'

export default function footer() {
    return (
        <div className='flex flex-col justify-center bg-black text-white -mt-4 pt-16 pb-10 px-35 w-full'>
           <div className='flex justify-center gap-25 pb-15 border-b border-b-white'>
             <div className='flex flex-col'>
                <h2 className='logo text-xl font-medium text-white'>MemoraAI</h2>
                <p className='text-white'>AI-powered tools to save, organize, and enhance your digital memories.</p>
            </div>
           
           {/* Quick Links */}
           <div className='flex flex-col w-40'>
                <h1 className='text-xl mb-5 font-semibold'>Quick Links</h1>
                <div className='flex flex-col gap-3'>
                    <a href="">Home</a>
                    <a href="">Features</a>
                    <a href="">How it works</a>
                    <a href="">Pricing</a>
                    <a href="">About</a>
                    <a href="">Gallery</a>
                </div>
            </div>

            {/* support link */}
            <div className='flex flex-col w-50'>
                <h1 className='text-xl mb-5 font-semibold'>Support</h1>
                <div className='flex flex-col gap-3'>
                    <a href="">Help & FAQ</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">Cookie Policy</a>
                    <a href="">Status Page</a>
                    <a href="">Get in Touch</a>
                </div>
            </div>

            {/* NewsLetter for */}
            <div className='flex flex-col'>
                <h1 className='text-xl mb-5 font-semibold'>Stay Updated With MemoraAI</h1>
                <p className='text-white mb-5'>Subscribe to our newsletter to get the latest updates and offers.</p>
                <div className='flex items-center'>
                    <input className='px-3 py-2.5 rounded-l-sm border-none outline-none bg-white text-black' type="text" placeholder='Enter your email' />
                    <button className='bg-blue-600 px-4 py-2.5 rounded-r-sm border-none font-medium text-white cursor-pointer hover:opacity-80'>Subscribe</button>
                </div>
            </div>
           </div>
              <div className='flex justify-between items-center w-full mt-10'>
                <p className='text-white'>&copy; 2024 MemoraAI. All rights reserved.</p>
                <div className='flex items-center gap-4'>
                    <img className='h-5 cursor-pointer' src="https://img.icons8.com/?size=100&id=118467&format=png&color=ffffff" alt="facebook" />
                    <img className='h-5 cursor-pointer' src="https://img.icons8.com/?size=100&id=A4DsujzAX4rw&format=png&color=ffffff" alt="twitter" />
                    <img className='h-5 cursor-pointer' src="https://img.icons8.com/?size=100&id=59813&format=png&color=ffffff" alt="instagram" />
                    <img className='h-5 cursor-pointer' src="https://img.icons8.com/?size=100&id=8808&format=png&color=ffffff" alt="linkedin" />
                </div>
              </div>
        </div>
    )
}
