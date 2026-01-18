import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to DamDaily
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Your trusted source for global news and insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/news"
                className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Explore Latest News
              </Link>
              <Link 
                to="/signup"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors"
              >
                Join Free
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose DamDaily
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-green-600 text-4xl mb-4">
              <i className="pi pi-globe"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Global Coverage</h3>
            <p className="text-gray-600">News from every corner of the world, updated 24/7</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-green-600 text-4xl mb-4">
              <i className="pi pi-shield"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Verified Sources</h3>
            <p className="text-gray-600">Fact-checked news from trusted journalists</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-green-600 text-4xl mb-4">
              <i className="pi pi-bolt"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Real-time Updates</h3>
            <p className="text-gray-600">Breaking news alerts as they happen</p>
          </div>
        </div>
      </div>

      
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Top Stories</h2>
            <Link to="/news" className="text-green-600 hover:text-green-700 font-semibold">
              View All News →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <Link 
                    to="/news"
                    className="text-green-600 hover:text-green-700 font-semibold"
                  >
                    Read Story →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-green-700 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed Daily</h2>
          <p className="text-green-100 mb-8">
            Subscribe to our newsletter for daily news digests and exclusive content
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-lg flex-1 max-w-md text-gray-800"
            />
            <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}