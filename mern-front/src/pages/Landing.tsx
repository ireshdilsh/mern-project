export default function Landing() {
    return (
        <div>
            <nav className='flex justify-between items-center w-full px-20 mt-4'>
                <h1 className='text-lg font-semibold'>stability.ai</h1>
                <div className='flex items-center justify-center gap-4'>
                    <a href="">Home</a>
                    <a href="">Features</a>
                    <a href="">Models</a>
                    <a href="">Legal & License</a>
                    <a href="">Company</a>
                    <a href="">Deployment</a>
                    <a href="">Applications</a>
                </div>
            </nav>

            <div className='flex flex-col justify-center items-center gap-5 mt-20'>
                <h1 className='text-5xl font-semibold text-center leading-14'>Create Stunning AI Images Instantly With <br/> the Power of Smart Imagination.</h1>
                <p className='text-neutral-600 text-center'>Turn your ideas into high-quality, visually striking images
                    with powerful AI.
                    <br/> Simply type your prompt, pick a style, and watch your imagination come to life—instantly.</p>
                <div className='flex justify-center items-center gap-3'>
                    <button className='font-semibold text-white bg-black px-10 py-2.5 rounded-md cursor-pointer'>Get
                        Started
                    </button>
                    <button className='font-semibold px-10 py-2.5 rounded-md cursor-pointer border border-black'>Start
                        Create
                    </button>
                </div>
            </div>
        </div>
    )
}
