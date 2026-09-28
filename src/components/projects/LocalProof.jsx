import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function LocalProof({ proof }) {
  if (!proof.enabled) {
    return null;
  }

  return (
    <section className="project-local-proof section">
      <SectionHeading
        eyebrow={proof.eyebrow}
        title={proof.title}
        description={proof.description}
      />

      <Container>
        <div className="project-local-proof__grid">
          {proof.testimonials.map((testimonial) => (
            <blockquote key={testimonial.id}>
              <p>“{testimonial.quote}”</p>
              <footer>{testimonial.attribution}</footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}