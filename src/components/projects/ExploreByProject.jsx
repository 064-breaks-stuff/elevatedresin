import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function ExploreByProject({ content }) {
  return (
    <section className="explore-by-project section">
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <Container>
        <div className="explore-by-project__grid">
          {content.projects.map((project) => (
            <article className="explore-by-project__card" key={project.to}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <Link className="explore-by-project__link" to={project.to}>
                <span>Explore {project.title}</span>
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}