export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  summary: string;
  image: string; // Path or URL to rectangular photo
  highlights: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "termite-control",
    title: "Termite & Soil Treatment",
    badge: "Most Requested",
    summary: "Subterranean termite barriers and wood protection with long-term warranty.",
    image: "/images/services/termites.jpg",
    highlights: ["Pre/Post Construction", "Colony Elimination", "Written Warranty"],
  },
  {
    id: "cockroach-ants",
    title: "Cockroach & Ant Control",
    badge: "Residential & Food Service",
    summary: "Odorless kitchen-safe gel baiting and residual perimeter misting.",
    image: "/images/services/cockroaches.jpg",
    highlights: ["Odorless Gel Baiting", "Zero-Downtime Safe", "Kitchen & Pantry Focus"],
  },
  {
    id: "rodent-abatement",
    title: "Rodent & Rat Abatement",
    badge: "Sanitation Defense",
    summary: "Targeted exclusion, tamper-proof bait stations, and entry-point sealing.",
    image: "/images/services/rodents.jpg",
    highlights: ["Tamper-Proof Stations", "Entry Sealing", "Warehouses & Homes"],
  },
  {
    id: "mosquito-fogging",
    title: "Mosquito & Outdoor Fogging",
    badge: "Seasonal Protection",
    summary: "Thermal fogging, misting, and larvicide for outdoor and commercial grounds.",
    image: "/images/services/mosquitoes.jpg",
    highlights: ["Thermal Fogging", "Dengue Prevention", "Compounds & Yards"],
  },
  {
    id: "commercial-contracts",
    title: "Commercial & Factory Maintenance",
    badge: "HACCP & Sanitation Ready",
    summary: "Scheduled pest sanitation for restaurants, factories, and offices.",
    image: "/images/services/commercial.jpg",
    highlights: ["Compliance Certificates", "Scheduled Visits", "Detailed Logbooks"],
  },
];

// Alias for backwards compatibility
export const CDO_SERVICES = servicesData;

export const SERVICE_AREAS = [
  {
    name: "Uptown Cagayan de Oro",
    description: "Pueblo de Oro, Upper Carmen, Gran Europa, SM City Uptown, Xavier Estates",
    tag: "High Demand (Termite)",
  },
  {
    name: "Downtown & Commercial Core",
    description: "Divisoria, Cogon Market district, Carmen proper, Nazareth, Macasandig",
    tag: "Commercial & Restaurant Priority",
  },
  {
    name: "Lapasan & Gusa",
    description: "Centrio/Ayala corridor, Agora Highway, San Pedro, coastal warehouse zones",
    tag: "Rapid Response Team",
  },
  {
    name: "Bulua, Iponan & Bayabas",
    description: "Bulua Bus Terminal corridor, residential subdivisions, coastal residential lanes",
    tag: "Daily Coverage",
  },
  {
    name: "Bugo, Puerto & Tablon",
    description: "Industrial corridor, food manufacturing plants, residential villages",
    tag: "Industrial & Domestic",
  },
  {
    name: "Opol & El Salvador (West Corridor)",
    description: "Westward residential expansions, resort properties, beach front estates",
    tag: "Extended Area Service",
  },
  {
    name: "Tagoloan & Villanueva (East PHIVIDEC)",
    description: "PHIVIDEC industrial plants, power & logistics hubs, commercial offices",
    tag: "Industrial Contracts",
  },
];

export const TRUST_POINTS = [
  {
    title: "Certified Technicians",
    desc: "Safe, effective treatments administered by formally trained, licensed pest management specialists.",
    highlight: "Certified Technicians",
  },
  {
    title: "Eco-Friendly Chemicals",
    desc: "Family, pet, and environment-safe formulas approved by FDA & FPA with low-odor profiles.",
    highlight: "Eco-Friendly",
  },
  {
    title: "Tailored Plans",
    desc: "Custom solutions engineered specifically for your property type, climate, and pest pressures.",
    highlight: "Tailored Plans",
  },
  {
    title: "Long-Term Protection",
    desc: "Written warranty certificates up to 5 years for termites that stop pests from returning.",
    highlight: "Long-Term Protection",
  },
  {
    title: "Fast & Reliable Response",
    desc: "Prompt mobilization, same-day inspection options, and clear updates across Northern Mindanao.",
    highlight: "Fast & Reliable",
  },
];

export const CDO_CONTACT = {
  name: "Pest Patrol CDO",
  phonePrimary: "+63 916 304 1351",
  phoneSecondary: "0926 669 4734",
  phoneDisplay: "+63 916 304 1351",
  phoneRaw: "+639163041351",
  phoneTel: "tel:+639163041351",
  phoneSecondaryTel: "tel:+639266694734",
  messengerUrl: "https://m.me/PestPatrolCDO",
  facebookUrl: "https://www.facebook.com/PestPatrolCDO",
  email: "inquiries@pestpatrolcdo.ph",
  tagline: "Serving the Whole of Cagayan de Oro (CDO) and Northern Mindanao",
  address: "Rodolfo N. Pelaez Blvd, Kauswagan / Upper Carmen, Cagayan de Oro City, 9000 Misamis Oriental",
  hours: "Monday – Saturday: 7:30 AM – 6:30 PM | 24/7 Emergency Response",
  clientSectors: [
    { title: "Homes (Residential)", icon: "🏠", desc: "Single family houses, townhomes, and subdivisions" },
    { title: "Commercial Establishments", icon: "🏢", desc: "Restaurants, cafes, retail malls, and office spaces" },
    { title: "Factories & Warehouses", icon: "🏭", desc: "Industrial manufacturing plants and logistics hubs" },
    { title: "Pre-Construction Sites", icon: "🏗️", desc: "Subterranean termite soil poisoning and barrier defense" },
  ],
  targetPestsHeadline: "Cockroaches • Termites • Rodents • Ants • Mosquitoes",
  ctaMessage: "Send us a message to schedule your free inspection and quotation",
};
