import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import BenefitCard from "../content/BenefitCard";
import { benefits } from "../../data/benefits";

export default function HomeBenefits() {
  return (
    <section className="home-benefits section">
      <SectionHeading
        eyebrow="Just Some of the Benefits"
        title="Refined appearance meets practical everyday performance."
        description="Resin-bound surfacing offers a decorative, seamless finish designed to bring together durability, drainage, and low-maintenance performance."
      />

      <Container>
        <div className="home-benefits__grid">
          {benefits.map((benefit) => (
            <BenefitCard title={benefit} key={benefit} />
          ))}
        </div>
      </Container>
    </section>
  );
}