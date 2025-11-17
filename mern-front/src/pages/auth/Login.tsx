import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login:', formData)
    // Handle login logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 flex items-center justify-center px-4 py-12 relative overflow-hidden'>
      {/* Animated Background */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-purple-200/50 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-200/50 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className='relative max-w-md w-full'>
        {/* Logo */}
        <div className='text-center mb-8'>
          <Link to='/' className='inline-flex items-center space-x-3 justify-center mb-4 group'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl blur-md group-hover:blur-lg transition-all opacity-75'></div>
              <div className='relative bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-3 rounded-2xl'>
                <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                </svg>
              </div>
            </div>
            <span className='text-2xl font-bold text-gradient'>MemoryVerse</span>
          </Link>
          <h2 className='text-3xl font-black text-slate-900 mb-2'>Welcome Back</h2>
          <p className='text-slate-600'>Sign in to access your memories</p>
        </div>

        {/* Login Card */}
        <div className='glass-card p-8 rounded-3xl'>
          <form onSubmit={handleSubmit} className='space-y-5'>
            {/* Email */}
            <div>
              <label htmlFor='email' className='block text-sm font-semibold text-slate-900 mb-2'>
                Email Address
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none'
                placeholder='you@example.com'
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor='password' className='block text-sm font-semibold text-slate-900 mb-2'>
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                className='w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none'
                placeholder='••••••••'
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className='flex items-center justify-between'>
              <label className='flex items-center cursor-pointer group'>
                <input
                  type='checkbox'
                  name='rememberMe'
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className='w-4 h-4 text-purple-600 border-slate-300 rounded focus:ring-purple-500'
                />
                <span className='ml-2 text-sm text-slate-600 group-hover:text-slate-900 transition-colors'>Remember me</span>
              </label>
              <button type='button' className='text-sm text-cyan-600 hover:text-cyan-700 font-medium transition-colors'>
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full relative group px-6 py-3 rounded-xl font-bold text-lg overflow-hidden glow-hover transition-all'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 group-hover:scale-110 transition-transform'></div>
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity'></div>
              <span className='relative text-white'>Sign In</span>
            </button>
          </form>

          {/* Divider */}
          <div className='my-6 flex items-center'>
            <div className='flex-1 border-t border-slate-200'></div>
            <span className='px-4 text-sm text-slate-500'>Or continue with</span>
            <div className='flex-1 border-t border-slate-200'></div>
          </div>

          {/* Social Login */}
          <div className='grid grid-cols-2 gap-3'>
            <button className='flex items-center justify-center space-x-2 py-3 px-4 glass-card rounded-xl hover:bg-slate-50 transition-all group'>
              <svg className='w-5 h-5' viewBox='0 0 24 24'>
                <path fill='#4285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/>
                <path fill='#34A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/>
                <path fill='#FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/>
                <path fill='#EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/>
              </svg>
              <span className='text-sm font-medium text-slate-900'>Google</span>
            </button>
            <button className='flex items-center justify-center space-x-2 py-3 px-4 glass-card rounded-xl hover:bg-slate-50 transition-all group'>
              <svg className='w-5 h-5 text-blue-500' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/>
              </svg>
              <span className='text-sm font-medium text-slate-900'>Facebook</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className='mt-6 text-center text-sm text-slate-600'>
            Don't have an account?{' '}
            <Link to='/register' className='text-cyan-600 hover:text-cyan-700 font-semibold transition-colors'>
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
