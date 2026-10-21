"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { CDO_CONTACT } from "@/data/services";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Treatments", href: "#services" },
    { label: "Field record", href: "#gallery" },
    { label: "Standards", href: "#why-us" },
    { label: "Patrol zones", href: "#service-areas" },
    { label: "Inspection", href: "#quote" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#e2e2e2]/95 backdrop-blur-md anim-reveal">
      {/* Top Dispatch Banner */}
      <div className="bg-[#121212] text-[#e2e2e2] py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-sm">Pest Patrol CDO</span>
            <span className="hidden sm:inline text-stone-300 text-sm">
              Licensed Termite & Pest Management in Cagayan de Oro
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="hidden md:inline text-stone-300">
              Dispatch: Mon–Sun 7:00 AM – 7:00 PM
            </span>
            <a
              href={CDO_CONTACT.phoneTel}
              className="flex items-center gap-1.5 text-red-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Hotline: {CDO_CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Editorial Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Mark & Title */}
          <a href="#" className="flex items-center gap-3.5">
            <div className="w-12 h-12 bg-[#121212] flex items-center justify-center overflow-hidden flex-shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Pest Patrol CDO Insignia"
                width={48}
                height={48}
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#121212] leading-tight">
                Pest Patrol CDO
              </span>
              <span className="block text-sm text-stone-700">
                Municipal & Residential Pest Defense
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-stone-900">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#7d0c14] transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://m.me/PestPatrolCDO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#121212] bg-[#d6d6d6] hover:bg-[#cac6be] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Messenger</span>
            </a>
            <a
              href="#quote"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-[#7d0c14] hover:bg-[#5c080e] transition-colors"
            >
              Book Inspection
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-[#121212] bg-[#d6d6d6]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#d6d6d6] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#121212] py-2 px-2 hover:bg-[#cac6be]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 flex flex-col gap-2">
            <a
              href={CDO_CONTACT.phoneTel}
              className="w-full py-3 text-center text-base font-semibold text-white bg-[#7d0c14]"
            >
              Call Hotline: {CDO_CONTACT.phoneDisplay}
            </a>
            <a
              href="https://m.me/PestPatrolCDO"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-base font-semibold text-[#121212] bg-white"
            >
              Message on Facebook
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
