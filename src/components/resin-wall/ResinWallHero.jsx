import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import PlaceholderVisual from "../common/PlaceholderVisual";
import QuoteCTA from "../conversion/QuoteCTA";
import { resinWallPage } from "../../data/resinWall";
import { site } from "../../data/site";

export default function ResinWallHero() {
  const { hero } = resinWallPage;

  return (
    <section className="resin-wall-hero">
      <Container className="resin-wall-hero__grid">
        <div className="resin-wall-hero__content">
          <Eyebrow>{hero.eyebrow}</Eyebrow>

          <h1>{hero.title}</h1>

          <p>{hero.description}</p>

          <QuoteCTA label="Request a Quote" />

          <p className="resin-wall-hero__service-area">{site.serviceArea}</p>
        </div>

        <div className="resin-wall-hero__visual">
          {/* TODO[ASSET]: Replace with approved Resin Rock Vertical Binder wall, step, or vertical feature image. */}
          <PlaceholderVisual
            label="Resin Rock Vertical Binder feature"
            assetName="PLACEHOLDER-resin-wall-hero.jpg"
            aspectRatio="hero"
            priority="high"
          />
        </div>
      </Container>
    </section>
  );
}