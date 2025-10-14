import React, { useEffect, useState } from 'react'
import { useNavigate, type NavigateFunction } from 'react-router-dom'
import logo from '../assets/logo.png'
import axios from 'axios'

export default function Dashboard() {

  const navigate: NavigateFunction = useNavigate()

  const [profilePopup, setProfilePopup] = useState<boolean>(false)

  const [googleUser, setGoogleUser] = useState<{ name: string; email: string; picture: string } | null>(null);

  useEffect(() => {
    loadProfile()
    loadAllArticles()
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

  const [articles, setArticles] = useState<any[]>([])

  const loadAllArticles = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/api/v1/article/get/all/published/articles")
      setArticles(resp.data.articles)  // Changed from resp.data.data to resp.data.articles
      console.log(resp.data, "articles loaded")
    } catch (error) {
      console.error("Error loading articles:", error);
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
          <div onClick={() => { setProfilePopup(true) }} className='bg-pink-600 h-9 w-9 rounded-4xl flex justify-center items-center cursor-pointer'><p className='text-xl text-white font-medium'>{googleUser?.name.charAt(0)}</p></div>
        </div>
      </nav>

      <div className='bg-neutral-100 p-6 rounded-sm mt-5 mb-5 ml-80 mr-80'>
        <p className='text-sm font-medium'>We’ve made some improvements to how you keep track of your favorite content and creators.
          Your “Following” list and saved topics are now combined into the new Following Page, giving you a single place to explore all the updates you care about. </p>
      </div>

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
            <p className=' text-gray-600 mt-5 cursor-pointer font-normal flex justify-center items-center gap-2.5' onClick={() => { navigate('/help-center') }}><img src="https://img.icons8.com/?size=100&id=646&format=png&color=99a1af" className=' h-5 mt-1' alt="" />Help</p>
            <p className=' text-gray-600 cursor-pointer font-medium bg-neutral-100 w-62 pt-2 pb-2 rounded-sm mt-10  flex justify-center items-center gap-2.5 text-center' onClick={() => { localStorage.removeItem("googleUser"); setGoogleUser(null); navigate('/'); setProfilePopup(false) }}> <img src="https://img.icons8.com/?size=100&id=yYVvZRRwNT5v&format=png&color=99a1af" alt="" className='h-5 mt-0.5' /> Sign out</p>
          </div>
        </div>
      )}

      <div className='flex gap-32'>
        <div className='pl-29'>
          {articles && articles.length > 0 ? (
            articles.map((blog, index) => (
              <div className='mt-10 max-w-4xl' key={blog._id || blog.id || index}>
                <div className='p-6 border-b border-b-gray-200'>
                  <h2 className='text-3xl font-semibold mb-3 text-gray-800 hover:text-black cursor-pointer'>{blog.title}</h2>
                  {blog.content && (
                    <p style={{ fontFamily: 'Gabarito' }} className='mt-4 text-gray-600 text-base leading-relaxed mb-4 line-clamp-3'>{blog.content}</p>
                  )}
                  <div className='flex items-center justify-between text-sm text-gray-500'>
                    <span>{blog.name || 'Anonymous'}</span>
                    <span>{blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : 'Recent'}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='flex justify-center items-center flex-col mt-30'>
              <h1 className='text-3xl text-gray-400 font-medium'>No Articles Found</h1>
              <p className='text-gray-500 mt-2'>Check if your backend server is running on port 5000</p>
              <img src="https://img.icons8.com/?size=100&id=45966&format=png&color=99a1af" alt="" className='h-30 mt-5' />
            </div>
          )}
        </div>
        <div className='w-80 border-l border-gray-200'></div>
      </div>

    </div>
  )
}
