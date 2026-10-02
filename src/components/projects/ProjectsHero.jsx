import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import QuoteCTA from "../conversion/QuoteCTA";
import { site } from "../../data/site";

export default function ProjectsHero() {
  return (
    <section className="projects-hero">
      <Container className="projects-hero__grid">
        <div className="projects-hero__content">
          <Eyebrow>Recent work</Eyebrow>

          <h1>Outdoor surfaces designed to elevate everyday spaces.</h1>

          <p>
            Browse completed resin-bound, Glow Rock, Rock Crete, and Resin Wall
            projects across driveways, patios, pool surrounds, and landscape features.
          </p>

          <QuoteCTA
            label="Request a free estimate"
            to={site.quotePath}
            variant="primary"
          />
        </div>

        <div className="projects-hero__visual">
          <img
            src="/images/projects-hero-resin-driveway.jpg"
            alt="Completed resin driveway outside a residential property."
            fetchPriority="high"
          />
        </div>
      </Container>
    </section>
  );
}