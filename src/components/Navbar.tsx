"use client";

import React, { useState } from "react";
import {
  Phone,
  Shield,
  Menu,
  X,
  Clock,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { CDO_CONTACT } from "@/data/services";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "CDO Coverage", href: "#service-areas" },
    { label: "Free Inspection", href: "#quote" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full shadow-md bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/80 transition-all">
      {/* Top Notification Bar */}
      <div className="bg-black text-slate-300 text-xs sm:text-sm py-1.5 px-4 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-600 text-white uppercase tracking-wider">
              CDO Local
            </span>
            <span className="hidden sm:inline font-medium text-slate-300">
              FDA-Approved Treatments & Certified Technicians across Cagayan de Oro
            </span>
            <span className="sm:hidden font-medium text-slate-300">
              Fast CDO Pest & Termite Response
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5" /> Mon-Sat: 7:30 AM – 6:30 PM
            </span>
            <a
              href={CDO_CONTACT.phoneTel}
              className="flex items-center gap-1 font-semibold text-red-400 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Hotline: 0917-824-7378</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-950/50 group-hover:scale-105 transition-transform">
              <Shield className="w-7 h-7 text-white stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  PEST PATROL
                </span>
                <span className="px-1.5 py-0.5 text-xs font-bold rounded bg-red-500/10 text-red-500 border border-red-500/30">
                  CDO
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-medium text-slate-400 tracking-wide">
                Pest & Termite Specialists • Northern Mindanao
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-200 hover:text-red-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CDO_CONTACT.messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium text-slate-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-red-500" />
              Messenger
            </a>

            <a
              href="#quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-red-600 hover:bg-red-500 shadow-md shadow-red-950/50 hover:shadow-lg transition-all"
            >
              <CheckCircle2 className="w-4 h-4" />
              Free Inspection
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={CDO_CONTACT.phoneTel}
              aria-label="Call CDO Hotline"
              className="sm:hidden p-2 rounded-lg bg-neutral-900 text-red-500 border border-neutral-800"
            >
              <Phone className="w-5 h-5 fill-current" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-neutral-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-800 bg-neutral-950 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-200 hover:bg-neutral-900 hover:text-red-500 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
              <a
                href={CDO_CONTACT.phoneTel}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-base font-bold text-white bg-red-600 hover:bg-red-500 shadow-lg"
              >
                <Phone className="w-5 h-5 fill-current" />
                Call Hotline: 0917-824-7378
              </a>

              <a
                href={CDO_CONTACT.messengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-slate-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700"
              >
                <MessageCircle className="w-4 h-4 text-red-500" />
                Message us on Facebook
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
