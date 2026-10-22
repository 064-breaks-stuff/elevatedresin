import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const projectTypes = [
  {
    "title": "Driveways",
    "description": "Coordinate the driveway and entrance around the existing base, vehicle use, edges, and drainage.",
    "to": "/driveways"
  },
  {
    "title": "Patios",
    "description": "Create an outdoor-living area around seating, gatherings, thresholds, and the garden.",
    "to": "/patios"
  },
  {
    "title": "Pool Decks",
    "description": "Follow the pool and seating layout while assessing wet-area suitability, coping, and water management.",
    "to": "/pool-decks"
  },
  {
    "title": "Walkways & Pathways",
    "description": "Connect doors, gates, patios, and gardens with a bound finish planned around width, levels, and access.",
    "to": "/walkways-pathways"
  },
  {
    "title": "Landscape Areas",
    "description": "Explore defined paths, borders, gravel-look areas, and selected vertical or decorative glow details.",
    "to": "/landscape-areas"
  }
];

export default function HomeServices() {
  return (
    <section id="project-types" className="home-services section" style={{ scrollMarginTop: "7rem" }}>
      <SectionHeading eyebrow="Start with Your Project" title="Choose the outdoor space you want to transform." description="Each project page explains finish possibilities, existing-surface questions, drainage, and the details to include in your enquiry." />
      <Container>
        <div className="home-services__grid">
          {projectTypes.map((project) => (
            <Link className="home-services__card" key={project.to} to={project.to}>
              <h3>{project.title}</h3><p>{project.description}</p>
              <span className="home-services__card-link">Explore {project.title}<ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} /></span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
