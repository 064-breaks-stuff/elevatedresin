import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function DrainageBenefits({ content }) {
  return (
    <section className="project-drainage-benefits section">
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <Container>
        <ol className="project-drainage-benefits__steps">
          {content.steps.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}