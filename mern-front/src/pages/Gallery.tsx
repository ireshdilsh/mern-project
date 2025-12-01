import React from 'react'
import img_1 from '../assets/gallery/codeing-1.jpg'
import img_2 from '../assets/gallery/coding-2.jpg'
import img_3 from '../assets/gallery/coding-3.jpg'
import img_4 from '../assets/gallery/coding-4.jpg'
import img_5 from '../assets/gallery/coding-5.png'
import img_6 from '../assets/gallery/culture-of-japan-hd-wallpaper-wallpaper-preview.jpg'

export default function Gallery() {
  return (
    <div className='px-35 flex flex-col justify-center items-center mt-13 gap-3'>
        <div className='flex justify-center gap-3'>
            <img src={img_1} className='w-120 h-120  object-cover rounded-lg' alt="" />
            <img src={img_2} className='w-120 h-90 object-cover rounded-lg' alt="" />
            <img src={img_3} className='w-120 object-cover rounded-lg' alt="" />
        </div>
         <div className='flex justify-center gap-3'>
            <img src={img_4} className='w-120 object-cover rounded-lg' alt="" />
            <img src={img_5} className='w-120 h-90 object-cover -mt-30 rounded-lg' alt="" />
            <img src={img_6} className='w-120 object-cover rounded-lg' alt="" />
        </div>
    </div>
  )
}
