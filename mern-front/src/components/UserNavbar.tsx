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
                <div className='p-5 bg-white shadow-2xl w-65 absolute right-10 top-16 rounded-sm flex justify-start items-start flex-col'>
                    <img src="https://img.icons8.com/?size=100&id=83149&format=png&color=000000" alt="close-button" className='h-4 absolute right-4 top-4 cursor-pointer' onClick={closeModal}/>
                    <div className='flex justify-center items-start flex-col mt-8 border-b border-b-neutral-200 pb-4 w-full'>
                        <p>{email}</p>
                        <p className='text-sm text-neutral-600'>{name}</p>
                    </div>
                    <button onClick={signOut} className='text-sm mt-5 cursor-pointer'>Sign Out</button>
                </div>
            )}
        </div>
    )
}
