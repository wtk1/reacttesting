import { useState } from 'react'
import { Link } from '@tanstack/react-router'

export default function RouteComponent() {
  const [email, setEmail] = useState('')
  const [brandName, setBrandName] = useState('')
  const [plan, setPlan] = useState<'free' | 'pro' | 'creator'>('pro')

  const features = [
    {
      title: 'Instant Link-in-Bio',
      desc: 'Launch a beautiful, customizable hub for your brand or creator profile in minutes.',
      icon: (
        <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none">
          <path stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M4 6h16M4 18h10" />
        </svg>
      ),
    },
    {
      title: 'Cannabis-Native Tools',
      desc: 'Compliant product showcases, menus, drops, and age-gated content built for the industry.',
      icon: (
        <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none">
          <path stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v6c0 5-7 8-7 8s-7-3-7-8V7l7-4z" />
        </svg>
      ),
    },
    {
      title: 'Deep Analytics',
      desc: 'See clicks, conversions, top links, geo insights, and creator performance in real time.',
      icon: (
        <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none">
          <path stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M4 19V5m5 14V10m5 9V7m5 12V3" />
        </svg>
      ),
    },
    {
      title: 'Collab & Monetize',
      desc: 'Invite creators, share revenue, run campaigns, and track influencer impact.',
      icon: (
        <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none">
          <path stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M8 12a4 4 0 118 0 4 4 0 01-8 0zm10 7a6 6 0 00-12 0" />
        </svg>
      ),
    },
  ]

  const tiers = [
    {
      key: 'free' as const,
      name: 'Starter',
      price: '$0',
      blurb: 'Everything you need to launch',
      perks: ['Custom link hub', 'Basic analytics', 'Unlimited links', '1 team member'],
      cta: 'Start free',
      popular: false,
    },
    {
      key: 'pro' as const,
      name: 'Pro',
      price: '$19',
      blurb: 'For growing brands & creators',
      perks: ['Advanced analytics', 'Email capture', 'Custom domains', '3 team members', 'Campaign tracking'],
      cta: 'Go Pro',
      popular: true,
    },
    {
      key: 'creator' as const,
      name: 'Creator+',
      price: '$39',
      blurb: 'Monetize and collaborate',
      perks: ['Affiliate links', 'Payouts & splits', 'Collab invites', 'Priority support', '5 team members'],
      cta: 'Become Creator+',
      popular: false,
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate signup navigation
    alert(`Welcome to LeafLink, ${brandName || 'Friend'}! We’ll reach out at ${email}. Plan: ${plan}`)
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Nav */}
      <header className="border-b border-neutral-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-lime-500 text-neutral-900 font-bold">
              LL
            </span>
            <span className="text-lg font-semibold tracking-tight">LeafLink</span>
          </div>
          <nav className="hidden gap-8 text-sm text-neutral-300 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#creators" className="hover:text-white">Creators</a>
            <a href="#analytics" className="hover:text-white">Analytics</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/" className="hidden rounded-md px-3 py-2 text-sm text-neutral-300 hover:text-white md:block">
              Docs
            </Link>
            <button className="rounded-md border border-neutral-700 px-3 py-2 text-sm hover:border-neutral-600 hover:bg-neutral-900">
              Sign in
            </button>
            <button className="hidden rounded-md bg-emerald-500 px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-emerald-400 md:block">
              Create free page
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-lime-500/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-700/40 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              New: Creator payouts and affiliate tracking
            </div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Your cannabis brand, beautifully linked. Built for growth.
            </h1>
            <p className="mt-4 text-neutral-300">
              Create a stunning link-in-bio, showcase products and drops, collaborate with creators, and track the metrics that matter.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Brand or creator name"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-3 text-sm outline-none ring-emerald-500/30 placeholder:text-neutral-500 focus:ring-2"
              />
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-3 text-sm outline-none ring-emerald-500/30 placeholder:text-neutral-500 focus:ring-2"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-emerald-500 px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-emerald-400 sm:w-auto"
              >
                Get started free
              </button>
            </form>

            <div className="mt-3 flex items-center gap-3 text-xs text-neutral-400">
              <div className="flex -space-x-2">
                <img className="h-6 w-6 rounded-full ring-2 ring-neutral-900" src="https://i.pravatar.cc/24?img=1" alt="avatar" />
                <img className="h-6 w-6 rounded-full ring-2 ring-neutral-900" src="https://i.pravatar.cc/24?img=2" alt="avatar" />
                <img className="h-6 w-6 rounded-full ring-2 ring-neutral-900" src="https://i.pravatar.cc/24?img=3" alt="avatar" />
              </div>
              <span>Trusted by 2,400+ brands and creators</span>
            </div>
          </div>

          {/* Preview Card */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-600/20 to-lime-500/20 blur" />
            <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-lime-500 text-neutral-900 font-bold">
                  LL
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{brandName || 'Evergreen Co.'}</h3>
                  <p className="text-xs text-neutral-400">leaflink.bio/{(brandName || 'evergreen').toLowerCase().replace(/\s+/g, '')}</p>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                <button className="w-full rounded-lg border border-neutral-800 bg-neutral-800/60 px-4 py-3 text-left hover:border-emerald-600/50">
                  🌿 Shop our latest drop
                </button>
                <button className="w-full rounded-lg border border-neutral-800 bg-neutral-800/60 px-4 py-3 text-left hover:border-emerald-600/50">
                  🔥 Collab with us
                </button>
                <button className="w-full rounded-lg border border-neutral-800 bg-neutral-800/60 px-4 py-3 text-left hover:border-emerald-600/50">
                  📊 View creator program
                </button>
              </div>
              <div className="mt-5 rounded-lg border border-neutral-800 bg-neutral-800/40 p-4">
                <p className="text-xs text-neutral-400">Today</p>
                <div className="mt-2 grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-xl font-semibold">1.2k</div>
                    <div className="text-xs text-neutral-400">Clicks</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold">4.8%</div>
                    <div className="text-xs text-neutral-400">CVR</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold">$642</div>
                    <div className="text-xs text-neutral-400">Revenue</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
                <span>Preview</span>
                <span>Made with LeafLink</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Built for cannabis brands and creators</h2>
            <p className="mt-3 text-neutral-300">Everything you need to launch, grow, and measure — all in one place.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 hover:border-emerald-700/40">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                    {f.icon}
                  </div>
                  <h3 className="font-medium">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm text-neutral-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator gallery */}
      <section id="creators" className="border-t border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Showcase your world</h2>
              <p className="mt-3 text-neutral-300">
                Drag-and-drop links, featured products, and age-gated content. Integrate your Shopify, Leafly, or live menu.
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-neutral-300">
                <li className="flex items-center gap-2">
                  <Check /> Custom themes & domains
                </li>
                <li className="flex items-center gap-2">
                  <Check /> Campaign links with UTM templates
                </li>
                <li className="flex items-center gap-2">
                  <Check /> Creator invites with revenue splits
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-[3/4] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60">
                  <img
                    className="h-full w-full object-cover opacity-80"
                    src={`https://images.unsplash.com/photo-1524594227084-6c089f8f0b9b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=${i}`}
                    alt="creator"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section id="analytics" className="border-t border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Performance overview</h3>
                <span className="rounded-full border border-neutral-700 px-2 py-1 text-xs text-neutral-300">Last 30 days</span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: 'Clicks', value: '24.4k' },
                  { label: 'CTR', value: '6.2%' },
                  { label: 'Conv.', value: '5.1%' },
                  { label: 'Revenue', value: '$12.9k' },
                ].map((m) => (
                  <div key={m.label} className="rounded-lg border border-neutral-800 bg-neutral-950 p-4">
                    <div className="text-2xl font-semibold">{m.value}</div>
                    <div className="text-xs text-neutral-400">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 h-40 w-full rounded-lg border border-neutral-800 bg-neutral-950">
                {/* Simple chart placeholder */}
                <div className="flex h-full items-end gap-1 p-3">
                  {Array.from({ length: 28 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="w-full rounded-sm bg-gradient-to-t from-emerald-600/30 to-emerald-400/60"
                      style={{ height: `${20 + Math.abs(Math.sin(idx)) * 80}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight">Know what works, double down</h2>
              <p className="text-neutral-300">
                Break down performance by link, product, creator, and geography. Export reports or connect your stack.
              </p>
              <ul className="grid gap-3">
                {[
                  'Top links and funnels with drop-off',
                  'Creator attribution and payout tracking',
                  'Geo heatmaps and device insights',
                  'Export to CSV or connect to GA4',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900/40 p-4">
                    <Check /> <span className="text-sm text-neutral-300">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Simple, transparent pricing</h2>
            <p className="mt-3 text-neutral-300">Start free, upgrade when you’re ready. No contracts.</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.key}
                className={`relative rounded-2xl border bg-neutral-900/50 p-6 ${
                  t.popular
                    ? 'border-emerald-700/50 ring-2 ring-emerald-700/40'
                    : 'border-neutral-800'
                }`}
              >
                {t.popular && (
                  <div className="absolute -top-3 right-4 rounded-full border border-emerald-700/40 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                    Most popular
                  </div>
                )}
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{t.name}</h3>
                    <p className="text-sm text-neutral-400">{t.blurb}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-semibold">{t.price}</div>
                    <div className="text-xs text-neutral-500">per month</div>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-neutral-300">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <Check /> {p}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setPlan(t.key)}
                  className={`mt-6 w-full rounded-md px-4 py-2 text-sm font-medium ${
                    plan === t.key
                      ? 'bg-emerald-500 text-neutral-900 hover:bg-emerald-400'
                      : 'border border-neutral-700 text-neutral-200 hover:bg-neutral-900'
                  }`}
                >
                  {t.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Launch your LeafLink in minutes</h2>
            <p className="mt-3 text-neutral-300">
              Pick a theme, drop your links, connect creators, and start tracking results.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Brand or creator name"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-3 text-sm outline-none ring-emerald-500/30 placeholder:text-neutral-500 focus:ring-2"
            />
            <input
              type="email"
              placeholder="Work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-3 text-sm outline-none ring-emerald-500/30 placeholder:text-neutral-500 focus:ring-2"
            />
            <button
              type="submit"
              className="w-full rounded-md bg-emerald-500 px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-emerald-400 sm:w-auto"
            >
              Create my page
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-lime-500 text-neutral-900 font-bold">
                LL
              </span>
              <span className="text-lg font-semibold tracking-tight">LeafLink</span>
            </div>
            <div className="grid grid-cols-2 gap-6 text-sm text-neutral-400 md:grid-cols-4">
              <div className="space-y-2">
                <div className="text-neutral-300">Product</div>
                <a className="block hover:text-white" href="#features">Features</a>
                <a className="block hover:text-white" href="#pricing">Pricing</a>
                <a className="block hover:text-white" href="#">Templates</a>
              </div>
              <div className="space-y-2">
                <div className="text-neutral-300">Company</div>
                <a className="block hover:text-white" href="#">About</a>
                <a className="block hover:text-white" href="#">Blog</a>
                <a className="block hover:text-white" href="#">Careers</a>
              </div>
              <div className="space-y-2">
                <div className="text-neutral-300">Resources</div>
                <a className="block hover:text-white" href="#">Help center</a>
                <a className="block hover:text-white" href="#">Status</a>
                <a className="block hover:text-white" href="#">Community</a>
              </div>
              <div className="space-y-2">
                <div className="text-neutral-300">Legal</div>
                <a className="block hover:text-white" href="#">Privacy</a>
                <a className="block hover:text-white" href="#">Terms</a>
                <a className="block hover:text-white" href="#">Compliance</a>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between text-xs text-neutral-500">
            <span>© {new Date().getFullYear()} LeafLink. All rights reserved.</span>
            <span>Made with love in the cloud ☁️</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Check() {
  return (
    <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
    </svg>
  )
}