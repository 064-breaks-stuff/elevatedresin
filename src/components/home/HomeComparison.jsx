import Container from "../common/Container";
import QuoteCTA from "../conversion/QuoteCTA";
import {
  resinPerformanceStats,
  resinPerformanceSources
} from "../../data/resinPerformance";
import "../../styles/resin-performance.css";

function formatMetric(stat) {
  const prefix = stat.value.startsWith("Up to ") ? "Up to" : "";
  const remainder = prefix ? stat.value.slice(6) : stat.value;
  const suffix = remainder.match(/\s+(psi|lb|days)$/);
  return {
    prefix,
    number: suffix ? remainder.slice(0, suffix.index) : remainder,
    unit: stat.unit || (suffix ? suffix[1] : "")
  };
}

export default function HomeComparison() {
  return (
    <section className="resin-performance section" aria-labelledby="resin-performance-title">
      <Container>
        <header className="resin-performance__heading">
          <p className="resin-performance__eyebrow">The Resin Rock Advantage</p>
          <h2 id="resin-performance-title" className="resin-performance__title">
            <span>Natural stone.</span>{" "}
            <span>Standout numbers.</span>
          </h2>
          <p className="resin-performance__intro">
            Explore a coordinated stone finish with strength, efficient placement,
            and plenty of design choice. These are Resin Rock’s
            manufacturer-published system figures.
          </p>
        </header>

        <ul className="resin-performance__grid" aria-label="Six Resin Rock performance and design statistics">
          {resinPerformanceStats.map((stat) => {
            const metric = formatMetric(stat);
            return (
              <li className="resin-performance__card" key={stat.id}>
                <div className="resin-performance__metric">
                  <span className="resin-performance__prefix">
                    {metric.prefix || "\u00a0"}
                  </span>{" "}
                  <span className="resin-performance__value">{metric.number}</span>{" "}
                  <span className="resin-performance__unit">
                    {metric.unit || "\u00a0"}
                  </span>
                </div>
                <h3 className="resin-performance__label">{stat.label}</h3>
                <p className="resin-performance__description">{stat.description}</p>
              </li>
            );
          })}
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
