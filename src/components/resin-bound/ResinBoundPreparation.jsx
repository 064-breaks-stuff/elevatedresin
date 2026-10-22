import { CheckCircle2 } from "lucide-react";
import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import { resinBoundPage } from "../../data/resinBound";

const considerations = [
  "Stable construction, compatible preparation, and required dryness",
  "Defined water route and suitable edges and transitions",
  "Assess movement; repair, replace, or redesign unsuitable areas",
  "Product-specific proportions, mixing, weather, and opening guidance"
];

export default function ResinBoundPreparation() {
  const { preparation } = resinBoundPage;
  return (
    <section className="resin-bound-preparation section">
      <Container className="resin-bound-preparation__grid">
        <div className="resin-bound-preparation__content">
          <Eyebrow>{preparation.eyebrow}</Eyebrow>
          <h2>{preparation.title}</h2>
          <div className="resin-bound-preparation__copy">
            {preparation.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <aside className="resin-bound-preparation__checklist" aria-label="Preparation considerations">
          <p className="resin-bound-preparation__checklist-label">Surface assessment considerations</p>
          <ul>
            {considerations.map((item) => (
              <li key={item}>
                <CheckCircle2 aria-hidden="true" size={20} strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </Container>
    </section>
  );
}
