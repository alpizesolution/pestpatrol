import React from "react";
import {
  ShieldCheck,
  Award,
  Clock,
  HeartHandshake,
  Check,
  X,
  FileCheck2,
  Users2,
  Smile,
} from "lucide-react";
import { TRUST_POINTS, CDO_CONTACT } from "@/data/services";

export default function WhyUs() {
  const comparisonItems = [
    {
      feature: "Chemical Safety Standard",
      pestPatrol: "100% FDA & FPA Approved, Low-Odor & Eco-Safe",
      others: "Unregulated hazardous chemical mixtures",
    },
    {
      feature: "Technician Qualifications",
      pestPatrol: "Formally trained, licensed pest control applicators",
      others: "Informal, untrained handymen without safety gear",
    },
    {
      feature: "Service Guarantee",
      pestPatrol: "Written warranty certificates (up to 5 years for termites)",
      others: "Verbal promises without free retreatment",
    },
    {
      feature: "CDO Response Time",
      pestPatrol: "Same-day inspection & immediate emergency dispatch",
      others: "Days of waiting or no-show appointments",
    },
    {
      feature: "Structural Protection Protocol",
      pestPatrol: "Sub-slab pressure barriers, IPM colony elimination",
      others: "Superficial surface spraying that misses hidden nests",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            Why Cagayan de Oro Trusts Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Standards You Can Count On
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Eliminating pests doesn&apos;t require compromising family health or business operations. We combine modern entomological science with strict safety protocols.
          </p>
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TRUST_POINTS.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-red-500/40 hover:bg-neutral-900/80 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-xs font-bold text-red-400 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-md mb-4">
                  {point.highlight}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-black text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-neutral-800 overflow-hidden relative">
          <div className="relative z-10">
            <div className="text-center sm:text-left max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-red-500">
                The Pest Patrol Advantage
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                How We Compare to Traditional Exterminators
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-800 text-xs uppercase tracking-wider text-slate-400">
                    <th className="py-4 px-4 font-semibold">Service Criterion</th>
                    <th className="py-4 px-4 font-bold text-red-400 bg-red-950/40 rounded-t-xl border-t border-x border-red-900/50">
                      Pest Patrol CDO
                    </th>
                    <th className="py-4 px-4 font-semibold text-slate-400">
                      Standard Exterminator
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800 text-xs sm:text-sm">
                  {comparisonItems.map((item, idx) => (
                    <tr key={idx} className="hover:bg-neutral-900/60 transition-colors">
                      <td className="py-4 px-4 font-medium text-slate-300">
                        {item.feature}
                      </td>
                      <td className="py-4 px-4 font-bold text-red-300 bg-red-950/20 border-x border-red-900/30 flex-1">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-red-500 flex-shrink-0" />
                          <span>{item.pestPatrol}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-slate-400">
                        <div className="flex items-center gap-2">
                          <X className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                          <span>{item.others}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quick banner inside dark card */}
            <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileCheck2 className="w-6 h-6 text-red-500" />
                <span className="text-xs sm:text-sm text-slate-300">
                  All commercial contracts receive sanitary inspection compliance documentation.
                </span>
              </div>
              <a
                href={CDO_CONTACT.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-500 transition-colors shadow-md shadow-red-950/60"
              >
                Speak with Lead Entomologist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
