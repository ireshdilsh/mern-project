import React from 'react'
import logo from '../assets/logo.png'

export default function Register() {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col'>
                <img src={logo} className='h-20' alt="" />
                <h1>Create Your DevForum Account</h1>
                <p>Start your journey as a tech storyteller. Join DevForum to publish your programming insights, connect with IT professionals, and grow in a community built by developers, for developers.</p>
            </div>
        </div>
    )
}
