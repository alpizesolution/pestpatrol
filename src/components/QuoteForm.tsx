"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Phone,
  MessageCircle,
  ShieldCheck,
  Building,
  Home,
  Factory,
  Clock,
  Sparkles,
} from "lucide-react";
import { CDO_CONTACT } from "@/data/services";

interface QuoteFormProps {
  initialPestProblem?: string;
}

export default function QuoteForm({ initialPestProblem = "" }: QuoteFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [propertyType, setPropertyType] = useState<"residential" | "commercial" | "industrial">("residential");
  const [pestProblem, setPestProblem] = useState(initialPestProblem || "Termite (Anay) Soil / Wood Treatment");
  const [barangayAddress, setBarangayAddress] = useState("");
  const [urgency, setUrgency] = useState<"emergency" | "this-week" | "planning">("this-week");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successData, setSuccessData] = useState<{ message: string; inquiryId?: string } | null>(null);

  // Client-side quick validation
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }

    const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
    const phPhoneRegex = /^(09|\+639)\d{9}$/;
    if (!cleanPhone || !phPhoneRegex.test(cleanPhone)) {
      newErrors.phone = "Enter a valid Philippine mobile number (e.g., 0917 123 4567).";
    }

    if (!barangayAddress.trim() || barangayAddress.trim().length < 3) {
      newErrors.barangayAddress = "Please specify your Barangay or subdivision in CDO.";
    }

    if (!pestProblem) {
      newErrors.pestProblem = "Please choose a pest issue.";
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
          message: data.message,
          inquiryId: data.inquiryId,
        });
      } else {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors({ form: data.message || "Failed to submit request. Please try again or call our hotline." });
        }
      }
    } catch (err) {
      setErrors({ form: "Network error occurred. Please call or message us directly on Facebook." });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSuccessData(null);
    setFullName("");
    setPhone("");
    setEmail("");
    setBarangayAddress("");
    setNotes("");
    setErrors({});
  };

  return (
    <section id="quote" className="py-20 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
              100% Free • No Obligation
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Request Your Free On-Site Pest & Termite Inspection
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Don&apos;t let pests cause permanent structural damage or health hazards. Submit your details below and our Cagayan de Oro dispatch team will contact you within 30 minutes to schedule a certified inspection.
            </p>

            <div className="space-y-4 pt-4 border-t border-neutral-800">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-neutral-900 text-red-500 border border-neutral-800">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Full Structural Damage Assessment</h4>
                  <p className="text-xs text-slate-400">Moisture detection, subterranean colony entry tracing, and risk mapping.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-neutral-900 text-red-500 border border-neutral-800">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Transparent Written Estimate</h4>
                  <p className="text-xs text-slate-400">Clear breakdown of treatment chemical options, warranties, and prevention tips.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 space-y-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Need Immediate Emergency Action?</span>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={CDO_CONTACT.phoneTel}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-500 shadow-md shadow-red-950/60 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call: 0917-824-7378
                </a>
                <a
                  href={CDO_CONTACT.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-200 bg-neutral-950 hover:bg-neutral-800 border border-neutral-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-red-500" />
                  Messenger CDO
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-neutral-800">
              {successData ? (
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-red-500/10 text-red-500 border border-red-500/30 flex items-center justify-center mx-auto ring-8 ring-red-950/50">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-sm font-medium text-red-400 mt-1">
                      Reference ID: <span className="font-mono font-bold">{successData.inquiryId}</span>
                    </p>
                    <p className="text-sm text-slate-300 mt-3 max-w-md mx-auto leading-relaxed">
                      {successData.message}
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={CDO_CONTACT.phoneTel}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-500 transition-colors shadow-md shadow-red-950/60"
                    >
                      <Phone className="w-4 h-4" />
                      Call Hotline Now
                    </a>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:bg-neutral-800 border border-neutral-700 transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-neutral-800 pb-4">
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      Get Your Free Inspection Quote
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Fill out this 1-minute form for instant prioritization.
                    </p>
                  </div>

                  {errors.form && (
                    <div className="p-3.5 rounded-xl bg-red-950/50 border border-red-800/80 flex items-center gap-2 text-red-300 text-xs sm:text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
                      <span>{errors.form}</span>
                    </div>
                  )}

                  {/* Property Type Radio Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Property Type <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { id: "residential", label: "Residential", icon: Home },
                        { id: "commercial", label: "Commercial", icon: Building },
                        { id: "industrial", label: "Industrial", icon: Factory },
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelected = propertyType === item.id;
                        return (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => setPropertyType(item.id as any)}
                            className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                              isSelected
                                ? "border-red-600 bg-red-600/15 text-white font-bold ring-2 ring-red-500/30"
                                : "border-neutral-800 bg-neutral-950 hover:bg-neutral-800 text-slate-300"
                            }`}
                          >
                            <Icon className={`w-5 h-5 mb-1 ${isSelected ? "text-red-500" : "text-neutral-500"}`} />
                            <span className="text-xs">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Full Name & Phone Number */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5" htmlFor="fullName">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Juan dela Cruz"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-neutral-950 text-slate-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? "border-red-500 focus:ring-red-500/40 bg-red-950/20"
                            : "border-neutral-700 focus:border-red-500 focus:ring-red-500/30"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5" htmlFor="phone">
                        Phone Number (PH) <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0917 123 4567"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-neutral-950 text-slate-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? "border-red-500 focus:ring-red-500/40 bg-red-950/20"
                            : "border-neutral-700 focus:border-red-500 focus:ring-red-500/30"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Pest Problem & Barangay */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5" htmlFor="pestProblem">
                        Primary Pest Concern <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="pestProblem"
                        value={pestProblem}
                        onChange={(e) => setPestProblem(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl text-sm border border-neutral-700 bg-neutral-950 text-slate-100 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
                      >
                        <option value="Termite (Anay) Soil / Wood Treatment">Subterranean Termites (Anay)</option>
                        <option value="Cockroach (Ipis) Gel Baiting & Spray">German / American Cockroaches (Ipis)</option>
                        <option value="Rodent (Daga) Baits & Trapping">Rats & Mice (Daga / Rodents)</option>
                        <option value="Mosquito Dengue Misting / Fogging">Mosquito Misting / Dengue Prevention</option>
                        <option value="Bedbug (Surot) Heat & Chemical Treatment">Bedbugs (Surot)</option>
                        <option value="Comprehensive General Pest Maintenance">General Multi-Pest Treatment</option>
                        <option value="Pre-Construction Soil Poisoning">Pre-Construction Soil Poisoning</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5" htmlFor="barangayAddress">
                        CDO Barangay / Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="barangayAddress"
                        type="text"
                        required
                        value={barangayAddress}
                        onChange={(e) => setBarangayAddress(e.target.value)}
                        placeholder="e.g. Uptown Carmen, Pueblo, Nazareth"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-neutral-950 text-slate-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 transition-all ${
                          errors.barangayAddress
                            ? "border-red-500 focus:ring-red-500/40 bg-red-950/20"
                            : "border-neutral-700 focus:border-red-500 focus:ring-red-500/30"
                        }`}
                      />
                      {errors.barangayAddress && (
                        <p className="text-red-400 text-xs mt-1">{errors.barangayAddress}</p>
                      )}
                    </div>
                  </div>

                  {/* Urgency Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      How urgently do you need inspection?
                    </label>
                    <div className="grid grid-cols-3 gap-2.5 text-xs font-medium">
                      {[
                        { id: "emergency", label: "🚨 Urgent / Today" },
                        { id: "this-week", label: "📅 This Week" },
                        { id: "planning", label: "💡 Just Inquiring" },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setUrgency(item.id as any)}
                          className={`py-2 px-3 rounded-lg border text-center transition-all ${
                            urgency === item.id
                              ? "border-red-600 bg-red-600/15 text-red-300 font-bold"
                              : "border-neutral-800 bg-neutral-950 hover:bg-neutral-800 text-slate-400"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Notes / Special Instructions */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5" htmlFor="notes">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      id="notes"
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Mud tubes noticed behind wooden cabinets; restaurant kitchen inspection required."
                      className="w-full px-4 py-2 rounded-xl text-sm border border-neutral-700 bg-neutral-950 text-slate-100 placeholder:text-neutral-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-base font-bold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 shadow-md shadow-red-950/60 hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Free Inspection Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    🔒 Your information is confidential. We will never share your contact details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
