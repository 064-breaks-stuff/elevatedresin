import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import PlaceholderVisual from "../common/PlaceholderVisual";
import QuoteCTA from "../conversion/QuoteCTA";
import { glowRockPage } from "../../data/glowRock";

const optionPlaceholders = [
  {
    label: "Glow Rock product option placeholder 01",
    assetName: "PLACEHOLDER-glow-rock-option-01.jpg"
  },
  {
    label: "Glow Rock product option placeholder 02",
    assetName: "PLACEHOLDER-glow-rock-option-02.jpg"
  },
  {
    label: "Glow Rock product option placeholder 03",
    assetName: "PLACEHOLDER-glow-rock-option-03.jpg"
  }
];

export default function GlowRockDesignOptions() {
  const { designOptions } = glowRockPage;

  return (
    <section className="glow-rock-design-options section">
      <Container className="glow-rock-design-options__grid">
        <div className="glow-rock-design-options__content">
          <Eyebrow>{designOptions.eyebrow}</Eyebrow>

          <h2>{designOptions.title}</h2>

          <p>{designOptions.description}</p>

          <div className="glow-rock-design-options__notice">
            {/* TODO[ASSET]: Replace only with approved Glow Rock product-line imagery and verified labels. */}
            <strong>Approved product assets required.</strong>
            <span>
              Replace these placeholders only with approved product imagery and
              exact product names supplied by Elevated Resin Creations.
            </span>
          </div>

          <QuoteCTA label="Discuss Your Project" />
        </div>

        <div className="glow-rock-design-options__visuals">
          {optionPlaceholders.map((option) => (
            <div className="glow-rock-design-options__visual" key={option.assetName}>
              <PlaceholderVisual
                label={option.label}
                assetName={option.assetName}
                aspectRatio="square"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}