import React from "react";

export default function WhyUs() {
  const PROTOCOL_STEPS = [
    {
      title: "On-site assessment & entry mapping",
      desc: "We inspect subterranean foundation conduits, moisture hot-spots, and structural timber joints using thermal detection and moisture probes.",
    },
    {
      title: "Precision chemical barrier injection",
      desc: "Sub-slab perimeter soil injection and odorless food-grade gel placement. We create continuous chemical barrier shields without toxic fumes.",
    },
    {
      title: "Warranty certification & documentation",
      desc: "You receive an official signed service certificate, treatment logbook, and written warranty coverage up to five years for soil barriers.",
    },
  ];

  const COMPARISONS = [
    {
      factor: "Soil Treatment Warranty",
      traditional: "Verbal or 6-month limited warranty",
      pestPatrol: "Up to 5 Years Written Warranty",
    },
    {
      factor: "Food Establishment Safety",
      traditional: "Volatile spray requiring shop closure",
      pestPatrol: "Odorless FDA-approved gel (zero downtime)",
    },
    {
      factor: "Rodent Control Safety",
      traditional: "Open poison pellets accessible to pets",
      pestPatrol: "Lockable tamper-resistant commercial bait stations",
    },
    {
      factor: "Commercial Compliance",
      traditional: "Handwritten receipts with no documentation",
      pestPatrol: "Official Treatment Certificates and Sanitation Logbooks",
    },
    {
      factor: "Emergency Response",
      traditional: "Uncertain dispatch; days to schedule",
      pestPatrol: "Same-day mobile dispatch across Cagayan de Oro",
    },
  ];

  return (
    <section id="why-us" className="bg-[#d6d6d6] py-16 sm:py-24 anim-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 anim-reveal">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#121212] leading-tight mb-4">
            The treatment standard.
          </h2>
          <p className="text-base sm:text-lg text-stone-900 leading-relaxed">
            Pest control is chemical engineering and structural biology. We replace guesswork with calibrated chemical barriers and written warranties.
          </p>
        </div>

        {/* 3 Protocol Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PROTOCOL_STEPS.map((step) => (
            <div key={step.title} className="p-2 anim-reveal anim-delay-1">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#121212] mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-stone-800 text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop Comparison Table */}
        <div className="bg-[#e2e2e2] p-6 sm:p-10 anim-reveal anim-delay-2">
          <h3 className="font-serif text-2xl font-bold text-[#121212] mb-6">
            Pest Patrol standards vs. traditional exterminators
          </h3>
          
          {/* Desktop Table View */}
          <div className="hidden sm:block">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#d6d6d6]">
                  <th className="py-4 px-4 text-sm font-bold text-[#121212] w-1/3">
                    Evaluation factor
                  </th>
                  <th className="py-4 px-4 text-sm font-bold text-stone-800 w-1/3">
                    Traditional operators
                  </th>
                  <th className="py-4 px-4 text-sm font-bold text-[#7d0c14] w-1/3">
                    Pest Patrol CDO
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISONS.map((row, idx) => (
                  <tr key={row.factor} className={idx % 2 === 0 ? "bg-[#e2e2e2]" : "bg-[#ebe8e3]"}>
                    <td className="py-4 px-4 font-semibold text-stone-900 text-base">
                      {row.factor}
                    </td>
                    <td className="py-4 px-4 text-stone-700 text-base">
                      {row.traditional}
                    </td>
                    <td className="py-4 px-4 font-semibold text-[#121212] text-base">
                      {row.pestPatrol}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked View to prevent horizontal scroll */}
          <div className="sm:hidden space-y-4">
            {COMPARISONS.map((row) => (
              <div key={row.factor} className="bg-[#d6d6d6] p-4 space-y-2">
                <p className="font-serif font-bold text-base text-[#121212]">
                  {row.factor}
                </p>
                <p className="text-sm text-stone-700">
                  <span className="font-semibold text-stone-900">Traditional:</span> {row.traditional}
                </p>
                <p className="text-sm font-semibold text-[#7d0c14]">
                  <span>Pest Patrol:</span> {row.pestPatrol}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
