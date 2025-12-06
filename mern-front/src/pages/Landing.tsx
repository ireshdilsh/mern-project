import logo from '../assets/CTRMaker__1_-removebg-preview.png'
import '../styles/landing.css'

export default function Landing() {

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
            <nav className='flex justify-between items-center w-full px-20 mt-4'>
                <div className='flex items-center justify-center gap-2'>
                    <img src={logo} alt="" className='h-6' />
                    <h1 className='text-lg font-semibold'>stability.ai</h1>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <a className='font-semibold text-sm' href="">Home</a>
                    <a className='font-semibold text-sm' href="">Features</a>
                    <a className='font-semibold text-sm' href="">Models</a>
                    <a className='font-semibold text-sm' href="">Legal & License</a>
                    <a className='font-semibold text-sm' href="">Company</a>
                    <a className='font-semibold text-sm' href="">Deployment</a>
                    <a className='font-semibold text-sm' href="">Applications</a>
                </div>
            </nav>

            <div className='flex flex-col justify-center items-center gap-8 mt-32'>
                <h1 className='text-5xl font-semibold text-center tracking-wide' id='hero-title'>Create Stunning AI Images Instantly With <br /> the Power of Smart Imagination.</h1>
                <p className='text-neutral-600 text-center'>Turn your ideas into high-quality, visually striking images
                    with powerful AI.
                    <br /> Simply type your prompt, pick a style, and watch your imagination come to life—instantly.</p>

                <div className='flex justify-center items-center gap-3'>
                    <button className='font-semibold text-white bg-black px-10 py-2.5 rounded-md cursor-pointer hover:opacity-80'>Get
                        Started
                    </button>
                    <button className='font-semibold px-10 py-2.5 rounded-md cursor-pointer border border-black'>Start
                        Create
                    </button>
                </div>
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

        </div>
    )
}
