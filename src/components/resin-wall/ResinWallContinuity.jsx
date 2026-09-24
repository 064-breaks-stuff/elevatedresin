import { Link } from "react-router-dom";

import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import PlaceholderVisual from "../common/PlaceholderVisual";
import { resinWallPage } from "../../data/resinWall";

export default function ResinWallContinuity() {
  const { continuity } = resinWallPage;

  return (
    <section className="resin-wall-continuity section">
      <Container className="resin-wall-continuity__grid">
        <div className="resin-wall-continuity__content">
          <Eyebrow>{continuity.eyebrow}</Eyebrow>

          <h2>{continuity.title}</h2>

          <p>{continuity.description}</p>

          <Link className="button button--secondary" to="/services/resin-bound">
            <span>Explore Resin Bound</span>
          </Link>
        </div>

        <div className="resin-wall-continuity__visuals">
          <div className="resin-wall-continuity__visual">
            {/* TODO[ASSET]: Replace with approved horizontal Resin Bound surface image. */}
            <PlaceholderVisual
              label="Horizontal Resin Bound surface"
              assetName="PLACEHOLDER-resin-wall-horizontal-surface.jpg"
              aspectRatio="square"
            />
            <span>Horizontal Resin Bound</span>
          </div>

          <div className="resin-wall-continuity__visual">
            {/* TODO[ASSET]: Replace with approved Vertical Binder surface image. */}
            <PlaceholderVisual
              label="Vertical Resin Rock Binder surface"
              assetName="PLACEHOLDER-resin-wall-vertical-surface.jpg"
              aspectRatio="square"
            />
            <span>Vertical Binder</span>
          </div>
        </div>
      </Container>
    </section>
  );
}