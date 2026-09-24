import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import PlaceholderVisual from "../common/PlaceholderVisual";
import QuoteCTA from "../conversion/QuoteCTA";
import { projectsPage } from "../../data/projects";
import { site } from "../../data/site";

export default function ProjectsHero() {
  const { hero } = projectsPage;

  return (
    <section className="projects-hero">
      <Container className="projects-hero__grid">
        <div className="projects-hero__content">
          <Eyebrow>{hero.eyebrow}</Eyebrow>

          <h1>{hero.title}</h1>

          <p>{hero.description}</p>

          <QuoteCTA label="Start Your Project" />

          <p className="projects-hero__service-area">{site.serviceArea}</p>
        </div>

        <div className="projects-hero__visual">
          {/* TODO[ASSET]: Replace with an approved wide Elevated Resin Creations project image. */}
          <PlaceholderVisual
            label="Featured Elevated Resin Creations project"
            assetName="PLACEHOLDER-projects-hero.jpg"
            aspectRatio="hero"
            priority="high"
          />
        </div>
      </Container>
    </section>
  );
}