"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    { label: "Field Gallery", href: "#gallery" },
    { label: "CDO Coverage", href: "#service-areas" },
    { label: "Free Inspection", href: "#quote" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Top Notification Bar */}
      <div className="bg-neutral-950 text-slate-300 text-xs sm:text-sm py-1.5 px-4 border-b border-neutral-900">
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
              <span>Hotline: {CDO_CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-md shadow-red-600/30 group-hover:scale-105 transition-transform overflow-hidden relative">
              <Image
                src="/images/logo.jpg"
                alt="Pest Patrol CDO Logo"
                width={48}
                height={48}
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-neutral-950">
                  PEST PATROL
                </span>
                <span className="px-1.5 py-0.5 text-xs font-bold rounded bg-red-50 text-red-600 border border-red-200">
                  CDO
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-medium text-slate-500 tracking-wide">
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
                className="text-sm font-semibold text-neutral-800 hover:text-red-600 transition-colors"
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
              className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium border border-neutral-300 text-neutral-800 hover:bg-neutral-100 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-red-600" />
              Messenger
            </a>

            <a
              href="#quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm transition-all"
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
              className="sm:hidden p-2 rounded-lg bg-neutral-100 text-red-600 border border-slate-200"
            >
              <Phone className="w-5 h-5 fill-current" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-800 hover:bg-neutral-100 focus:outline-none"
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
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-neutral-800 hover:bg-neutral-50 hover:text-red-600 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <a
                href={CDO_CONTACT.phoneTel}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-base font-bold text-white bg-red-600 hover:bg-red-700 shadow-md"
              >
                <Phone className="w-5 h-5 fill-current" />
                Call Hotline: {CDO_CONTACT.phonePrimary}
              </a>
              <a
                href={CDO_CONTACT.phoneSecondaryTel}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-bold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300"
              >
                <Phone className="w-4 h-4 text-red-600 fill-current" />
                Secondary: {CDO_CONTACT.phoneSecondary}
              </a>

              <a
                href={CDO_CONTACT.messengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300"
              >
                <MessageCircle className="w-4 h-4 text-red-600" />
                Message us on Facebook
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
