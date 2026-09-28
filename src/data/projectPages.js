import { productMappings } from "./productMappings";

const coreValueProposition = {
  eyebrow: "A Complete Project Approach",
  title: "Resurface, don’t replace.",
  description:
    "Where an existing surface is stable and suitable for the selected system, resin surfacing can provide an alternative to full removal and replacement. Every project begins with an assessment of the surface, drainage, intended use, and finish requirements."
};

const concreteReplacement = {
  eyebrow: "A Considered Alternative",
  title: "A lower-disruption path for suitable surfaces.",
  description:
    "When existing concrete or other prepared surfaces are stable, clean, and appropriate for the project, resurfacing may reduce the demolition, tear-out, and disruption involved in a full replacement. Suitability depends on the condition of the existing surface and the requirements of the selected Resin Rock system."
};

const wisconsinDurability = {
  eyebrow: "Built for Wisconsin Conditions",
  title: "System selection begins with the conditions around your space.",
  description:
    "Outdoor surfaces in Wisconsin experience seasonal temperature changes, rain, snowmelt, and freeze/thaw cycles. Choosing the appropriate system starts with a professional assessment of the substrate, drainage, intended traffic, and project conditions."
};

const drainageBenefits = {
  eyebrow: "Permeability & Drainage",
  title: "Drainage that starts at the surface.",
  description:
    "With the appropriate permeable Resin Rock system and base preparation, water can drain through the surface rather than remaining on top. This may help reduce standing water and puddles and can support more manageable wet-weather and ice-related conditions. Results depend on the selected system, sub-base, installation, and site conditions.",
  steps: [
    {
      title: "Rainfall or snowmelt",
      description:
        "Water reaches the selected resin-bound surface system."
    },
    {
      title: "Permeable surface",
      description:
        "Where the selected system is permeable, water can move through the surface."
    },
    {
      title: "Drainage below",
      description:
        "Appropriate base preparation helps manage water beneath and through the system."
    }
  ]
};

const emptyLocalProof = {
  eyebrow: "Local Project Proof",
  title: "",
  description: "",
  testimonials: [],
  projects: [],
  enabled: false
};

const emptyFaqs = [];

