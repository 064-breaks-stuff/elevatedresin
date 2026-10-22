import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import QuoteCTA from "../conversion/QuoteCTA";
import { comparisonRows } from "../../data/home";

export default function HomeComparison() {
  return (
    <section className="home-comparison section">
      <SectionHeading eyebrow="A Considered Surface Choice" title="Choose the surface for your property—not a blanket superiority claim." description="Compare appearance, existing construction, drainage, and care. Resin-bound stone is a decorative wearing surface supported by its base. Compare complete proposed work, not isolated strength numbers." />
      <Container>
        <div className="comparison-table-wrapper" role="region" aria-label="Surface comparison table" tabIndex={0}>
          <table className="comparison-table">
            <thead><tr><th scope="col">Consideration</th><th scope="col">Resin-bound system</th><th scope="col">Loose gravel</th><th scope="col">Pavers</th><th scope="col">Concrete options</th></tr></thead>
            <tbody>{comparisonRows.map((row) => <tr key={row.feature}><th scope="row">{row.feature}</th><td>{row.resinBound}</td><td>{row.looseGravel}</td><td>{row.pavers}</td><td>{row.concrete}</td></tr>)}</tbody>
          </table>
        </div>
        <div className="home-comparison__action"><QuoteCTA label="Request a Project Estimate" /></div>
      </Container>
    </section>
  );
}
