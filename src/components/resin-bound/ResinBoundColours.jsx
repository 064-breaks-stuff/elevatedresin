import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { resinBoundPage } from "../../data/resinBound";

export default function ResinBoundColours() {
  const { colours } = resinBoundPage;

  return (
    <section className="resin-bound-colours section">
      <Container>
        <SectionHeading
          eyebrow={colours.eyebrow}
          title={colours.title}
          description={colours.description}
        />

        <div className="resin-bound-colours__charts">
          <figure className="resin-bound-colours__chart">
            <img
              src="/images/resin-rock-colour-chart-vehicle-traffic.jpg"
              alt="Resin Rock colour chart for vehicle traffic, paths, and patios."
              loading="lazy"
            />
            <figcaption>
              Colour options for vehicle traffic, paths, and patios.
            </figcaption>
          </figure>

          <figure className="resin-bound-colours__chart">
            <img
              src="/images/resin-rock-colour-chart-primary.jpg"
              alt="Resin Rock primary colour chart for paths and patios."
              loading="lazy"
            />
            <figcaption>
              Primary colour options for paths and patios.
            </figcaption>
          </figure>
        </div>

        <p className="resin-bound-colours__disclaimer">
          Colours shown are from official Resin Rock charts. Final appearance can vary
          with material batch, lighting, surrounding finishes, and screen settings.
        </p>
      </Container>
    </section>
  );
}