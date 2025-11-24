import '../styles/landing.css'
import heroImage from '../assets/hero.png'
import { useState } from 'react';

export default function HeroSection() {

  const [openSignInModal, setOpenSignInModal] = useState<boolean>(false);
  const [openSignUpModal, setOpenSignUpModal] = useState<boolean>(false);

  // has implment navigations
  const navigateModalSignUp = (): void => {
    setOpenSignInModal(false);
    setOpenSignUpModal(true);
  }

  const navigateModalSignIn = (): void => {
    setOpenSignUpModal(false);
    setOpenSignInModal(true);
  }

  return (
    <div className='w-full' id='hero-bg'>
      <img src={heroImage} className='bg-cover object-cover w-full h-160 absolute -z-10' alt="" />
      <nav className='flex justify-between items-center w-full px-35 pt-16'>
        <div className="logo">
          MemoraAI
        </div>
        <div className='flex justify-center items-center gap-6'>
          <a href="">Home</a>
          <a href="">Features</a>
          <a href="">How it works</a>
          <a href="">Pricing</a>
          <a href="">About</a>
          <a href="">Gallery</a>
          <p className = 'cursor-pointer' onClick={() => { setOpenSignInModal(true) }}>Sign in</p>
        </div>
      </nav>
      <div className='flex justify-center items-center flex-col pb-35 mt-29'>
        <h1 className='text-7xl font-semibold text-center'>Smarter Memory <br />Keeping Starts Here.</h1>
        <p className='text-lg mt-5'>Organize, sort, and relive your memories instantly with AI-powered albums, stories, and highlight reels.</p>
        <div className='flex justify-center items-center gap-5 mt-10'>
          <button onClick={()=>{setOpenSignUpModal(true)}} className='bg-black text-white px-5 py-3 font-semibold rounded-lg outline-none cursor-pointer hover:opacity-80'>Create Free Account</button>
          <button className='px-5 py-3 font-semibold rounded-lg outline-none cursor-pointer flex justify-center items-center gap-4'>
            Watch Demo
            <img src="https://img.icons8.com/?size=100&id=n2C7Bts7cbWW&format=png&color=000000" className='h-4' alt="" />
          </button>
        </div>
      </div>

      {/* Sign in modal */}
      {openSignInModal && (
        <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center' id='modal-overlay'>
            <div className='bg-white py-12 px-15 w-120 flex justify-center items-center flex-col rounded-lg'>
              <img onClick={()=>{setOpenSignInModal(false)}} className='h-4 cursor-pointer -mr-100 -mt-6' src="https://img.icons8.com/?size=100&id=88571&format=png&color=000000" alt="close-icn" />
              <h1 className='text-3xl font-semibold mt-5'>Good to See You Again !</h1>
              <p className='text-neutral-500 text-center mt-3'>Enter your details to reconnect with your memories and tools instantly.</p>
              <button className='cursor-pointer mt-7 mb-5 border border-neutral-400 rounded-sm w-full py-2 font-bold text-neutral-700 flex justify-center items-center gap-5'><img className='h-6' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" />Continue with google</button>
              <div className='flex justify-center items-center gap-4 mt-3.5'>
                <p className='text-neutral-700'>If you haven't an account ?</p>
                <p onClick={navigateModalSignUp} className='text-blue-500 cursor-pointer'>Sign up</p>
              </div>
              <p className='text-neutral-500 mt-5 text-center' style={{fontSize:'12px'}}>By clicking "Sign in", you accept Medium's Terms of Service and Privacy Policy.</p>
            </div>
        </div>
      )}

      {/* Sign up modal */}
      {openSignUpModal && (
        <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center' id='modal-overlay'>
            <div className='bg-white py-12 px-15 w-120 flex justify-center items-center flex-col rounded-lg'>
              <img onClick={()=>{setOpenSignUpModal(false)}} className='h-4 cursor-pointer -mr-100 -mt-6' src="https://img.icons8.com/?size=100&id=88571&format=png&color=000000" alt="close-icn" />
              <h1 className='text-3xl font-semibold mt-5'>Start Your Journey !</h1>
              <p className='text-neutral-500 text-center mt-3'>Sign up in seconds and unlock powerful features to organize your digital life.</p>
              <button className='cursor-pointer mt-7 mb-5 border border-neutral-400 rounded-sm w-full py-2 font-bold text-neutral-700 flex justify-center items-center gap-5'><img className='h-6' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" />Continue with google</button>
              <div className='flex justify-center items-center gap-4 mt-3.5'>
                <p className='text-neutral-700'>If you have an account ?</p>
                <p onClick={navigateModalSignIn} className='text-blue-500 cursor-pointer'>Sign in</p>
              </div>
              <p className='text-neutral-500 mt-5 text-center' style={{fontSize:'12px'}}>By clicking "Sign up", you accept Medium's Terms of Service and Privacy Policy.</p>
            </div>
        </div>
      )}
    </div>
  )
}
