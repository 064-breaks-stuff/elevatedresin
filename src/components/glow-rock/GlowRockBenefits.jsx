import {
  BatteryCharging,
  Eye,
  Lightbulb,
  Palette,
  ShieldCheck,
  Sparkles
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { glowRockPage } from "../../data/glowRock";

const benefitIcons = [
  Eye,
  ShieldCheck,
  Sparkles,
  BatteryCharging,
  Lightbulb,
  Palette
];

export default function GlowRockBenefits() {
  return (
    <section className="glow-rock-benefits section">
      <SectionHeading
        eyebrow="Glow Rock Benefits"
        title="Beauty with a practical after-dark purpose."
        description="Glow Rock brings together a distinctive design feature, soft nighttime visibility, and the familiar advantages of a Resin Rock surface system."
      />

      <Container>
        <div className="glow-rock-benefits__grid">
          {glowRockPage.benefits.map((benefit, index) => {
            const Icon = benefitIcons[index];

            return (
              <article className="glow-rock-benefit-card" key={benefit.title}>
                <span className="glow-rock-benefit-card__icon" aria-hidden="true">
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