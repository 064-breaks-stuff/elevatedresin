import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import PlaceholderVisual from "../common/PlaceholderVisual";
import SectionHeading from "../common/SectionHeading";
import { aboutPage } from "../../data/aboutPage";

const workmanshipPlaceholders = [
  {
    id: "about-workmanship-01",
    label: "Workmanship project placeholder 01",
    assetName: "PLACEHOLDER-about-workmanship-01.jpg",
    layout: "about-workmanship__item--wide"
  },
  {
    id: "about-workmanship-02",
    label: "Workmanship project placeholder 02",
    assetName: "PLACEHOLDER-about-workmanship-02.jpg",
    layout: "about-workmanship__item--tall"
  },
  {
    id: "about-workmanship-03",
    label: "Workmanship project placeholder 03",
    assetName: "PLACEHOLDER-about-workmanship-03.jpg",
    layout: "about-workmanship__item--standard"
  }
];

export default function AboutWorkmanship() {
  const { workmanship } = aboutPage;

  return (
    <section className="about-workmanship section">
      <SectionHeading
        eyebrow={workmanship.eyebrow}
        title={workmanship.title}
        description={workmanship.description}
      />

      <Container>
        <div className="about-workmanship__grid">
          {workmanshipPlaceholders.map((item) => (
            <article
              className={`about-workmanship__item ${item.layout}`}
              key={item.id}
            >
              {/* TODO[ASSET]: Replace with approved Elevated Resin Creations project image and final descriptive alt text. */}
              <PlaceholderVisual
                label={item.label}
                assetName={item.assetName}
                aspectRatio="gallery"
              />

              <span className="about-workmanship__meta">
                <span>Approved project asset required</span>
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} />
              </span>
            </article>
          ))}
        </div>

        <div className="about-workmanship__action">
          <Link className="button button--secondary" to="/projects">
            <span>Explore Projects</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}