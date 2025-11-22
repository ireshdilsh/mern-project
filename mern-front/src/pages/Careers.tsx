import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Careers() {
  const [showContactModal, setShowContactModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setShowContactModal(false)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const benefits = [
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family'
    },
    {
      icon: '🏖️',
      title: 'Unlimited PTO',
      description: 'Take the time you need to recharge and spend with your loved ones'
    },
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Above-market compensation with equity options for all employees'
    },
    {
      icon: '🏠',
      title: 'Remote First',
      description: 'Work from anywhere with flexible hours and async communication'
    },
    {
      icon: '📚',
      title: 'Learning Budget',
      description: '$2,000 annual budget for courses, conferences, and professional development'
    },
    {
      icon: '👶',
      title: 'Parental Leave',
      description: '16 weeks fully paid parental leave for all parents'
    }
  ]

  const openings = [
    {
      title: 'Senior Full Stack Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build scalable features for our photo management platform using React, Node.js, and MongoDB.'
    },
    {
      title: 'Machine Learning Engineer',
      department: 'AI & Research',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop and improve our AI models for face recognition, photo categorization, and content understanding.'
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create beautiful, intuitive experiences that help families preserve their memories.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain our infrastructure, ensuring 99.9% uptime for millions of users.'
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help our users get the most value from MemoryVerse and ensure their success.'
    },
    {
      title: 'Content Marketing Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create compelling content that tells the story of family memories and our mission.'
    }
  ]

  const values = [
    {
      title: 'Family First',
      description: 'We build products for families, and we treat our team like family. Work-life balance isn\'t a perk—it\'s a requirement.'
    },
    {
      title: 'Move Fast, Think Long-term',
      description: 'We ship quickly and iterate, but always with an eye toward building something that lasts generations.'
    },
    {
      title: 'Default to Transparent',
      description: 'We share openly, communicate honestly, and trust our team with the full picture.'
    },
    {
      title: 'Customer Obsessed',
      description: 'Every decision starts with: "How does this help families preserve their memories better?"'
    }
  ]

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <nav className='bg-white border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <Link to='/' className='flex items-center space-x-2'>
              <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center'>
                <span className='text-white font-bold text-xl'>M</span>
              </div>
              <span className='text-2xl font-bold text-gray-900'>MemoryVerse</span>
            </Link>
            
            <div className='flex items-center space-x-4'>
              <Link to='/login' className='px-5 py-2.5 text-gray-700 hover:text-gray-900 font-medium transition-colors'>
                Sign In
              </Link>
              <Link to='/register' className='px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all'>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl'></div>
        </div>
        
        <div className='max-w-7xl mx-auto px-6 relative z-10'>
          <div className='text-center max-w-3xl mx-auto'>
            <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
              Join Our Mission
            </h1>
            <p className='text-xl text-gray-600 leading-relaxed mb-8'>
              Help us build the future of family memory preservation. We're looking for passionate people who want to make a meaningful impact.
            </p>
            <div className='flex items-center justify-center space-x-8 text-center'>
              <div>
                <div className='text-4xl font-bold text-blue-600'>25+</div>
                <div className='text-gray-600'>Team Members</div>
              </div>
              <div>
                <div className='text-4xl font-bold text-purple-600'>6</div>
                <div className='text-gray-600'>Open Positions</div>
              </div>
              <div>
                <div className='text-4xl font-bold text-green-600'>$5M</div>
                <div className='text-gray-600'>Funding Raised</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Our Values</h2>
            <p className='text-xl text-gray-600'>What drives us every day</p>
          </div>
          <div className='grid md:grid-cols-2 gap-8'>
            {values.map((value, index) => (
              <div key={index} className='bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-600 transition-all'>
                <h3 className='text-2xl font-bold text-gray-900 mb-3'>{value.title}</h3>
                <p className='text-gray-600 text-lg'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Benefits & Perks</h2>
            <p className='text-xl text-gray-600'>We take care of our team</p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {benefits.map((benefit, index) => (
              <div key={index} className='bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow'>
                <div className='text-5xl mb-4'>{benefit.icon}</div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>{benefit.title}</h3>
                <p className='text-gray-600'>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Open Positions</h2>
            <p className='text-xl text-gray-600'>Find your next opportunity</p>
          </div>
          <div className='space-y-6 max-w-4xl mx-auto'>
            {openings.map((job, index) => (
              <div key={index} className='bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all group'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
                  <div className='flex-1'>
                    <div className='flex items-center space-x-3 mb-3'>
                      <h3 className='text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors'>
                        {job.title}
                      </h3>
                    </div>
                    <div className='flex flex-wrap items-center gap-3 mb-4'>
                      <span className='px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full'>
                        {job.department}
                      </span>
                      <span className='flex items-center text-gray-600 text-sm'>
                        <svg className='w-4 h-4 mr-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                        </svg>
                        {job.location}
                      </span>
                      <span className='flex items-center text-gray-600 text-sm'>
                        <svg className='w-4 h-4 mr-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                    <p className='text-gray-600'>{job.description}</p>
                  </div>
                  <button className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-sm hover:shadow-md whitespace-nowrap'>
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            Don't See a Perfect Fit?
          </h2>
          <p className='text-xl text-blue-100 mb-8'>
            We're always looking for exceptional talent. Send us your resume and let's talk!
          </p>
          <button 
            onClick={() => setShowContactModal(true)}
            className='inline-block px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl'
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
            <div className='p-8'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-3xl font-bold text-gray-900'>Get in Touch</h3>
                <button
                  onClick={() => setShowContactModal(false)}
                  className='text-gray-400 hover:text-gray-600 transition-colors'
                >
                  <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
              </div>

              <p className='text-gray-600 mb-8'>
                We'd love to hear from you! Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label className='block text-sm font-semibold text-gray-900 mb-2'>
                    Full Name *
                  </label>
                  <input
                    type='text'
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                    placeholder='John Doe'
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-900 mb-2'>
                    Email Address *
                  </label>
                  <input
                    type='email'
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                    placeholder='john@example.com'
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-900 mb-2'>
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                    placeholder='+1 (555) 123-4567'
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-900 mb-2'>
                    Message / Resume Link *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none'
                    placeholder='Tell us about yourself and include a link to your resume or portfolio...'
                  ></textarea>
                </div>

                <div className='flex space-x-4'>
                  <button
                    type='button'
                    onClick={() => setShowContactModal(false)}
                    className='flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl font-semibold transition-all'
                  >
                    Cancel
                  </button>
                  <button
                    type='submit'
                    className='flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all'
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className='bg-gray-900 text-gray-300 py-12'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-sm'>© 2025 MemoryVerse. All rights reserved.</p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <Link to='/about' className='text-sm hover:text-white transition-colors'>About</Link>
              <Link to='/blog' className='text-sm hover:text-white transition-colors'>Blog</Link>
              <Link to='/careers' className='text-sm hover:text-white transition-colors'>Careers</Link>
              <Link to='/press' className='text-sm hover:text-white transition-colors'>Press</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
