import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function ProjectFAQs({ faqs }) {
  if (!faqs?.length) {
    return null;
  }

  return (
    <section className="project-faqs section">
      <SectionHeading
        eyebrow="Project Questions"
        title="Questions to consider before planning your project."
        description="Every site and system is different. A project assessment helps confirm the most suitable approach for your existing surface, drainage needs, intended use, and finish goals."
      />

      <Container>
        <div className="project-faqs__list">
          {faqs.map((faq) => (
            <details className="project-faqs__item" key={faq.id}>
              <summary>{faq.question}</summary>

              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}