import React from "react";
import Image from "next/image";
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  ExternalLink,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { CDO_CONTACT, SERVICE_AREAS } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-black text-slate-300 pt-16 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-md shadow-red-950/50 overflow-hidden relative">
                <Image
                  src="/images/logo.jpg"
                  alt="Pest Patrol CDO Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                PEST PATROL <span className="text-red-500">CDO</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 font-semibold">
              🔰 Serving the Whole of Cagayan de Oro (CDO) and Northern Mindanao
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              We service Homes, Commercial Establishments, Factories & Warehouses, and Pre-Construction Soil Poisoning. Safe & effective control for Cockroaches, Termites, Rodents, Ants, and Mosquitoes.
            </p>

            <div className="pt-2">
              <a
                href={CDO_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-red-500 hover:text-red-400 hover:underline transition-colors"
              >
                <Facebook className="w-4 h-4 fill-current" />
                <span>facebook.com/PestPatrolCDO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links & Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Target Solutions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  Termite Soil & Wood Treatment (Anay)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  Cockroach Gel Baiting & Spray (Ipis)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  Rodent Baits & Attic Traps (Daga)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  ULV Mosquito Misting & Fogging (Dengue)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  Pre-Construction Soil Poisoning
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-red-400 transition-colors">
                  FDA Chemical Safety Certification
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours & Dispatch Zones */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              CDO Coverage Zones
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {SERVICE_AREAS.map((area, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-red-500 flex-shrink-0" />
                  <span>{area.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              CDO Headquarters & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>{CDO_CONTACT.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>{CDO_CONTACT.hours}</span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <a
                    href={CDO_CONTACT.phoneTel}
                    className="font-bold text-white hover:text-red-400 transition-colors"
                  >
                    Primary: {CDO_CONTACT.phonePrimary}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 pl-6">
                  <a
                    href={CDO_CONTACT.phoneSecondaryTel}
                    className="font-semibold text-slate-300 hover:text-red-400 transition-colors"
                  >
                    Secondary: {CDO_CONTACT.phoneSecondary}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>{CDO_CONTACT.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            <span>
              © {new Date().getFullYear()} Pest Patrol CDO. All rights reserved. Licensed & Certified in the Philippines.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-slate-300 transition-colors">
              Services
            </a>
            <a href="#why-us" className="hover:text-slate-300 transition-colors">
              Safety Guarantee
            </a>
            <a href="#quote" className="hover:text-slate-300 transition-colors">
              Free Quote
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
