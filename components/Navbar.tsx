"use client";

import { useState } from "react";

const navLinks = ["Rooms", "Amenities", "Dining", "Gallery", "About", "Contact"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 lg:px-12">
      {/* Logo */}
      <a
        href="#"
        className="font-display text-xl tracking-wide text-white lg:text-2xl"
        id="navbar-logo"
      >
        SUMMER SAND <sup className="text-[10px] align-super">®</sup>
      </a>

      {/* Center nav links — desktop */}
      <ul className="hidden items-center gap-8 lg:flex">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white"
              id={`nav-link-${link.toLowerCase()}`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Language / currency pill */}
        <button
          className="hidden items-center gap-1.5 rounded-full border border-white/30 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:text-white lg:flex"
          id="lang-selector"
        >
          EN
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="ml-0.5"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Hamburger */}
        <button
          className="flex flex-col items-center justify-center gap-1.5 p-2 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          id="hamburger-menu"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "translate-y-[5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-[72px] z-40 flex flex-col bg-dark/95 px-6 pt-8 backdrop-blur-xl transition-all duration-500 lg:hidden ${mobileOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-display text-4xl uppercase text-white/90 transition-colors duration-300 hover:text-peach"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto pb-10">
          <button className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white">
            EN
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
