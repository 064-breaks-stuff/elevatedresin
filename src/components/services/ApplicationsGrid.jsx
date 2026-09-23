import {
  Building2,
  Fence,
  Flower2,
  Home,
  Palmtree,
  Waves
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const applications = [
  {
    title: "Driveways",
    description:
      "Refined resin-bound driveway surfaces designed for everyday vehicle and pedestrian use.",
    icon: Home
  },
  {
    title: "Patios",
    description:
      "Decorative outdoor patio finishes that bring a seamless stone look to entertaining spaces.",
    icon: Palmtree
  },
  {
    title: "Walkways & Pathways",
    description:
      "Practical, slip-resistant surfaces for paths, walkways, garden routes, and outdoor connections.",
    icon: Flower2
  },
  {
    title: "Pool Surrounds",
    description:
      "Resin-bound surface options for pool areas and outdoor spaces where footing and drainage matter.",
    icon: Waves
  },
  {
    title: "Landscaped Areas",
    description:
      "Stone-and-resin finishes that complement gardens, borders, and broader landscape designs.",
    icon: Fence
  },
  {
    title: "Commercial Spaces",
    description:
      "Resin Rock systems suitable for practical and decorative outdoor commercial applications.",
    icon: Building2
  }
];

export default function ApplicationsGrid() {
  return (
    <section className="services-applications section">
      <SectionHeading
        eyebrow="Where Resin Rock Systems Can Be Used"
        title="Solutions for the outdoor spaces that matter most."
        description="Explore resin surfacing options for residential and commercial environments, from entrances and driveways to pathways, pool areas, and landscaped spaces."
      />

      <Container>
        <div className="services-applications__grid">
          {applications.map((application) => {
            const Icon = application.icon;

            return (
              <article className="application-card" key={application.title}>
                <span className="application-card__icon" aria-hidden="true">
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