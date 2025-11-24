// import Footer from "../components/footer";
// import AboutSection from "../sections/AboutSection";
// import FeaturesSection from "../sections/FeaturesSection";
// import GallerySection from "../sections/GallerySection";
// import HeroSection from "../sections/HeroSection";
// import HowItWorks from "../sections/HowItWorks";
// import PricingSection from "../sections/PricingSection";
import '../styles/landing.css'
import heroImage from '../assets/hero.png'
import { useState } from 'react';

export default function Landing() {

  const [openSignInModal, setOpenSignInModal] = useState<boolean>(false);
  const [openSignUpModal, setOpenSignUpModal] = useState<boolean>(false);

  // has implment navigations
  const navigateModalSignUp = (): void => {
    setOpenSignInModal(false);
    setOpenSignUpModal(true);
  }

  const navigateModalSignIn = (): void => {
    setOpenSignUpModal(false);
    setOpenSignInModal(true);
  }

  return (
    <div>
      <section className='w-full' id='hero-bg'>
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
            <a href="">Gallery</a>
            <p className='cursor-pointer' onClick={() => { setOpenSignInModal(true) }}>Sign in</p>
          </div>
        </nav>
        <div className='flex justify-center items-center flex-col pb-35 mt-29'>
          <h1 className='text-7xl font-semibold text-center'>Smarter Memory <br />Keeping Starts Here.</h1>
          <p className='text-lg mt-5'>Organize, sort, and relive your memories instantly with AI-powered albums, stories, and highlight reels.</p>
          <div className='flex justify-center items-center gap-5 mt-10'>
            <button onClick={() => { setOpenSignUpModal(true) }} className='bg-black text-white px-5 py-3 font-semibold rounded-lg outline-none cursor-pointer hover:opacity-80'>Create Free Account</button>
            <button className='px-5 py-3 font-semibold rounded-lg outline-none cursor-pointer flex justify-center items-center gap-4'>
              Watch Demo
              <img src="https://img.icons8.com/?size=100&id=n2C7Bts7cbWW&format=png&color=000000" className='h-4' alt="" />
            </button>
          </div>
        </div>

        {/* Sign in modal */}
        {openSignInModal && (
          <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center' id='modal-overlay'>
            <div className='bg-white py-12 px-15 w-120 flex justify-center items-center flex-col rounded-lg'>
              <img onClick={() => { setOpenSignInModal(false) }} className='h-4 cursor-pointer -mr-100 -mt-6' src="https://img.icons8.com/?size=100&id=88571&format=png&color=000000" alt="close-icn" />
              <h1 className='text-3xl font-semibold mt-5'>Good to See You Again !</h1>
              <p className='text-neutral-500 text-center mt-3'>Enter your details to reconnect with your memories and tools instantly.</p>
              <button className='cursor-pointer mt-7 mb-5 border border-neutral-400 rounded-sm w-full py-2 font-bold text-neutral-700 flex justify-center items-center gap-5'><img className='h-6' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" />Continue with google</button>
              <div className='flex justify-center items-center gap-4 mt-3.5'>
                <p className='text-neutral-700'>If you haven't an account ?</p>
                <p onClick={navigateModalSignUp} className='text-blue-500 cursor-pointer'>Sign up</p>
              </div>
              <p className='text-neutral-500 mt-5 text-center' style={{ fontSize: '12px' }}>By clicking "Sign in", you accept Medium's Terms of Service and Privacy Policy.</p>
            </div>
          </div>
        )}

        {/* Sign up modal */}
        {openSignUpModal && (
          <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center' id='modal-overlay'>
            <div className='bg-white py-12 px-15 w-120 flex justify-center items-center flex-col rounded-lg'>
              <img onClick={() => { setOpenSignUpModal(false) }} className='h-4 cursor-pointer -mr-100 -mt-6' src="https://img.icons8.com/?size=100&id=88571&format=png&color=000000" alt="close-icn" />
              <h1 className='text-3xl font-semibold mt-5'>Start Your Journey !</h1>
              <p className='text-neutral-500 text-center mt-3'>Sign up in seconds and unlock powerful features to organize your digital life.</p>
              <button className='cursor-pointer mt-7 mb-5 border border-neutral-400 rounded-sm w-full py-2 font-bold text-neutral-700 flex justify-center items-center gap-5'><img className='h-6' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" />Continue with google</button>
              <div className='flex justify-center items-center gap-4 mt-3.5'>
                <p className='text-neutral-700'>If you have an account ?</p>
                <p onClick={navigateModalSignIn} className='text-blue-500 cursor-pointer'>Sign in</p>
              </div>
              <p className='text-neutral-500 mt-5 text-center' style={{ fontSize: '12px' }}>By clicking "Sign up", you accept Medium's Terms of Service and Privacy Policy.</p>
            </div>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className='flex justify-center items-center flex-col mt-25 px-35'>
        <h1 className='text-5xl font-medium'>Smart Memory Organization</h1>
        <p className='text-neutral-500 text-base mt-2'>AI automatically sorts your photos and videos by events, people, and dates so everything stays beautifully organized.</p>
        <div className='flex justify-center items-center flex-col gap-6 mt-10'>
          <div className='flex justify-center items-center gap-5'>

            {/* card-1 */}
            <div className='p-4 border border-neutral-200 rounded-md w-100 hover:scale-103 transition-transform duration-300'>
              <div className='flex justify-start items-center gap-2.5'>
                <img src="" alt="" />
                <h3 className='text-xl font-medium'>Lightning-Fast Performance</h3>
              </div>
              <p className='mt-3 text-justify'>Experience ultra-smooth speed with optimized architecture designed to load pages, animations, and interactions instantly.</p>
            </div>

            {/* card-2 */}
            <div className='p-4 border border-neutral-200 rounded-md w-100 hover:scale-103 transition-transform duration-300'>
              <div className='flex justify-start items-center gap-2.5'>
                <img src="" alt="" />
                <h3 className='text-xl font-medium'>Smart AI Assistance</h3>
              </div>
              <p className='mt-3 text-justify'>Leverage built-in AI that understands your needs, predicts actions , and streamlines tasks with intelligent automation.</p>
            </div>

            {/* card-3 */}
            <div className='p-4 border border-neutral-200 rounded-md w-100 hover:scale-103 transition-transform duration-300'>
              <div className='flex justify-start items-center gap-2.5'>
                <img src="" alt="" />
                <h3 className='text-xl font-medium'>Fully Responsive Design</h3>
              </div>
              <p className='mt-3 text-justify'>Enjoy a consistent, beautiful interface across all devices—mobile, tablet, or desktop—without losing quality or functionality.</p>
            </div>
          </div>
          <div className='flex justify-center items-center gap-5'>

            {/* card-4 */}
            <div className='p-4 border border-neutral-200 rounded-md w-100 hover:scale-103 transition-transform duration-300'>
              <div className='flex justify-start items-center gap-2.5'>
                <img src="" alt="" />
                <h3 className='text-xl font-medium'>Real-Time Sync</h3>
              </div>
              <p className='mt-3 text-justify'>All your data stays up to date with instant synchronization across platforms, ensuring nothing is ever out of step.</p>
            </div>

            {/* card-5 */}
            <div className='p-4 border border-neutral-200 rounded-md w-100 hover:scale-103 transition-transform duration-300'>
              <div className='flex justify-start items-center gap-2.5'>
                <img src="" alt="" />
                <h3 className='text-xl font-medium'>One-Tap Customization</h3>
              </div>
              <p className='mt-3 text-justify'>Modify layouts, styles, and content effortlessly with simple, intuitive editing tools tailored for beginners and pros.</p>
            </div>

            {/* card-6 */}
            <div className='p-4 border border-neutral-200 rounded-md w-100 hover:scale-103 transition-transform duration-300'>
              <div className='flex justify-start items-center gap-2.5'>
                <img src="" alt="" />
                <h3 className='text-xl font-medium'>Secure by Default</h3>
              </div>
              <p className='mt-3 text-justify'>Your data is protected with advanced encryption, multi-layer authentication, and the latest security standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Work */}
      <section className='flex justify-center items-center flex-col px-35 mt-25 bg-neutral-50 py-25'>
        <h1 className='text-5xl font-medium'>How It Works</h1>
        <p className='text-neutral-500 mt-2 text-base'>Experience the magic of AI-powered photo management in just a few simple steps.</p>
        <div className='flex justify-center items-center mt-10 gap-10'>
          <div className='flex justify-center items-center flex-col gap-4'>
            <div className='h-20 w-20 bg-blue-100 flex justify-center items-center rounded-full'>
              <span className='text-2xl font-semibold text-blue-600'>1</span>
            </div>
            <h2 className='text-xl font-medium'>Upload Your Photos</h2>
            <p className='text-center text-neutral-500'>Easily upload your photos from any device. Our platform supports all major formats and ensures your images are securely stored.</p>
          </div>
          <div className='flex justify-center items-center flex-col gap-4'>
            <div className='h-20 w-20 bg-blue-100 flex justify-center items-center rounded-full'>
              <span className='text-2xl font-semibold text-blue-600'>2</span>
            </div>
            <h2 className='text-xl font-medium'>AI-Powered Organization</h2>
            <p className='text-center text-neutral-500'>Our advanced AI analyzes and categorizes your photos based on content, location, and time, making it easy to find specific memories.</p>
          </div>
          <div className='flex justify-center items-center flex-col gap-4'>
            <div className='h-20 w-20 bg-blue-100 flex justify-center items-center rounded-full'>
              <span className='text-2xl font-semibold text-blue-600'>3</span>
            </div>
            <h2 className='text-xl font-medium'>Create and Share</h2>
            <p className='text-center text-neutral-500'>Easily create albums, slideshows, and share your favorite moments with friends and family directly from the platform.</p>
          </div>
        </div>
        <div className='flex justify-center items-center mt-20 gap-10'>
          <div className='flex justify-center items-center flex-col gap-4'>
            <div className='h-20 w-20 bg-blue-100 flex justify-center items-center rounded-full'>
              <span className='text-2xl font-semibold text-blue-600'>4</span>
            </div>
            <h2 className='text-xl font-medium'>AI-Powered Organization</h2>
            <p className='text-center text-neutral-500'>Our advanced AI analyzes and categorizes your photos based on content, location, and time, making it easy to find specific memories.</p>
          </div>

          <div className='flex justify-center items-center flex-col gap-4'>
            <div className='h-20 w-20 bg-blue-100 flex justify-center items-center rounded-full'>
              <span className='text-2xl font-semibold text-blue-600'>5</span>
            </div>
            <h2 className='text-xl font-medium'>Create and Share</h2>
            <p className='text-center text-neutral-500'>Easily create albums, slideshows, and share your favorite moments with friends and family directly from the platform.</p>
          </div>

          <div className='flex justify-center items-center flex-col gap-4'>
            <div className='h-20 w-20 bg-blue-100 flex justify-center items-center rounded-full'>
              <span className='text-2xl font-semibold text-blue-600'>6</span>
            </div>
            <h2 className='text-xl font-medium'>Create and Share</h2>
            <p className='text-center text-neutral-500'>Easily create albums, slideshows, and share your favorite moments with friends and family directly from the platform.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className='flex justify-center items-center flex-col mt-25 px-35 '>
        <h1 className='text-5xl font-medium'>Plans for Every Stage</h1>
        <p className='text-neutral-500 text-base mt-2'>Whether you're just starting out or scaling fast, our pricing is built to match your needs and budget.</p>
        <div className='flex justify-center items-center mt-10 gap-2'>
          {/* Basic Plan */}
          <div className='flex justify-start items-start flex-col border border-neutral-300 rounded-md p-10 w-100'>
            <h1 className='text-xl font-medium'>Basic Plan</h1>
            <p className='text-neutral-600'>Perfect for beginners and personal use.</p>
            <hr className='w-full mb-5 mt-5 border border-neutral-200' />
            <ul className='flex flex-col gap-3'>
              <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Upload & organize memories</li>
              <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Smart album creation</li>
              <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />AI captions (limited)</li>
              <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />5GB secure cloud storage</li>
              <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Email support</li>
            </ul>
            <button className='mt-7 bg-black px-5 py-2 text-white border-none rounded-sm w-full cursor-pointer font-semibold hover:opacity-80'>$9/month</button>
          </div>

          {/* Pro Plan */}
          <div className='flex justify-start items-start flex-col border border-neutral-300 rounded-md p-10 w-100'>
            <h1 className='text-xl font-medium'>Pro Plan</h1>
            <p className='text-neutral-600'>For creators, families, and growing users.</p>
            <hr className='w-full mb-5 mt-5 border border-neutral-200' />
            <ul className='flex flex-col gap-3'>
              <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Everything in Basic</li>
              <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Unlimited uploads</li>
              <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Advanced AI story generation</li>
              <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Auto-highlight video creation</li>
              <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />100GB cloud storage</li>
              <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Priority support</li>
            </ul>
            <button className='mt-7 bg-black px-5 py-2 text-white border-none rounded-sm w-full cursor-pointer font-semibold hover:opacity-80'>$19/month</button>
          </div>

          {/* Enterprise Plan */}
          <div className='flex justify-start items-start flex-col border border-neutral-300 rounded-md p-10 w-100 '>
            <h1 className='text-xl font-medium'>Enterprise Plan</h1>
            <p className='text-neutral-600'>For businesses and teams who need powerful tools.</p>
            <hr className='w-full mb-5 mt-5 border border-neutral-200' />
            <ul className='flex flex-col gap-3'>
              <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Everything in Pro</li>
              <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Team collaboration features</li>
              <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Custom AI workflows</li>
              <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Admin dashboard & permissions</li>
              <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Unlimited cloud storage</li>
              <li className='flex items-center gap-3'><img className='h-4' src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" alt="" />Dedicated account manager</li>
            </ul>
            <button className='mt-7 bg-black px-5 py-2 text-white border-none rounded-sm w-full cursor-pointer font-semibold hover:opacity-80'>Let's talk</button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className='flex justify-center items-center flex-col my-25 px-36 py-25 bg-neutral-50'>
        <h1 className='text-5xl font-medium'>Everyone has a story to tell</h1>
        <p className='text-neutral-500 mt-2 text-base'>Everyone has a story to tell. We make it effortless to capture, organize, and bring those stories to life with smart, intuitive AI tools.</p>

      </section>

      {/* Gallery */}
      <section className='flex justify-center items-center flex-col my-25 px-35'>
        <h1 className='text-5xl font-medium'>Moments That Matter</h1>
        <p className='text-neutral-500 mt-2 text-base'>Discover a collection of memories captured, organized, and brought to life with AI. Every image holds a story worth remembering.</p>
        <div className='flex justify-center items-center mt-8 gap-2.5'>
          <img className='h-120 bg-cover object-cover rounded-xl' src="https://images.pexels.com/photos/34158115/pexels-photo-34158115.jpeg" alt="image-1" />
          <img className='h-120 bg-cover object-cover rounded-xl' src="https://images.pexels.com/photos/28484412/pexels-photo-28484412.jpeg" alt="" />
          <img className='h-120 bg-cover object-cover rounded-xl' src="https://images.pexels.com/photos/34594456/pexels-photo-34594456.jpeg" alt="" />
          <img className='h-120 w-80 bg-cover object-cover rounded-xl' src="https://images.pexels.com/photos/31072029/pexels-photo-31072029.jpeg" alt="" />
        </div>
        <div className='flex justify-center items-center mt-2 gap-2.5'>
          <img className='h-80 w-108 bg-cover object-cover rounded-xl' src="https://images.pexels.com/photos/8829191/pexels-photo-8829191.jpeg" alt="" />
          <img className='h-80 w-108 bg-cover object-cover rounded-xl' src="https://images.pexels.com/photos/5637770/pexels-photo-5637770.jpeg" alt="" />
          <img className='h-80 w-108 bg-cover object-cover rounded-xl' src="https://images.pexels.com/photos/3968133/pexels-photo-3968133.jpeg" alt="" />
        </div>
        <button className='mt-10 flex justify-center items-center gap-2 px-7 font-medium py-2 cursor-pointer'>Load More <img src="https://img.icons8.com/?size=100&id=60662&format=png&color=000000" className='h-4' alt="" /></button>
      </section>
    </div>
  )
}
