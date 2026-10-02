import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import { rockCretePage } from "../../data/rockCrete";

export default function RockCreteFoundation() {
  const { foundation } = rockCretePage;

  return (
    <section className="rock-crete-foundation section">
      <Container className="rock-crete-foundation__grid">
        <div className="rock-crete-foundation__visual">
          <img
            src="/images/rock-crete-foundation-detail.jpg"
            alt="Water flowing through an aggregate sample during a permeability demonstration."
            loading="lazy"
          />
        </div>

        <div className="rock-crete-foundation__content">
          <Eyebrow>{foundation.eyebrow}</Eyebrow>

          <h2>{foundation.title}</h2>

          <div className="rock-crete-foundation__copy">
            {foundation.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}