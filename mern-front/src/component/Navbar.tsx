import {useEffect, useState} from 'react'
import logo from '../assets/logo.png'
import '../styles/navbar.css'
import {useNavigate, type NavigateFunction} from 'react-router-dom'
import type {GoogleUser} from '../types/GoogleUser'

export default function Navbar() {

    const navigate: NavigateFunction = useNavigate()

    const gotoWritePage = (): void => {
        navigate('/write/page')
    }

    const gotoNotificationsPage = (): void => {
        navigate('/notification/page')
    }

    const gotoDashboard = (): void => {
        navigate('/dashboard')
    }

    const [user, setUser] = useState<GoogleUser | null>(null)

    useEffect(() => {
        const storedUser = localStorage.getItem('googleUser')
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, []);

    const [showProfile, setShowProfile] = useState<boolean>(false)

    const openProfile = () => {
        setShowProfile(!showProfile)
    }

    const closeProfile = () => {
        setShowProfile(!showProfile)
    }

    return (
        <div className='flex justify-center items-center flex-col w-full' id='navbar-page'>
            <nav className='flex justify-between items-center w-full px-50 border-b border-b-neutral-100 py-2.5'>
                <div className='flex justify-center items-center gap-8'>
                    <img src={logo} alt="navbar-logo" className='h-12 cursor-pointer' onClick={gotoDashboard}/>
                    <div className='flex justify-center items-center relative'>
                        <img src="https://img.icons8.com/?size=100&id=59878&format=png&color=a3a3a3" alt="search-icon"
                             className='h-6 absolute right-6 cursor-pointer'/>
                        <input type="text" placeholder='Search here ...'
                               className='bg-neutral-100 h-11 w-85 rounded-4xl px-5 outline-none pr-15'/>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-8'>
                    <div onClick={gotoWritePage} className='flex justify-center items-center gap-2 cursor-pointer'>
                        <img src="https://img.icons8.com/?size=100&id=kZ0eCZEs0tfC&format=png&color=000000" alt=""
                             className='h-5'/>
                        <p className='text-sm'>Write</p>
                    </div>
                    <img onClick={gotoNotificationsPage}
                         src="https://img.icons8.com/?size=100&id=62atSgaif9UE&format=png&color=000000"
                         className='h-5 cursor-pointer' alt=""/>
                    <div className='flex justify-center items-center rounded-full h-10 w-10 bg-red-500 cursor-pointer'
                         onClick={openProfile}>
                        <p className='text-base font-medium text-white'>{user?.name.substring(0, 2).toUpperCase()}</p>
                    </div>
                </div>
            </nav>

            {showProfile && (
                <div className='border border-neutral-100 rounded-sm shadow-sm absolute right-50 bg-white p-5 top-17'>
                    <img src="https://img.icons8.com/?size=100&id=83149&format=png&color=000000" alt="close-img"
                         onClick={closeProfile} className='h-5 cursor-pointer absolute right-2.5 top-3'/>
                    <div className='flex justify-center gap-4 mt-5 border-b border-b-neutral-200 pb-3'>
                        <div
                            className='bg-red-500 text-white font-bold flex justify-center items-center rounded-full w-11'>{user?.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                            <p className=''>{user?.name}</p>
                            <p className='text-sm'>{user?.email}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}