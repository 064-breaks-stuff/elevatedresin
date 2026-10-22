import { Droplets, Palette, ShieldCheck, Sparkles, Sun, Waves } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { resinBoundPage } from "../../data/resinBound";

const benefitIcons = [Sparkles, ShieldCheck, Droplets, Waves, Palette, Sun];

export default function ResinBoundBenefits() {
  return (
    <section className="resin-bound-benefits section">
      <SectionHeading
        eyebrow="Key Benefits"
        title="Stone appearance, bound aggregate, and project-specific construction."
        description="Compare the design possibilities and practical role of the finish, then confirm the supporting base, water route, and care requirements for your own project."
      />
      <Container>
        <div className="resin-bound-benefits__grid">
          {resinBoundPage.benefits.map((benefit, index) => {
            const Icon = benefitIcons[index] || Sparkles;
            return (
              <article className="resin-bound-benefit-card" key={benefit.title}>
                <span className="resin-bound-benefit-card__icon" aria-hidden="true"><Icon size={22} strokeWidth={1.8} /></span>
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
