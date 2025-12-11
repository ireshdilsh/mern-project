import React, { type FormEvent, useState } from 'react'
import UserNavbar from '../components/UserNavbar'
import axios from "axios";

export default function ArticlePage() {

  const [imagePreview, setImagePreview] = useState<string | undefined>();
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const postNewArticle = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData()
      const name: string = 'iresh dilshan'
      const email: string = 'iresh@example.com'
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
      alert('Article posted successfully!')

      setTitle('')
      setContent('')
      setImagePreview(undefined)
      setImageFile(null)
    } catch (e: any) {
      console.error('Full error:', e);
      console.error('Error response:', e.response?.data);
      alert('Error: ' + (e.response?.data?.message || 'something went wrong while posting the article'))
    }
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
        <button onClick={postNewArticle} className='bg-green-700 text-white font-medium text-sm px-2.5 py-1 rounded-4xl cursor-pointer absolute right-54 top-5'>Publish</button>
      </div>
    </div>
  )
}
