import { BadgeCheck } from "lucide-react";

import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import PlaceholderVisual from "../common/PlaceholderVisual";
import { aboutPage } from "../../data/aboutPage";

export default function AboutCredential() {
  const { credential } = aboutPage;

  return (
    <section className="about-credential section">
      <Container className="about-credential__grid">
        <div className="about-credential__content">
          <Eyebrow>{credential.eyebrow}</Eyebrow>

          <h2>{credential.title}</h2>

          <p>{credential.description}</p>

          <div className="about-credential__badge-notice">
            <BadgeCheck aria-hidden="true" size={24} strokeWidth={1.8} />

            <span>
              {/* TODO[ASSET]: Replace with approved Approved Resin Rock Installer badge or credential asset. */}
              Approved credential asset required before production launch.
            </span>
          </div>
        </div>

        <div className="about-credential__visual">
          {/* TODO[ASSET]: Replace with approved installer credential or official Resin Rock supporting asset. */}
          <PlaceholderVisual
            label="Approved Resin Rock Installer credential"
            assetName="PLACEHOLDER-approved-resin-rock-installer-credential.jpg"
            aspectRatio="square"
          />
        </div>
      </Container>
    </section>
  );
}