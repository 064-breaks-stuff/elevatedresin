import {
  Droplets,
  Layers3,
  Palette,
  ShieldCheck
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { aboutPage } from "../../data/aboutPage";

const approachIcons = [
  Palette,
  Droplets,
  Layers3,
  ShieldCheck
];

export default function AboutApproach() {
  const { approach } = aboutPage;

  return (
    <section className="about-approach section">
      <SectionHeading
        eyebrow={approach.eyebrow}
        title={approach.title}
      />

      <Container>
        <div className="about-approach__grid">
          {approach.points.map((point, index) => {
            const Icon = approachIcons[index];

            return (
              <article className="about-approach-card" key={point.title}>
                <span className="about-approach-card__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.8} />
                </span>

                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}