"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/teachers", label: "Teachers" },
  { href: "/notices", label: "Notices" },
  { href: "/admission", label: "Admission" },
  { href: "/results", label: "Results" },
  { href: "/certificate", label: "Certificate" },
  { href: "/committee", label: "Committee" },
  { href: "/gallery", label: "Gallery" },
  { href: "/facilities", label: "Facilities" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* Top bar */}
      <div className="bg-[#0f3d27] text-gold-light text-xs py-1 px-4 flex justify-between items-center">
        <span className="text-[#e4c97e]">EIIN: 102726 | Established: 1937 | Mirukhali, Mathbaria, Pirojpur</span>
        <span className="text-[#e4c97e] hidden sm:block">মিরুখালি মাধ্যমিক বিদ্যালয় ও কলেজ</span>
      </div>

      {/* Main nav */}
      <nav className="bg-[#1a5c3a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-[#c9a84c] flex items-center justify-center font-bold text-[#0f3d27] text-lg shadow-md group-hover:bg-[#e4c97e] transition-colors">
                M
              </div>
              <div className="leading-tight">
                <div className="font-bold text-white text-sm sm:text-base">Mirukhali School & College</div>
                <div className="text-[#e4c97e] text-xs hidden sm:block">মিরুখালি মাধ্যমিক বিদ্যালয় ও কলেজ</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2.5 py-1.5 text-sm rounded text-gray-200 hover:text-[#c9a84c] hover:bg-[#0f3d27] transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Hamburger */}
            <button
              className="xl:hidden p-2 rounded-md text-gray-200 hover:text-white hover:bg-[#0f3d27] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"></div>
              <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"></div>
              <div className="w-6 h-0.5 bg-current transition-all"></div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="xl:hidden bg-[#0f3d27] border-t border-[#2d7a4f] px-4 py-3">
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm rounded text-gray-200 hover:text-[#c9a84c] hover:bg-[#1a5c3a] transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
