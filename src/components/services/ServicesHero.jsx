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

          <h1>Resin surfacing projects for the outdoor spaces that matter most.</h1>

          <p>
            Elevated Resin Creations helps homeowners and commercial property
            owners plan complete driveway, patio, pool deck, pathway, and
            landscape-area transformations with the appropriate Resin Rock
            system for the project.
          </p>

          <QuoteCTA label="Request a Project Estimate" />

          <p className="services-hero__service-area">{site.serviceArea}</p>
        </div>

        <div className="services-hero__visual">
          {/* TODO[ASSET]: Replace with an approved Elevated Resin Creations services overview image. */}
          <PlaceholderVisual
            label="Complete outdoor resurfacing project overview"
            assetName="PLACEHOLDER-services-hero.jpg"
            aspectRatio="hero"
            priority="high"
          />
        </div>
      </Container>
    </section>
  );
}