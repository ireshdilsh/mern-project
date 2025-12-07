import logo from '../assets/CTRMaker__1_-removebg-preview.png'

export default function Signup() {
  return (
    <div className='py-10 sm:py-20 px-4 sm:px-6'>
      <div className='flex justify-center items-center flex-col'>
        {/* Logo and Title Section */}
        <div className='flex justify-center items-center gap-4 mb-8'>
          <img src={logo} className='h-8' alt="logo" />
          <h1 className='text-xl font-bold'>stability.ai</h1>
        </div>
        <h1 className='text-lg sm:text-2xl font-semibold text-center'>Create Your Free AI Creativity Account</h1>
        <p className='text-neutral-400 text-center mt-1 max-w-sm'>
          Join thousands of creators using AI to turn ideas into powerful visuals. Start generating images in seconds—completely free.
        </p>
      </div>

      {/* Form Section - Confined width and centered */}
      <div className='flex justify-center items-center'>
        <div className='flex flex-col mt-8 gap-4 w-full max-w-xs sm:max-w-sm'>
          {/* Email Input */}
          <div className='flex flex-col'>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              className='border border-gray-300 rounded-md p-2 outline-none w-full'
            />
          </div>
          {/* Create Password Input */}
          <div className='flex flex-col'>
            <label htmlFor="password">Create Password</label>
            <input
              id="password"
              type="password"
              className='border border-gray-300 rounded-md p-2 outline-none w-full'
            />
          </div>
          {/* Confirm Password Input */}
          <div className='flex flex-col'>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              className='border border-gray-300 rounded-md p-2 outline-none w-full'
            />
          </div>
          {/* Terms and Conditions Checkbox */}
          <div className='flex items-start gap-3'>
            <input type="checkbox" id="terms" className='mt-1' />
            <label htmlFor="terms" className='text-neutral-600 font-semibold text-sm'>
              I agree to the terms and conditions in stability.ai
            </label>
          </div>
          {/* Create Account Button */}
          <button className='bg-black text-white font-semibold w-full py-2.5 rounded-md cursor-pointer hover:opacity-80 transition duration-150'>
            Create Account
          </button>
          
          <p className='text-center my-1'>or</p>

          {/* Continue with Google Button */}
          <button className='flex justify-center items-center gap-4 text-neutral-700 font-semibold w-full py-2.5 rounded-md cursor-pointer border border-neutral-200 hover:bg-neutral-50 transition duration-150'>
            <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="google-icn" className='h-6' /> 
            continue with google
          </button>
        </div>
      </div>
    </div>
  )
}
