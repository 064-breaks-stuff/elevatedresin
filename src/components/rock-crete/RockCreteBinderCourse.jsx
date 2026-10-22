import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import QuoteCTA from "../conversion/QuoteCTA";
import { rockCretePage } from "../../data/rockCrete";
import "../../styles/rock-crete-content.css";

export default function RockCreteBinderCourse() {
  const { binderCourse } = rockCretePage;
  return (
    <section className="rock-crete-binder-course section">
      <Container className="rock-crete-binder-course__grid">
        <div className="rock-crete-binder-course__content">
          <Eyebrow>{binderCourse.eyebrow}</Eyebrow>
          <h2>{binderCourse.title}</h2>
          <div className="rock-crete-binder-course__copy">
            {binderCourse.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <QuoteCTA label="Discuss Your Project" />
        </div>
        <aside className="rock-crete-content__scope" aria-labelledby="rock-crete-scope-title">
          <h3 id="rock-crete-scope-title">Confirm what your section includes</h3>
          <ul>
            <li>Existing construction retained or removed</li>
            <li>Ground preparation and supporting layers</li>
            <li>Specified products and project-dependent depths</li>
            <li>Intended traffic and concentrated loads</li>
            <li>Storage, infiltration, drainage, and overflow</li>
            <li>Opening, maintenance, and applicable written terms</li>
          </ul>
        </aside>
      </Container>
    </section>
  );
}
