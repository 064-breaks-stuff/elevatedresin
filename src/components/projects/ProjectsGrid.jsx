import { ArrowUpRight } from "lucide-react";

import Container from "../common/Container";
import PlaceholderVisual from "../common/PlaceholderVisual";
import SectionHeading from "../common/SectionHeading";
import { projects, projectsPage } from "../../data/projects";

export default function ProjectsGrid() {
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
          {projects.map((project) => (
            <article
              className={`projects-grid__item ${project.layout}`}
              key={project.id}
            >
              {/* TODO[ASSET]: Replace with an approved, verified Elevated Resin Creations project image and final descriptive alt text. */}
              <PlaceholderVisual
                label={project.title}
                assetName={project.image.assetName}
                aspectRatio="gallery"
              />

              <span className="projects-grid__meta">
                <span>{project.category}</span>
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} />
              </span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}