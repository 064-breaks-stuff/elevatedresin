import { ArrowUpRight } from "lucide-react";

import Container from "../common/Container";
import PlaceholderVisual from "../common/PlaceholderVisual";
import SectionHeading from "../common/SectionHeading";
import { glowRockPage } from "../../data/glowRock";

const galleryPlaceholders = [
  {
    id: "glow-rock-gallery-01",
    label: "Glow Rock project placeholder 01",
    assetName: "PLACEHOLDER-glow-rock-gallery-01.jpg",
    layout: "glow-rock-gallery__item--wide"
  },
  {
    id: "glow-rock-gallery-02",
    label: "Glow Rock project placeholder 02",
    assetName: "PLACEHOLDER-glow-rock-gallery-02.jpg",
    layout: "glow-rock-gallery__item--tall"
  },
  {
    id: "glow-rock-gallery-03",
    label: "Glow Rock project placeholder 03",
    assetName: "PLACEHOLDER-glow-rock-gallery-03.jpg",
    layout: "glow-rock-gallery__item--standard"
  },
  {
    id: "glow-rock-gallery-04",
    label: "Glow Rock project placeholder 04",
    assetName: "PLACEHOLDER-glow-rock-gallery-04.jpg",
    layout: "glow-rock-gallery__item--standard"
  }
];

export default function GlowRockGallery() {
  const { gallery } = glowRockPage;

  return (
    <section className="glow-rock-gallery section">
      <SectionHeading
        eyebrow={gallery.eyebrow}
        title={gallery.title}
        description={gallery.description}
      />

      <Container>
        <div className="glow-rock-gallery__grid">
          {galleryPlaceholders.map((item) => (
            <article
              className={`glow-rock-gallery__item ${item.layout}`}
              key={item.id}
            >
              {/* TODO[ASSET]: Replace with approved Glow Rock project image and final descriptive alt text. */}
              <PlaceholderVisual
                label={item.label}
                assetName={item.assetName}
                aspectRatio="gallery"
              />

              <span className="glow-rock-gallery__meta">
                <span>Glow Rock Placeholder</span>
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} />
              </span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}