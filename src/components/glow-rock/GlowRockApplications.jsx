import {
  Building2,
  Flower2,
  Home,
  Palmtree,
  Route,
  Waves
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { glowRockPage } from "../../data/glowRock";

const applicationIcons = {
  Driveways: Home,
  "Walkways & Pathways": Route,
  Patios: Palmtree,
  "Pool Areas": Waves,
  "Garden Features": Flower2,
  "Commercial Spaces": Building2
};

export default function GlowRockApplications() {
  return (
    <section className="glow-rock-applications section">
      <SectionHeading
        eyebrow="Suitable Applications"
        title="Glow Rock can bring a new dimension to outdoor spaces."
        description="Consider Glow Rock across selected resin-bound surfaces where a nighttime design detail and additional visibility are relevant."
      />

      <Container>
        <div className="glow-rock-applications__grid">
          {glowRockPage.applications.map((application) => {
            const Icon = applicationIcons[application.title];

            return (
              <article className="glow-rock-application-card" key={application.title}>
                <span className="glow-rock-application-card__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.8} />
                </span>

                <h3>{application.title}</h3>
                <p>{application.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}