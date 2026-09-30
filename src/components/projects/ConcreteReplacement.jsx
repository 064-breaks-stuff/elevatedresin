import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";

export default function ConcreteReplacement({ content }) {
  if (!content) {
    return null;
  }

  return (
    <section className="project-concrete-replacement section">
      <Container className="project-concrete-replacement__content">
        <Eyebrow>{content.eyebrow}</Eyebrow>

        <h2>{content.title}</h2>

        <p>{content.description}</p>
      </Container>
    </section>
  );
}