import { NextResponse } from "next/server";

export interface QuotePayload {
  fullName: string;
  phone: string;
  email?: string;
  propertyType: "residential" | "commercial" | "industrial";
  pestProblem: string;
  barangayAddress: string;
  urgency?: "emergency" | "this-week" | "planning";
  notes?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<QuotePayload>;

    const errors: Record<string, string> = {};

    if (!body.fullName || body.fullName.trim().length < 2) {
      errors.fullName = "Full name is required (at least 2 characters).";
    }

    // PH phone validation (09xxxxxxxxx or +639xxxxxxxxx or 11 digits)
    const cleanedPhone = (body.phone || "").replace(/[\s\-\(\)]/g, "");
    const phPhoneRegex = /^(09|\+639)\d{9}$/;
    if (!cleanedPhone || !phPhoneRegex.test(cleanedPhone)) {
      errors.phone = "Please enter a valid PH mobile number (e.g. 0917 123 4567).";
    }

    if (!body.propertyType || !["residential", "commercial", "industrial"].includes(body.propertyType)) {
      errors.propertyType = "Please select a valid property type.";
    }

    if (!body.pestProblem || body.pestProblem.trim().length === 0) {
      errors.pestProblem = "Please specify the pest issue you are experiencing.";
    }

    if (!body.barangayAddress || body.barangayAddress.trim().length < 3) {
      errors.barangayAddress = "Please provide your Cagayan de Oro address or Barangay.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill out all required fields correctly.",
          errors,
        },
        { status: 400 }
      );
    }

    // In a production app with SMTP/Resend/SendGrid/Twilio, we would dispatch the lead to email/SMS/CRM
    const leadData = {
      timestamp: new Date().toISOString(),
      fullName: body.fullName?.trim(),
      phone: cleanedPhone,
      email: body.email?.trim() || "N/A",
      propertyType: body.propertyType,
      pestProblem: body.pestProblem,
      barangayAddress: body.barangayAddress?.trim(),
      urgency: body.urgency || "this-week",
      notes: body.notes?.trim() || "",
    };

    console.log("==========================================");
    console.log("[PEST PATROL CDO] NEW INSPECTION INQUIRY:");
    console.log(JSON.stringify(leadData, null, 2));
    console.log("==========================================");

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your inspection request has been received. Our CDO team will contact you within 30 minutes.",
        inquiryId: `PP-${Date.now().toString().slice(-6)}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Quote API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error while processing your request. Please call our hotline directly.",
      },
      { status: 500 }
    );
  }
}
