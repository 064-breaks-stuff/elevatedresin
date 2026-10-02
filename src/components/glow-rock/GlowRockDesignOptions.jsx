import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { glowRockPage } from "../../data/glowRock";

export default function GlowRockDesignOptions() {
  const { designOptions } = glowRockPage;

  return (
    <section className="glow-rock-design-options section">
      <Container>
        <SectionHeading
          eyebrow={designOptions.eyebrow}
          title={designOptions.title}
          description={designOptions.description}
        />

        <div className="glow-rock-design-options__grid">
          <figure className="glow-rock-design-options__card">
            <img
              src="/images/glow-rock-design-options-glow-stones.jpg"
              alt="Glow Stone product features showing available sizes, colours, and applications."
              loading="lazy"
            />
            <figcaption>
              Glow Stone options for illuminated aggregate and decorative surface applications.
            </figcaption>
          </figure>

          <figure className="glow-rock-design-options__card">
            <img
              src="/images/glow-rock-design-options-discovery-combo.jpg"
              alt="Glow Path Discovery Combo pavers showing multiple sizes, textures, colours, and laying patterns."
              loading="lazy"
            />
            <figcaption>
              Glow Path Discovery Combo paver options for creative pathway, patio, and driveway designs.
            </figcaption>
          </figure>
        </div>

        <p className="glow-rock-design-options__disclaimer">
          Product availability, colours, formats, and specifications are subject to
          manufacturer availability and project requirements.
        </p>
      </Container>
    </section>
  );
}