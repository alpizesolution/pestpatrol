import React from "react";
import { SERVICE_AREAS } from "@/data/services";
import { Phone } from "lucide-react";

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-[#e2e2e2] py-16 sm:py-24 anim-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#121212] leading-tight">
              Patrol zones across CDO.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-stone-900 leading-relaxed">
              We dispatch mobile units daily from Uptown to the PHIVIDEC industrial corridor. Same-day emergency response for severe infestations.
            </p>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area.name}
              className="bg-[#d6d6d6] p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-[#7d0c14] mb-2">
                  {area.tag}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#121212] mb-2 leading-snug">
                  {area.name}
                </h3>
                <p className="text-base text-stone-900 leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="mt-6 pt-4 flex items-center justify-between text-sm text-stone-800 font-medium">
                <span>Active Coverage Area</span>
                <span className="text-[#121212] font-semibold">Daily Dispatch</span>
              </div>
            </div>
          ))}
        </div>

        {/* Extended Coverage Banner */}
        <div className="mt-8 bg-[#121212] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1 text-white">
              Need coverage outside city limits?
            </h3>
            <p className="text-base text-stone-300">
              We service Bukidnon, Iligan, and Northern Mindanao for commercial and pre-construction contracts.
            </p>
          </div>
          <a
            href="tel:+639163041351"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#121212] bg-[#e2e2e2] hover:bg-white transition-colors flex-shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call 0916 304 1351</span>
          </a>
        </div>

      </div>
    </section>
  );
}
