import React from "react";
import {
  ShieldCheck,
  PhoneCall,
  CalendarCheck,
  CheckCircle,
  Award,
  ArrowRight,
  Shield,
  Leaf,
  Sliders,
  Lock,
  Zap,
} from "lucide-react";
import { CDO_CONTACT } from "@/data/services";

export default function Hero() {
  const valuePoints = [
    {
      icon: Shield,
      title: "Certified Technicians",
      desc: "Safe, effective treatments",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      desc: "Family, pet & planet safe",
    },
    {
      icon: Sliders,
      title: "Tailored Plans",
      desc: "Custom solutions for your needs",
    },
    {
      icon: Lock,
      title: "Long-Term Protection",
      desc: "Stops pests from returning",
    },
    {
      icon: Zap,
      title: "Fast & Reliable",
      desc: "Quick response & clear updates",
    },
  ];

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
              <span>Serving the Whole of Cagayan de Oro (CDO) & Northern Mindanao</span>
              <span className="text-base leading-none">🔰</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-neutral-950">
              Protect Your Home or Business with a{" "}
              <span className="text-red-600">Team You Can Trust.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Professional, eco-friendly pest and termite control serving the whole of Cagayan de Oro and Northern Mindanao.
            </p>

            {/* Sectors & Target Pests pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-neutral-800">
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-sm">🏠 Homes</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-sm">🏢 Commercial</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-sm">🏭 Factories & Warehouses</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-sm">🏗️ Pre-Construction</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <a
                href="#quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/20 hover:shadow-red-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <CalendarCheck className="w-5 h-5 text-white" />
                <span>Schedule Free Inspection</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <a
                href={CDO_CONTACT.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-neutral-950 bg-white hover:bg-neutral-900 hover:text-white border-2 border-neutral-900 transition-all shadow-sm"
              >
                <PhoneCall className="w-5 h-5 text-red-600 animate-bounce" />
                <span>Call {CDO_CONTACT.phoneDisplay}</span>
              </a>
            </div>

            {/* 5 Key Value Points Row */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-left border-t border-slate-200">
              {valuePoints.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-950">
                      <Icon className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
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
                    Client Sectors We Service:
                  </h2>
                </div>
                <div className="h-12 w-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              {/* Sectors list */}
              <div className="py-4 space-y-3.5">
                {CDO_CONTACT.clientSectors.map((sector, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 p-2 rounded-xl bg-red-50 border border-red-100 text-lg flex items-center justify-center w-10 h-10 flex-shrink-0">
                      {sector.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-neutral-900">
                        {sector.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {sector.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pests handled */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-xs text-neutral-800">
                <span className="font-bold text-red-600">🦟 Targets: </span>
                <span>Cockroaches • Termites • Rodents • Ants • Mosquitoes</span>
              </div>

              {/* Call / Action Box */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <a
                  href="#quote"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm transition-colors"
                >
                  <span>Schedule Free Inspection & Quotation</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
                <p className="text-center text-[11px] text-slate-500">
                  Direct Hotline: <a href={CDO_CONTACT.phoneTel} className="font-bold text-neutral-900 hover:text-red-600">{CDO_CONTACT.phoneDisplay}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
