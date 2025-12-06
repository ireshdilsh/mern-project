import { useState, type SVGProps } from 'react';
import logo from '../assets/CTRMaker__1_-removebg-preview.png'
import '../styles/landing.css'
import { Link } from 'react-router-dom';

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);
const XIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default function Landing() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'Features', href: '#features' }, // Linked to the section we created
        { name: 'Models', href: '#models' },
        { name: 'Legal & License', href: '#' },
        { name: 'Company', href: '#' }
    ]

    // Features cards details
    const features = [
        {
            title: "Lightning-Fast Generation ⚡",
            description: "Go from prompt to pixel in less than a second. Our optimized models deliver stunning, high-resolution images instantly, keeping your creative flow uninterrupted.",
            icon: "M13 10V3L4 14h7v7l9-11h-7z" // Speed/Bolt
        },
        {
            title: "Thousands of Custom Styles 🎨",
            description: "Explore a massive library of 8500+ unique models and artistic styles. From photorealistic to abstract painting, find the perfect aesthetic for every vision.",
            icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" // Palette/Art
        },
        {
            title: "Advanced Prompt Control ⚙️",
            description: "Fine-tune your results with negative prompts, aspect ratio control, and custom seeds. Take total control over the AI to create exactly what you imagine.",
            icon: "M10.5 8.25L13.19 5.56 16 7.85 13.31 10.54 10.5 8.25zM12 21a9 9 0 100-18 9 9 0 000 18z" // Gear/Settings
        },
        {
            title: "Commercial Use License 🤝",
            description: "Generate images for business, marketing, or personal projects with confidence. All generated art comes with a clear, creator-friendly commercial license.",
            icon: "M12 6.75a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM19.5 7.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM4.5 7.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" // Handshake/License
        },
        {
            title: "Dedicated API Access 💻",
            description: "Seamlessly integrate our generation engine into your own applications or workflows using our robust, well-documented, and highly reliable REST API.",
            icon: "M8 9l3 3 2-2 4 4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" // Code/API
        },
        {
            title: "High-Resolution Upscaling ✨",
            description: "Automatically enhance your final creations up to 4x their original size with advanced upscaling technology, ensuring professional quality for any application.",
            icon: "M5 12h14M12 5l7 7-7 7" // Arrow Up/Upscaling
        }
    ]

    return (
        <div>
            <nav className='sticky top-1 z-50 bg-transparent backdrop-blur-md'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-center h-16 w-full'>

                        {/* Left Side: Logo and Title */}
                        <div className='flex items-center gap-2'>
                            <img src={logo} alt="" className='h-6' />
                            <h1 className='text-xl font-bold'>stability.ai</h1>
                        </div>

                        {/* Center: Desktop Navigation Links (Hidden on Mobile) */}
                        <div className='hidden lg:flex items-center gap-6 xl:gap-8'>
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className='font-semibold text-sm text-gray-700 hover:text-black transition duration-150'>
                                    {item.name}
                                </a>
                            ))}
                            <button className='text-sm text-neutral-700 font-semibold'>Sign in</button>
                            <button className='text-sm text-white font-semibold bg-black px-4 py-2.5 rounded-md cursor-pointer hover:opacity-80'>Create Account</button>
                        </div>

                        {/* Right Side: Menu Button (Hidden on Desktop) */}
                        <div className='lg:hidden'>
                            <button
                                type='button'
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black'
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                {isMenuOpen ? <XIcon /> : <MenuIcon />}
                            </button>

                        </div>

                    </div>
                </div>

                {/* Mobile Menu Panel (Hidden by default, shown when isMenuOpen is true) */}
                <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)} // Close menu on click
                                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-neutral-100'
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className='flex flex-col'>
                            <button className='text-sm text-neutral-700 font-semibold cursor-pointer'>Sign in</button>
                            <button className='text-sm text-white font-semibold bg-black px-4 py-2.5 rounded-md cursor-pointer hover:opacity-80 mt-2'>Create Account</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* hero */}
            <div className='flex flex-col items-center text-center px-4 sm:px-6 mt-20 md:mt-28 lg:mt-36'>
                {/* Hero Title */}
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-black max-w-4xl' id='hero-title'>
                    Create Stunning AI Images Instantly With  the Power of Smart Imagination.
                </h1>

                {/* Sub-Headline Paragraph */}
                <p className='text-base sm:text-lg text-neutral-600 mt-6 max-w-3xl'>
                    Turn your ideas into high-quality, visually striking images with powerful AI.
                    Simply type your prompt, pick a style, and watch your imagination come to life—instantly.
                </p>
            </div>

            {/* stats */}
            <div className='flex flex-col items-center bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8 mt-16 md:mt-20'>
                {/* Statistics Container Grid */}
                <div className='max-w-7xl w-full'>
                    {/* We use a grid to handle wrapping and spacing responsively */}
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 sm:gap-x-12 lg:gap-x-24 text-center mt-10'>

                        {/* Stat 1: AI Images Generated */}
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <p className='text-3xl sm:text-4xl font-extrabold text-gray-900'>12 million</p>
                            <p className='text-xs sm:text-sm text-neutral-600 font-semibold uppercase tracking-wider'>AI Images Generated</p>
                        </div>

                        {/* Stat 2: Active Creators Worldwide */}
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <p className='text-3xl sm:text-4xl font-extrabold text-gray-900'>4.8 million</p>
                            <p className='text-xs sm:text-sm text-neutral-600 font-semibold uppercase tracking-wider'>Active Creators Worldwide</p>
                        </div>

                        {/* Stat 3: Prompts Processed */}
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <p className='text-3xl sm:text-4xl font-extrabold text-gray-900'>96 million</p>
                            <p className='text-xs sm:text-sm text-neutral-600 font-semibold uppercase tracking-wider'>Prompts Processed</p>
                        </div>

                        {/* Stat 4: New Users Every Month */}
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <p className='text-3xl sm:text-4xl font-extrabold text-gray-900'>320 000</p>
                            <p className='text-xs sm:text-sm text-neutral-600 font-semibold uppercase tracking-wider'>New Users Every Month</p>
                        </div>

                        {/* Stat 5: Custom Styles & Models Available */}
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <p className='text-3xl sm:text-4xl font-extrabold text-gray-900'>8500+</p>
                            <p className='text-xs sm:text-sm text-neutral-600 font-semibold uppercase tracking-wider'>Custom Styles & Models Available</p>
                        </div>

                        {/* Stat 6: Uptime & System Reliability */}
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <p className='text-3xl sm:text-4xl font-extrabold text-gray-900'>99.9%</p>
                            <p className='text-xs sm:text-sm text-neutral-600 font-semibold uppercase tracking-wider'>Uptime & System Reliability</p>
                        </div>
                    </div>
                </div>

                {/* Description Paragraph */}
                <p className='text-neutral-600 max-w-prose mt-16 text-base text-center px-4'>
                    Our AI platform empowers millions of creators worldwide. Generate high-quality images instantly, explore thousands of unique styles, and bring your imagination to life—effortlessly and reliably.
                </p>
            </div>

            {/* features section */}
            <section className='py-20 bg-white' id='features'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                    {/* Section Header */}
                    <div className='text-center'>
                        <p className='text-sm font-semibold text-indigo-600 uppercase tracking-wide'>
                            Unleash Your Imagination
                        </p>
                        <h2 className='mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold '>
                            Features Built for Creators
                        </h2>
                        <p className='mt-2.5 max-w-2xl text-neutral-600 mx-auto'>
                            Everything you need to turn simple text into world-class digital art.
                        </p>
                    </div>

                    {/* Features Grid - Adjusted for 6 cards */}
                    <div className='mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                        {features.map((feature) => (
                            <div key={feature.title} className='pt-6'>
                                <div className='flow-root border border-neutral-200 rounded-lg px-6 pb-8 h-full transition duration-300 ease-in-out hover:shadow-xl'>
                                    <div className='-mt-6'>
                                        <div>
                                            {/* Icon Container */}
                                            <span className='inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg'>
                                                <svg className='h-6 w-6 text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                                                </svg>
                                            </span>
                                        </div>
                                        <h3 className='mt-8 text-xl font-extrabold tracking-tight text-gray-900'>
                                            {feature.title}
                                        </h3>
                                        <p className='mt-5 text-base text-neutral-600'>
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Model section */}
            <section className='py-20 bg-neutral-50' id='models'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                    {/* Section Header */}
                    <div className='text-center'>
                        <p className='text-sm font-semibold text-indigo-600 uppercase tracking-wide'>
                            The Engine of Creativity
                        </p>
                        <h2 className='mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-black'>
                            Explore Our Foundational Models
                        </h2>
                        <p className='mt-2.5 max-w-3xl text-neutral-600 mx-auto'>
                            Choose the right model for your task. Each one is fine-tuned for speed, quality, and specific artistic styles.
                        </p>
                    </div>

                    {/* Models Grid */}
                    <div className='mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12'>

                        {/* Model Card 1: Stable Diffusion XL */}
                        <div className='bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl'>
                            <div className='p-6 flex flex-col h-full'>
                                <span className='w-42 inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full mb-4'>
                                    BEST FOR GENERAL USE
                                </span>
                                <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                                    SDXL 1.0
                                </h3>
                                <p className='text-gray-600 mb-6 flex-grow'>
                                    Our flagship model offers unparalleled detail, photorealism, and prompt understanding. Ideal for professionals and high-quality artistic projects.
                                </p>
                                <ul className='space-y-2 text-sm text-gray-700'>
                                    <li className='flex items-center'>
                                        <svg className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        **Exceptional Photorealism**
                                    </li>
                                    <li className='flex items-center'>
                                        <svg className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        Complex Composition
                                    </li>
                                </ul>
                                <button className='cursor-pointer mt-6 w-full text-center bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-150'>
                                    Try SDXL
                                </button>
                            </div>
                        </div>

                        {/* Model Card 2: SD 2.1 */}
                        <div className='bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl'>
                            <div className='p-6 flex flex-col h-full'>
                                <span className='w-31 inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full mb-4'>
                                    BEST FOR SPEED
                                </span>
                                <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                                    SD 2.1
                                </h3>
                                <p className='text-gray-600 mb-6 flex-grow'>
                                    A lightweight and fast model. Perfect for quick ideation, rapid prototyping, and integration into time-sensitive applications via API.
                                </p>
                                <ul className='space-y-2 text-sm text-gray-700'>
                                    <li className='flex items-center'>
                                        <svg className="flex-shrink-0 h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        **Low Latency Generation**
                                    </li>
                                    <li className='flex items-center'>
                                        <svg className="flex-shrink-0 h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        Smaller File Sizes
                                    </li>
                                </ul>
                                <button className='cursor-pointer mt-6 w-full text-center bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-150'>
                                    Try SD 2.1
                                </button>
                            </div>
                        </div>

                        {/* Model Card 3: SDXL Turbo */}
                        <div className='bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl'>
                            <div className='p-6 flex flex-col h-full'>
                                <span className='w-43.5 inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-4'>
                                    BEST FOR INTERACTIVITY
                                </span>
                                <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                                    SDXL Turbo
                                </h3>
                                <p className='text-gray-600 mb-6 flex-grow'>
                                    Designed for real-time creativity. Generates images in a single step, making it perfect for live demos and interactive experiences.
                                </p>
                                <ul className='space-y-2 text-sm text-gray-700'>
                                    <li className='flex items-center'>
                                        <svg className="flex-shrink-0 h-5 w-5 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        **Real-time Image Generation**
                                    </li>
                                    <li className='flex items-center'>
                                        <svg className="flex-shrink-0 h-5 w-5 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        High Consistency
                                    </li>
                                </ul>
                                <button className='cursor-pointer mt-6 w-full text-center bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-150'>
                                    Try SDXL Turbo
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* Legal & License Section */}
            <section className='py-20 bg-white' id='legal-license'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                    {/* Section Header */}
                    <div className='text-center mb-16'>
                        <p className='text-sm font-semibold text-red-600 uppercase tracking-wide'>
                            Terms and Trust
                        </p>
                        <h2 className='mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold '>
                            Licensing, Ownership, and Safety
                        </h2>
                        <p className='mt-2 max-w-3xl text-neutral-600 mx-auto'>
                            Everything you need to know about your rights, commercial use, and content moderation policies.
                        </p>
                    </div>

                    {/* Legal Points Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16'>

                        {/* Point 1: Commercial Use Rights */}
                        <div className='flex items-start space-x-4'>
                            <div className='flex-shrink-0'>
                                <svg className="h-8 w-8 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.693C5.025 14.956 6 13.568 6 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className='text-xl font-bold text-gray-900'>
                                    Full Commercial License
                                </h3>
                                <p className='mt-2 text-neutral-600'>
                                    You **retain 100% ownership** of all images you generate using paid credits. This includes the right to use, sell, and sublicense your creations for commercial purposes without restriction.
                                </p>
                            </div>
                        </div>

                        {/* Point 2: User Content Ownership */}
                        <div className='flex items-start space-x-4'>
                            <div className='flex-shrink-0'>
                                <svg className="h-8 w-8 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className='text-xl font-bold text-gray-900'>
                                    Your Prompts, Your Data
                                </h3>
                                <p className='mt-2 text-neutral-600'>
                                    We do not claim ownership over the prompts, input text, or uploaded images you use. Your private inputs remain confidential and are not used for training models without explicit consent.
                                </p>
                            </div>
                        </div>

                        {/* Point 3: Content Moderation Policy */}
                        <div className='flex items-start space-x-4'>
                            <div className='flex-shrink-0'>
                                <svg className="h-8 w-8 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.772-1.333-2.694-1.333-3.464 0L3.332 16c-.772 1.333.19 3 1.732 3z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className='text-xl font-bold text-gray-900'>
                                    Responsible Content Policy
                                </h3>
                                <p className='mt-2 text-neutral-600'>
                                    We strictly prohibit the generation of illegal, harmful, hateful, or abusive content. Our platform uses safety filters to enforce our community guidelines and maintain a safe environment.
                                </p>
                            </div>
                        </div>

                        {/* Point 4: Model Training Data */}
                        <div className='flex items-start space-x-4'>
                            <div className='flex-shrink-0'>
                                <svg className="h-8 w-8 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                            </div>
                            <div>
                                <h3 className='text-xl font-bold text-gray-900'>
                                    Transparency in Training
                                </h3>
                                <p className='mt-2 text-neutral-600'>
                                    Our models are trained on datasets that respect copyright and content integrity. We are committed to transparency regarding the data sources used for our foundational models.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* CTA to Full Documents */}
                    <div className='mt-20 text-center'>
                        <p className='text-lg font-medium text-gray-900'>
                            Need more details? Access our official documents.
                        </p>
                        <div className='flex justify-center gap-4 mt-4'>
                            <Link to="/legal/and/licensing" className='text-base font-semibold text-white bg-red-600 px-8 py-3 rounded-md hover:bg-red-700 transition duration-150'>
                                Read Full Terms of Service
                            </Link>
                            <a href="#" className='text-base font-semibold text-gray-900 border border-gray-300 px-8 py-3 rounded-md hover:bg-neutral-100 transition duration-150'>
                                View Privacy Policy
                            </a>
                        </div>
                    </div>

                </div>
            </section>


        </div>
    )
}
