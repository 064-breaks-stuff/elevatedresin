import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { processSteps } from "../../data/home";

export default function HomeProcess() {
  return (
    <section className="home-process section">
      <SectionHeading
        eyebrow="A Clear Way Forward"
        title="From your first enquiry to a transformed outdoor space."
        description="The process begins with the details that matter for your project, then moves toward the right resin surfacing solution."
      />

      <Container>
        <ol className="home-process__list">
          {processSteps.map((step) => (
            <li className="home-process__item" key={step.number}>
              <span className="home-process__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}