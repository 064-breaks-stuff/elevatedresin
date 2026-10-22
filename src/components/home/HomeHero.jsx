import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import QuoteCTA from "../conversion/QuoteCTA";
import { homeHero } from "../../data/home";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <Container className="home-hero__grid">
        <div className="home-hero__content">
          <Eyebrow>{homeHero.eyebrow}</Eyebrow>
          <h1>{homeHero.title}</h1>
          <p className="home-hero__description">{homeHero.description}</p>
          <div className="home-hero__actions">
            <QuoteCTA label={homeHero.primaryCta.label} ariaLabel={homeHero.primaryCta.label} />
            <a className="button button--secondary" href={homeHero.secondaryCta.to}>{homeHero.secondaryCta.label}</a>
          </div>
          <p className="home-hero__service-line">{homeHero.serviceLine}</p>
        </div>
        <div className="home-hero__visual">
          <img src="/images/home-driveway.jpg" alt="Resin driveway with a multicolored aggregate surface outside a residential property." fetchPriority="high" />
        </div>
      </Container>
    </section>
  );
}
