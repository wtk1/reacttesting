export default function RouteComponent() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* ================== HERO ================== */}
      <section className="bg-gradient-to-r from-green-400 via-emerald-500 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Build Your Brand Hub with LeafLink
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            Connect, share, and grow your cannabis brand with a customizable link hub.
          </p>
          <a
            href="/signup"
            className="inline-block bg-white text-green-800 font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* ================== FEATURES ================== */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
              Features
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Everything you need to grow your community and track your impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 – Custom Links */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-12 w-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Custom Links
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Add and organize any number of links with drag‑and‑drop.
              </p>
            </div>

            {/* Feature 2 – Analytics Dashboard */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-12 w-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6M9 16h6M9 8h6m-7-4h10a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Analytics Dashboard
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Track clicks, traffic sources, and audience engagement.
              </p>
            </div>

            {/* Feature 3 – Monetization */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-12 w-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Monetization
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Earn from link clicks with integrated affiliate and sponsorship options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================== CALL‑TO‑ACTION ================== */}
      <section className="py-12 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join a growing community of creators
          </h2>
          <p className="mb-8 text-lg">Start building your brand hub in minutes.</p>
          <a
            href="/signup"
            className="inline-block bg-white text-emerald-600 font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            Create My Hub
          </a>
        </div>
      </section>
    </main>
  );
}
