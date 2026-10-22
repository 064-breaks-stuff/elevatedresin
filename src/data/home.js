import { site } from "./site";

export const homeHero = {
  "eyebrow": "Approved Resin Rock Installer",
  "title": "Natural-stone surfaces for the spaces you enjoy outside.",
  "description": "Bring your driveway, patio, pool surround, or garden route together with a coordinated stone finish. Elevated Resin Creations helps you explore resurfacing and new-construction options around your Wisconsin property, its existing base, and the way you use it.",
  "primaryCta": {
    "label": "Request a Project Estimate"
  },
  "secondaryCta": {
    "label": "Explore Your Project Options",
    "to": "#project-types"
  },
  "serviceLine": site.serviceArea
};

export const trustItems = [site.credential, "Existing-surface assessment", "Application-specific system selection", "Drainage-conscious project planning"];

export const resinBoundValue = {
  "eyebrow": "What Happens Beneath the Finish",
  "title": "A better-looking surface starts with the right construction.",
  "paragraphs": [
    "Resin-bound surfacing mixes natural aggregate with resin before the material is placed and hand-troweled. The result is a coordinated, textured stone finish rather than loose gravel spread over the ground. Curves, contrasting borders, and connected areas can be considered in the design.",
    "A suitable existing concrete or asphalt surface may offer an overlay opportunity after assessment and preparation. A full permeable build-up is different: the surface and supporting layers must work with storage, infiltration, or a defined drainage outlet. An overlay does not make the slab beneath it permeable.",
    "Your proposal should identify what remains, what needs preparation or replacement, how water leaves the area, and the intended use. Active movement or a failing foundation must be addressed before installing a decorative finish."
  ],
  "cta": {
    "label": "Explore Resin Bound",
    "to": "/services/resin-bound"
  }
};

export const homeBenefitItems = [
  {
    "title": "Natural stone, coordinated with your home",
    "description": "Compare light, dark, warm, and contrasting aggregate finishes alongside your exterior materials. Borders and curves can connect the driveway, entrance, patio, and garden."
  },
  {
    "title": "Resurfacing where the base is suitable",
    "description": "A sound existing base may offer an overlay opportunity after inspection and preparation. Discuss what can remain before assuming full removal is required."
  },
  {
    "title": "Water management built into the scope",
    "description": "The open wearing surface is only part of the water path. Confirm whether your proposal is an overlay with drainage details or a full permeable construction."
  },
  {
    "title": "Bound aggregate instead of migrating gravel",
    "description": "In a sound resin-bound finish, stones are held together rather than left loose. Plan defined edges and transitions alongside actual walking or vehicle use."
  },
  {
    "title": "Care you can plan for",
    "description": "Understand debris removal, drainage inspection, and approved cleaning and winter-care requirements before choosing the finish."
  },
  {
    "title": "Details that connect the project",
    "description": "Include thresholds, borders, steps, pool edges, and access during work. The project is more than its central surface area."
  }
];

export const processSteps = [
  {
    "number": "01",
    "title": "Share the project",
    "description": "Send your location, photographs, approximate area, intended use, and any drainage or access concerns."
  },
  {
    "number": "02",
    "title": "Assess the construction",
    "description": "Review the existing surface, preparation, levels, transitions, drainage, and suitability for the proposed application."
  },
  {
    "number": "03",
    "title": "Choose the finish and confirm the scope",
    "description": "Compare aggregate and border details, then confirm preparation, supporting construction, drainage, access, scheduling conditions, and applicable written terms."
  },
  {
    "number": "04",
    "title": "Install, protect, and hand over",
    "description": "Follow the selected system’s requirements, confirm when the area can return to use, and provide applicable care guidance."
  }
];

