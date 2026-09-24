import {
  CarFront,
  Clock3,
  Droplets,
  Leaf,
  MoveHorizontal,
  ShieldCheck
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { rockCretePage } from "../../data/rockCrete";

const benefitIcons = [
  Droplets,
  CarFront,
  Clock3,
  MoveHorizontal,
  ShieldCheck
];

export default function RockCreteBenefits() {
  return (
    <section className="rock-crete-benefits section">
      <SectionHeading
        eyebrow="Rock Crete Performance Benefits"
        title="A purpose-built foundation for appropriate resin-bound projects."
        description="Rock Crete is designed to support permeability, strength, flexibility, and efficient installation as part of the broader Resin Rock system."
      />

      <Container>
        <div className="rock-crete-benefits__grid">
          {rockCretePage.benefits.map((benefit, index) => {
            const Icon = benefitIcons[index] ?? Leaf;

            return (
              <article className="rock-crete-benefit-card" key={benefit.title}>
                <span className="rock-crete-benefit-card__icon" aria-hidden="true">
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