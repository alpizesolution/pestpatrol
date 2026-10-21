import React from "react";
import { MapPin, Navigation, CheckCircle2, ShieldCheck } from "lucide-react";
import { SERVICE_AREAS, CDO_CONTACT } from "@/data/services";

export default function ServiceAreas() {
  const subdivisions = [
    "Pueblo de Oro (Golf Estates, Forest View, Westwoods)",
    "Xavier Estates (Phases 1-6 & Ventura)",
    "Gran Europa (Monticello, Lessandra, Lumina)",
    "Teakwood Hills & Agusan Ridges",
    "Morning Mist Village & Upper Balulang",
    "Bellevue & Cambridge Subdivisions",
    "Aluba & Upper Macasandig",
    "Golden Glow North & South",
  ];

  return (
    <section id="service-areas" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            Cagayan de Oro Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Prompt On-Site Service Throughout Northern Mindanao
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our certified field technicians are stationed strategically across CDO to provide rapid same-day inspection and emergency treatment dispatches.
          </p>
        </div>

        {/* 7 Key Zone Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICE_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {area.tag}
                </span>
                <Navigation className="w-4 h-4 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {area.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}

          {/* Special Extended Coverage Card */}
          <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white p-6 rounded-2xl flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4" />
                Extended Misamis Oriental
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Need Service in Nearby Towns?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                We also accommodate scheduled treatments for commercial estates, industrial plants, and farms in Alubijid, Laguindingan, Claveria, Balingasag, and Bukidnon border communities.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-700/60">
              <a
                href={CDO_CONTACT.phoneTel}
                className="text-xs sm:text-sm font-bold text-emerald-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                Inquire About Extended Coverage →
              </a>
            </div>
          </div>
        </div>

        {/* Subdivisions Callout */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="max-w-3xl mb-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Frequently Serviced CDO Subdivisions & Gated Communities
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Experienced with HOA gate pass protocols, subdivision sanitation rules, and odorless chemical procedures.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            {subdivisions.map((sub, i) => (
              <div
                key={i}
                className="text-xs text-slate-700 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="truncate" title={sub}>{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
