import Container from "../common/Container";
import Eyebrow from "../common/Eyebrow";

export default function WisconsinDurability({ content }) {
  return (
    <section className="project-wisconsin-durability section">
      <Container className="project-wisconsin-durability__content">
        <Eyebrow>{content.eyebrow}</Eyebrow>

        <h2>{content.title}</h2>

        <p>{content.description}</p>
      </Container>
    </section>
  );
}