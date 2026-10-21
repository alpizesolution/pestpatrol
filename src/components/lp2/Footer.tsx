import React from "react";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { CDO_CONTACT } from "@/data/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] text-[#ebe8e3] pt-16 pb-20 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14">
          
          {/* Brand & Mandate */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/logo.jpg"
                  alt="Pest Patrol Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Pest Patrol CDO
              </span>
            </div>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-6 max-w-sm">
              Professional subterranean termite barrier injection, odorless cockroach elimination, and commercial IPM maintenance across Cagayan de Oro and Northern Mindanao.
            </p>
            <p className="text-sm text-stone-400 font-medium">
              FDA-Licensed Formulations · Certified Structural Applicators
            </p>
          </div>

          {/* Direct Hotlines & Hours */}
          <div className="lg:col-span-4">
            <p className="font-serif text-lg font-bold text-white mb-4">
              Dispatch & Operational Hours
            </p>
            <div className="space-y-3 text-sm text-stone-300">
              <p>
                <strong className="text-white">General Inquiries:</strong> Monday – Sunday: 7:00 AM – 7:00 PM
              </p>
              <p>
                <strong className="text-white">Emergency Infestation:</strong> 24/7 Mobile Dispatch on-call
              </p>
              <p className="pt-2">
                <a
                  href={CDO_CONTACT.phoneTel}
                  className="inline-flex items-center gap-2 text-white hover:text-red-300 font-semibold text-base"
                >
                  <Phone className="w-4 h-4 text-red-400" />
                  <span>{CDO_CONTACT.phoneDisplay}</span>
                </a>
              </p>
              <p>
                <a
                  href="https://m.me/PestPatrolCDO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-stone-300 hover:text-white"
                >
                  <MessageCircle className="w-4 h-4 text-red-400" />
                  <span>m.me/PestPatrolCDO</span>
                </a>
              </p>
            </div>
          </div>

          {/* Key CDO Zones */}
          <div className="lg:col-span-3">
            <p className="font-serif text-lg font-bold text-white mb-4">
              Operational Zones
            </p>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>Uptown: Pueblo de Oro, Xavier Estates</li>
              <li>Downtown: Divisoria, Nazareth, Cogon</li>
              <li>Transit: Lapasan, Gusa, Bulua</li>
              <li>Industrial: Bugo, Puerto, Tablon</li>
              <li>Corridor: Tagoloan, PHIVIDEC, Opol</li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Regulatory */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-400">
          <p>
            &copy; {currentYear} Pest Patrol CDO. All rights reserved. Cagayan de Oro City, Misamis Oriental, Philippines.
          </p>
          <p>
            All termiticides and chemicals applied comply with Philippine FDA & FPA regulatory safety standards.
          </p>
        </div>

      </div>
    </footer>
  );
}
