"use client";

import React, { useState } from "react";
import Navbar from "@/components/lp2/Navbar";
import Hero from "@/components/lp2/Hero";
import Services from "@/components/lp2/Services";
import WhyUs from "@/components/lp2/WhyUs";
import ServiceAreas from "@/components/lp2/ServiceAreas";
import CompanyGallery from "@/components/lp2/CompanyGallery";
import QuoteForm from "@/components/lp2/QuoteForm";
import Footer from "@/components/lp2/Footer";

export default function LP2Page() {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const quoteElement = document.getElementById("quote");
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#e2e2e2] text-[#121212]">
      {/* Top Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Real Field Work & Fleet Photo Gallery */}
        <CompanyGallery />

        {/* Core Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Why Choose Us & Trust Pillars */}
        <WhyUs />

        {/* CDO Service Areas & Barangays */}
        <ServiceAreas />

        {/* Interactive Quote & Inspection Booking Form */}
        <QuoteForm initialPestProblem={selectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
