import { Link } from "@tanstack/react-router";

export default function RouteComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-emerald-900 to-black text-emerald-50 selection:bg-emerald-400/30">
      {/* ======= Top Nav ======= */}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-emerald-800/40 bg-black/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LeafLinkMark className="h-8 w-8" />
            <span className="font-semibold tracking-tight">LeafLink</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-emerald-100/80">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#creators" className="hover:text-white">
              Creators
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/examples/$exampleId"
              params={{
                exampleId: "leaflink-2",
              }}
              className="px-3 py-2 text-sm rounded-md hover:bg-emerald-800/30"
            >
              Log in
            </Link>
            <Link
              to="/examples/$exampleId"
              params={{
                exampleId: "leaflink-2",
              }}
              className="px-4 py-2 text-sm font-medium rounded-md bg-emerald-500 hover:bg-emerald-400 text-emerald-950 shadow-lg shadow-emerald-900/40"
            >
              Create your page
            </Link>
          </div>
        </div>
      </header>

      {/* ======= Hero ======= */}
      <section className="relative">
        {/* glow */}
        <div
          className="pointer-events-none absolute inset-x-0 -top-24 h-72 opacity-40 blur-3xl"
          aria-hidden="true"
        >
          <div className="mx-auto max-w-3xl h-full bg-emerald-600/30 rounded-full"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-emerald-200/70 bg-emerald-800/40 ring-1 ring-emerald-700/50 px-2 py-1 rounded">
                <Sparkles className="h-3.5 w-3.5" /> New • Creator analytics,
                menus, and age-gate
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Turn your cannabis brand into a{" "}
                <span className="text-emerald-300">mini-site</span> that
                actually converts.
              </h1>
              <p className="text-emerald-100/80 text-lg">
                LeafLink is your bio link, menu, and analytics hub—all in one
                place. Share a single link. Grow email/SMS. Understand what
                drives sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/examples/$exampleId"
                  params={{
                    exampleId: "leaflink-2",
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold shadow-lg shadow-emerald-900/40"
                >
                  Get started free <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md ring-1 ring-emerald-700/60 hover:bg-emerald-800/30"
                >
                  See how it works
                </a>
              </div>

              {/* trust row */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 text-emerald-200/70">
                <span className="text-xs uppercase tracking-widest">
                  Trusted by
                </span>
                <Badge>Craft Brands</Badge>
                <Badge>Dispensaries</Badge>
                <Badge>Creators</Badge>
                <Badge>CBD & Wellness</Badge>
              </div>
            </div>

            {/* Hero card / product preview */}
            <div className="relative">
              <div className="rounded-2xl border border-emerald-700/50 bg-gradient-to-br from-emerald-900/60 to-emerald-950/60 p-5 shadow-2xl">
                <div className="rounded-xl bg-black/30 ring-1 ring-emerald-800/50 p-4">
                  {/* “Link-in-bio” mock */}
                  <div className="flex items-center gap-3 pb-4 border-b border-emerald-800/50">
                    <div className="h-10 w-10 rounded-full bg-emerald-500/90 flex items-center justify-center ring-2 ring-emerald-300/40">
                      <LeafLinkMark className="h-6 w-6 text-emerald-950" />
                    </div>
                    <div>
                      <div className="font-semibold">Green Goddess</div>
                      <div className="text-xs text-emerald-200/70">
                        @greengoddess
                      </div>
                    </div>
                    <div className="ml-auto">
                      <span className="text-[10px] px-2 py-1 rounded bg-emerald-800/40 ring-1 ring-emerald-700/50">
                        Age 21+
                      </span>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 pt-4">
                    <LinkTile title="Shop Menu" subtitle="Live inventory" />
                    <LinkTile
                      title="Drops & Collabs"
                      subtitle="Limited releases"
                    />
                    <LinkTile title="Find Us" subtitle="Retail map" />
                    <LinkTile
                      title="Join SMS Club"
                      subtitle="+12% repeat sales"
                    />
                  </div>
                </div>

                {/* Analytics mini card */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <Kpi label="Clicks" value="12.4k" delta="+18%" />
                  <Kpi label="Signup Rate" value="7.3%" delta="+0.9%" />
                  <Kpi label="Top Referrer" value="Instagram" delta="↑" />
                </div>
                <div className="mt-4 rounded-xl bg-black/20 ring-1 ring-emerald-800/50 p-4">
                  <div className="flex items-center justify-between pb-2">
                    <h4 className="text-sm font-medium text-emerald-200">
                      Last 30 days
                    </h4>
                    <span className="text-xs text-emerald-300/70">Traffic</span>
                  </div>
                  <TinyAreaChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= Features ======= */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="grid lg:grid-cols-3 gap-8">
          <Feature
            icon={<LinkIcon className="h-6 w-6" />}
            title="Links that sell"
            desc="Beautiful, brandable blocks: menus, product cards, maps, forms, and more. Built for conversions, not clutter."
          />
          <Feature
            icon={<Shield className="h-6 w-6" />}
            title="Age-gate & compliance"
            desc="21+ gates, content warnings, and locale rules baked in so your links stay safe and shareable."
          />
          <Feature
            icon={<Chart className="h-6 w-6" />}
            title="Creator-grade analytics"
            desc="Track clicks, CTR, sources, sales assists, and A/B test different layouts to optimize growth."
          />
          <Feature
            icon={<Bolt className="h-6 w-6" />}
            title="Integrations"
            desc="Connect Shopify, Leafly, Instagram, X, YouTube, and more. Auto-sync menus and drops."
          />
          <Feature
            icon={<Message className="h-6 w-6" />}
            title="Email & SMS capture"
            desc="One-tap forms feed your CRM. Export anytime. Own your audience, not just the algorithm."
          />
          <Feature
            icon={<Palette className="h-6 w-6" />}
            title="Design in minutes"
            desc="Pick a theme, drop in links, go live. No code. Just vibes."
          />
        </div>
      </section>

      {/* ======= Creators ======= */}
      <section
        id="creators"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="flex items-end justify-between gap-4 pb-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Built for brands & creators
          </h2>
          <a
            href="#pricing"
            className="text-sm text-emerald-200/80 hover:text-white"
          >
            See pricing
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <CreatorCard name="High Tide Co." tag="@hightide" stat="+32% CTR" />
          <CreatorCard name="Bloom Labs" tag="@bloom" stat="18k clicks/mo" />
          <CreatorCard
            name="Sunny’s Garden"
            tag="@sunnys"
            stat="4.7% signup rate"
          />
        </div>
      </section>

      {/* ======= How it works ======= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <ol className="grid md:grid-cols-3 gap-6 list-none counter-reset">
          <Step
            n={1}
            title="Create your page"
            desc="Claim your @handle, choose a theme, add links & a menu."
          />
          <Step
            n={2}
            title="Connect integrations"
            desc="Sync products, embed videos, and enable the age-gate."
          />
          <Step
            n={3}
            title="Measure & grow"
            desc="Watch traffic, test layouts, and turn fans into customers."
          />
        </ol>
      </section>

      {/* ======= Pricing ======= */}
      <section
        id="pricing"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <PriceCard
            name="Starter"
            price="$0"
            pill="Free"
            bullets={[
              "Unlimited links",
              "1 theme",
              "Basic analytics",
              "Email/SMS capture",
            ]}
            cta="Start free"
          />
          <PriceCard
            featured
            name="Pro"
            price="$19"
            pill="Most Popular"
            bullets={[
              "Advanced analytics",
              "A/B testing",
              "Custom domain",
              "Integrations suite",
              "Priority support",
            ]}
            cta="Try Pro"
          />
        </div>
        <p className="text-xs text-emerald-200/60 mt-3">
          Prices in USD. Cancel anytime.
        </p>
      </section>

      {/* ======= FAQ ======= */}
      <section
        id="faq"
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-6">
          Frequently asked questions
        </h3>
        <div className="space-y-3">
          <Faq
            q="Is LeafLink compliant for cannabis content?"
            a="Yes. Built-in age gating and content flags help you share responsibly. You can also restrict certain blocks by locale."
          />
          <Faq
            q="Do I need a website?"
            a="Nope. Your LeafLink page is a mini-site you can launch in minutes, and you can add a custom domain on Pro."
          />
          <Faq
            q="What analytics are included?"
            a="Clicks, CTR, sources, geography, device breakdown, conversion rates, and block-level performance—plus exports."
          />
        </div>
      </section>

      {/* ======= Footer ======= */}
      <footer className="border-t border-emerald-800/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <LeafLinkMark className="h-6 w-6" />
            <span className="text-sm text-emerald-200/80">
              © {new Date().getFullYear()} LeafLink
            </span>
          </div>
          <div className="text-sm text-emerald-200/70">
            <a href="#" className="hover:text-white">
              Terms
            </a>{" "}
            ·{" "}
            <a href="#" className="hover:text-white">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* =========================
   Reusable UI Bits (SVGs, Cards, etc.)
   ========================= */
function LeafLinkMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 3c5 6 9 8 13 9-4 4-8 6-13 17C11 18 7 16 3 12c4-1 8-3 13-9Z" />
    </svg>
  );
}

function ArrowRight({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 5l7 7-7 7"
      />
    </svg>
  );
}

function Sparkles({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l1.8 4.8L19 8.5l-4.6 2 1.6 5.1L12 13l-4 2.6 1.6-5.1L5 8.5l5.2-1.7L12 2Z" />
      <circle cx="19" cy="4" r="1.5" />
      <circle cx="4" cy="18" r="1.2" />
    </svg>
  );
}

function LinkIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        d="M10 14a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1.5 1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 10a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7L13.5 17.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Shield({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4Z" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Chart({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M3 21h18" />
      <rect x="5" y="10" width="3" height="7" />
      <rect x="10.5" y="6" width="3" height="11" />
      <rect x="16" y="12" width="3" height="5" />
    </svg>
  );
}

function Bolt({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8Z" />
    </svg>
  );
}

function Message({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M21 12c0 3.9-4.3 7-9 7-1.4 0-2.8-.3-4-.8L3 20l1.9-3.1C4.3 16 3 14.1 3 12 3 8.1 7.3 5 12 5s9 3.1 9 7Z" />
    </svg>
  );
}

function Palette({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 3a9 9 0 1 0 0 18c1.6 0 2-1 2-2 0-1.1.9-2 2-2h1a4 4 0 0 0 0-8h-1c-1.1 0-2-.9-2-2 0-1-0.4-2-2-2Z" />
    </svg>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-800/30 ring-1 ring-emerald-700/50">
      {children}
    </span>
  );
}

function LinkTile({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <button className="group rounded-lg p-4 text-left bg-emerald-900/40 hover:bg-emerald-800/40 ring-1 ring-emerald-800/60 transition">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{title}</div>
          {subtitle && (
            <div className="text-xs text-emerald-200/70">{subtitle}</div>
          )}
        </div>
        <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition" />
      </div>
    </button>
  );
}

function Kpi({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta?: string;
}) {
  return (
    <div className="rounded-lg bg-black/20 ring-1 ring-emerald-800/50 p-3">
      <div className="text-xs text-emerald-200/70">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
      {delta && <div className="text-[10px] text-emerald-300/80">{delta}</div>}
    </div>
  );
}

function TinyAreaChart() {
  // purely decorative sparkline
  return (
    <svg viewBox="0 0 240 64" className="w-full h-16" aria-hidden="true">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgb(52 211 153)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="rgb(5 46 22)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 48 C 20 52, 40 20, 60 26 S 100 58, 120 40 160 10, 180 18 220 50, 240 36 V64 H0 Z"
        fill="url(#g)"
      />
      <path
        d="M0 48 C 20 52, 40 20, 60 26 S 100 58, 120 40 160 10, 180 18 220 50, 240 36"
        fill="none"
        stroke="rgb(110 231 183)"
        strokeWidth="2"
      />
    </svg>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl bg-emerald-900/30 ring-1 ring-emerald-800/50 p-6">
      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-800/40 ring-1 ring-emerald-700/60 mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-emerald-100/80">{desc}</p>
    </div>
  );
}

function CreatorCard({
  name,
  tag,
  stat,
}: {
  name: string;
  tag: string;
  stat: string;
}) {
  return (
    <div className="rounded-xl overflow-hidden ring-1 ring-emerald-800/50 bg-gradient-to-br from-emerald-900/40 to-emerald-950/40">
      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-emerald-500/80 flex items-center justify-center ring-2 ring-emerald-300/40">
            <span className="font-bold text-emerald-950">
              {name.slice(0, 1)}
            </span>
          </div>
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-xs text-emerald-200/70">{tag}</div>
          </div>
          <span className="ml-auto text-xs px-2 py-1 rounded bg-emerald-800/40 ring-1 ring-emerald-700/50">
            {stat}
          </span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <LinkTile title="Shop Menu" />
          <LinkTile title="Newsletter" />
        </div>
      </div>
    </div>
  );
}

function Step({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <li className="rounded-xl p-6 bg-emerald-900/30 ring-1 ring-emerald-800/50">
      <div className="flex items-center gap-3 mb-2">
        <span className="h-8 w-8 rounded-full bg-emerald-500/90 text-emerald-950 font-bold flex items-center justify-center">
          {n}
        </span>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="text-emerald-100/80">{desc}</p>
    </li>
  );
}

function PriceCard({
  name,
  price,
  bullets,
  cta,
  pill,
  featured,
}: {
  name: string;
  price: string;
  bullets: string[];
  cta: string;
  pill?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl p-6 ring-1 ${featured ? "bg-emerald-800/40 ring-emerald-400/50 shadow-xl shadow-emerald-900/40" : "bg-emerald-900/30 ring-emerald-800/50"}`}
    >
      {pill && (
        <span
          className={`absolute -top-3 left-4 text-[11px] px-2 py-1 rounded ${featured ? "bg-emerald-400 text-emerald-950" : "bg-emerald-800/60 text-emerald-200/90"} ring-1 ring-emerald-700/60`}
        >
          {pill}
        </span>
      )}
      <div className="flex items-baseline justify-between">
        <h4 className="text-xl font-semibold">{name}</h4>
        <div className="text-3xl font-extrabold">
          {price}
          <span className="text-sm font-normal text-emerald-200/70">/mo</span>
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-emerald-100/80">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/examples/$exampleId"
        params={{
          exampleId: "leaflink-2",
        }}
        className={`mt-5 inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold ${featured ? "bg-emerald-400 text-emerald-950 hover:bg-emerald-300" : "ring-1 ring-emerald-700/60 hover:bg-emerald-800/30"}`}
      >
        {cta} <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-lg ring-1 ring-emerald-800/50 bg-emerald-900/30 p-4">
      <summary className="cursor-pointer list-none flex items-center justify-between">
        <span className="font-medium">{q}</span>
        <span className="transition group-open:rotate-45">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <p className="mt-3 text-emerald-100/80">{a}</p>
    </details>
  );
}
