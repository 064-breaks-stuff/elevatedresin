import Button from "../common/Button";
import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import PlaceholderVisual from "../common/PlaceholderVisual";
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
            <Button href={homeHero.primaryCta.href} showArrow>
              {homeHero.primaryCta.label}
            </Button>

            <Button to={homeHero.secondaryCta.to} variant="secondary">
              {homeHero.secondaryCta.label}
            </Button>
          </div>

          <p className="home-hero__service-line">{homeHero.serviceLine}</p>
        </div>

        <div className="home-hero__visual">
          {/* TODO[ASSET]: Replace with approved original Elevated Resin Creations hero image. */}
          <PlaceholderVisual
            label="Premium resin-bound outdoor surface hero image"
            assetName="PLACEHOLDER-hero-resin-bound.jpg"
            aspectRatio="hero"
            priority="high"
          />
        </div>
      </Container>
    </section>
  );
}