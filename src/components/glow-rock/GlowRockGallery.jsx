import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { glowRockPage } from "../../data/glowRock";

const galleryImages = [
  {
    id: "glow-driveway-dusk",
    src: "/images/glow-rock-driveway-dusk.jpg",
    alt: "Blue-glowing geometric driveway pattern outside a residential property at dusk.",
    className: "glow-rock-gallery__item--wide"
  },
  {
    id: "glow-patio",
    src: "/images/glow-rock-hero.webp",
    alt: "Blue-glowing paving slabs across an outdoor patio at night.",
    className: "glow-rock-gallery__item--tall"
  },
  {
    id: "glow-path-border",
    src: "/images/glow-rock-path-border-night.jpg",
    alt: "Blue-glowing curved border around a paved residential entrance path at night.",
    className: "glow-rock-gallery__item--standard"
  },
  {
    id: "glow-edge",
    src: "/images/home-gallery-glow-rock-edge.jpeg",
    alt: "Pink glowing edge detail beside a landscaped stone bed at night.",
    className: "glow-rock-gallery__item--standard"
  }
];

export default function GlowRockGallery() {
  const { gallery } = glowRockPage;

  return (
    <section className="glow-rock-gallery section">
      <Container>
        <SectionHeading
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          description={gallery.description}
        />

        <div className="glow-rock-gallery__grid">
          {galleryImages.map((image) => (
            <figure
              className={`glow-rock-gallery__item ${image.className}`}
              key={image.id}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}