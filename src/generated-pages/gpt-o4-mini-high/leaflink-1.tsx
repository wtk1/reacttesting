export default function RouteComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-green-600 text-white">
        <div className="text-2xl font-extrabold">LeafLink</div>
        <div className="space-x-6">
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#analytics" className="hover:underline">
            Analytics
          </a>
          <a
            href="/signup"
            className="px-4 py-2 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="flex-grow flex flex-col items-center justify-center text-center px-6 bg-green-50">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Your Cannabis Brand Hub
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
          Create a sleek landing page, connect with creators, and unlock real-time
          analytics—all designed for cannabis brands.
        </p>
        <a
          href="/signup"
          className="px-10 py-4 bg-green-600 text-white rounded-full text-lg font-semibold hover:bg-green-700 transition"
        >
          Get Started Free
        </a>
      </header>

      {/* Features */}
      <section id="features" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Built for Growth</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-semibold mb-2">Custom Pages</h3>
            <p className="text-gray-600">
              Pick from beautiful templates or fully customize your layout to match
              your brand’s vibe.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Connect & Collaborate</h3>
            <p className="text-gray-600">
              Network directly with creators, retailers, and other brands to expand
              your reach.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
            <p className="text-gray-600">
              Track clicks, engagement, and conversion metrics right from your
              dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics Preview */}
      <section id="analytics" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">Analytics at a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-extrabold text-green-600">1,245</p>
              <p className="text-gray-600 mt-1">Total Clicks</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-green-600">3,978</p>
              <p className="text-gray-600 mt-1">Page Views</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-green-600">72%</p>
              <p className="text-gray-600 mt-1">Engagement Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to elevate your brand?
        </h2>
        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          Join hundreds of cannabis brands already growing their audience with LeafLink.
        </p>
        <a
          href="/signup"
          className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition"
        >
          Create Your Page
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white text-center py-6">
        <p>© {new Date().getFullYear()} LeafLink. All rights reserved.</p>
      </footer>
    </div>
  )
}