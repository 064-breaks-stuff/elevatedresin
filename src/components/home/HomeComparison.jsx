import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import QuoteCTA from "../conversion/QuoteCTA";
import {
  resinPerformanceStats,
  resinPerformanceSources
} from "../../data/resinPerformance";
import "../../styles/resin-performance.css";

export default function HomeComparison() {
  return (
    <section className="resin-performance section">
      <SectionHeading
        eyebrow="The Resin Rock Advantage"
        title="Natural stone. Standout numbers."
        description="Explore a coordinated stone finish with strength, efficient placement, and plenty of design choice. These are Resin Rock’s manufacturer-published system figures."
      />
      <Container>
        <ul className="resin-performance__grid" aria-label="Six Resin Rock performance and design statistics">
          {resinPerformanceStats.map((stat) => (
            <li className="resin-performance__card" key={stat.id}>
              <p className="resin-performance__value">{stat.value}</p>
              {stat.unit ? <p className="resin-performance__unit">{stat.unit}</p> : null}
              <h3 className="resin-performance__label">{stat.label}</h3>
              <p className="resin-performance__description">{stat.description}</p>
            </li>
          ))}
        </ul>
        <div className="resin-performance__footer">
          <div className="resin-performance__copy">
            <h3>Bring the stone finish and the right construction together.</h3>
            <p>Compare blends, borders, and the scope for your driveway with
              Elevated Resin Creations.</p>
          </div>
          <QuoteCTA label="Request My Driveway Estimate" />
        </div>
        <p className="resin-performance__note">
          Figures published by Resin Rock. Applicable system, supporting
          construction, loading, installation conditions, and care requirements
          apply. Placement output is not total project duration or an opening-time
          promise. The strength comparison is not a comparison with concrete.
        </p>
        <details className="resin-performance__sources">
          <summary>Manufacturer sources</summary>
          <ul>
            {resinPerformanceSources.map((source) => (
              <li key={source.id}>
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </Container>
    </section>
  );
}
