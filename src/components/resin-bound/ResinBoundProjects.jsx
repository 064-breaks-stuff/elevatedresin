import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import PlaceholderVisual from "../common/PlaceholderVisual";
import { resinBoundPage } from "../../data/resinBound";

const projectPlaceholders = [
  {
    id: "resin-bound-project-01",
    label: "Resin Bound project placeholder 01",
    assetName: "PLACEHOLDER-resin-bound-project-01.jpg",
    className: "resin-bound-projects__item--wide"
  },
  {
    id: "resin-bound-project-02",
    label: "Resin Bound project placeholder 02",
    assetName: "PLACEHOLDER-resin-bound-project-02.jpg",
    className: "resin-bound-projects__item--tall"
  },
  {
    id: "resin-bound-project-03",
    label: "Resin Bound project placeholder 03",
    assetName: "PLACEHOLDER-resin-bound-project-03.jpg",
    className: "resin-bound-projects__item--standard"
  }
];

export default function ResinBoundProjects() {
  const { projects } = resinBoundPage;

  return (
    <section className="resin-bound-projects section">
      <SectionHeading
        eyebrow={projects.eyebrow}
        title={projects.title}
        description={projects.description}
      />

      <Container>
        <div className="resin-bound-projects__grid">
          {projectPlaceholders.map((project) => (
            <Link
              className={`resin-bound-projects__item ${project.className}`}
              to="/projects"
              key={project.id}
              aria-label={`View projects: ${project.label}`}
            >
              {/* TODO[ASSET]: Replace with approved, verified Elevated Resin Creations Resin Bound project image and final alt text. */}
              <PlaceholderVisual
                label={project.label}
                assetName={project.assetName}
                aspectRatio="gallery"
              />

              <span className="resin-bound-projects__overlay" aria-hidden="true">
                <ArrowUpRight size={24} strokeWidth={2} />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}