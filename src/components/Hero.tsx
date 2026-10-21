import React from "react";
import {
  ShieldCheck,
  PhoneCall,
  CalendarCheck,
  CheckCircle,
  Award,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  Home,
  Building,
  Factory,
  Check,
} from "lucide-react";
import { CDO_CONTACT } from "@/data/services";

export default function Hero() {
  return (
    <section className="relative bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 overflow-hidden">
      {/* Faint subtle dot-grid background for light theme */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Regional Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-bold shadow-sm">
              <span className="text-base leading-none">🔰</span>
              <span>Serving the Whole of CDO and Northern Mindanao</span>
              <span className="text-base leading-none">🔰</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-neutral-950">
              Fast, Reliable <span className="text-red-600">Pest & Termite</span> Control in Cagayan de Oro
            </h1>

            {/* Subheading with Target Coverage */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Specialized pest eradication and termite management for{" "}
              <strong className="text-neutral-900 font-semibold">Homes, Commercial Establishments, Factories, Warehouses,</strong> and{" "}
              <strong className="text-neutral-900 font-semibold">Pre-Construction Soil Poisoning</strong>.
            </p>

            {/* Pests list highlight badge */}
            <div className="inline-block bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold text-neutral-800 shadow-sm">
              <span className="text-red-600 font-bold mr-1.5">🦟 Targeted Pests:</span>
              Cockroaches • Termites • Rodents • Ants • Mosquitoes
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <a
                href="#quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/20 hover:shadow-red-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <CalendarCheck className="w-5 h-5 text-white" />
                <span>Request Free Inspection</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <a
                href={CDO_CONTACT.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-neutral-950 bg-white hover:bg-neutral-900 hover:text-white border-2 border-neutral-900 transition-all shadow-sm"
              >
                <PhoneCall className="w-5 h-5 text-red-600 animate-bounce" />
                <span>Call {CDO_CONTACT.phonePrimary}</span>
              </a>
            </div>

            {/* 4 Core Value Props from user */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-neutral-800 border-t border-slate-200">
              <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                <Check className="w-4 h-4 text-red-600 flex-shrink-0 stroke-[3]" />
                <span className="font-bold text-neutral-900">Safe & Effective</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                <Check className="w-4 h-4 text-red-600 flex-shrink-0 stroke-[3]" />
                <span className="font-bold text-neutral-900">Affordable Rates</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                <Check className="w-4 h-4 text-red-600 flex-shrink-0 stroke-[3]" />
                <span className="font-bold text-neutral-900">Fast Response</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                <Check className="w-4 h-4 text-red-600 flex-shrink-0 stroke-[3]" />
                <span className="font-bold text-neutral-900">Proven Results</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Feature Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl shadow-slate-200/60 relative">
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
                    Trusted CDO Exterminators
                  </span>
                  <h2 className="text-xl font-bold text-neutral-950 mt-1">
                    We Service Across CDO:
                  </h2>
                </div>
                <div className="h-12 w-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              {/* Scope of service items */}
              <div className="py-4 space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-xl bg-red-50 border border-red-100 text-lg flex items-center justify-center w-10 h-10 flex-shrink-0">
                    🏠
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900">
                      Homes & Residential Subdivisions
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Pueblo de Oro, Xavier Estates, Gran Europa, and all CDO barangays.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-xl bg-red-50 border border-red-100 text-lg flex items-center justify-center w-10 h-10 flex-shrink-0">
                    🏢
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900">
                      Commercial Establishments
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Restaurants, cloud kitchens, shopping malls, food chains, and corporate offices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-xl bg-red-50 border border-red-100 text-lg flex items-center justify-center w-10 h-10 flex-shrink-0">
                    🏭
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900">
                      Factories & Warehouses
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Industrial storage facilities, manufacturing lines in Bugo, Puerto & PHIVIDEC.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-xl bg-red-50 border border-red-100 text-lg flex items-center justify-center w-10 h-10 flex-shrink-0">
                    🏗️
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900">
                      Pre-Construction Soil Poisoning
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Preventive soil chemical barrier for new building foundations and home renovations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call / Messenger Action Box */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <a
                  href={CDO_CONTACT.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-neutral-950 hover:bg-neutral-900 transition-colors shadow-sm"
                >
                  <span>Send us a message to schedule your free inspection</span>
                  <ArrowRight className="w-4 h-4 text-red-400" />
                </a>
                <p className="text-center text-[11px] text-slate-500">
                  Hotlines: <strong className="text-neutral-800">{CDO_CONTACT.phonePrimary}</strong> or <strong className="text-neutral-800">{CDO_CONTACT.phoneSecondary}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
