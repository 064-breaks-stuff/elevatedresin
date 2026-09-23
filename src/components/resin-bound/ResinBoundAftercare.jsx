import { Clock3, Footprints, Sparkles, Truck } from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { resinBoundPage } from "../../data/resinBound";

const aftercareIcons = [Clock3, Footprints, Truck, Sparkles];

export default function ResinBoundAftercare() {
  const { aftercare } = resinBoundPage;

  return (
    <section className="resin-bound-aftercare section">
      <SectionHeading
        eyebrow={aftercare.eyebrow}
        title={aftercare.title}
        description="Every project has its own site conditions. Elevated Resin Creations will provide relevant guidance for your finished surface."
      />

      <Container>
        <div className="resin-bound-aftercare__grid">
          {aftercare.items.map((item, index) => {
            const Icon = aftercareIcons[index];

            return (
              <article className="resin-bound-aftercare-card" key={item.title}>
                <span className="resin-bound-aftercare-card__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.8} />
                </span>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}