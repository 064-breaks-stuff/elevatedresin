import {
  Fence,
  Layers2,
  PanelsTopLeft,
  StepForward
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { resinWallPage } from "../../data/resinWall";

const applicationIcons = {
  Walls: Fence,
  Steps: StepForward,
  "Vertical Edges": Layers2,
  "Decorative Features": PanelsTopLeft
};

export default function ResinWallApplications() {
  return (
    <section className="resin-wall-applications section">
      <SectionHeading
        eyebrow="Suitable Applications"
        title="Use vertical stone surfacing where a continuous finish matters."
        description="Resin Rock Vertical Binder can be considered for suitable walls, steps, vertical edges, and selected decorative outdoor features."
      />

      <Container>
        <div className="resin-wall-applications__grid">
          {resinWallPage.applications.map((application) => {
            const Icon = applicationIcons[application.title];

            return (
              <article className="resin-wall-application-card" key={application.title}>
                <span className="resin-wall-application-card__icon" aria-hidden="true">
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