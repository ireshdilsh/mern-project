import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    if (!agreeToTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy')
      return
    }
    console.log('Sign Up:', formData)
    // Add registration logic here
  }

  const handleGoogleAuth = () => {
    console.log('Google Authentication')
    // Add Google OAuth logic here
  }

  return (
    <div className='min-h-screen flex'>
      {/* Left Side - Image/Branding */}
      <div className='hidden lg:flex lg:flex-1 bg-gradient-to-br from-purple-600 via-blue-700 to-blue-600 items-center justify-center p-12 relative overflow-hidden'>
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
        </div>

        {/* Content */}
        <div className='relative z-10 max-w-lg text-white'>
          <h2 className='text-5xl font-bold mb-6 leading-tight'>
            Start Your Memory Journey Today
          </h2>
          <p className='text-xl text-blue-100 mb-8 leading-relaxed'>
            Join over 50,000 families using MemoryVerse to preserve and share their precious moments.
          </p>

          {/* Stats */}
          <div className='grid grid-cols-3 gap-6 mb-8'>
            <div>
              <div className='text-4xl font-bold mb-1'>50K+</div>
              <div className='text-blue-100 text-sm'>Active Users</div>
            </div>
            <div>
              <div className='text-4xl font-bold mb-1'>10M+</div>
              <div className='text-blue-100 text-sm'>Photos Stored</div>
            </div>
            <div>
              <div className='text-4xl font-bold mb-1'>99.9%</div>
              <div className='text-blue-100 text-sm'>Uptime</div>
            </div>
          </div>

          {/* Testimonial */}
          <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20'>
            <div className='flex items-center mb-3'>
              <div className='flex space-x-1'>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className='w-5 h-5 text-yellow-300' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>
            </div>
            <p className='text-white mb-3 italic'>"MemoryVerse transformed how we preserve our family memories. The AI features are incredible!"</p>
            <p className='text-blue-100 text-sm font-semibold'>- Sarah Johnson, Beta User</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
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
            <h1 className='text-4xl font-bold text-gray-900 mb-2'>Create Account</h1>
            <p className='text-gray-600'>Start preserving your memories today</p>
          </div>

          {/* Google Sign Up */}
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

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label htmlFor='name' className='block text-sm font-semibold text-gray-700 mb-2'>
                Full Name
              </label>
              <input
                type='text'
                id='name'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-900'
                placeholder='John Doe'
                required
              />
            </div>

            <div>
              <label htmlFor='email' className='block text-sm font-semibold text-gray-700 mb-2'>
                Email Address
              </label>
              <input
                type='email'
                id='email'
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-900'
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
                className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-900'
                placeholder='••••••••'
                required
              />
            </div>

            <div>
              <label htmlFor='confirmPassword' className='block text-sm font-semibold text-gray-700 mb-2'>
                Confirm Password
              </label>
              <input
                type='password'
                id='confirmPassword'
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-900'
                placeholder='••••••••'
                required
              />
            </div>

            {/* Terms Checkbox */}
            <div className='flex items-start pt-2'>
              <input
                type='checkbox'
                id='terms'
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600 mt-1 cursor-pointer'
                required
              />
              <label htmlFor='terms' className='ml-3 text-sm text-gray-700 leading-relaxed cursor-pointer'>
                I agree to the{' '}
                <a href='#' className='text-blue-600 hover:text-blue-700 font-semibold underline'>
                  Terms of Service
                </a>
                {' '}and{' '}
                <a href='#' className='text-blue-600 hover:text-blue-700 font-semibold underline'>
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-semibold text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl'
            >
              Create Account
            </button>
          </form>

          {/* Sign In Link */}
          <p className='mt-8 text-center text-sm text-gray-600'>
            Already have an account?{' '}
            <Link to='/login' className='text-blue-600 hover:text-blue-700 font-semibold'>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
