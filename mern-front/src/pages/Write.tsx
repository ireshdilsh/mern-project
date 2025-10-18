import React, { useRef, useState } from 'react'
import Navbar from '../component/Navbar'
import '../styles/write.css'

export default function Write() {

  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [preview, setPreview] = useState<string>('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      setPreview('')
      return
    }

    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/bmp']
    if (!validTypes.includes(file.type)) {
      alert('Please select a valid image file (JPEG, PNG, GIF, WebP, or BMP)')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Image size should be less than 5MB')
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      setPreview(result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className='flex justify-center items-center flex-col' id='write-page'>
      <Navbar />
      <button
        className='bg-green-700 text-white text-sm px-2 rounded-4xl font-semibold py-0.5 cursor-pointer absolute top-6 left-262 hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed'
      >
        Publish
      </button>

      <div className='w-full flex justify-center items-start flex-col px-100 mt-20'>
        <input
          ref={fileInputRef}
          type="file"
          id="image-upload"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />

        <label htmlFor="image-upload" className="mb-6 flex items-center gap-3 cursor-pointer">
          <img src="https://img.icons8.com/?size=100&id=24717&format=png&color=808080" alt="upload-icon" className="h-12" />
          <span className="text-gray-600 text-base hover:underline">Add featured image</span>
        </label>

        {preview ? (
          <div className="relative mb-4 w-full">
            <img src={preview} className='h-50 w-full object-cover rounded-md' alt="selected" id='selected-image' />
            <button
              onClick={() => {
                setPreview('')
                if (fileInputRef.current) {
                  fileInputRef.current.value = ''
                }
              }}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 cursor-pointer"
            >
              Remove
            </button>
          </div>
        ) : (
          <img src="" className='h-50 w-full object-cover rounded-md mb-4 hidden' alt="" id='selected-image' />
        )}

        <input
          type="text"
          className='text-4xl h-15 w-full outline-none mt-5'
          placeholder='Title'
        />
        <textarea
          className='w-full mt-10 text-2xl outline-none h-80'
          placeholder='Tell us your story ...'
        ></textarea>
      </div>
    </div>
  )
}