import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function ProjectBenefits({ benefits }) {
  return (
    <section className="project-landing-benefits section">
      <SectionHeading
        eyebrow="Project Planning"
        title="Built around the complete outdoor project."
      />

      <Container>
        <div className="project-landing-benefits__grid">
          {benefits.map((benefit) => (
            <article
              className="project-landing-benefits__card"
              key={benefit.title}
            >
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}