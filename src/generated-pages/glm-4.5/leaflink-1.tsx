import { useState } from 'react'

export default function RouteComponent() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert(`Thank you! We'll notify you at ${email} when we launch.`)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 text-gray-800">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">LL</span>
          </div>
          <span className="font-bold text-2xl text-green-800">LeafLink</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-green-600 transition-colors">Features</a>
          <a href="#analytics" className="hover:text-green-600 transition-colors">Analytics</a>
          <a href="#showcase" className="hover:text-green-600 transition-colors">Showcase</a>
          <a href="#pricing" className="hover:text-green-600 transition-colors">Pricing</a>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-green-900">
            Connect, Create, and Grow Your <span className="text-green-600">Cannabis Brand</span>
          </h1>
          <p className="text-xl mb-10 text-gray-600">
            LeafLink helps cannabis creators and brands build beautiful, customizable landing pages to showcase products, connect with customers, and track analytics—all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              Create Your Page
            </button>
            <button className="bg-white hover:bg-green-50 text-green-700 border-2 border-green-600 px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              View Demo
            </button>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-green-800">Join our waitlist</h3>
                <p className="text-gray-600 mb-4">Be the first to know when we launch and get exclusive access.</p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Notify Me
                  </button>
                </form>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-3xl font-bold text-green-700">5,000+</span>
                  <p className="text-gray-600">Creators on waitlist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-green-900">Everything You Need to Grow</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Powerful features designed specifically for cannabis brands and creators
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-800">Custom Brand Pages</h3>
              <p className="text-gray-600">
                Create stunning, customizable landing pages that reflect your brand's unique identity with our easy-to-use editor.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-800">Powerful Analytics</h3>
              <p className="text-gray-600">
                Track engagement, clicks, and conversions with our comprehensive analytics dashboard to optimize your strategy.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-800">Creator Network</h3>
              <p className="text-gray-600">
                Connect with other cannabis brands and creators to collaborate, share insights, and grow together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Preview Section */}
      <section id="analytics" className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4 text-green-900">Data-Driven Decisions</h2>
            <p className="text-xl text-gray-600 mb-6">
              Understand your audience with our intuitive analytics dashboard. Track clicks, engagement, and conversions to optimize your cannabis brand's online presence.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-3 text-gray-700">Real-time traffic and engagement metrics</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-3 text-gray-700">Identify your top-performing content</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-3 text-gray-700">Track customer behavior and preferences</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-3 text-gray-700">Measure ROI for your marketing campaigns</span>
              </li>
            </ul>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              View Analytics Demo
            </button>
          </div>
          
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100">
              <div className="bg-green-700 p-4 text-white">
                <h3 className="font-bold text-lg">Analytics Dashboard</h3>
              </div>
              <div className="p-6">
                <div className="flex justify-between mb-6">
                  <div>
                    <p className="text-gray-500 text-sm">Total Views</p>
                    <p className="text-2xl font-bold">24,568</p>
                    <p className="text-green-600 text-sm flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      12.5% from last month
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Click Rate</p>
                    <p className="text-2xl font-bold">32.4%</p>
                    <p className="text-green-600 text-sm flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      4.2% from last month
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Top Link</p>
                    <p className="text-lg font-bold truncate">New Strain Release</p>
                    <p className="text-gray-600 text-sm">45% of clicks</p>
                  </div>
                </div>
                
                {/* Mock chart */}
                <div className="h-48 bg-green-50 rounded-lg flex items-end space-x-2 p-4">
                  <div className="flex-1 bg-green-400 rounded-t" style={{ height: '40%' }}></div>
                  <div className="flex-1 bg-green-400 rounded-t" style={{ height: '60%' }}></div>
                  <div className="flex-1 bg-green-400 rounded-t" style={{ height: '75%' }}></div>
                  <div className="flex-1 bg-green-400 rounded-t" style={{ height: '55%' }}></div>
                  <div className="flex-1 bg-green-400 rounded-t" style={{ height: '80%' }}></div>
                  <div className="flex-1 bg-green-400 rounded-t" style={{ height: '90%' }}></div>
                  <div className="flex-1 bg-green-500 rounded-t" style={{ height: '100%' }}></div>
                </div>
                
                <div className="flex justify-between mt-4 text-sm text-gray-500">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-green-900">See It in Action</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover how cannabis brands and creators are leveraging LeafLink to grow their audience
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            {/* Showcase card 1 */}
            <div className="w-full md:w-80 bg-green-50 rounded-2xl shadow-lg overflow-hidden border border-green-100">
              <div className="h-44 bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">GreenGarden</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-green-800">Premium Cannabis Brand</h3>
                <p className="text-gray-600 mb-4">
                  "LeafLink helped us increase our direct-to-consumer sales by 62% in just two months."
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600 font-medium">↑ 62% Sales</span>
                  <span className="text-gray-500">San Francisco, CA</span>
                </div>
              </div>
            </div>
            
            {/* Showcase card 2 */}
            <div className="w-full md:w-80 bg-green-50 rounded-2xl shadow-lg overflow-hidden border border-green-100">
              <div className="h-44 bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">CannaCreator</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-green-800">Cannabis Educator</h3>
                <p className="text-gray-600 mb-4">
                  "The analytics dashboard showed me exactly what content resonates with my audience."
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600 font-medium">↑ 45% Engagement</span>
                  <span className="text-gray-500">Denver, CO</span>
                </div>
              </div>
            </div>
            
            {/* Showcase card 3 */}
            <div className="w-full md:w-80 bg-green-50 rounded-2xl shadow-lg overflow-hidden border border-green-100">
              <div className="h-44 bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">BudBuds</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-green-800">Cannabis Accessories</h3>
                <p className="text-gray-600 mb-4">
                  "Our conversion rate tripled after switching to LeafLink for our product launches."
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600 font-medium">↑ 200% Conversion</span>
                  <span className="text-gray-500">Portland, OR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Grow Your Cannabis Brand?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join thousands of cannabis creators and brands already using LeafLink to connect with their audience.
          </p>
          <button className="bg-white hover:bg-green-50 text-green-700 px-8 py-4 rounded-lg text-lg font-bold transition-colors">
            Create Your Free Account
          </button>
          <p className="text-green-100 mt-4 text-sm">No credit card required • Free forever plan available</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-green-100 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">LL</span>
                </div>
                <span className="font-bold text-xl text-white">LeafLink</span>
              </div>
              <p className="text-green-200 text-sm">
                Empowering cannabis brands and creators to connect, grow, and succeed.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white transition-colors text-sm">Features</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition-colors text-sm">Analytics</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition-colors text-sm">Templates</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition-colors text-sm">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white transition-colors text-sm">Blog</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition-colors text-sm">Help Center</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition-colors text-sm">Community</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition-colors text-sm">API Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition-colors text-sm">Contact</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-800 mt-12 pt-8 text-center text-sm text-green-300">
            <p>© 2023 LeafLink. All rights reserved. Designed for cannabis brands and creators.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}