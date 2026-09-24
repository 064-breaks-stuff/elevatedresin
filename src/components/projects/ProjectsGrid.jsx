import { ArrowUpRight, Maximize2 } from "lucide-react";
import { useState } from "react";

import Container from "../common/Container";
import PlaceholderVisual from "../common/PlaceholderVisual";
import SectionHeading from "../common/SectionHeading";
import { projects, projectsPage } from "../../data/projects";
import ProjectsLightbox from "./ProjectsLightbox";

export default function ProjectsGrid() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { gallery } = projectsPage;

  return (
    <section className="projects-gallery section">
      <SectionHeading
        eyebrow={gallery.eyebrow}
        title={gallery.title}
        description={gallery.description}
      />

      <Container>
        <div className="projects-gallery__notice">
          <span>Placeholder gallery</span>
          <p>
            Project titles, categories, details, locations, and imagery will be
            added only when verified and approved.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <button
              className={`projects-grid__item ${project.layout}`}
              type="button"
              key={project.id}
              onClick={() => setActiveIndex(index)}
              aria-label={`Open project image placeholder ${index + 1}`}
            >
              {/* TODO[ASSET]: Replace with an approved, verified Elevated Resin Creations project image and final descriptive alt text. */}
              <PlaceholderVisual
                label={project.title}
                assetName={project.image.assetName}
                aspectRatio="gallery"
              />

              <span className="projects-grid__overlay" aria-hidden="true">
                <Maximize2 size={22} strokeWidth={2} />
              </span>

              <span className="projects-grid__meta" aria-hidden="true">
                <span>{project.category}</span>
                <ArrowUpRight size={18} strokeWidth={2} />
              </span>
            </button>
          ))}
        </div>
      </Container>

      <ProjectsLightbox
        projects={projects}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
      />
    </section>
  );
}