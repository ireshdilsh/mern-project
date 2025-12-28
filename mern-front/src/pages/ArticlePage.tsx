import React, { type FormEvent, useEffect, useState } from 'react'
import UserNavbar from '../components/UserNavbar'
import axios from "axios";
import Swal from 'sweetalert2';

export default function ArticlePage() {

  const [imagePreview, setImagePreview] = useState<string | undefined>();
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const authUser = localStorage.getItem('auth:user');
    if (authUser) {
      const userData = JSON.parse(authUser);
      if (userData.name) {
        setName(userData.name);
        localStorage.setItem('name', userData.name);
      }
      if (userData.email) {
        setEmail(userData.email);
        localStorage.setItem('email', userData.email);
      }
    }
  }, []);


  const postNewArticle = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData()

      formData.append('name', name)
      formData.append('email', email)
      formData.append("title", title)
      formData.append("content", content)

      if (imageFile) {
        formData.append("file", imageFile)
      }

      console.log('Sending with field name: "file"')

      const resp = await axios.post(
        "http://localhost:5000/api/v1/articles/create/article/with/image",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log('Response data:', resp.data);
      successMsg()

      setTitle('')
      setContent('')
      setImagePreview(undefined)
      setImageFile(null)
    } catch (e: unknown) {
      console.error('Full error:', e);
      alert('Error: ' + ('something went wrong while posting the article'))
    } finally {
      setIsLoading(false);
    }
  }

  const successMsg = () => {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      }
      reader.readAsDataURL(file);
    }
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }

  return (
    <div>
      <UserNavbar />
      <div className='flex flex-col justify-center items-center px-40 mt-15 gap-7'>
        <input onChange={handleTitleChange} value={title} type="text" placeholder='Title' className='text-5xl w-200 outline-none text-[#333]' id='write-title' />
        <img src={imagePreview} className='' alt="" />
        <div className='flex gap-4'>
          <button className='h-8'>
            <label htmlFor="file-input">
              <img src="https://img.icons8.com/?size=100&id=24717&format=png&color=999999" className='h-8 cursor-pointer' alt="" />
            </label>
          </button>
          <input type="file" id="file-input" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
          <textarea onChange={handleContentChange} value={content} name="" id="" className='write-content text-2xl w-212 h-90 outline-none' placeholder='Tell your story ....'></textarea>
        </div>
        <button
          onClick={postNewArticle}
          disabled={isLoading}
          className='bg-green-700 text-white font-medium text-sm px-2.5 py-1 rounded-4xl cursor-pointer absolute right-54 top-5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2'
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-25" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Publishing...
            </>
          ) : (
            'Publish'
          )}
        </button>
      </div>
    </div>
  )
}
