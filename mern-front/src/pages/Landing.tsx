import logo from '../assets/logo.png'
import bgImg from '../assets/bg-img.png'
import '../styles/landing.css'
import { useNavigate, type NavigateFunction } from 'react-router-dom'
export default function Landing() {

  const navigate: NavigateFunction = useNavigate();

  const gotoRegisterPage = (): void => {
    navigate('/create/account');
  }

  const gotoLoginPage = (): void => {
    navigate('/login/user/account');
  }

  return (
    <div id='landing-page' className='flex justify-center items-center flex-col '>
      <nav className='flex justify-between items-center w-full mt-4'>
        <img src={logo} alt="logo" className='h-18 ml-50' />
        <div className='flex justify-center items-center gap-5 mr-50'>
          <a className='font-normal z-10' href="#hero">Home</a>
          <a className='font-normal' href="#">Topics</a>
          <a className='font-normal' href="#">Trending</a>
          <a className='font-normal' href="#">Publish</a>
          <a className='font-normal' href="#">Community</a>
          <a className='font-normal cursor-pointer' onClick={() => navigate('/resources')}>Resources</a>
          <a className='font-normal cursor-pointer' onClick={() => navigate('/about')}>About</a>
        </div>
      </nav>

      <section id='hero' className='flex justify-center items-center flex-col mt-33 px-50 relative'>
        <h1 className='text-7xl font-medium tracking-tighter leading-20 text-center'>Empowering <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent'>Developers to Share, Learn,</span> and Innovate.</h1>
        <p className=' text-neutral-500 text-center text-lg mt-4'>DevForum is a dedicated space for programmers and IT professionals to publish ideas, explore the latest tech trends, and connect with a global community of passionate developers. Share your knowledge, inspire others, and grow together in the ever-evolving world of technology.</p>
        <div className='flex justify-center items-center gap-8 mt-8'>
          <button onClick={gotoRegisterPage} className='bg-black text-xl text-white border-none z-10 rounded-4xl cursor-pointer px-10 py-3 font-medium w-52'>Join Now</button>
          <button onClick={gotoLoginPage} className='cursor-pointer text-xl font-normal z-10'>Start Reading</button>
        </div>
        <div className='h-100 w-100 rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto' id='gradient-border'>
          <div className='h-15 w-15 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 absolute top-10 left-30 blur-3xl'></div>
          <div className='h-15 w-15 rounded-full bg-gradient-to-r from-purple-600 to-red-600 absolute bottom-10 right-30 blur-3xl'></div>
        </div>
      </section>

      <img src={bgImg} className='h-80 opacity-5 absolute right-50 top-25 left-120 bottom-50' alt="" />
    </div>
  )
}
