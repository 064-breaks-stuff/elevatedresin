import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import PlaceholderVisual from "../common/PlaceholderVisual";
import { glowRockPage } from "../../data/glowRock";

export default function GlowRockHowItWorks() {
  const { introduction, howItWorks } = glowRockPage;

  return (
    <section className="glow-rock-how-it-works section">
      <Container className="glow-rock-how-it-works__intro">
        <div className="glow-rock-how-it-works__copy">
          <Eyebrow>{introduction.eyebrow}</Eyebrow>

          <h2>{introduction.title}</h2>

          <div className="glow-rock-how-it-works__paragraphs">
            {introduction.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="glow-rock-how-it-works__visual">
          {/* TODO[ASSET]: Replace with approved day-to-night Glow Rock image pair or approved project visual. */}
          <PlaceholderVisual
            label="Glow Rock daylight-to-night visual"
            assetName="PLACEHOLDER-glow-rock-day-to-night.jpg"
            aspectRatio="feature"
          />
        </div>
      </Container>

      <Container className="glow-rock-how-it-works__steps-wrapper">
        <div className="glow-rock-how-it-works__heading">
          <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
          <h2>{howItWorks.title}</h2>
        </div>

        <ol className="glow-rock-how-it-works__steps">
          {howItWorks.steps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}