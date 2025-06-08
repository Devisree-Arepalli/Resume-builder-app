'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

export default function UpgradePage() {
  const [selectedPlan, setSelectedPlan] = useState('monthly')

  const plans = [
    { id: 'monthly', label: 'Monthly', price: '$29.00/mo' },
    { id: 'quarterly', label: 'Quarterly', price: '$19.00/mo', badge: 'SAVE 34%' },
    { id: 'lifetime', label: 'Lifetime', price: '$149.00/once' }
  ]

  const features = [
    'Unlimited AI Writer Use',
    'Unlimited Resumes, Cover Letters, Resignation Letters',
    'Unlimited Keyword Targeting, Content Analysis',
    '1 Free Monthly Resume Review (unavailable on Pro Lifetime)',
    'All other features'
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 via-gray-100 to-white p-4 md:p-10">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Decorative Side Panel */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 hidden md:flex items-center justify-center p-10">
          <div className="text-white font-bold text-3xl text-center opacity-50 leading-snug">
            Build stunning resumes <br /> with Pro features.
          </div>
        </div>

        {/* Pricing Content */}
        <div className="p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Upgrade to Pro</h2>
          <p className="text-gray-500 mb-6">To create more Resumes, please upgrade to a Pro plan.</p>

          {/* Features List */}
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="text-green-500 w-4 h-4 mt-1" />
                <span dangerouslySetInnerHTML={{ __html: feature.replace('(unavailable on Pro Lifetime)', '<span class="text-gray-400 italic">(unavailable on Pro Lifetime)</span>') }} />
              </li>
            ))}
          </ul>

          {/* Pricing Options */}
          <div className="space-y-3 mb-6">
            {plans.map(plan => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full border-2 rounded-lg px-5 py-4 flex justify-between items-center transition-all duration-200
                  ${selectedPlan === plan.id
                    ? 'border-blue-600 bg-blue-50 shadow-md'
                    : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50/30'}
                `}
              >
                <div className="text-left">
                  <div className="text-lg font-medium text-gray-800">{plan.label}</div>
                </div>
                <div className="flex items-center gap-2">
                  {plan.badge && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">{plan.badge}</span>
                  )}
                  <div className="text-gray-700 font-medium">{plan.price}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Continue Button */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 rounded-lg font-semibold transition-colors"
            onClick={() => alert(`Selected Plan: ${selectedPlan}`)}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  )
}
