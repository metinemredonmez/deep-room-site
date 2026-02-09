"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { name: "Vision", href: "/#vision" },
  { name: "Layers", href: "/layers", hasDropdown: true },
  { name: "Demos", href: "/demos" },
  { name: "Blog", href: "/blog" },
  { name: "Research", href: "/research" },
  { name: "Architecture", href: "/architecture" },
  { name: "Contact", href: "/contact" },
];

const layerDropdown = [
  {
    name: "Human + AI",
    href: "/layers/human-ai",
    icon: "👤",
    desc: "Emotional AI, companions, and decision-making systems",
  },
  {
    name: "Social Simulation",
    href: "/layers/social-simulation",
    icon: "🏙️",
    desc: "Testing policies and modeling societies",
  },
  {
    name: "Space & Frontier",
    href: "/layers/space-frontier",
    icon: "🚀",
    desc: "Satellites, robotics, and deep space exploration",
  },
  {
    name: "Defense & Sovereign AI",
    href: "/layers/defense",
    icon: "🛡️",
    desc: "National security and strategic autonomy",
  },
  {
    name: "Biological Intelligence",
    href: "/layers/bio-ai",
    icon: "🧬",
    desc: "Genomics, drug discovery, and neuro-AI",
  },
  {
    name: "Infrastructure & Compute",
    href: "/layers/infrastructure",
    icon: "⚡",
    desc: "Cloud, edge AI, and high-performance systems",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="glass rounded-2xl px-6 py-4 flex items-center justify-between pointer-events-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Deep Room"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <div className="hidden sm:block">
              <span className="font-bold text-lg block leading-tight">DEEP ROOM</span>
              <span className="text-[11px] text-gray-400 tracking-wider">THE THINKING MACHINE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
                      {link.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[500px]">
                        <div className="bg-dark-100 border border-white/10 rounded-2xl p-4 grid grid-cols-1 gap-2 shadow-xl">
                          {layerDropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/10 transition-colors"
                            >
                              <span className="text-2xl">{item.icon}</span>
                              <div>
                                <div className="font-medium">{item.name}</div>
                                <div className="text-sm text-gray-400">
                                  {item.desc}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/book-demo" className="btn-primary">
              Book Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden glass rounded-2xl mt-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/book-demo"
              className="btn-primary block text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Demo
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
