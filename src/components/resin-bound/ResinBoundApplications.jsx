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
import { resinBoundPage } from "../../data/resinBound";

const applicationIcons = {
  Driveways: Home,
  Patios: Palmtree,
  "Walkways & Pathways": Route,
  "Pool Areas": Waves,
  "Landscaped Spaces": Flower2,
  "Commercial Areas": Building2
};

export default function ResinBoundApplications() {
  return (
    <section className="resin-bound-applications section">
      <SectionHeading
        eyebrow="Applications"
        title="Designed for the outdoor areas you use every day."
        description="Resin-bound surfacing can be considered for a wide range of residential and commercial outdoor spaces."
      />

      <Container>
        <div className="resin-bound-applications__grid">
          {resinBoundPage.applications.map((application) => {
            const Icon = applicationIcons[application.title];

            return (
              <article className="resin-bound-application-card" key={application.title}>
                <span className="resin-bound-application-card__icon" aria-hidden="true">
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