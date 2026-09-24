import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import QuoteCTA from "../conversion/QuoteCTA";
import { rockCretePage } from "../../data/rockCrete";

export default function RockCreteBinderCourse() {
  const { binderCourse } = rockCretePage;

  return (
    <section className="rock-crete-binder-course section">
      <Container className="rock-crete-binder-course__grid">
        <div className="rock-crete-binder-course__content">
          <Eyebrow>{binderCourse.eyebrow}</Eyebrow>

          <h2>{binderCourse.title}</h2>

          <div className="rock-crete-binder-course__copy">
            {binderCourse.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <QuoteCTA label="Discuss Your Project" />
        </div>

        <aside
          className="rock-crete-binder-course__stat"
          aria-label="Published Rock Crete system strength statistic"
        >
          <p>{binderCourse.statistic}</p>
          <span>{binderCourse.statisticLabel}</span>
          <small>
            Published Resin Rock system specification. Not a guarantee of individual
            project results.
          </small>
        </aside>
      </Container>
    </section>
  );
}