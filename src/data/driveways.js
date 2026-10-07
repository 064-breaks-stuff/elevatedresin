export const drivewaysPage = {
  pageTitle: "Wisconsin Driveway Resurfacing | Elevated Resin Creations",
  metaDescription:
    "Explore driveway resurfacing with Elevated Resin Creations in Menasha and surrounding Wisconsin areas. Plan around your existing base, vehicle use, drainage, and winter maintenance.",
  route: "/driveways",

  hero: {
    eyebrow: "Wisconsin Driveway Projects",
    title: "A new driveway finish starts with what’s underneath.",
    description:
      "Plan a driveway that complements your home without overlooking the practical questions: the condition of your existing surface, everyday vehicle use, water movement, and winter maintenance. Elevated Resin Creations assesses those details before recommending a Resin Bound surface or a Rock Crete foundation approach.",
    ctaLabel: "Request Your Driveway Estimate",
    image: {
      src: "/images/home-gallery-driveway-light.jpg",
      alt: "Light-coloured driveway leading to a residential garage and entrance."
    }
  },

  assessment: {
    eyebrow: "Before Choosing a Finish",
    title: "Can your existing driveway be resurfaced?",
    description:
      "Resurfacing is an option to assess—not a promise that every concrete driveway can be covered. Your estimate should establish what can stay, what needs preparation, and whether the project requires a different foundation approach.",
    items: [
      {
        title: "Existing surface and movement",
        description:
          "Show us cracks, uneven areas, previous repairs, and any sections that have shifted. The assessment determines whether the existing surface is suitable for the proposed system."
      },
      {
        title: "Water and transitions",
        description:
          "Identify where water collects and how the driveway meets the garage, street, walkways, and planting beds. Surface selection and the drainage approach need to be considered together."
      },
      {
        title: "Vehicles and everyday use",
        description:
          "Tell us what parks on the driveway, where vehicles turn, and whether the project includes heavier vehicles or additional parking. Intended use informs system selection."
      },
      {
        title: "Finish and project scope",
        description:
          "Discuss colour, boundaries, entrance connections, and the area you want resurfaced. We will consider the complete driveway rather than selecting a finish in isolation."
      }
    ]
  },

  winter: {
    eyebrow: "Plan for Wisconsin Use",
    title: "Discuss winter maintenance before installation—not after.",
    description:
      "Your driveway plan should include snow clearing, deicing, rain and snowmelt, and the condition of the underlying construction. We will confirm the requirements of the selected system rather than make blanket winter-performance promises.",
    items: [
      {
        title: "Snow-clearing equipment",
        description:
          "Tell us whether you use a shovel, snowblower, or plowing service. Ask for the approved equipment and contact-surface guidance for the installed finish."
      },
      {
        title: "Deicing practices",
        description:
          "Discuss the products you currently use and request system-specific care guidance. Do not assume that every deicer is suitable for every resin finish."
      },
      {
        title: "Rain and snowmelt",
        description:
          "Point out persistent wet spots and runoff routes. A permeable surface alone does not establish how water will move through the full driveway construction."
      },
      {
        title: "Seasonal installation planning",
        description:
          "Ask how site conditions, preparation, weather, curing requirements, and vehicle access will affect your installation schedule."
      }
    ],
    note:
      "No surface should be treated as ice-proof, slip-proof, or a substitute for appropriate winter maintenance."
  },

  comparison: {
    eyebrow: "Compare the Complete Approach",
    title: "A surface finish and a foundation are different decisions.",
    description:
      "Consider the condition of the driveway first, then compare the work required and the finish you want. There is no universal winner for every Wisconsin property.",
    columns: [
      "Decision",
      "Resin Bound resurfacing",
      "Concrete replacement"
    ],
    rows: [
      {
        topic: "Existing construction",
        resin:
          "Requires an assessment of whether the existing surface and preparation approach are suitable for the selected system.",
        concrete:
          "Discuss which existing materials will be removed or retained and what foundation work is included."
      },
      {
        topic: "Water management",
        resin:
          "Confirm the permeability of the selected system and the drainage approach beneath or around it.",
        concrete:
          "Confirm the proposed grading, drainage details, and transitions around the replacement surface."
      },
      {
        topic: "Winter use",
        resin:
          "Request system-specific snow-clearing and deicing instructions.",
        concrete:
          "Request finish-specific snow-clearing and deicing instructions."
      },
      {
        topic: "Price and disruption",
        resin:
          "Compare an assessed scope covering preparation, repairs, the surface system, and access arrangements.",
        concrete:
          "Compare a scope covering removal, foundation work, installation, and access arrangements."
      }
    ],
    systems: [
      {
        name: "Resin Bound",
        description:
          "The finished surface option. Selection depends on the existing construction, preparation requirements, vehicle use, and the intended appearance.",
        to: "/services/resin-bound",
        linkLabel: "Explore Resin Bound surfaces"
      },
      {
        name: "Rock Crete",
        description:
          "A foundation and sub-base option—not an interchangeable decorative finish. Discuss its suitability where your driveway needs an appropriate foundation approach.",
        to: "/services/rock-crete",
        linkLabel: "Explore Rock Crete foundations"
      }
    ]
  },

  examples: {
    eyebrow: "Driveway Finish Examples",
    title: "Explore the look. Assess your own site.",
    description:
      "These approved installation photographs show different driveway finishes and settings. They are not identified as Wisconsin projects, and they do not establish the suitability of a system for your property.",
    images: [
      {
        src: "/images/home-gallery-driveway-dark.jpg",
        alt: "Dark-coloured driveway outside a brick residential garage.",
        caption: "A darker finish beside a brick garage."
      },
      {
        src: "/images/resin-bound-project-driveway.webp",
        alt: "Close view of a light-coloured driveway surface approaching a home entrance.",
        caption: "A light-coloured aggregate finish at a residential entrance."
      }
    ]
  },

  faqs: [
    {
      id: "driveway-existing-concrete",
      question: "Can you resurface my existing concrete driveway?",
      answer:
        "That depends on the condition of the existing construction and the requirements of the selected system. Share photographs of cracks, repairs, uneven areas, and drainage concerns. We assess suitability before recommending resurfacing or a different foundation approach."
    },
    {
      id: "driveway-rock-crete",
      question: "Do I need Rock Crete as well as Resin Bound?",
      answer:
        "Not automatically. Resin Bound is a surface option; Rock Crete is a foundation and sub-base option. The driveway assessment determines the appropriate approach rather than assuming every project needs the same combination."
    },
    {
      id: "driveway-winter-care",
      question: "What should I ask about snow clearing and deicers?",
      answer:
        "Ask for written care guidance for the exact installed system, including your shovel, snowblower, or plowing arrangements and any proposed deicing products. We do not describe resin surfaces as ice-proof or suitable for every winter-maintenance practice."
    },
    {
      id: "driveway-drainage",
      question: "Will resurfacing solve standing water?",
      answer:
        "Do not assume that a new surface alone will solve a drainage problem. Water management depends on the selected surface, underlying construction, grading, and site conditions. Point out where water collects so those issues can be included in the assessment."
    },
    {
      id: "driveway-estimate",
      question: "What information should I provide for an estimate?",
      answer:
        "Provide your location, approximate driveway area, photographs, existing surface type, drainage concerns, vehicle use, and preferred finish. Include any access or scheduling constraints. Pricing and installation timing require a project-specific scope."
    },
    {
      id: "driveway-service-area",
      question: "Where do you take driveway projects?",
      answer:
        "We serve Menasha, Wisconsin, surrounding areas, and statewide for qualifying projects. Contact us with your location and project scope to confirm whether your driveway project qualifies."
    }
  ],

  cta: {
    eyebrow: "Your Driveway Assessment",
    title: "Tell us what your driveway needs to handle.",
    description:
      "Send your location, approximate area, existing-surface photos, drainage concerns, and vehicle-use details. We will discuss the next step for a project-specific estimate.",
    label: "Request My Driveway Estimate"
  }
};