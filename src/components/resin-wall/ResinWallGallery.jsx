import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { resinWallPage } from "../../data/resinWall";

const galleryImages = [
  {
    id: "wall-pool",
    src: "/images/resin-wall-gallery-pool.jpg",
    alt: "Resin-bound pool surround around a curved residential swimming pool.",
    className: "resin-wall-gallery__item--wide"
  },
  {
    id: "wall-screened-patio",
    src: "/images/resin-wall-gallery-screened-patio.jpg",
    alt: "Dark speckled resin-bound surface in a screened outdoor living area.",
    className: "resin-wall-gallery__item--tall"
  },
  {
    id: "wall-patio",
    src: "/images/resin-wall-gallery-patio.jpg",
    alt: "Light-coloured resin-bound patio beside a screened residential outdoor area.",
    className: "resin-wall-gallery__item--standard"
  },
  {
    id: "wall-closeup",
    src: "/images/resin-wall-gallery-wall-closeup.jpg",
    alt: "Close view of a finished textured retaining-wall surface.",
    className: "resin-wall-gallery__item--standard"
  }
];

export default function ResinWallGallery() {
  const { gallery } = resinWallPage;

  return (
    <section className="resin-wall-gallery section">
      <Container>
        <SectionHeading
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          description={gallery.description}
        />

        <div className="resin-wall-gallery__grid">
          {galleryImages.map((image) => (
            <figure
              className={`resin-wall-gallery__item ${image.className}`}
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