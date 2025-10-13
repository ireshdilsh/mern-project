import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { useNavigate, type NavigateFunction } from 'react-router-dom'
import '../styles/write.css'

export default function Write() {

  const [googleUser, setGoogleUser] = useState<{ name: string; email: string; picture: string } | null>(null);
  const [profilePopup, setProfilePopup] = useState<boolean>(false)

  useEffect(() => {
    loadProfile()
  }, []);

  const loadProfile = () => {
    const userData = localStorage.getItem("googleUser");
    console.log(userData)

    if (userData) {
      try {
        const user = JSON.parse(userData);
        setGoogleUser({
          name: user.name,
          email: user.email,
          picture: user.picture
        })
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("googleUser");
        setGoogleUser(null);
      }
    }

  }

  const navigate: NavigateFunction = useNavigate()

  const [dotsModal, setDotsModal] = useState<boolean>(false)

  return (
    <div id='write-page' className='flex justify-left items-start flex-col'>
      <nav className='flex justify-between items-center w-full pl-40 pr-40 pt-4 pb-4'>
        <div className='flex gap-6'>
          <img src={logo} alt="" className='h-11 cursor-pointer' onClick={() => { navigate('/dashboard') }} />
          <p className='text-sm'>Draft in Iresh Dilshan</p>
        </div>
        <div className='flex justify-center items-center gap-6'>
          <button className='bg-green-700 text-white text-sm rounded-4xl pl-2.5 pr-2.5 pt-0.5 pb-0.5 cursor-pointer hover:bg-green-800'>Publish</button>
          <img src="https://img.icons8.com/?size=100&id=36944&format=png&color=99a1af" className='h-5 cursor-pointer' alt="3-dots" onClick={() => { setDotsModal(true); setProfilePopup(false) }} />
          <img src="https://img.icons8.com/?size=100&id=eMfeVHKyTnkc&format=png&color=99a1af" className='h-5 cursor-pointer' alt="notification-icon" />
          <div className='bg-pink-600 h-9 w-9 rounded-4xl flex justify-center items-center cursor-pointer' onClick={() => { setProfilePopup(true); setDotsModal(false) }}><p className='text-xl text-white font-medium'>{googleUser?.name.charAt(0)}</p></div>
        </div>
      </nav>

      <div className='w-180 flex flex-col justify-left items-start ml-90 mr-100 mt-14 p-5' onClick={() => { setDotsModal(false) }}>
        <input type="text" className='w-190 text-5xl outline-none' placeholder='Title' />
        <textarea className='text-2xl w-190 outline-none mt-8 h-105' placeholder='Tell your story ...'></textarea>
      </div>

      {dotsModal && (
        <div className='w-60 border border-gray-200 absolute top-18 left-284 rounded-sm bg-white'>
          <div className='h-6 w-6 bg-white border border-gray-200 absolute -top-3 left-28 -z-10 rotate-45'></div>
          <div className='pl-4 pt-2 pb-4 cursor-pointer'>
            <p className='text-sm text-gray-500 mt-2.5 '>Submit to publication</p>
            <p className='text-sm text-gray-500 mt-3'>Share draft links</p>
            <p className='text-sm text-gray-500 mt-3'>Share to X</p>
            <p className='text-sm text-gray-500 mt-3'>Manage unlisted setting</p>
            <p className='text-sm text-gray-500 mt-3'>Change featured image</p>
            <p className='text-sm text-gray-500 mt-3'>Change display title / subtitle</p>
            <p className='text-sm text-gray-500 mt-3 '>Change topics</p>
            <p className='text-sm text-gray-500 mt-3 '>See revision history</p>
            <p className='text-sm text-gray-500 mt-3 '>More settings</p>
            <p className='text-sm text-gray-500 mt-3 '>Hints and keyboard shortcuts</p>
            <p className='text-sm text-gray-500 mt-3 '>More help</p>
          </div>
        </div>
      )}

      {profilePopup && (
        <div className='border border-gray-200 absolute top-19 right-30 rounded-sm bg-white'>
          <div className='pl-4 pr-4 pt-2 pb-4 cursor-pointer flex justify-center items-center flex-col'>
            <img src="https://img.icons8.com/?size=100&id=83149&format=png&color=000000" className='h-5 absolute top-6 right-5 cursor-pointer' onClick={() => { setProfilePopup(false) }} alt="" />
            <img src={googleUser?.picture ? googleUser.picture : googleUser?.name.charAt(0)} alt="" className='mt-10 h-10 w-10 rounded-full' />
            <p className=' text-gray-500 font-medium mt-2.5'>{googleUser?.email}</p>
            <p className='text-sm text-gray-500'>{googleUser?.name}</p>
            <hr className='w-full border border-gray-200 mt-4 mb-4' />
            <p className='text-gray-600 text-sm text-justify bg-neutral-50 p-4 rounded-sm'>Library, Stories, and Stats are now <br /> in the new sidebar, for easy access <br /> to all your favorite parts of Medium.</p>
            <p className=' text-gray-600 mt-5 cursor-pointer font-normal flex justify-center items-center gap-2.5'><img src="https://img.icons8.com/?size=100&id=84040&format=png&color=99a1af" className=' h-5' alt="" />Settings</p>
            <p className=' text-gray-600 mt-5 cursor-pointer font-normal flex justify-center items-center gap-2.5' onClick={()=>{navigate('/help-center')}}><img src="https://img.icons8.com/?size=100&id=646&format=png&color=99a1af" className=' h-5 mt-1' alt="" />Help</p>
            <p className=' text-gray-600 cursor-pointer font-medium bg-neutral-100 w-62 pt-2 pb-2 rounded-sm mt-10  flex justify-center items-center gap-2.5 text-center' onClick={() => { localStorage.removeItem("googleUser"); setGoogleUser(null); navigate('/'); setProfilePopup(false) }}> <img src="https://img.icons8.com/?size=100&id=yYVvZRRwNT5v&format=png&color=99a1af" alt="" className='h-5 mt-0.5' /> Sign out</p>
          </div>
        </div>
      )}

    </div>
  )
}
