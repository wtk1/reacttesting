import { useState } from 'react'
import {
  ChartBarIcon,
  LinkIcon,
  SparklesIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  BoltIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'


export default function RouteComponent() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SiteHeader />
      <Hero />
      <BrandsMarquee />
      <FeatureGrid />
      <CreatorShowcase />
      <AnalyticsPreview />
      <CTASection />
      <FAQ />
      <SiteFooter />
    </div>
  )
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-zinc-950/60 border-b border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <LeafLinkLogo />
            <span className="font-semibold tracking-tight text-lg">LeafLink</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a className="text-zinc-300 hover:text-white transition-colors" href="#features">Features</a>
            <a className="text-zinc-300 hover:text-white transition-colors" href="#showcase">Showcase</a>
            <a className="text-zinc-300 hover:text-white transition-colors" href="#analytics">Analytics</a>
            <a className="text-zinc-300 hover:text-white transition-colors" href="#faq">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/login" className="hidden sm:inline-block text-sm text-zinc-300 hover:text-white">Log in</a>
            <a
              href="/signup"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 text-zinc-950 px-4 py-2 text-sm font-semibold hover:bg-emerald-400 transition-colors"
            >
              Create your page
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_-10%,rgba(16,185,129,0.22),transparent_60%),radial-gradient(700px_circle_at_80%_-20%,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs font-medium">
              <SparklesIcon className="h-4 w-4" />
              For cannabis brands and creators
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Your brand. One link. Real-time insights.
            </h1>
            <p className="mt-4 text-zinc-300 text-lg leading-relaxed">
              LeafLink lets you build a beautiful, compliant profile that converts—connect socials, showcase products, capture leads, and track every click. No code. No hassle.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 text-zinc-950 px-6 py-3 font-semibold hover:bg-emerald-400 transition-colors shadow-[0_8px_30px_rgba(16,185,129,0.35)]"
              >
                Get started free
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 font-semibold text-white hover:bg-zinc-800 transition-colors"
              >
                See features
              </a>
            </div>
            <TrustBadges />
          </div>
          <div className="lg:col-span-6">
            <HeroCardPreview />
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBadges() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
      <div className="inline-flex items-center gap-2">
        <ShieldCheckIcon className="h-4 w-4 text-emerald-400" />
        Compliant profile links
      </div>
      <div className="inline-flex items-center gap-2">
        <BoltIcon className="h-4 w-4 text-yellow-400" />
        Lightning-fast loading
      </div>
      <div className="inline-flex items-center gap-2">
        <GlobeAltIcon className="h-4 w-4 text-sky-400" />
        SEO-friendly
      </div>
      <div className="inline-flex items-center gap-2">
        <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
        No-code customization
      </div>
    </div>
  )
}

function HeroCardPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500/30 via-sky-500/20 to-transparent blur-2xl rounded-3xl" />
      <div className="relative mx-auto max-w-md rounded-3xl border border-zinc-800 bg-zinc-900/70 p-5 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1556114844-3b1d6c1c41b9?q=80&w=240&auto=format&fit=crop"
            alt="Brand avatar"
            className="h-12 w-12 rounded-xl object-cover"
          />
          <div>
            <h3 className="font-semibold">Emerald Grove</h3>
            <p className="text-xs text-zinc-400">@emeraldgrove</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-zinc-300">
          Premium sun-grown cannabis. Shop drops, explore strains, and connect with our creators.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <SocialButton label="Website" color="emerald" />
          <SocialButton label="Instagram" color="pink" />
          <SocialButton label="YouTube" color="red" />
          <SocialButton label="X" color="sky" />
        </div>
        <div className="mt-5 rounded-xl bg-zinc-800/60 p-3">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>Last 7 days</span>
            <span>Clicks</span>
          </div>
          <MiniSparkline />
        </div>
      </div>
    </div>
  )
}

