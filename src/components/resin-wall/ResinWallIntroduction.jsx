import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import PlaceholderVisual from "../common/PlaceholderVisual";
import { resinWallPage } from "../../data/resinWall";

export default function ResinWallIntroduction() {
  const { introduction } = resinWallPage;

  return (
    <section className="resin-wall-introduction section">
      <Container className="resin-wall-introduction__grid">
        <div className="resin-wall-introduction__visual">
          {/* TODO[ASSET]: Replace with approved Vertical Binder surface-detail image. */}
          <PlaceholderVisual
            label="Vertical stone surfacing detail"
            assetName="PLACEHOLDER-resin-wall-introduction.jpg"
            aspectRatio="square"
          />
        </div>

        <div className="resin-wall-introduction__content">
          <Eyebrow>{introduction.eyebrow}</Eyebrow>

          <h2>{introduction.title}</h2>

          <div className="resin-wall-introduction__copy">
            {introduction.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}