import {
  Building2,
  CarFront,
  Home,
  Sparkles
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { rockCretePage } from "../../data/rockCrete";

const applicationIcons = {
  "Driveway Foundations": CarFront,
  "Residential Surfaces": Home,
  "Commercial Surfaces": Building2,
  "Glow Rock Pairing": Sparkles
};

export default function RockCreteApplications() {
  return (
    <section className="rock-crete-applications section">
      <SectionHeading
        eyebrow="Suitable Applications"
        title="A system foundation for surfaces with different performance needs."
        description="Rock Crete may be considered for appropriate residential and commercial resin-bound projects, depending on the space, intended use, and required preparation."
      />

      <Container>
        <div className="rock-crete-applications__grid">
          {rockCretePage.applications.map((application) => {
            const Icon = applicationIcons[application.title];

            return (
              <article className="rock-crete-application-card" key={application.title}>
                <span className="rock-crete-application-card__icon" aria-hidden="true">
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