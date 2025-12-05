import logo from '../assets/CTRMaker__1_-removebg-preview.png'

export default function Landing() {
    return (
        <div>
            <nav className='flex justify-between items-center w-full px-20 mt-4'>
                <div className='flex items-center justify-center gap-2'>
                    <img src={logo} alt="" className='h-7'/>
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
                <h1 className='text-5xl font-semibold text-center leading-14'>Create Stunning AI Images Instantly With <br/> the Power of Smart Imagination.</h1>
                <p className='text-neutral-600 text-center'>Turn your ideas into high-quality, visually striking images
                    with powerful AI.
                    <br/> Simply type your prompt, pick a style, and watch your imagination come to life—instantly.</p>

                <div className='flex justify-center items-center gap-3'>
                    <button className='font-semibold text-white bg-black px-10 py-2.5 rounded-md cursor-pointer hover:opacity-80'>Get
                        Started
                    </button>
                    <button className='font-semibold px-10 py-2.5 rounded-md cursor-pointer border border-black'>Start
                        Create
                    </button>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col gap-8 mt-20'>
                <div className='flex justify-center items-center gap-25'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p className='text-4xl font-semibold'>12 million</p>
                        <p className='text-sm text-neutral-600 font-semibold'>AI Images Generated</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p className='text-4xl font-semibold'>4.8 million</p>
                        <p className='text-sm text-neutral-600 font-semibold'>Active Creators Worldwide</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p className='text-4xl font-semibold'>96 million</p>
                        <p className='text-sm text-neutral-600 font-semibold'>Prompts Processed</p>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-25'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p className='text-4xl font-semibold'>320 000</p>
                        <p className='text-sm text-neutral-600 font-semibold'>New Users Every Month</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p className='text-4xl font-semibold'>8500+</p>
                        <p className='text-sm text-neutral-600 font-semibold'>Custom Styles & Models Available</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p className='text-4xl font-semibold'>99.9%</p>
                        <p className='text-sm text-neutral-600 font-semibold'>Uptime & System Reliability</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
