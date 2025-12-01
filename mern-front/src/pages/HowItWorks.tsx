import React from 'react'
import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Enter Your Prompt',
      description: 'Type a detailed description of the image you want to create. Be specific about colors, style, mood, and elements.',
      icon: (
        <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
        </svg>
      )
    },
    {
      number: '02',
      title: 'AI Processing',
      description: 'Our advanced AI algorithms analyze your prompt and generate a unique image based on your specifications in seconds.',
      icon: (
        <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Review & Refine',
      description: 'Preview your generated image. Not satisfied? Adjust your prompt and regenerate until you get the perfect result.',
      icon: (
        <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Download & Share',
      description: 'Download your AI-generated masterpiece in high resolution and share it with the world or use it in your projects.',
      icon: (
        <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' />
        </svg>
      )
    }
  ]

  const features = [
    {
      title: 'Lightning Fast',
      description: 'Generate stunning images in just 5-10 seconds',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'High Quality',
      description: 'Get professional-grade images with sharp details',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Unlimited Creativity',
      description: 'No limits on your imagination or style choices',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Easy to Use',
      description: 'Simple interface, no technical skills required',
      gradient: 'from-green-500 to-teal-500'
    }
  ]

  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      
      {/* Hero Section */}
      <div className='bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h1 className='text-5xl font-bold mb-6'>How It Works</h1>
          <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
            Transform your ideas into stunning AI-generated images in four simple steps. 
            No design skills needed – just your imagination.
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className='max-w-7xl mx-auto px-6 py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {steps.map((step, idx) => (
            <div key={idx} className='relative'>
              {/* Connector Line (hidden on last item) */}
              {idx < steps.length - 1 && (
                <div className='hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-pink-300 transform -translate-x-1/2' />
              )}
              
              <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-neutral-100 h-full'>
                <div className='flex flex-col items-center text-center'>
                  <div className='w-20 h-20 bg-gradient-to-br from-blue-600 to-pink-600 rounded-full flex items-center justify-center text-white mb-4'>
                    {step.icon}
                  </div>
                  <div className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 mb-3'>
                    {step.number}
                  </div>
                  <h3 className='text-xl font-semibold text-neutral-800 mb-3'>{step.title}</h3>
                  <p className='text-neutral-600 leading-relaxed'>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className='bg-neutral-50 py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center mb-12 text-neutral-800'>Why Choose Our AI Generator?</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {features.map((feature, idx) => (
              <div key={idx} className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300'>
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg mb-4`} />
                <h3 className='text-lg font-semibold text-neutral-800 mb-2'>{feature.title}</h3>
                <p className='text-neutral-600 text-sm'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video/Demo Section */}
      <div className='max-w-7xl mx-auto px-6 py-20'>
        <div className='bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl overflow-hidden shadow-2xl'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
            <div className='p-12 flex flex-col justify-center'>
              <h2 className='text-3xl font-bold text-white mb-6'>See It In Action</h2>
              <p className='text-neutral-300 mb-6 leading-relaxed'>
                Watch how our AI transforms simple text prompts into breathtaking images. 
                From abstract art to photorealistic scenes, the possibilities are endless.
              </p>
              <ul className='space-y-3 mb-8'>
                <li className='flex items-center text-neutral-200'>
                  <svg className='w-5 h-5 text-green-400 mr-3' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  Multiple art styles supported
                </li>
                <li className='flex items-center text-neutral-200'>
                  <svg className='w-5 h-5 text-green-400 mr-3' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  Custom resolution options
                </li>
                <li className='flex items-center text-neutral-200'>
                  <svg className='w-5 h-5 text-green-400 mr-3' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  Instant preview and download
                </li>
              </ul>
              <button className='bg-gradient-to-r from-blue-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300 w-fit'>
                Try It Now
              </button>
            </div>
            <div className='bg-neutral-700 flex items-center justify-center p-12'>
              <div className='w-full aspect-video bg-neutral-800 rounded-xl flex items-center justify-center border-2 border-neutral-600'>
                <svg className='w-20 h-20 text-neutral-500' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z' clipRule='evenodd' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-gradient-to-r from-blue-600 to-pink-600 py-16'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-3xl font-bold text-white mb-4'>Ready to Create Amazing Images?</h2>
          <p className='text-xl text-blue-100 mb-8'>Join thousands of creators using AI to bring their ideas to life</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors duration-300'>
              Get Started Free
            </button>
            <button className='bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300'>
              View Pricing
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
