import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { aboutPage } from "../../data/aboutPage.js";

const workmanshipImages = [
  {
    id: "pool",
    src: "/images/about-workmanship-pool.jpg",
    alt: "Resin-bound pool surround around a curved residential swimming pool.",
    className: "about-workmanship__item--wide"
  },
  {
    id: "screened-patio",
    src: "/images/about-workmanship-screened-patio.jpg",
    alt: "Dark speckled resin-bound surface in a screened outdoor living area.",
    className: "about-workmanship__item--tall"
  },
  {
    id: "glow-driveway",
    src: "/images/about-workmanship-glow-driveway.jpg",
    alt: "Blue-glowing geometric driveway pattern outside a residential property at dusk.",
    className: "about-workmanship__item--standard"
  }
];

export default function AboutWorkmanship() {
  const { workmanship } = aboutPage;

  return (
    <section className="about-workmanship section">
      <Container>
        <SectionHeading
          eyebrow={workmanship.eyebrow}
          title={workmanship.title}
          description={workmanship.description}
        />

        <div className="about-workmanship__grid">
          {workmanshipImages.map((image) => (
            <figure
              className={`about-workmanship__item ${image.className}`}
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