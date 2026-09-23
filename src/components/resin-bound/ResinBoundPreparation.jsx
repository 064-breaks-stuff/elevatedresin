import { CheckCircle2 } from "lucide-react";

import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import { resinBoundPage } from "../../data/resinBound";

export default function ResinBoundPreparation() {
  const { preparation } = resinBoundPage;

  return (
    <section className="resin-bound-preparation section">
      <Container className="resin-bound-preparation__grid">
        <div className="resin-bound-preparation__content">
          <Eyebrow>{preparation.eyebrow}</Eyebrow>

          <h2>{preparation.title}</h2>

          <div className="resin-bound-preparation__copy">
            {preparation.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside className="resin-bound-preparation__checklist" aria-label="Preparation considerations">
          <p className="resin-bound-preparation__checklist-label">
            Surface assessment considerations
          </p>

          <ul>
            <li>
              <CheckCircle2 aria-hidden="true" size={20} strokeWidth={2} />
              <span>Stable, clean, properly prepared base</span>
            </li>
            <li>
              <CheckCircle2 aria-hidden="true" size={20} strokeWidth={2} />
              <span>Appropriate drainage and base condition</span>
            </li>
            <li>
              <CheckCircle2 aria-hidden="true" size={20} strokeWidth={2} />
              <span>Repair of weak, moving, or failing areas where needed</span>
            </li>
            <li>
              <CheckCircle2 aria-hidden="true" size={20} strokeWidth={2} />
              <span>Project-specific assessment before installation</span>
            </li>
          </ul>
        </aside>
      </Container>
    </section>
  );
}