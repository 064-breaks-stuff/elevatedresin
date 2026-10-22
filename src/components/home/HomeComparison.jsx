import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import QuoteCTA from "../conversion/QuoteCTA";
import {
  drivewayComparisonColumns,
  drivewayComparisonRows,
  drivewayComparisonSources
} from "../../data/drivewayComparison";
import "../../styles/driveway-comparison.css";

export default function HomeComparison() {
  return (
    <section className="home-comparison section">
      <SectionHeading
        eyebrow="Residential Driveways: The Numbers"
        title="Compare the investment. Choose the finish for your home."
        description="Explore published driveway price ranges, service-life guidance, and vehicle-opening times. These are national planning references, not Wisconsin quotes or guaranteed project results."
      />
      <Container>
        <p className="driveway-comparison__scope" id="driveway-comparison-scope">
          Scope matters: the resin price is for resurfacing a sound existing slab;
          the other prices describe general driveway installations. These are not
          like-for-like quotations. Paver figures represent common residential
          options; service life and opening guidance refer to concrete pavers.
          Concrete figures represent conventional poured concrete, not every
          decorative or pervious system.
        </p>
        <div
          className="comparison-table-wrapper"
          role="region"
          aria-label="Residential driveway numerical comparison"
          tabIndex={0}
        >
          <table
            className="comparison-table"
            aria-describedby="driveway-comparison-scope driveway-comparison-notes"
          >
            <thead>
              <tr>
                <th scope="col">Consideration</th>
                {drivewayComparisonColumns.map((column) => (
                  <th scope="col" key={column.key}>{column.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {drivewayComparisonRows.map((row) => (
                <tr key={row.feature}>
                  <th scope="row">{row.feature}</th>
                  {drivewayComparisonColumns.map((column) => {
                    const item = row[column.key];
                    return (
                      <td key={column.key}>
                        <span>{item.value}</span>
                        <sup className="driveway-comparison__references">
                          {item.sources.map((id, index) => (
                            <span key={id}>
                              {index > 0 ? "," : ""}
                              <a
                                href={`#driveway-comparison-source-${id}`}
                                aria-label={`Source ${id} for ${row.feature}, ${column.label}`}
                              >{id}</a>
                            </span>
                          ))}
                        </sup>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="driveway-comparison__notes" id="driveway-comparison-notes">
          <p>The 600 sq. ft. budgets are arithmetic illustrations: published unit
            rates multiplied by 600, not independent quotes. Confirm preparation,
            removal, drainage, edging, access, tax, and other charges in the actual
            proposal. Premium finishes and difficult sites can exceed these ranges.</p>
          <p>Service-life figures are published guidance, not warranties or
            predictions for your property. Resin Rock supplies the resin figure;
            the paver figure is contractor guidance. All depend on construction,
            use, exposure, and care. *Angi describes gravel lasting for decades;
            20+ years expresses that description, with continued replenishment and
            regrading, not the life of an untouched original installation.</p>
          <p>†Opening figures are planning guidance, not permission to use a new
            surface. Resin Rock publishes 24–48 hours on the cited page, while its
            other guidance can differ. Product, weather, preparation, and the
            installer’s actual release govern. ‡Zero curing hours means no binder
            curing wait for loose gravel or a completed dry-laid paver system;
            compaction, joints, edges, and all construction must be finished first.
            None of these figures is total project duration.</p>
          <details className="driveway-comparison__sources">
            <summary>View the published sources</summary>
            <ol>
              {drivewayComparisonSources.map((source) => (
                <li key={source.id} id={`driveway-comparison-source-${source.id}`}>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.label}
                  </a>
                </li>
              ))}
            </ol>
            <p>Source review: October 22, 2026. Published estimates and supplier or
              contractor claims are not independent tests of an Elevated Resin
              Creations installation.</p>
          </details>
        </div>
        <div className="home-comparison__action">
          <QuoteCTA label="Request My Driveway Estimate" />
        </div>
      </Container>
    </section>
  );
}
