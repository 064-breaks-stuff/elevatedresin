import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import PlaceholderVisual from "../common/PlaceholderVisual";
import { rockCretePage } from "../../data/rockCrete";

export default function RockCreteFoundation() {
  const { foundation } = rockCretePage;

  return (
    <section className="rock-crete-foundation section">
      <Container className="rock-crete-foundation__grid">
        <div className="rock-crete-foundation__visual">
          {/* TODO[ASSET]: Replace with approved Rock Crete aggregate, sub-base, or installation detail image. */}
          <PlaceholderVisual
            label="Rock Crete foundation detail"
            assetName="PLACEHOLDER-rock-crete-foundation.jpg"
            aspectRatio="square"
          />
        </div>

        <div className="rock-crete-foundation__content">
          <Eyebrow>{foundation.eyebrow}</Eyebrow>

          <h2>{foundation.title}</h2>

          <div className="rock-crete-foundation__copy">
            {foundation.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}