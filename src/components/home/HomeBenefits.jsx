import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { homeBenefitItems } from "../../data/home";

export default function HomeBenefits() {
  return (
    <section className="home-benefits section">
      <SectionHeading eyebrow="Why Consider Resin-Bound Stone?" title="Bring appearance, everyday use, and construction into one plan." description="Explore a textured natural-stone finish, coordinated details, and resurfacing opportunities—then confirm the preparation and drainage appropriate to your property." />
      <Container>
        <div className="home-benefits__grid">
          {homeBenefitItems.map((benefit) => <article className="home-benefits__qualified-card" key={benefit.title}><h3>{benefit.title}</h3><p>{benefit.description}</p></article>)}
        </div>
      </Container>
    </section>
  );
}
