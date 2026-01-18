import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Basic news access',
      features: [
        'Access to general news',
        'Limited articles per day',
        'Basic search functionality',
        'Email notifications',
        'Community support'
      ],
      buttonText: 'Current Plan',
      buttonColor: 'bg-gray-300 text-gray-700',
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$10.00',
      period: 'per month',
      description: 'Most popular choice',
      features: [
        'Unlimited news access',
        'All categories unlocked',
        'Advanced search filters',
        'Ad-free experience',
        'Priority email support',
        'Offline reading',
        'Early access to features'
      ],
      buttonText: 'Upgrade to Premium',
      buttonColor: 'bg-green-600 hover:bg-green-700 text-white',
      popular: true
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$24.99',
      period: 'per month',
      description: 'For power users',
      features: [
        'Everything in Premium',
        'Custom news feeds',
        'API access',
        'Dedicated support',
        'Analytics dashboard',
        'Team collaboration',
        'White-label options'
      ],
      buttonText: 'Choose Pro',
      buttonColor: 'bg-blue-600 hover:bg-blue-700 text-white',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unlock premium features and support quality journalism
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow p-1 inline-flex">
            <button className="px-6 py-2 rounded-md bg-green-600 text-white font-semibold">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-md text-gray-600 hover:text-green-600">
              Yearly (Save 20%)
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 ${
                plan.popular ? 'border-green-500 relative' : 'border-transparent'
              }`}
            >
              {plan.popular && (
                <div className="bg-green-600 text-white text-center py-1 text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-3xl font-bold text-gray-800">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className="pi pi-check text-green-600 mr-3"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.buttonColor} ${
                    selectedPlan === plan.id ? 'ring-2 ring-green-500 ring-offset-2' : ''
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee for all annual plans. Monthly plans can be cancelled within 7 days for a full refund."
              },
              {
                question: "Will I lose access to saved articles?",
                answer: "No, all your saved articles and preferences will be preserved. You can access them if you resubscribe later."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes, we offer a 14-day free trial for our Premium plan. No credit card required to start the trial."
              }
            ].map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Need help choosing a plan?
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Contact our sales team for personalized recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Contact Sales
              </Link>
              <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50">
                Chat with Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}