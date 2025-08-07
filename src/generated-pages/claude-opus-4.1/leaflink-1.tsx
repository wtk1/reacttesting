import { useState, useEffect } from "react";

export default function RouteComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [selectedTab, setSelectedTab] = useState("brands");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: "🌿",
      title: "Cannabis-First Design",
      description:
        "Templates crafted specifically for dispensaries, brands, and cannabis creators",
    },
    {
      icon: "📊",
      title: "Real-Time Analytics",
      description:
        "Track clicks, demographics, and conversion rates with detailed insights",
    },
    {
      icon: "🔗",
      title: "Unlimited Links",
      description:
        "Add products, menus, social media, and special offers all in one place",
    },
    {
      icon: "✅",
      title: "Compliance Ready",
      description:
        "Built-in age verification and state-specific compliance features",
    },
    {
      icon: "🎨",
      title: "Brand Customization",
      description:
        "Match your unique brand identity with custom themes and layouts",
    },
    {
      icon: "💳",
      title: "Payment Integration",
      description:
        "Accept payments and pre-orders directly through your LeafLink",
    },
  ];

  const testimonials = [
    {
      name: "Green Valley Dispensary",
      role: "Retail Chain",
      content:
        "LeafLink increased our online traffic by 300% in just 2 months!",
      avatar: "🏪",
    },
    {
      name: "Elevated Genetics",
      role: "Cannabis Brand",
      content: "Finally, a link platform that understands our industry needs.",
      avatar: "🧬",
    },
    {
      name: "Mary Jane",
      role: "Cannabis Influencer",
      content:
        "The analytics help me understand my audience like never before.",
      avatar: "👤",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🌿</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                LeafLink
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Testimonials
              </a>
              <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-all hover:scale-105">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className={`pt-24 pb-12 px-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
            <span className="animate-pulse mr-2">🔥</span>
            <span className="text-sm font-semibold">
              Trusted by 10,000+ Cannabis Businesses
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">
            Your Cannabis Brand,
            <br />
            One Powerful Link
          </h1>

          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Connect all your content, products, and social channels in one
            beautiful page. Built specifically for the cannabis industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
            <button className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-all">
              View Demo
            </button>
          </div>

          {/* Mock Browser Window */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 ml-4">
                leaflink.bio/your-brand
              </div>
            </div>
            <div className="p-8 bg-gradient-to-br from-green-400 to-emerald-500 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                  🌿
                </div>
                <h3 className="text-white text-2xl font-bold mb-4">
                  Your Brand Here
                </h3>
                <div className="space-y-3">
                  <div className="bg-white/20 backdrop-blur text-white px-6 py-3 rounded-full">
                    📦 Shop Products
                  </div>
                  <div className="bg-white/20 backdrop-blur text-white px-6 py-3 rounded-full">
                    📍 Find Locations
                  </div>
                  <div className="bg-white/20 backdrop-blur text-white px-6 py-3 rounded-full">
                    📱 Follow Social
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Everything You Need to Grow
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Tabs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Built for Every Cannabis Professional
          </h2>

          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              <button
                onClick={() => setSelectedTab("brands")}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedTab === "brands"
                    ? "bg-green-600 text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Brands
              </button>
              <button
                onClick={() => setSelectedTab("dispensaries")}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedTab === "dispensaries"
                    ? "bg-green-600 text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Dispensaries
              </button>
              <button
                onClick={() => setSelectedTab("creators")}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedTab === "creators"
                    ? "bg-green-600 text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Creators
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
            {selectedTab === "brands" && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    For Cannabis Brands
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Showcase your entire product catalog</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Direct customers to authorized retailers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Share lab results and certifications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Build email lists for product launches</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center text-8xl">🏭</div>
              </div>
            )}
            {selectedTab === "dispensaries" && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">For Dispensaries</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Display daily deals and specials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Enable online ordering and pickup</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Share store hours and locations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Promote loyalty programs</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center text-8xl">🏪</div>
              </div>
            )}
            {selectedTab === "creators" && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    For Cannabis Creators
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Monetize your audience with affiliate links</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Share content across all platforms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Promote brand partnerships</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Track engagement and grow your following</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center text-8xl">🎬</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Loved by the Cannabis Community
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Cannabis Brand?
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Join thousands of cannabis professionals using LeafLink to grow
            their business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="px-6 py-3 rounded-full text-gray-800 flex-1 focus:outline-none focus:ring-4 focus:ring-green-300"
            />
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-all hover:scale-105">
              Get Started Free
            </button>
          </div>
          <p className="text-green-100 mt-4 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🌿</span>
              <span className="text-xl font-bold text-white">LeafLink</span>
            </div>
            <p className="text-sm">
              The #1 link-in-bio platform for cannabis professionals
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Analytics
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Compliance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Age Verification
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            © 2024 LeafLink. All rights reserved. Must be 21+ to use this
            service.
          </p>
        </div>
      </footer>

      <style>
        {`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}
      </style>
    </div>
  );
}
