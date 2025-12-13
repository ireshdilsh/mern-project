import React from 'react'
import logo from '../assets/logo.png';
import { useNavigate, type NavigateFunction } from 'react-router-dom';

export default function UserNavbar() {

    const navigate : NavigateFunction = useNavigate();

    const gotoWriteArticle = () => {
        navigate('/write/article');    
    }

    const gotoDashboard = () => {
        navigate('/dashboard');    
    }

    return (
        <div>
            <nav className='flex justify-between items-center px-25 py-4 border-b border-b-neutral-100'>
                <img src={logo} alt="Logo" className='h-8 cursor-pointer' onClick={gotoDashboard}/>
                <div className='flex justify-center items-center gap-7'>
                    <button onClick={gotoWriteArticle} className='flex justify-center items-center gap-2.5 text-sm text-neutral-500 cursor-pointer'>
                        <img src="https://img.icons8.com/?size=100&id=CoTsnH1VAqb5&format=png&color=999999"
                            className='h-5.5' alt="write-icn" />
                        Write
                    </button>
                    <button>
                        <img src="https://img.icons8.com/?size=100&id=S3ioWPXeIIPb&format=png&color=999999"
                            className='h-6 cursor-pointer'
                            alt="" />
                    </button>
                    <button className='bg-pink-600 text-white h-9 w-9 rounded-full text-sm flex justify-center items-center gap-2.5 hover:opacity-80 cursor-pointer'>
                        ID
                    </button>
                </div>
            </nav>
        </div>
    )
}

