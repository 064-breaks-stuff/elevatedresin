import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";

export default function ValueProposition({ content }) {
  if (!content) {
    return null;
  }

  return (
    <section className="project-value-proposition section">
      <Container className="project-value-proposition__content">
        <Eyebrow>{content.eyebrow}</Eyebrow>

        <h2>{content.title}</h2>

        <p>{content.description}</p>
      </Container>
    </section>
  );
}