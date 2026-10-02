import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import QuoteCTA from "../conversion/QuoteCTA";
import { aboutPage } from "../../data/about";
import { site } from "../../data/site";

export default function AboutHero() {
  const { hero } = aboutPage;

  return (
    <section className="about-hero">
      <Container className="about-hero__grid">
        <div className="about-hero__content">
          <Eyebrow>{hero.eyebrow}</Eyebrow>

          <h1>{hero.title}</h1>

          <p>{hero.description}</p>

          <QuoteCTA
            label="Request a free estimate"
            to={site.quotePath}
            variant="primary"
          />
        </div>

        <div className="about-hero__visual">
          <img
            src="/images/about-hero-resin-driveway.jpg"
            alt="Completed resin driveway outside a residential property."
            fetchPriority="high"
          />
        </div>
      </Container>
    </section>
  );
}