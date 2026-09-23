import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import PlaceholderVisual from "../common/PlaceholderVisual";
import { resinBoundPage } from "../../data/resinBound";

const placeholderSwatches = [
  "Stone blend placeholder 01",
  "Stone blend placeholder 02",
  "Stone blend placeholder 03",
  "Stone blend placeholder 04",
  "Stone blend placeholder 05",
  "Stone blend placeholder 06"
];

export default function ResinBoundColours() {
  const { colours } = resinBoundPage;

  return (
    <section className="resin-bound-colours section">
      <Container className="resin-bound-colours__grid">
        <div className="resin-bound-colours__content">
          <Eyebrow>{colours.eyebrow}</Eyebrow>

          <h2>{colours.title}</h2>

          <p>{colours.description}</p>

          <div className="resin-bound-colours__note">
            {/* TODO[ASSET]: Replace placeholder swatches with approved Resin Rock colour-blend assets and exact approved blend names. */}
            <strong>Approved colour assets required.</strong>
            <span>
              Replace the preview set only with client-approved Resin Rock blend
              imagery and verified blend labels.
            </span>
          </div>
        </div>

        <div className="resin-bound-colours__swatches">
          {placeholderSwatches.map((swatch, index) => (
            <div className="resin-bound-colours__swatch" key={swatch}>
              <PlaceholderVisual
                label={swatch}
                assetName={`PLACEHOLDER-resin-bound-colour-${String(index + 1).padStart(2, "0")}.jpg`}
                aspectRatio="square"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}