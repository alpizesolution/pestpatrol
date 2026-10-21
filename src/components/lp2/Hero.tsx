import React from "react";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { CDO_CONTACT } from "@/data/services";

export default function Hero() {
  return (
    <section className="bg-[#e2e2e2] pt-6 pb-16 lg:pt-10 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Grid: Asymmetric Column Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Standfirst & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2">
            <div>
              <p className="text-base font-semibold text-stone-700 mb-4 anim-reveal">
                Cagayan de Oro & Northern Mindanao
              </p>

              <p className="text-base sm:text-lg text-stone-900 leading-relaxed mb-8 max-w-md anim-reveal anim-delay-1">
                We establish subterranean chemical barriers and odorless pest eradication for residences, food establishments, and industrial plants.
              </p>

              {/* Direct Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8 anim-reveal anim-delay-2">
                <a
                  href={CDO_CONTACT.phoneTel}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#7d0c14] hover:bg-[#5c080e] transition-colors"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call {CDO_CONTACT.phoneDisplay}</span>
                </a>
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#121212] bg-[#d6d6d6] hover:bg-[#cac6be] transition-colors"
                >
                  <span>Book Inspection</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Field Dispatch Note */}
            <div className="bg-[#d6d6d6] p-5 anim-reveal anim-delay-3">
              <p className="text-base font-bold text-[#121212] mb-1">
                Same-Day Barangay Dispatch
              </p>
              <p className="text-base text-stone-800 leading-normal">
                Rapid response units stationed in Uptown CDO and Lapasan commercial corridor. Full written guarantee provided on every job.
              </p>
            </div>
          </div>

          {/* Right Column: High-Impact Display Headline & Dominant Field Photograph */}
          <div className="lg:col-span-7 flex flex-col">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[76px] font-bold tracking-tight text-[#121212] leading-[1.05] mb-6 anim-reveal">
              Termite defense in Cagayan de Oro.
            </h1>

            {/* Dominant Field Picture with Overlapping Metric Tile */}
            <div className="relative mt-2 anim-reveal anim-delay-2">
              <div className="relative w-full aspect-[16/10] bg-[#121212] overflow-hidden">
                <Image
                  src="/images/gallery/IMG_8020.jpg"
                  alt="Pest Patrol CDO Official Service Fleet and Field Technicians"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>

              {/* Solid Oxblood Callout Banner */}
              <div className="bg-[#7d0c14] text-white p-5 sm:p-6 sm:max-w-md sm:-mt-10 sm:ml-6 relative z-10 anim-reveal anim-delay-3">
                <p className="font-serif text-xl sm:text-2xl font-bold leading-tight mb-1 text-white">
                  5-Year Written Soil Warranty
                </p>
                <p className="text-sm sm:text-base text-stone-200 leading-normal">
                  FDA-registered termiticides applied by certified applicators. Non-toxic odorless gel formulations for active restaurant pantries.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
