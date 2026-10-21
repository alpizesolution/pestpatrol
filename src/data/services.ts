export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  badge: string;
  popular?: boolean;
  warranty: string;
  description: string;
  targetPests: string[];
  treatmentSteps: string[];
  recommendedFor: string;
  iconName: "ShieldAlert" | "Bug" | "Rat" | "Sparkles" | "Factory";
}

export const CDO_SERVICES: ServiceItem[] = [
  {
    id: "termite-preconstruction",
    title: "Pre-Construction Soil Poisoning & Termite Management",
    shortDesc: "Subterranean termite chemical barrier, concrete sub-slab drilling, soil poisoning, and post-construction treatments.",
    badge: "Termite Defense Specialist",
    popular: true,
    warranty: "Up to 5 Years Written Warranty",
    description:
      "Cagayan de Oro's warm, humid climate creates aggressive breeding conditions for subterranean termites (Anay). We provide complete chemical soil barriers, perimeter trenching, slab pressure injection, and framing preservation to safeguard both new construction and existing properties.",
    targetPests: [
      "Subterranean Termites (Coptotermes vastator)",
      "Drywood Termites (Bukbok)",
      "Dampwood Termites",
    ],
    treatmentSteps: [
      "Comprehensive structural moisture and termite entry acoustic survey",
      "Perimeter soil trenching & sub-slab high-pressure chemical injection",
      "Eco-safe wood framing preservation & timber injection",
      "Colony-elimination monitoring stations & scheduled warranty audits",
    ],
    recommendedFor: "New home constructions, building renovations, timber-rich structures, commercial and residential foundations across CDO.",
    iconName: "ShieldAlert",
  },
  {
    id: "cockroach-ant-control",
    title: "Cockroach & Ant Eradication",
    shortDesc: "Pheromone gel baiting, micro-crack residual barrier spraying, kitchen-safe and pet-safe targeted misting.",
    badge: "Kitchen & Pet Safe",
    warranty: "30-Day Retreatment Guarantee",
    description:
      "Targeting stubborn German cockroaches, American cockroaches, and pervasive black ant colonies. We deploy Integrated Pest Management (IPM) that attacks harborage areas behind appliances, cabinetry, and conduit voids without contaminating food prep areas.",
    targetPests: [
      "German Cockroaches (Ipis)",
      "American Cockroaches",
      "Black House & Ghost Ants",
      "Silverfish & Spiders",
    ],
    treatmentSteps: [
      "Precision pheromone gel baiting in electronics & prep counters",
      "Odorless residual barrier spraying along baseboards & utility entries",
      "Insect growth regulators (IGRs) to halt reproduction cycles",
      "Preventive sanitation consultation & entry sealing guidance",
    ],
    recommendedFor: "Homes, restaurants, cloud kitchens, fast food branches in CDO malls, supermarkets, and bakery facilities.",
    iconName: "Bug",
  },
  {
    id: "rodent-abatement",
    title: "Rodent Abatement & Exclusion Control",
    shortDesc: "Strategic tamper-proof baiting stations, sanitary trapping, and crawlspace exclusion for houses and warehouses.",
    badge: "Zero-Odor Captures",
    warranty: "Guaranteed Population Collapse",
    description:
      "Rats chew through structural wiring, contaminate stored food, and spread leptospirosis. We install secured tamper-resistant bait stations, sanitary attic traps, and identify roof-line entry holes to completely seal your property.",
    targetPests: [
      "Norway Sewer Rats (Daga)",
      "Roof Rats (Black Rats)",
      "House Mice (Mus musculus)",
    ],
    treatmentSteps: [
      "Thorough roof eaves, ceiling cavities, and perimeter inspection",
      "Deployment of key-lockable tamper-resistant bait stations",
      "Attic and warehouse mechanical trapping systems",
      "Mesh proofing of plumbing and electrical penetration gaps",
    ],
    recommendedFor: "Warehouses in Bugo/Lapasan, grain storage, grocery stores, food processing plants, and residential houses.",
    iconName: "Rat",
  },
  {
    id: "mosquito-general-pest",
    title: "Mosquito & General Pest Control",
    shortDesc: "Spatial outdoor thermal fogging, electric ULV cold misting, eco-friendly larvicide, and seasonal misting.",
    badge: "Dengue Reduction",
    warranty: "Rapid Knockdown Formula",
    description:
      "Shield your family, customers, and staff from seasonal Dengue outbreaks in Northern Mindanao. We deploy Ultra-Low Volume (ULV) cold misting and thermal outdoor foggers to disperse fine droplets that neutralize adult Aedes mosquitoes in garden foliage, ditches, and resting sites.",
    targetPests: [
      "Aedes Aegypti (Dengue Mosquitoes)",
      "Culex Mosquitoes",
      "Flies & Gnats",
      "Seasonal Flying Pests",
    ],
    treatmentSteps: [
      "Thermal perimeter fogging along perimeter ditches & shrubbery",
      "Electric ULV cold misting with non-staining botanical/pyrethroid compounds",
      "Application of eco-friendly biological larvicides in standing water",
      "Indoor perimeter barrier application for long-lasting insect protection",
    ],
    recommendedFor: "Subdivision compounds, schools, clinics, outdoor dining venues, resorts, and garden properties.",
    iconName: "Sparkles",
  },
  {
    id: "commercial-factory-contracts",
    title: "Commercial & Factory Maintenance Contracts",
    shortDesc: "Sanitation and pest compliance maintenance with complete regulatory documentation for food businesses and industrial plants.",
    badge: "HACCP & FDA Compliant",
    warranty: "Scheduled Monthly Audits",
    description:
      "Custom tailored pest maintenance programs meeting the strict sanitation requirements of city health inspectors, FDA regulations, and corporate standards. Includes scheduled visits, detailed logbooks, and sanitary audit documentation.",
    targetPests: [
      "Cockroaches, Rodents, Flies & Stored Product Pests",
      "Crawling & Flying Invertebrates",
      "Warehouse Structural Pests",
    ],
    treatmentSteps: [
      "Comprehensive baseline facility inspection and risk classification",
      "Regular scheduled bait rotation, barrier sprays & misting protocols",
      "Detailed trend logbooks and sanitary inspection certificates",
      "Staff pest-proofing advice and emergency response on demand",
    ],
    recommendedFor: "Factories in PHIVIDEC/Tagoloan, manufacturing plants in Puerto/Bugo, hotels, supermarkets, and corporate facilities.",
    iconName: "Factory",
  },
];

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
