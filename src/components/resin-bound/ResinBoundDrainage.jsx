import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import QuoteCTA from "../conversion/QuoteCTA";
import { resinBoundPage } from "../../data/resinBound";

export default function ResinBoundDrainage() {
  const { drainage } = resinBoundPage;

  return (
    <section className="resin-bound-drainage section">
      <Container className="resin-bound-drainage__grid">
        <div className="resin-bound-drainage__content">
          <Eyebrow>{drainage.eyebrow}</Eyebrow>

          <h2>{drainage.title}</h2>

          <div className="resin-bound-drainage__copy">
            {drainage.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <QuoteCTA label="Discuss Your Project" />
        </div>

        <div className="resin-bound-drainage__visual">
          <img
            src="/images/resin-bound-permeability-test.JPG"
            alt="Water flowing through a sample of resin-bound aggregate during a permeability demonstration."
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
}