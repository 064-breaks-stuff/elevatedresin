import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import PlaceholderVisual from "../common/PlaceholderVisual";
import { resinBoundPage } from "../../data/resinBound";

export default function ResinBoundIntro() {
  const { introduction } = resinBoundPage;

  return (
    <section className="resin-bound-intro section">
      <Container className="resin-bound-intro__grid">
        <div className="resin-bound-intro__visual">
          {/* TODO[ASSET]: Replace with approved Resin Bound aggregate or finished surface detail image. */}
          <PlaceholderVisual
            label="Resin-bound stone surface detail"
            assetName="PLACEHOLDER-resin-bound-intro.jpg"
            aspectRatio="square"
          />
        </div>

        <div className="resin-bound-intro__content">
          <Eyebrow>{introduction.eyebrow}</Eyebrow>

          <h2>{introduction.title}</h2>

          <div className="resin-bound-intro__copy">
            {introduction.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}