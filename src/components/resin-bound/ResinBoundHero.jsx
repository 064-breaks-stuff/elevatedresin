import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import QuoteCTA from "../conversion/QuoteCTA";
import { resinBoundPage } from "../../data/resinBound";
import { site } from "../../data/site";

export default function ResinBoundHero() {
  const { hero } = resinBoundPage;

  return (
    <section className="resin-bound-hero">
      <Container className="resin-bound-hero__grid">
        <div className="resin-bound-hero__content">
          <Eyebrow>{hero.eyebrow}</Eyebrow>

          <h1>{hero.title}</h1>

          <p>{hero.description}</p>

          <QuoteCTA label="Request a Free Quote" />

          <p className="resin-bound-hero__service-area">{site.serviceArea}</p>
        </div>

        <div className="resin-bound-hero__visual">
          <img
            src="/images/resin-bound-hero.jpg"
            alt="Light-coloured resin-bound patio in a furnished residential outdoor living area."
            fetchPriority="high"
          />
        </div>
      </Container>
    </section>
  );
}