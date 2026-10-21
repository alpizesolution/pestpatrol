"use client";

import React from "react";
import Image from "next/image";
import { servicesData, ServiceItem } from "@/data/services";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const handleInquire = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full">
            Guaranteed Protection
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mt-3">
            Our Pest Management Services
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Proven, eco-friendly eradication across Cagayan de Oro and Northern Mindanao.
          </p>
        </div>

        {/* 5-Card Responsive Grid with 16:9 Image Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-red-500/40 transition duration-300 flex flex-col transform hover:-translate-y-1"
            >
              {/* Rectangular Image Container (16:9 ratio) */}
              <div className="relative w-full aspect-video bg-neutral-100 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} in Cagayan de Oro - Pest Patrol CDO`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 bg-black/80 backdrop-blur-md text-white rounded-md border border-white/10 shadow-sm">
                  {service.badge}
                </span>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-neutral-950 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                {/* Compact Highlight Tags */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <ul className="space-y-2 mb-4">
                    {service.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#quote"
                    onClick={() => handleInquire(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 group-hover:text-red-600 transition-colors"
                  >
                    <span>Inquire about this service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
