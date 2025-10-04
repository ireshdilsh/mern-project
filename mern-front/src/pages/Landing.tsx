import logo from '../assets/logo.png'
import '../styles/landing.css'

export default function Landing() {

    return (
        <div id='main-page' className='min-h-screen bg-gray-50'>

            <nav className='flex items-center justify-between pl-36 pr-36 pt-8 pb-4'>
                <img src={logo} alt="" className='h-16' />
                <div id='links' className='flex gap-6'>
                    <a href="#home" className=''>Home</a>
                    <a href="#features" className=''>Features</a>
                    <a href="#topics" className=''>Topics</a>
                    <a href="#pricing" className=''>Pricing</a>
                    <a href="#write" className=''>Write</a>
                    <a href="#about" className=''>About</a>
                    <a href="#contact" className=''>Get In Touch</a>
                </div>
            </nav>

            <div id="hero-section" className='flex justify-between items-center mt-6 pt-12 pb-12 pl-36 pr-36'>
                <div className="flex flex-col items-start justify-left mt-6">
                    <h1 className='text-5xl font-bold mb-4 leading-16'>Weave your thoughts,<br /> frame your story.</h1>
                    <p className='text-base text-gray-600'>Loom & Lens features in-depth writing and personal essays that explore ideas, <br /> culture, and creativity. Join a community of curious minds.</p>
                    <div className='flex gap-2 mt-7'>
                        <button className='bg-indigo-500 text-white px-8 py-2 cursor-pointer rounded-4xl text-base '>Publish Your Story</button>
                        <button className='px-8 font-medium py-2 cursor-pointer rounded-4xl text-base '>Join Now</button>
                    </div>
                </div>
                <div className='flex content-center items-center relative'>
                    <span id='span-c' className='text-9xl font-extrabold absolute text-gray-300 right-96 bottom-2'>C</span>
                    <span id='span-u' className='text-9xl font-extrabold absolute text-gray-300 right-60'>U</span>
                    <span id='span-r1' className='text-9xl font-extrabold absolute text-gray-300 right-0 top-8'>R</span>
                    <span id='span-r2' className='text-9xl font-extrabold absolute text-gray-300 right-40 top-20'>R</span>
                    <span id='span-e' className='text-9xl font-extrabold absolute text-gray-300 right-18 bottom-5'>E</span>
                    <span id='span-n' className='text-9xl font-extrabold absolute text-gray-300 right-0 bottom-2'>N</span>
                    <span id='span-t' className='text-9xl font-extrabold absolute text-gray-300 right-46 bottom-8'>T</span>
                    <span id='span-s' className='text-9xl font-extrabold absolute text-gray-300 top-8 right-66'>S</span>
                </div>
            </div>

            <section id='features' className='bg-white flex content-center items-center flex-col mt-6 pt-12 pb-22 pl-36 pr-36'>
                <h1 className='text-4xl font-bold mt-10'>Features that Empower Every Writer</h1>
                <p className='text-center mt-2 text-gray-500'>Discover a suite of tools designed to enhance your writing experience, from intuitive editing to collaborative feedback.</p>
                <div className='grid grid-cols-2 gap-8 mt-12'>
                    <div id='left-side' className='flex flex-col gap-6'>

                        <h1 className='text-xl font-medium'>Smart Writing Editor</h1>
                        <p className='text-gray-500 -mt-2.5 text-justify'>Craft your thoughts in a clean, distraction-free space with built-in formatting, markdown support, and real-time saving — so you never lose your flow.</p>

                        <h1 className='text-xl font-medium'>Personalized Profiles</h1>
                        <p className='text-gray-500 -mt-2.5 text-justify'>Showcase your personality with customizable author pages, profile images, and bios — turning your readers into loyal followers.</p>

                        <h1 className='text-xl font-medium'>Reader Insights</h1>
                        <p className='text-gray-500 -mt-2.5 text-justify'>Track how your stories perform with simple analytics that reveal views, reads, and engagement — helping you grow your audience strategically.</p>


                        <h1 className='text-xl font-medium'>Community Connection</h1>
                        <p className='text-gray-500 -mt-2.5 text-justify'>Join a growing network of writers and readers. Comment, follow, and collaborate to make your ideas part of something bigger.</p>

                    </div>
                    <div id='right-side'></div>
                </div>
            </section>

            <section id='topics' className='flex flex-col content-center items-start mt-6 pt-12 pb-12 pl-36 pr-36'>
                <h1 className='text-4xl font-bold'>Explore Every Idea</h1>
                <p className='text-gray-500 mt-2'>From tech and lifestyle to culture and personal growth, Currents brings together a world of stories. <br /> Find topics that spark your curiosity and dive into ideas that inspire.</p>
            </section>

            <section id="pricing" className='bg-white flex content-center items-center flex-col mt-6 pt-18 pb-12 pl-36 pr-36'>
                <h1 className='text-4xl font-bold'>Choose a Plan That Fits You</h1>
                <p className='text-gray-500 mt-2 text-center'>Whether you’re just starting out or sharing stories with a growing audience, Currents offers flexible plans to suit every creator. <br /> Get access to powerful tools, insights, and features that help your ideas flow.</p>
            </section>
        </div>
    )
}
