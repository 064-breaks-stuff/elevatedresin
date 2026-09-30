import { Link } from "react-router-dom";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const projectTypes = [
  {
    title: "Driveways",
    description:
      "Plan a full driveway resurfacing project around vehicle use, drainage, the existing surface, and finish goals.",
    to: "/driveways"
  },
  {
    title: "Patios",
    description:
      "Explore a complete patio transformation for outdoor living, entertaining, and connected exterior spaces.",
    to: "/patios"
  },
  {
    title: "Pool Decks",
    description:
      "Plan a cohesive pool surround around water management, selected surface options, and the wider outdoor area.",
    to: "/pool-decks"
  },
  {
    title: "Walkways & Pathways",
    description:
      "Compare pathway options for entrances, garden paths, side-yard connections, and hardscape transitions.",
    to: "/walkways-pathways"
  },
  {
    title: "Landscape Areas",
    description:
      "Plan paths, borders, decorative surrounds, and coordinated outdoor features as an integrated landscape project.",
    to: "/landscape-areas"
  }
];

export default function HomeServices() {
  return (
    <section className="home-services section">
      <SectionHeading
        eyebrow="Start with Your Project"
        title="Choose the outdoor space you want to transform."
        description="Begin with your driveway, patio, pool deck, pathway, or landscape area. Then compare the Resin Rock systems that may fit the existing surface, drainage needs, and intended result."
      />

      <Container>
        <div className="home-services__grid">
          {projectTypes.map((project) => (
            <Link className="home-services__card" key={project.to} to={project.to}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>Explore {project.title}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}