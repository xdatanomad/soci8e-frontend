"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { label: "home", href: "/" },
  { label: "settings", href: "/settings" },
  { label: "logout", href: "/logout" },
];

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-center px-4 py-6 sm:py-8">
      <div className="relative flex w-full items-center justify-between rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm md:w-4/5 md:px-6">
        <div className="flex items-center gap-3">
          <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-white/10 text-base font-semibold uppercase tracking-wide text-white/80 sm:flex">
            s
          </div>
          <span className="text-lg font-semibold">soci8e</span>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-haspopup="true"
            aria-expanded={isMenuOpen}
            aria-controls="primary-menu"
            className="flex flex-col items-end justify-center gap-1 rounded-full px-2 py-1 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="h-0.5 w-6 bg-current transition-all" />
            <span className="h-0.5 w-5 bg-current transition-all" />
            <span className="h-0.5 w-4 bg-current transition-all" />
          </button>

          {isMenuOpen && (
            <nav
              id="primary-menu"
              className="absolute right-0 top-[calc(100%+0.75rem)] w-40 rounded-2xl border border-white/15 bg-slate-900/95 p-2 text-sm text-white shadow-2xl backdrop-blur"
            >
              <ul className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="block rounded-xl px-3 py-2 capitalize transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}