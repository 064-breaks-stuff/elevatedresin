import { Building2, House } from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { aboutPage } from "../../data/aboutPage";

const audienceCards = [
  {
    title: "Homeowners",
    description:
      "Explore resin-bound solutions for driveways, patios, pathways, pool areas, gardens, steps, walls, and other residential outdoor features.",
    icon: House
  },
  {
    title: "Building & Commercial Property Owners",
    description:
      "Consider Resin Rock systems for appropriate commercial outdoor spaces, entrances, paths, surfacing details, and related exterior features.",
    icon: Building2
  }
];

export default function AboutAudience() {
  const { audience } = aboutPage;

  return (
    <section className="about-audience section">
      <SectionHeading
        eyebrow={audience.eyebrow}
        title={audience.title}
        description={audience.description}
      />

      <Container>
        <div className="about-audience__grid">
          {audienceCards.map((card) => {
            const Icon = card.icon;

            return (
              <article className="about-audience-card" key={card.title}>
                <span className="about-audience-card__icon" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.8} />
                </span>

                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}