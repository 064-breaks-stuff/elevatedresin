import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import PlaceholderVisual from "../common/PlaceholderVisual";
import QuoteCTA from "../conversion/QuoteCTA";
import { resinBoundPage } from "../../data/resinBound";

export default function ResinBoundDrainage() {
  const { drainage } = resinBoundPage;

  return (
    <section className="resin-bound-drainage section">
      <Container className="resin-bound-drainage__grid">
        <div className="resin-bound-drainage__content">
          <Eyebrow>{drainage.eyebrow}</Eyebrow>

          <h2>{drainage.title}</h2>

          <div className="resin-bound-drainage__copy">
            {drainage.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <QuoteCTA label="Discuss Your Project" />
        </div>

        <div className="resin-bound-drainage__visual">
          {/* TODO[ASSET]: Replace with approved Resin Bound permeability, drainage, or finished surface project image. */}
          <PlaceholderVisual
            label="Resin-bound permeability and drainage visual"
            assetName="PLACEHOLDER-resin-bound-drainage.jpg"
            aspectRatio="feature"
          />
        </div>
      </Container>
    </section>
  );
}