function SocialButton({ label, color }: { label: string; color: 'emerald' | 'pink' | 'red' | 'sky' }) {
  const colorMap: Record<string, string> = {
    emerald: 'from-emerald-500/90 to-emerald-400',
    pink: 'from-pink-500/90 to-pink-400',
    red: 'from-red-500/90 to-red-400',
    sky: 'from-sky-500/90 to-sky-400',
  }
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-tr ${colorMap[color]} text-zinc-950 px-3 py-2 text-sm font-semibold shadow hover:brightness-110 transition`}
    >
      <LinkIcon className="h-4 w-4 mr-2" />
      {label}
    </button>
  )
}

function MiniSparkline() {
  // Static SVG sparkline
  return (
    <svg viewBox="0 0 200 60" className="mt-2 h-16 w-full">
      <polyline
        fill="none"
        stroke="rgb(16,185,129)"
        strokeWidth="3"
        points="0,40 20,38 40,42 60,35 80,30 100,34 120,26 140,28 160,20 180,24 200,18"
      />
      <circle cx="200" cy="18" r="4" className="fill-emerald-400" />
    </svg>
  )
}

function BrandsMarquee() {
  return (
    <div className="border-y border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-xs uppercase tracking-widest text-zinc-500">Trusted by modern cannabis brands</p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 opacity-80">
          {['GreenPeak', 'EverBloom', 'ResinLab', 'Cloud9', 'SunCoast', 'Pine&Co'].map((name) => (
            <div key={name} className="flex items-center justify-center text-zinc-400 text-sm">
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FeatureGrid() {
  const features = [
    {
      title: 'Beautiful Link-in-Bio',
      desc: 'Build a premium profile with blocks for links, products, drops, and contact—no code required.',
      icon: LinkIcon,
    },
    {
      title: 'Deep Analytics',
      desc: 'See clicks, sources, top links, and geos. Export or sync to your stack.',
      icon: ChartBarIcon,
    },
    {
      title: 'Collab Spaces',
      desc: 'Creators and brands can co-host pages for launches, tours, and campaigns.',
      icon: UserGroupIcon,
    },
    {
      title: 'Smart Themes',
      desc: 'Auto-generate on-brand themes from your logo and socials in seconds.',
      icon: SparklesIcon,
    },
  ]
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to grow</h2>
      <p className="mt-3 text-zinc-300 max-w-2xl">
        Convert more fans with a fast, compliant, and customizable link hub—optimized for cannabis.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 hover:border-emerald-600/50 transition-colors"
          >
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <f.icon className="h-5 w-5 text-emerald-400" />
            </div>
            <h3 className="mt-4 font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function CreatorShowcase() {
  const cards = [
    {
      name: 'Emerald Grove',
      handle: '@emeraldgrove',
      img: 'https://images.unsplash.com/photo-1615485737651-e87d2d2b22a1?q=80&w=600&auto=format&fit=crop',
      accent: 'from-emerald-500/20 to-transparent',
    },
    {
      name: 'Cloud9 Collective',
      handle: '@cloud9collective',
      img: 'https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=600&auto=format&fit=crop',
      accent: 'from-sky-500/20 to-transparent',
    },
    {
      name: 'Resin Lab',
      handle: '@resinlab',
      img: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=600&auto=format&fit=crop',
      accent: 'from-violet-500/20 to-transparent',
    },
  ]
  return (
    <section id="showcase" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Creator and brand pages</h2>
          <p className="mt-2 text-zinc-300">Launch in minutes. Customize endlessly.</p>
        </div>
        <a href="/signup" className="hidden sm:inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300">
          Explore templates
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <div key={c.name} className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
            <div className={`absolute inset-0 bg-gradient-to-b ${c.accent}`} />
            <img src={c.img} alt={c.name} className="h-48 w-full object-cover opacity-90 group-hover:opacity-100 transition" />
            <div className="p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-zinc-800 border border-zinc-700" />
                <div>
                  <h3 className="font-semibold">{c.name}</h3>
                  <p className="text-xs text-zinc-400">{c.handle}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <span className="text-[10px] rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2 py-1">
                  Shop
                </span>
                <span className="text-[10px] rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 px-2 py-1">
                  Events
                </span>
                <span className="text-[10px] rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 px-2 py-1">
                  Drops
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function AnalyticsPreview() {
  return (
    <section id="analytics" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">See what drives growth</h2>
          <p className="mt-3 text-zinc-300">
            Understand your audience with real-time analytics. Track clicks by source, top-performing links, geography, and devices—then optimize your page with data.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-zinc-300">
            <li className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
              UTM and referral tracking
            </li>
            <li className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
              Export CSV or connect to Google Sheets
            </li>
            <li className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
              Creator collab attribution
            </li>
          </ul>
          <div className="mt-6">
            <a
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 text-zinc-950 px-5 py-3 font-semibold hover:bg-emerald-400 transition"
            >
              Try analytics free
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-7">
          <AnalyticsCard />
        </div>
      </div>
    </section>
  )
}

function AnalyticsCard() {
  return (
    <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">LeafLink Analytics</h3>
        <span className="text-xs text-zinc-400">Last 30 days</span>
      </div>
      <div className="mt-4 grid sm:grid-cols-3 gap-4">
        <Stat label="Total clicks" value="48,921" delta="+12%" />
        <Stat label="CTR" value="7.4%" delta="+0.8%" />
        <Stat label="Top source" value="Instagram" delta="+21%" />
      </div>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <LargeAreaChart />
        </div>
        <div>
          <TopLinks />
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
      <div className="text-xs text-zinc-400">{label}</div>
      <div className="mt-1 text-xl font-semibold">{value}</div>
      <div className="mt-1 text-xs text-emerald-400">{delta} vs prev.</div>
    </div>
  )
}

function LargeAreaChart() {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
      <svg viewBox="0 0 500 180" className="w-full h-40">
        <defs>
          <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgb(16,185,129)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="rgb(16,185,129)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,120 L40,115 L80,118 L120,105 L160,98 L200,100 L240,90 L280,88 L320,75 L360,82 L400,70 L440,73 L480,60 L500,60 L500,180 L0,180 Z"
          fill="url(#area)"
        />
        <polyline
          fill="none"
          stroke="rgb(16,185,129)"
          strokeWidth="3"
          points="0,120 40,115 80,118 120,105 160,98 200,100 240,90 280,88 320,75 360,82 400,70 440,73 480,60 500,60"
        />
      </svg>
    </div>
  )
}

function TopLinks() {
  const links = [
    { label: 'Shop new drop', clicks: 15293, color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
    { label: 'Instagram', clicks: 11234, color: 'bg-pink-500/20 text-pink-300 border-pink-500/30' },
    { label: 'YouTube review', clicks: 8641, color: 'bg-red-500/20 text-red-300 border-red-500/30' },
  ]
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
      <div className="text-sm font-semibold">Top links</div>
      <div className="mt-3 space-y-2">
        {links.map((l) => (
          <div key={l.label} className="flex items-center justify-between">
            <span className={`text-xs rounded-full border ${l.color} px-2 py-1`}>{l.label}</span>
            <span className="text-sm text-zinc-300">{l.clicks.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_80%_0%,rgba(16,185,129,0.18),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-10 text-center">
          <h3 className="text-3xl font-bold">Turn your audience into customers</h3>
          <p className="mt-3 text-zinc-300">
            Create your LeafLink in minutes. It’s free to start—upgrade anytime for advanced analytics and collabs.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 text-zinc-950 px-6 py-3 font-semibold hover:bg-emerald-400 transition"
            >
              Create your page
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-950 px-6 py-3 font-semibold hover:bg-zinc-800 transition"
            >
              View pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const items = [
    {
      q: 'Is LeafLink compliant for cannabis brands?',
      a: 'Yes. We provide compliant link modules and content controls tailored for cannabis markets. You control age gates, disclaimers, and region settings.',
    },
    {
      q: 'Do I need a website to use LeafLink?',
      a: 'No. Your LeafLink can function as a standalone link-in-bio page. You can connect your domain for SEO and branding.',
    },
    {
      q: 'What analytics are included?',
      a: 'Real-time clicks, sources, UTM parameters, top links, geo/device breakdowns, and export options. Advanced plans add collab attribution.',
    },
    {
      q: 'Can creators and brands collaborate?',
      a: 'Yes. Create shared pages for drops, tours, or launches with clear attribution and split insights.',
    },
  ]
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h3 className="text-2xl font-bold tracking-tight text-center">Frequently asked questions</h3>
      <div className="mt-8 divide-y divide-zinc-800 rounded-2xl border border-zinc-800 bg-zinc-900/60">
        {items.map((it, idx) => {
          const isOpen = open === idx
          return (
            <div key={it.q}>
              <button
                onClick={() => setOpen(isOpen ? null : idx)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-zinc-900/80"
              >
                <span className="font-medium">{it.q}</span>
                <span className="text-zinc-400">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <div className="px-5 pb-5 text-sm text-zinc-300">{it.a}</div>}
            </div>
          )
        })}
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <LeafLinkLogo />
            <span className="font-semibold">LeafLink</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
          <p className="text-xs text-zinc-500">© {new Date().getFullYear()} LeafLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function LeafLinkLogo() {
  return (
    <div className="relative h-6 w-6">
      <span className="absolute inset-0 rounded-lg bg-gradient-to-tr from-emerald-500 to-sky-500" />
      <span className="absolute inset-[3px] rounded-md bg-zinc-950" />
      <span className="absolute left-1 top-1 right-1 bottom-1 rounded-md bg-gradient-to-b from-emerald-400/20 to-transparent" />
    </div>
  )
}