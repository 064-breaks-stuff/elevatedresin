import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { serviceProjects } from "../../data/serviceProjects";

export default function ProjectDiscoveryGrid() {
  return (
    <section className="services-project-discovery section">
      <SectionHeading
        eyebrow="Explore by Project"
        title="Start with the outdoor space you want to transform."
        description="Choose the project type that best matches your plans. From there, you can compare the Resin Rock systems that may be appropriate for the existing surface, intended use, drainage needs, and finish goals."
      />

      <Container>
        <div className="services-project-discovery__grid">
          {serviceProjects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                className="services-project-discovery__card"
                key={project.to}
              >
                <span
                  className="services-project-discovery__icon"
                  aria-hidden="true"
                >
                  <Icon size={22} strokeWidth={1.8} />
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <Link
                  className="services-project-discovery__link"
                  to={project.to}
                >
                  <span>{project.ctaLabel}</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    size={18}
                    strokeWidth={2}
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}