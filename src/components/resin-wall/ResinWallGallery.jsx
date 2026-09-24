import { ArrowUpRight } from "lucide-react";

import Container from "../common/Container";
import PlaceholderVisual from "../common/PlaceholderVisual";
import SectionHeading from "../common/SectionHeading";
import { resinWallPage } from "../../data/resinWall";

const galleryPlaceholders = [
  {
    id: "resin-wall-gallery-01",
    label: "Vertical Binder project placeholder 01",
    assetName: "PLACEHOLDER-resin-wall-gallery-01.jpg",
    layout: "resin-wall-gallery__item--wide"
  },
  {
    id: "resin-wall-gallery-02",
    label: "Vertical Binder project placeholder 02",
    assetName: "PLACEHOLDER-resin-wall-gallery-02.jpg",
    layout: "resin-wall-gallery__item--tall"
  },
  {
    id: "resin-wall-gallery-03",
    label: "Vertical Binder project placeholder 03",
    assetName: "PLACEHOLDER-resin-wall-gallery-03.jpg",
    layout: "resin-wall-gallery__item--standard"
  },
  {
    id: "resin-wall-gallery-04",
    label: "Vertical Binder project placeholder 04",
    assetName: "PLACEHOLDER-resin-wall-gallery-04.jpg",
    layout: "resin-wall-gallery__item--standard"
  }
];

export default function ResinWallGallery() {
  const { gallery } = resinWallPage;

  return (
    <section className="resin-wall-gallery section">
      <SectionHeading
        eyebrow={gallery.eyebrow}
        title={gallery.title}
        description={gallery.description}
      />

      <Container>
        <div className="resin-wall-gallery__grid">
          {galleryPlaceholders.map((item) => (
            <article
              className={`resin-wall-gallery__item ${item.layout}`}
              key={item.id}
            >
              {/* TODO[ASSET]: Replace with approved Vertical Binder image and final descriptive alt text. */}
              <PlaceholderVisual
                label={item.label}
                assetName={item.assetName}
                aspectRatio="gallery"
              />

              <span className="resin-wall-gallery__meta">
                <span>Vertical Binder Placeholder</span>
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} />
              </span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}