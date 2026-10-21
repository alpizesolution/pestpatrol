"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, Phone, MessageCircle } from "lucide-react";
import { CDO_CONTACT } from "@/data/services";

interface QuoteFormProps {
  initialPestProblem?: string;
}

export default function QuoteForm({ initialPestProblem = "" }: QuoteFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [propertyType, setPropertyType] = useState<string>("residential");
  const [pestProblem, setPestProblem] = useState(initialPestProblem || "Termites / Soil Barrier Injection");
  const [barangayAddress, setBarangayAddress] = useState("");
  const [urgency, setUrgency] = useState<"emergency" | "this-week" | "planning">("this-week");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successData, setSuccessData] = useState<{ message: string; inquiryId?: string } | null>(null);

  React.useEffect(() => {
    if (initialPestProblem) {
      setPestProblem(initialPestProblem);
    }
  }, [initialPestProblem]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }

    const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
    const phPhoneRegex = /^(09|\+639)\d{9}$/;
    if (!cleanPhone || !phPhoneRegex.test(cleanPhone)) {
      newErrors.phone = "Enter a valid Philippine mobile number (e.g., 0916 304 1351).";
    }

    if (!barangayAddress.trim() || barangayAddress.trim().length < 3) {
      newErrors.barangayAddress = "Please specify your Barangay or subdivision in CDO.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setErrors({});

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          propertyType,
          pestProblem,
          barangayAddress,
          urgency,
          notes,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessData({
          message: data.message || "Inspection request received.",
          inquiryId: data.inquiryId,
        });
      } else {
        setErrors({ form: data.error || "Failed to submit. Please call our hotline directly." });
      }
    } catch {
      setErrors({ form: "Network error. Please call our direct hotline: 0916 304 1351." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="bg-[#d6d6d6] py-16 sm:py-24 anim-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Call & Information */}
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#121212] leading-tight mb-6">
              Book an on-site inspection.
            </h2>
            <p className="text-base sm:text-lg text-stone-900 leading-relaxed mb-8">
              Fill out this inspection intake for guaranteed scheduling. For immediate response or active swarm emergencies, call our hotline directly.
            </p>

            <div className="bg-[#e2e2e2] p-6 space-y-4 mb-6">
              <div>
                <p className="text-sm font-semibold text-stone-800 mb-1">
                  Primary Mobile Dispatch
                </p>
                <a
                  href={CDO_CONTACT.phoneTel}
                  className="font-serif text-2xl font-bold text-[#7d0c14] hover:underline"
                >
                  {CDO_CONTACT.phoneDisplay}
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-stone-800 mb-1">
                  Secondary Line
                </p>
                <a
                  href="tel:+639266694734"
                  className="font-serif text-xl font-bold text-[#121212] hover:underline"
                >
                  0926 669 4734
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-stone-800 mb-1">
                  Facebook Messenger
                </p>
                <a
                  href="https://m.me/PestPatrolCDO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#121212] hover:text-[#7d0c14]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>m.me/PestPatrolCDO (Instant Chat)</span>
                </a>
              </div>
            </div>

            <div className="p-4 bg-[#cac6be] text-sm text-stone-900 leading-relaxed">
              Every on-site evaluation includes moisture testing, structural colony entry mapping, and an official written quote before any work starts.
            </div>
          </div>

          {/* Right Column: High-Contrast Form */}
          <div className="lg:col-span-7 bg-[#e2e2e2] p-6 sm:p-10">
            {successData ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-[#7d0c14] mx-auto" />
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
                  Inspection Request Received
                </h3>
                <p className="text-base text-stone-900 max-w-md mx-auto">
                  Reference: <strong className="text-[#121212]">{successData.inquiryId}</strong>. A Pest Patrol dispatch technician will call your number within 30 minutes to confirm time.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccessData(null)}
                  className="mt-4 px-6 py-2.5 text-sm font-semibold text-white bg-[#121212]"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errors.form && (
                  <div className="p-4 bg-red-100 text-red-900 text-sm font-medium">
                    {errors.form}
                  </div>
                )}

                {/* Property Type Selection */}
                <div>
                  <label className="block text-sm font-semibold text-[#121212] mb-2">
                    Property Type
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "residential", label: "Residential" },
                      { id: "commercial", label: "Restaurant / Commercial" },
                      { id: "industrial", label: "Warehouse / Industrial" },
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setPropertyType(type.id)}
                        className={`py-3 px-3 text-sm font-semibold text-center transition-colors ${
                          propertyType === type.id
                            ? "bg-[#121212] text-white"
                            : "bg-[#d6d6d6] text-stone-900 hover:bg-[#cac6be]"
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#121212] mb-1">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Maria Santos"
                      className="w-full p-3 bg-white border border-[#cac6be] text-[#121212] text-base focus:border-[#121212] focus:outline-none"
                    />
                    {errors.fullName && (
                      <p className="text-sm text-red-700 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#121212] mb-1">
                      Mobile Number (PH) *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0916 304 1351"
                      className="w-full p-3 bg-white border border-[#cac6be] text-[#121212] text-base focus:border-[#121212] focus:outline-none"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-700 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Barangay / Subdivision */}
                <div>
                  <label htmlFor="barangay" className="block text-sm font-semibold text-[#121212] mb-1">
                    CDO Barangay or Subdivision *
                  </label>
                  <input
                    id="barangay"
                    type="text"
                    value={barangayAddress}
                    onChange={(e) => setBarangayAddress(e.target.value)}
                    placeholder="e.g. Pueblo de Oro Golf Estates, Upper Carmen"
                    className="w-full p-3 bg-white border border-[#cac6be] text-[#121212] text-base focus:border-[#121212] focus:outline-none"
                  />
                  {errors.barangayAddress && (
                    <p className="text-sm text-red-700 mt-1">{errors.barangayAddress}</p>
                  )}
                </div>

                {/* Treatment Needed */}
                <div>
                  <label htmlFor="treatment" className="block text-sm font-semibold text-[#121212] mb-1">
                    Pest Problem / Service Required
                  </label>
                  <select
                    id="treatment"
                    value={pestProblem}
                    onChange={(e) => setPestProblem(e.target.value)}
                    className="w-full p-3 bg-white border border-[#cac6be] text-[#121212] text-base focus:border-[#121212] focus:outline-none"
                  >
                    <option value="Termites / Soil Barrier Injection">Termites & Soil Barrier Treatment</option>
                    <option value="Cockroach & Ant Kitchen Control">Cockroach & Ant Kitchen Safe Baiting</option>
                    <option value="Rodent & Rat Abatement">Rodent & Rat Abatement</option>
                    <option value="Mosquito Misting & Dengue Fogging">Mosquito Misting & Dengue Fogging</option>
                    <option value="Commercial Sanitation / IPM">Commercial & Industrial IPM Contract</option>
                    <option value="Comprehensive General Inspection">General Assessment & Inspection</option>
                  </select>
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="notes" className="block text-sm font-semibold text-[#121212] mb-1">
                    Specific Observations (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Describe any active swarming, wood dust, damage location, or preferred inspection time."
                    className="w-full p-3 bg-white border border-[#cac6be] text-[#121212] text-base focus:border-[#121212] focus:outline-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 text-base font-semibold text-white bg-[#7d0c14] hover:bg-[#5c080e] transition-colors disabled:opacity-50"
                >
                  {loading ? "Transmitting..." : "Schedule On-Site Inspection"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
