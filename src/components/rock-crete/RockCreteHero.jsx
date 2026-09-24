import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import PlaceholderVisual from "../common/PlaceholderVisual";
import QuoteCTA from "../conversion/QuoteCTA";
import { rockCretePage } from "../../data/rockCrete";
import { site } from "../../data/site";

export default function RockCreteHero() {
  const { hero } = rockCretePage;

  return (
    <section className="rock-crete-hero">
      <Container className="rock-crete-hero__grid">
        <div className="rock-crete-hero__content">
          <Eyebrow>{hero.eyebrow}</Eyebrow>

          <h1>{hero.title}</h1>

          <p>{hero.description}</p>

          <QuoteCTA label="Request a Quote" />

          <p className="rock-crete-hero__service-area">{site.serviceArea}</p>
        </div>

        <div className="rock-crete-hero__visual">
          {/* TODO[ASSET]: Replace with approved Rock Crete system, foundation, or installation image. */}
          <PlaceholderVisual
            label="Rock Crete foundation system visual"
            assetName="PLACEHOLDER-rock-crete-hero.jpg"
            aspectRatio="hero"
            priority="high"
          />
        </div>
      </Container>
    </section>
  );
}