import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import QuoteCTA from "../conversion/QuoteCTA";
import { glowRockPage } from "../../data/glowRock";
import { site } from "../../data/site";

export default function GlowRockHero() {
  const { hero } = glowRockPage;

  return (
    <section className="glow-rock-hero">
      <Container className="glow-rock-hero__grid">
        <div className="glow-rock-hero__content">
          <Eyebrow>{hero.eyebrow}</Eyebrow>

          <h1>{hero.title}</h1>

          <p>{hero.description}</p>

          <QuoteCTA label="Request a Free Quote" />

          <p className="glow-rock-hero__service-area">{site.serviceArea}</p>
        </div>

        <div className="glow-rock-hero__visual">
          <img
            src="/images/glow-rock-hero.jpg"
            alt="Blue-glowing paving slabs across an outdoor patio at night."
            fetchPriority="high"
          />
        </div>
      </Container>
    </section>
  );
}