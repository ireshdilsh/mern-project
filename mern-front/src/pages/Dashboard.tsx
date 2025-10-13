import React, { useEffect, useState } from 'react'
import { useNavigate, type NavigateFunction } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Dashboard() {

  const navigate: NavigateFunction = useNavigate()

  const [profilePopup, setProfilePopup] = useState<boolean>(false)

  const [googleUser, setGoogleUser] = useState<{ name: string; email: string; picture: string } | null>(null);

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

  return (
    <div className='flex flex-col justify-center items-center'>
      <nav className='pl-40 pr-40 pt-4 pb-4 border-b border-gray-200 w-full flex justify-between items-center'>
        <div className='flex justify-center items-center gap-8'>
          <img src={logo} alt="" className='h-11' />
          <input type="text" className='bg-neutral-100 outline-none h-11 w-56 rounded-4xl pl-6 pr-6' placeholder='search' />
        </div>
        <div className='flex gap-7 items-center justify-center'>
          <button onClick={() => { navigate('/write') }} className='flex items-center gap-2 text-gray-500 cursor-pointer text-sm'><img src="https://img.icons8.com/?size=100&id=NNvh71bQhaH2&format=png&color=99a1af" alt="" className='h-5.5' />Write</button>
          <img src="https://img.icons8.com/?size=100&id=eMfeVHKyTnkc&format=png&color=99a1af" alt="" className='h-5.5 cursor-pointer' onClick={() => { navigate('/notification') }} />
          <div onClick={()=>{setProfilePopup(true)}} className='bg-pink-600 h-9 w-9 rounded-4xl flex justify-center items-center cursor-pointer'><p className='text-xl text-white font-medium'>{googleUser?.name.charAt(0)}</p></div>
        </div>
      </nav>

      <div className='bg-neutral-100 p-6 rounded-sm mt-5 mb-5 ml-80 mr-80'>
        <p className='text-sm font-medium'>We’ve made some improvements to how you keep track of your favorite content and creators.
          Your “Following” list and saved topics are now combined into the new Following Page, giving you a single place to explore all the updates you care about. </p>
      </div>

    {profilePopup &&(
      <div className='border border-gray-200 absolute top-19 right-30 rounded-sm bg-white'>
        <div className='pl-4 pr-4 pt-2 pb-4 cursor-pointer flex justify-center items-center flex-col'>
          <img src="https://img.icons8.com/?size=100&id=83149&format=png&color=000000" className='h-5 absolute top-6 right-5 cursor-pointer' onClick={() => { setProfilePopup(false) }} alt="" />
          <img src={googleUser?.picture ? googleUser.picture : googleUser?.name.charAt(0)} alt="" className='mt-10 h-10 w-10 rounded-full' />
          <p className=' text-gray-500 font-medium mt-2.5'>{googleUser?.email}</p>
          <p className='text-sm text-gray-500'>{googleUser?.name}</p>
          <hr className='w-full border border-gray-200 mt-4 mb-4' />
          <p className=' text-gray-600 mt-3 cursor-pointer font-normal flex justify-center items-center gap-2.5'><img src="https://img.icons8.com/?size=100&id=84040&format=png&color=99a1af" className=' h-5' alt="" />Settings</p>
          <p className=' text-gray-600 cursor-pointer font-medium bg-neutral-100 w-62 pt-2 pb-2 rounded-sm mt-10  flex justify-center items-center gap-2.5 text-center' onClick={() => { localStorage.removeItem("googleUser"); setGoogleUser(null); navigate('/'); setProfilePopup(false) }}> <img src="https://img.icons8.com/?size=100&id=yYVvZRRwNT5v&format=png&color=99a1af" alt="" className='h-5 mt-0.5'/> Sign out</p>
        </div>
      </div>
    )}
    </div>
  )
}
