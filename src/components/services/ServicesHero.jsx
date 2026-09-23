import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import PlaceholderVisual from "../common/PlaceholderVisual";
import QuoteCTA from "../conversion/QuoteCTA";
import { site } from "../../data/site";

export default function ServicesHero() {
  return (
    <section className="services-hero">
      <Container className="services-hero__grid">
        <div className="services-hero__content">
          <Eyebrow>{site.credential}</Eyebrow>

          <h1>Resin Surfacing & Product Solutions</h1>

          <p>
            Elevated Resin Creations provides Resin Rock systems for refined,
            durable, and practical outdoor surfacing across residential and
            commercial spaces.
          </p>

          <QuoteCTA />

          <p className="services-hero__service-area">{site.serviceArea}</p>
        </div>

        <div className="services-hero__visual">
          {/* TODO[ASSET]: Replace with an approved Elevated Resin Creations services overview image. */}
          <PlaceholderVisual
            label="Resin surfacing solutions overview"
            assetName="PLACEHOLDER-services-hero.jpg"
            aspectRatio="hero"
            priority="high"
          />
        </div>
      </Container>
    </section>
  );
}