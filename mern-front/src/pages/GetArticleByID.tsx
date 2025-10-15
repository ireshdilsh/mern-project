import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, type NavigateFunction } from 'react-router-dom'
import logo from '../assets/logo.png'
import axios from 'axios'

export default function GetArticleByID() {

  const navigate: NavigateFunction = useNavigate()

  const { id } = useParams<{ id: string }>()
  const [article, setArticle] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [profilePopup, setProfilePopup] = useState<boolean>(false)

  const [googleUser, setGoogleUser] = useState<{ name: string; email: string; picture: string } | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const resp = await axios.get(`http://localhost:5000/api/v1/article/get/article/${id}`)
        setArticle(resp.data.article)
      } catch (error) {
        setError('Failed to load article.')
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchArticle()
  }, [id])

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

  useEffect(() => {
    loadProfile()
  }, []);

  if (loading) return <div className="p-8 text-gray-500">Loading...</div>
  if (error) return <div className="p-8 text-red-500">{error}</div>
  if (!article) return <div className="p-8 text-gray-500">No article found.</div>

  return (
    <div className="flex flex-col justify-center items-center">

      <nav className='pl-40 pr-40 pt-4 pb-4 border-b border-gray-200 w-full flex justify-between items-center'>
        <div className='flex justify-center items-center gap-8'>
          <img src={logo} alt="" className='h-11' />
          <input type="text" className='bg-neutral-100 outline-none h-11 w-70 rounded-4xl pl-6 pr-6' placeholder='search' />
        </div>
        <div className='flex gap-7 items-center justify-center'>
          <button onClick={() => { navigate('/write') }} className='flex items-center gap-2 text-gray-500 cursor-pointer text-sm'><img src="https://img.icons8.com/?size=100&id=NNvh71bQhaH2&format=png&color=99a1af" alt="" className='h-5.5' />Write</button>
          <img src="https://img.icons8.com/?size=100&id=eMfeVHKyTnkc&format=png&color=99a1af" alt="" className='h-5.5 cursor-pointer' onClick={() => { navigate('/notification') }} />
          <div onClick={() => { setProfilePopup(true) }} className='bg-pink-600 h-9 w-9 rounded-4xl flex justify-center items-center cursor-pointer'><p className='text-xl text-white font-medium'>{googleUser?.name.charAt(0)}</p></div>
        </div>
      </nav>

      <div className='flex flex-col justify-start items-start max-w-3xl mt-16'>
        <div style={{ fontFamily: 'Gabarito' }} className='mb-6 pl-2.5 pr-2.5 pt-1.5 pb-1.5 border border-neutral-200 rounded-sm text-sm text-gray-500 flex justify-center items-center gap-2.5'><img src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" className='h-4' alt="star-icon" /> Member only story</div>
        <h1 style={{ fontFamily: 'Gabarito' }} className="text-5xl font-bold mb-4 leading-14">{article.title}</h1>
        <div className="text-gray-500 mb-5 font-bold">by {article.name} • {new Date(article.date).toLocaleDateString()}</div>
        {article.image && (
          <img src={article.image} alt="Article" className="w-full h-64 object-cover rounded mb-6" />
        )}
        <div className="whitespace-pre-line text-xl mt-8 font-medium text-justify" style={{ fontFamily: 'GT Super Text' }}>{article.content}</div>
        <hr className='border-none bg-neutral-200 w-full h-0.25 mt-20' />
        <h1 className='text-3xl font-medium mt-15 mb-15 ' style={{ fontFamily: 'Gabarito' }}>Responses (55)</h1>
        <div className='flex justify-center items-center gap-5 mb-4'>
          <div className='bg-pink-600 h-9 w-9 rounded-4xl flex justify-center items-center cursor-pointer'><p className='text-xl text-white font-medium'>{googleUser?.name.charAt(0)}</p></div>
           <p className='' style={{ fontFamily: 'Gabarito' }}>{googleUser?.name}</p>
        </div>
        <textarea className='bg-neutral-100 p-5 w-full outline-none' style={{ fontFamily: 'Gabarito' }} placeholder='What are you thougts ?'/>
        <button style={{fontFamily:'Gabarito'}} className='bg-black text-white rounded-3xl px-4 text-sm py-2 mt-5 mb-10 cursor-pointer float-right'>Respond</button>
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

    </div>
  )
}