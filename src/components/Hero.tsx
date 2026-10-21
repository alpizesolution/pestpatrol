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
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              <span>FDA & FPA Approved Chemicals • Certified Technicians</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-neutral-950">
              Fast, Reliable <span className="text-red-600">Pest & Termite</span> Control in Cagayan de Oro
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Protect your home and business from subterranean termites, aggressive German cockroaches, and disease-carrying rodents. We provide guaranteed eradication with long-term written warranties across CDO and Misamis Oriental.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
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
                <span>Call Hotline (0917)</span>
              </a>
            </div>

            {/* Quick check bullet highlights */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-neutral-800 border-t border-slate-200">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span className="font-medium">Up to 5-Year Termite Warranty</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span className="font-medium">Zero-Odor, Pet & Child Safe</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span className="font-medium">Same-Day Site Inspection</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Feature Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl shadow-slate-200/60 relative">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
                    Trusted CDO Applicator
                  </span>
                  <h2 className="text-xl font-bold text-neutral-950 mt-1">
                    Emergency & Preventive Plans
                  </h2>
                </div>
                <div className="h-12 w-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              {/* Key Features List */}
              <div className="py-5 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="mt-1 p-2 rounded-xl bg-red-50 border border-red-100 text-red-600">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">
                      Subterranean Termite Soil Barrier
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      Sub-slab injection & trenching to seal structures against Northern Mindanao subterranean colonies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="mt-1 p-2 rounded-xl bg-red-50 border border-red-100 text-red-600">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">
                      Full CDO Metro Coverage
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      Uptown (Pueblo, Xavier Estates), Downtown, Lapasan, Bulua, Bugo, plus Opol & Tagoloan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="mt-1 p-2 rounded-xl bg-red-50 border border-red-100 text-red-600">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">
                      Fast 30-Minute Callback
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      Fill out our quick inspection form and our senior technician calls back with custom treatment options.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Messenger Quick Action */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={CDO_CONTACT.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-neutral-950 hover:bg-neutral-900 transition-colors shadow-sm"
                >
                  <span>Chat with an Entomologist on Facebook</span>
                  <ArrowRight className="w-4 h-4 text-red-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
