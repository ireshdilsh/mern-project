export default function HeroSection() {
    return (
        <div className='px-13.5 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-16 sm:mt-20 md:mt-24 text-center' id='home'>
            <div className='flex justify-center items-center flex-col max-w-4xl mx-auto'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-medium'>Transform Long Content into Easy Summaries.</h1>
                <p className='text-neutral-500 mt-2 text-base sm:text-base'>Our AI summarizes articles, reports, and documents in a flash. Stay productive and informed without reading every word.</p>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-4'>
                    <button className='bg-black px-7 py-2.5 cursor-pointer font-normal border-none outline-none text-white hover:shadow-2xl w-full sm:w-auto'>Create Account</button>
                    <button className='px-5 py-2.5 cursor-pointer font-normal border sm:w-auto'>Start Summarize</button>
                </div>
            </div>
        </div>
    )
}
