import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Sign In:', formData, 'Remember:', rememberMe)
    // Add authentication logic here
  }

  const handleGoogleAuth = () => {
    console.log('Google Authentication')
    // Add Google OAuth logic here
  }

  return (
    <div className='min-h-screen flex'>
      {/* Left Side - Form */}
      <div className='flex-1 flex items-center justify-center px-6 py-12 bg-white'>
        <div className='w-full max-w-md'>
          {/* Logo */}
          <Link to='/' className='inline-block mb-8'>
            <div className='flex items-center space-x-2'>
              <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center'>
                <span className='text-white font-bold text-xl'>M</span>
              </div>
              <span className='text-2xl font-bold text-gray-900'>MemoryVerse</span>
            </div>
          </Link>

          {/* Header */}
          <div className='mb-8'>
            <h1 className='text-4xl font-bold text-gray-900 mb-2'>Welcome Back</h1>
            <p className='text-gray-600'>Sign in to your account to continue</p>
          </div>

          {/* Google Sign In */}
          <button
            onClick={handleGoogleAuth}
            className='w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-blue-600 transition-all mb-6 group'
          >
            <svg className='w-6 h-6' viewBox='0 0 24 24'>
              <path fill='#4285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z' />
              <path fill='#34A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z' />
              <path fill='#FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z' />
              <path fill='#EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' />
            </svg>
            <span className='text-lg font-semibold text-gray-700 group-hover:text-gray-900'>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className='relative mb-6'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300'></div>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-4 bg-white text-gray-500 font-medium'>Or continue with email</span>
            </div>
          </div>

          {/* Sign In Form */}
          <form onSubmit={handleSubmit} className='space-y-5'>
            <div>
              <label htmlFor='email' className='block text-sm font-semibold text-gray-700 mb-2'>
                Email Address
              </label>
              <input
                type='email'
                id='email'
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className='w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-900'
                placeholder='you@example.com'
                required
              />
            </div>

            <div>
              <label htmlFor='password' className='block text-sm font-semibold text-gray-700 mb-2'>
                Password
              </label>
              <input
                type='password'
                id='password'
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className='w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-900'
                placeholder='••••••••'
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className='flex items-center justify-between'>
              <label className='flex items-center cursor-pointer'>
                <input
                  type='checkbox'
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600 cursor-pointer'
                />
                <span className='ml-2 text-sm text-gray-700 font-medium'>Remember me</span>
              </label>
              <Link to='/forgot-password' className='text-sm text-blue-600 hover:text-blue-700 font-semibold'>
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-semibold text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl'
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className='mt-8 text-center text-sm text-gray-600'>
            Don't have an account?{' '}
            <Link to='/register' className='text-blue-600 hover:text-blue-700 font-semibold'>
              Sign up for free
            </Link>
          </p>

          {/* Terms */}
          <p className='mt-6 text-center text-xs text-gray-500'>
            By signing in, you agree to our{' '}
            <a href='#' className='text-blue-600 hover:text-blue-700 underline'>
              Terms of Service
            </a>
            {' '}and{' '}
            <a href='#' className='text-blue-600 hover:text-blue-700 underline'>
              Privacy Policy
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Image/Branding */}
      <div className='hidden lg:flex lg:flex-1 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 items-center justify-center p-12 relative overflow-hidden'>
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
        </div>

        {/* Content */}
        <div className='relative z-10 max-w-lg text-white'>
          <h2 className='text-5xl font-bold mb-6 leading-tight'>
            Preserve Your Memories Forever
          </h2>
          <p className='text-xl text-blue-100 mb-8 leading-relaxed'>
            Transform your photos into stunning AI-powered stories. Organize, share, and relive your most precious moments.
          </p>
          
          {/* Features */}
          <div className='space-y-4'>
            <div className='flex items-start space-x-3'>
              <div className='w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5'>
                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                </svg>
              </div>
              <div>
                <h3 className='font-semibold text-lg'>AI-Powered Organization</h3>
                <p className='text-blue-100 text-sm'>Automatically organize and tag your photos with advanced AI</p>
              </div>
            </div>
            
            <div className='flex items-start space-x-3'>
              <div className='w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5'>
                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                </svg>
              </div>
              <div>
                <h3 className='font-semibold text-lg'>Secure Cloud Storage</h3>
                <p className='text-blue-100 text-sm'>Your memories are safe with enterprise-grade encryption</p>
              </div>
            </div>
            
            <div className='flex items-start space-x-3'>
              <div className='w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5'>
                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                </svg>
              </div>
              <div>
                <h3 className='font-semibold text-lg'>Easy Sharing</h3>
                <p className='text-blue-100 text-sm'>Share albums with family and friends effortlessly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
