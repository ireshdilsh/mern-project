import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import '../styles/write.css'
import type { Article } from '../types/Article'
import axios from 'axios'
import type { GoogleUser } from '../types/GoogleUser'
import Swal from 'sweetalert2'

export default function Write() {

  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [user, setUser] = useState<GoogleUser | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('googleUser')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, []);

  const publishedArticle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const article: Article = {
      title: title,
      content: content,
      name: user?.name || "undefined",
      email: user?.email || "undefined@mail,com",
      date: new Date().toISOString()
    }

    try {
      const resp = await axios.post('http://localhost:5000/api/v1/article/publish/new/article', article)
      console.log(resp.data);
      Swal.fire({
        title: "Good job!",
        text: "Article publish successfully!",
        icon: "success"
      });
      setTitle('')
      setContent('')
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
      setTitle('')
      setContent('')
      console.log("Something Wrong ", error);
    }
  }

  return (
    <div className='flex justify-center items-center flex-col' id='write-page'>
      <Navbar />
      <button
        onClick={publishedArticle}
        className='bg-green-700 text-white text-sm px-2 rounded-4xl font-semibold py-0.5 cursor-pointer absolute top-6 left-262 hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed'
      >
        Publish
      </button>

      <div className='w-full flex justify-center items-start flex-col px-100 mt-20'>
        
        <input
          type="text"
          className='text-4xl h-15 w-full outline-none mt-5'
          placeholder='Title'
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
        />
        <textarea
          className='w-full mt-10 text-2xl outline-none h-80'
          placeholder='Tell us your story ...'
          value={content}
          onChange={(e) => { setContent(e.target.value) }}
        ></textarea>
      </div>
    </div>
  )
}