export const comparisonRows = [
  {
    "feature": "Finish and design",
    "resinBound": "Bound natural aggregate with coordinated borders and curves; movement details may still be required",
    "looseGravel": "Loose stone whose movement and containment require consideration",
    "pavers": "Unit styles, joint patterns, borders, and layouts",
    "concrete": "Plain or decorative finishes with joint details"
  },
  {
    "feature": "Water management",
    "resinBound": "Open wearing surface; the supporting construction determines infiltration or drainage",
    "looseGravel": "Assess aggregate, supporting layers, grading, and runoff",
    "pavers": "Distinguish permeable assemblies from conventionally drained paving",
    "concrete": "Distinguish conventional dense concrete from designed pervious concrete"
  },
  {
    "feature": "Existing construction",
    "resinBound": "An overlay may retain a suitable base after inspection and preparation",
    "looseGravel": "Assess support, containment, levels, and expected traffic",
    "pavers": "Assess base, levels, edge restraint, and installation scope",
    "concrete": "Assess whether repair, resurfacing, or replacement is appropriate"
  },
  {
    "feature": "Wisconsin winter use",
    "resinBound": "Request system-specific snow-clearing and deicing guidance",
    "looseGravel": "Discuss equipment and aggregate displacement",
    "pavers": "Discuss joints, levels, drainage, and winter care",
    "concrete": "Request finish-specific winter care and deicing guidance"
  },
  {
    "feature": "Cost and maintenance",
    "resinBound": "Compare complete scope, preparation, edges, drainage, and ongoing care",
    "looseGravel": "Compare installation and ongoing aggregate management",
    "pavers": "Compare installation and joint or settlement maintenance",
    "concrete": "Compare installation and cleaning, joint, or repair requirements"
  }
];

export const homepageFaqIds = [
  "base-condition",
  "permeability",
  "maintenance",
  "pricing"
];

// Evidence dependencies only. Do not render as published metrics.
export const homepageMetricDependencies = [
  {
    "id": "business-proof",
    "placement": "Trust/proof",
    "requestedMetrics": [
      "Completed project count",
      "Installed square footage",
      "Years operating",
      "Review rating and review count"
    ],
    "value": null,
    "unit": null,
    "source": null,
    "applicableService": "Elevated Resin Creations",
    "reportingDate": null,
    "qualification": "Requires dated business records or verified review evidence.",
    "status": "pending",
    "publishable": false
  },
  {
    "id": "featured-project",
    "placement": "Featured project",
    "requestedMetrics": [
      "Project area",
      "Verified location",
      "Installation duration",
      "Documented outcome"
    ],
    "value": null,
    "unit": null,
    "source": null,
    "applicableService": "A specific approved project",
    "reportingDate": null,
    "qualification": "Requires project records tied to the displayed installation.",
    "status": "pending",
    "publishable": false
  },
  {
    "id": "product-performance",
    "placement": "Benefits/comparison",
    "requestedMetrics": [
      "Tested product performance",
      "Documented maintenance requirements",
      "Comparable project cost figures"
    ],
    "value": null,
    "unit": null,
    "source": null,
    "applicableService": "The exact installed system and application",
    "reportingDate": null,
    "qualification": "Requires original evidence, test conditions, comparator, and system identification.",
    "status": "pending",
    "publishable": false
  },
  {
    "id": "installation-and-opening",
    "placement": "Process",
    "requestedMetrics": [
      "Installation window",
      "Pedestrian opening time",
      "Vehicle opening time"
    ],
    "value": null,
    "unit": null,
    "source": null,
    "applicableService": "The exact installed system",
    "reportingDate": null,
    "qualification": "Requires current guidance with weather and project conditions.",
    "status": "pending",
    "publishable": false
  },
  {
    "id": "warranty-and-response",
    "placement": "Warranty/final CTA",
    "requestedMetrics": [
      "Written warranty duration",
      "Verified response-time commitment"
    ],
    "value": null,
    "unit": null,
    "source": null,
    "applicableService": "Elevated Resin Creations",
    "reportingDate": null,
    "qualification": "Requires approved written terms and applicable exclusions.",
    "status": "pending",
    "publishable": false
  }
];
