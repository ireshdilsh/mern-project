import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { useNavigate, type NavigateFunction } from 'react-router-dom';

export default function UserNavbar() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Modal, setModal] = useState(false);
    
    const navigate : NavigateFunction = useNavigate();

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

    const signOut = () => {
        localStorage.removeItem('auth:user');
        navigate('/');
    }

    const gotoWriteArticle = () => {
        navigate('/write/article');    
    }

    const gotoDashboard = () => {
        navigate('/dashboard');    
    }

    const gotoNotificationPage = () => {
        navigate('/user/notifications')
    }

    const openModal = () => {
        setModal(true)
    }   

    const closeModal = () => {
        setModal(false)
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
                    <button onClick={gotoNotificationPage}>
                        <img src="https://img.icons8.com/?size=100&id=S3ioWPXeIIPb&format=png&color=999999"
                            className='h-6 cursor-pointer'
                            alt="" />
                    </button>
                    <button onClick={openModal} className='bg-pink-600 text-white h-9 w-9 rounded-full text-sm flex justify-center items-center gap-2.5 hover:opacity-80 cursor-pointer'>
                        <p className='font-medium'>{name.substring(0,2).toLocaleUpperCase()}</p>
                    </button>
                </div>
            </nav>

            {Modal && (
                <>
                    <div className='fixed inset-0 z-40' onClick={closeModal}></div>
                    <div className='absolute right-10 top-20 bg-white shadow-2xl rounded-xl border border-neutral-200 w-80 z-50'>
                        <div className='p-6'>
                            <button 
                                onClick={closeModal}
                                className='absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer'
                            >
                                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            </button>
                            
                            <div className='flex items-center gap-4 pb-5 border-b border-neutral-200'>
                                <div className='w-14 h-14 bg-pink-600 text-white rounded-full text-lg font-semibold flex items-center justify-center'>
                                    {name.substring(0,2).toUpperCase()}
                                </div>
                                <div className='flex-1 min-w-0'>
                                    <p className='font-semibold text-neutral-900 truncate'>{name}</p>
                                    <p className='text-sm text-neutral-600 truncate'>{email}</p>
                                </div>
                            </div>
                            
                            <div className='py-4 space-y-1'>
                                <button 
                                    onClick={() => { gotoDashboard(); closeModal(); }}
                                    className='w-full text-left px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-100 rounded-lg transition-all cursor-pointer flex items-center gap-3'
                                >
                                    <svg className='w-5 h-5 text-neutral-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
                                    </svg>
                                    <span>Dashboard</span>
                                </button>
                                <button 
                                    onClick={() => { gotoWriteArticle(); closeModal(); }}
                                    className='w-full text-left px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-100 rounded-lg transition-all cursor-pointer flex items-center gap-3'
                                >
                                    <svg className='w-5 h-5 text-neutral-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
                                    </svg>
                                    <span>Write Article</span>
                                </button>
                                <button 
                                    onClick={() => { gotoNotificationPage(); closeModal(); }}
                                    className='w-full text-left px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-100 rounded-lg transition-all cursor-pointer flex items-center gap-3'
                                >
                                    <svg className='w-5 h-5 text-neutral-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' />
                                    </svg>
                                    <span>Notifications</span>
                                </button>
                            </div>
                            
                            <div className='pt-4 border-t border-neutral-200'>
                                <button 
                                    onClick={signOut} 
                                    className='w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-all cursor-pointer flex items-center gap-3'
                                >
                                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
                                    </svg>
                                    <span>Sign Out</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
