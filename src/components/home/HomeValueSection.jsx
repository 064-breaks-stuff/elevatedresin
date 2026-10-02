import Button from "../common/Button";
import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import { resinBoundValue } from "../../data/home";

export default function HomeValueSection() {
  return (
    <section className="home-value section">
      <Container className="home-value__grid">
        <div className="home-value__visual">
          <img
            src="/images/home-resin-bound-landscape-path.png"
            alt="Curved light-coloured resin-bound path through landscaped garden beds."
            loading="lazy"
          />
        </div>

        <div className="home-value__content">
          <Eyebrow>{resinBoundValue.eyebrow}</Eyebrow>

          <h2>{resinBoundValue.title}</h2>

          <div className="home-value__copy">
            {resinBoundValue.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Button to={resinBoundValue.cta.to} variant="secondary" showArrow>
            {resinBoundValue.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}