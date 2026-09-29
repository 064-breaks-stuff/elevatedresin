export const projectCaseStudies = [
  /*
    Add approved project records only after all required fields have been
    verified and approved for publication.

    {
      id: "project-id",
      publish: true,
      featured: false,
      projectType: "driveways",
      systems: ["resin-bound", "rock-crete"],
      title: "Approved project title",
      serviceAreaReference: "Approved service-area reference",
      challenge: "Verified project challenge",
      solution: "Verified system and approach",
      result: "Verified project result",
      image: {
        src: "/assets/images/projects/approved-project.jpg",
        alt: "Final approved descriptive alt text"
      },
      relatedProjectRoute: "/driveways"
    }
  */
];

export const projectTypeDefinitions = [
  {
    id: "driveways",
    label: "Driveways",
    route: "/driveways"
  },
  {
    id: "patios",
    label: "Patios",
    route: "/patios"
  },
  {
    id: "pool-decks",
    label: "Pool Decks",
    route: "/pool-decks"
  },
  {
    id: "walkways-pathways",
    label: "Walkways & Pathways",
    route: "/walkways-pathways"
  },
  {
    id: "landscape-areas",
    label: "Landscape Areas",
    route: "/landscape-areas"
  }
];