export const projectPages = {
  driveways: {
    slug: "driveways",
    route: "/driveways",
    pageTitle: "Driveway Resurfacing Projects | Elevated Resin Creations",
    metaDescription:
      "Plan a complete driveway resurfacing project with Elevated Resin Creations. Explore Resin Bound and Rock Crete options for suitable Wisconsin driveways.",
    eyebrow: "Driveway Resurfacing Projects",
    heroTitle:
      "Upgrade your driveway without the mess of full concrete replacement.",
    heroDescription:
      "Explore a complete driveway resurfacing project designed around the existing surface, drainage, intended vehicle use, and the finish you want to achieve.",
    primaryCtaLabel: "Request a Project Estimate",
    projectQualifier:
      "Tell us about your driveway project, existing surface, and approximate project size.",
    benefits: [
      {
        title: "Complete-project focus",
        description:
          "Plan a full driveway transformation around the condition, layout, drainage, and intended use of the space."
      },
      {
        title: "Resurface, don’t replace",
        description:
          "Where the existing surface is stable and suitable, resurfacing may offer an alternative to full removal and replacement."
      },
      {
        title: "System-led planning",
        description:
          "Compare appropriate Resin Rock surface and base options before selecting a finish."
      }
    ],
    recommendedProducts: [
      productMappings["resin-bound"],
      productMappings["rock-crete"]
    ],
    valueProposition: coreValueProposition,
    concreteReplacement,
    wisconsinDurability,
    drainageBenefits,
    localProof: emptyLocalProof,
    faqs: emptyFaqs,
    relatedProjects: ["patios", "walkways-pathways"],
    image: null
  },

  patios: {
    slug: "patios",
    route: "/patios",
    pageTitle: "Patio Resurfacing Projects | Elevated Resin Creations",
    metaDescription:
      "Plan a patio resurfacing project with Elevated Resin Creations. Explore Resin Bound, Rock Crete, and selected Glow Rock options for suitable outdoor-living spaces.",
    eyebrow: "Patio Resurfacing Projects",
    heroTitle:
      "Plan a patio transformation around the way you want to use your outdoor space.",
    heroDescription:
      "Explore a complete patio resurfacing project with system options selected around the existing surface, outdoor-living goals, drainage, and finish requirements.",
    primaryCtaLabel: "Plan Your Patio Resurfacing Project",
    projectQualifier:
      "Tell us about your patio project, existing surface, and approximate project size.",
    benefits: [
      {
        title: "Outdoor-living focus",
        description:
          "Plan a cohesive patio transformation for entertaining, connecting spaces, and long-term outdoor use."
      },
      {
        title: "Considered resurfacing",
        description:
          "Where a substrate is stable and suitable, resurfacing may reduce disruption compared with full tear-out and replacement."
      },
      {
        title: "Flexible finish options",
        description:
          "Compare resin-bound, base-system, and selected glow-stone options based on the project outcome you want."
      }
    ],
    recommendedProducts: [
      productMappings["resin-bound"],
      productMappings["rock-crete"],
      productMappings["glow-rock"]
    ],
    valueProposition: coreValueProposition,
    concreteReplacement,
    wisconsinDurability,
    drainageBenefits,
    localProof: emptyLocalProof,
    faqs: emptyFaqs,
    relatedProjects: ["driveways", "pool-decks", "landscape-areas"],
    image: null
  },

  "pool-decks": {
    slug: "pool-decks",
    route: "/pool-decks",
    pageTitle: "Pool Deck Resurfacing Projects | Elevated Resin Creations",
    metaDescription:
      "Plan a complete pool deck or pool surround resurfacing project with Elevated Resin Creations. Compare Resin Bound, Rock Crete, and selected Glow Rock options.",
    eyebrow: "Pool Deck & Pool Surround Projects",
    heroTitle:
      "Create a more cohesive pool-area transformation.",
    heroDescription:
      "Plan a complete pool deck or pool surround project around water management, outdoor use, finish options, and the existing surface conditions.",
    primaryCtaLabel: "Request a Pool-Deck Consultation",
    projectQualifier:
      "Tell us about your pool deck or pool surround project, existing surface, and approximate project size.",
    benefits: [
      {
        title: "Cohesive outdoor areas",
        description:
          "Plan the pool surround as part of a larger outdoor space rather than an isolated surface treatment."
      },
      {
        title: "Drainage-aware selection",
        description:
          "Consider permeable systems and base preparation where appropriate for the pool-area conditions and selected design."
      },
      {
        title: "Decorative options",
        description:
          "Compare surface and accent options that support the intended look and use of the finished space."
      }
    ],
    recommendedProducts: [
      productMappings["resin-bound"],
      productMappings["rock-crete"],
      productMappings["glow-rock"]
    ],
    valueProposition: coreValueProposition,
    concreteReplacement,
    wisconsinDurability,
    drainageBenefits,
    localProof: emptyLocalProof,
    faqs: emptyFaqs,
    relatedProjects: ["patios", "landscape-areas"],
    image: null
  },

  "walkways-pathways": {
    slug: "walkways-pathways",
    route: "/walkways-pathways",
    pageTitle: "Walkway & Pathway Projects | Elevated Resin Creations",
    metaDescription:
      "Plan a walkway or pathway project with Elevated Resin Creations. Compare Rock Crete, Glow Rock, and Resin Bound options for suitable Wisconsin outdoor spaces.",
    eyebrow: "Walkway & Pathway Projects",
    heroTitle:
      "Connect outdoor spaces with a pathway system selected for the project.",
    heroDescription:
      "Plan entrances, garden paths, side-yard connections, and hardscape transitions around the existing surface, drainage needs, visibility goals, and intended use.",
    primaryCtaLabel: "Request a Project Estimate",
    projectQualifier:
      "Tell us about your walkway or pathway project, existing surface, and approximate project size.",
    benefits: [
      {
        title: "Multiple system options",
        description:
          "Compare Rock Crete, Glow Rock, and Resin Bound options rather than forcing every pathway into a single product choice."
      },
      {
        title: "Drainage considerations",
        description:
          "Consider surface and base options that may help reduce puddling and standing water when the selected system and site conditions are appropriate."
      },
      {
        title: "Connected design",
        description:
          "Plan pathways as part of an entrance, garden, side-yard, or broader outdoor project."
      }
    ],
    recommendedProducts: [
      productMappings["rock-crete"],
      productMappings["glow-rock"],
      productMappings["resin-bound"]
    ],
    valueProposition: coreValueProposition,
    concreteReplacement,
    wisconsinDurability,
    drainageBenefits,
    localProof: emptyLocalProof,
    faqs: emptyFaqs,
    relatedProjects: ["driveways", "landscape-areas"],
    image: null
  },

  "landscape-areas": {
    slug: "landscape-areas",
    route: "/landscape-areas",
    pageTitle: "Landscape Area Projects | Elevated Resin Creations",
    metaDescription:
      "Plan an integrated landscape-area project with Elevated Resin Creations. Compare Glow Rock, Rock Crete, Resin Wall, and Resin Bound options for suitable outdoor spaces.",
    eyebrow: "Landscape Area Projects",
    heroTitle:
      "Build a more connected landscape design around the spaces you use most.",
    heroDescription:
      "Plan garden paths, borders, decorative surrounds, and coordinated outdoor features as part of a larger landscape project with system options selected for the intended result.",
    primaryCtaLabel: "Start Your Resurfacing Project",
    projectQualifier:
      "Tell us about your landscape-area project, existing surfaces, and approximate project size.",
    benefits: [
      {
        title: "Integrated outdoor design",
        description:
          "Plan paths, borders, surrounds, and connected landscape features as a coordinated project."
      },
      {
        title: "Horizontal and vertical options",
        description:
          "Compare surface, base, glow-stone, and vertical stone-surfacing options according to the project outcome."
      },
      {
        title: "Higher-value project scope",
        description:
          "Explore a complete landscape-area project rather than isolated low-ticket decorative work."
      }
    ],
    recommendedProducts: [
      productMappings["glow-rock"],
      productMappings["rock-crete"],
      productMappings["resin-wall"],
      productMappings["resin-bound"]
    ],
    valueProposition: coreValueProposition,
    concreteReplacement,
    wisconsinDurability,
    drainageBenefits,
    localProof: emptyLocalProof,
    faqs: emptyFaqs,
    relatedProjects: ["patios", "walkways-pathways", "pool-decks"],
    image: null
  }
};