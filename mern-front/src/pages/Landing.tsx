
export default function Landing() {
  return (
    <div>
      <nav className='flex justify-between items-center w-full px-20 mt-4'>
          <h1 className='text-lg font-semibold'>imagine.ai</h1>
      </nav>

        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-6xl font-semibold text-center tracking-tighter'>Create Stunning AI Images<br/> in Seconds.</h1>
            <p className='text-neutral-500 text-center mt-3'>Turn your ideas into high-quality, visually striking images with powerful AI.
               <br/> Simply type your prompt, pick a style, and watch your imagination come to life—instantly.</p>
            <div className='flex justify-center items-center gap-3 mt-4'>
                <button className='font-semibold text-white bg-black px-10 py-2.5 rounded-md cursor-pointer'>Get Started</button>
                <button className='font-semibold px-10 py-2.5 rounded-md cursor-pointer border border-black'>Start Create</button>
            </div>
        </div>
    </div>
  )
}
