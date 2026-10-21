"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Camera,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  X,
  ChevronRight,
  Maximize2,
  CalendarCheck,
} from "lucide-react";

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "all" | "termite" | "misting" | "team-fleet" | "general";
  categoryLabel: string;
  location: string;
  alt: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/gallery/IMG_8268.jpg",
    title: "Subterranean Termite Soil Barrier Treatment",
    category: "termite",
    categoryLabel: "Termite Barrier",
    location: "Pueblo de Oro, Uptown CDO",
    alt: "Termite Soil Treatment and Sub-Slab Injection in Cagayan de Oro by Pest Patrol CDO",
    description:
      "Precision sub-slab chemical injection and perimeter trenching to establish an impenetrable anti-termite shield around residential foundations.",
  },
  {
    id: "g2",
    src: "/images/gallery/IMG_6890.jpg",
    title: "ULV Cold Misting & Dengue Mosquito Fogging",
    category: "misting",
    categoryLabel: "Misting & Fogging",
    location: "Upper Carmen / Macasandig, CDO",
    alt: "Residential Mosquito Misting and Dengue Control in Cagayan de Oro",
    description:
      "Electric ULV cold misting and perimeter knock-down application targeting Aedes dengue mosquitoes, foliage resting sites, and drainage perimeters.",
  },
  {
    id: "g3",
    src: "/images/gallery/IMG_2125.jpg",
    title: "Pest Patrol CDO Service Fleet & Rapid Dispatch",
    category: "team-fleet",
    categoryLabel: "Team & Fleet",
    location: "CDO Headquarters / Misamis Oriental",
    alt: "Pest Patrol CDO Service Vehicle Fleet and Field Response Equipment in Cagayan de Oro",
    description:
      "Fully equipped official service vehicles stocked with FDA-registered termiticides and advanced application gear for prompt mobilization.",
  },
  {
    id: "g4",
    src: "/images/gallery/IMG_8003.jpg",
    title: "Perimeter Trenching & Foundation Soil Poisoning",
    category: "termite",
    categoryLabel: "Termite Barrier",
    location: "Xavier Estates, Uptown CDO",
    alt: "Foundation Soil Poisoning and Termite Chemical Trenching in Xavier Estates CDO",
    description:
      "Deep chemical barrier application to prevent subterranean termite colonies from penetrating concrete slabs, footings, and structural beams.",
  },
  {
    id: "g5",
    src: "/images/gallery/IMG_4331.jpg",
    title: "Structural Wood Injection & Bukbok Defense",
    category: "termite",
    categoryLabel: "Termite Barrier",
    location: "Nazareth / Divisoria, CDO",
    alt: "Wood Preservation and Termite Injection Treatment in Downtown Cagayan de Oro",
    description:
      "Pressure injection of eco-friendly borate wood preservatives into timber trusses and framing to eradicate active drywood infestations.",
  },
  {
    id: "g6",
    src: "/images/gallery/IMG_6935.jpg",
    title: "Commercial Kitchen Cockroach Gel Baiting & Sanitation",
    category: "general",
    categoryLabel: "General Pest Control",
    location: "Lapasan Commercial Corridor, CDO",
    alt: "Commercial Kitchen Cockroach Elimination and Gel Baiting in Lapasan CDO",
    description:
      "Food-grade German cockroach pheromone baiting and crack-and-crevice residual defense without disrupting dining room operations.",
  },
  {
    id: "g7",
    src: "/images/gallery/IMG_4565.jpg",
    title: "On-Site Termite Moisture & Structural Damage Audit",
    category: "termite",
    categoryLabel: "Termite Barrier",
    location: "Gran Europa, CDO",
    alt: "Senior Entomologist Inspecting Termite Mud Tubes in Gran Europa CDO",
    description:
      "Detailed structural inspection mapping subterranean mud tubes, moisture leaks, and subterranean entry points prior to chemical installation.",
  },
  {
    id: "g8",
    src: "/images/gallery/IMG_8020.jpg",
    title: "Odorless Residual Spraying & Barrier Defense",
    category: "general",
    categoryLabel: "General Pest Control",
    location: "Bulua / Iponan District, CDO",
    alt: "Odorless Indoor Residual Spraying by Certified Applicators in Bulua CDO",
    description:
      "Safe, low-toxicity barrier spraying along baseboards, entryways, and plumbing utility voids for long-lasting insect protection.",
  },
  {
    id: "g9",
    src: "/images/gallery/IMG_2126.jpg",
    title: "Certified Field Crew in Full Safety Compliance",
    category: "team-fleet",
    categoryLabel: "Team & Fleet",
    location: "Cagayan de Oro City Proper",
    alt: "Pest Patrol CDO Certified Technicians in Uniform and Safety Gear in Cagayan de Oro",
    description:
      "Licensed pest control technicians trained in Integrated Pest Management (IPM), safety compliance, and proper chemical stewardship.",
  },
];

export default function CompanyGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: "all", label: "All Field Work" },
    { id: "termite", label: "Termite Soil & Wood" },
    { id: "misting", label: "Mosquito Misting" },
    { id: "team-fleet", label: "Team & Fleet" },
    { id: "general", label: "General Pest" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-red-600" />
            Field Work Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Real Treatments Across Cagayan de Oro
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            See our certified applicators, branded service fleet, and specialized equipment in action protecting homes and businesses throughout Misamis Oriental.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-neutral-950 text-white shadow-sm"
                    : "bg-white text-neutral-700 hover:bg-neutral-100 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-500/40 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold bg-neutral-950/80 text-white backdrop-blur-sm shadow-sm">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-neutral-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-white/90 text-neutral-950 shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5 text-red-600" />
                  </div>
                </div>
              </div>

              {/* Text Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-neutral-950 group-hover:text-red-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Verified Local Job</span>
                  <span className="text-red-600 font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Job Details
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Reassurance */}
        <div className="mt-14 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-950">
                100% Real Field Photos • Licensed & Insured in Northern Mindanao
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Every technician is equipped with safety-compliant uniforms, calibrated spray rigs, and FDA-certified compounds.
              </p>
            </div>
          </div>

          <a
            href="#quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm transition-all flex-shrink-0"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Book Free Inspection</span>
          </a>
        </div>
      </div>

      {/* Lightbox / Modal View */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-950/70 text-white hover:bg-neutral-950 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full bg-neutral-950">
              <Image
                src={activeModalItem.src}
                alt={activeModalItem.alt}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>

            {/* Modal Description Body */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="inline-block px-2.5 py-1 rounded text-xs font-bold bg-red-50 text-red-700 border border-red-200">
                  {activeModalItem.categoryLabel}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span>{activeModalItem.location}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-neutral-950 mb-2">
                {activeModalItem.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {activeModalItem.description}
              </p>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  <span>FDA-Certified Compounds • Written Service Warranty</span>
                </div>

                <a
                  href="#quote"
                  onClick={() => setActiveModalItem(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm transition-colors"
                >
                  Request Similar Inspection
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
