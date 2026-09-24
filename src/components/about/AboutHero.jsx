import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import PlaceholderVisual from "../common/PlaceholderVisual";
import QuoteCTA from "../conversion/QuoteCTA";
import { aboutPage } from "../../data/aboutPage";
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

          <QuoteCTA label="Discuss Your Project" />

          <p className="about-hero__service-area">{site.serviceArea}</p>
        </div>

        <div className="about-hero__visual">
          {/* TODO[ASSET]: Replace with an approved Elevated Resin Creations project or workmanship image. */}
          <PlaceholderVisual
            label="Elevated Resin Creations workmanship visual"
            assetName="PLACEHOLDER-about-hero.jpg"
            aspectRatio="hero"
            priority="high"
          />
        </div>
      </Container>
    </section>
  );
}