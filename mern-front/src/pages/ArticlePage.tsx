import React, { useState } from 'react'
import UserNavbar from '../components/UserNavbar'

export default function ArticlePage() {

  const [imagePreview, setImagePreview] = useState<string | undefined>();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
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
          <input type="file" id="file-input" onChange={handleImageChange} style={{ display: 'none' }} />
          <textarea onChange={handleContentChange} value={content} name="" id="" className='write-content text-2xl w-212 h-90 outline-none' placeholder='Tell your story ....'></textarea>
        </div>
        <button className='bg-green-700 text-white font-medium text-sm px-2.5 py-1 rounded-4xl cursor-pointer absolute right-54 top-5'>Publish</button>
      </div>
    </div>
  )
}
