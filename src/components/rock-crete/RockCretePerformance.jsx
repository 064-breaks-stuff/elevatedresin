import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import PlaceholderVisual from "../common/PlaceholderVisual";
import { rockCretePage } from "../../data/rockCrete";

export default function RockCretePerformance() {
  const { performance, systemDiagram } = rockCretePage;

  return (
    <section className="rock-crete-performance section">
      <Container className="rock-crete-performance__stat">
        <div>
          <Eyebrow>Published System Performance</Eyebrow>

          <p className="rock-crete-performance__statistic">{performance.statistic}</p>

          <h2>{performance.title}</h2>

          <p>{performance.context}</p>
        </div>
      </Container>

      <Container className="rock-crete-performance__diagram">
        <div className="rock-crete-performance__diagram-copy">
          <Eyebrow>{systemDiagram.eyebrow}</Eyebrow>

          <h2>{systemDiagram.title}</h2>

          <p>{systemDiagram.description}</p>

          <div className="rock-crete-performance__text-equivalent">
            <p>System text equivalent</p>

            <ol>
              <li>Appropriate prepared base for the individual project</li>
              <li>Rock Crete non-UV binder course</li>
              <li>Resin-bound surface layer installed as part of the Resin Rock system</li>
            </ol>
          </div>
        </div>

        <div className="rock-crete-performance__diagram-visual">
          {/* TODO[ASSET]: Replace only with approved Rock Crete / Resin Rock system diagram. */}
          <PlaceholderVisual
            label="Approved Rock Crete system diagram"
            assetName="PLACEHOLDER-rock-crete-system-diagram.jpg"
            aspectRatio="feature"
          />
        </div>
      </Container>
    </section>
  );
}