import { createFileRoute } from "@tanstack/react-router";
import { Outlet, Link, useRouterState } from "@tanstack/react-router";
import * as React from "react";

export const Route = createFileRoute("/_pathlessLayout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  const routerState = useRouterState();
  const isHome = routerState.location.pathname === "/";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-gray-200/70 dark:border-gray-800/70 bg-white/75 dark:bg-gray-950/60 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="group inline-flex items-center gap-3">
            <div className="relative group">
              {/* Gradient glow behind */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 opacity-40 blur group-hover:opacity-60 transition" />

              {/* White/dark box */}
              <div className="relative h-8 w-8 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 grid place-items-center shadow-sm">
                {/* Small purple cube with emoji on top */}
                <div className="relative h-4 w-4 rounded-sm bg-gradient-to-br from-sky-500 to-fuchsia-500 grid place-items-center">
                  <span className="text-[0.65rem] opacity-90 leading-none">
                    🔮
                  </span>
                </div>
              </div>
            </div>
            <h1 className="pl-2 text-lg sm:text-xl tracking-tight">
              <b>LLM Compare</b> Frontend Edition
            </h1>
          </Link>
        </div>
      </header>

      {/* Sub header gradient bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

      {/* Main */}
      <main className="px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page heading context */}
          <div className="py-8">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          Built with TanStack Router + Tailwind.
          <br />
          UX polished with love (that mystery ah model).
        </div>
      </footer>
    </div>
  );
}
