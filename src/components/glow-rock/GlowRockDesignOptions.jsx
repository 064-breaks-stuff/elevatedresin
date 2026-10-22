import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { glowRockPage } from "../../data/glowRock";

export default function GlowRockDesignOptions() {
  const { designOptions } = glowRockPage;
  return (
    <section className="glow-rock-design-options section">
      <Container>
        <SectionHeading eyebrow={designOptions.eyebrow} title={designOptions.title} description={designOptions.description} />
        <div className="glow-rock-design-options__grid">
          <figure className="glow-rock-design-options__card">
            <img src="/images/glow-rock-design-options-glow-stones.png" alt="Glow Stone product features showing available sizes, colours, and applications." loading="lazy" />
            <figcaption>Glow Stone product reference: confirm the exact format, current data, and proposed use.</figcaption>
          </figure>
          <figure className="glow-rock-design-options__card">
            <img src="/images/glow-rock-design-options-discovery-combo.png" alt="Glow Path Discovery Combo pavers showing multiple sizes, textures, colours, and laying patterns." loading="lazy" />
            <figcaption>Discovery Combo manufactured paving reference: not the same format as loose glow aggregate.</figcaption>
          </figure>
        </div>
        <p className="glow-rock-design-options__disclaimer">Manufacturer sheets are product references, not evidence of installed brightness, duration, safety, or compatibility with every surface. Confirm current availability and the exact proposed specification.</p>
      </Container>
    </section>
  );
}
