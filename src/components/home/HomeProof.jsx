import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import PlaceholderVisual from "../common/PlaceholderVisual";
import { site } from "../../data/site";

export default function HomeProof() {
  return (
    <section className="home-proof section">
      <Container className="home-proof__grid">
        <div className="home-proof__credential">
          <Eyebrow>Professional System Credentials</Eyebrow>

          <h2>{site.credential}</h2>

          <p>
            Elevated Resin Creations installs Resin Rock systems for refined, durable, and
            practical outdoor surfacing solutions.
          </p>

          {/* TODO[ASSET]: Replace with approved Approved Resin Rock Installer badge/certification asset. */}
          <div className="home-proof__badge-placeholder">
            <span>Credential asset required</span>
            <strong>PLACEHOLDER-approved-resin-rock-installer-badge</strong>
          </div>
        </div>

        <div className="home-proof__reviews">
          <Eyebrow>Customer Reviews</Eyebrow>

          <h2>Verified customer feedback will appear here.</h2>

          <p>
            {/* TODO[CONTENT]: Add only client-approved review text, reviewer attribution, and verified source details. */}
            Review content has not been supplied for implementation. This section remains a
            clearly marked placeholder until approved testimonials are available.
          </p>

          <PlaceholderVisual
            label="Approved review or certification supporting visual"
            assetName="PLACEHOLDER-review-or-certification.jpg"
            aspectRatio="wide"
          />
        </div>
      </Container>
    </section>
  );
}