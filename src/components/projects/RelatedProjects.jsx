import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function RelatedProjects({ projectIds, projectPages }) {
  const relatedProjects = projectIds
    .map((projectId) => projectPages[projectId])
    .filter(Boolean);

  if (!relatedProjects.length) {
    return null;
  }

  return (
    <section className="project-related-projects section">
      <SectionHeading
        eyebrow="Explore by Project"
        title="Planning more than one outdoor space?"
        description="Explore related project types and compare the options that may fit the rest of your outdoor plan."
      />

      <Container>
        <div className="project-related-projects__grid">
          {relatedProjects.map((project) => (
            <Link
              className="project-related-projects__card"
              key={project.slug}
              to={project.route}
            >
              <span>{project.eyebrow}</span>

              <h3>{project.heroTitle}</h3>

              <span className="project-related-projects__link">
                Explore this project type
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}