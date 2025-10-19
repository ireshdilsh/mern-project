import React from 'react'
import logo from '../assets/logo.png'
import '../styles/register.css'
import { Link, useNavigate, type NavigateFunction } from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google'
import type {GoogleUser} from '../types/GoogleUser'
import axios from 'axios'

export default function Register() {

    const navigate: NavigateFunction = useNavigate()

    const gotoLandingPage = (): void => {
        navigate('/')
    }

    const register = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                // Fetch user info from Google API using the access token
                const userInfoResponse = await axios.get(
                    'https://www.googleapis.com/oauth2/v3/userinfo',
                    {
                        headers: {
                            Authorization: `Bearer ${tokenResponse.access_token}`
                        }
                    }
                );

                // Create user object from response
                const user: GoogleUser = {
                    name: userInfoResponse.data.name,
                    email: userInfoResponse.data.email,
                    picture: userInfoResponse.data.picture,
                };

                // Store in localStorage
                localStorage.setItem("googleUser", JSON.stringify(user));

                console.log("User saved:", user);

                // Navigate to dashboard
                navigate("/dashboard");
            } catch (error) {
                console.error("Error fetching user info:", error);
                alert("Login failed, please try again.");
            }
        },
        onError: () => {
            console.log("Login Failed");
            alert("Something went wrong");
        },
    });


    return (
        <div className='flex justify-center items-center' id='register-page'>
            <div className='flex justify-center items-center flex-col mt-20 w-150'>
                <img src={logo} className='h-20 cursor-pointer' alt="" onClick={gotoLandingPage} />
                <h1 className='text-4xl font-medium tracking-tighter mt-10'>Create <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent'>Your DevForum </span> Account</h1>
                <p className='text-neutral-500 mt-2.5 text-center'>Join DevForum to share your programming insights, connect with IT professionals, and grow within a developer-driven community.</p>
                <div className='flex flex-col mt-8 gap-3'>
                    <button onClick={() => { register() }} className='flex justify-center items-center gap-4 cursor-pointer border border-neutral-300 rounded-3xl w-100 text-neutral-700 py-2.5'><img src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000" alt="google-logo" className='h-7' /> Sign up with Google</button>
                    <button className='flex justify-center items-center gap-4 cursor-pointer border border-neutral-300 rounded-3xl w-100 text-neutral-700 py-2.5'><img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="facebook-logo" className='h-7' /> Sign up with Facebook</button>
                    <button className='flex justify-center items-center gap-4 cursor-pointer border border-neutral-300 rounded-3xl w-100 text-neutral-700 py-2.5'><img src="https://img.icons8.com/?size=100&id=of3VL9FKzJuz&format=png&color=000000" alt="email-logo" className='h-7' /> Sign up with Email</button>
                </div>
                <div className='flex justify-center items-center mt-8 gap-20'>
                    <p className='text-neutral-500'>If you already have an account ?</p>
                    <Link to='/login/user/account' className='text-blue-600 font-medium hover:underline underline-offset-1'>sign in here</Link>
                </div>
                <p className='text-neutral-400 font-normal mt-5 text-center' id='last'>By signing up, you confirm that you’ve read and agreed to our Terms of Service
                    and Privacy Policy.</p>
            </div>
        </div>
    )
}
