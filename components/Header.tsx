"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Track Order", href: "/track-order" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Sagar Digital" width={180} height={51} priority className="h-auto w-[150px] sm:w-[180px]" />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-semibold text-slate-700 transition-colors hover:text-red-600">{item.name}</Link>
          ))}
          <Link href="/get-quote" className="rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-red-700">Get a Quote</Link>
        </nav>

        <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen} className="rounded-xl border border-slate-200 p-2.5 text-slate-800 lg:hidden">
          <span className="block h-0.5 w-6 bg-current" /><span className="mt-1.5 block h-0.5 w-6 bg-current" /><span className="mt-1.5 block h-0.5 w-6 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setMenuOpen(false)} className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700 hover:text-red-600">{item.name}</Link>
            ))}
            <Link href="/get-quote" onClick={() => setMenuOpen(false)} className="mt-4 rounded-xl bg-red-600 px-5 py-3 text-center text-sm font-bold text-white">Get a Quote</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
