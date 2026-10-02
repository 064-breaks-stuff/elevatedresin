import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import { resinBoundPage } from "../../data/resinBound";

export default function ResinBoundIntro() {
  const { introduction } = resinBoundPage;

  return (
    <section className="resin-bound-intro section">
      <Container className="resin-bound-intro__grid">
        <div className="resin-bound-intro__visual">
          <img
            src="/images/resin-bound-intro-surface.jpg"
            alt="Finished speckled resin-bound surface within a screened residential patio."
            loading="lazy"
          />
        </div>

        <div className="resin-bound-intro__content">
          <Eyebrow>{introduction.eyebrow}</Eyebrow>

          <h2>{introduction.title}</h2>

          <div className="resin-bound-intro__copy">
            {introduction.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}