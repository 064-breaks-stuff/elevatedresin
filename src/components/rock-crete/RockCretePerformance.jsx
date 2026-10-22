import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import { rockCretePage } from "../../data/rockCrete";
import "../../styles/rock-crete-content.css";

const roles = [
  { title: "Decorative wearing course", text: "The resin-bound aggregate finish selected for appearance and intended use." },
  { title: "Approved supporting course", text: "Rock Crete or another approved supporting construction selected for the actual project." },
  { title: "Reservoir and water route", text: "Storage aggregate and any required underdrain, liner, overflow, or outlet within the design." },
  { title: "Prepared ground", text: "Subgrade and infiltration suitability assessed alongside loading and drainage." }
];

export default function RockCretePerformance() {
  const { performance, systemDiagram } = rockCretePage;
  return (
    <section className="rock-crete-performance rock-crete-content section" aria-labelledby="rock-crete-section-title">
      <Container>
        <div className="rock-crete-content__intro">
          <Eyebrow>Project-Specific Section</Eyebrow>
          <h2 id="rock-crete-section-title">{performance.title}</h2>
          <p>{performance.context}</p>
        </div>
        <div className="rock-crete-content__overview">
          <div className="rock-crete-content__intro">
            <Eyebrow>{systemDiagram.eyebrow}</Eyebrow>
            <h2>{systemDiagram.title}</h2>
            <p>{systemDiagram.description}</p>
          </div>
          <ol className="rock-crete-content__layers" aria-label="Conceptual construction roles, surface to ground">
            {roles.map((role, index) => (
              <li key={role.title}>
                <span className="rock-crete-content__number" aria-hidden="true">{index + 1}</span>
                <div><h3>{role.title}</h3><p>{role.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
