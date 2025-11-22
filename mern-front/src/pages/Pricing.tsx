import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for getting started',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        '500 MB storage',
        'Up to 100 photos',
        'Basic AI organization',
        '1 family group',
        'Standard support',
        'Mobile app access'
      ],
      limitations: [
        'Limited sharing options',
        'Basic editing tools'
      ],
      cta: 'Get Started',
      popular: false,
      color: 'gray'
    },
    {
      name: 'Pro',
      description: 'For growing families',
      monthlyPrice: 9.99,
      annualPrice: 99,
      features: [
        '50 GB storage',
        'Unlimited photos',
        'Advanced AI features',
        '5 family groups',
        'Priority support',
        'Mobile & desktop apps',
        'HD photo quality',
        'Advanced sharing',
        'Custom albums',
        'Face recognition'
      ],
      limitations: [],
      cta: 'Start Free Trial',
      popular: true,
      color: 'blue'
    },
    {
      name: 'Family',
      description: 'For large families',
      monthlyPrice: 19.99,
      annualPrice: 199,
      features: [
        '500 GB storage',
        'Unlimited photos & videos',
        'Premium AI features',
        'Unlimited family groups',
        '24/7 premium support',
        'All platforms access',
        '4K video support',
        'Collaborative albums',
        'Advanced editing tools',
        'Photo restoration AI',
        'Custom branding',
        'API access'
      ],
      limitations: [],
      cta: 'Start Free Trial',
      popular: false,
      color: 'purple'
    }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
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

      {/* Header */}
      <div className='max-w-7xl mx-auto px-6 pt-20 pb-12 text-center'>
        <div className='inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6'>
          <span className='w-2 h-2 bg-blue-600 rounded-full animate-pulse'></span>
          <span className='text-sm font-semibold text-blue-600'>14-day free trial • No credit card required</span>
        </div>

        <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
          Simple, Transparent Pricing
        </h1>
        <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-12'>
          Choose the perfect plan for your family. All plans include our core features with a 14-day money-back guarantee.
        </p>

        {/* Billing Toggle */}
        <div className='flex items-center justify-center space-x-4 mb-16'>
          <span className={`text-sm font-semibold ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
              isAnnual ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                isAnnual ? 'translate-x-9' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-semibold ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Annual
          </span>
          <span className='inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold'>
            Save 20%
          </span>
        </div>

        {/* Pricing Cards */}
        <div className='grid md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all ${
                plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className='absolute -top-5 left-0 right-0 flex justify-center'>
                  <span className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg'>
                    Most Popular
                  </span>
                </div>
              )}

              <div className='p-8'>
                {/* Plan Header */}
                <div className='mb-8'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>{plan.name}</h3>
                  <p className='text-gray-600 text-sm'>{plan.description}</p>
                </div>

                {/* Price */}
                <div className='mb-8'>
                  <div className='flex items-baseline justify-center'>
                    <span className='text-5xl font-bold text-gray-900'>
                      ${isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                    </span>
                    <span className='text-gray-600 ml-2'>/month</span>
                  </div>
                  {isAnnual && plan.annualPrice > 0 && (
                    <p className='text-sm text-gray-500 mt-2'>
                      ${plan.annualPrice} billed annually
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <Link
                  to='/register'
                  className={`block w-full py-3.5 rounded-xl font-semibold text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] mb-8 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </Link>

                {/* Features */}
                <div className='space-y-4'>
                  <p className='text-sm font-semibold text-gray-900 uppercase tracking-wide'>
                    What's included:
                  </p>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className='flex items-start space-x-3'>
                      <svg className='w-5 h-5 text-green-500 flex-shrink-0 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                      </svg>
                      <span className='text-gray-700 text-sm'>{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className='flex items-start space-x-3'>
                      <svg className='w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' clipRule='evenodd' />
                      </svg>
                      <span className='text-gray-500 text-sm line-through'>{limitation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className='max-w-4xl mx-auto px-6 py-20'>
        <h2 className='text-4xl font-bold text-gray-900 text-center mb-12'>
          Frequently Asked Questions
        </h2>
        <div className='space-y-6'>
          <div className='bg-white rounded-xl p-6 shadow-sm'>
            <h3 className='text-lg font-bold text-gray-900 mb-2'>Can I change plans anytime?</h3>
            <p className='text-gray-600'>Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately, and we'll prorate any charges.</p>
          </div>
          <div className='bg-white rounded-xl p-6 shadow-sm'>
            <h3 className='text-lg font-bold text-gray-900 mb-2'>What payment methods do you accept?</h3>
            <p className='text-gray-600'>We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans.</p>
          </div>
          <div className='bg-white rounded-xl p-6 shadow-sm'>
            <h3 className='text-lg font-bold text-gray-900 mb-2'>Is there a refund policy?</h3>
            <p className='text-gray-600'>Yes! We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment in full.</p>
          </div>
          <div className='bg-white rounded-xl p-6 shadow-sm'>
            <h3 className='text-lg font-bold text-gray-900 mb-2'>Do you offer discounts for non-profits?</h3>
            <p className='text-gray-600'>Yes! We offer special pricing for non-profit organizations and educational institutions. Contact our sales team for more information.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-gradient-to-r from-blue-600 to-purple-600 py-20'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            Ready to Preserve Your Memories?
          </h2>
          <p className='text-xl text-blue-100 mb-8'>
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              to='/register'
              className='px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl'
            >
              Start Free Trial
            </Link>
            <Link
              to='/'
              className='px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white border-2 border-white/20 rounded-xl font-semibold text-lg transition-all'
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
