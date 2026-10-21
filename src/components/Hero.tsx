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
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-slate-900 text-white pt-10 pb-16 sm:pt-16 sm:pb-24">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-semibold shadow-inner">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>FDA & FPA Approved Chemicals • Certified Technicians</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Fast, Reliable <span className="text-emerald-400">Pest & Termite</span> Control in Cagayan de Oro
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Protect your home and business from subterranean termites, aggressive German cockroaches, and disease-carrying rodents. We provide guaranteed eradication with long-term written warranties across CDO and Misamis Oriental.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <CalendarCheck className="w-5 h-5 text-emerald-950" />
                <span>Request Free Inspection</span>
                <ArrowRight className="w-4 h-4 text-emerald-950" />
              </a>

              <a
                href={CDO_CONTACT.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-emerald-400 transition-all"
              >
                <PhoneCall className="w-5 h-5 text-emerald-400 animate-bounce" />
                <span>Call Hotline (0917)</span>
              </a>
            </div>

            {/* Quick check bullet highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300 border-t border-emerald-800/60">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Up to 5-Year Termite Warranty</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Zero-Odor, Pet & Child Safe</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Same-Day Site Inspection</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Card / CDO Trust Highlights */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    Trusted CDO Applicator
                  </span>
                  <h2 className="text-xl font-bold text-white mt-1">
                    Emergency & Preventive Plans
                  </h2>
                </div>
                <div className="h-12 w-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              {/* Key Features List */}
              <div className="py-5 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="mt-1 p-1.5 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Subterranean Termite Soil Barrier
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Sub-slab injection & trenching to seal structures against Northern Mindanao subterranean colonies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="mt-1 p-1.5 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Full CDO Metro Coverage
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Uptown (Pueblo, Xavier Estates), Downtown, Lapasan, Bulua, Bugo, plus Opol & Tagoloan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="mt-1 p-1.5 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Fast 30-Minute Callback
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Fill out our quick inspection form and our senior technician calls back with custom treatment options.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Messenger Quick Action */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href={CDO_CONTACT.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-emerald-200 bg-emerald-900/60 hover:bg-emerald-900 border border-emerald-700/50 transition-colors"
                >
                  <span>Chat with an Entomologist on Facebook</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
