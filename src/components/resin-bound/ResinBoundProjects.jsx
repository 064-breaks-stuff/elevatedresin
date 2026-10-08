import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { resinBoundPage } from "../../data/resinBound";

const projectImages = [
  {
    id: "resin-patio",
    src: "/images/resin-bound-project-patio.jpg",
    alt: "Light-coloured resin-bound patio beside a screened residential outdoor area.",
    className: "resin-bound-projects__item--wide"
  },
  {
    id: "resin-pool",
    src: "/images/resin-bound-project-pool.jpg",
    alt: "Resin-bound pool surround around a curved residential swimming pool.",
    className: "resin-bound-projects__item--tall"
  },
  {
    id: "resin-driveway",
    src: "/images/about-resin-driveway.jpg",
    alt: "Light-coloured resin-bound driveway leading to a residential entrance.",
    className: "resin-bound-projects__item--standard"
  }
];

export default function ResinBoundProjects() {
  const { projects: projectsContent } = resinBoundPage;

  return (
    <section className="resin-bound-projects section">
      <SectionHeading
        eyebrow={projectsContent.eyebrow}
        title={projectsContent.title}
        description={projectsContent.description}
      />

      <Container>
        <div className="resin-bound-projects__grid">
          {projectImages.map((project) => (
            <Link
              className={`resin-bound-projects__item ${project.className}`}
              to="/projects"
              key={project.id}
              aria-label="View all projects"
            >
              <img src={project.src} alt={project.alt} loading="lazy" />

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