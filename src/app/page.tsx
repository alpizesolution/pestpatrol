"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ServiceAreas from "@/components/ServiceAreas";
import QuoteForm from "@/components/QuoteForm";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const quoteElement = document.getElementById("quote");
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

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

      {/* Mobile-only Sticky Bottom CTA Bar */}
      <FloatingCTA />
    </div>
  );
}
