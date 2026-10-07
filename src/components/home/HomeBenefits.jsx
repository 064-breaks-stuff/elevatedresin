import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { homeBenefitItems } from "../../data/home";

export default function HomeBenefits() {
  return (
    <section className="home-benefits section">
      <SectionHeading
        eyebrow="Appearance and Project Fit"
        title="Choose the finish with the whole project in mind."
        description="Explore design possibilities alongside the construction, drainage, intended use, and care requirements of the actual system proposed."
      />

      <Container>
        <div className="home-benefits__grid">
          {homeBenefitItems.map((benefit) => (
            <article
              className="home-benefits__qualified-card"
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