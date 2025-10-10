import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate, type NavigateFunction } from 'react-router-dom'

export default function TermsService() {

    const navigate: NavigateFunction = useNavigate()

    return (
        <div className='flex flex-col justify-left items-start '>
            <nav className='pl-40 pr-40 pt-4 pb-4 border-b-3 border-green-500 w-full flex justify-between items-center'>
                <img src={logo} alt="" className='h-12' onClick={()=>{navigate('/')}}/>
                <button className='flex items-center gap-2 text-gray-500 cursor-pointer'><img src="https://img.icons8.com/?size=100&id=NNvh71bQhaH2&format=png&color=99a1af" alt="" className='h-5'/>write</button>
            </nav>

            <h1 className='pl-40 pr-40 border-b border-gray-100 w-full font-medium text-xl pt-3.5 pb-3.5' onClick={()=>{navigate('/')}}>currents. policy</h1>

            <div className='-mt-5 pl-40 pr-40'>
                <h1 className='mt-15 text-5xl font-bold tracking-tighter'>currents. Terms of Service</h1>
                <p className='text-2xl text-gray-400 mt-2'>Effective: September 1, 2020</p>
                <p className='text-sm text-gray-400 mt-1.5'>12 min read · Sep 2, 2020</p>
            </div>
        </div>
    )
}
