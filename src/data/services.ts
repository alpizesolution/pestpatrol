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
  iconName: "ShieldAlert" | "Bug" | "Rat" | "Sparkles";
}

export const CDO_SERVICES: ServiceItem[] = [
  {
    id: "termite-control",
    title: "Comprehensive Termite Control & Soil Poisoning",
    shortDesc: "Complete subterranean termite eradication, chemical soil barrier, and wood injection defense.",
    badge: "Most Requested in CDO",
    popular: true,
    warranty: "Up to 5 Years Warranty",
    description:
      "Cagayan de Oro's warm, humid climate creates ideal breeding conditions for destructive subterranean termites (Anay). Our multi-phase termite control system uses low-odor, non-repellent termiticides that eliminate entire underground colonies while establishing an impenetrable barrier around your home's foundation.",
    targetPests: [
      "Subterranean Termites (Coptotermes vastator)",
      "Drywood Termites (Bukbok)",
      "Dampwood Termites",
    ],
    treatmentSteps: [
      "Thorough acoustic & visual perimeter moisture inspection",
      "Sub-slab pressure injection & perimeter trenching barrier",
      "Wood preservation framing injection with eco-safe borate solutions",
      "Colony-elimination bait stations & scheduled follow-up checks",
    ],
    recommendedFor: "Residential homes (Uptown & Downtown CDO), ongoing construction, timber-rich structures, commercial buildings.",
    iconName: "ShieldAlert",
  },
  {
    id: "general-pest-control",
    title: "General Pest Control & Cockroach Elimination",
    shortDesc: "Targeted gel baiting, micro-crack residual spraying, and ant colony eradication.",
    badge: "FDA-Approved Formulas",
    warranty: "30-Day Retreatment Guarantee",
    description:
      "Targeting American and German cockroaches, black house ants, silverfish, and spiders. We implement Integrated Pest Management (IPM) that attacks breeding harborage zones behind kitchen cabinetry, electrical conduits, and dining spaces without contaminating food prep areas.",
    targetPests: [
      "German Cockroaches (Ipis)",
      "American Cockroaches",
      "Black Carpenter & Ghost Ants",
      "Flies & Silverfish",
    ],
    treatmentSteps: [
      "Pheromone gel baiting in electronics, food prep counters & crevices",
      "Odorless residual barrier treatment along baseboards & utility entries",
      "Insect growth regulators (IGRs) to disrupt reproduction cycles",
      "Preventive sanitation consultation & entry sealing guidance",
    ],
    recommendedFor: "Restaurants, cloud kitchens, fast food franchises in CDO malls, catering businesses, and residential kitchens.",
    iconName: "Bug",
  },
  {
    id: "rodent-control",
    title: "Rodent Control & Exclusion Proofing",
    shortDesc: "Heavy-duty tamper-proof bait stations, mechanical trapping, and roof-line exclusion.",
    badge: "Pet & Child Safe Methods",
    warranty: "Guaranteed Population Collapse",
    description:
      "Rats and mice chew through electrical wiring, contaminate food stocks, and transmit leptospirosis and hantavirus. We deploy tamper-resistant lockable bait stations, non-toxic monitoring lures, and roof crawlspace mechanical traps to eliminate active infestations safely.",
    targetPests: [
      "Norway Sewer Rats (Daga)",
      "Roof Rats (Black Rats)",
      "House Mice (Mus musculus)",
    ],
    treatmentSteps: [
      "Harborage inspection targeting roof eaves, ceiling cavities & drains",
      "Placement of secured tamper-proof bait boxes with safety keys",
      "High-tack trapping stations for zero-odor attic captures",
      "Identification & mesh exclusion of plumbing and wire ingress points",
    ],
    recommendedFor: "Warehouses in Bugo/Lapasan, supermarkets, bakeries, corporate offices, and suburban properties.",
    iconName: "Rat",
  },
  {
    id: "misting-disinfection",
    title: "Misting, Mosquito Fogging & Disinfection",
    shortDesc: "Ultra-Low Volume (ULV) cold misting for dengue mosquito reduction and hospital-grade disinfection.",
    badge: "Rapid Knockdown Formula",
    warranty: "Immediate Contact Reduction",
    description:
      "Protect your family and workers from seasonal Dengue outbreaks in Northern Mindanao. We utilize electric ULV cold misters and thermal outdoor foggers to disperse fine micron droplets that neutralize adult Aedes mosquitoes in foliage, storm drains, and dark resting sites.",
    targetPests: [
      "Aedes Aegypti (Dengue Mosquitoes)",
      "Culex Mosquitoes",
      "Airborne & Surface Pathogens",
      "Mold & Mildew Spores",
    ],
    treatmentSteps: [
      "Outdoor thermal fogging along perimeter ditches, bushes & gardens",
      "ULV indoor cold misting with non-staining botanical/pyrethroid solutions",
      "Application of eco-friendly larvicides in standing water sources",
      "High-touch surface sanitization with hospital-grade virucides",
    ],
    recommendedFor: "Subdivision compounds, schools, clinics, event venues, construction barracks, and garden residences.",
    iconName: "Sparkles",
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
    title: "Safe & Effective Treatments",
    desc: "We exclusively utilize safe, low-odor, low-toxicity chemicals certified by the FDA and FPA. Safe for homes with children and pets.",
    highlight: "Safe & Effective",
  },
  {
    title: "Affordable Rates & Free Quotes",
    desc: "Transparent and honest pricing tailored to CDO properties with zero hidden charges and free on-site inspections.",
    highlight: "Affordable Rates",
  },
  {
    title: "Fast Response CDO Mobilization",
    desc: "Strategic local CDO technicians ready for same-day dispatch and rapid emergency response across all barangays.",
    highlight: "Fast Response",
  },
  {
    title: "Proven Results & Warranty",
    desc: "Long-term peace of mind with guaranteed population collapse and written service warranty certificates.",
    highlight: "Proven Results",
  },
];

export const CDO_CONTACT = {
  name: "Pest Patrol CDO",
  phonePrimary: "+63 916 304 1351",
  phoneSecondary: "0926 669 4734",
  phoneDisplay: "+63 916 304 1351 / 0926 669 4734",
  phoneRaw: "+639163041351",
  phoneTel: "tel:+639163041351",
  phoneSecondaryTel: "tel:+639266694734",
  messengerUrl: "https://m.me/PestPatrolCDO",
  facebookUrl: "https://www.facebook.com/PestPatrolCDO",
  email: "inquiries@pestpatrolcdo.ph",
  tagline: "Serving the Whole of CDO and Northern Mindanao",
  address: "Rodolfo N. Pelaez Blvd, Kauswagan / Upper Carmen, Cagayan de Oro City, 9000 Misamis Oriental",
  hours: "Monday – Saturday: 7:30 AM – 6:30 PM | 24/7 Emergency Response",
  weService: [
    { title: "Homes", icon: "🏠" },
    { title: "Commercial Establishments", icon: "🏢" },
    { title: "Factories & Warehouses", icon: "🏭" },
    { title: "Pre-Construction Soil Poisoning", icon: "🏗️" },
  ],
  targetPestsHeadline: "Cockroaches • Termites • Rodents • Ants • Mosquitoes",
  valuePoints: [
    "Safe & Effective",
    "Affordable Rates",
    "Fast Response",
    "Proven Results",
  ],
  ctaMessage: "Send us a message to schedule your free inspection and quotation",
};
