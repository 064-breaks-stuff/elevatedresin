import { Link } from "react-router-dom";

import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
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
            <img
              src="/images/resin-wall-continuity-horizontal.jpg"
              alt="Light-coloured resin-bound surface in a residential outdoor area."
              loading="lazy"
            />
            <span>Horizontal Resin Bound</span>
          </div>

          <div className="resin-wall-continuity__visual">
            <img
              src="/images/resin-wall-continuity-vertical.jpg"
              alt="Finished textured retaining-wall surface."
              loading="lazy"
            />
            <span>Vertical Binder</span>
          </div>
        </div>
      </Container>
    </section>
  );
}