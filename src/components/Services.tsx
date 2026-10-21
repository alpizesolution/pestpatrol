import React from "react";
import {
  ShieldAlert,
  Bug,
  Rat,
  Sparkles,
  CheckCircle2,
  Shield,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { CDO_SERVICES, ServiceItem } from "@/data/services";

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const getIcon = (iconName: ServiceItem["iconName"]) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="w-7 h-7 text-emerald-600" />;
      case "Bug":
        return <Bug className="w-7 h-7 text-emerald-600" />;
      case "Rat":
        return <Rat className="w-7 h-7 text-emerald-600" />;
      case "Sparkles":
        return <Sparkles className="w-7 h-7 text-emerald-600" />;
      default:
        return <Shield className="w-7 h-7 text-emerald-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            Targeted Treatments
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Pest & Termite Services in CDO
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Tailored specifically for the coastal and upland climates of Northern Mindanao. Every treatment complies with FDA safety standards and is backed by a written service warranty.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {CDO_SERVICES.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 ${
                service.popular
                  ? "border-emerald-500 ring-2 ring-emerald-500/20"
                  : "border-slate-200"
              }`}
            >
              {/* Card Header & Badge */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      {service.badge}
                    </span>
                    <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5" />
                      {service.warranty}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Target Pests */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Target Species
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {service.targetPests.map((pest) => (
                      <span
                        key={pest}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700"
                      >
                        {pest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Treatment Checklist */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Treatment Protocol
                  </h4>
                  <ul className="space-y-2">
                    {service.treatmentSteps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended For */}
                <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 text-xs text-slate-600">
                  <span className="font-semibold text-slate-800">Recommended for: </span>
                  {service.recommendedFor}
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 py-4 sm:px-8 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Free Initial Site Assessment
                </span>
                <a
                  href="#quote"
                  onClick={() => onSelectService && onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-900 group"
                >
                  <span>Book Free Inspection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
