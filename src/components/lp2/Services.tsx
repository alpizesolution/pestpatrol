"use client";

import React from "react";
import Image from "next/image";
import { servicesData, ServiceItem } from "@/data/services";

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const handleInquire = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
  };

  const termiteService = servicesData[0];
  const otherServices = servicesData.slice(1);

  return (
    <section id="services" className="bg-[#e2e2e2] py-16 sm:py-24 anim-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#121212] leading-tight">
              Targeted extermination protocols.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-stone-900 leading-relaxed">
              We apply FDA-registered, low-toxicity chemical formulations tailored to tropical moisture, soil types, and commercial building standards in Northern Mindanao.
            </p>
          </div>
        </div>

        {/* Lead Treatment Hero Banner (Termite) */}
        {termiteService && (
          <div className="bg-[#d6d6d6] p-6 sm:p-10 mb-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center anim-reveal">
            <div className="lg:col-span-7">
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#121212] mb-3">
                {termiteService.title}
              </h3>
              <p className="text-base sm:text-lg text-stone-900 leading-relaxed mb-4">
                {termiteService.summary}
              </p>
              <p className="text-base text-stone-800 font-medium mb-6">
                Guaranteed coverage: {termiteService.highlights.join(" · ")}
              </p>
              <button
                type="button"
                onClick={() => handleInquire(termiteService.title)}
                className="px-6 py-3 text-base font-semibold text-white bg-[#121212] hover:bg-[#7d0c14] transition-colors"
              >
                Request Termite Inspection
              </button>
            </div>
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[16/10] bg-[#121212] overflow-hidden">
                <Image
                  src={termiteService.fallbackImage || termiteService.image}
                  alt={termiteService.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Subsequent Treatments: 2-Column Varied Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#d6d6d6] p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full aspect-[16/9] bg-[#121212] overflow-hidden mb-6">
                  <Image
                    src={service.fallbackImage || service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#121212] leading-snug mb-2">
                  {service.title}
                </h3>
                <p className="text-base text-stone-900 leading-relaxed mb-4">
                  {service.summary}
                </p>
                <p className="text-sm text-stone-700 font-medium mb-6">
                  {service.highlights.join(" · ")}
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleInquire(service.title)}
                  className="w-full py-3 text-sm font-semibold text-white bg-[#121212] hover:bg-[#7d0c14] transition-colors text-center"
                >
                  Schedule Service Intake
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
