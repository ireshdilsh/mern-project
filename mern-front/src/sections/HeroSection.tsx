import '../styles/landing.css'
import heroImage from '../assets/hero.png'

export default function HeroSection() {
  return (
    <div className='w-full' id='hero-bg'>
      <img src={heroImage} className='bg-cover object-cover w-full h-160 absolute -z-10' alt="" />
      <nav className='flex justify-between items-center w-full px-35 pt-16'>
        <div className="logo">
          MemoraAI
        </div>
        <div className='flex justify-center items-center gap-6'>
          <a href="">Home</a>
          <a href="">Features</a>
          <a href="">How it works</a>
          <a href="">Pricing</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Sign in</a>
        </div>
      </nav>
      <div className='flex justify-center items-center flex-col pb-35 mt-20'>
        <h1 className='text-7xl font-semibold text-center'>Smarter Memory <br />Keeping Starts Here.</h1>
        <p className='text-lg mt-5'>Organize, sort, and relive your memories instantly with AI-powered albums, stories, and highlight reels.</p>
        <div className='flex justify-center items-center gap-5 mt-10'>
          <button className='bg-black text-white px-5 py-3 font-semibold rounded-lg outline-none cursor-pointer'>Create Free Account</button>
          <button className='px-5 py-3 font-semibold rounded-lg outline-none cursor-pointer'>Watch Demo</button>
        </div>
      </div>
    </div>
  )
}
