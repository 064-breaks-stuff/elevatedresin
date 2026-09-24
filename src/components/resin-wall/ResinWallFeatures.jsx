import {
  Layers3,
  ShieldCheck,
  Sun,
  Waves,
  Wrench
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { resinWallPage } from "../../data/resinWall";

const featureIcons = [
  Sun,
  ShieldCheck,
  Waves,
  Wrench,
  Layers3
];

export default function ResinWallFeatures() {
  return (
    <section className="resin-wall-features section">
      <SectionHeading
        eyebrow="Key Features & Benefits"
        title="A vertical system designed for coordinated stone surfacing."
        description="Resin Rock Vertical Binder is designed to bring the natural stone appearance of resin-bound surfaces onto suitable vertical outdoor features."
      />

      <Container>
        <div className="resin-wall-features__grid">
          {resinWallPage.features.map((feature, index) => {
            const Icon = featureIcons[index];

            return (
              <article className="resin-wall-feature-card" key={feature.title}>
                <span className="resin-wall-feature-card__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.8} />
                </span>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}