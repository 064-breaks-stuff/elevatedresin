import { site } from "./site";

export const homeHero = {
  eyebrow: "Approved Resin Rock Installer",
  title: "Natural-stone finishes. A project planned around your Wisconsin property.",
  description:
    "Explore driveways, patios, pool surrounds, pathways, and landscape details with Elevated Resin Creations. We assess the existing construction, intended use, drainage, and finish requirements before recommending an approach.",
  primaryCta: {
    label: "Request a Project Estimate"
  },
  secondaryCta: {
    label: "Explore Project Types",
    to: "/services"
  },
  serviceLine: site.serviceArea
};

export const trustItems = [
  site.credential,
  "Existing-surface assessment",
  "Application-specific system selection",
  "Drainage-conscious project planning"
];

export const resinBoundValue = {
  eyebrow: "Surface and Construction",
  title: "Resurfacing and a fully permeable build-up are different approaches.",
  paragraphs: [
    "A suitable existing surface may offer an opportunity for resurfacing after assessment and preparation. Active movement, weak areas, and structural failure must be addressed rather than hidden beneath a decorative finish.",
    "A permeable surface does not establish the drainage performance of the whole installation. The supporting layers, existing slab, grading, soil, outlets, and maintenance determine where water can go. Your project should identify the proposed construction and water-management approach.",
    "For Wisconsin projects, discuss rain and snowmelt, winter maintenance, vehicle or foot traffic, and installation conditions before choosing a finish."
  ],
  cta: {
    label: "Explore Resin Bound",
    to: "/services/resin-bound"
  }
};

export const homeBenefitItems = [
  {
    title: "A coordinated stone finish",
    description:
      "Explore aggregate colours and borders that complement your home, garden, and connected outdoor spaces."
  },
  {
    title: "Resurfacing where suitable",
    description:
      "Discuss whether existing construction can remain after assessment. Suitability—not appearance alone—determines the preparation required."
  },
  {
    title: "Water management considered",
    description:
      "Choose the surface and supporting construction together. Permeability and drainage must be evaluated for the actual proposed system."
  },
  {
    title: "Details designed around use",
    description:
      "Include vehicle access, walking routes, pool edges, thresholds, and planting-bed boundaries in the scope."
  },
  {
    title: "System-specific care",
    description:
      "Request cleaning, snow-clearing, deicing, and return-to-use guidance for the exact products installed."
  },
  {
    title: "A clear project scope",
    description:
      "Understand what stays, what is prepared or replaced, which system is proposed, and how access will be managed."
  }
];

export const processSteps = [
  {
    number: "01",
    title: "Share the project",
    description:
      "Send your location, photographs, approximate area, intended use, and any drainage or access concerns."
  },
  {
    number: "02",
    title: "Assess the construction",
    description:
      "Review the existing surface, preparation needs, transitions, drainage, and suitability for the proposed application."
  },
  {
    number: "03",
    title: "Confirm the system and scope",
    description:
      "Agree on the finish, foundation approach where needed, boundaries, preparation, and project-specific scheduling conditions."
  },
  {
    number: "04",
    title: "Install, protect, and hand over",
    description:
      "Follow the selected system’s installation requirements, confirm when the area can return to use, and provide applicable care guidance."
  }
];

export const comparisonRows = [
  {
    feature: "Finish and design",
    resinBound: "Aggregate finish with application-specific borders and details",
    looseGravel: "Loose aggregate with edging and containment to consider",
    pavers: "Unit styles, joint patterns, borders, and layouts",
    concrete: "Plain or decorative finishes with joint details"
  },
  {
    feature: "Water management",
    resinBound: "Confirm surface permeability and the complete drainage build-up",
    looseGravel: "Assess aggregate, supporting layers, grading, and runoff",
    pavers: "Confirm whether the proposed assembly is permeable or conventionally drained",
    concrete: "Distinguish conventional dense concrete from a designed pervious system"
  },
  {
    feature: "Existing construction",
    resinBound: "Assess substrate suitability before proposing an overlay",
    looseGravel: "Assess support, containment, levels, and intended traffic",
    pavers: "Assess the base, levels, edge restraint, and installation scope",
    concrete: "Assess whether repair, resurfacing, or replacement is appropriate"
  },
  {
    feature: "Wisconsin winter use",
    resinBound: "Request system-specific snow-clearing and deicing guidance",
    looseGravel: "Discuss snow-clearing equipment and aggregate displacement",
    pavers: "Discuss joints, levels, drainage, and winter-maintenance guidance",
    concrete: "Request finish-specific winter care and deicing guidance"
  },
  {
    feature: "Cost and maintenance",
    resinBound: "Compare preparation, installation, and documented care requirements",
    looseGravel: "Compare installation scope and ongoing aggregate management",
    pavers: "Compare installation scope and joint or settlement maintenance",
    concrete: "Compare installation scope and cleaning, joint, or repair requirements"
  }
];

export const homepageFaqIds = [
  "base-condition",
  "permeability",
  "maintenance",
  "pricing"
];

/*
 * Internal evidence inventory.
 * These entries are dependencies, not publishable metrics.
 * Do not render pending values as counters or performance claims.
 */
export const homepageMetricDependencies = [
  {
    id: "business-proof",
    placement: "Trust/proof",
    requestedMetrics: [
      "Completed project count",
      "Installed square footage",
      "Years operating",
      "Review rating and review count"
    ],
    value: null,
    unit: null,
    source: null,
    applicableService: "Elevated Resin Creations",
    reportingDate: null,
    qualification: "Requires dated business records or verified review evidence.",
    status: "pending",
    publishable: false
  },
  {
    id: "featured-project",
    placement: "Featured project",
    requestedMetrics: [
      "Project area",
      "Verified location",
      "Installation duration",
      "Documented outcome"
    ],
    value: null,
    unit: null,
    source: null,
    applicableService: "A specific approved project",
    reportingDate: null,
    qualification: "Requires project records tied to the displayed installation.",
    status: "pending",
    publishable: false
  },
  {
    id: "product-performance",
    placement: "Benefits/comparison",
    requestedMetrics: [
      "Tested product performance",
      "Documented maintenance requirements",
      "Comparable project cost figures"
    ],
    value: null,
    unit: null,
    source: null,
    applicableService: "The exact installed system and application",
    reportingDate: null,
    qualification:
      "Requires original evidence, test conditions, comparator, and system identification.",
    status: "pending",
    publishable: false
  },
  {
    id: "installation-and-opening",
    placement: "Process",
    requestedMetrics: [
      "Installation window",
      "Pedestrian opening time",
      "Vehicle opening time"
    ],
    value: null,
    unit: null,
    source: null,
    applicableService: "The exact installed system",
    reportingDate: null,
    qualification: "Requires current guidance with weather and project conditions.",
    status: "pending",
    publishable: false
  },
  {
    id: "warranty-and-response",
    placement: "Warranty/final CTA",
    requestedMetrics: [
      "Written warranty duration",
      "Verified response-time commitment"
    ],
    value: null,
    unit: null,
    source: null,
    applicableService: "Elevated Resin Creations",
    reportingDate: null,
    qualification: "Requires approved written terms and applicable exclusions.",
    status: "pending",
    publishable: false
  }
];