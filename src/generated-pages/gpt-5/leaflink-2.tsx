import * as React from "react";
import { Link } from "@tanstack/react-router";

export default function RouteComponent() {
  const [email, setEmail] = React.useState("");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to your action/mutation
    alert(`Thanks! We'll reach out at ${email}`);
    setEmail("");
  };

  const features = [
    {
      title: "One-link microsite",
      desc: "Launch a beautiful, brandable profile with links, menus, drops, and embeds—no code.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M10 6h10M4 12h16M4 18h10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Built-in shop",
      desc: "Showcase SKUs, strains, and collabs. Sync inventory or take preorders in a tap.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M3 7h18l-1.5 10.5A2 2 0 0 1 17.5 20h-11a2 2 0 0 1-2-1.7L3 7Zm4 0V4h10v3"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Tips & subs",
      desc: "Turn fans into members. Accept tips, memberships, and gated content.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M12 3v18M5 9l7-6 7 6M6 21h12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Analytics",
      desc: "Track clicks, traffic sources, geo, and product interest in real time.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M4 20V6m0 14h16M8 20v-7m4 7V8m4 12v-4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Smart links",
      desc: "Auto-route visitors by age/region and rotate campaigns with rules.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M10 7h4m-8 5h12M6 17h8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Themes",
      desc: "On-brand themes and leaf-fresh gradients. Dark mode out of the box.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const bars = [18, 26, 20, 32, 28, 40, 46, 38, 58, 52, 70, 64];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white text-slate-800 dark:from-stone-900 dark:via-stone-950 dark:to-stone-950 dark:text-slate-100">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-stone-950/60 border-b border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="group inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-lime-500 text-white shadow">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12 2c2.5 3.7 5.5 5.6 9 6-2.5 3.7-5.5 5.6-9 6-3.5-.4-6.5-2.3-9-6 3.5-.4 6.5-2.3 9-6Z" />
              </svg>
            </span>
            <span className="font-semibold tracking-tight text-slate-900 dark:text-white">
              LeafLink
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a
              href="#features"
              className="hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              Features
            </a>
            <a
              href="#creators"
              className="hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              Creators
            </a>
            <a
              href="#pricing"
              className="hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              FAQ
            </a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/examples/$exampleId"
              params={{
                exampleId: "leaflink-2",
              }}
              className="text-sm hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              Sign in
            </Link>
            <Link
              to="/examples/$exampleId"
              params={{
                exampleId: "leaflink-2",
              }}
              className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              Create your page
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl"
        ></div>
        <div
          aria-hidden
          className="absolute top-0 right-0 h-64 w-64 rounded-full bg-lime-400/20 blur-3xl"
        ></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10 lg:pt-24 lg:pb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-white/70 px-3 py-1 text-xs text-emerald-700 shadow-sm dark:border-emerald-800/50 dark:bg-stone-900/60 dark:text-emerald-300">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Built for cannabis brands & creators
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
                Your brand, one link.{" "}
                <span className="bg-gradient-to-br from-emerald-500 to-lime-500 bg-clip-text text-transparent">
                  Everything grows here.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-slate-600 dark:text-slate-300">
                LeafLink is the link-in-bio built for the cannabis ecosystem.
                Launch a gorgeous page, sell merch or drops, route traffic by
                market, and track every click.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/examples/$exampleId"
                  params={{
                    exampleId: "leaflink-2",
                  }}
                  className="inline-flex justify-center items-center rounded-xl px-5 py-3 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  Create your page
                </Link>
                <a
                  href="#demo"
                  className="inline-flex justify-center items-center rounded-xl px-5 py-3 text-base font-medium border border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600"
                >
                  See a live demo
                </a>
              </div>

              {/* Email capture */}
              <form
                onSubmit={onSubmit}
                className="mt-6 flex max-w-md rounded-xl border border-slate-200 bg-white p-1 shadow-sm dark:border-slate-800 dark:bg-stone-900"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Join the beta — you@brand.com"
                  className="flex-1 rounded-lg bg-transparent px-3 py-2 text-sm outline-none placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500"
                >
                  Request invite
                </button>
              </form>

              {/* Social proof */}
              <div className="mt-6 text-xs text-slate-500 dark:text-slate-400">
                Trusted by 2,000+ growers, dispensaries & creators.
              </div>
            </div>

            {/* Mock preview */}
            <div className="relative">
              <div className="mx-auto w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl dark:border-slate-800 dark:bg-stone-900">
                <div className="rounded-2xl bg-gradient-to-br from-emerald-100 to-lime-100 p-4 dark:from-stone-800 dark:to-stone-800">
                  <div className="rounded-xl bg-white p-4 shadow dark:bg-stone-900">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-400 to-lime-500"></div>
                      <div>
                        <div className="font-semibold">Emerald Labs</div>
                        <div className="text-xs text-slate-500">
                          @emeraldlabs
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {[
                        "Shop Flower",
                        "Drop: Pine OG",
                        "Wholesale Menu",
                        "Find a Retailer",
                      ].map((t) => (
                        <button
                          key={t}
                          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium hover:border-emerald-300 hover:bg-emerald-50 dark:border-slate-700 dark:bg-stone-900 dark:hover:border-emerald-700/50 dark:hover:bg-stone-800"
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 rounded-lg border border-slate-200 p-3 dark:border-slate-700">
                      <div className="text-xs font-medium text-slate-500">
                        This week
                      </div>
                      <div className="mt-3 flex h-20 items-end gap-1">
                        {bars.map((b, i) => (
                          <div
                            key={i}
                            style={{ height: `${b}%` }}
                            className="w-3 rounded-t bg-gradient-to-t from-emerald-500 to-lime-400"
                            title={`${b}`}
                          />
                        ))}
                      </div>
                      <div className="mt-2 text-xs text-slate-500">
                        Clicks • +18% WoW
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-6 -right-6 hidden rotate-6 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-800 dark:bg-stone-900 lg:block">
                <div className="text-xs font-medium text-slate-500">
                  Top Sources
                </div>
                <ul className="mt-2 space-y-1 text-xs">
                  <li className="flex items-center justify-between gap-6">
                    IG Bio <span className="font-semibold">42%</span>
                  </li>
                  <li className="flex items-center justify-between gap-6">
                    QR Cards <span className="font-semibold">28%</span>
                  </li>
                  <li className="flex items-center justify-between gap-6">
                    Email <span className="font-semibold">19%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            What you can do with LeafLink
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
            Build, sell, and measure—designed for the realities of the cannabis
            industry.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-stone-900"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creators */}
      <section
        id="creators"
        className="bg-gradient-to-b from-white to-emerald-50/40 py-16 dark:from-stone-950 dark:to-stone-900/60"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Brands & creators thriving
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                A quick peek at pages built with LeafLink.
              </p>
            </div>
            <Link
              to="/examples/$exampleId"
              params={{
                exampleId: "leaflink-2",
              }}
              className="hidden sm:inline-flex items-center rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-white dark:border-slate-700 dark:hover:bg-stone-900"
            >
              Explore gallery
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Pine & Co.", tag: "@pineco", badge: "Brand" },
              { name: "Mossy Jane", tag: "@mossyjane", badge: "Creator" },
              { name: "High Noon Labs", tag: "@highnoon", badge: "Brand" },
            ].map((c) => (
              <article
                key={c.tag}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md dark:border-slate-800 dark:bg-stone-900"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-400 to-lime-500" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{c.name}</h3>
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                        {c.badge}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500">{c.tag}</div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <a className="rounded-lg border border-slate-200 px-3 py-2 text-center hover:border-emerald-300 hover:bg-emerald-50 dark:border-slate-700 dark:hover:border-emerald-700/50 dark:hover:bg-stone-800">
                    Shop
                  </a>
                  <a className="rounded-lg border border-slate-200 px-3 py-2 text-center hover:border-emerald-300 hover:bg-emerald-50 dark:border-slate-700 dark:hover:border-emerald-700/50 dark:hover:bg-stone-800">
                    Drops
                  </a>
                  <a className="rounded-lg border border-slate-200 px-3 py-2 text-center hover:border-emerald-300 hover:bg-emerald-50 dark:border-slate-700 dark:hover:border-emerald-700/50 dark:hover:bg-stone-800">
                    Wholesale
                  </a>
                  <a className="rounded-lg border border-slate-200 px-3 py-2 text-center hover:border-emerald-300 hover:bg-emerald-50 dark:border-slate-700 dark:hover:border-emerald-700/50 dark:hover:bg-stone-800">
                    Newsletter
                  </a>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>CTR 7.3%</span>
                  <span>Avg. order $42</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics highlight */}
      <section id="analytics" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Measure what matters
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Real-time dashboards for links, SKUs, sources, and geography.
                Export raw data or plug into your stack.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "UTM tracking with campaign insights",
                  "Market-aware routing (age/region compliance)",
                  "Top products & link performance",
                  "Export to CSV • Webhooks • Zapier",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                      <svg
                        viewBox="0 0 24 24"
                        className="m-1.5 h-2.5 w-2.5"
                        fill="currentColor"
                      >
                        <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chart mock */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-stone-900">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">
                    Clicks & Conversions
                  </div>
                  <div className="text-xs text-slate-500">Last 30 days</div>
                </div>
                <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  +22.8% WoW
                </div>
              </div>

              <div className="mt-6 h-40 w-full rounded-xl bg-gradient-to-b from-emerald-50 to-white p-3 dark:from-stone-800 dark:to-stone-900">
                <div className="flex h-full items-end gap-1">
                  {bars.map((b, i) => (
                    <div key={i} className="flex w-full items-end gap-1">
                      <div
                        style={{ height: `${Math.max(8, b)}%` }}
                        className="w-full rounded-t bg-emerald-400/70"
                      />
                      <div
                        style={{ height: `${Math.max(6, b - 8)}%` }}
                        className="w-full rounded-t bg-lime-400/70"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
                <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-800">
                  <div className="text-slate-500">CTR</div>
                  <div className="mt-1 text-base font-semibold">6.9%</div>
                </div>
                <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-800">
                  <div className="text-slate-500">Top Market</div>
                  <div className="mt-1 text-base font-semibold">CA</div>
                </div>
                <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-800">
                  <div className="text-slate-500">AOV</div>
                  <div className="mt-1 text-base font-semibold">$47</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Simple pricing
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Start free, grow as you need.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$0",
                blurb: "Everything to launch your page.",
                perks: [
                  "Unlimited links",
                  "1 theme",
                  "Basic analytics",
                  "Email support",
                ],
                cta: "Get started",
              },
              {
                name: "Pro",
                price: "$19",
                blurb: "For growing brands and creators.",
                perks: [
                  "Custom domain",
                  "Advanced analytics",
                  "Tips & subscriptions",
                  "UTM + source routing",
                ],
                cta: "Try Pro",
                highlight: true,
              },
              {
                name: "Business",
                price: "Let’s talk",
                blurb: "For teams and wholesalers.",
                perks: [
                  "Multi-member access",
                  "Inventory sync",
                  "Webhooks & SSO",
                  "Priority support",
                ],
                cta: "Contact sales",
              },
            ].map((p) => (
              <div
                key={p.name}
                className={[
                  "relative rounded-2xl border bg-white p-6 shadow-sm dark:bg-stone-900",
                  p.highlight
                    ? "border-emerald-300 ring-1 ring-emerald-300 dark:border-emerald-700/60 dark:ring-emerald-700/40"
                    : "border-slate-200 dark:border-slate-800",
                ].join(" ")}
              >
                {p.highlight && (
                  <div className="absolute -top-3 right-4 rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                    Most popular
                  </div>
                )}
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="mt-2 text-3xl font-black">
                  {p.price}
                  <span className="text-base font-medium text-slate-500">
                    /mo
                  </span>
                </div>
                <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {p.blurb}
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                        fill="currentColor"
                      >
                        <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                      </svg>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500">
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="border-t border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-stone-950"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-4">
            {[
              {
                q: "Is LeafLink compliant?",
                a: "LeafLink is a link-in-bio and analytics tool. We provide market-aware routing and age/region gates. You’re responsible for local compliance on sales and advertising.",
              },
              {
                q: "Do you take a cut of sales?",
                a: "No fees on links. If you enable tips/subscriptions or payments via connected processors, standard processor fees apply.",
              },
              {
                q: "Can I use my own domain?",
                a: "Yep! On Pro and up you can connect a custom domain and use SSL automatically.",
              },
              {
                q: "How do I migrate my Linktree/Bio site?",
                a: "Import your links with one click. We’ll recreate your layout and slugs where possible.",
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-xl border border-slate-200 p-4 open:bg-emerald-50/40 dark:border-slate-800 dark:open:bg-stone-900/50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-medium">{q}</span>
                  <span className="rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-500 group-open:hidden dark:border-slate-700">
                    Open
                  </span>
                  <span className="hidden rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-500 group-open:inline dark:border-slate-700">
                    Close
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-500 to-lime-500 p-8 text-white shadow-2xl dark:border-emerald-800">
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Ready to grow your link-in-bio?
                </h3>
                <p className="mt-2/ text-white/90">
                  Create your page in under 60 seconds. It’s free to start.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  to="/examples/$exampleId"
                  params={{
                    exampleId: "leaflink-2",
                  }}
                  className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-slate-900 hover:bg-white/90"
                >
                  Create your page
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center rounded-xl border border-white/40 px-5 py-3 hover:bg-white/10"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 py-10 text-sm dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-lime-500 text-white shadow">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12 2c2.5 3.7 5.5 5.6 9 6-2.5 3.7-5.5 5.6-9 6-3.5-.4-6.5-2.3-9-6 3.5-.4 6.5-2.3 9-6Z" />
              </svg>
            </span>
            <span className="font-semibold">LeafLink</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-500 dark:text-slate-400">
            <a
              href="#privacy"
              className="hover:text-slate-700 dark:hover:text-slate-200"
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="hover:text-slate-700 dark:hover:text-slate-200"
            >
              Terms
            </a>
            <a
              href="#brand"
              className="hover:text-slate-700 dark:hover:text-slate-200"
            >
              Brand
            </a>
            <a
              href="#contact"
              className="hover:text-slate-700 dark:hover:text-slate-200"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
