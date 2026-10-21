import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pestpatrolcdo.ph"),
  title: "Pest Patrol CDO | Professional Pest & Termite Control in Cagayan de Oro",
  description:
    "Cagayan de Oro's leading pest & termite control specialists. FDA-approved chemicals, licensed technicians, and long-term warranties. Fast on-site inspections for termites, cockroaches, rodents & mosquitoes across CDO and Misamis Oriental.",
  keywords: [
    "Pest Control Cagayan de Oro",
    "Termite Control CDO",
    "Anay Exterminator Cagayan de Oro",
    "Pest Patrol CDO",
    "Cockroach extermination CDO",
    "Rodent rat control Misamis Oriental",
    "Mosquito misting dengue fogging CDO",
    "Soil poisoning CDO",
    "Pueblo de Oro pest control",
  ],
  authors: [{ name: "Pest Patrol CDO" }],
  openGraph: {
    title: "Pest Patrol CDO | Pest & Termite Exterminators Cagayan de Oro",
    description:
      "Safe, fast, and guaranteed pest and termite management for homes and businesses in Cagayan de Oro and Northern Mindanao.",
    url: "https://pestpatrolcdo.ph",
    siteName: "Pest Patrol CDO",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Patrol CDO - Professional Pest and Termite Control",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Patrol CDO | Pest & Termite Control in Cagayan de Oro",
    description:
      "Guaranteed eradication of termites, rodents, and cockroaches with FDA-approved safe treatments in CDO.",
  },
  alternates: {
    canonical: "https://pestpatrolcdo.ph",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pest Patrol CDO",
    image: "https://pestpatrolcdo.ph/logo.png",
    "@id": "https://pestpatrolcdo.ph",
    url: "https://pestpatrolcdo.ph",
    telephone: "+639163041351",
    priceRange: "₱₱",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rodolfo N. Pelaez Blvd, Kauswagan / Upper Carmen",
      addressLocality: "Cagayan de Oro",
      addressRegion: "Misamis Oriental",
      postalCode: "9000",
      addressCountry: "PH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.4772,
      longitude: 124.6459,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:30",
        closes: "18:30",
      },
    ],
    sameAs: [
      "https://www.facebook.com/PestPatrolCDO",
      "https://m.me/PestPatrolCDO",
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Cagayan de Oro",
      },
      {
        "@type": "AdministrativeArea",
        name: "Misamis Oriental",
      },
      {
        "@type": "City",
        name: "Opol",
      },
      {
        "@type": "City",
        name: "Tagoloan",
      },
      {
        "@type": "City",
        name: "El Salvador",
      },
    ],
    serviceArea: "Cagayan de Oro and surrounding areas in Northern Mindanao",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pest and Termite Control Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Termite Control & Soil Barrier Treatment",
            description:
              "Comprehensive subterranean termite eradication and soil poisoning warranty treatment in Cagayan de Oro.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "General Pest Control",
            description:
              "FDA-approved cockroach gel baiting, ant colony elimination, and residual spraying for homes and food businesses.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial & Residential Rodent Management",
            description:
              "Tamper-resistant bait stations, exclusion proofing, and sanitary rat capture programs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Misting & Dengue Mosquito Fogging",
            description:
              "ULV cold misting and thermal mosquito knock-down treatments across CDO barangays.",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-slate-50 text-neutral-900 antialiased pb-16 sm:pb-0">
        {children}
      </body>
    </html>
  );
}
