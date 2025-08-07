export default function RouteComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold leading-tight text-green-900">
          Grow Your Brand on LeafLink 🌿
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          A new platform where cannabis brands and creators connect, grow, and thrive. Create your own digital hub — like Linktree, but greener.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition">
            Create Your Page
          </button>
          <button className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full font-medium transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: 'All Your Links',
              desc: 'Showcase products, drops, socials, and more with a single page.',
            },
            {
              title: 'Creator-Friendly Analytics',
              desc: 'See what your audience clicks and when — in real-time.',
            },
            {
              title: 'Brand Discovery',
              desc: 'Get discovered by dispensaries, creators, and fans alike.',
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {title}
              </h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-900">Loved by Creators</h2>
          <p className="mt-4 text-gray-600">
            “LeafLink helped me grow my audience and track exactly where my customers came from. It’s a game-changer.”
          </p>
          <p className="mt-2 font-semibold text-green-700">— Jade, Cannabis Creator</p>
        </div>
      </section>

      {/* Analytics Preview */}
      <section className="py-16 bg-green-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">Smart Insights</h3>
            <p className="text-gray-700 mb-6">
              Visual dashboards show you what’s working — from product clicks to social traffic.
            </p>
            <ul className="space-y-2 text-gray-600 list-disc pl-5">
              <li>Track top-performing links</li>
              <li>Understand your audience</li>
              <li>Optimize drop timing</li>
            </ul>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            {/* Mock Analytics Preview */}
            <h4 className="text-lg font-semibold mb-4 text-green-700">Weekly Analytics</h4>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-green-900">4.2k</p>
                <p className="text-sm text-gray-600">Page Views</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-900">1.8k</p>
                <p className="text-sm text-gray-600">Link Clicks</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-900">23%</p>
                <p className="text-sm text-gray-600">Conversion Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-900">+18%</p>
                <p className="text-sm text-gray-600">Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-green-700 text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Ready to Branch Out?</h2>
        <p className="mb-8 text-lg">
          Join the next generation of cannabis creators building their digital brand with LeafLink.
        </p>
        <button className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500">
        © 2025 LeafLink. All rights reserved.
      </footer>
    </div>
  )
}