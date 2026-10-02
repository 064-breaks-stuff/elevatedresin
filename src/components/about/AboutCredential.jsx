import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";
import { aboutPage } from "../../data/aboutPage.js";

export default function AboutCredential() {
  const { credential } = aboutPage;

  return (
    <section className="about-credential section">
      <Container className="about-credential__grid">
        <div className="about-credential__content">
          <Eyebrow>{credential.eyebrow}</Eyebrow>

          <h2>{credential.title}</h2>

          <p>{credential.description}</p>

          <p className="about-credential__status">
            Elevated Resin Creations is an approved installer of Resin Rock systems.
          </p>
        </div>

        <div className="about-credential__visual">
          <img
            src="/images/resin-rock-approved-installer-badge.jpg"
            alt="Resin Rock authorized partner badge."
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
}