import {
  Droplets,
  Palette,
  ShieldCheck,
  Sparkles,
  Sun,
  Waves
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { resinBoundPage } from "../../data/resinBound";

const benefitIcons = [
  Sparkles,
  ShieldCheck,
  Droplets,
  Waves,
  Palette,
  Sun
];

export default function ResinBoundBenefits() {
  return (
    <section className="resin-bound-benefits section">
      <SectionHeading
        eyebrow="Key Benefits"
        title="Built around appearance, comfort, and practical surface performance."
        description="Resin Bound brings together source-approved Resin Rock system benefits for outdoor spaces where a refined finish and everyday performance both matter."
      />

      <Container>
        <div className="resin-bound-benefits__grid">
          {resinBoundPage.benefits.map((benefit, index) => {
            const Icon = benefitIcons[index];

            return (
              <article className="resin-bound-benefit-card" key={benefit.title}>
                <span className="resin-bound-benefit-card__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.8} />
                </span>

                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}