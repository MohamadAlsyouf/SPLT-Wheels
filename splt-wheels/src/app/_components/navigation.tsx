"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthUI } from "./auth-ui";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-white transition-colors duration-200 hover:text-blue-400"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <span className="text-xl font-bold text-white">S</span>
            </div>
            <span className="text-xl font-bold lg:text-2xl">SPLT Wheels</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium text-white transition-colors duration-200 hover:text-blue-400 ${
                  pathname === item.href ? "text-blue-400" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth UI */}
          <div className="hidden lg:block">
            <AuthUI />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white transition-colors duration-200 hover:text-blue-400 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`transition-all duration-300 ease-in-out lg:hidden ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <div className="space-y-4 border-t border-gray-700 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block font-medium text-white transition-colors duration-200 hover:text-blue-400 ${
                  pathname === item.href ? "text-blue-400" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-gray-700 pt-4">
              <AuthUI />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
