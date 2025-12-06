import hero_img from '../assets/Hero section.png'
import logo from '../assets/CTRMaker__1_-removebg-preview (1).png'
import '../styles/landing.css'

export default function LandingPage() {
  return (
    <div>
        <img src={hero_img} alt="hero-img" className='object-cover h-174 bg-cover w-full'/>
        <div className='absolute left-0 top-0 h-full w-full' id='bg-overlay'>
            <h1 className='text-6xl text-white absolute bottom-30 left-20 font-medium tracking-tight' id='hero-title'>Create Stunning AI Images <br/> in Seconds.</h1>
            <p className='text-neutral-200 text-sm w-70 absolute bottom-30 right-20 text-justify'>Turn your ideas into high-quality, visually striking images with powerful AI.
                Simply type your prompt, pick a style, and watch your imagination come to life—instantly.</p>
            <hr className='h-10/4000 bg-neutral-50 w-340 absolute bottom-15 left-20 border-none'/>
        </div>
        <nav className='flex justify-between items-center w-380 absolute top-5 left-0 px-20'>
            <div className='flex items-center justify-center gap-2'>
                <img src={logo} alt="logo" className='h-6'/>
                <h1 className='text-lg text-neutral-50 font-semibold'>stability.ai</h1>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <a className='font-semibold text-sm text-neutral-50' href="">Home</a>
                <a className='font-semibold text-sm text-neutral-50' href="">Features</a>
                <a className='font-semibold text-sm text-neutral-50' href="">Models</a>
                <a className='font-semibold text-sm text-neutral-50' href="">Legal & License</a>
                <a className='font-semibold text-sm text-neutral-50' href="">Company</a>
                <a className='font-semibold text-sm text-neutral-50' href="">Deployment</a>
                <a className='font-semibold text-sm text-neutral-50' href="">Applications</a>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <button className='text-neutral-50 font-medium text-sm cursor-pointer px-6 py-2.5'>Sign in</button>
                <button className='font-semibold text-sm cursor-pointer bg-neutral-50 px-6 py-2.5 hover:opacity-85'>Create Now</button>
            </div>
        </nav>
        <hr className='h-10/4000 bg-neutral-50 w-340 absolute top-20 left-20 border-none'/>
    </div>
  )
}
