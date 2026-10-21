"use client";

import React, { useState } from "react";
import Image from "next/image";

interface RecordItem {
  id: string;
  src: string;
  title: string;
  location: string;
  description: string;
  span: string;
}

const FIELD_RECORDS: RecordItem[] = [
  {
    id: "r1",
    src: "/images/gallery/IMG_8268.jpg",
    title: "Subterranean Termite Soil Barrier Injection",
    location: "Pueblo de Oro, Uptown CDO",
    description: "Precision sub-slab chemical injection and perimeter trenching to establish an impenetrable anti-termite shield around residential foundations.",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: "r2",
    src: "/images/gallery/IMG_6890.jpg",
    title: "ULV Cold Misting & Dengue Mosquito Fogging",
    location: "Macasandig & Upper Carmen",
    description: "Cold misting application targeting Aedes dengue mosquitoes, compound foliage, and perimeter drainage channels.",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: "r3",
    src: "/images/gallery/IMG_2125.jpg",
    title: "Service Fleet & Rapid Deployment Units",
    location: "Cagayan de Oro Operational Hub",
    description: "Fully stocked service utility vehicles ready for immediate dispatch across Misamis Oriental.",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: "r4",
    src: "/images/gallery/IMG_4187.jpg",
    title: "Commercial Kitchen Odorless Gel Baiting",
    location: "Downtown Commercial Core, Divisoria",
    description: "FDA-approved non-volatile cockroach elimination applied to kitchen cracks and food pantries without business shutdown.",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: "r5",
    src: "/images/gallery/IMG_6935.jpg",
    title: "Structural Wood Injection & Termite Colony Defense",
    location: "Xavier Estates, Upper Balulang",
    description: "Targeted wood-boring treatment to neutralize active subterranean colonies behind walls and baseboards.",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
];

export default function CompanyGallery() {
  const [activeItem, setActiveItem] = useState<RecordItem | null>(null);

  return (
    <section id="gallery" className="bg-[#d6d6d6] py-16 sm:py-24 anim-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121212] leading-tight mb-4">
            Real treatments across Cagayan de Oro.
          </h2>
          <p className="text-base sm:text-lg text-stone-900 leading-relaxed">
            Every photograph is an actual intervention by our licensed technicians in residential subdivisions, commercial kitchens, and industrial warehouses.
          </p>
        </div>

        {/* Editorial Photo Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-[#cac6be] p-3">
          {FIELD_RECORDS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`relative bg-[#121212] group cursor-pointer overflow-hidden ${
                item.span === "col-span-1 md:col-span-2 row-span-2"
                  ? "md:col-span-2 md:row-span-2 min-h-[360px] lg:min-h-[480px]"
                  : "min-h-[240px]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-102 transition-transform duration-500"
              />
              {/* Bottom Scrim & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-sm font-medium text-stone-300 mb-1">
                  {item.location}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-300 mt-2 line-clamp-2 leading-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Detailed Inspection View */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="bg-[#e2e2e2] max-w-3xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full bg-black">
                <Image
                  src={activeItem.src}
                  alt={activeItem.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-stone-600 mb-1">
                  {activeItem.location}
                </p>
                <h3 className="font-serif text-2xl font-bold text-[#121212] mb-3">
                  {activeItem.title}
                </h3>
                <p className="text-base text-stone-800 leading-relaxed mb-6">
                  {activeItem.description}
                </p>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveItem(null)}
                    className="px-6 py-2.5 text-sm font-semibold text-white bg-[#121212]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
